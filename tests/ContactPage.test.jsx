import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { ContactPage } from "../src/screens/ContactPage/ContactPage";
import emailjs from "@emailjs/browser";
import { getAdsTracking } from "../src/lib/adsTracking";

vi.mock("@emailjs/browser", () => ({ default: { send: vi.fn() } }));
vi.mock("../src/components/Layout", () => ({ Layout: ({ children }) => <main>{children}</main> }));
vi.mock("../src/lib/adsTracking", () => ({ getAdsTracking: vi.fn() }));

const track = vi.fn();
beforeEach(() => {
  vi.clearAllMocks();
  getAdsTracking.mockReturnValue({ trackSuccessfulLead: track });
});
afterEach(cleanup);

function form() {
  render(<HelmetProvider><ContactPage /></HelmetProvider>);
  fireEvent.change(screen.getByLabelText("Naam *"), { target: { value: "Test" } });
  fireEvent.change(screen.getByLabelText("E-mail *"), { target: { value: "test@example.com" } });
  fireEvent.change(screen.getByLabelText("Telefoon *"), { target: { value: "0000000000" } });
  fireEvent.change(screen.getByLabelText("Bericht *"), { target: { value: "Local automated test; no email sent" } });
  return screen.getByRole("button", { name: "Verstuur Bericht" }).closest("form");
}

describe("contact form delivery boundary", () => {
  it("does not send or track an invalid form", () => {
    const element = form();
    fireEvent.change(screen.getByLabelText("E-mail *"), { target: { value: "invalid" } });
    fireEvent.submit(element);
    expect(emailjs.send).not.toHaveBeenCalled();
    expect(track).not.toHaveBeenCalled();
  });

  it("waits for successful EmailJS acceptance and guards double submission", async () => {
    let confirm;
    emailjs.send.mockReturnValue(new Promise(resolve => { confirm = resolve; }));
    const element = form();
    fireEvent.submit(element);
    fireEvent.submit(element);
    expect(emailjs.send).toHaveBeenCalledTimes(1);
    expect(track).not.toHaveBeenCalled();
    await act(async () => confirm({ status: 200, text: "OK" }));
    expect(screen.getByRole("status").textContent).toContain("succesvol verzonden");
    expect(track).toHaveBeenCalledTimes(1);
    expect(track.mock.calls[0]).toHaveLength(1);
    expect(track.mock.calls[0][0]).toMatch(/^[a-f0-9-]{36}$/);
    expect(screen.getByLabelText("E-mail *").value).toBe("");
  });

  it("does not track a rejected send and preserves the customer's message", async () => {
    emailjs.send.mockRejectedValue(new Error("EmailJS unavailable"));
    fireEvent.submit(form());
    await waitFor(() => expect(screen.getByRole("alert")).toBeTruthy());
    expect(track).not.toHaveBeenCalled();
    expect(screen.getByLabelText("E-mail *").value).toBe("test@example.com");
  });

  it("does not count an unconfirmed/non-200 result", async () => {
    emailjs.send.mockResolvedValue({ status: 400 });
    fireEvent.submit(form());
    await waitFor(() => expect(screen.getByRole("alert")).toBeTruthy());
    expect(track).not.toHaveBeenCalled();
  });

  it("still shows delivery success when the tracker fails", async () => {
    emailjs.send.mockResolvedValue({ status: 200 });
    track.mockImplementationOnce(() => { throw new Error("blocked Google tag"); });
    fireEvent.submit(form());
    await waitFor(() => expect(screen.getByRole("status")).toBeTruthy());
    expect(screen.queryByRole("alert")).toBeNull();
    expect(emailjs.send).toHaveBeenCalledTimes(1);
  });
});
