import CatalogueClient from "./CatalogueClient";

export const metadata = {
  title: "Catalogue d'automatisations BTP — NikaIA Automations",
  description: "Découvrez toutes les automatisations disponibles pour les artisans et PME du bâtiment à Nice et en région PACA.",
  keywords: "catalogue automatisation BTP, automatisation artisan Nice, devis automatique, rapport chantier, NikaIA",
};

export default function Catalogue() {
  return <CatalogueClient />;
}