"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";

export const CTASection = ({ onContact }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden"
      data-testid="cta-section"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Prêt à automatiser<br />votre croissance ?
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Rejoignez les entreprises qui ont choisi de transformer leurs tâches en revenus. 
            Commencez par un diagnostic gratuit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContact}
              className="btn-primary flex items-center gap-2 text-base animate-pulse-glow"
              data-testid="cta-primary"
            >
              Demander un audit gratuit
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.a
              href="tel:0619251902"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center gap-2 text-base"
              data-testid="cta-phone"
            >
              <Phone className="w-5 h-5" />
              06 19 02 25 02
            </motion.a>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            Nice & région PACA • Réponse sous 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

