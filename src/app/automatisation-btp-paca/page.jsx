export const metadata = {
  title: "Automatisation BTP & Construction PACA — NikaIA Automations",
  description: "Spécialiste en automatisation pour le BTP et la construction en région PACA. NikaIA automatise vos devis, rapports de chantier, relances et plannings. Basé à Nice.",
  keywords: "automatisation BTP PACA, automatisation construction Nice, digitalisation BTP, rapports chantier automatiques, devis automatique BTP, NikaIA",
};

export default function AutomatisationBTPPaca() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-6 py-32">

        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: '#de0917' }}>
          Automatisation BTP · Construction · PACA
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Automatisation pour le BTP<br />
          <span style={{ color: '#de0917' }}>en région PACA</span>
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed mb-12">
          NikaIA Automations est spécialisé dans l'automatisation des entreprises du BTP et de la 
          construction en région PACA. Devis, rapports de chantier, relances clients, plannings — 
          on automatise tout ce qui vous fait perdre du temps sur le terrain et au bureau.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Le problème du BTP sans automatisation</h2>
            <p className="text-gray-400 leading-relaxed">
              Dans le BTP, les techniciens perdent des heures à rédiger des rapports à la main. 
              Les devis partent en retard. Les relances s'oublient. Les donneurs d'ordre exigent 
              des documents conformes — sans ça, les paiements bloquent.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">18 ans de terrain dans le BTP</h2>
            <p className="text-gray-400 leading-relaxed">
              Fred Raspo a exercé pendant 18 ans dans le bâtiment — manœuvre, conducteur de travaux, 
              directeur technique. Il connaît vos contraintes de l'intérieur et automatise exactement 
              ce qui vous freine.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Ce qu'on automatise dans le BTP</h2>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>→ Rapports de chantier depuis le terrain</li>
              <li>→ Devis générés automatiquement</li>
              <li>→ Relances clients à J+3 sans réponse</li>
              <li>→ Plannings RH hebdomadaires</li>
              <li>→ Suivi des interventions et facturation</li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Secteurs BTP accompagnés en PACA</h2>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>→ Électricité et plomberie</li>
              <li>→ Fermetures industrielles et menuiserie</li>
              <li>→ Gros œuvre et maçonnerie</li>
              <li>→ CVC et climatisation</li>
              <li>→ Peinture et revêtements</li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-neutral-900/50 border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Diagnostic gratuit pour votre entreprise BTP</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Basé à Nice, on intervient dans tout le 06 et la région PACA. 
            On analyse vos process et on vous propose un plan d'action concret. Sans engagement.
          </p>
<a href="/" className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium text-lg" style={{ backgroundColor: '#de0917' }}>
            Demander mon diagnostic gratuit
          </a>
          <p className="text-gray-600 text-sm mt-4">
            Nice · Alpes-Maritimes · Var · Bouches-du-Rhône · Région PACA
          </p>
        </div>

      </div>
    </div>
  );
}