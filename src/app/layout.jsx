import "./globals.css";
import Script from "next/script";
import CookieConsentWrapper from "../components/CookieConsentWrapper";

export const metadata ={
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
  images: [
    {
      url: "https://www.nikaia-automations.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "NikaIA Automations - Automatisation & IA pour PME à Nice",
    },
  ],
},
};
export default function RootLayout({ children }) {
  return (
<html lang="fr" className="dark">
  <body>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-1Q5GTZ4SJ4"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1Q5GTZ4SJ4');
      `}
    </Script>
    <CookieConsentWrapper />
    {children}
  </body>
</html>
  );
}
