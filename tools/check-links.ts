#!/usr/bin/env bun
/**
 * Vérificateur de liens des fiches — Biblio IA
 *
 * Usage :  bun tools/check-links.ts
 *
 * Extrait toutes les URLs de `fiches/*.md` et `ressources/*.md`, et vérifie qu'elles résolvent (HTTP 2xx/3xx).
 * Sort avec un code ≠ 0 s'il existe un lien MORT — au service de la règle « aucun lien mort ».
 *
 * Les hôtes connus pour bloquer les robots (403/451) ne sont PAS comptés comme morts :
 * ils sont marqués « à vérifier à la main » (évite les faux négatifs).
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const CONTENT_DIRS = ['fiches', 'ressources'];
const TIMEOUT_MS = 20_000;
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/126.0 Safari/537.36';

// Hôtes qui renvoient souvent 403/451 aux robots : à vérifier à la main, pas « morts ».
const BLOCKS_BOTS = [
  'reuters.com',
  'cnn.com',
  'cnbc.com',
  'bloomberg.com',
  'wsj.com',
  'ft.com',
];

// URLs http(s), ponctuation finale exclue (retirée ensuite).
const URL_RE = /https?:\/\/[^\s<>()\[\]"'`]+/g;

type Result = { url: string; fiche: string; status: string; ok: boolean; manual: boolean };

function collectUrls(): Map<string, string> {
  const map = new Map<string, string>(); // url -> premier fichier où on la voit
  const dirs = CONTENT_DIRS.filter((d) => existsSync(d));
  if (dirs.length === 0) {
    console.error(
      `Aucun dossier de contenu (${CONTENT_DIRS.join(', ')}) — lance ce script depuis la racine du repo.`,
    );
    process.exit(2);
  }
  for (const dir of dirs) {
    for (const f of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
      const rel = join(dir, f);
      const text = readFileSync(rel, 'utf8');
      for (const m of text.matchAll(URL_RE)) {
        const url = m[0].replace(/[.,;:!?]+$/, ''); // ponctuation finale
        if (!map.has(url)) map.set(url, rel);
      }
    }
  }
  return map;
}

function hostBlocksBots(url: string): boolean {
  try {
    const h = new URL(url).hostname;
    return BLOCKS_BOTS.some((b) => h === b || h.endsWith('.' + b));
  } catch {
    return false;
  }
}

async function check(url: string): Promise<{ status: string; ok: boolean }> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  const opts = { redirect: 'follow' as const, headers: { 'user-agent': UA }, signal: ctrl.signal };
  try {
    let res = await fetch(url, { method: 'HEAD', ...opts });
    // Certains serveurs refusent HEAD → retenter en GET.
    if (res.status === 405 || res.status === 501 || res.status === 403) {
      res = await fetch(url, { method: 'GET', ...opts });
    }
    return { status: String(res.status), ok: res.status >= 200 && res.status < 400 };
  } catch (e) {
    const aborted = e instanceof Error && e.name === 'AbortError';
    return { status: aborted ? 'timeout' : 'erreur réseau', ok: false };
  } finally {
    clearTimeout(timer);
  }
}

const urls = collectUrls();
if (urls.size === 0) {
  console.log('Aucune URL trouvée dans fiches/.');
  process.exit(0);
}

console.log(`🔗 Vérification de ${urls.size} lien(s) dans les contenus…\n`);
const results: Result[] = [];
for (const [url, fiche] of urls) {
  const { status, ok } = await check(url);
  const manual = !ok && hostBlocksBots(url);
  results.push({ url, fiche, status, ok, manual });
  console.log(`${ok ? '✅' : manual ? '🟡' : '❌'} [${status}] ${url}  (${fiche})`);
}

const okCount = results.filter((r) => r.ok).length;
const manual = results.filter((r) => r.manual);
const dead = results.filter((r) => !r.ok && !r.manual);

console.log(
  `\n${results.length} liens · ${okCount} OK · ${manual.length} à vérifier à la main · ${dead.length} morts`,
);
if (manual.length) {
  console.log(
    `🟡 À vérifier à la main (l'hôte bloque les robots) :\n` +
      manual.map((r) => `   ${r.url}  (${r.fiche})`).join('\n'),
  );
}
if (dead.length) {
  console.log(
    '❌ Liens morts :\n' + dead.map((r) => `   [${r.status}] ${r.url}  (${r.fiche})`).join('\n'),
  );
  process.exit(1);
}
console.log('✅ Aucun lien mort.');
