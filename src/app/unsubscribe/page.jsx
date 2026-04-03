"use client";

import { useState } from "react";
import Link from "next/link";

export default function UnsubscribePage() {
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const handleUnsubscribe = async () => {
    setStatus("loading");
    // Simule une action async (tu peux brancher une API n8n ici)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("done");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
        fontFamily: "'Montserrat', Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          backgroundColor: "#111111",
          borderTop: "3px solid #de0917",
          borderRadius: "8px",
          padding: "48px 40px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "inline-block", marginBottom: "32px" }}>
          <img
            src="/logo-nikaia.png"
            alt="NikaIA Automations"
            width="160"
            style={{ display: "block", border: 0 }}
          />
        </Link>

        {status !== "done" ? (
          <>
            {/* Icône */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: "2px solid #de0917",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px auto",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="#de0917"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h1
              style={{
                margin: "0 0 12px 0",
                fontSize: "22px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.3,
              }}
            >
              Se désinscrire de nos communications
            </h1>

            <p
              style={{
                margin: "0 0 32px 0",
                fontSize: "14px",
                fontWeight: 300,
                color: "#888888",
                lineHeight: 1.8,
              }}
            >
              En confirmant, vous ne recevrez plus nos emails de prospection.
              <br />
              Votre adresse sera retirée de notre liste sous 48h.
            </p>

            <button
              onClick={handleUnsubscribe}
              disabled={status === "loading"}
              style={{
                display: "inline-block",
                padding: "13px 32px",
                backgroundColor: status === "loading" ? "#444" : "#de0917",
                color: "#ffffff",
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "6px",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "background 0.2s",
              }}
            >
              {status === "loading" ? "Traitement…" : "Confirmer la désinscription"}
            </button>

            <p style={{ marginTop: "24px", fontSize: "12px", color: "#444444" }}>
              <Link
                href="/"
                style={{ color: "#de0917", textDecoration: "none", fontWeight: 600 }}
              >
                ← Retour au site
              </Link>
            </p>
          </>
        ) : (
          <>
            {/* Confirmation */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: "2px solid #de0917",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px auto",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#de0917"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1
              style={{
                margin: "0 0 12px 0",
                fontSize: "22px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.3,
              }}
            >
              Vous êtes désinscrit(e)
            </h1>

            <p
              style={{
                margin: "0 0 32px 0",
                fontSize: "14px",
                fontWeight: 300,
                color: "#888888",
                lineHeight: 1.8,
              }}
            >
              Votre demande a bien été prise en compte.
              <br />
              Vous ne recevrez plus d'emails de notre part.
            </p>

            <p style={{ fontSize: "12px", color: "#444444" }}>
              <Link
                href="/"
                style={{ color: "#de0917", textDecoration: "none", fontWeight: 600 }}
              >
                ← Retour au site
              </Link>
            </p>
          </>
        )}
      </div>
    </main>
  );
}
