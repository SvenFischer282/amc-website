import React, { useEffect, useState } from "react";

const COOKIE_NAME = "amc_cookie_consent";

type ConsentValue = "accepted" | "rejected" | null;

function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_NAME);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

function setConsent(value: ConsentValue) {
  if (typeof window === "undefined" || !value) return;
  localStorage.setItem(COOKIE_NAME, value);
}

export function CookieConsent({
  onConsentChange,
}: {
  onConsentChange?: (consent: ConsentValue) => void;
}) {
  const [consent, setConsentState] = useState<ConsentValue>(getConsent());

  useEffect(() => {
    if (consent) {
      setConsent(consent);
      if (onConsentChange) onConsentChange(consent);
    }
    // eslint-disable-next-line
  }, [consent]);

  if (consent) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#222",
        color: "#fff",
        padding: "1rem",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ maxWidth: 600, textAlign: "center", marginBottom: 8 }}>
        This website uses analytics cookies to collect non-personal data (page
        views, visit duration, referral sources) to improve your experience. No
        personal data is collected. <br />
        You can accept or reject analytics cookies.{" "}
        <a href="/privacy" style={{ color: "#aaf" }}>
          Learn more
        </a>
        .
      </div>
      <div>
        <button
          style={{
            marginRight: 8,
            padding: "0.5rem 1.5rem",
            background: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
          onClick={() => setConsentState("accepted")}
        >
          Accept
        </button>
        <button
          style={{
            padding: "0.5rem 1.5rem",
            background: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
          onClick={() => setConsentState("rejected")}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export function useCookieConsent(): ConsentValue {
  const [consent, setConsentState] = useState<ConsentValue>(getConsent());
  useEffect(() => {
    const handler = () => setConsentState(getConsent());
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);
  return consent;
}
