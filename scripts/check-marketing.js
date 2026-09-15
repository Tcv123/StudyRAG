#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════
   MARKETING SUBJECT-TILE CHECK
   ─────────────────────────────────────────────────────────────────────
   Run with:  node scripts/check-marketing.js

   index.html and subjects.html serve a static grid of A-Level subject
   tiles, which subject-grid.js re-renders from subjects-config.js in the
   browser. The static copy is what crawlers and no-JS visitors get, so it
   has to be right on its own — this checks it still is.

   They drifted before it existed: marketing listed Maths as
   "AQA · Edexcel · OCR" long after a fourth board went live, and four
   coming-soon subjects were missing entirely.

   Two checks per page:
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
const LEVEL = 'alevel';
const OPEN = '<div class="grid-4" data-subject-grid="' + LEVEL + '">';
const TILE_RE = /<div class="subject-tile( soon)?">\s*<div class="subject-icon"[^>]*>(.*?)<\/div>\s*<div class="subject-name">(.*?)<\/div>\s*<div class="subject-boards">(.*?)<\/div>/gs;

const expected = new Map();
for (const s of GRID.subjectsFor(CONFIG, LEVEL)) {
  expected.set(s.display, { emoji: s.emoji, boards: s.boards, soon: s.soon });
}

let problems = 0;
const fail = (msg) => { problems++; console.log('  ✗ ' + msg); };

for (const page of PAGES) {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');

  // Anchored on the data-subject-grid marker, so the GCSE grid further down
  // subjects.html is never picked up by accident.
  const start = html.indexOf(OPEN);
  if (start === -1) { fail(`${page}: no ${OPEN} found`); continue; }
  const bodyStart = start + OPEN.length;
  const end = html.indexOf('\n    </div>', bodyStart);
  if (end === -1) { fail(`${page}: could not find the end of the grid`); continue; }
  const block = html.slice(bodyStart, end).replace(/^\n/, '');

  const found = new Map();
  for (const m of block.matchAll(TILE_RE)) {
    const name = m[3].replace(/<span class="soon-tag">.*?<\/span>/, '').trim();
    found.set(name, { emoji: m[2].trim(), boards: m[4].trim(), soon: Boolean(m[1]) });
  }

  console.log(`\n${page} — ${found.size} A-Level tiles`);

  for (const [name, exp] of expected) {
    const got = found.get(name);
    if (!got) { fail(`${page}: missing tile for "${name}" (${exp.boards})`); continue; }
    if (got.boards !== exp.boards) fail(`${page}: ${name} boards "${got.boards}" != config "${exp.boards}"`);
    if (got.emoji !== exp.emoji)   fail(`${page}: ${name} icon "${got.emoji}" != config "${exp.emoji}"`);
    if (got.soon !== exp.soon)     fail(`${page}: ${name} coming-soon=${got.soon}, config says ${exp.soon}`);
  }
  for (const name of found.keys()) {
    if (!expected.has(name)) fail(`${page}: tile "${name}" is not an A-Level subject in subjects-config.js`);
  }

  // The served HTML must equal what the browser will render over it, or a
  // no-JS visitor and a JS visitor see different pages.
  if (block !== GRID.tilesHtml(CONFIG, LEVEL)) {
    fail(`${page}: static tiles differ from subject-grid.js output — run: node scripts/build-subject-grids.js`);
  }
}

console.log('');
if (problems) {
  console.log(`✗ ${problems} mismatch${problems === 1 ? '' : 'es'} between marketing tiles and subjects-config.js`);
  process.exit(1);
}
console.log(`✓ marketing tiles match subjects-config.js (${expected.size} A-Level subjects), static === runtime`);
