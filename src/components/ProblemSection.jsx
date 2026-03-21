"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, AlertTriangle, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Perte de temps",
    description: "15h+ perdues chaque semaine sur des tâches répétitives qui pourraient être automatisées.",
    stat: "15h+",
    statLabel: "perdues/semaine"
  },
  {
    icon: AlertTriangle,
    title: "Erreurs coûteuses",
    description: "Données perdues, leads oubliés, clients insatisfaits. Les erreurs humaines vous coûtent cher.",
    stat: "30%",
    statLabel: "d'erreurs évitables"
  },
  {
    icon: TrendingDown,
    title: "Croissance bloquée",
    description: "Impossible de scaler quand tout repose sur vous. Votre entreprise stagne.",
    stat: "0",
    statLabel: "scalabilité"
  }
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="probleme" 
      className="relative py-24 md:py-32 bg-[#050505]"
      data-testid="problem-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-nikaia font-semibold mb-4 block">
            Le problème
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Le Chaos Manuel vs.<br />L'Ordre Automatisé
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Chaque jour sans automatisation, c'est de l'argent qui s'évapore.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8 card-hover"
              data-testid={`problem-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              
              <h3 className="text-2xl font-medium text-white mb-3">
                {problem.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {problem.description}
              </p>
              
              <div className="pt-6 border-t border-white/10">
                <span className="text-3xl font-bold text-red-500">{problem.stat}</span>
                <span className="text-gray-500 text-sm ml-2">{problem.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

