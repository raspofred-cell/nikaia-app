"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactModal from "../../components/ContactModal";

export default function AutomatisationMonacoClient() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar onContact={() => setIsContactOpen(true)} />
      <div className="max-w-4xl mx-auto px-6 py-32">

        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#de0917' }}>
          Automatisation & IA · Monaco · Côte d'Azur
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Automatisation intelligente<br />
          <span style={{ color: '#de0917' }}>pour les entreprises de Monaco</span>
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed mb-12">
          NikaIA Automations accompagne les PME, TPE, artisans et entreprises du BTP de Monaco et de la
          Côte d'Azur dans l'automatisation de leurs tâches répétitives — devis, relances clients,
          rapports de chantier, plannings, facturation. Basé à Nice, nous intervenons directement à Monaco.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Pourquoi automatiser votre entreprise à Monaco ?</h2>
            <p className="text-gray-400 leading-relaxed">
              Les entreprises monégasques font face aux mêmes défis : administration chronophage,
              suivi client manuel, rapports papier. L'automatisation vous permet de récupérer
              15h par semaine et de vous concentrer sur votre cœur de métier.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Un expert local, disponible en présentiel</h2>
            <p className="text-gray-400 leading-relaxed">
              Basé à Nice à quelques minutes de Monaco, Fred Raspo intervient directement en Principauté
              et sur toute la Côte d'Azur. 18 ans d'expérience dans le BTP avant de se spécialiser
              en automatisation et IA.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Nos solutions à Monaco</h2>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>→ Automatisation des devis et factures</li>
              <li>→ Relances clients automatiques</li>
              <li>→ Rapports de chantier numériques</li>
              <li>→ Agent IA sur votre site web</li>
              <li>→ Gestion des plannings RH</li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Secteurs accompagnés à Monaco</h2>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>→ BTP et construction</li>
              <li>→ Électricité et plomberie</li>
              <li>→ Fermetures et menuiserie</li>
              <li>→ Artisans et indépendants</li>
              <li>→ PME et TPE tous secteurs</li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-neutral-900/50 border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Diagnostic gratuit à Monaco</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Vous êtes basé à Monaco ou sur la Côte d'Azur ? On se rencontre,
            on analyse vos process et on vous propose un plan d'action concret. Sans engagement.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium text-lg"
            style={{ backgroundColor: '#de0917' }}
          >
            Demander mon diagnostic gratuit
          </button>
          <p className="text-gray-600 text-sm mt-4">
            Monaco · Nice · Côte d'Azur · Réponse sous 24h
          </p>
        </div>

      </div>
      <Footer onContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
