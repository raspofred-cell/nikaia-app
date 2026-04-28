"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactModal from "../../components/ContactModal";

export default function AutomatisationArtisansAntibsClient() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar onContact={() => setIsContactOpen(true)} />
      <div className="max-w-4xl mx-auto px-6 py-32">
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#de0917' }}>Automatisation · Artisans · Antibes · PACA</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Automatisation pour artisans<br />
          <span style={{ color: '#de0917' }}>à Antibes et dans le 06</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-12">
          Vous êtes artisan à Antibes ou dans les Alpes-Maritimes ? NikaIA automatise vos devis, relances, rapports d'intervention et plannings — pour que vous passiez moins de temps sur la paperasse et plus de temps sur vos chantiers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Le quotidien de l'artisan sans automatisation</h2>
            <p className="text-gray-400 leading-relaxed">Devis rédigés à la main le soir, relances oubliées, rapports sur papier, planning géré à l'arrache. À Antibes comme ailleurs, chaque heure sur l'administratif c'est une heure de moins sur le terrain.</p>
          </div>
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Un interlocuteur qui connaît votre métier</h2>
            <p className="text-gray-400 leading-relaxed">Fred Raspo a passé 18 ans dans le bâtiment avant de créer NikaIA. Il comprend vos contraintes terrain et vous propose des automatisations concrètes, adaptées à votre réalité d'artisan dans le 06.</p>
          </div>
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Ce qu'on automatise pour les artisans</h2>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>→ Devis générés et envoyés automatiquement</li>
              <li>→ Relances clients à J+3 sans réponse</li>
              <li>→ Rapports d'intervention depuis le terrain</li>
              <li>→ Facturation après validation du client</li>
              <li>→ Planning hebdomadaire automatisé</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Artisans accompagnés à Antibes</h2>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>→ Électriciens</li>
              <li>→ Plombiers et chauffagistes</li>
              <li>→ Menuisiers et poseurs de fermetures</li>
              <li>→ Peintres et carreleurs</li>
              <li>→ Maçons et couvreurs</li>
            </ul>
          </div>
        </div>
        <div className="text-center bg-neutral-900/50 border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Diagnostic gratuit pour artisans à Antibes</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">On se rencontre à Antibes ou dans le 06, on analyse vos process et on vous propose un plan d'action concret. Sans engagement, sans jargon technique.</p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium text-lg"
            style={{ backgroundColor: '#de0917' }}
          >
            Demander mon diagnostic gratuit
          </button>
          <p className="text-gray-600 text-sm mt-4">Antibes · Alpes-Maritimes · Var · Région PACA · Réponse sous 24h</p>
        </div>
      </div>
      <Footer onContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
