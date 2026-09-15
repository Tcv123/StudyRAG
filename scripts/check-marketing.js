#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════
   MARKETING SUBJECT-TILE CHECK
   ─────────────────────────────────────────────────────────────────────
   Run with:  node scripts/check-marketing.js

   index.html and subjects.html serve static grids of subject tiles, which
   subject-grid.js re-renders from subjects-config.js in the browser. Each
   grid declares its level with data-subject-grid="alevel" | "gcse". The
   static copy is what crawlers and no-JS visitors get, so it has to be
   right on its own — this checks that it still is.

   Both grids had drifted before this existed. A-Level listed Maths as
   "AQA · Edexcel · OCR" long after a fourth board went live and omitted
   four coming-soon subjects; GCSE was worse, with 8 of 12 subjects on
   stale board lists (Biology showed three of its seven).

   Two checks per grid:
     1. every subject matches the config (by name, so tile order is free)
     2. the committed block is byte-identical to what tilesHtml() produces,
        which is what the browser will replace it with

   Fix a failure with:  node scripts/build-subject-grids.js
   Exits non-zero on any mismatch.
═══════════════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

// subjects-config.js needs a browser-ish global surface and level-config.js.
global.window = {};
global.localStorage = { getItem: () => 'a-level' };
require(path.join(ROOT, 'level-config.js'));
require(path.join(ROOT, 'subjects-config.js'));
const GRID = require(path.join(ROOT, 'subject-grid.js'));
const CONFIG = global.window.SUBJECTS_CONFIG;

const PAGES = ['index.html', 'subjects.html'];
const LEVELS = ['alevel', 'gcse'];   // a page may carry either, both, or neither
const openTag = (level) => `<div class="grid-4" data-subject-grid="${level}">`;
const TILE_RE = /<div class="subject-tile( soon)?">\s*<div class="subject-icon"[^>]*>(.*?)<\/div>\s*<div class="subject-name">(.*?)<\/div>\s*<div class="subject-boards">(.*?)<\/div>/gs;

let problems = 0;
let checked = 0;
const fail = (msg) => { problems++; console.log('  ✗ ' + msg); };
// Icons may be inline SVG spanning lines — compare on collapsed whitespace.
const squash = (x) => String(x).replace(/\s+/g, ' ').trim();

for (const page of PAGES) {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');

  for (const level of LEVELS) {
    // Anchored on the data-subject-grid marker, so each grid is checked
    // against its own level and the two are never confused.
    const OPEN = openTag(level);
    const start = html.indexOf(OPEN);
    if (start === -1) continue;               // page has no grid for this level
    const bodyStart = start + OPEN.length;
    const end = html.indexOf('\n    </div>', bodyStart);
    if (end === -1) { fail(`${page} [${level}]: could not find the end of the grid`); continue; }
    const block = html.slice(bodyStart, end).replace(/^\n/, '');
    checked++;

    const expected = new Map();
    for (const sub of GRID.subjectsFor(CONFIG, level)) {
      expected.set(sub.display, { icon: sub.icon, boards: sub.boards, soon: sub.soon });
    }

    const found = new Map();
    for (const m of block.matchAll(TILE_RE)) {
      const name = m[3].replace(/<span class="soon-tag">.*?<\/span>/, '').trim();
      found.set(name, { icon: squash(m[2]), boards: m[4].trim(), soon: Boolean(m[1]) });
    }

    console.log(`\n${page} [${level}] — ${found.size} tiles`);

    for (const [name, exp] of expected) {
      const got = found.get(name);
      if (!got) { fail(`${page} [${level}]: missing tile for "${name}" (${exp.boards})`); continue; }
      if (got.boards !== exp.boards)     fail(`${page} [${level}]: ${name} boards "${got.boards}" != config "${exp.boards}"`);
      if (got.icon !== squash(exp.icon)) fail(`${page} [${level}]: ${name} icon differs from config`);
      if (got.soon !== exp.soon)         fail(`${page} [${level}]: ${name} coming-soon=${got.soon}, config says ${exp.soon}`);
    }
    for (const name of found.keys()) {
      if (!expected.has(name)) fail(`${page} [${level}]: tile "${name}" is not a ${level} subject in subjects-config.js`);
    }

    // The served HTML must equal what the browser will render over it, or a
    // no-JS visitor and a JS visitor see different pages.
    if (block !== GRID.tilesHtml(CONFIG, level)) {
      fail(`${page} [${level}]: static tiles differ from subject-grid.js output — run: node scripts/build-subject-grids.js`);
    }
  }
}

console.log('');
if (problems) {
  console.log(`✗ ${problems} mismatch${problems === 1 ? '' : 'es'} between marketing tiles and subjects-config.js`);
  process.exit(1);
}
const counts = LEVELS.map(l => `${GRID.subjectsFor(CONFIG, l).length} ${l}`).join(', ');
console.log(`✓ ${checked} grids match subjects-config.js (${counts}), static === runtime`);
