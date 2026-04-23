"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Workflow, BarChart3, Zap } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Assistant IA pour vos clients",
    description: "Un agent IA répond à vos prospects 24h/24 depuis votre site ou WhatsApp. Il qualifie les demandes et vous transmet uniquement les contacts sérieux — même la nuit et le week-end.",
    color: "red"
  },
  {
    icon: Workflow,
    title: "Automatisation de vos process",
    description: "Devis, relances, rapports d'intervention, plannings — on connecte vos outils existants et on automatise les tâches répétitives qui vous font perdre du temps chaque jour à Nice et en région PACA.",
    color: "red"
  },
  {
    icon: BarChart3,
    title: "Tableaux de bord sur mesure",
    description: "Visualisez en temps réel l'activité de votre entreprise : chantiers en cours, suivi des paiements, performance commerciale. Des données claires pour prendre les bonnes décisions.",
    color: "red"
  },
  {
    icon: Zap,
    title: "De la prospection à la facturation",
    description: "On automatise l'intégralité de votre cycle client : lead entrant, qualification, devis, relance, suivi chantier, facturation. Chaque étape devient fluide, traçable et sans intervention manuelle.",
    color: "red"
  }
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="solutions" 
      className="relative py-24 md:py-32 bg-[#0A0A0A]"
      data-testid="solution-section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nikaia-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-nikaia font-semibold mb-4 block">
            La solution
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Votre Machine à Conversion
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des automatisations concrètes pour les PME et artisans de Nice et du 06, adaptées à votre métier, pas à une idée générique de votre métier.
          </p>
        </motion.div>

        {/* Solutions Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8"
        >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-nikaia-500/10 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-7 h-7 text-nikaia-500" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                    {solution.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    {solution.description}
                  </p>
                </div>

              </div>
            </motion.div>
         ))}
         </div>
      </div>
    </section>
  );
};

export default SolutionSection;
