"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Lock, MessageCircle, Smartphone, FileText, PenLine, Bell, Receipt,
  CalendarDays, Camera, Mic, LayoutDashboard, Users, Palette, ShieldCheck, Building2,
  Briefcase, Home, ClipboardCheck, X, ZoomIn, ChevronDown, Moon, Clock, Search, CloudSun,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
import ContactModal from "../../components/ContactModal";

const IMG = "/zelus";

/* ---------- Petits composants ---------- */

const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Kicker = ({ children }) => (
  <span className="text-sm uppercase tracking-widest text-nikaia font-semibold mb-4 block">{children}</span>
);

// Écran Telegram simulé. Les textes reprennent ceux du bot Zelus.
const TgPhone = ({ title = "Martin Confort · Zelus", messages, className = "" }) => (
  <div className={`mx-auto w-full max-w-[360px] rounded-[2.4rem] border border-white/15 bg-black p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.6)] ${className}`}>
    <div className="rounded-[2rem] overflow-hidden bg-[#0e1621]">
      <div className="flex items-center gap-3 px-4 py-3 bg-[#17212b] border-b border-black/40">
        <div className="w-9 h-9 rounded-full bg-[#111] flex items-center justify-center p-1.5">
          <img src={`${IMG}/icone-zelus.svg`} alt="" className="w-full h-full" />
        </div>
        <div className="leading-tight">
          <div className="text-white text-sm font-semibold">{title}</div>
          <div className="text-[11px] text-[#6c8aa5]">bot</div>
        </div>
      </div>
      <div className="px-3 py-4 space-y-2.5 min-h-[420px] bg-[#0e1621] bg-[radial-gradient(circle_at_20%_10%,rgba(80,120,160,0.10),transparent_50%)]">
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.me ? "items-end" : "items-start"}`}>
            <div
              className={`max-w-[88%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug whitespace-pre-line ${
                m.me ? "bg-[#2b5278] text-white rounded-br-md" : "bg-[#182533] text-gray-100 rounded-bl-md"
              }`}
            >
              {m.voice ? (
                <span className="flex items-center gap-2"><Mic className="w-4 h-4" /><span className="tracking-[0.2em] text-[#8fb3d6]">▮▮▯▮▮▮▯▮▮▯▮</span>{m.voice}</span>
              ) : m.t}
            </div>
            {m.kb && (
              <div className="w-[88%] mt-1 space-y-1">
                {m.kb.map((row, r) => (
                  <div key={r} className="flex gap-1">
                    {row.map((b) => (
                      <div
                        key={b}
                        className={`flex-1 text-center text-[11.5px] rounded-lg px-2 py-1.5 ${
                          m.on === b ? "bg-[#3d6e9b] text-white" : "bg-[#1e2c3a]/90 text-[#cfe0f0]"
                        }`}
                      >
                        {b}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 px-4 py-3 bg-[#17212b] text-[#6c8aa5] text-sm">
        <span>📎</span><span className="flex-1 italic">Message</span><Mic className="w-4 h-4" />
      </div>
    </div>
  </div>
);

const Shot = ({ src, alt, onZoom, className = "" }) => (
  <button
    type="button"
    onClick={() => onZoom({ src, alt })}
    className={`group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${className}`}
  >
    <img src={src} alt={alt} loading="lazy" className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]" />
    <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
      <ZoomIn className="w-3.5 h-3.5" /> Agrandir
    </span>
  </button>
);

const Example = ({ children }) => (
  <div className="mt-6 rounded-xl border border-red-500/25 bg-red-500/[0.06] p-4">
    <div className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-1.5">Exemple concret</div>
    <p className="text-gray-300 text-[15px] leading-relaxed">{children}</p>
  </div>
);

const Bullets = ({ items }) => (
  <ul className="mt-6 space-y-2.5">
    {items.map((it) => (
      <li key={it} className="flex gap-3 text-gray-300">
        <Check className="w-5 h-5 text-nikaia flex-shrink-0 mt-0.5" />
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const OptionTag = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
    <Lock className="w-3 h-3" /> {children}
  </span>
);

// Bloc fonctionnalité : texte d'un côté, visuel de l'autre, en alternance.
const Feature = ({ id, icon: Icon, kicker, title, text, bullets, example, option, visual, reverse }) => (
  <section id={id} className="scroll-mt-28 py-16 md:py-24 border-t border-white/5">
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-red-500" />
          </div>
          <span className="text-sm uppercase tracking-widest text-gray-400 font-semibold">{kicker}</span>
          {option && <OptionTag>{option}</OptionTag>}
        </div>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{text}</p>
        {bullets && <Bullets items={bullets} />}
        {example && <Example>{example}</Example>}
      </Reveal>
      <Reveal className={reverse ? "lg:order-1" : ""} delay={0.1}>
        {visual}
      </Reveal>
    </div>
  </section>
);

/* ---------- Données ---------- */

const convDevis = [
  { t: "Quel type de client ?", kb: [["🏠 Particulier", "💼 Professionnel"], ["🔑 Syndic"]], on: "🔑 Syndic" },
  { t: "Quel est le nom du syndic ?" },
  { me: true, t: "Aubert" },
  { t: "Dans quelle commune se trouve Aubert ?" },
  { me: true, t: "Nice" },
  { t: "🔎 Trouvé dans l'annuaire des entreprises\n1. CABINET AUBERT\nSIRET 123 456 789 00012\n5 rue Pasteur, 06000 NICE\nLaquelle est la bonne ?", kb: [["1 · CABINET AUBERT"], ["🔁 Nouvelle recherche", "✏️ Aucune ne convient"]], on: "1 · CABINET AUBERT" },
];

const convCatalogue = [
  { t: "✅ Résidence sélectionnée !\nQuelle catégorie de prestation voulez-vous chiffrer ?", kb: [["🚿 Plomberie", "⚡ Électricité"], ["❄️ Climatisation"]], on: "🚿 Plomberie" },
  { t: "Prestations : Plomberie", kb: [["Détection fuite non destructive · 420€ HT"], ["Remplacement robinet / mitigeur · 80€ HT"], ["🆕 Créer une nouvelle prestation"]], on: "Détection fuite non destructive · 420€ HT" },
  { t: "Quelle quantité ?" },
  { me: true, t: "2" },
  { t: "✅ Ligne ajoutée : 2 × Détection fuite non destructive → 840,00 € HT / 924,00 € TTC\nAjouter une autre prestation ?", kb: [["✅ Oui", "❌ Non"]], on: "❌ Non" },
  { t: "✅ Devis DEV-SYN-2026-10-018 généré\n🔑 Cabinet Aubert\n🏢 Résidence Les Mimosas\n💶 924,00 € TTC", kb: [["🔍 Consulter le devis"], ["📤 Envoyer au client"]], on: "📤 Envoyer au client" },
];

const convAcceptation = [
  { t: "📤 Devis DEV-SYN-2026-10-018 envoyé\n📧 n.moreau@exemple.fr\n📎 En copie : Mme Claire Fontaine\nLe client peut l'accepter en un clic depuis le mail." },
  { t: "🎉 Devis accepté !\n📄 DEV-SYN-2026-10-018\n🔑 Cabinet Aubert\n🏢 Résidence Les Mimosas\n💶 924,00 € TTC\n🧾 Facture FA-2026-121 · 462,00 € TTC\n📅 Payable à réception", kb: [["📄 Consulter la facture d'acompte"]] },
];

const convChantier = [
  { t: "✅ Plage enregistrée\n📅 Jours posés · jeu. 8 oct. 08:00 → 17:00\n⏱️ 8 h posées sur 8 h estimées sur le devis" },
  { t: "✅ Mme Claire Fontaine (Gardienne) vient de confirmer sa présence pour l'intervention Détection de fuite de jeudi 8 octobre.\n🔑 Cabinet Aubert\n🏢 Résidence Les Mimosas" },
  { me: true, t: "📷 Photo" },
  { t: "📷 Photo rangée dans Résidence Les Mimosas · Pendant les travaux." },
];

const convRapport = [
  { t: "🎤 Racontez le chantier en quelques phrases : ce qui a été fait, ce qui reste, ce que le client doit savoir." },
  { me: true, voice: "0:42" },
  { t: "📝 Rapport rédigé à partir de votre note.\nChoisissez les photos à joindre, relisez, puis envoyez.", kb: [["🖼️ Choisir les photos"], ["✅ Valider et envoyer", "✏️ Corriger"]] },
];

const convMicro = [
  { t: "⚠️ Plafond de la franchise en vue\nVotre chiffre d'affaires approche du plafond. Zelus vous préviendra quand la TVA s'appliquera." },
];

const devisTabs = [
  { key: "par", label: "Particulier", icon: Home, img: "devis-par.png", rule: "Droit de rétractation de 14 jours, case « je demande que les travaux débutent avant la fin du délai », TVA réduite selon les travaux." },
  { key: "pro", label: "Professionnel", icon: Briefcase, img: "devis-pro.png", rule: "Conditions entre professionnels, SIRET du client, autoliquidation de la TVA en sous-traitance avec la bonne mention imprimée." },
  { key: "syn", label: "Syndic", icon: Building2, img: "devis-syn.png", rule: "Le syndicat des copropriétaires en client, le syndic comme représentant, le gestionnaire à l'attention, le contact sur place, la question du passage en AG." },
  { key: "micro", label: "Auto-entrepreneur", icon: ShieldCheck, img: "devis-micro.png", rule: "« TVA non applicable, art. 293 B du CGI » sur chaque devis et facture, et un œil sur votre chiffre d'affaires de l'année." },
];

const dashTabs = [
  { key: "accueil", label: "Aujourd'hui", img: "accueil.png", text: "Ce qui reste à encaisser, le fil de l'argent du mois (en attente, signé, facturé, encaissé), la météo des 7 prochains jours et vos chantiers sur la carte." },
  { key: "retards", label: "Qui relancer", img: "retards.png", text: "Les factures en retard, les plus grosses en premier. Un bouton pour relancer, un autre pour marquer « payée »." },
  { key: "agenda", label: "Agenda", img: "cal-semaine.png", text: "La semaine ou le mois, les chantiers posés, et la liste de ceux qui restent à programmer, les plus anciens d'abord." },
  { key: "carte", label: "Carte", img: "carte.png", text: "Tous vos chantiers sur la carte : en cours, programmés, à programmer, par type de client." },
  { key: "chiffres", label: "Les chiffres", img: "st-devis.png", text: "Taux de transformation par mois, devis par tranche de montant, par métier et par type de client, sur la période de votre choix." },
  { key: "argent", label: "Argent", img: "st-argent.png", text: "Signé, facturé et encaissé mois par mois, délais de paiement, prévision d'encaissement." },
];

const options = [
  {
    icon: Home, name: "Zelus", tag: "Le socle", included: true,
    desc: "Tout le cycle commercial avec vos clients particuliers, du premier devis à la dernière facture.",
    items: ["Devis depuis Telegram, catalogue de prestations", "Signature en ligne et facture d'acompte automatique", "Relances des devis et des factures", "Programmation des chantiers et rappels au client", "Facture de solde, facture d'intervention, avoirs", "Facture électronique, documents et mails à vos couleurs", "Tableau de bord sur ordinateur et téléphone"],
  },
  {
    icon: Building2, name: "Option Syndic", tag: "Copropriété",
    desc: "Pour travailler avec les syndics : résidences, gestionnaires, contacts sur place, zones d'intervention.",
    items: ["Syndic retrouvé dans l'annuaire officiel", "Fiche résidence avec tous ses contacts", "Devis au nom du syndicat des copropriétaires", "Gardien ou occupant prévenu avant l'intervention", "Question du passage en AG"],
  },
  {
    icon: Briefcase, name: "Option Professionnel", tag: "Entreprises",
    desc: "Pour vos clients entreprises, agences, commerces et donneurs d'ordre.",
    items: ["Entreprise retrouvée par SIREN ou par nom", "Conditions propres aux professionnels", "Autoliquidation de la TVA en sous-traitance", "Lieux d'intervention multiples par client"],
  },
  {
    icon: Camera, name: "Option Suivi de chantier", tag: "Sur le terrain",
    desc: "Le journal du chantier, tenu depuis le téléphone.",
    items: ["Démarrage du chantier et heure d'arrivée", "Photos rangées automatiquement dans Drive", "Problèmes signalés et client prévenu", "Avenant quand le chantier change"],
  },
  {
    icon: Mic, name: "Option Rapport de chantier", tag: "Avec l'IA",
    desc: "Un rapport propre en PDF à partir d'une note vocale.",
    items: ["Note vocale transcrite, rapport rédigé", "Photos choisies sur une page simple", "Relecture avant envoi", "PDF à vos couleurs envoyé au client"],
  },
  {
    icon: ClipboardCheck, name: "Option PV de réception", tag: "Bientôt", soon: true,
    desc: "Le procès-verbal de fin de travaux, signé avec le client.",
    items: ["Réception avec ou sans réserves", "Signature du client", "Rangé avec le dossier du chantier"],
  },
];

const faqs = [
  { q: "Faut-il installer un logiciel ?", a: "Non. Zelus fonctionne dans Telegram, une application de messagerie gratuite que vous installez sur votre téléphone comme WhatsApp. Le tableau de bord s'ouvre dans votre navigateur, sur ordinateur comme sur téléphone, avec un lien qui vous est propre." },
  { q: "Pourquoi Telegram et pas une application ?", a: "Parce que vous savez déjà envoyer un message. Pas de formulaire à remplir, pas de menus cachés : des questions, des boutons, et vous pouvez dicter. Ça marche sur le chantier, entre deux rendez-vous, d'une seule main." },
  { q: "Où sont mes données ?", a: "Chez vous. Chaque artisan a sa propre base de données, que vous pouvez consulter à tout moment. Les mails partent de votre adresse, les documents sont rangés dans votre Google Drive, les chantiers dans votre agenda Google." },
  { q: "Mes devis et factures sont-ils conformes ?", a: "Les mentions changent selon le client : rétractation pour un particulier, autoliquidation en sous-traitance, syndicat des copropriétaires représenté par son syndic, franchise de TVA pour un auto-entrepreneur. Les factures sont produites au format de la facture électronique, avec leur fichier de données intégré." },
  { q: "Je travaille seul, est-ce fait pour moi ?", a: "C'est précisément pour vous. Zelus a été pensé pour l'artisan qui fait tout lui-même et rédige ses devis le soir. Les accès pour un collaborateur (secrétaire, associé) sont prévus." },
  { q: "Est-ce que je peux l'essayer ?", a: "Oui. Le plus simple est d'en parler : on vous montre Zelus avec des exemples de votre métier, puis on configure votre bot avec votre logo, vos couleurs et votre catalogue de prestations." },
  { q: "Combien ça coûte ?", a: "Un abonnement mensuel pour le socle, et des options que vous activez selon vos clients. Le tarif dépend de votre activité : demandez-le, on vous répond rapidement." },
];

/* ---------- Page ---------- */

export default function ZelusClient() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [zoom, setZoom] = useState(null);
  const [devisTab, setDevisTab] = useState("syn");
  const [dashTab, setDashTab] = useState("accueil");
  const [openFaq, setOpenFaq] = useState(0);

  const openContact = (offer = "Zelus — démonstration") => { setSelectedOffer(offer); setIsContactOpen(true); };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const devis = devisTabs.find((d) => d.key === devisTab);
  const dash = dashTabs.find((d) => d.key === dashTab);

  const sommaire = [
    ["#tableau", "Tableau de bord"], ["#devis", "Devis"], ["#documents", "Documents"], ["#signature", "Signature"], ["#relances", "Relances"],
    ["#factures", "Factures"], ["#chantiers", "Chantiers"], ["#suivi", "Suivi"], ["#rapport", "Rapport"],
    ["#options", "Options"], ["#faq", "FAQ"],
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar onContact={() => openContact("Diagnostic Gratuit")} />

      <main>
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden pt-32 md:pt-40 pb-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 right-0 w-[900px] h-[900px] bg-red-600/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <Reveal>
              <img src={`${IMG}/logo-zelus-blanc.svg`} alt="Zelus by NikaIA" className="h-20 md:h-24 w-auto mb-8" />
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
                Votre activité,<br /><span className="text-red-500">depuis Telegram.</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-4">
                Le devis se fait sur le chantier. Le client signe en ligne. La facture d'acompte et les relances partent toutes seules. Le chantier se programme, le client est prévenu.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
                Zelus est l'outil de gestion commerciale des artisans du bâtiment, conçu à Nice par NikaIA Automations. Vous répondez à des questions, vous appuyez sur des boutons. Le reste est fait.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => openContact()} className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium glow-red-hover transition-colors">
                  Voir une démonstration <ArrowRight className="w-4 h-4" />
                </button>
                <a href="#devis" className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors">
                  Tout ce que fait Zelus <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
                {[[Smartphone, "Rien à installer", "Telegram suffit"], [Mic, "Vous pouvez dicter", "sur le chantier"], [Palette, "À vos couleurs", "logo, couleur, police"]].map(([I, a, b]) => (
                  <div key={a}>
                    <I className="w-5 h-5 text-red-500 mb-2" />
                    <div className="text-sm font-medium text-white">{a}</div>
                    <div className="text-xs text-gray-500">{b}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15} className="relative">
              <TgPhone messages={convCatalogue} />
            </Reveal>
          </div>
        </section>


        {/* ---------- VITRINE TABLEAU DE BORD ---------- */}
        <section className="relative pb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal className="text-center mb-10">
              <Kicker>Le tableau de bord</Kicker>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Toute votre activité, <span className="text-red-500">d&apos;un coup d&apos;œil</span></h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-5">Ce qui reste à encaisser, qui relancer, quoi programmer, la météo de vos chantiers, vos chiffres. Au bureau sur l&apos;ordinateur, entre deux chantiers sur le téléphone.</p>
            </Reveal>
            <Reveal delay={0.1} className="relative">
              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-2 md:p-3 shadow-[0_40px_120px_rgba(220,38,38,0.18)]">
                <div className="flex items-center gap-1.5 px-2 pb-2 md:pb-3">
                  <span className="w-3 h-3 rounded-full bg-white/15" /><span className="w-3 h-3 rounded-full bg-white/15" /><span className="w-3 h-3 rounded-full bg-white/15" />
                  <span className="ml-3 flex-1 max-w-sm rounded-md bg-white/5 px-3 py-1 text-xs text-gray-500">myzelus.fr/tableau</span>
                </div>
                <button type="button" onClick={() => setZoom({ src: `${IMG}/accueil.png`, alt: "Tableau de bord Zelus" })} className="block w-full overflow-hidden rounded-xl">
                  <img src={`${IMG}/accueil.png`} alt="Tableau de bord Zelus : reste à encaisser, fil de l’argent, météo, carte des chantiers" className="w-full h-auto block" />
                </button>
              </div>
              <div className="hidden md:block absolute -bottom-10 -right-4 lg:-right-10 w-40 lg:w-48 rounded-[1.8rem] border border-white/15 bg-black p-1.5 shadow-2xl">
                <img src={`${IMG}/tel-accueil.png`} alt="Tableau de bord Zelus sur téléphone" className="rounded-[1.4rem] w-full" />
              </div>
            </Reveal>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ["Reste à encaisser", "en tête de page, retards compris"],
                ["Le fil de l’argent", "en attente, signé, facturé, encaissé"],
                ["Qui relancer, quoi programmer", "les actions du jour, en un clic"],
                ["Carte, agenda, chiffres", "chantiers, taux de signature, prévisions"],
              ].map(([a, b]) => (
                <div key={a} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-5">
                  <div className="text-white font-medium mb-1">{a}</div>
                  <div className="text-gray-400 text-sm">{b}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="#tableau" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium">Voir tous les écrans du tableau de bord <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </section>

        {/* ---------- LE PROBLÈME ---------- */}
        <section className="py-20 bg-[#0A0A0A] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <Reveal>
              <Kicker>Le constat</Kicker>
              <div className="flex items-baseline gap-4">
                <Moon className="w-8 h-8 text-red-500 self-center" />
                <span className="text-6xl md:text-7xl font-bold tracking-tight tabular-nums">21:47</span>
              </div>
              <p className="mt-4 text-2xl text-white font-medium">Le jour : les chantiers.<br /><span className="text-red-500">Le soir : les devis.</span></p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Un devis syndic, c'est quatre personnes", "Le syndic, la résidence, le gestionnaire, le gardien à joindre sur place. Une erreur, et tout est à refaire."],
                  ["Les relances passent à la trappe", "Un devis envoyé sans nouvelles, une facture pas réglée : personne n'a le temps d'y penser."],
                  ["Les mentions changent selon le client", "Rétractation, autoliquidation, franchise de TVA, facture électronique : difficile de tout savoir par cœur."],
                  ["On ne sait plus où on en est", "Ce qui est signé, ce qui reste à programmer, ce qui reste à encaisser : éparpillé entre carnet, mails et tableur."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
                    <div className="text-white font-medium mb-2">{t}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- LE PARCOURS ---------- */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal className="text-center mb-12">
              <Kicker>Le parcours</Kicker>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Du premier devis au dernier euro</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-5">Une seule conversation Telegram suit toute la vie d'une affaire. Le tableau de bord vous montre l'ensemble.</p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                [FileText, "Devis", "sur le chantier"], [PenLine, "Signature", "en ligne"], [Receipt, "Acompte", "facturé tout seul"],
                [CalendarDays, "Chantier", "programmé, client prévenu"], [Camera, "Suivi", "photos et rapport"], [LayoutDashboard, "Solde", "facturé, relancé, encaissé"],
              ].map(([I, a, b], i) => (
                <Reveal key={a} delay={i * 0.06} className="relative rounded-2xl border border-white/10 bg-neutral-900/50 p-5">
                  <div className="text-xs text-gray-500 mb-3 tabular-nums">0{i + 1}</div>
                  <I className="w-6 h-6 text-red-500 mb-3" />
                  <div className="text-white font-medium">{a}</div>
                  <div className="text-gray-400 text-sm">{b}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SOMMAIRE COLLANT ---------- */}
        <div className="sticky top-20 z-30 bg-[#050505]/90 backdrop-blur border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
            {sommaire.map(([h, l]) => (
              <a key={h} href={h} className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">{l}</a>
            ))}
          </div>
        </div>

        {/* ---------- FONCTIONNALITÉS ---------- */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Tableau de bord */}
          <section id="tableau" className="scroll-mt-28 py-16 md:py-24">
            <Reveal className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center"><LayoutDashboard className="w-5 h-5 text-red-500" /></div>
                <span className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Tableau de bord</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">Un seul écran pour savoir où vous en êtes</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Ce qui est signé, ce qui reste à programmer, ce qui reste à encaisser. Telegram fait, le tableau de bord montre : il s'ouvre au bureau comme sur le téléphone, avec un lien secret qui n'appartient qu'à vous.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <div className="flex flex-wrap gap-2 mb-5">
                {dashTabs.map((d) => (
                  <button key={d.key} onClick={() => setDashTab(d.key)}
                    className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${dashTab === d.key ? "bg-red-600 border-red-600 text-white" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"}`}>
                    {d.label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 items-start">
                <div>
                  <Shot src={`${IMG}/${dash.img}`} alt={`Tableau de bord Zelus : ${dash.label}`} onZoom={setZoom} />
                  <p className="text-gray-300 mt-4">{dash.text}</p>
                </div>
                <div className="hidden lg:block">
                  <div className="rounded-[2rem] border border-white/15 bg-black p-2 shadow-2xl">
                    <img src={`${IMG}/tel-accueil.png`} alt="Tableau de bord Zelus sur téléphone" className="rounded-[1.6rem] w-full" />
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3">Le même tableau de bord, sur le téléphone</p>
                </div>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                [Clock, "Aujourd'hui", "Qui relancer, quoi programmer, ce qui rentre cette semaine."],
                [CloudSun, "Météo et vigilances", "Les 7 prochains jours sur vos chantiers, alertes Météo-France."],
                [Search, "Recherche", "Un client, un lieu, un devis, une facture, une adresse : tout se retrouve."],
                [FileText, "Bilan du mois", "Objectif mensuel, comparaison avec l'an passé, bilan en PDF."],
              ].map(([I, a, b]) => (
                <div key={a} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-5">
                  <I className="w-5 h-5 text-red-500 mb-3" />
                  <div className="text-white font-medium mb-1">{a}</div>
                  <div className="text-gray-400 text-sm">{b}</div>
                </div>
              ))}
            </div>
          </section>

          <Feature
            id="devis" icon={FileText} kicker="Devis"
            title="Le devis se fait sur le chantier, pas le soir"
            text="Zelus vous pose les questions dans l'ordre, avec des boutons. Il retrouve le client dans l'annuaire officiel des entreprises, garde la fiche de chaque lieu d'intervention, et vous fait piocher dans votre catalogue de prestations. Le devis PDF est généré et envoyé par mail depuis votre adresse."
            bullets={[
              "Client nouveau ou existant, retrouvé par son nom ou son SIREN",
              "Lieux d'intervention, contacts sur place et particularités gardés en mémoire",
              "Catalogue de prestations avec prix, unités et descriptions ; une nouvelle prestation se crée en cours de route",
              "Résumé avant génération, modification et nouvelle version (V2, V3) après envoi",
              "Devis rangé automatiquement dans le dossier Drive du client",
            ]}
            example="Chez une résidence à Nice : vous tapez « Aubert », puis « Nice ». Zelus trouve le Cabinet Aubert dans l'annuaire avec son SIRET, propose la Résidence Les Mimosas déjà connue avec son gestionnaire et sa gardienne. Deux détections de fuite au catalogue, et le devis de 924 € TTC est parti avant de remonter dans le camion."
            visual={<TgPhone messages={convDevis} />}
          />

          <Feature
            id="documents" icon={ShieldCheck} kicker="Documents" reverse
            title="Un devis juste du premier coup"
            text="Les mentions obligatoires changent selon le client. Zelus les connaît et les imprime pour vous : vous n'avez plus à vous demander quelle phrase mettre en bas de page. Choisissez un type de client pour voir la différence."
            example="Vous êtes sous-traitant pour une entreprise générale : le devis part sans TVA, avec « Autoliquidation de la TVA par le preneur — art. 283-2 nonies du CGI ». Pour un particulier, c'est la rétractation de 14 jours et la case pour commencer plus tôt."
            visual={
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {devisTabs.map((d) => (
                    <button key={d.key} onClick={() => setDevisTab(d.key)}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${devisTab === d.key ? "bg-red-600 border-red-600 text-white" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"}`}>
                      <d.icon className="w-4 h-4" /> {d.label}
                    </button>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{devis.rule}</p>
                <div className="max-w-md mx-auto">
                  <Shot src={`${IMG}/${devis.img}`} alt={`Devis ${devis.label} généré par Zelus`} onZoom={setZoom} className="bg-white" />
                </div>
              </div>
            }
          />

          <Feature
            id="signature" icon={PenLine} kicker="Signature et acompte"
            title="Le client signe en ligne. L'acompte part tout seul."
            text="Le mail du devis contient un lien vers une page de signature : le client lit, coche, signe du doigt ou à la souris. Vous êtes prévenu dans Telegram, la facture d'acompte est émise, envoyée en pièce jointe et rangée. Le devis signé est régénéré avec la signature."
            bullets={[
              "Signature sur téléphone ou ordinateur, sans compte à créer",
              "Acceptation manuelle possible (bon pour accord papier, accord par téléphone)",
              "Le particulier peut demander à commencer avant la fin du délai de rétractation, c'est enregistré",
              "Devis perdu : vous notez le motif, il compte dans vos statistiques",
            ]}
            example="Le gestionnaire du syndic ouvre le mail à son bureau et signe. Dans la minute, vous recevez « 🎉 Devis accepté ! » avec la facture d'acompte de 462 € déjà partie chez lui."
            visual={<TgPhone messages={convAcceptation} />}
          />

          <Feature
            id="relances" icon={Bell} kicker="Relances" reverse
            title="Plus aucun devis oublié, plus aucune facture qui traîne"
            text="Un devis sans réponse est relancé automatiquement à J+3 puis à J+7, avec un mail à vos couleurs. Les factures non réglées sont relancées à leur tour, jusqu'à la mise en demeure. Vous gardez la main : arrêter les relances d'un client, relancer à la main, marquer une facture payée."
            bullets={[
              "Relances de devis à J+3 et J+7",
              "Relances de factures automatiques, plus une relance manuelle à tout moment",
              "Facture toujours jointe au mail, en plus du lien",
              "« Déjà payé » avec le mode de règlement, pour que les relances s'arrêtent",
            ]}
            example="Mme Lambert n'a pas répondu au devis du mitigeur. Trois jours plus tard, elle reçoit un rappel poli. Elle signe le soir même. Vous n'avez rien eu à faire."
            visual={<Shot src={`${IMG}/retards.png`} alt="Factures en retard dans le tableau de bord Zelus" onZoom={setZoom} />}
          />

          <Feature
            id="factures" icon={Receipt} kicker="Factures"
            title="Des factures prêtes pour la facture électronique"
            text="Acompte à la signature, solde à la fin du chantier, facture d'intervention pour un dépannage payé sur place, avoir quand un chantier est annulé. Chaque facture est numérotée sans trou, produite au format de la facture électronique avec son fichier de données intégré, envoyée et rangée."
            bullets={[
              "Facture d'acompte automatique à la signature",
              "Facture de solde calculée en fin de chantier, avec aperçu avant émission",
              "Facture d'intervention : heure d'arrivée, paiement sur place, facture acquittée",
              "Avoirs sur un acompte quand un chantier s'arrête",
              "Relevé comptable et règlements à compléter, pour votre comptable",
            ]}
            example="Un dépannage de climatisation un samedi : vous notez votre heure d'arrivée, le client paie par carte sur place, la facture acquittée part dans sa boîte mail avant que vous ayez rangé vos outils."
            visual={<Shot src={`${IMG}/st-argent.png`} alt="Signé, facturé, encaissé dans Zelus" onZoom={setZoom} />}
          />

          <Feature
            id="chantiers" icon={CalendarDays} kicker="Programmation" reverse
            title="Le chantier se programme, le client est prévenu"
            text="Une fois le devis signé, Zelus vous propose les créneaux libres de votre agenda Google, en tenant compte du délai de rétractation et de la durée estimée sur le devis. Le client reçoit un rappel deux jours avant. Un report, une pause, une annulation : le client est prévenu par un mail clair."
            bullets={[
              "Créneaux libres proposés, conflit signalé si le créneau est déjà pris",
              "Reprogrammer, reporter sans date, redonner une date",
              "Rappel d'intervention au client ou à l'occupant, avec confirmation de présence",
              "Météo des 7 jours et vigilances Météo-France sur vos chantiers",
              "Annuler ou mettre en pause, avec l'avoir sur l'acompte si besoin",
            ]}
            example="Vous posez la détection de fuite jeudi de 8 h à 17 h. Mardi, la gardienne reçoit le rappel et confirme sa présence d'un clic. Vous le voyez dans Telegram."
            visual={
              <div className="space-y-4">
                <Shot src={`${IMG}/cal-semaine.png`} alt="Agenda des chantiers dans Zelus" onZoom={setZoom} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {convChantier.slice(0, 2).map((m) => (
                    <div key={m.t} className="rounded-2xl bg-[#182533] border border-white/5 p-4 text-[13px] leading-snug text-gray-100 whitespace-pre-line">
                      <div className="flex items-center gap-2 text-[11px] text-[#6c8aa5] mb-2"><img src={`${IMG}/icone-zelus.svg`} alt="" className="w-4 h-4" />Telegram · Zelus</div>
                      {m.t}
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <Feature
            id="suivi" icon={Camera} kicker="Suivi de chantier" option="Option"
            title="Le journal du chantier, dans votre poche"
            text="Démarrez le chantier, envoyez vos photos dans la conversation : Zelus les range dans le bon dossier Drive, par chantier et par étape. Un problème sur place, un client à prévenir, des travaux en plus : tout se note et se trace, jusqu'à l'avenant."
            bullets={[
              "Démarrage du chantier et heure d'arrivée",
              "Photos avant, pendant, après, rangées et numérotées automatiquement",
              "Problèmes signalés, client prévenu en un message",
              "Avenant quand le chantier change",
            ]}
            example="Vous envoyez trois photos de la colonne d'eau ouverte. Elles se rangent dans « Résidence Les Mimosas · Pendant les travaux », prêtes pour le rapport."
            visual={<TgPhone messages={convChantier.slice(2)} />}
          />

          <Feature
            id="rapport" icon={Mic} kicker="Rapport de chantier" option="Option" reverse
            title="Dictez, Zelus rédige le rapport"
            text="Racontez le chantier en une note vocale, comme à un collègue. Zelus transcrit, rédige un rapport clair et professionnel, vous fait choisir les photos sur une page simple, puis produit un PDF à vos couleurs. Vous relisez avant l'envoi : rien ne part sans vous."
            bullets={[
              "Rapport en cours de chantier ou rapport de fin",
              "Note vocale ou texte tapé, au choix",
              "Choix et retouche des photos sur une page dédiée",
              "PDF envoyé au client par un lien, copie dans Drive",
            ]}
            example="42 secondes de note vocale dans le camion : « fuite trouvée sous le local poubelles, raccord repris, essai en pression OK, prévoir le remplacement du tronçon au printemps ». Le syndic reçoit un rapport de deux pages avec les photos."
            visual={<TgPhone messages={convRapport} />}
          />

          {/* Fiches, micro, couleurs */}
          <section className="py-16 md:py-24 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal className="rounded-2xl border border-white/10 bg-neutral-900/50 p-7">
                <Users className="w-6 h-6 text-red-500 mb-4" />
                <h4 className="text-xl font-medium text-white mb-3">Fiches clients et lieux</h4>
                <p className="text-gray-400 leading-relaxed">Chaque client a sa fiche : coordonnées, lieux d'intervention, contacts sur place, notes, devis et factures. Une fiche se corrige dans Telegram ou depuis le tableau de bord, un dossier Drive est créé pour chaque client.</p>
              </Reveal>
              <Reveal delay={0.08} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-7">
                <ShieldCheck className="w-6 h-6 text-red-500 mb-4" />
                <h4 className="text-xl font-medium text-white mb-3">Auto-entrepreneur</h4>
                <p className="text-gray-400 leading-relaxed mb-4">Devis et factures sans TVA avec la bonne mention, et un suivi de votre chiffre d'affaires de l'année. Zelus vous prévient à l'approche du plafond.</p>
                <div className="rounded-xl bg-[#182533] text-gray-100 text-[13px] p-3 whitespace-pre-line">{convMicro[0].t}</div>
              </Reveal>
              <Reveal delay={0.16} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-7">
                <Palette className="w-6 h-6 text-red-500 mb-4" />
                <h4 className="text-xl font-medium text-white mb-3">À votre image</h4>
                <p className="text-gray-400 leading-relaxed">Votre logo, votre couleur, votre police sur les devis, les factures, les rapports et les mails. Les mails partent de votre adresse Gmail, les chantiers vont dans votre agenda, les documents dans votre Drive. Vos clients voient votre entreprise, pas un logiciel.</p>
              </Reveal>
            </div>
          </section>
        </div>

        {/* ---------- OPTIONS ---------- */}
        <section id="options" className="scroll-mt-28 py-24 bg-[#0A0A0A] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal className="text-center mb-14">
              <Kicker>Les options</Kicker>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Vous prenez ce dont vous avez besoin</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-5">
                Le socle couvre tout le cycle avec vos clients particuliers. Les options s'ajoutent selon vos clients et votre façon de travailler. Sans une option, ses boutons restent visibles avec un <Lock className="inline w-4 h-4 -mt-1 text-amber-300" /> : vous voyez ce qu'elle apporterait avant de la prendre.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {options.map((o, i) => (
                <Reveal key={o.name} delay={i * 0.06}
                  className={`relative flex flex-col rounded-2xl border p-7 ${o.included ? "border-red-500/50 bg-neutral-900/70 shadow-[0_0_30px_rgba(220,38,38,0.15)]" : "border-white/10 bg-neutral-900/50"}`}>
                  <div className="absolute -top-3 left-7 px-3 py-1 rounded-full text-xs font-medium text-white bg-red-500" style={o.included ? {} : { background: o.soon ? "#3a3f48" : "#262626" }}>
                    {o.included ? "Inclus" : o.soon ? "Bientôt" : "Option"}
                  </div>
                  <div className="flex items-center gap-3 mb-4 mt-1">
                    <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center"><o.icon className="w-5 h-5 text-red-500" /></div>
                    <div>
                      <div className="text-xl font-medium text-white">{o.name}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500">{o.tag}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-5">{o.desc}</p>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {o.items.map((it) => (
                      <li key={it} className="flex gap-3 text-gray-300 text-[15px]"><Check className="w-5 h-5 text-nikaia flex-shrink-0" />{it}</li>
                    ))}
                  </ul>
                  <button onClick={() => openContact(`Zelus — ${o.name}`)}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-colors ${o.included ? "bg-red-600 hover:bg-red-700 text-white" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"}`}>
                    {o.soon ? "Être prévenu" : "Demander le tarif"} <ArrowRight className="w-4 h-4" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="scroll-mt-28 py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <Reveal className="text-center mb-12">
              <Kicker>Questions fréquentes</Kicker>
              <h2 className="text-4xl font-semibold tracking-tight">Ce qu'on nous demande</h2>
            </Reveal>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} className="rounded-2xl border border-white/10 bg-neutral-900/50">
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
                    <span className="text-white font-medium">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <p className="px-6 pb-5 text-gray-400 leading-relaxed">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="pb-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal className="relative overflow-hidden rounded-3xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#131418] via-[#1a1214] to-[#3a0d12]" />
              <img src={`${IMG}/icone-zelus.svg`} alt="" className="absolute -right-24 top-1/2 -translate-y-1/2 w-[620px] max-w-none opacity-25 pointer-events-none" />
              <div className="relative px-8 md:px-16 py-16 md:py-20 ">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">Artisans des Alpes-Maritimes,<br /><span className="text-red-500">parlons-en.</span></h2>
                <p className="text-gray-300 text-lg max-w-xl mt-5">On vous montre Zelus avec des exemples de votre métier. Sans engagement.</p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <button onClick={() => openContact()} className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium">
                    Voir une démonstration <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href="https://wa.me/33619251902" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer onContact={() => openContact()} />
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
