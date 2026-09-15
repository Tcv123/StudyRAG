#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════
   MARKETING SUBJECT-TILE CHECK
   ─────────────────────────────────────────────────────────────────────
   Run with:  node scripts/check-marketing.js

   index.html and subjects.html hand-maintain a grid of A-Level subject
   tiles while the app reads subjects-config.js. They drifted: marketing
   listed Maths as "AQA · Edexcel · OCR" long after a fourth board went
   live, and four coming-soon subjects were missing entirely.

   This compares the tiles against subjects-config.js — by subject name,
   not by position, so the pages stay free to order tiles for reading.

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
const CONFIG = global.window.SUBJECTS_CONFIG;

// Marketing shortens the two maths subjects; everything else matches.
const DISPLAY = { 'Mathematics': 'Maths', 'Further Mathematics': 'Further Maths' };

const PAGES = ['index.html', 'subjects.html'];
// subjects.html has a second grid for GCSE; only the first is the A-Level one.
const TILE_RE = /<div class="subject-tile( soon)?">\s*<div class="subject-icon"[^>]*>(.*?)<\/div>\s*<div class="subject-name">(.*?)<\/div>\s*<div class="subject-boards">(.*?)<\/div>/gs;

const expected = new Map();
for (const s of CONFIG.getSubjectsFor('a-level')) {
  expected.set(DISPLAY[s.name] || s.name, {
    emoji: CONFIG.emojiFor(s.name),
    boards: CONFIG.getBoardsFor(s.name, 'a-level').join(' · '),
    soon: CONFIG.isComingSoonAlevel(s.name, 'a-level'),
  });
}

let problems = 0;
const fail = (msg) => { problems++; console.log('  ✗ ' + msg); };

for (const page of PAGES) {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
  // The A-Level grid is the first grid-4 on each page; subjects.html has a
  // second grid-4 for GCSE further down, so stop at the enclosing </section>.
  const gridStart = html.indexOf('<div class="grid-4">');
  if (gridStart === -1) { fail(`${page}: no subject grid found`); continue; }
  const gridEnd = html.indexOf('</section>', gridStart);
  const grid = html.slice(gridStart, gridEnd === -1 ? undefined : gridEnd);

  const found = new Map();
  for (const m of grid.matchAll(TILE_RE)) {
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
}

console.log('');
if (problems) {
  console.log(`✗ ${problems} mismatch${problems === 1 ? '' : 'es'} between marketing tiles and subjects-config.js`);
  process.exit(1);
}
console.log(`✓ marketing tiles match subjects-config.js (${expected.size} A-Level subjects)`);
