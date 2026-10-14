// Public identifiers copied from the Google Ads event snippet on 2026-10-14.
export const ADS_ID = "AW-18132639252";
export const LEAD_DESTINATION = `${ADS_ID}/cKbyCIaqzZwdEJS8qMZD`;
export const CONSENT_KEY = "ecoruim.ads-consent.v1";
const CONSENT_LIFETIME = 180 * 24 * 60 * 60 * 1000;
const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
};

// Injected browser boundary makes consent and delivery testable without Google requests.
export function createAdsTracking(browser) {
  let choice = null;
  let initialized = false;
  let configured = false;
  let script = null;
  const recorded = new Set();
  const isProduction = () => ["ecoruim.be", "www.ecoruim.be"].includes(browser.location.hostname);

  function readConsent() {
    try {
      const saved = JSON.parse(browser.localStorage.getItem(CONSENT_KEY));
      if (saved && ["granted", "denied"].includes(saved.choice) &&
          Number.isFinite(saved.savedAt) && saved.savedAt <= Date.now() &&
          Date.now() - saved.savedAt < CONSENT_LIFETIME) return saved.choice;
    } catch { /* Private browsing/storage restrictions must not break the form. */ }
    return null;
  }

  function command(...args) {
    browser.gtag(...args);
  }

  function initialize() {
    if (initialized) return;
    initialized = true;
    choice = readConsent();
    if (!isProduction()) return;
    browser.dataLayer = browser.dataLayer || [];
    browser.gtag = browser.gtag || function () { browser.dataLayer.push(arguments); };
    command("consent", "default", { ...DENIED });
    command("set", "ads_data_redaction", true);
    if (choice === "granted") enable();
  }

  function enable() {
    if (!isProduction()) return;
    command("consent", "update", { ...DENIED, ad_storage: "granted", ad_user_data: "granted" });
    if (!configured) {
      command("js", new Date());
      command("config", ADS_ID, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      configured = true;
    }
    if (!script) {
      script = browser.document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
      script.id = "ecoruim-google-tag";
      script.onerror = () => { script?.remove(); script = null; };
      browser.document.head.appendChild(script);
    }
  }

  function setConsent(next) {
    if (!["granted", "denied"].includes(next)) throw new Error("Invalid consent choice");
    initialize();
    choice = next;
    try {
      browser.localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, savedAt: Date.now() }));
    } catch { /* The in-memory choice remains valid for this page. */ }
    if (!isProduction()) return;
    if (choice === "granted") enable();
    else {
      command("consent", "update", { ...DENIED });
      // Do not send queued successes if consent is granted at a later time.
      for (const name of browser.document.cookie.split(";").map(item => item.trim().split("=")[0])) {
        if (!name.startsWith("_gcl_")) continue;
        for (const domain of ["", "; domain=ecoruim.be", "; domain=.ecoruim.be", "; domain=www.ecoruim.be"]) {
          browser.document.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax`;
        }
      }
    }
  }

  function trackSuccessfulLead(transactionId) {
    try {
      initialize();
      if (!isProduction() || choice !== "granted" || !transactionId || recorded.has(transactionId)) return false;
      enable();
      command("event", "conversion", {
        send_to: LEAD_DESTINATION,
        transaction_id: transactionId,
        // No name, email, telephone, message or other form fields are sent to Google.
      });
      recorded.add(transactionId);
      return true;
    } catch {
      // A blocked tag must never turn a successfully sent message into a form error.
      return false;
    }
  }

  return { initialize, setConsent, trackSuccessfulLead, getConsent: () => { initialize(); return choice; } };
}

let tracker;
export function getAdsTracking() {
  if (!tracker) tracker = createAdsTracking(window);
  return tracker;
}
