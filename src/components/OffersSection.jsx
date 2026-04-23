"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Settings, Bot, TrendingUp, ArrowRight, Check } from "lucide-react";

const offers = [
  {
    icon: Search,
    title: "Diagnostic Gratuit",
    description: "On analyse vos process actuels et on identifie exactement où vous perdez du temps et de l'argent. Vous repartez avec un plan d'action concret, sans engagement.",
    features: ["Cartographie de vos tâches chronophages", "Identification des gains rapides", "Plan d'action personnalisé"],
    cta: "Demander mon diagnostic",
    highlight: true
  },
  {
    icon: Settings,
    title: "Automatisation sur mesure",
    description: "Vos devis partent automatiquement, vos relances se font seules, vos données se synchronisent sans intervention. Vous vous concentrez sur votre métier.",
    features: ["Relances clients automatiques", "Devis et facturation simplifiés", "Synchronisation de vos outils existants"],
    cta: "Quelques exemples concrets",
    ctaLink: "/catalogue"
  },
  {
    icon: Bot,
    title: "Agent IA sur votre site",
    description: "Un assistant intelligent répond à vos prospects 24h/24, qualifie leurs demandes et vous transmet uniquement les contacts sérieux. Fini les appels perdus.",
    features: ["Disponible 24h/24, 7j/7", "Qualification automatique des leads", "Transfert vers vous des demandes prioritaires"],
    cta: "En savoir plus"
  },
  {
    icon: TrendingUp,
    title: "Suivi & Optimisation",
    description: "On ne disparaît pas après la mise en place. On suit vos performances chaque mois et on améliore en continu pour que vos automatisations travaillent toujours mieux.",
    features: ["Rapport mensuel clair et lisible", "Ajustements en continu", "Support réactif inclus"],
    cta: "En savoir plus"
  }
];

export const OffersSection = ({ onSelectOffer }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="offres" 
      className="relative py-24 md:py-32 bg-[#050505]"
      data-testid="offers-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-nikaia font-semibold mb-4 block">
            Nos offres
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Des solutions orientées résultats
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Chaque offre est conçue pour générer un ROI mesurable et rapide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-neutral-900/50 border rounded-2xl p-8 card-hover ${
                offer.highlight 
                  ? "border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.15)]" 
                  : "border-white/10"
              }`}
              data-testid={`offer-card-${index}`}
            >
              {offer.highlight && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-red-500 rounded-full text-xs font-medium text-white">
                  Recommandé
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                <offer.icon className="w-6 h-6 text-red-500" />
              </div>
              
              <h3 className="text-2xl font-medium text-white mb-3">
                {offer.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {offer.description}
              </p>

              <ul className="space-y-3 mb-8">
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-nikaia flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {offer.ctaLink ? (
                <a
                  href={offer.ctaLink}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-all duration-200 ${
                    offer.highlight
                      ? "bg-red-600 hover:bg-red-700 text-white glow-red-hover"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                  data-testid={`offer-cta-${index}`}
                >
                  {offer.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => onSelectOffer(offer.title)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-all duration-200 ${
                    offer.highlight
                      ? "bg-red-600 hover:bg-red-700 text-white glow-red-hover"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                  data-testid={`offer-cta-${index}`}
                >
                  {offer.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;