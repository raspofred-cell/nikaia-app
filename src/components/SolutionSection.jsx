import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Workflow, BarChart3, Zap } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Agents IA 24/7",
    description: "Support client et qualification de leads automatisés, même quand vous dormez.",
    color: "red"
  },
  {
    icon: Workflow,
    title: "Workflows n8n - Make",
    description: "Connectez vos outils (CRM, Email, Stripe) en un écosystème fluide et automatisé.",
    color: "red"
  },
  {
    icon: BarChart3,
    title: "Dashboards Data",
    description: "Visualisez votre ROI en temps réel avec des tableaux de bord personnalisés.",
    color: "red"
  },
  {
    icon: Zap,
    title: "Automatisation Totale",
    description: "De la prospection à la facturation, chaque process devient une machine.",
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl" />
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
            Des solutions concrètes qui transforment vos process en générateurs de revenus.
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
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-7 h-7 text-red-500" />
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