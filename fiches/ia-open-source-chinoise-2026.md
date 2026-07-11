---
title: La « fin » de l'IA open source chinoise ?
parent: Fiches
nav_order: 1
---

# La « fin » de l'IA open source chinoise ?

> ✅ **Fiche vérifiée le 2026-07-11.** Chaque affirmation a été recoupée sur une source publique
> vérifiée (liens testés, HTTP 200) — presse ou publication de recherche, à défaut du texte
> officiel qui n'est pas public. Le degré de confiance est indiqué ligne par ligne. Là où rien
> n'est acté, on reste au conditionnel.

## La question

Est-ce la fin de l'IA open source chinoise ?

## Réponse courte

🔵 **Analyse.** Non, pas une « fin ». Une seule histoire réglementaire est réelle — et elle
**n'est pas actée** : Pékin *délibère* (rien de décidé, calendrier inconnu, cela ne viserait
peut-être que de *futurs* modèles « frontière »). Le récit alarmiste empile ensuite plusieurs
événements **réels mais sans rapport** pour fabriquer une « fermeture » qui n'existe pas. Au pire,
on irait vers un **cloisonnement** (entrée/milieu de gamme ouverts, modèles de rupture protégés),
symétrique de la stratégie américaine — pas une mort de l'open source.

> ⚠️ **Rappel critique.** À ce jour (11/07/2026), il s'agit de **délibérations confidentielles**
> rapportées par Reuters, pas d'un texte en vigueur. Aucune décision, aucun calendrier.

## Le cœur : les délibérations réglementaires (Reuters, 7 juillet 2026)

L'exclusivité Reuters (Fanny Potkin), **reprise** par *The Next Web* (une reprise, pas une
corroboration indépendante), rapporte que le **MOFCOM**
(ministère du Commerce) — avec la **NDRC** (Commission nationale du développement et de la réforme,
l'organe de planification) — a tenu des réunions avec Alibaba, ByteDance et Z.ai pour explorer des
restrictions à l'accès étranger aux meilleurs modèles chinois.

| Affirmation | Confiance | Source |
|---|---|---|
| Des réunions (MOFCOM pilote ; NDRC présente) ont exploré des restrictions à l'accès/export étranger des meilleurs modèles | ✅ confirmé | [Reuters/Yahoo](https://finance.yahoo.com/technology/ai/articles/exclusive-beijing-looking-curbing-overseas-101644780.html) · [The Next Web](https://thenextweb.com/news/china-curbing-overseas-access-top-ai-models) |
| **Rien n'est décidé** ; pas de calendrier ; les restrictions « pourraient ne viser que les futurs modèles » | ✅ confirmé | Reuters : *« still being discussed… may only apply to future models… not immediately clear when or even if they would come into force »* |
| Inclure la fuite/vol de poids ou de code de modèles sous la **Loi sur la sécurité nationale** | 🟡 probable (piste discutée, non votée) | Reuters (même article) |
| Durcir le filtrage des **investisseurs étrangers** dans les startups IA locales | 🟡 probable (piste discutée) | Reuters (même article) |

> *open-weight / poids ouverts* : modèle dont les paramètres sont téléchargeables, donc exécutable
> et modifiable localement, sans passer par une API.

### La grille à 3 paliers : une **proposition d'experts**, pas un plan d'État

La classification par paliers a été **proposée par un panel de juristes chinois** (table ronde de
mai 2026) et résumée dans une revue de la **Cour populaire suprême**. Reuters la *rapporte* ; ce
n'est **ni une décision ni un projet gouvernemental**. 🟡 *probable (proposition rapportée)*.

| Palier proposé | Mécanisme évoqué | Statut projeté |
|---|---|---|
| **1. Basique** — modèles légers | Simple dépôt administratif / déclaration de conformité | Maintien de l'open source |
| **2. Avancé** — modèles intermédiaires | Examens de sécurité préalables à l'ouverture | Sous conditions |
| **3. Frontière** — raisonnement & cyber | Interdiction d'exporter les poids ; accès via API souveraines | Confinement domestique |

## Les autres « faits » viraux : vrais, mais **sans rapport** avec une fermeture

Ces éléments circulent dans la même vidéo. Ils sont, pour la plupart, **exacts** — mais ils ne
relèvent **pas** de l'histoire « la Chine ferme son open source ». Les recoller ensemble est
l'erreur principale du récit.

| Affirmation | Confiance | Pourquoi c'est hors-sujet | Source |
|---|---|---|---|
| Doubao (ByteDance) & Qwen (Alibaba) **doivent couper** leurs **agents/compagnons IA** le 15/07/2026 (mesure *annoncée* ; postérieure à cette fiche) | ✅ annonce confirmée · ⛔ événement encore à venir | Autre régulation (« Interim Measures » sur les services d'IA **anthropomorphes**) — vise les personas, pas les modèles ni l'export | [TechNode, 06/07](https://technode.com/2026/07/06/bytedances-doubao-and-alibabas-qwen-to-shut-down-ai-agent-features-on-july-15/) |
| DeepSeek développe sa propre **puce d'inférence** et lèverait ~**7 Md$** (valorisation 52–59 Md$) | ✅ confirmé (chiffres) · 🟠 investisseurs non confirmés | Autonomie matérielle — l'inverse d'un déclin de l'open source | [Reuters via Taipei Times, 08/07](https://www.taipeitimes.com/News/biz/archives/2026/07/08/2003860388) |
| La **NVDB** chinoise signale un « backdoor » dans **Claude Code** (Anthropic) | ✅ confirmé | Cible un outil **américain** ; Anthropic répond que c'est une « expérience » de mars anti-revendeurs/anti-distillation, en retrait — sens **inverse** du récit | [CBS News, 08/07](https://www.cbsnews.com/news/china-security-backdoor-anthropic-ai-coding-tool/) |
| **MoWorld** (équipe **Moxin**) : *world model* temps réel jusqu'à **50 FPS** sur **NPU** Huawei Ascend | ✅ confirmé | Une **prouesse** technique chinoise, pas un signe de fermeture | [arXiv:2607.06216](https://arxiv.org/abs/2607.06216) |
| OpenAI sort **GPT-5.6** (variantes Sol/Terra/Luna) le 09/07/2026 | ✅ confirmé | Modèle **américain** — sans lien avec l'open source chinois | [TechCrunch, 09/07](https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/) |
| La Chine bloque le rachat de **Manus** par **Meta** (~2–3 Md$) | ✅ confirmé | **Avril 2026** (pas juillet) ; contrôle des investissements **entrants**, pas une restriction d'export | [TechCrunch, 27/04](https://techcrunch.com/2026/04/27/china-vetoes-metas-2b-manus-deal-after-months-long-probe/) |

> *NPU (Neural Processing Unit)* : puce dédiée aux calculs d'IA. *NVDB* : base chinoise des
> vulnérabilités, rattachée au MIIT (ministère de l'Industrie et des TI). *Distillation* :
> entraîner un modèle en imitant les réponses d'un autre.

## Corrections apportées au récit vidéo / Gemini

Erreurs relevées, à ne pas reproduire :

- ✅ **« Manus »**, pas « Manis » (erreur de transcription automatique).
- ✅ **GLM-5.2 (Z.ai) est un vrai modèle en service** — aucun blocage rétroactif annoncé ; les
  délibérations visent d'éventuels *futurs* modèles.
- ✅ **Rien n'est acté** : délibérations, pas loi en vigueur.
- ✅ **La grille à 3 paliers = proposition d'experts** (revue de la Cour populaire suprême), **pas**
  une décision d'État.
- ✅ **Blocage Meta / Manus = avril 2026**, et **Meta était l'acquéreur direct** (pas un initiateur
  « indirect ») — le récit le date et l'attribue mal.
- ✅ **« Moxin »** est l'**entreprise/équipe** ; le **modèle** s'appelle **« MoWorld »**.

## Analyse

🔵 *Opinion, pas un fait.* Le phénomène réel n'est pas une fermeture mais une possible
**bifurcation** : un open source « de commodité » maintenu pour capter les communautés mondiales,
tandis que la puissance de calcul de rupture ferait l'objet d'un protectionnisme d'État — un
symétrique de la doctrine américaine. Mais le principal biais du récit viral est de **fabriquer
une tendance** en agrégeant des événements distincts (une régulation sur les compagnons IA, une
levée de fonds, une alerte sécurité sur un outil *américain*, un papier de recherche, une sortie
d'OpenAI) autour d'une seule enquête Reuters — laquelle dit explicitement que **rien n'est décidé**.
Fact-checker, ici, c'est autant **dé-relier** que sourcer. Cela n'exclut pas que ces événements
relèvent d'une même dynamique de fond (souveraineté technologique) — mais **aucune source ne
l'établit**, donc on ne le présente pas comme un fait.

## Sources

Sources vérifiées (liens testés le 2026-07-11, HTTP 200). Ce sont des **sources de presse** et une
**publication de recherche** ; le texte officiel MOFCOM/NDRC, lui, n'est pas public — Reuters
s'appuie sur des sources anonymes :

- Reuters (Fanny Potkin, 07/07/2026), *Exclusive: Beijing looking at curbing overseas access to top AI models* — via Yahoo Finance : <https://finance.yahoo.com/technology/ai/articles/exclusive-beijing-looking-curbing-overseas-101644780.html>
- The Next Web (07/07/2026), *China weighs curbing overseas access to its top AI models* (reprise de l'enquête Reuters) : <https://thenextweb.com/news/china-curbing-overseas-access-top-ai-models>
- TechNode (06/07/2026), *ByteDance's Doubao and Alibaba's Qwen to shut down AI agent features on July 15* : <https://technode.com/2026/07/06/bytedances-doubao-and-alibabas-qwen-to-shut-down-ai-agent-features-on-july-15/>
- Reuters via Taipei Times (08/07/2026), *China's DeepSeek developing its own AI chip* : <https://www.taipeitimes.com/News/biz/archives/2026/07/08/2003860388>
- CBS News (08/07/2026), *China warns of 'security backdoor' in Anthropic AI coding tool* : <https://www.cbsnews.com/news/china-security-backdoor-anthropic-ai-coding-tool/>
- arXiv:2607.06216, *MoWorld: A Flash World Model* (équipe Moxin) : <https://arxiv.org/abs/2607.06216>
- TechCrunch (09/07/2026), *OpenAI launches its new family of models with GPT-5.6* : <https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/>
- TechCrunch (27/04/2026), *China blocks Meta's $2B Manus deal after months-long probe* : <https://techcrunch.com/2026/04/27/china-vetoes-metas-2b-manus-deal-after-months-long-probe/>

## Historique

- **2026-07-11** — Création (brouillon), corrections initiales (GLM-5.2, « Manus », « rien n'est acté »).
- **2026-07-11** — **Fact-check complet** : 11 affirmations vérifiées sur sources de presse et
  publications (Reuters/The Next Web, TechNode, Taipei Times, CBS News, arXiv, TechCrunch). Toutes les URL
  testées (HTTP 200). Corrections d'attribution/date intégrées ; grille 3 paliers requalifiée
  « proposition d'experts » ; ajout du volet « faits réels mais hors-sujet ». Passage de ⛔ à ✅.
