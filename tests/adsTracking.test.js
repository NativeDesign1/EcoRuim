import { describe, it, expect, vi } from "vitest";
import { createAdsTracking, CONSENT_KEY, LEAD_DESTINATION } from "../src/lib/adsTracking";

function setup(hostname = "www.ecoruim.be", saved) {
  const values = new Map(saved ? [[CONSENT_KEY, JSON.stringify(saved)]] : []);
  const scripts = [];
  const browser = {
    location: { hostname },
    localStorage: {
      getItem: key => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
    },
    document: {
      cookie: "",
      createElement: () => ({ remove: vi.fn() }),
      head: { appendChild: script => scripts.push(script) },
    },
  };
  const tracker = createAdsTracking(browser);
  const events = () => (browser.dataLayer || []).map(args => Array.from(args));
  const conversions = () => events().filter(args => args[0] === "event");
  return { browser, tracker, scripts, events, conversions, values };
}

describe("Google Ads consent and successful-lead delivery", () => {
  it("defaults to denied and does not load Google or queue leads without consent", () => {
    const s = setup();
    expect(s.tracker.getConsent()).toBeNull();
    expect(s.tracker.trackSuccessfulLead("lead-1")).toBe(false);
    expect(s.scripts).toHaveLength(0);
    expect(s.conversions()).toHaveLength(0);
    expect(s.events()[0]).toEqual(["consent", "default", {
      ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied",
    }]);
  });

  it("keeps rejection functional without any Google script", () => {
    const s = setup();
    s.tracker.setConsent("denied");
    expect(s.tracker.trackSuccessfulLead("lead-1")).toBe(false);
    expect(s.scripts).toHaveLength(0);
  });

  it("loads once after consent and deduplicates with a non-personal transaction ID", () => {
    const s = setup();
    s.tracker.setConsent("granted");
    s.tracker.initialize();
    expect(s.tracker.trackSuccessfulLead("random-uuid")).toBe(true);
    expect(s.tracker.trackSuccessfulLead("random-uuid")).toBe(false);
    expect(s.scripts).toHaveLength(1);
    expect(s.conversions()).toEqual([["event", "conversion", {
      send_to: LEAD_DESTINATION, transaction_id: "random-uuid",
    }]]);
    expect(s.events().filter(args => args[0] === "config")).toHaveLength(1);
  });

  it("does not replay a lead submitted before consent", () => {
    const s = setup();
    s.tracker.trackSuccessfulLead("before-consent");
    s.tracker.setConsent("granted");
    expect(s.conversions()).toHaveLength(0);
  });

  it("stops new conversions when consent is withdrawn", () => {
    const s = setup();
    s.tracker.setConsent("granted");
    s.tracker.setConsent("denied");
    expect(s.tracker.trackSuccessfulLead("lead-1")).toBe(false);
    expect(s.events().at(-1)[2].ad_storage).toBe("denied");
  });

  it("restores valid consent", () => {
    const s = setup("ecoruim.be", { choice: "granted", savedAt: Date.now() });
    expect(s.tracker.getConsent()).toBe("granted");
    expect(s.scripts).toHaveLength(1);
  });

  it.each([
    { choice: "granted", savedAt: 0 },
    { choice: "granted", savedAt: Date.now() + 100000 },
    { choice: "maybe", savedAt: Date.now() },
  ])("does not accept stale or invalid stored consent: %j", saved => {
    const s = setup("ecoruim.be", saved);
    expect(s.tracker.getConsent()).toBeNull();
    expect(s.scripts).toHaveLength(0);
  });

  it.each(["localhost", "127.0.0.1", "ecoruim-preview.vercel.app", "ecoruim.be.example.org"])("never sends production conversions from %s", host => {
    const s = setup(host);
    s.tracker.setConsent("granted");
    expect(s.tracker.trackSuccessfulLead("lead-1")).toBe(false);
    expect(s.scripts).toHaveLength(0);
    expect(s.events()).toHaveLength(0);
  });

  it("survives unavailable browser storage", () => {
    const s = setup();
    s.browser.localStorage.getItem = () => { throw new Error("blocked"); };
    s.browser.localStorage.setItem = () => { throw new Error("blocked"); };
    s.tracker.setConsent("granted");
    expect(s.tracker.trackSuccessfulLead("lead-1")).toBe(true);
  });

  it("returns safely when tracking itself throws", () => {
    const s = setup();
    s.tracker.setConsent("granted");
    s.browser.gtag = () => { throw new Error("blocked"); };
    expect(s.tracker.trackSuccessfulLead("lead-1")).toBe(false);
  });
});
