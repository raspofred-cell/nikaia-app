"use client";
export const metadata = {
  title: "Agent IA à Nice — Chatbot et Assistant Virtuel — NikaIA Automations",
  description: "Déployez un agent IA sur votre site ou WhatsApp à Nice. NikaIA crée des assistants virtuels intelligents pour qualifier vos leads et répondre à vos clients 24h/24.",
  keywords: "agent IA Nice, chatbot Nice, assistant virtuel Nice, IA entreprise Nice, chatbot WhatsApp PACA, NikaIA",
};

export default function AgentIANice() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#de0917' }}>Agent IA · Chatbot · Nice · PACA</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Agent IA pour votre entreprise<br />
          <span style={{ color: '#de0917' }}>à Nice et en région PACA</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-12">
          Un agent IA répond à vos prospects 24h/24, qualifie leurs demandes et vous transmet uniquement les contacts sérieux. Fini les appels perdus, les messages sans réponse, les leads qui partent chez le concurrent.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Qu'est-ce qu'un agent IA ?</h2>
            <p className="text-gray-400 leading-relaxed">Un agent IA est un assistant virtuel intelligent intégré à votre site web ou WhatsApp. Il répond aux questions de vos prospects, collecte leurs coordonnées et vous alerte uniquement quand un lead est qualifié et prêt à acheter.</p>
          </div>
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Pourquoi un agent IA à Nice ?</h2>
            <p className="text-gray-400 leading-relaxed">Les entreprises niçoises reçoivent des demandes en dehors des heures de bureau. Un agent IA ne dort jamais — il répond à 23h un dimanche et vous transmet le contact le lundi matin avec toutes les informations.</p>
          </div>
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Ce que fait l'agent IA</h2>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>→ Répond aux questions fréquentes</li>
              <li>→ Qualifie les demandes de devis</li>
              <li>→ Collecte nom, email, téléphone</li>
              <li>→ Vous alerte en temps réel</li>
              <li>→ Disponible sur site web et WhatsApp</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Pour quels secteurs à Nice ?</h2>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>→ BTP et artisans</li>
              <li>→ Commerces et boutiques</li>
              <li>→ Professions libérales</li>
              <li>→ Immobilier</li>
              <li>→ Toute PME avec des prospects entrants</li>
            </ul>
          </div>
        </div>
        <div className="text-center bg-neutral-900/50 border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Déployez votre agent IA à Nice</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">On vous configure un agent IA sur mesure en 2 semaines. Diagnostic gratuit pour voir comment l'intégrer à votre activité.</p>
          <a href="/" className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium text-lg" style={{ backgroundColor: '#de0917' }}>Demander mon diagnostic gratuit</a>
          <p className="text-gray-600 text-sm mt-4">Nice · Alpes-Maritimes · Région PACA · Réponse sous 24h</p>
        </div>
      </div>
    </div>
  );
}