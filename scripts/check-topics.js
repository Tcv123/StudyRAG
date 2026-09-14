#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════
   check-topics.js — does topics-config.js still match the question banks?

   THE DRIFT THIS CATCHES. Every diagnostic topic is a promise that the
   diagnostic can ask about it. When a topic is listed with no questions
   behind it, a student clicks through to an empty test, and — worse, because
   it is silent — every denominator on the site inflates: "1/17 topics
   tested" when only 12 can ever be tested, medals for "100% of your topics"
   that can never fire, a predicted grade computed against a total that does
   not exist.

   That is not hypothetical. When this script was written, Maths AQA listed
   five such topics and Computer Science AQA A-Level two, and the hand-kept
   TOPIC_TOTAL disagreed with the lists on five specs — Politics had drifted
   within a day of being added.

   HOW IT DECIDES. For each entry in topics-config.js it finds the diagnostic
   page (diagnostics-pages.js), loads the question banks that page loads, and
   compares the topic ids. The bank is the authority: it is the only one of
   the two that a student can actually be tested from.

   Run it after adding a subject or editing a topic list:

       node scripts/check-topics.js

   Exit code 0 = they agree. 1 = they do not, and it prints what differs.
   ═══════════════════════════════════════════════════════════════════ */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

/* ── The lists we are checking ─────────────────────────────────────── */
function loadConfig() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(read('topics-config.js'), sandbox, { filename: 'topics-config.js' });
  return sandbox.window.DIAG_TOPICS || {};
}

/* ── Which page belongs to which subject+board ─────────────────────── */
function loadPages() {
  const out = {};
  for (const m of read('diagnostics-pages.js').matchAll(/'([^']+)':\s*'(diagnostics\/[^']+)'/g)) {
    out[m[1]] = m[2];
  }
  return out;
}

/* ── What that page's bank can actually ask ────────────────────────── */
function bankTopics(pageRel) {
  const abs = path.join(ROOT, pageRel);
  if (!fs.existsSync(abs)) return { err: 'diagnostic page missing' };
  const html = fs.readFileSync(abs, 'utf8');

  const sandbox = { window: {}, console: { log() {}, error() {}, warn() {} } };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);

  const srcs = [...html.matchAll(/<script src="(\.\.\/questions\/[^"]+)"><\/script>/g)].map(m => m[1]);
  if (!srcs.length) return { err: 'page loads no question bank' };
  for (const s of srcs) {
    const f = path.join(ROOT, 'diagnostics', s);
    if (!fs.existsSync(f)) return { err: 'bank missing: ' + s };
    try { vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f }); }
    catch (e) { return { err: 'bank threw: ' + s + ' — ' + e.message }; }
  }

  // The global the page indexes with the topic key.
  const name = (html.match(/const mcqData\s*=\s*([A-Z0-9_]+)\s*\[/) || [])[1];
  if (!name) return { err: 'could not tell which global holds the questions' };

  let obj = null;
  try { obj = vm.runInContext(`typeof ${name} !== 'undefined' ? ${name} : null`, sandbox); } catch (e) {}
  if (!obj) obj = sandbox[name] || sandbox.window[name] || null;

  if (!obj) {
    /* Some pages build the merged bank in their own inline script — Maths
       Edexcel spreads seven files together. Run the inline prefix up to and
       including that declaration; it is pure data, no DOM. */
    for (const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
      const code = m[1];
      const at = code.indexOf('const ' + name + ' =');
      if (at === -1) continue;
      let d = 0, j = code.indexOf('{', at);
      for (; j < code.length; j++) {
        if (code[j] === '{') d++;
        else if (code[j] === '}') { d--; if (d === 0) { j++; break; } }
      }
      try {
        vm.runInContext(code.slice(0, j) + ';', sandbox, { filename: pageRel });
        obj = vm.runInContext(name, sandbox);
      } catch (e) { return { err: 'inline prefix threw: ' + e.message }; }
      break;
    }
  }

  return obj ? { ids: Object.keys(obj) } : { err: `global ${name} not found` };
}

/* ── Compare ───────────────────────────────────────────────────────── */
const config = loadConfig();
const pages = loadPages();
const problems = [];

for (const key of Object.keys(config)) {
  const page = pages[key];
  if (!page) { problems.push(`${key}\n    listed in topics-config.js but has no diagnostic page in diagnostics-pages.js`); continue; }

  const bank = bankTopics(page);
  if (bank.err) { problems.push(`${key}\n    could not read its questions — ${bank.err}`); continue; }

  const listed = config[key].topics.map(t => t.id);
  const phantom = listed.filter(id => !bank.ids.includes(id));
  const missing = bank.ids.filter(id => !listed.includes(id));

  if (phantom.length || missing.length) {
    const lines = [key];
    if (phantom.length) lines.push(`    listed with no questions behind them: ${phantom.join(', ')}`);
    if (missing.length) lines.push(`    has questions but is not listed:      ${missing.join(', ')}`);
    problems.push(lines.join('\n'));
  }
}

/* A diagnostic page nobody lists is a subject that silently cannot be
   diagnosed, which is the same bug from the other direction. */
for (const key of Object.keys(pages)) {
  if (!config[key]) problems.push(`${key}\n    has a diagnostic page but no entry in topics-config.js`);
}

const total = Object.values(config).reduce((n, e) => n + e.topics.length, 0);

if (problems.length) {
  console.error(`✗ topics-config.js disagrees with the question banks\n`);
  problems.forEach(p => console.error('  ' + p + '\n'));
  console.error(`${problems.length} problem${problems.length === 1 ? '' : 's'} across ${Object.keys(config).length} subject/board combinations.`);
  process.exit(1);
}

console.log(`✓ topics-config.js matches every question bank`);
console.log(`  ${Object.keys(config).length} subject/board combinations, ${total} topics.`);
