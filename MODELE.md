---
title: Modèle de fiche
nav_order: 4
---

# Modèle de fiche

Copie le bloc ci-dessous dans un nouveau fichier `fiches/mon-sujet.md` (nom en
minuscules-avec-tirets), remplace le contenu entre crochets, puis **ajoute la fiche à la liste de
[`fiches.md`]({{ '/fiches.html' | relative_url }})**. Toutes les sections marquées
*(optionnel)* se retirent si elles ne servent pas — une fiche courte reste une bonne fiche.

**Avant de publier**, vérifie : chaque affirmation a une **source** ou un **tag** ; chaque **lien
est ouvert et teste 200** ; **fait ≠ analyse** ; **français avec accents** ; acronymes définis à la
première occurrence (MOFCOM, NDRC, NPU…) ; source **primaire** (doc/acteur d'origine) distinguée de
la **presse** (secondaire). Voir les règles du [`README`](README.md).

````markdown
---
title: [Titre court de la fiche]
parent: Fiches
nav_order: [numéro d'ordre dans la liste des fiches]
---

# [Titre court de la fiche — de préférence une question]

> ⚠️ **Brouillon — à vérifier.** Retire cet encadré quand la fiche est solide et sourcée.
> (Quand elle est vérifiée, remplace-le par : « ✅ Fiche vérifiée le AAAA-MM-JJ, liens testés. »)

## La question
[La question à laquelle la fiche répond, en une ligne.]

## Réponse courte
[TL;DR en 2-3 phrases. Taguer 🔵 si c'est une analyse. Conditionnel si rien n'est acté.]

## Ce qui est avancé (et notre degré de confiance)
[Une ligne par affirmation. Chaque ligne a une source OU un tag ⛔/🟠/🔵 explicite.]

| Affirmation | Confiance | Source |
|---|---|---|
| [affirmation 1] | ✅ confirmé | [média + lien vérifié] |
| [affirmation 2] | 🟡 probable | [lien] |
| [affirmation 3] | ⛔ à vérifier | [à sourcer] |

## Autres faits liés — mais hors-sujet *(optionnel)*
[Quand un récit agrège des faits sans rapport : les lister, tagués, en disant POURQUOI c'est
hors-sujet. Dé-relier vaut autant que sourcer.]

| Affirmation | Confiance | Pourquoi c'est hors-sujet | Source |
|---|---|---|---|
| [fait réel mais sans rapport] | ✅ confirmé | [raison] | [lien] |

## Corrections apportées *(optionnel)*
[Erreurs d'un récit / d'une IA à ne pas reproduire : orthographe, attribution, date, chiffre…]

- ✅ [correction 1]

## Analyse
[Ce qu'on en pense — bien séparé des faits. Tag 🔵. Ce qu'aucune source n'établit reste une opinion.]

## Sources
[Sources vérifiées, une par ligne : média (date), titre, et lien testé (HTTP 200). Préciser
« reprise de X » si ce n'est pas une source indépendante. Le doc officiel, s'il n'est pas public,
se signale comme tel.]

- [Média (AAAA-MM-JJ), *Titre* : <https://…>]

## Historique
- [AAAA-MM-JJ] — [ce qui a changé]
````

Niveaux de confiance : ✅ confirmé · 🟡 probable · 🟠 rumeur · 🔵 spéculation · ⛔ à vérifier.
Règle d'or : **dans le doute, on descend d'un cran.**
