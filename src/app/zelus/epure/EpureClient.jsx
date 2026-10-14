"use client";
// Version épurée de la page Zelus : petite typographie, beaucoup d'air, une scène fixe qui change au fil des chapitres.
// Les démonstrations animées sont celles de la page principale (une seule implémentation).
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Chatbot from "../../../components/Chatbot";
import ContactModal from "../../../components/ContactModal";
import {
  IMG, TgPhone, DesktopScreens, Shot, PhoneScreens, AgendaDemo, MapTrajet, LiveStats, CgvDemo, PlafondDemo, ScrollShot,
  convCatalogue, convAcceptation, convRapport, options, allFeatures, nbFeatures, faqs, B,
} from "../ZelusClient";

const RED = "#e30518";

// Phrases qui défilent sous le titre
const verbes = ["Le devis part.", "Le client signe.", "L'acompte est facturé.", "Le chantier est posé.", "Le client est prévenu.", "Le relevé est prêt."];

const Label = ({ children, className = "" }) => (
  <div className={`text-[13px] uppercase tracking-[0.2em] text-neutral-400 ${className}`}>{children}</div>
);

const Papiers = ({ onZoom }) => (
  <div className="relative h-[520px] w-full max-w-[460px] mx-auto">
    {[["devis-par.png", -8, -70, "Particulier"], ["devis-pro.png", 4, 0, "Professionnel"], ["devis-syn.png", -2, 70, "Syndic"]].map(([f, r, x, l], i) => (
      <motion.button key={f} type="button" onClick={() => onZoom({ src: `${IMG}/${f}`, alt: `Devis ${l}` })}
        initial={{ opacity: 0, y: 30, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: r, x }} transition={{ duration: 0.6, delay: i * 0.12 }}
        whileHover={{ y: -12, rotate: 0, zIndex: 10 }}
        className="absolute left-1/2 top-4 -ml-[150px] w-[300px] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.55)]" style={{ zIndex: i }}>
        <img src={`${IMG}/${f}`} alt={`Devis ${l}`} className="w-full" />
        <span className="absolute -bottom-7 left-0 text-[11px] tracking-wide text-neutral-500">{l}</span>
      </motion.button>
    ))}
  </div>
);

const Tableau = ({ onZoom }) => (
  <div className="relative w-full">
    <Shot src={`${IMG}/accueil.png`} alt="Tableau de bord Zelus" onZoom={onZoom} className="!rounded-xl" />
    <PhoneScreens className="absolute -bottom-8 -right-3 w-36" />
  </div>
);

const vignettes = [
  ["releve-comptable-pdf-p1.png", "PDF", "Ventes du mois"],
  ["releve-comptable-pdf-p2.png", "PDF", "TVA et encaissements"],
  ["releve-excel.png", "Excel", "Onglet Ventes"],
  ["releve-excel-encaissements.png", "Excel", "Onglet Encaissements"],
];
const Comptable = ({ onZoom }) => (
  <div className="w-full">
    <ScrollShot src="releve-comptable-long.png" h={7791} alt="Relevé comptable du mois" onZoom={onZoom} />
    <div className="grid grid-cols-4 gap-3 mt-4">
      {vignettes.map(([f, k, l]) => (
        <button key={f} type="button" onClick={() => onZoom({ src: `${IMG}/${f}`, alt: `Relevé comptable, ${k} : ${l}` })} className="group text-left">
          <div className={`overflow-hidden rounded-md border border-white/10 bg-white ${k === "PDF" ? "aspect-[3/4]" : "aspect-[3/4]"}`}>
            <img src={`${IMG}/${f}`} alt="" loading="lazy" className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="mt-1.5 text-[11px] text-neutral-500"><span style={{ color: k === "PDF" ? RED : "#3fa66b" }}>{k}</span> · {l}</div>
        </button>
      ))}
    </div>
  </div>
);

const chapitres = [
  { id: "devis", t: "Le devis se fait sur le chantier", p: "Des questions, des boutons, votre catalogue. Le client est retrouvé dans l'annuaire officiel, le lieu et ses contacts sont gardés. Le PDF part de votre adresse.", d: ["Annuaire des entreprises", "Catalogue de prestations", "V2, V3 après envoi"], v: () => <TgPhone messages={convCatalogue} /> },
  { id: "documents", t: "Juste du premier coup", p: "Rétractation pour un particulier, autoliquidation en sous-traitance, syndicat des copropriétaires représenté par son syndic, franchise de TVA pour un auto-entrepreneur.", d: ["Mentions selon le client", "Facture électronique", "À vos couleurs"], v: (z) => <Papiers onZoom={z} /> },
  { id: "cgv", t: "Des CGV qui s'adaptent", p: "Un seul texte. Pour chaque devis, Zelus garde les paragraphes qui valent pour ce client et renumérote les articles.", d: ["16 articles ou 15", "Votre IBAN, votre assurance", "« À compléter » si un champ manque"], v: () => <div className="w-full max-w-[520px] mx-auto"><CgvDemo /></div> },
  { id: "signature", t: "Signé en ligne, acompte parti", p: "Le client signe du doigt depuis le mail. Vous le savez dans la minute ; la facture d'acompte est déjà chez lui.", d: ["Sans compte à créer", "Acceptation manuelle possible", "Commencer avant la rétractation"], v: () => <TgPhone messages={convAcceptation} /> },
  { id: "relances", t: "Rien ne traîne", p: "Les devis sans réponse sont relancés à J+3 et J+7, les factures en retard aussi, facture jointe. Vous gardez la main.", d: ["Relances automatiques", "Relance à la main, sans limite", "Marquer payée"], v: (z) => <Shot src={`${IMG}/retards.png`} alt="Factures en retard" onZoom={z} className="!rounded-xl" /> },
  { id: "agenda", t: "Un chantier se pose d'un geste", p: "Glissez-le de la liste sur un jour. Zelus propose les heures libres de votre agenda et prévient le client deux jours avant.", d: ["Créneaux libres", "Rappel au client", "Report, pause, annulation"], v: (z) => <AgendaDemo onZoom={z} /> },
  { id: "carte", t: "Le trajet, avant de partir", p: "Tous vos chantiers sur la carte. Un point : le rendez-vous, et le temps de route depuis le bureau, bouchons compris.", d: ["Waze, Google Maps", "Météo et vigilances", "Chantiers sous la pluie signalés"], v: (z) => <MapTrajet onZoom={z} /> },
  { id: "rapport", t: "Dictez, c'est rédigé", p: "Une note vocale dans le camion. Zelus écrit le rapport, vous choisissez les photos, il part en PDF à vos couleurs.", d: ["Photos rangées dans Drive", "Problèmes signalés", "Relecture avant envoi"], v: () => <TgPhone messages={convRapport} /> },
  { id: "tableau", t: "Tout, d'un coup d'œil", p: "Ce qui reste à encaisser, qui relancer, quoi programmer. Au bureau comme sur le téléphone, avec un lien qui n'est qu'à vous.", d: ["Fil de l'argent", "Météo 7 jours", "Recherche"], v: (z) => <Tableau onZoom={z} /> },
  { id: "chiffres", t: "Vos chiffres, vivants", p: "Montant signé, taux de transformation, signé, facturé, encaissé mois par mois.", d: ["Par période", "Par métier", "Par type de client"], v: () => <LiveStats compact /> },
  { id: "comptable", t: "Le relevé du comptable", p: "Ventes, TVA par taux, encaissements, impayés. Par mois ou par année, en PDF ou en Excel.", d: ["PDF", "Excel", "Par mois, par année"], v: (z) => <Comptable onZoom={z} /> },
  { id: "plafond", k: "Pensé pour les auto-entrepreneurs", t: "Le plafond sous surveillance", p: "En franchise de TVA, Zelus suit ce que vous encaissez depuis janvier et vous prévient avant le seuil, pas après.", d: ["Mention 293 B", "Alerte à l'approche", "Bascule le jour J"], v: () => <div className="w-full max-w-[460px] mx-auto"><PlafondDemo /></div> },
];

// Index : catégories réparties en trois colonnes de hauteur voisine, dans l'ordre du parcours
const colonnesIndex = (() => {
  const total = allFeatures.reduce((n, c) => n + c.items.length + 3, 0), cible = total / 3;
  const cols = [[]]; let h = 0;
  allFeatures.forEach((c) => { const t = c.items.length + 3; if (h + t / 2 > cible && cols.length < 3) { cols.push([]); h = 0; } cols[cols.length - 1].push(c); h += t; });
  return cols;
})();

// Ligne de prix façon carte de restaurant
const Ligne = ({ a, b, sub, muted }) => (
  <div className="flex items-baseline gap-3 py-[5px] text-[16px] leading-snug">
    <span className={muted ? "text-neutral-500" : "text-neutral-200"}>{a}{sub && <span className="ml-2 text-[12px] text-neutral-500">{sub}</span>}</span>
    <span className="flex-1 border-b border-dotted border-white/15 translate-y-[-4px]" />
    <span className={`tabular-nums ${muted ? "text-neutral-500" : "text-white"}`}>{b}</span>
  </div>
);

export default function EpureClient() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [zoom, setZoom] = useState(null);
  const [actif, setActif] = useState(0);
  const [v, setV] = useState(0);
  const refs = useRef([]);
  const open = (o = "Zelus — démonstration") => { setSelectedOffer(o); setIsContactOpen(true); };

  useEffect(() => { const t = setInterval(() => setV((x) => (x + 1) % verbes.length), 1900); return () => clearInterval(t); }, []);
  useEffect(() => {
    // Chapitre actif : celui dont le milieu est le plus proche du milieu de l'écran
    let raf = 0;
    const calc = () => {
      raf = 0;
      const m = window.innerHeight / 2;
      let best = 0, d = Infinity;
      refs.current.forEach((el, i) => { if (!el) return; const r = el.getBoundingClientRect(); const x = Math.abs(r.top + r.height / 2 - m); if (x < d) { d = x; best = i; } });
      setActif(best);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(calc); };
    window.addEventListener("scroll", on, { passive: true }); window.addEventListener("resize", on); calc();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  useEffect(() => { const k = (e) => e.key === "Escape" && setZoom(null); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);

  const ch = chapitres[actif];

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-neutral-200 text-[17px] leading-relaxed">
      <Navbar onContact={() => open("Diagnostic Gratuit")} />

      <main>
        {/* Ouverture */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-16 text-center">
          <img src={`${IMG}/logo-zelus-seul.svg`} alt="Zelus" className="h-14 mx-auto mb-8" />
          <h1 className="text-[44px] md:text-[76px] leading-[1.02] font-normal tracking-[-0.03em] text-white">
            Le bureau tient<br />dans une conversation.
          </h1>
          <div className="h-9 mt-6 overflow-hidden text-[22px]">
            <AnimatePresence mode="wait">
              <motion.p key={v} initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -18, opacity: 0 }} transition={{ duration: 0.35 }} className="text-[#ff4d5e]">
                {verbes[v]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="max-w-2xl mx-auto mt-4 text-neutral-400 text-[18px]">
            Zelus est l'outil de gestion commerciale des artisans du bâtiment. Vous répondez dans Telegram ; devis, factures, relances et chantiers suivent.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-[16px]">
            <button onClick={() => open()} className="rounded-full bg-white text-black px-6 py-3 hover:bg-neutral-200 transition-colors">Voir une démonstration</button>
            <a href="#histoire" className="text-neutral-400 hover:text-white transition-colors">Une affaire, du début à la fin <ArrowRight className="inline w-3.5 h-3.5 ml-1" /></a>
          </div>
        </section>

        {/* Vitrine */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-2 shadow-[0_40px_120px_rgba(227,5,24,0.15)]">
              <DesktopScreens onZoom={setZoom} />
            </div>
            <PhoneScreens className="hidden md:block absolute -bottom-8 -right-4 w-44" />
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
            {[["Telegram", "le devis sur le chantier"], ["En ligne", "la signature du client"], ["Automatique", "acompte et relances"], ["1 écran", "pour tout voir"]].map(([a, b]) => (
              <div key={a} className="bg-[#0b0b0c] px-6 py-6">
                <div className="text-[26px] text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>{a}</div>
                <div className="text-[15px] text-neutral-500">{b}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Histoire : chapitres à gauche, scène fixe à droite */}
        <section id="histoire" className="border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12">
            <div className="py-16">
              <Label className="mb-6">Une affaire, du devis au dernier euro</Label>
              {chapitres.map((c, i) => (
                <div key={c.id} id={c.id} ref={(el) => (refs.current[i] = el)} data-i={i} className="lg:min-h-[60vh] flex items-center py-6">
                  <div className={`w-full rounded-2xl px-6 py-7 border transition-colors duration-500 ${actif === i ? "border-white/10 bg-white/[0.03]" : "border-transparent"}`}>
                  {c.k && <div className="ml-10 mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] uppercase tracking-[0.18em]" style={{ borderColor: RED, color: "#ff4d5e" }}>{c.k}</div>}
                  <div className="flex items-baseline gap-4">
                    <span className="text-[15px] tabular-nums transition-colors duration-500" style={{ color: actif === i ? RED : "#525252" }}>{String(i + 1).padStart(2, "0")}</span>
                    <h2 className={`text-[28px] md:text-[36px] leading-tight font-normal tracking-[-0.02em] transition-colors duration-500 ${actif === i ? "text-white" : "text-neutral-500"}`}>{c.t}</h2>
                  </div>
                  <p className="mt-4 ml-10 max-w-lg text-neutral-300">{c.p}</p>
                  <div className="mt-5 ml-10 flex flex-wrap gap-2 text-[14px]">
                    {c.d.map((x) => <span key={x} className="rounded-full border border-white/10 px-3 py-1 text-neutral-300">{x}</span>)}
                  </div>
                  {/* Sur téléphone, la scène se met sous le texte */}
                  <div className="lg:hidden mt-10">{c.v(setZoom)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className="sticky top-24 h-[calc(100vh-7rem)] flex flex-col justify-center">
                <div className="relative h-full">
                  <AnimatePresence initial={false}>
                    <motion.div key={ch.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full">{ch.v(setZoom)}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Rail de progression */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  {chapitres.map((c, i) => (
                    <a key={c.id} href={`#${c.id}`} title={c.t} className="block w-1 rounded-full transition-all duration-500" style={{ height: actif === i ? 22 : 8, background: actif === i ? RED : "rgba(255,255,255,0.15)" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Index typographique de tout ce que fait Zelus */}
        <section className="border-t border-white/[0.06] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
              <div>
                <Label>Index</Label>
                <h2 className="mt-4 text-[34px] md:text-[48px] font-normal tracking-[-0.02em] text-white">{nbFeatures} choses que Zelus fait pour vous</h2>
              </div>
              <div className="flex gap-5 text-[12px] text-neutral-500">
                <span><span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-300 mr-2 align-middle" />abonnement</span>
                <span><span className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle" style={{ background: RED }} />option</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
              {colonnesIndex.map((col, ci) => (
                <div key={ci}>
                  {col.map((c) => (
                    <div key={c.cat} className="border-t border-white/[0.08] pt-4 pb-8">
                      <div className="flex items-baseline justify-between mb-3">
                        <span className="text-[13px] uppercase tracking-[0.18em] text-neutral-300">{c.cat}</span>
                        <span className="text-[13px] tabular-nums text-neutral-600">{c.items.length}</span>
                      </div>
                      <ul className="space-y-1 text-[15px] leading-snug text-neutral-300">
                        {c.items.map(([n, tag]) => (
                          <li key={n} className="flex gap-2.5">
                            <span className="mt-[8px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: tag === B ? "#a3a3a3" : RED }} />
                            <span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section id="tarifs" className="border-t border-white/[0.06] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <Label>Tarifs</Label>
            <h2 className="mt-4 text-[34px] md:text-[48px] font-normal tracking-[-0.02em] text-white">Un prix clair, sans engagement.</h2>
            <p className="mt-3 text-neutral-500 text-[13px]">Prix nets : TVA non applicable, art. 293 B du CGI.</p>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14">
              <div>
                <Ligne a="Abonnement de base" b="149 € / mois" />
                <Ligne a="Pack complet" sub="toutes les options · 279 € au détail" b="249 € / mois" />
                <div className="mt-5 mb-1 text-[12px] uppercase tracking-[0.2em] text-neutral-500">Options</div>
                {options.map((o) => <Ligne key={o.name} a={o.name} b={`+${o.price} € / mois`} />)}
                <div className="mt-5 mb-1 text-[12px] uppercase tracking-[0.2em] text-neutral-500">Conditions</div>
                <Ligne a="Mise en place" sub="bot, base, Drive, Google, catalogue, 2 h de formation" b="990 €, une fois" />
                <Ligne a="Utilisateurs inclus" b="2" />
                <Ligne a="Utilisateur en plus" b="+19 € / mois" />
                <Ligne a="Compte du comptable" sub="lecture seule" b="offert" />
                <Ligne a="Paiement à l'année" b="10 mois pour 12" />
                <Ligne a="Parrainage" b="1 mois offert" />
                <Ligne a="Engagement" b="aucun" />
              </div>

              <div className="relative self-start border p-8" style={{ borderColor: RED }}>
                <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: RED }}>Offre fondateurs</div>
                <div className="mt-5 text-[30px] leading-tight font-normal text-white">Les 10 premiers clients ont tout.</div>
                <div className="text-[44px] font-semibold tracking-tight" style={{ color: RED }}>À VIE !</div>
                <div className="mt-8 flex items-baseline gap-3">
                  <span className="text-[52px] font-light tracking-[-0.03em] text-white tabular-nums">149 €</span>
                  <span className="text-neutral-400">/ mois</span>
                  <span className="text-neutral-600 line-through tabular-nums">249 €</span>
                </div>
                <ul className="mt-6 space-y-2 text-[15px] text-neutral-300">
                  <li>— Le pack complet, toutes les options</li>
                  <li>— Mises à jour et améliorations de Zelus incluses à vie</li>
                  <li>— Prix garanti tant que vous restez abonné</li>
                  <li>— Sans engagement · jusqu'au 31 décembre 2026</li>
                </ul>
                <button onClick={() => open("Zelus — Offre fondateurs")} className="mt-8 w-full rounded-full py-3 text-[14px] text-white transition-opacity hover:opacity-90" style={{ background: RED }}>
                  Réserver ma place
                </button>
                <p className="mt-4 text-[11px] text-neutral-600">Améliorations à vie : ce qui est ajouté à Zelus pour tous les artisans, pas du développement sur mesure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="border-t border-white/[0.06] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <Label>Questions</Label>
            <dl className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="text-white text-[18px]">{f.q}</dt>
                  <dd className="mt-2 text-[15.5px] text-neutral-400">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Fin */}
        <section className="border-t border-white/[0.06] py-32 text-center">
          <h2 className="text-[36px] md:text-[60px] font-normal tracking-[-0.03em] text-white">Artisans des Alpes-Maritimes,<br /><span style={{ color: RED }}>parlons-en.</span></h2>
          <div className="mt-10 flex items-center justify-center gap-6 text-[14px]">
            <button onClick={() => open()} className="rounded-full bg-white text-black px-5 py-2.5 hover:bg-neutral-200 transition-colors">Voir une démonstration</button>
            <a href="https://wa.me/33619251902" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">WhatsApp <ArrowRight className="inline w-3.5 h-3.5 ml-1" /></a>
          </div>
        </section>
      </main>

      <Footer onContact={() => open()} />
      <Chatbot />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} selectedOffer={selectedOffer} />

      {zoom && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 md:p-10" onClick={() => setZoom(null)}>
          <button className="absolute top-5 right-5 text-white p-2 rounded-full bg-white/10 hover:bg-white/20" onClick={() => setZoom(null)} aria-label="Fermer"><X className="w-6 h-6" /></button>
          <img src={zoom.src} alt={zoom.alt} className="max-w-full max-h-full rounded-xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
