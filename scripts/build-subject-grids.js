#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════
   BUILD THE STATIC SUBJECT-TILE BASELINE
   ─────────────────────────────────────────────────────────────────────
   Run with:  node scripts/build-subject-grids.js

   Writes the A-Level subject tiles into index.html and subjects.html from
   subjects-config.js, using the same tilesHtml() that subject-grid.js uses
   to re-render them in the browser — so the served HTML and the runtime
   output cannot disagree.

   The static copy exists for crawlers and for anyone without JavaScript:
   these are the public marketing pages, and their claim is "every major UK
   subject, every major board".

   Run this after changing subjects-config.js, then commit the result.
   scripts/check-marketing.js fails if you forget.
═══════════════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

global.window = {};
global.localStorage = { getItem: () => 'a-level' };
require(path.join(ROOT, 'level-config.js'));
require(path.join(ROOT, 'subjects-config.js'));
const GRID = require(path.join(ROOT, 'subject-grid.js'));
const CONFIG = global.window.SUBJECTS_CONFIG;

const PAGES = ['index.html', 'subjects.html'];
const LEVEL = 'alevel';
const OPEN = '<div class="grid-4" data-subject-grid="' + LEVEL + '">';

let wrote = 0;
for (const page of PAGES) {
  const file = path.join(ROOT, page);
  let html = fs.readFileSync(file, 'utf8');

  const start = html.indexOf(OPEN);
  if (start === -1) {
    console.error(`  ✗ ${page}: no ${OPEN} found — add the data-subject-grid attribute first`);
    process.exit(1);
  }
  const bodyStart = start + OPEN.length;
  const end = html.indexOf('\n    </div>', bodyStart);
  if (end === -1) {
    console.error(`  ✗ ${page}: could not find the end of the grid`);
    process.exit(1);
  }

  const tiles = GRID.tilesHtml(CONFIG, LEVEL);
  const next = html.slice(0, bodyStart) + '\n' + tiles + html.slice(end);
  if (next !== html) { fs.writeFileSync(file, next); wrote++; console.log(`  ✓ ${page} updated`); }
  else { console.log(`  · ${page} already current`); }
}

const n = GRID.subjectsFor(CONFIG, LEVEL).length;
console.log(`\n${wrote ? wrote + ' page(s) rewritten' : 'nothing to do'} — ${n} A-Level subjects.`);
