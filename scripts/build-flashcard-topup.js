#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════
   FLASHCARD TOP-UP BUILDER — brings every topic in flashcards-config.js
   up to TARGET cards.

   Source: flashcards/topup/src/<deck>.txt
     deck: Subject|Board|level          (level = gcse | alevel)
     ## <topic num>                      (must match flashcards-config.js)
     front ~~ back                       (one card per line)
     # comment lines and blank lines are ignored

   Output: flashcards/topup/<deck>.sql — one guarded INSERT per deck that
   is safe to re-run and safe whatever is already live:
     - skips any card whose front already exists in that topic
     - only inserts as many as bring the topic up to TARGET
     - card_order continues after the topic's current max

   Usage:
     node scripts/build-flashcard-topup.js plan "Physics|AQA|alevel"
     node scripts/build-flashcard-topup.js build [deck-file-stem ...]
     node scripts/build-flashcard-topup.js status
═══════════════════════════════════════════════════════════════════ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'flashcards/topup/src');
const OUT_DIR = path.join(ROOT, 'flashcards/topup');
const TARGET = 30;

global.window = {};
require(path.join(ROOT, 'flashcards-config.js'));
const TOPICS = window.FLASHCARDS_TOPICS;

// Config key → { subject, board, level }. An unsuffixed key is the A-Level
// deck unless an explicit |alevel variant exists, in which case it is GCSE.
function decks() {
  const out = [];
  for (const key of Object.keys(TOPICS)) {
    const [subject, board, suffix] = key.split('|');
    const level = suffix || (TOPICS[`${subject}|${board}|alevel`] ? 'gcse' : 'alevel');
    out.push({ key, subject, board, level, topics: TOPICS[key] });
  }
  return out;
}
const deckId = d => `${d.subject}|${d.board}|${d.level}`;

// Existing seed cards in the repo: fronts keyed by deck id → topic → Set(front),
// and full rows (first copy of each front, in file order) for the backfill.
function parseSeeds() {
  const files = [
    ...fs.readdirSync(path.join(ROOT, 'flashcards')).filter(f => f.endsWith('.sql')).map(f => `flashcards/${f}`),
    ...fs.readdirSync(ROOT).filter(f => /^flashcards-.*\.sql$/.test(f)),
  ];
  const q = "'((?:[^']|'')*)'";
  const row = new RegExp(`^\\s*\\(${q},\\s*${q},\\s*${q},\\s*${q},\\s*${q},\\s*${q},\\s*(\\d+)(?:,\\s*'(\\w+)')?\\)[,;]?\\s*$`);
  const seeds = {};
  const rows = {};
  for (const f of files) {
    for (const line of fs.readFileSync(path.join(ROOT, f), 'utf8').split('\n')) {
      const m = line.match(row);
      if (!m) continue;
      const id = `${m[1]}|${m[2]}|${m[8] || 'alevel'}`;
      const front = m[5].replace(/''/g, "'");
      const set = ((seeds[id] ||= {})[m[3]] ||= new Set());
      if (!set.has(front)) ((rows[id] ||= {})[m[3]] ||= []).push([front, m[6].replace(/''/g, "'")]);
      set.add(front);
    }
  }
  return { seeds, rows };
}
const seedCards = () => parseSeeds().seeds;

function parseSource(file) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  let id = null, topic = null;
  const topics = {};
  const errors = [];
  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (!line || (line.startsWith('#') && !line.startsWith('## '))) return;
    if (line.startsWith('deck:')) { id = line.slice(5).trim(); return; }
    if (line.startsWith('## ')) { topic = line.slice(3).trim(); topics[topic] ||= []; return; }
    const parts = line.split(' ~~ ');
    if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) { errors.push(`line ${i + 1}: expected "front ~~ back"`); return; }
    if (!topic) { errors.push(`line ${i + 1}: card before any ## topic`); return; }
    topics[topic].push([parts[0].trim(), parts[1].trim()]);
  });
  return { id, topics, errors };
}

const sq = s => `'${s.replace(/'/g, "''")}'`;
// Case, spacing and trailing punctuation only — maths fronts differ by symbols (x² vs x, −f(x) vs f(−x)).
const norm = s => s.toLowerCase().replace(/\s+/g, ' ').replace(/[.?!]+$/, '').trim();

const valuesRow = (deck, t, front, back, ord) =>
  `  (${sq(deck.subject)}, ${sq(deck.board)}, ${sq(deck.level)}, ${sq(t.num)}, ${sq(t.name)}, ${sq(front)}, ${sq(back)}, ${ord})`;

// One INSERT that reads live state: skips fronts already in the topic, never takes a
// topic past TARGET, and continues card_order after the topic's current max.
function guardedInsert(deck, rows, header) {
  return `${header}
-- Safe to re-run: skips fronts already present and never takes a topic past ${TARGET}.
WITH v(subject, exam_board, level, topic_id, topic_name, front, back, ord) AS (VALUES
${rows.join(',\n')}
),
fresh AS (
  SELECT v.* FROM v
  WHERE NOT EXISTS (
    SELECT 1 FROM flashcards f
    WHERE f.subject = v.subject AND f.exam_board = v.exam_board AND f.level = v.level
      AND f.topic_id = v.topic_id AND f.front = v.front)
),
cur AS (
  SELECT subject, exam_board, level, topic_id, count(*) AS n, max(card_order) AS mx
  FROM flashcards
  WHERE subject = ${sq(deck.subject)} AND exam_board = ${sq(deck.board)} AND level = ${sq(deck.level)}
  GROUP BY 1, 2, 3, 4
),
ranked AS (
  SELECT fr.*, coalesce(c.n, 0) AS n, coalesce(c.mx, 0) AS mx,
         row_number() OVER (PARTITION BY fr.topic_id ORDER BY fr.ord) AS rn
  FROM fresh fr
  LEFT JOIN cur c USING (subject, exam_board, level, topic_id)
)
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level)
SELECT subject, exam_board, topic_id, topic_name, front, back, mx + rn, level
FROM ranked
WHERE n + rn <= ${TARGET};
`;
}

function build(stem, seeds, all) {
  const file = path.join(SRC_DIR, `${stem}.txt`);
  const { id, topics, errors } = parseSource(file);
  const deck = all.find(d => deckId(d) === id);
  if (!deck) errors.push(`unknown deck "${id}"`);
  const problems = [...errors];
  const rows = [];
  const report = [];
  if (deck) {
    const seed = seeds[id] || {};
    for (const t of Object.keys(topics)) {
      if (!deck.topics.some(x => x.num === t)) problems.push(`topic ${t} not in flashcards-config.js`);
    }
    for (const t of deck.topics) {
      const have = seed[t.num] ? seed[t.num].size : 0;
      const cards = topics[t.num] || [];
      const need = Math.max(0, TARGET - have);
      const seen = new Set([...(seed[t.num] || [])].map(norm));
      cards.forEach(([front]) => {
        const n = norm(front);
        if (seen.has(n)) problems.push(`${t.num}: duplicate front "${front}"`);
        seen.add(n);
      });
      if (cards.length < need) problems.push(`${t.num}: ${cards.length} new cards, need ${need} (seed has ${have})`);
      report.push(`${t.num.padEnd(6)} seed ${String(have).padStart(3)}  new ${String(cards.length).padStart(3)}  → ${have + cards.length}`);
      cards.forEach(([front, back], i) => {
        rows.push(valuesRow(deck, t, front, back, i + 1));
      });
    }
  }
  if (problems.length) return { stem, id, problems, report };

  const sql = guardedInsert(deck, rows, `-- Flashcard top-up: ${id} — brings each topic up to ${TARGET} cards.
-- Generated by scripts/build-flashcard-topup.js from flashcards/topup/src/${stem}.txt`);
  fs.writeFileSync(path.join(OUT_DIR, `${stem}.sql`), sql);
  return { stem, id, problems, report, count: rows.length };
}

const [cmd, ...args] = process.argv.slice(2);
const all = decks();
const seeds = seedCards();

if (cmd === 'plan') {
  const d = all.find(x => deckId(x) === args[0]);
  if (!d) { console.error('unknown deck; ids:\n' + all.map(deckId).join('\n')); process.exit(1); }
  const seed = seeds[deckId(d)] || {};
  for (const t of d.topics) {
    const have = seed[t.num] ? seed[t.num].size : 0;
    console.log(`${t.num.padEnd(6)} have ${String(have).padStart(3)}  need ${String(Math.max(0, TARGET - have)).padStart(3)}  ${t.name}`);
  }
  const extra = Object.keys(seed).filter(k => !d.topics.some(t => t.num === k));
  if (extra.length) console.log('seed topics not in config:', extra.join(', '));
} else if (cmd === 'fronts') {
  const seed = seeds[args[0]] || {};
  for (const t of Object.keys(seed)) console.log(`## ${t}\n` + [...seed[t]].map(f => '- ' + f).join('\n'));
} else if (cmd === 'build') {
  const stems = args.length ? args : fs.readdirSync(SRC_DIR).filter(f => f.endsWith('.txt')).map(f => f.replace(/\.txt$/, ''));
  let bad = 0;
  for (const stem of stems) {
    const r = build(stem, seeds, all);
    console.log(`\n== ${r.stem} (${r.id})${r.problems.length ? '  ✗' : `  ✓ ${r.count} cards`}`);
    r.report.forEach(l => console.log('  ' + l));
    r.problems.forEach(p => console.log('  ✗ ' + p));
    if (r.problems.length) bad++;
  }
  process.exit(bad ? 1 : 0);
} else if (cmd === 'status') {
  const done = new Set(fs.existsSync(SRC_DIR) ? fs.readdirSync(SRC_DIR).filter(f => f.endsWith('.txt'))
    .map(f => parseSource(path.join(SRC_DIR, f)).id) : []);
  let need = 0;
  for (const d of all) {
    const seed = seeds[deckId(d)] || {};
    const n = d.topics.reduce((s, t) => s + Math.max(0, TARGET - (seed[t.num] ? seed[t.num].size : 0)), 0);
    if (!done.has(deckId(d))) need += n;
    console.log(`${done.has(deckId(d)) ? '✓' : ' '} ${deckId(d).padEnd(36)} topics ${String(d.topics.length).padStart(2)}  to write ${n}`);
  }
  console.log('remaining cards to write:', need);
} else if (cmd === 'backfill') {
  // Re-inserts the repo's seed cards (guarded) so topics whose seed SQL never reached
  // Supabase, or ran as an older version, still end at TARGET after the top-up.
  const { rows: seedRowMap } = parseSeeds();
  const parts = [];
  // Optional deck ids limit the backfill to decks known to be short.
  for (const d of all.filter(x => !args.length || args.includes(deckId(x)))) {
    const byTopic = seedRowMap[deckId(d)];
    if (!byTopic) continue;
    const rows = [];
    for (const t of d.topics) (byTopic[t.num] || []).forEach(([f, b], i) => rows.push(valuesRow(d, t, f, b, i + 1)));
    if (rows.length) parts.push(guardedInsert(d, rows, `-- Seed backfill: ${deckId(d)}`));
  }
  fs.mkdirSync(path.join(OUT_DIR, 'paste'), { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'paste', '6-seed-backfill.sql'),
    `-- Seed backfill (${parts.length} decks): fills any topic still below ${TARGET} with the repo's original seed cards.\nBEGIN;\n\n${parts.join('\n')}\nCOMMIT;\n`);
  // Diagnostic: every config topic the app shows that is still below TARGET.
  const vals = all.flatMap(d => d.topics.map(t => `  (${sq(d.subject)}, ${sq(d.board)}, ${sq(d.level)}, ${sq(t.num)})`));
  fs.writeFileSync(path.join(OUT_DIR, 'paste', 'check-topics-below-30.sql'),
    `-- Lists every topic in flashcards-config.js with fewer than ${TARGET} cards (no rows = all done).
WITH cfg(subject, exam_board, level, topic_id) AS (VALUES
${vals.join(',\n')}
)
SELECT cfg.*, count(f.id) AS cards
FROM cfg
LEFT JOIN flashcards f USING (subject, exam_board, level, topic_id)
GROUP BY 1, 2, 3, 4
HAVING count(f.id) < ${TARGET}
ORDER BY 1, 2, 3, 4;
`);
  console.log(`6-seed-backfill.sql  ${parts.length} decks;  check-topics-below-30.sql  ${vals.length} topics`);
} else if (cmd === 'bundle') {
  // Group the per-deck files into a few paste-sized transactions for the Supabase SQL editor.
  const groups = [
    ['1-sciences', /^(biology|chemistry|physics)-/],
    ['2-humanities', /^(economics|geography|politics|business|english)-/],
    ['3-computer-science', /^cs-/],
    ['4-maths', /^maths-/],
    ['5-further-maths', /^fm-/],
  ];
  const pasteDir = path.join(OUT_DIR, 'paste');
  fs.mkdirSync(pasteDir, { recursive: true });
  const files = fs.readdirSync(OUT_DIR).filter(f => f.endsWith('.sql')).sort();
  const used = new Set();
  for (const [name, re] of groups) {
    const mine = files.filter(f => re.test(f));
    mine.forEach(f => used.add(f));
    const body = mine.map(f => fs.readFileSync(path.join(OUT_DIR, f), 'utf8')).join('\n');
    fs.writeFileSync(path.join(pasteDir, `${name}.sql`), `-- Flashcard top-up bundle: ${name} (${mine.length} decks)\nBEGIN;\n\n${body}\nCOMMIT;\n`);
    console.log(`${name}.sql  ${mine.length} decks  ${(Buffer.byteLength(body) / 1024).toFixed(0)} KB`);
  }
  const missed = files.filter(f => !used.has(f));
  if (missed.length) { console.error('not bundled:', missed.join(', ')); process.exit(1); }
} else {
  console.log('usage: plan <deck> | build [stems] | status | bundle | backfill');
}
