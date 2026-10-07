import ZelusClient from "./ZelusClient";

export const metadata = {
  title: "Zelus — Devis, factures et chantiers depuis Telegram | NikaIA Automations",
  description: "Zelus, l'outil de gestion commerciale des artisans du bâtiment : devis sur le chantier depuis Telegram, signature en ligne, factures et relances automatiques, programmation des chantiers et tableau de bord. Conçu à Nice par NikaIA Automations.",
  keywords: "logiciel devis artisan, devis Telegram, facture électronique artisan, gestion chantier, devis syndic copropriété, Zelus, NikaIA",
  openGraph: {
    title: "Zelus — Votre activité, depuis Telegram",
    description: "Devis, signature, factures, relances, chantiers et tableau de bord : tout se gère depuis Telegram.",
    url: "https://www.nikaia-automations.com/zelus",
    siteName: "NikaIA Automations",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://www.nikaia-automations.com/zelus/zelus-bandeau-telegram.png", width: 2000, height: 800, alt: "Zelus — Votre activité, depuis Telegram" }],
  },
};

export default function Page() {
  return <ZelusClient />;
}
