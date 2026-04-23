"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, TrendingUp, Users, Shield, Zap, Heart } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gain de temps",
    value: "15h+",
    description: "récupérées chaque semaine sur les tâches administratives et répétitives"
  },
  {
    icon: TrendingUp,
    title: "Premiers résultats",
    value: "14 jours",
    description: "pour voir les premières automatisations en production"
  },
  {
    icon: Users,
    title: "Sans recrutement",
    value: "0€",
    description: "de charge salariale supplémentaire pour faire tourner vos process"
  },
  {
    icon: Shield,
    title: "Fiabilité",
    value: "24/7",
    description: "vos automatisations tournent même quand vous dormez"
  },
  {
    icon: Zap,
    title: "Mise en place",
    value: "2-4 sem.",
    description: "de l'diagnostic à la première automatisation opérationnelle"
  },
  {
    icon: Heart,
    title: "Accompagnement",
    value: "Local",
    description: "Basé à Nice, disponible en présentiel sur toute la région PACA"
  }
];

export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative py-24 md:py-32 bg-[#050505]"
      data-testid="benefits-section"
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
            Les bénéfices
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Des résultats concrets
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ce que nos clients obtiennent avec NikaIA Automations.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 md:p-8 text-center card-hover"
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-nikaia-500/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-nikaia-500" />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {benefit.value}
              </div>
              
              <h3 className="text-lg font-medium text-white mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-gray-500 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

