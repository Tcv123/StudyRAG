#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════
   check-bank.js — are the multiple-choice banks answerable on the
   subject, and does every question have a findable right answer?

   WHAT THIS CATCHES THAT check-topics.js DOES NOT. check-topics.js asks
   whether topics-config.js and the banks agree about which topics exist.
   It says nothing about whether the questions inside work. These do.

     1. UNRESOLVABLE ANSWERS — the serious one. The diagnostic's
        normalizeAnswer() accepts an index, the option text, or a letter,
        and when it can find none of them it falls back to index 0. That
        fallback is silent: the question is still served, still marked,
        and option A is now the right answer whatever the bank intended.
        A typo in answer text produces a question that is wrong for every
        student and looks fine in the file. This mirrors normalizeAnswer()
        exactly and reports what it could not resolve.

     2. DUPLICATE OPTIONS — the same string twice in one question. A
        student choosing the duplicate is marked wrong for picking what
        reads as the right answer.

     3. TIER SHAPE — the diagnostic draws 2 green + 2 amber + 1 red. A
        tier holding fewer cannot fill the draw. Bank sizes vary by design
        (10/10/5 and 20/20/10 are both in use), so this checks each bank
        against its OWN modal shape and reports topics that depart from
        it, rather than against one house number that does not exist.

     4. WRONG SCRIPT — a character from a writing system no subject here
        uses (Cyrillic, Hebrew, Arabic, CJK, Hangul, Devanagari, Thai).
        Reads as ordinary English at a glance and survives review; a
        Cyrillic word reached a distractor in politics-edexcel 2.1 that
        way. Greek and maths symbols are NOT flagged — H₂O, λ, →, √ and Ω
        are ordinary content in the science and maths banks.

     5. THE LENGTH TELL — whether the correct answer is the longest
        option. Writing a full evaluative answer and three brisk
        distractors is the natural way to write a red-tier question, and
        it produces a tier a student can score on without reading the
        subject at all. Reported per topic; a failure only above the
        threshold below, since one or two in five is chance.

   Fix a tell by lengthening the distractors, never by trimming the
   correct answer — it has to stay complete enough to still be right.

       node scripts/check-bank.js
       node scripts/check-bank.js questions/politics/politics-edexcel-alevel.js

   Exit 0 = clean. 1 = something needs fixing. Tier-shape drift and the
   length tell in existing banks are reported as warnings, not failures,
   so this can run in CI over the repo as it stands today; unresolvable
   answers and duplicate options always fail.
   ═══════════════════════════════════════════════════════════════════ */
'use strict';

const fs   = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

/* Above this share of a topic's red tier the length tell is a habit
   rather than a coincidence. Two of five is under it; three is not. */
const TELL_LIMIT = 0.5;

/* Writing systems that never appear in this repo's subject content.
   Greek and mathematical symbols are deliberately NOT here: they are
   ordinary content in physics, chemistry and maths questions. */
const SCRIPTS = [
  ['Cyrillic',   /[\u0400-\u04FF]/u],
  ['Hebrew',     /[\u0590-\u05FF]/u],
  ['Arabic',     /[\u0600-\u06FF]/u],
  ['Devanagari', /[\u0900-\u097F]/u],
  ['Thai',       /[\u0E00-\u0E7F]/u],
  ['CJK',        /[\u3040-\u30FF\u4E00-\u9FFF]/u],
  ['Hangul',     /[\uAC00-\uD7AF]/u],
];
const WRONG_SCRIPT = new RegExp(SCRIPTS.map(([, re]) => re.source).join('|'), 'u');
function scriptName(ch) {
  for (const [name, re] of SCRIPTS) if (re.test(ch)) return name;
  return 'a non-Latin script';
}

/* What the diagnostic draws from each tier — see buildQuestionSet(). */
const DRAW = { green: 2, amber: 2, red: 1 };

function candidateBanks() {
  const out = [];
  const dir = path.join(ROOT, 'questions');
  for (const sub of fs.readdirSync(dir)) {
    const subdir = path.join(dir, sub);
    if (!fs.statSync(subdir).isDirectory()) continue;
    for (const f of fs.readdirSync(subdir)) {
      if (f.endsWith('.js')) out.push(path.join(subdir, f));
    }
  }
  return out.sort();
}

/* Which kind of bank is this? Decided by SHAPE, not by filename: the
   written banks are not reliably named (questions/maths-edexcel/w-P1-P11.js
   and fm-ocr-b-written-a.js are both written banks that no -written.js
   pattern catches), and a filename rule quietly reclassifies them as
   broken multiple-choice instead of skipping them. A written question
   carries marks and a modelAnswer and has no options at all. */
function bankKind(bank) {
  let mcq = 0, written = 0;
  for (const topic of Object.values(bank)) {
    for (const tier of ['green', 'amber', 'red']) {
      for (const q of topic[tier] || []) {
        if (Array.isArray(q.options)) mcq++;
        else if (q.modelAnswer !== undefined || q.marks !== undefined) written++;
      }
    }
  }
  if (!mcq && !written) return 'empty';
  return mcq >= written ? 'mcq' : 'written';
}

function loadBank(file) {
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/^const\s+([A-Z][A-Z0-9_]*)\s*=\s*\{/m);
  if (!m) return { error: 'no top-level const found' };
  try {
    return { name: m[1], bank: new Function(src + '; return ' + m[1] + ';')() };
  } catch (e) {
    return { error: e.message };
  }
}

/* A faithful copy of normalizeAnswer() in the diagnostic pages, except that
   it reports failure instead of falling back to 0. Keep the two in step. */
function resolveAnswer(q) {
  if (!Array.isArray(q.options)) return -1;
  if (typeof q.answer === 'number') {
    return (q.answer >= 0 && q.answer < q.options.length) ? q.answer : -1;
  }
  if (typeof q.answer !== 'string') return -1;

  const raw = q.answer.trim();
  let idx = q.options.indexOf(q.answer);
  if (idx < 0) idx = q.options.findIndex(o => String(o).trim() === raw);
  if (idx < 0 && /^[A-Za-z]$/.test(raw)) {
    const li = raw.toUpperCase().charCodeAt(0) - 65;
    if (li >= 0 && li < q.options.length) idx = li;
  }
  if (idx < 0 && /^\d+$/.test(raw)) {
    const ni = parseInt(raw, 10);
    if (ni >= 0 && ni < q.options.length) idx = ni;
  }
  return idx;
}

function modalShape(bank) {
  const seen = {};
  for (const topic of Object.values(bank)) {
    const key = ['green', 'amber', 'red'].map(t => (topic[t] || []).length).join('/');
    seen[key] = (seen[key] || 0) + 1;
  }
  let best = null, bestN = 0;
  for (const [key, n] of Object.entries(seen)) if (n > bestN) { best = key; bestN = n; }
  return { shape: best, agreeing: bestN, total: Object.keys(bank).length };
}

const args  = process.argv.slice(2);
const files = args.length ? args.map(f => path.resolve(f)) : candidateBanks();

let failed = 0, warned = 0;

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const { name, bank, error } = loadBank(file);
  if (error) {
    // Only complain when the caller named this file; a sweep meets plenty
    // of question files that are not banks at all.
    if (args.length) { console.log(`FAIL ${rel}\n       ${error}`); failed++; }
    continue;
  }

  const kind = bankKind(bank);
  if (kind !== 'mcq') {
    if (args.length) console.log(`skip ${rel}  (${kind} bank — no options to check)`);
    continue;
  }

  const errors = [], warnings = [];
  const { shape, agreeing, total } = modalShape(bank);
  let questions = 0;

  for (const [id, topic] of Object.entries(bank)) {
    const counts = [];

    for (const tier of ['green', 'amber', 'red']) {
      const qs = topic[tier];
      if (!Array.isArray(qs)) { errors.push(`${id} ${tier}: missing`); counts.push(0); continue; }
      counts.push(qs.length);
      questions += qs.length;

      /* A tier too small to fill the draw matters only if a student can
         reach the topic, and that is decided by topics-config.js, not by
         this file — banks carry dormant topics that no spec lists.
         check-topics.js is the authority on reachability, so this is a
         warning pointing there rather than a failure asserted from here. */
      if (qs.length < DRAW[tier]) {
        warnings.push(`${id} ${tier}: ${qs.length} questions, diagnostic draws ${DRAW[tier]} — check-topics.js says whether this topic is reachable`);
      }

      qs.forEach((q, i) => {
        const at = `${id} ${tier}[${i}]`;
        if (!q.q || typeof q.q !== 'string') errors.push(`${at}: no question text`);
        if (!Array.isArray(q.options) || q.options.length < 2) {
          errors.push(`${at}: ${Array.isArray(q.options) ? q.options.length : 'no'} options`);
          return;
        }
        if (new Set(q.options.map(String)).size !== q.options.length) {
          errors.push(`${at}: duplicate option text`);
        }
        /* A character from a writing system no subject here uses. The
           first version of this check flagged everything outside Latin and
           lit up 28 banks: chemistry subscripts, arrows, Greek and maths
           operators are all legitimate content (H₂O, λ, →, √, Ω). So the
           test names the scripts that are never subject content instead —
           Cyrillic, Hebrew, Arabic, CJK, Hangul, Devanagari, Thai. A
           Cyrillic word reached a distractor in politics-edexcel 2.1 and
           read as ordinary English at a glance. */
        for (const [field, text] of [['q', q.q], ...q.options.map((o, n) => [`option ${n}`, o])]) {
          const stray = String(text).match(WRONG_SCRIPT);
          if (stray) {
            errors.push(`${at}: ${field} contains ${JSON.stringify(stray[0])} — ${scriptName(stray[0])} in an English question`);
          }
        }
        if (resolveAnswer(q) < 0) {
          errors.push(`${at}: answer ${JSON.stringify(q.answer)} matches no option — the diagnostic will silently mark option A correct`);
        }
      });
    }

    const mine = counts.join('/');
    if (shape && mine !== shape) warnings.push(`${id}: tiers ${mine}, rest of this bank is ${shape}`);

    const red = (topic.red || []).filter(q => Array.isArray(q.options) && resolveAnswer(q) >= 0);
    const tell = red.filter(q => {
      const longest = Math.max(...q.options.map(o => String(o).length));
      return String(q.options[resolveAnswer(q)]).length === longest;
    }).length;
    if (red.length && tell / red.length > TELL_LIMIT) {
      warnings.push(`${id} red: correct answer is the longest option in ${tell} of ${red.length}`);
    }
  }

  const summary = `${total} topics, ${questions} questions, ${shape}` +
                  (agreeing < total ? ` in ${agreeing}/${total}` : '');

  if (errors.length) {
    console.log(`FAIL ${rel}  (${summary})`);
    for (const e of errors.slice(0, 12)) console.log(`       ${e}`);
    if (errors.length > 12) console.log(`       ... and ${errors.length - 12} more`);
    failed++;
  } else {
    console.log(`${warnings.length ? 'warn' : 'ok  '} ${rel}  (${summary})`);
  }
  for (const w of warnings.slice(0, 6)) console.log(`       warn: ${w}`);
  if (warnings.length > 6) console.log(`       warn: ... and ${warnings.length - 6} more`);
  if (warnings.length) warned++;
}

console.log(failed
  ? `\n${failed} of ${files.length} banks have errors; ${warned} have warnings.`
  : `\nNo errors across ${files.length} banks; ${warned} have warnings.`);
process.exit(failed ? 1 : 0);
