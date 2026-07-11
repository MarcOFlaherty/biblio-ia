# Plan — Rigueur, vérif liens, UX Pages

Track : `rigueur-liens-ux_20260711`. Statut par tâche : `[ ]` à faire · `[~]` en cours · `[x]` fait (+ SHA).
Le plan suit le `workflow.md` **adapté contenu** (portes fact-check + liens, pas de TDD/couverture).

---

## Phase 1 — Rigueur éditoriale & modèle de fiche [checkpoint: ac1c376]

- [x] **1.1** Ajouter au `README.md` (section « Les règles ») la distinction **source primaire vs presse**
  et « **reprise ≠ corroboration** » (ne pas gonfler la confiance par des reprises). `318530f`
- [x] **1.2** Ajouter au `README.md` la règle « **un fait de demain reste une prévision** » (événement
  futur → `⛔ à venir` même si l'annonce est ✅). `33c0581`
- [x] **1.3** Mettre à jour `MODELE.md` : tableau de confiance **ligne à ligne**, section optionnelle
  « **faits liés mais hors-sujet** », section **Sources vérifiées** (liens testés), rappel accents FR + acronymes. `19d3004`
- [x] **1.4** Relire la fiche Chine à l'aune du modèle mis à jour (cohérence), corriger si écart. — *déjà conforme (aucun mislabel « primaire », sections alignées)*
- [x] **1.5 (checkpoint)** Vérification de fin de phase : liens règles/modèle OK, relecture faite,
  commit de checkpoint `ac1c376` (validation Marc demandée au moment du pause).

## Phase 2 — Vérification automatique des liens [checkpoint: ac1c376]

- [x] **2.1** Créer `tools/check-links.ts` (bun/TS) : extraire les URLs de `fiches/*.md`. `d4a0cde`
- [x] **2.2** Tester chaque URL (HTTP, UA navigateur, suivi des redirections) ; rapport lisible
  (URL → statut) ; **exit ≠ 0** si lien mort. `d4a0cde`
- [x] **2.3** Gérer les hôtes qui bloquent les robots (403/451) : les marquer « à vérifier manuellement »
  plutôt que « mort » (éviter les faux négatifs). `d4a0cde`
- [x] **2.4** Lancer `bun tools/check-links.ts` sur les fiches actuelles → **vert**. — *8/8 OK, exit 0* `d4a0cde`
- [ ] **2.5 (option)** GitHub Action lançant le vérificateur sur les PR (`.github/workflows/`). — *SKIP : option reportée pour ne pas alourdir le proto (à activer si le repo grandit)*
- [x] **2.6** Documenter l'usage dans `README.md` (section contribution : « vérifier les liens avant PR »). `11190c2`
- [x] **2.7 (checkpoint)** Vérification de fin de phase : vérificateur 8/8 OK, commit de checkpoint `ac1c376`.

## Phase 3 — UX du site GitHub Pages & use case limpide

- [ ] **3.1** Écrire, en tête de la home (rendu Pages), le **use case en 3 étapes** (partage → fiche sourcée → lien).
- [ ] **3.2** Vérifier/ajuster `_config.yml` (thème Jekyll) pour une navigation simple et lisible.
- [ ] **3.3** S'assurer que la **liste des fiches** est accessible en 1 clic depuis la home.
- [ ] **3.4** Vérifier le **rendu mobile** du site Pages (capture headless / Interceptor).
- [ ] **3.5 (checkpoint)** Vérification de fin de phase : capture mobile + desktop, OK utilisateur, commit de checkpoint.

---

## Notes d'implémentation

- Ordre conseillé : Phase 1 (rigueur, rapide, haute valeur) → Phase 2 (outil) → Phase 3 (UX).
- Chaque tâche = un commit ; conventions dans `workflow.md`.
- Garder le repo Markdown plat : l'unique code ajouté est `tools/check-links.ts`.
