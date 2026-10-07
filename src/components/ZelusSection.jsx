"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";

const points = [
  "Le devis se fait sur le chantier, depuis Telegram",
  "Le client signe en ligne, l'acompte part tout seul",
  "Relances des devis et des factures automatiques",
  "Chantiers programmés, client prévenu deux jours avant",
  "Un tableau de bord pour voir où vous en êtes",
];

export const ZelusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="zelus" className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden" data-testid="zelus-section">
      <div className="absolute -top-40 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <span className="text-sm uppercase tracking-widest text-nikaia font-semibold mb-4 block">Notre produit</span>
          <img src="/zelus/logo-zelus-blanc.svg" alt="Zelus by NikaIA" className="h-16 md:h-20 w-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Votre activité, <span className="text-red-500">depuis Telegram.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Zelus est l'outil de gestion commerciale que nous avons conçu pour les artisans du bâtiment : devis, signature, factures, relances, chantiers. Vous répondez à des questions, vous appuyez sur des boutons, le reste est fait.
          </p>
          <ul className="space-y-3 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-nikaia flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a href="/zelus" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium glow-red-hover transition-colors">
            Découvrir Zelus <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
        <motion.a href="/zelus" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="relative block">
          <img src="/zelus/accueil.png" alt="Tableau de bord Zelus" className="w-full rounded-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]" />
          <div className="absolute -bottom-10 -right-2 md:-right-8 w-28 md:w-36 rounded-[1.4rem] border border-white/15 bg-black p-1.5 shadow-2xl">
            <img src="/zelus/tel-accueil.png" alt="" className="rounded-[1.1rem] w-full" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default ZelusSection;
