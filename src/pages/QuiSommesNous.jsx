"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import { useState } from "react";

export default function QuiSommesNous() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar onContact={() => setIsContactOpen(true)} />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          <motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col items-center md:items-start gap-4"
>
  <img
    src="/fred_profil.png"
    alt="Fred Raspo — Fondateur NikaIA Automations"
    className="w-72 h-72 object-cover rounded-full"
  />
  <div>
    <p className="text-white font-semibold text-lg">Fred Raspo</p>
    <p className="text-gray-400 text-sm">Fondateur · Nika<span className="text-nikaia-500">IA</span> Automations</p>
  </div>
</motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-sm uppercase tracking-widest text-nikaia-500 font-semibold mb-4 block">
                Qui sommes-nous
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Un terrain de 18 ans<br />au service de vos process
              </h1>
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
                <MapPin className="w-4 h-4 text-nikaia-500" />
                <span>Nice · Région PACA</span>
              </div>
              <button
                onClick={() => setIsContactOpen(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-nikaia-600 hover:bg-nikaia-700 text-white font-medium transition-all duration-200 text-sm"
              >
                Échanger avec moi
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer onContact={() => setIsContactOpen(true)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        selectedOffer={null}
      />
    </div>
  );
}
