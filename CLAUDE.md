# biblio-ia — instructions projet

Bibliothèque de veille / fact-check IA. Repo Markdown plat servi en Jekyll.

## Deux familles de contenu — ne pas les confondre

- **Actualités** (`fiches/`, `parent: Actualités`) — l'actu qu'on **vérifie**. Chaque affirmation
  porte sa **source** et son **tag de confiance**. C'est là que s'applique tout l'arsenal de `regles.md`.
- **Ressources** (`ressources/`, `parent: Ressources`) — ce qu'on **partage** (guide, article, vidéo,
  outil). On **résume + attribue** (qui l'a dit, où) et on ajoute notre note. **Pas de tag de vérité** :
  on ne fact-checke pas un avis. Seule exigence de vérif : le **lien doit fonctionner**.

## Règle n°1 — appliquer les règles de la biblio AVANT d'écrire

Avant de créer ou modifier **tout contenu**, lire et appliquer :

- **`regles.md`** — la source unique de vérité : sourçage obligatoire, système de confiance
  (✅ confirmé · 🟡 probable · 🟠 rumeur · 🔵 spéculation · ⛔ à vérifier), distinction
  source primaire / presse, réflexe anti-hallucination (ouvrir le lien, reprise ≠ corroboration,
  un fait futur reste une prévision).
- **`MODELE.md`** — la structure canonique, avec **un modèle par famille** (actualité / ressource).
  À suivre, ne pas réinventer.

Ces deux fichiers **priment** sur toute habitude par défaut. S'ils évoluent, c'est eux qui font foi —
ne pas recopier leur contenu ailleurs (pas de duplication, pas de désync).

## Rappels de forme

- **Accents français obligatoires** (é, è, à, ç, …).
- **Dans le doute, descendre d'un cran** de confiance (règle d'or de `regles.md`) — *actualités*.
- Pas de source ? L'**actualité** porte `⛔ à vérifier` — on ne diffuse pas un fait non vérifié.
- Avant de publier : `bun tools/check-links.ts` doit être **vert** (aucun lien mort).
- Front-matter attendu : `title`, `parent`, `nav_order`, `date` (la `date` alimente le feed de l'accueil).

## Emplacements

- Actualités : `fiches/` (listées dans `actualites.md`) · Ressources : `ressources/` (listées dans `ressources.md`)
- Règles : `regles.md` · Modèles : `MODELE.md`
