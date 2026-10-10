#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════
   check-guidance.js — has any draft working-out leaked into a mark scheme?

   THE DRIFT THIS CATCHES. The past-paper mark schemes in papers-config.js
   carry a `guidance` string that students see after answering. Some were
   written by thinking aloud — "Hmm. D=15 might be the answer", "Wait:",
   "Actually London forces exist in all substances. A." — and the thinking
   was left in. Worse than looking sloppy, the working sometimes wandered to
   a different letter from the one points[] marks correct, so the scheme
   contradicted itself (OCR A Chemistry had seven such MCQs).

   HOW IT DECIDES. Every `guidance: '…'` string literal in papers-config.js
   is scanned for the tell-tale words of unfinished working: "Hmm", "Wait",
   "Actually", "Let me re-" (recalculate / recount / recheck …), plus
   "Let me trust" and a lowercase "… wait". Lowercase "wait" in a normal
   sentence ("wait for the oscillation to settle") is not flagged.

   Run it after editing papers-config.js:

       node scripts/check-guidance.js

   Exit code 0 = clean. 1 = it prints each line and the offending phrase.
   ═══════════════════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FILE = 'papers-config.js';

const PATTERNS = [
  /\bHmm+\b/i,
  /\bWait\b/,               // capitalised: "Wait:", "Wait, …"
  /\.\.\.\s*wait\b/i,       // "… wait: H₂SO₄ donates …"
  /\bActually\b/,
  /\bLet me re-?\w*/,       // "Let me re-check", "Let me recalculate", "Let me recount"
  /\bLet me trust\b/,
];

/* Every guidance string literal, in any of the three quote styles. */
const GUIDANCE = /\bguidance\s*:\s*(['"`])((?:\\[\s\S]|(?!\1)[^\\])*)\1/g;

function main() {
  const src = fs.readFileSync(path.join(ROOT, FILE), 'utf8');

  /* Line starts, so a match offset can be turned into a line number. */
  const starts = [0];
  for (let i = 0; i < src.length; i++) if (src[i] === '\n') starts.push(i + 1);
  const lineOf = off => {
    let lo = 0, hi = starts.length - 1;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (starts[mid] <= off) lo = mid; else hi = mid - 1; }
    return lo + 1;
  };

  let scanned = 0;
  const problems = [];
  for (const m of src.matchAll(GUIDANCE)) {
    scanned++;
    const text = m[2];
    for (const re of PATTERNS) {
      const hit = re.exec(text);
      if (!hit) continue;
      const from = Math.max(0, hit.index - 40);
      problems.push({
        line: lineOf(m.index),
        phrase: hit[0],
        context: (from ? '…' : '') + text.slice(from, hit.index + hit[0].length + 40) + '…',
      });
      break;
    }
  }

  if (!problems.length) {
    console.log(`ok   ${FILE}  (${scanned} guidance strings, no draft working-out)`);
    return 0;
  }
  for (const p of problems) {
    console.log(`FAIL ${FILE}:${p.line}  "${p.phrase}"  ${p.context}`);
  }
  console.log(`\n${problems.length} guidance string(s) contain draft working-out. ` +
    'Rewrite each as a clean explanation that ends on the answer in points[].');
  return 1;
}

process.exitCode = main();
