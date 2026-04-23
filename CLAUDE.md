# nikaia-app — Contexte projet

## Description
Application web Nikaia Automations — site vitrine / outil interne de l'agence.

## Stack
- Next.js (React)
- Tailwind CSS
- Vercel (déploiement — voir `vercel.json`)
- Composants : `components/`, configuration dans `components.json`

## Structure
```
nikaia-app/
├── src/           — code source principal
├── api/           — routes API
├── components/    — composants React
├── public/        — assets statiques
├── plugins/       — plugins custom
├── next.config.js
├── tailwind.config.js
├── vercel.json
└── package.json
```

## Commandes utiles
```bash
npm run dev      # serveur de développement
npm run build    # build de production
npm run start    # serveur de production
```

## Déploiement
Hébergé sur Vercel. Ne jamais push/déployer sans validation explicite.
