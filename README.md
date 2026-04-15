# Mamouda Ndam Biofil - Next.js

Site vitrine migré vers **Next.js App Router** avec Tailwind CSS v4.

## Prérequis

- Node.js 18+
- npm

## Lancer en local

1. Installer les dépendances:
   ```bash
   npm install
   ```
2. Démarrer le serveur de développement:
   ```bash
   npm run dev
   ```
3. Ouvrir [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev`: développement
- `npm run build`: build de production
- `npm run start`: lancement du build
- `npm run lint`: vérification TypeScript

## Structure importante

- `src/app`: routes Next.js App Router
- `src/components`: composants partagés (navbar, footer, shell)
- `public/images`: images statiques servies via `/images/...`

## Déploiement Vercel

- Framework Preset: **Next.js**
- Root Directory: racine du projet
- Build Command: `npm run build`
- Install Command: `npm install`

En cas de cache Vercel obsolète après migration (ex: ancienne résolution Vite), relancer un déploiement avec **Clear build cache**.
