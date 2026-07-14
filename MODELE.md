---
title: Modèles
nav_order: 5
---

# Modèles de contenu

La biblio a **deux types** de contenu :

- **Actualités** — l'actu IA qu'on *vérifie* : une question, chaque affirmation **sourcée + taguée**.
- **Ressources** — ce qu'on *partage* (guide, article, vidéo, outil) : on **résume + attribue**, sans tag de vérité (on ne fact-checke pas un avis).

Copie le bloc qui correspond dans un nouveau fichier, remplace le contenu entre crochets, puis
ajoute-le à la liste de la page correspondante.

---

## Modèle d'actualité (fact-check)

Nouveau fichier `fiches/mon-sujet.md` (minuscules-avec-tirets), puis ajoute-le à
[`actualites.md`]({{ '/actualites.html' | relative_url }}).

**Avant de publier** : chaque affirmation a une **source** ou un **tag** ; chaque **lien testé (200)** ;
**fait ≠ analyse** ; **accents FR** ; acronymes définis ; **source primaire** (doc/acteur) distinguée
de la **presse**. Voir les [Règles]({{ '/regles.html' | relative_url }}).

````markdown
---
title: [Titre — de préférence une question]
parent: Actualités
nav_order: [ordre dans la liste]
---

# [Titre — de préférence une question]

> ⚠️ **Brouillon — à vérifier.** Retire l'encadré une fois sourcé.
> (Vérifiée → « ✅ Fiche vérifiée le AAAA-MM-JJ, liens testés. »)

## La question
[Une ligne.]

## Réponse courte
[TL;DR 2-3 phrases. Tag 🔵 si c'est une analyse. Conditionnel si rien n'est acté.]

## Ce qui est avancé (et notre degré de confiance)
| Affirmation | Confiance | Source |
|---|---|---|
| [affirmation 1] | ✅ confirmé | [média + lien vérifié] |
| [affirmation 2] | ⛔ à vérifier | [à sourcer] |

## Analyse
[🔵 Ce qu'on en pense, bien séparé des faits.]

## Sources
- [Média (AAAA-MM-JJ), *Titre* : <https://…>] — préciser « reprise de X » si pas indépendant.

## Historique
- [AAAA-MM-JJ] — [ce qui a changé]
````

*Optionnel : si un récit mélange des faits sans rapport, ajoute une section « Autres faits —
hors-sujet » qui les tague et explique pourquoi c'est hors-sujet (dé-relier vaut autant que sourcer).*

---

## Modèle de ressource (guide / lien partagé)

Nouveau fichier `ressources/mon-sujet.md`, puis ajoute-le à
[`ressources.md`]({{ '/ressources.html' | relative_url }}). On **ne fact-checke pas** un avis : on
**résume**, on **attribue**, on ajoute **notre note**, et on **vérifie que le lien fonctionne**.

````markdown
---
title: [Titre — Auteur]
parent: Ressources
nav_order: [ordre]
---

# [Titre — Auteur]

> 🔵 **Ressource (guide / opinion).** Conseils de l'auteur, pas des faits à vérifier.

| | |
|---|---|
| **Type** | [article / vidéo / thread / guide / outil] |
| **Auteur** | [qui l'a écrit / dit] |
| **Source** | [média + lien vérifié] |
| **Sujet** | [en une ligne] |

## En bref
- [point clé 1]
- [point clé 2]

## Notre note
🔵 [pourquoi c'est utile, à qui, réserves éventuelles…]

## Historique
- [AAAA-MM-JJ] — Ajout.
````

---

Niveaux de confiance (actualités) : ✅ confirmé · 🟡 probable · 🟠 rumeur · 🔵 spéculation · ⛔ à vérifier.
Règle d'or : **dans le doute, on descend d'un cran.**
