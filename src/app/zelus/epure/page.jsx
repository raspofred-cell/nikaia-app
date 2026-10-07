import EpureClient from "./EpureClient";

export const metadata = {
  title: "Zelus — Le bureau tient dans une conversation | NikaIA Automations",
  description: "Zelus, l'outil de gestion commerciale des artisans du bâtiment : devis depuis Telegram, signature en ligne, factures, relances, chantiers, tableau de bord. Version épurée.",
  robots: { index: false },
};

export default function Page() {
  return <EpureClient />;
}
