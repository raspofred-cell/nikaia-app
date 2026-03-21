"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone } from "lucide-react";

export const AboutSection = ({ onContact }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 md:py-32 bg-[#050505]"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto md:mx-0">
              <img
                src="/fred_id.png"
                alt="Frédéric Raspo — Fondateur NikaIA Automations"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Frédéric Raspo</p>
                <p className="text-gray-300 text-sm">Fondateur · NikaIA Automations</p>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-red-500/20 rounded-2xl max-w-sm mx-auto md:mx-0 hidden md:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-sm uppercase tracking-widest text-red-500 font-semibold mb-4 block">
                Qui suis-je
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Un terrain de 18 ans<br />au service de vos process
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-gray-400 leading-relaxed">
              <p>
                18 ans dans le bâtiment — manœuvre, assistant chef de chantier, coordinateur, conducteur de travaux, directeur technique. J'ai vu de l'intérieur ce que des process désorganisés coûtent vraiment : un bureau sous l'eau, des chantiers mal tracés, et des clients qui retardent ou refusent de payer faute de documents conformes.
              </p>
              <p>
                Aujourd'hui les donneurs d'ordre exigent des comptes rendus, des photos, des signatures. Sans process solides, c'est votre trésorerie qui trinque.
              </p>
              <p>
                C'est exactement ce que j'automatise. Basé à Nice, je travaille avec les entreprises de la région PACA — en présentiel si besoin, toujours disponible.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-2">
              {["BTP & Construction", "Automatisation", "IA", "Nice & PACA"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Location + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Nice · Région PACA</span>
              </div>
              <button
                onClick={onContact}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-200 text-sm"
              >
                Échanger avec moi
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
