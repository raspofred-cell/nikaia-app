import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Cog, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit",
    subtitle: "Gratuit",
    description: "Analyse de vos process actuels et identification des gains potentiels."
  },
  {
    icon: Cog,
    number: "02",
    title: "Mise en place",
    subtitle: "2-4 semaines",
    description: "Conception et déploiement de vos automatisations personnalisées."
  },
  {
    icon: Rocket,
    number: "03",
    title: "Optimisation",
    subtitle: "Continue",
    description: "Suivi des performances et amélioration constante de vos workflows."
  }
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="processus" 
      className="relative py-24 md:py-32 bg-[#0A0A0A]"
      data-testid="process-section"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1764258560130-72099a514dbe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV0d29yayUyMG5vZGVzJTIwcmVkJTIwYmxhY2t8ZW58MHx8fHwxNzcxMjMwMTcxfDA&ixlib=rb-4.1.0&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/90" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-red-500 font-semibold mb-4 block">
            Notre processus
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Simple. Rapide. Efficace.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            De l'audit à l'optimisation, un accompagnement clé en main.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
                data-testid={`process-step-${index}`}
              >
                <div className="bg-neutral-900/80 border border-white/10 rounded-2xl p-8 text-center relative z-10 card-hover">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-red-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <span className="text-red-500 text-sm font-medium mb-4 block">
                    {step.subtitle}
                  </span>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
