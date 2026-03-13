function PrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-2">Politique de confidentialité</h1>
      <p className="text-gray-400 text-sm mb-10">Dernière mise à jour : mars 2026</p>

      <p className="mb-6">NikaIA Automations attache une grande importance à la protection de vos données personnelles.</p>

      <h2 className="text-xl font-semibold mt-10 mb-3">1. Responsable du traitement</h2>
      <p>NikaIA Automations — Nice, Alpes-Maritimes, France<br />
      Contact : <a href="mailto:contact@nikaia-automations.com" className="text-red-500">contact@nikaia-automations.com</a></p>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. Données collectées</h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-300">
        <li><strong>Formulaire de contact</strong> : nom, email, message.</li>
        <li><strong>Cookies</strong> : données de navigation anonymisées.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">3. Finalités</h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-300">
        <li>Répondre à vos demandes de contact ou de devis.</li>
        <li>Améliorer l'expérience utilisateur du site.</li>
        <li>Mesurer l'audience.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">4. Cookies</h2>
      <p className="text-gray-300">Nous utilisons des cookies techniques et d'analyse d'audience. Vous pouvez les refuser via le bandeau affiché à votre première visite.</p>

      <h2 className="text-xl font-semibold mt-10 mb-3">5. Durée de conservation</h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-300">
        <li>Formulaire de contact : 3 ans.</li>
        <li>Cookies : 13 mois maximum.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">6. Vos droits (RGPD)</h2>
      <p className="text-gray-300">Accès, rectification, effacement, portabilité, opposition. Contactez-nous à <a href="mailto:contact@nikaia-automations.com" className="text-red-500">contact@nikaia-automations.com</a> ou adressez une réclamation à la <a href="https://www.cnil.fr" className="text-red-500" target="_blank" rel="noreferrer">CNIL</a>.</p>

      <h2 className="text-xl font-semibold mt-10 mb-3">7. Partage des données</h2>
      <p className="text-gray-300">Vos données ne sont jamais vendues. Elles peuvent être transmises à des sous-traitants techniques uniquement dans le cadre de la prestation.</p>
    </div>
  );
}

export default PrivacyPolicy;