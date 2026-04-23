"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Calendar, ArrowRight, Clock, CheckCircle } from "lucide-react";

const cases = [
  {
    icon: FileText,
    sector: "Fermetures industrielles · Nice",
    title: "Rapports de chantier automatisés",
    problem: "En fin de journée, les techniciens devaient rentrer au bureau pour rédiger leurs rapports sur Word, quand le temps le permettait. Sinon, ça s'accumulait sur le bureau de l'assistante.",
    solution: "Un assistant sur Telegram guide le technicien depuis le chantier : sélection du client, observations, photos. Le rapport PDF est généré par IA et envoyé par email en automatique au responsable de chantier qui peut valider et faire générer la facture.",
    results: [
      { label: "Temps de rédaction", before: "1 heure", after: "2 min" },
      { label: "Rapports envoyés le jour même", before: "40%", after: "100%" },
    ],
    tag: "Terrain & Chantier"
  },
  {
    icon: Calendar,
    sector: "Entreprise d'Électricité · Alpes-Maritimes",
    title: "Devis et relances automatisés",
    problem: "Les devis partaient en retard, les relances clients se faisaient à la main, les bons d'intervention restaient sur papier.",
    solution: "Un workflow automatisé génère le devis depuis le terrain, l'envoie au client dès la fin de l'intervention et déclenche une relance automatique à J+3 sans réponse.",
    results: [
      { label: "Délai d'envoi du devis", before: "48h", after: "2h" },
      { label: "Relances oubliées", before: "Fréquentes", after: "Zéro" },
    ],
    tag: "Devis & Suivi client"
  }
];

export const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 md:py-32 bg-[#050505]"
      data-testid="case-studies-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-red-nikaia font-semibold mb-4 block">
            Projets réalisés
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Des automatisations<br />qui tournent en production
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deux exemples concrets réalisés pour des entreprises de la région PACA.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, index) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8 flex flex-col gap-6 card-hover"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-red-500 font-medium">
                    {c.tag}
                  </span>
                  <p className="text-gray-500 text-sm mt-1">{c.sector}</p>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-white">
                {c.title}
              </h3>

              {/* Problem */}
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Le problème</p>
                <p className="text-gray-400 leading-relaxed text-sm">{c.problem}</p>
                {c.problemExtra && <p className="text-gray-400 leading-relaxed text-sm mt-2">{c.problemExtra}</p>}
              </div>

              {/* Solution */}
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">La solution</p>
                <p className="text-gray-400 leading-relaxed text-sm">{c.solution}</p>
              </div>

              {/* Results */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Résultats</p>
                <div className="flex flex-col gap-3">
                  {c.results.map((r, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{r.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-600 text-sm line-through">{r.before}</span>
                        <ArrowRight className="w-3 h-3 text-gray-600" />
                        <span className="text-green-400 text-sm font-medium">{r.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-10"
        >
          Votre secteur n'est pas listé ? Chaque automatisation est construite sur mesure.
        </motion.p>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
