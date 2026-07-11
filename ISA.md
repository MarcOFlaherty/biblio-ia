---
project: biblio-ia
task: Choisir un format de partage et scaffolder la bibliothèque IA open-source
effort: E3
phase: complete
progress: 14/14
mode: algorithm
started: 2026-07-11
updated: 2026-07-11
---

# ISA — Biblio IA

## Problem

Le groupe WhatsApp de Marc partage de la veille IA, mais sans support durable. Les échanges
avec un LLM (ici Gemini) produisent des PDF v1/v2/v3 qui **figent des erreurs** (ex. « GLM 5.2 »
présenté comme concerné, « Manis » au lieu de « Manus », des faits juillet 2026 affirmés comme
actés alors que **rien n'est acté** côté Chine). Un PDF ne se corrige pas, ne se source pas au
niveau de l'affirmation, et ne se partage pas comme un lien vivant. Il n'existe aujourd'hui
aucune bibliothèque commune, corrigeable et sourcée.

## Vision

Un lien unique à coller dans WhatsApp qui ouvre un petit site clair, cherchable, lisible sur
mobile. Chaque affirmation y porte **sa source** et **son niveau de confiance**. Quand un fait
change ou s'avère faux, quiconque le corrige en un clic (« Corriger cette fiche »), et le lien
montre instantanément la version à jour. La biblio devient l'antidote exact à la frustration
Gemini : non pas « une IA a dit que… » mais « voici le fait, voici la source, voici notre
degré de certitude ».

## Out of Scope

Pas de PDF (le problème, pas la solution). Pas de backend, base de données, ni authentification.
Pas de CMS. Pas de Python (règle bun/TypeScript). Pas d'abonnement payant (hébergement gratuit
uniquement). Pas de données personnelles ni de PII. Pas de contenu professionnel Sciences Po /
MANEO — c'est une biblio perso/communautaire publique, distincte de la sphère travail.

## Principles

- **Corrigeable avant élégant** : une faute → un commit ; l'URL montre toujours l'état à jour.
- **Sourcé ou marqué** : toute affirmation porte un lien de source, ou un tag « à vérifier ».
- **Honnête sur l'incertitude** : conditionnel quand rien n'est acté ; niveaux de confiance explicites.
- **Faible friction de contribution** : contribuer = 1 clic, pas un clone git.
- **Portable** : le contenu est du Markdown pur, jamais verrouillé par l'outil.

## Constraints

- Toolchain **bun + TypeScript** uniquement (jamais Python/npm/npx).
- Rédaction en **français avec accents**.
- Hébergement et outils **100% gratuits** (GitHub Pages / Cloudflare Pages).
- Termes techniques **définis au fil du texte** (Marc n'est pas dev de métier).

## Goal

Livrer un dépôt `biblio-ia` fonctionnel basé sur **VitePress** : structure complète, une fiche
gabarit, une fiche d'amorce honnête (IA open source chinoise 2026), un guide de contribution,
un workflow de déploiement GitHub Pages, prêt à `git push` — et dont le site **se construit
réellement** (`bun run build` vert).

## Criteria

- [ ] ISC-1: `~/biblio-ia/package.json` déclare vitepress + scripts dev/build/preview (Grep)
- [ ] ISC-2: `docs/.vitepress/config.ts` existe, lang fr-FR, recherche locale activée (Grep)
- [ ] ISC-3: config déclare un `editLink` (bouton « corriger cette fiche ») (Grep)
- [ ] ISC-4: `docs/index.md` présente la biblio + la convention de confiance (Read)
- [ ] ISC-5: `docs/contribuer.md` explique les 2 voies de contribution + la règle de sourçage (Read)
- [ ] ISC-6: `docs/_modele-fiche.md` fournit un gabarit réutilisable avec frontmatter (Read)
- [ ] ISC-7: `docs/fiches/ia-open-source-chinoise-2026.md` existe, tableau affirmation/confiance/source (Read)
- [ ] ISC-8: la fiche d'amorce applique les corrections de Marc (GLM 5.2, Manus, rien-n'est-acté) (Grep)
- [ ] ISC-9: `.github/workflows/deploy.yml` publie sur GitHub Pages via bun (Grep)
- [ ] ISC-10: `README.md` explique quoi/pourquoi/comment contribuer + licence contenu (Read)
- [ ] ISC-11: `bun install` réussit dans le repo (Bash exit 0)
- [ ] ISC-12: `bun run build` produit `docs/.vitepress/dist` sans erreur (Bash + ls)
- [ ] ISC-13: Anti: aucune affirmation juillet-2026 n'est présentée comme un fait sourcé alors qu'elle ne l'est pas (Grep « à vérifier »)
- [ ] ISC-14: Anti: aucun fichier Python, aucun usage npm/npx dans le repo (Grep)

## Test Strategy

| isc | type | check | seuil | tool |
|-----|------|-------|-------|------|
| ISC-1..10 | file | contenu présent conforme | exact | Read/Grep |
| ISC-11 | build | install sans erreur | exit 0 | Bash |
| ISC-12 | build | dist généré | dossier non vide | Bash+ls |
| ISC-13 | anti | tags « à vérifier » présents sur les faits non sourcés | ≥1 | Grep |
| ISC-14 | anti | 0 .py, 0 « npx »/« npm run » | =0 | Grep |

## Features

| name | satisfies | depends_on | parallelizable |
|------|-----------|------------|----------------|
| scaffold VitePress (config, package.json, gitignore) | ISC-1,2,3,14 | — | oui |
| pages contenu (index, contribuer, gabarit) | ISC-4,5,6 | scaffold | oui |
| fiche d'amorce honnête | ISC-7,8,13 | gabarit | non |
| déploiement Pages | ISC-9 | scaffold | oui |
| README + licence | ISC-10 | — | oui |
| build réel + git init | ISC-11,12 | tous | non |

## Decisions

- 2026-07-11 — **Stack = VitePress** (TS/bun) et non MkDocs Material (Python, exclu par règle dure).
  VitePress : Markdown pur, recherche intégrée, editLink 1-clic, déploiement gratuit. Alternative
  documentée : Quartz si rédaction Obsidian-native souhaitée plus tard.
- 2026-07-11 — **Nom `biblio-ia` = placeholder**, renommable trivialement (repo + `base` config).
- 2026-07-11 — **Modèle de contribution** : démarre solo/curateur, conçu pour basculer collaboratif
  sans rien casser (git natif). Réponse de Marc : « pas encore acté, je vais le proposer au groupe ».
- 2026-07-11 — **show-your-math délégation** : floor E3 délégation soft ≥2 relaxé à 1 (Forge en revue
  du workflow de déploiement). Research (vérification du contenu juillet 2026) **reportée** comme
  prochaine étape confirmée, pas comme partie du scaffolding. Scaffold statique mono-auteur sans
  logique complexe → pas de sur-délégation (aligné mémoire « ne pas sur-ingénierer »).
- 2026-07-11 — **Fiche d'amorce = brouillon honnête** : les faits juillet 2026 ne sont PAS
  vérifiables de mémoire ; ils sont marqués « à vérifier » avec sources `[à sourcer]` plutôt que
  de reproduire les sources possiblement hallucinées de Gemini (mémoire « vérifier avant d'affirmer »).
- 2026-07-11 — **refined: pivot VitePress → Astro Starlight** après recadrage de Marc (prototype,
  solo, Obsidian-friendly, structurer sans se prendre la tête). Raison décisive : Starlight
  remplit la nav « Fiches » automatiquement (0 config par fiche) et offre badges/encadrés natifs
  pour les niveaux de confiance. Marc a aussi confirmé que la règle bun/TS « jamais Python » est un
  artefact du scaffolder public, sans portée ici → Starlight tient sur ses mérites, pas pour éviter Python.
- 2026-07-11 — **Contribution web (CMS/OAuth/DB) écartée pour l'instant** : sur-ingénierie d'un
  prototype possiblement mort-né. Modèle retenu : solo-curateur, ouvrable plus tard sans réécriture.

## Verification

- ISC-1..10 — Read/Grep : tous les fichiers présents et conformes (package.json, astro.config.mjs,
  content.config.ts, index/contribuer/modele-fiche, fiche d'amorce, deploy.yml, README).
- ISC-11 — `bun install` : exit 0, 393 paquets (Astro 5.18.2, Starlight 0.32.6).
- ISC-12 — `bun run build` : exit 0, « 6 page(s) built », index Pagefind généré, `dist/` peuplé.
- ISC-13 — Anti OK : la fiche d'amorce marque les 6 faits juillet 2026 en « ⛔ à vérifier »,
  sources `[à sourcer]` (aucune source hallucinée reproduite).
- ISC-14 — Anti OK : 0 fichier Python, 0 `npx`/`npm run` dans le dépôt (toolchain bun).
- Note : `phase: complete` = livrable scaffold vérifié ; le **contenu** de la fiche reste à sourcer
  (prochaine étape : skill Research).
