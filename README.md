# Biblio IA

Petite bibliothèque partagée de **veille et de fact-checking sur l'IA** (pour notre groupe).
Des fiches en Markdown, où **chaque affirmation porte sa source et son niveau de confiance** —
l'antidote au « une IA a dit que… ».

> **🌐 Site : <https://mofy-scpo.github.io/biblio-ia/>** — navigation + recherche.
> C'est là qu'on lit les **actualités** (ce qu'on vérifie), les **ressources** (ce qu'on partage) et les règles.

> Prototype. On structure nos découvertes petit à petit. Nom `biblio-ia` = provisoire.

## Ce qu'il y a dans le dépôt

- `fiches/*.md` — les **actualités** (fact-checks) · `ressources/*.md` — les **ressources** partagées.
- `index.md`, `actualites.md`, `ressources.md`, `regles.md` — les pages du site.
- `MODELE.md` — les modèles (actualité + ressource) et les conventions.
- `tools/check-links.ts` — vérificateur de liens (voir plus bas).
- `conductor/` — suivi de projet ([Conductor](https://github.com/gemini-cli-extensions/conductor)) ; non publié sur le site.

## Ajouter ou corriger un contenu

- **Ajouter une actualité** (fact-check) : un `.md` dans `fiches/`, ajouté à `actualites.md`.
- **Ajouter une ressource** (guide / lien) : un `.md` dans `ressources/`, ajouté à `ressources.md`.
- Dans les deux cas, copier le bon bloc de [`MODELE.md`](MODELE.md) (front-matter compris). Sur
  GitHub : **Add file → Create new file**.
- **Corriger** : sur le site, bouton **✏️ Corriger cette page sur GitHub** en bas de page ; ou
  ouvrir la fiche sur GitHub → crayon **✏️ Edit** → *Commit*. Aucune commande git, juste un compte GitHub.
- **Vérifier les liens** *(optionnel, si tu as [`bun`](https://bun.sh))* : `bun tools/check-links.ts`
  teste que toutes les URLs des contenus (actualités + ressources) résolvent (HTTP 200). À lancer
  avant de proposer un contenu — aucun lien mort ne doit être diffusé.

## Les règles, en un mot

Chaque affirmation est **sourcée** et **taguée** (✅ confirmé · 🟡 probable · 🟠 rumeur · 🔵 spéculation ·
⛔ à vérifier), le **fait** séparé de l'**analyse**. Détail complet sur la page **Règles** du site.

## Licence

Contenu sous [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.fr) *(réutilisable avec attribution, usage non commercial)*.
