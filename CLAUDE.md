# biblio-ia — instructions projet

Bibliothèque de veille / fact-check IA. Repo Markdown plat servi en Jekyll.

## Règle n°1 — appliquer les règles de la biblio AVANT d'écrire

Avant de créer ou modifier **toute fiche**, lire et appliquer :

- **`regles.md`** — la source unique de vérité : sourçage obligatoire, système de confiance
  (✅ confirmé · 🟡 probable · 🟠 rumeur · 🔵 spéculation · ⛔ à vérifier), distinction
  source primaire / presse, réflexe anti-hallucination (ouvrir le lien, reprise ≠ corroboration,
  un fait futur reste une prévision).
- **`MODELE.md`** — la structure canonique d'une fiche (à suivre, ne pas réinventer).

Ces deux fichiers **priment** sur toute habitude par défaut. S'ils évoluent, c'est eux qui font foi —
ne pas recopier leur contenu ailleurs (pas de duplication, pas de désync).

## Rappels de forme

- **Accents français obligatoires** (é, è, à, ç, …).
- **Dans le doute, descendre d'un cran** de confiance (règle d'or de `regles.md`).
- Pas de source ? La fiche porte `⛔ à vérifier` — on ne diffuse pas un fait non vérifié.

## Emplacements

- Fiches : `fiches/` · Modèle : `MODELE.md` · Règles : `regles.md` · Ressources : `ressources.md`.
