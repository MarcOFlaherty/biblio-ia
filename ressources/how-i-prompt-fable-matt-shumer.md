---
title: How I Prompt Fable — Matt Shumer
parent: Ressources
nav_order: 1
---

# How I Prompt Fable — Matt Shumer

> 🔵 **Ressource (guide / opinion).** Ce sont les conseils de l'auteur, pas des faits à vérifier.
> On résume et on attribue ; on ne colle pas de tag de confiance sur un avis.

| | |
|---|---|
| **Type** | Guide de prompting |
| **Auteur** | Matt Shumer |
| **Source** | Workbench — [lien original](https://workbench.md/pub/IbaCrTjLJT?key=uQOQ2NPO3TTUSXyYDjyLf) |
| **Sujet** | Comment il prompte le modèle *Fable* en lui laissant de la marge |

## En bref

Matt Shumer explique que ses démos « impossibles » viennent moins de prompts compliqués que d'une
**façon différente d'utiliser le modèle** :

- **Donner le but, pas les étapes.** Dicter le « comment », c'est imposer son jugement (souvent
  moins bon que celui du modèle). On confie un objectif large, comme à quelqu'un de brillant en
  qui on a confiance.
- **Poser des « house rules ».** Quelques règles non négociables qui bornent la liberté (ex. « ne
  code pas de cas particuliers en dur, décris le comportement voulu »). Un sous-agent peut vérifier
  le travail contre ces règles avant tout push.
- **Donner une vraie barre de "done".** Pas d'adjectifs (« haute qualité ») : un test concret et
  dur, auto-vérifiable (« un inconnu ne doit pas distinguer notre rendu de la vraie photo »). Si on
  ne sait pas mesurer, on demande au modèle d'inventer la mesure.
- **Séparer qui construit et qui note.** L'agent qui *build* est biaisé : toujours un sous-agent au
  **contexte neuf** qui tente de **prouver que ce n'est pas fini**.
- **Boucler jusqu'à la barre** (`/loop`), surtout en créatif : build → auto-check → corriger le
  plus gros écart → recommencer.
- **Le laisser s'appuyer sur ce qu'il a déjà fait**, et **s'écarter de son chemin** (ne pas micro-gérer).
- **`ultracode` : rarement** — réservé aux fondations (un système gardé des mois), où une bonne base
  rend tout le reste plus simple.

## Notre note

🔵 Bon état d'esprit « objectif + garde-fous + barre auto-vérifiable + boucle », transposable
au-delà de Fable (c'est proche de la logique d'un plan qui se teste lui-même). À essayer sur nos
propres usages. Astuce de l'auteur : on peut **donner l'article entier à son agent** pour qu'il
aide ensuite à écrire les prompts.

## Historique

- **2026-07-12** — Ajout de la ressource (résumé + attribution ; lien vérifié).
