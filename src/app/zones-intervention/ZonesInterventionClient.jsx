"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactModal from "../../components/ContactModal";

const villes = [
  {
    nom: "Nice",
    departement: "Alpes-Maritimes · 06",
    liens: {
      general: "/automatisation-nice",
      btp: "/automatisation-btp-paca",
      artisans: "/automatisation-artisans-nice",
    },
  },
  {
    nom: "Cannes",
    departement: "Alpes-Maritimes · 06",
    liens: {
      general: "/automatisation-cannes",
      btp: "/automatisation-btp-cannes",
      artisans: "/automatisation-artisans-cannes",
    },
  },
  {
    nom: "Antibes",
    departement: "Alpes-Maritimes · 06",
    liens: {
      general: "/automatisation-antibes",
      btp: "/automatisation-btp-antibes",
      artisans: "/automatisation-artisans-antibes",
    },
  },
  {
    nom: "Grasse",
    departement: "Alpes-Maritimes · 06",
    liens: {
      general: "/automatisation-grasse",
      btp: "/automatisation-btp-grasse",
      artisans: "/automatisation-artisans-grasse",
    },
  },
  {
    nom: "Mougins",
    departement: "Alpes-Maritimes · 06",
    liens: {
      general: "/automatisation-mougins",
      btp: "/automatisation-btp-mougins",
      artisans: "/automatisation-artisans-mougins",
    },
  },
  {
    nom: "Monaco",
    departement: "Principauté · Côte d'Azur",
    liens: {
      general: "/automatisation-monaco",
      btp: "/automatisation-btp-monaco",
      artisans: "/automatisation-artisans-monaco",
    },
  },
  {
    nom: "Toulon",
    departement: "Var · 83",
    liens: {
      general: "/automatisation-toulon",
      btp: "/automatisation-btp-toulon",
      artisans: "/automatisation-artisans-toulon",
    },
  },
];

export default function ZonesInterventionClient() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar onContact={() => setIsContactOpen(true)} />

      <div className="max-w-5xl mx-auto px-6 pt-36 pb-24">

        <span className="text-sm uppercase tracking-widest text-red-500 font-semibold mb-4 block">
          Zones d'intervention
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          NikaIA intervient dans toute<br />
          <span style={{ color: '#de0917' }}>la région PACA</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-16 max-w-2xl">
          Basé à Nice, nous nous déplaçons chez vous dans les Alpes-Maritimes, le Var et sur toute
          la Côte d'Azur. Retrouvez nos solutions par ville ci-dessous.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {villes.map((ville) => (
            <div
              key={ville.nom}
              className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white">{ville.nom}</h2>
                <p className="text-sm text-gray-500 mt-1">{ville.departement}</p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={ville.liens.general}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
                >
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                    Automatisation & IA
                  </span>
                  <span style={{ color: '#de0917' }} className="text-sm">→</span>
                </a>
                <a
                  href={ville.liens.btp}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
                >
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                    BTP & Construction
                  </span>
                  <span style={{ color: '#de0917' }} className="text-sm">→</span>
                </a>
                <a
                  href={ville.liens.artisans}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
                >
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                    Artisans
                  </span>
                  <span style={{ color: '#de0917' }} className="text-sm">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-neutral-900/50 border border-white/10 rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-3">Votre ville n'est pas listée ?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            On intervient dans toute la région PACA. Contactez-nous pour un diagnostic gratuit,
            où que vous soyez.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium text-lg"
            style={{ backgroundColor: '#de0917' }}
          >
            Demander mon diagnostic gratuit
          </button>
        </div>

      </div>

      <Footer onContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
