import "./globals.css";
import CookieConsentWrapper from "../src/components/CookieConsentWrapper";

export const metadata = {
  title: "NikaIA | Automatisations & IA pour PME à Nice",
  description: "Agence d'automatisation et d'intelligence artificielle basée à Nice. NikaIA aide les PME et artisans de la région PACA à transformer leurs tâches répétitives en revenus.",
  keywords: "automatisation IA Nice, agence n8n PACA, automatisation PME, intelligence artificielle artisans, NikaIA",
  openGraph: {
    title: "NikaIA | Automatisations & IA pour PME à Nice",
    description: "Transformez vos tâches répétitives en revenus. Agence d'automatisation IA à Nice.",
    url: "https://www.nikaia-automations.com",
    siteName: "NikaIA Automations",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <body>
        <CookieConsentWrapper />
        {children}
      </body>
    </html>
  );
}