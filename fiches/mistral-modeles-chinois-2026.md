---
title: Mistral est-il devenu un « installateur de modèles chinois » ?
parent: Actualités
nav_order: 3
date: 2026-08-17
---

# Mistral est-il devenu un « installateur de modèles chinois » ?

> ✅ **Fiche vérifiée le 2026-08-17.** Les affirmations ont été recoupées sur **sources primaires**
> (fichiers de configuration officiels des modèles, documentation et annonces Mistral, communiqué
> Microsoft, job board public). Liens testés. Ce qui relève de l'**opinion de l'auteur** est
> identifié comme tel — on ne fact-checke pas une thèse.

## La question

Une chronique très partagée affirme que Mistral, « champion européen de l'IA », s'est mué en
**hébergeur de modèles chinois**. Que valent les faits qu'elle avance — et sa conclusion ?

## Réponse courte

🔵 **Analyse.** **Les faits tiennent** : vérification faite, les chiffres techniques de la chronique
sont exacts au paramètre près, et le pivot commercial est réel et documenté. **Mais la conclusion —
« chronique d'un renoncement » — est une thèse, pas un fait.** Le cadrage omet trois éléments qui
changent la lecture : (1) reprendre l'architecture de DeepSeek V3 est une **pratique courante**, y
compris chez un grand labo **chinois** qui le fait plus littéralement encore ; (2) héberger des
modèles chinois *open-weight* est le **standard de l'industrie** (AWS, Azure) ; (3) Mistral a
continué à sortir des modèles en 2026 et dit en entraîner un « frontière ».

Ce qui est solide : **le centre de gravité de Mistral s'est déplacé** vers l'infrastructure et le
déploiement. Ce qui est une opinion : que cela vaille un renoncement.

## La distinction qui décide de tout : architecture ≠ modèle

Deux faits sont mis sur le même plan par la chronique alors qu'ils n'ont rien à voir :

| | Ce que fait Mistral | Nature |
|---|---|---|
| **Large 3** (déc. 2025) | **architecture** reprise de DeepSeek V3, mais **poids entraînés par Mistral** (données propres, 3 000 H200, tokenizer différent) | conception empruntée — **le modèle est bien de Mistral** |
| **GLM 5.2** (11/08/2026) | **rien** : modèle de Z.ai servi tel quel, marque comprise | **pur hébergement** |

Pour Large 3, la nuance protège Mistral (ce n'est pas un modèle chinois rebadgé). Pour GLM 5.2, il
n'y a aucune nuance à faire — et c'est le point le plus fort de la chronique.

## Ce qui est avancé (et notre degré de confiance)

| Affirmation | Confiance | Source |
|---|---|---|
| L'ossature de **Large 3** est celle de **DeepSeek V3** : `hidden dim 7168`, `61 couches`, `3 couches denses avant MoE`, MLA **avec les mêmes rangs de compression** (1536 / 512), 128 têtes | ✅ confirmé (comparaison des fichiers officiels) | [params.json Mistral](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512/raw/main/params.json) · [config.json DeepSeek](https://huggingface.co/deepseek-ai/DeepSeek-V3/raw/main/config.json) |
| La **granularité des experts** diffère (128 experts × 4096 contre 256 × 2048 ; 4 actifs/token contre 8) et améliore le débit, **pas la capacité** | ✅ confirmé (128×4096 = 256×2048 : capacité identique) | mêmes fichiers |
| « **Ligne par ligne** » / « la **seule** modification structurelle porte sur les experts » | 🟠 **exagéré** — Large 3 ajoute un **encodeur vision** (absent chez DeepSeek V3, texte seul) et porte le contexte à ~288k contre 160k | mêmes fichiers |
| Les **poids sont bien ceux de Mistral** (entraînement propre) ; tokenizers **131 072** contre **129 280** | ✅ confirmé (« trained from the ground up with 3000 H200s ») | [Mistral 3](https://mistral.ai/news/mistral-3) · fichiers ci-dessus |
| Le **11 août 2026**, Mistral ajoute **GLM 5.2** (Z.ai) à sa plateforme | ✅ confirmé (« *starting with Z.ai's GLM-5.2* ») | [Annonce Mistral, 11/08](https://mistral.ai/news/regional-inference-open-models-new-compute/) |
| Il est **servi tel quel**, marque Z.ai conservée | ✅ confirmé — **ce sont les mots de Mistral** : « *The model is served without Mistral modifications* », « *third-party open source text model from Z.ai* » | [Doc Mistral · zai-glm-5-2](https://docs.mistral.ai/models/zai-glm-5-2) |
| Il est **mis en avant** (listé en tête des « Generalist models », avant Mistral Large 3) | ✅ confirmé | [Catalogue Mistral](https://docs.mistral.ai/getting-started/models/models_overview/) |
| Citation du CTO **Timothée Lacroix** : « *It's a great model. Everyone loves it. It's open weight, so there was no good reason for us not to do it* » | ✅ confirmé (traduction fidèle) — *précision : il est **cofondateur ET** CTO* | [VentureBeat, 11/08 (archive)](https://web.archive.org/web/20260812115917/https://venturebeat.com/infrastructure/mistral-ai-wants-to-build-1-gigawatt-of-european-compute-by-2030-and-lock-in-customers-now) |
| Les recrutements penchent vers le déploiement : sur **163 postes ouverts**, **58 en « Solutions »** et 13 en « Business », contre **11 en « Science »** ; 11 intitulés « Forward Deployed » | ✅ confirmé (état au 17/08) | [Job board Mistral](https://jobs.ashbyhq.com/mistral.ai) |
| …et que la page carrières ressemblait « **autrefois** » à celle d'un laboratoire | ✅ **mesuré** (l'auteur ne le prouve pas, mais c'est vérifiable) : l'intitulé « Forward Deployed » **n'existait pas** avant l'été 2025 — **0** poste sur 28 (juil. 2024), **0** sur 51 (avr. 2025), **5** sur 67 (août 2025), **11** sur 163 aujourd'hui | [archives du job board (Lever), avr. 2025](https://web.archive.org/web/20250403213855id_/https://jobs.lever.co/mistral) · [août 2025](https://web.archive.org/web/20250807224411id_/https://jobs.lever.co/mistral) |
| **Contrats pluriannuels** de capacité de calcul (« European Compute Units », engagements ~5 ans) | ✅ confirmé | [Annonce Mistral, 11/08](https://mistral.ai/news/regional-inference-open-models-new-compute/) |
| Objectif **1 GW en Europe d'ici 2030** | 🟡 objectif annoncé — formulation officielle « **jusqu'à** 1 GW », avec un jalon de 200 MW fin 2027 ; annoncé dès le **28 mai**, pas le 11 août | [VentureBeat (archive)](https://web.archive.org/web/20260812115917/https://venturebeat.com/infrastructure/mistral-ai-wants-to-build-1-gigawatt-of-european-compute-by-2030-and-lock-in-customers-now) |
| **Microsoft loue de la capacité chez Mistral** | ✅ confirmé — et **le sens n'est pas inversé** : « *Microsoft will leverage Mistral's expanded Europe-based GPU infrastructure* », « *multibillion dollar commitment from Microsoft* » | [Communiqué Microsoft, 21/07](https://news.microsoft.com/source/2026/07/21/microsoft-and-mistral-expand-strategic-partnership-to-give-enterprises-and-regulated-industries-frontier-ai-they-can-control/) |
| **~1 milliard de revenus** visé en 2026 | 🟡 objectif déclaré (Arthur Mensch, janv. 2026) ; **devise ambiguë** selon les reprises (euros / dollars) | reprises presse |
| « **3 milliards de dollars** » levés en 3 ans | 🟠 **sous-estimé** — ~4 Md$ au total selon PitchBook (capital + ~830 M€ de dette bancaire en 2026) | [VentureBeat (archive)](https://web.archive.org/web/20260812115917/https://venturebeat.com/infrastructure/mistral-ai-wants-to-build-1-gigawatt-of-european-compute-by-2030-and-lock-in-customers-now) |

> ⚠️ *Sur la trajectoire des recrutements* : la mesure porte sur les **intitulés de poste**, seule
> grandeur comparable dans le temps (Mistral a changé d'outil de recrutement fin 2025, et les
> catégories « Solutions » / « Science » des deux outils ne recouvrent pas la même chose). La
> tendance est robuste ; les pourcentages par département ne le sont pas.

> *MoE (mixture of experts)* : le modèle n'active qu'une fraction de ses « experts » par token.
> *MLA (multi-head latent attention)* : mécanisme d'attention compressée introduit par DeepSeek.
> *Open-weight* : poids téléchargeables. *ARR* : revenu annuel récurrent.

## Ce que la chronique omet — et qui change la lecture

C'est ici que la fiche ajoute le plus : **les faits sont exacts, le contexte manque.**

- **Reprendre l'architecture de DeepSeek V3 est banal — y compris en Chine.** Le fichier de
  configuration de **Kimi K2** (labo chinois Moonshot AI) déclare littéralement
  `"architectures": ["DeepseekV3ForCausalLM"]`, avec les mêmes `7168` / `61 couches` / `1536` / `512` —
  une reprise **plus littérale que celle de Mistral**. Présenter ce choix comme un marqueur de
  déclin *européen* ne tient pas : c'est une pratique d'industrie, sur des travaux publiés et sous
  licence permissive. → [config.json Kimi K2](https://huggingface.co/moonshotai/Kimi-K2-Instruct/raw/main/config.json)
- **Héberger des modèles chinois open-weight est le standard.** AWS Bedrock propose Qwen et
  DeepSeek en managé, Azure AI Foundry aussi. VentureBeat décrit d'ailleurs le geste de Mistral
  comme le « *model garden playbook* » des hyperscalers, appliqué en Europe.
- **Mistral n'a pas cessé de publier en 2026** (Ministral 3 et son papier, Mistral Small 4, OCR 4,
  Voxtral, Shieldstral…), et **dans l'article même qui sert de source à la chronique**, Lacroix
  déclare que le modèle en entraînement depuis juin « *is still training, and we're still very
  excited about it* » — un passage non repris.

## Ce qui relève de l'opinion de l'auteur

À lire comme une **tribune**, pas comme un compte rendu : « chronique d'un **renoncement** » ·
« **Capgemini avec des GPU** » · « la souveraineté du **bâtiment**, pas celle de ce qu'il abrite » ·
« architecture **dessinée à Hangzhou** » · l'opposition « entreprise qui installe du logiciel » /
« entreprise qui repousse l'état de l'art ». Ce sont des jugements — défendables, mais non vérifiables.

*L'auteur, Pierre-Louis Biojout, dirige NanoCorp (agents IA, couche applicative). Aucun conflit
d'intérêts direct identifié ; mentionné par transparence.*

## Analyse

🔵 *Opinion, pas un fait.* Le mérite de la chronique est de nommer un **glissement réel** : entre
« nous construisons l'intelligence » et « nous l'hébergeons en Europe », il y a deux métiers, et les
chiffres de recrutement comme les engagements de capacité montrent où va l'énergie de Mistral.

Sa faiblesse est de faire d'un choix **d'ingénierie banal** (réutiliser une architecture publiée) et
d'un choix **commercial standard** (servir un modèle open-weight populaire) les preuves d'un
renoncement — sans dire que les labos chinois et les hyperscalers font exactement pareil. Le
« champion européen » ressemble peut-être de plus en plus à un fournisseur d'infrastructure ; mais
la démonstration proposée, elle, prouve surtout que l'IA est devenue une industrie où **presque
personne ne part d'une page blanche**.

Pour qui s'intéresse à la souveraineté : la question utile n'est pas « l'architecture vient-elle de
Hangzhou ? » mais « **qui contrôle les poids, l'infrastructure et les données ?** ». Sur ce terrain,
Large 3 (poids et entraînement Mistral, sur ses machines) et GLM 5.2 (modèle tiers hébergé) ne
disent pas du tout la même chose — et les confondre est précisément l'erreur à éviter.

## Sources

Sources vérifiées (liens testés le 2026-08-17) :

- Journal du Net (17/08/2026), Pierre-Louis Biojout, *Mistral, ou comment le champion européen de l'IA devient un installateur de modèles chinois* — **la chronique commentée** : <https://www.journaldunet.com/intelligence-artificielle/1553715-mistral-ou-comment-le-champion-europeen-de-l-ia-devient-un-installateur-de-modeles-chinois/>
- Mistral AI, `params.json` de Mistral-Large-3-675B-Instruct-2512 (source primaire) : <https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512/raw/main/params.json>
- DeepSeek, `config.json` de DeepSeek-V3 (source primaire) : <https://huggingface.co/deepseek-ai/DeepSeek-V3/raw/main/config.json>
- Moonshot AI, `config.json` de Kimi-K2-Instruct (déclare `DeepseekV3ForCausalLM`) : <https://huggingface.co/moonshotai/Kimi-K2-Instruct/raw/main/config.json>
- Mistral AI (11/08/2026), *Regional inference, open models, new compute* : <https://mistral.ai/news/regional-inference-open-models-new-compute/>
- Mistral AI, documentation du modèle `zai-glm-5-2` (« served without Mistral modifications ») : <https://docs.mistral.ai/models/zai-glm-5-2>
- Mistral AI, catalogue des modèles : <https://docs.mistral.ai/getting-started/models/models_overview/>
- Mistral AI, annonce de Mistral 3 : <https://mistral.ai/news/mistral-3>
- Microsoft (21/07/2026), *Microsoft and Mistral expand strategic partnership…* : <https://news.microsoft.com/source/2026/07/21/microsoft-and-mistral-expand-strategic-partnership-to-give-enterprises-and-regulated-industries-frontier-ai-they-can-control/>
- VentureBeat (11/08/2026), Michael Nuñez, *Mistral AI wants to build 1 gigawatt of European compute by 2030* — **archive Wayback** (l'original renvoie une erreur 429) : <https://web.archive.org/web/20260812115917/https://venturebeat.com/infrastructure/mistral-ai-wants-to-build-1-gigawatt-of-european-compute-by-2030-and-lock-in-customers-now>
- Job board public de Mistral (163 postes ouverts au 17/08) : <https://jobs.ashbyhq.com/mistral.ai>
- Archives du job board de Mistral (ancien outil, rendu côté serveur — pour mesurer l'évolution) : <https://web.archive.org/web/20240719201340id_/https://jobs.lever.co/mistral> (juil. 2024) · <https://web.archive.org/web/20250403213855id_/https://jobs.lever.co/mistral> (avr. 2025) · <https://web.archive.org/web/20250807224411id_/https://jobs.lever.co/mistral> (août 2025)

## Historique

- **2026-08-17** — Création. Fact-check du socle factuel d'une **tribune d'opinion** : chiffres
  d'architecture vérifiés sur les fichiers de configuration officiels, hébergement de GLM 5.2
  confirmé par la documentation de Mistral, partenariat Microsoft confirmé par Microsoft. Trois
  imprécisions signalées (« ligne par ligne », montant levé) et trois omissions de contexte ajoutées
  (Kimi K2, pratique des hyperscalers, publications 2026).
- **2026-08-17** — Révision : le « autrefois » sur les recrutements, d'abord classé *non démontré*,
  devient **mesuré** grâce aux archives de l'ancien job board (l'intitulé « Forward Deployed »
  apparaît entre avril et août 2025). Réserve méthodologique ajoutée sur la comparabilité des catégories.
