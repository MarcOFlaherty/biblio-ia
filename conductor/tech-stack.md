# Tech Stack — Biblio IA

> **Repo de contenu, pas de code applicatif.** Le « stack » est volontairement minimal. Toute
> montée en complexité (framework, build, base de données) doit être justifiée par un besoin
> prouvé et documentée ici *avant* implémentation.

## Contenu

- **Markdown plat** : `README.md`, `MODELE.md`, `fiches/*.md`. Aucun framework, aucun build.
- Lisible tel quel sur **GitHub** (mobile OK), édité via le bouton crayon, historisé par git.

## Rendu / hébergement

- **GitHub** (dépôt public `mofy-scpo/biblio-ia`) — rendu Markdown natif.
- **GitHub Pages** via **Jekyll** intégré (`_config.yml`) — site web sans build ni dépendances.
- Licence contenu : **CC BY 4.0**.

## Outillage (léger, si besoin prouvé)

- **Bun + TypeScript** pour les scripts utilitaires (jamais npm/npx, jamais Python ici).
  - **En place** : **vérificateur de liens** (`tools/check-links.ts`) — extrait les URLs des fiches et
    teste qu'elles résolvent (HTTP 200), au service de la règle « aucun lien mort ». Usage : `bun tools/check-links.ts`.
- **GitHub Actions** (optionnel) pour lancer le vérificateur de liens sur les PR.

## Explicitement hors-stack

- Pas de CMS, pas de base de données, pas d'authentification/OAuth.
- Pas de générateur de site à build (Astro/Next…) — retiré comme *overkill*.
- Pas de génération PDF/HTML embarquée (le format PDF « joli » d'une IA reste une référence de mise
  en forme, pas un pipeline du repo).
