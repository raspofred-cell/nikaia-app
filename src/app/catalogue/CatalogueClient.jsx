"use client";
import { useState } from "react";

const categories = [
  {
    title: "Visibilité & présence digitale",
    items: [
      "Création et optimisation fiche Google Business",
      "Site vitrine + chatbot + formulaire devis",
      "Publication réseaux sociaux automatique après chantier",
    ]
  },
  {
    title: "Commercial & prospection",
    items: [
      "Pipeline prospect — suivi contacts, statuts, relances",
      "Relance automatique de devis sans réponse",
      "Demande d'avis Google après fin de chantier",
      "Confirmation de RDV par WhatsApp / SMS",
      "Relance clients existants (entretien, nouveau projet)",
      "Veille appels d'offres publics (BOAMP)",
      "Réponse aux appels d'offres — veille, alerte, pré-remplissage dossier",
    ]
  },
  {
    title: "Devis & facturation",
    items: [
      "Devis depuis smartphone — formulaire mobile + PDF + envoi client",
      "Assistant devis Telegram — saisie smartphone + PDF + envoi client",
      "Calcul de marge automatique sur devis",
      "Assistant facturation Telegram — déclenchée après chantier",
      "Rappel facture impayée (J+7, J+15, J+30)",
      "Situations de travaux — facturation partielle sur chantiers longs",
      "Conformité facturation électronique 2027",
      "Pré-remplissage déclaration TVA pour le comptable",
    ]
  },
  {
    title: "Gestion de chantier",
    items: [
      "Assistant chantier Telegram — rapport depuis smartphone",
      "Rapport de chantier quotidien (photos + résumé → client)",
      "Mise à jour automatique du statut chantier côté client",
      "Compte rendu de réunion de chantier — saisie Telegram + envoi",
      "Suivi avancement par phase (fondations, élévation, toiture…)",
      "Alerte météo chantier — notification équipe + client",
      "Planning livraison matériaux — alerte si retard fournisseur",
    ]
  },
  {
    title: "Pilotage & finances",
    items: [
      "Tableau de bord dirigeant — devis, chantiers, factures, marge en temps réel",
      "Suivi des heures par chantier — écart heures devisées vs réelles",
    ]
  },
  {
    title: "Gestion administrative & RH",
    items: [
      "Base salariés — fiche complète, congés, AT/AM, validation manager",
      "Planning équipe hebdomadaire — génération et envoi automatique",
      "Onboarding nouveau client — documents, prochaines étapes",
      "Suivi habilitations salariés (CACES, élec…) + rappel renouvellement",
      "Rappel échéances assurances (décennale, RC pro)",
      "Rappel renouvellement certifications (RGE, Qualibat…)",
      "Gestion sous-traitants — contrats, situations, paiements",
    ]
  },
  {
    title: "Gestion documentaire",
    items: [
      "Classement automatique documents Drive — tri, renommage, classement",
      "Tri automatique emails — analyse IA, labels, rapport journalier",
    ]
  },
  {
    title: "Après-vente & conformité légale",
    items: [
      "Suivi garanties légales par chantier (parfait achèvement, biennale, décennale)",
      "Gestion des réclamations SAV — réception, suivi, clôture",
      "Suivi SAV après intervention",
    ]
  },
  {
    title: "Spécifiques par corps de métier",
    items: [
      "Plombier — Gestion interventions urgence 24h/24",
      "Plombier — Rappel entretien chaudière annuel",
      "Électricien — Suivi dossier Consuel",
      "Électricien — Envoi automatique rapport de conformité",
      "Maçon — Planning livraison matériaux",
      "Peintre — Envoi photos avant/après au client",
      "Menuisier — Confirmation de pose + réception chantier signée",
    ]
  },
];

export default function CatalogueClient() {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-5xl mx-auto px-6 py-32">
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#de0917' }}>
          Catalogue · BTP · Artisans · PACA
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Catalogue d'automatisations
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-16">
          50+ automatisations conçues pour les artisans et PME du bâtiment à Nice et en région PACA.
        </p>

        <div className="flex flex-col gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenCategory(openCategory === index ? null : index)}
                className="w-full flex items-center justify-between px-8 py-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white">{cat.title}</span>
                <span className="text-gray-500 text-sm ml-4">
                  {cat.items.length} automatisation{cat.items.length > 1 ? "s" : ""} {openCategory === index ? "▲" : "▼"}
                </span>
              </button>

              {openCategory === index && (
                <div className="border-t border-white/10">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center px-8 py-4 border-b border-white/5 last:border-0">
                      <span className="text-gray-300 text-sm">→ {item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-neutral-900/50 border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Vous ne trouvez pas ce qu'il vous faut ?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Ce catalogue n'est pas exhaustif. Chaque process métier peut être automatisé — contactez-nous pour en discuter.
          </p>
          <a href="/" className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium text-lg" style={{ backgroundColor: '#de0917' }}>Demander mon diagnostic gratuit</a>
        </div>
      </div>
    </div>
  );
}