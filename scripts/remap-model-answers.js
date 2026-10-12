/**
 * Re-files Maths / Further Maths model answers whose part code doesn't match
 * any part in the question data, so mark-schemes.html can find them.
 *
 * mark-schemes.html looks answers up as "<paperId>::<part code>", using the
 * part codes in maths-questions.js / further-maths-questions.js. Some answers
 * were written against a different split of the same question:
 *
 *   finer    answers 3(a), 3(b) — the question data has just 3.
 *            → joined into one answer for 3, labelled "(a) … (b) …".
 *   coarser  answer 2 — the question data has 2(a), 2(b).
 *            → moved to the first of those parts, 2(a). Not copied to every
 *              part: the answer often covers only some of them.
 *
 * Answers with no related part at all (the question isn't in the data) are
 * left alone and listed. So is a finer or coarser answer whose target part
 * already has an answer.
 *
 *   node scripts/remap-model-answers.js            preview only, writes nothing
 *   node scripts/remap-model-answers.js --sample N show N examples of each kind
 *   node scripts/remap-model-answers.js --apply    rewrite the two answer files
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const SETS = [
  { name: 'Maths', answers: 'model-answers-maths.js', questions: 'maths-questions.js' },
  { name: 'Further Maths', answers: 'model-answers-fm.js', questions: 'further-maths-questions.js' },
];
const ENTRY = /^(\s*)("(?:[^"\\]|\\.)+::(?:[^"\\]|\\.)+")\s*:\s*("(?:[^"\\]|\\.)*")(,?)\s*$/;

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const SAMPLE = args.includes('--sample') ? parseInt(args[args.indexOf('--sample') + 1], 10) || 3 : 0;

function loadGlobal(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), ctx, { filename: file });
  return Object.values(ctx.window)[0];
}

// "3(a)(ii)" is inside "3" and "3(a)", but "12(b)" is not inside "1".
const isInside = (code, parent) => code.startsWith(parent) && code[parent.length] === '(';

function plan(set) {
  const answers = loadGlobal(set.answers);
  const questions = loadGlobal(set.questions);
  const partsOf = id => (questions[id] ? questions[id].questions.flatMap(q => (q.parts || []).map(p => p.code)) : null);

  const finer = new Map();   // target key -> [answer keys], in file order
  const coarser = [];        // { from, to: [keys] }
  const unmatched = [];
  for (const key of Object.keys(answers)) {
    const [id, code] = key.split('::');
    const parts = partsOf(id);
    if (parts && parts.includes(code)) continue;
    if (!parts) { unmatched.push({ key, why: 'paper not in question data' }); continue; }
    const parents = parts.filter(p => isInside(code, p)).sort((a, b) => b.length - a.length);
    const children = parts.filter(p => isInside(p, code));
    if (parents.length) {
      const target = `${id}::${parents[0]}`;
      if (!finer.has(target)) finer.set(target, []);
      finer.get(target).push(key);
    } else if (children.length) {
      coarser.push({ from: key, to: children.map(c => `${id}::${c}`) });
    } else {
      unmatched.push({ key, why: 'no related part in question data' });
    }
  }

  const label = (from, target) => from.split('::')[1].slice(target.split('::')[1].length);
  const changes = { remove: new Set(), add: new Map() }; // add: key -> { text, at (key to insert after) }
  const skipped = [];
  for (const [target, keys] of finer) {
    if (answers[target] !== undefined) { skipped.push({ target, keys, why: 'target part already has an answer' }); continue; }
    const text = keys.map(k => `${label(k, target)} ${answers[k]}`).join('\n\n');
    keys.forEach(k => changes.remove.add(k));
    changes.add.set(target, { text, at: keys[0], from: keys });
  }
  const coarserDone = [];
  for (const c of coarser) {
    const first = c.to[0];
    if (answers[first] !== undefined || changes.add.has(first)) { skipped.push({ target: first, keys: [c.from], why: 'first part already has an answer' }); continue; }
    const to = [first];
    changes.remove.add(c.from);
    to.forEach((k, i) => changes.add.set(k, { text: answers[c.from], at: c.from, order: i, from: [c.from] }));
    coarserDone.push({ from: c.from, to });
  }
  return { set, answers, coarser: coarserDone, changes, skipped, unmatched };
}

function apply(p) {
  const file = path.join(ROOT, p.set.answers);
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const out = [];
  const inserts = new Map(); // anchor key -> [[key, text]]
  for (const [key, v] of p.changes.add) {
    const anchor = JSON.stringify(v.at);
    if (!inserts.has(anchor)) inserts.set(anchor, []);
    inserts.get(anchor).push([key, v.text]);
  }
  for (const line of lines) {
    const m = ENTRY.exec(line);
    if (!m) { out.push(line); continue; }
    const key = JSON.parse(m[2]);
    for (const [k, text] of inserts.get(m[2]) || []) out.push(`${m[1]}${JSON.stringify(k)}: ${JSON.stringify(text)},`);
    if (!p.changes.remove.has(key)) out.push(line);
  }
  fs.writeFileSync(file, out.join('\n'));
}

function show(s, n = 220) { return s.length > n ? s.slice(0, n) + '…' : s; }

for (const set of SETS) {
  const p = plan(set);
  const finerTargets = [...p.changes.add].filter(([, v]) => v.order === undefined);
  const finerMoved = finerTargets.reduce((n, [, v]) => n + v.from.length, 0);
  console.log(`\n=== ${set.name} (${set.answers})`);
  console.log(`  finer:    ${finerMoved} answers joined into ${finerTargets.length} parts`);
  console.log(`  coarser:  ${p.coarser.length} answers moved to the first sub-part`);
  console.log(`  skipped:  ${p.skipped.length} (target part already answered)`);
  console.log(`  left alone, no related part: ${p.unmatched.length}`);
  if (SAMPLE) {
    console.log(`\n  -- finer examples`);
    for (const [key, v] of finerTargets.slice(0, SAMPLE)) {
      console.log(`  ${v.from.map(k => k.split('::')[1]).join(' + ')}  →  ${key}`);
      console.log('    ' + show(v.text).replace(/\n\n/g, '\n    '));
    }
    console.log(`\n  -- coarser examples`);
    for (const c of p.coarser.slice(0, SAMPLE)) {
      console.log(`  ${c.from}  →  ${c.to.map(k => k.split('::')[1]).join(', ')}`);
      console.log('    ' + show(p.answers[c.from]));
    }
    if (p.skipped.length) {
      console.log(`\n  -- skipped examples`);
      p.skipped.slice(0, SAMPLE).forEach(s => console.log(`  ${s.keys.join(', ')} → ${s.target}: ${s.why}`));
    }
  }
  if (APPLY) { apply(p); console.log(`  applied to ${set.answers}`); }
}
if (!APPLY) console.log('\nPreview only. Run with --apply to rewrite the files.');
