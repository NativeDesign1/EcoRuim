import React, { useEffect, useState } from "react";
import { CONSENT_KEY, getAdsTracking } from "../lib/adsTracking";

export function MeasurementConsent() {
  const [open, setOpen] = useState(() => getAdsTracking().getConsent() === null);

  useEffect(() => {
    const sync = (event) => {
      if (event.key !== CONSENT_KEY && event.key !== null) return;
      // Reload only on a choice changed in another tab, never while choosing here.
      // This prevents continuing to measure with a withdrawn consent in this tab.
      window.location.reload();
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const choose = (choice) => {
    getAdsTracking().setConsent(choice);
    setOpen(false);
  };

  if (!open) return (
    <button type="button" onClick={() => setOpen(true)}
      className="fixed bottom-3 left-3 z-50 rounded-lg border border-gray-400 bg-white px-3 py-2 text-sm text-[#0c3065] shadow-md">
      Cookiekeuze
    </button>
  );

  return (
    <section aria-label="Keuze voor advertentiemeting"
      className="fixed bottom-0 inset-x-0 z-50 border-t border-gray-300 bg-white p-5 shadow-lg">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-bold text-[#0c3065]">Mogen we onze advertenties meten?</h2>
        <p className="mt-2 text-sm text-gray-700">
          Met uw toestemming gebruikt EcoRuim Google Ads-cookies om te meten welke advertenties
          tot een verzonden contactaanvraag leiden. Google ontvangt daarbij technische gegevens,
          zoals uw IP-adres en advertentieklikgegevens, maar niet de inhoud van uw formulier.
          We gebruiken deze keuze niet voor gepersonaliseerde advertenties.
          Zonder toestemming kunt u de website en het contactformulier gewoon gebruiken.
        </p>
        <details className="mt-2 text-sm text-gray-700">
          <summary className="cursor-pointer underline">Meer over deze keuze</summary>
          <p className="mt-2">
            We bewaren uw keuze maximaal 180 dagen in uw browser. U kunt die altijd wijzigen
            via ‘Cookiekeuze’. Advertentiecookies worden door Google beheerd.
            Lees ook <a className="underline" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">hoe Google gegevens gebruikt</a>.
            Vragen? Mail <a className="underline" href="mailto:info@ecoruim.be">info@ecoruim.be</a>.
          </p>
        </details>
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={() => choose("denied")}
            className="rounded-lg border border-[#0c3065] px-5 py-2 font-medium text-[#0c3065]">Niet toestaan</button>
          <button type="button" onClick={() => choose("granted")}
            className="rounded-lg border border-[#0c3065] px-5 py-2 font-medium text-[#0c3065]">Toestaan</button>
        </div>
      </div>
    </section>
  );
}
