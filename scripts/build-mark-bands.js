/*
 * ── BUILD api/_mark-bands.js ─────────────────────────────────────────────
 *
 * Emits the level-of-response grids the AI marking endpoints feed to the
 * model. Run after changing a Politics mark scheme in papers-config.js:
 *
 *     node scripts/build-mark-bands.js
 *
 * WHY THIS IS GENERATED, NOT HAND-WRITTEN
 * ────────────────────────────────────────
 * The Edexcel grids already exist in `papers-config.js`, transcribed from
 * Pearson's published 9PL0 mark schemes for the mark-schemes and
 * paper-attempt pages. Retyping them into an API file would put the same
 * Pearson text in two places, and the one that drifts is the one nobody
 * reads — a marker grading against a band boundary that no longer matches
 * the board is worse than one grading with no bands at all. So the Edexcel
 * half is COPIED from papers-config.js at build time, byte for byte, and
 * tests/mark-bands.test.js fails if the emitted file stops matching.
 *
 * Where papers-config.js holds several transcriptions of one tariff, the
 * majority variant wins and the minority is reported: at the time of writing
 * the 30-mark grid had a 13-part variant reading "underpin analysis and
 * evaluation" and a single part reading "underpin analysis", which is a
 * transcription slip rather than two real Pearson grids.
 *
 * The AQA half CANNOT be generated — papers-config.js carries no AQA
 * Politics mark schemes (0 of 12 papers). Those grids are hand-entered in
 * AQA_BANDS below, read off the official PDFs, with the source URL on each.
 */

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT  = path.join(ROOT, 'api', '_mark-bands.js');

/* ── load papers-config.js in a VM (it assigns window.SUBJECTS) ──────── */
function loadSubjects() {
  const sandbox = {};
  sandbox.window = sandbox;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'papers-config.js'), 'utf8'), ctx,
                  { filename: 'papers-config.js' });
  return sandbox.SUBJECTS || [];
}

/* ── pull the majority `levels` grid per tariff for one subject+board ── */
function gridsFor(subjects, subjectName, boardName) {
  const subject = subjects.find(s => s.name === subjectName);
  const board = subject && (subject.boards || []).find(b => b.board === boardName);
  if (!board) throw new Error(`No ${subjectName} / ${boardName} in papers-config.js`);

  const byTariff = new Map();   // top-of-range -> Map(signature -> [part ids])
  (board.papers || []).forEach(p => {
    Object.entries(p.markSchemes || {}).forEach(([code, ms]) => {
      if (!ms || typeof ms !== 'object' || ms.type !== 'levels') return;
      if (!Array.isArray(ms.levels) || !ms.levels.length) return;
      const tariff = ms.levels[0].range[1];
      const sig = JSON.stringify(ms.levels);
      if (!byTariff.has(tariff)) byTariff.set(tariff, new Map());
      const variants = byTariff.get(tariff);
      if (!variants.has(sig)) variants.set(sig, []);
      variants.get(sig).push(`${p.id}:${code}`);
    });
  });

  const out = {};
  [...byTariff.entries()].sort((a, b) => a[0] - b[0]).forEach(([tariff, variants]) => {
    const ranked = [...variants.entries()].sort((a, b) => b[1].length - a[1].length);
    const [winnerSig, winnerParts] = ranked[0];
    if (ranked.length > 1) {
      console.log(`  note: ${tariff}-mark has ${ranked.length} transcriptions in papers-config.js; ` +
                  `taking the ${winnerParts.length}-part majority, ignoring ` +
                  ranked.slice(1).map(([, p]) => `${p.length}-part (${p[0]})`).join(', '));
    }
    out[tariff] = { levels: JSON.parse(winnerSig), parts: winnerParts.length };
  });
  return out;
}

/* ── AQA 7152: hand-entered, no mark schemes in papers-config.js ─────── */
// Read off the official June 2023 mark schemes. The 9-mark grid has only
// THREE levels, and both 25-mark grids (extract-based on Papers 1/2 and
// plain essay on Paper 3) share identical ranges and AO targets — verified
// across 7152/1 and 7152/3.
const AQA_BANDS = {
  9: {
    source: 'AQA A-level Politics 7152/1 mark scheme, June 2023 (filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-71521-MS-JUN23.PDF), p4',
    ao: 'AO1: 6 marks, AO2: 3 marks (no AO3 — these questions are not evaluative)',
    levels: [
      { range: [7, 9], descriptor: 'Level 3', criteria: 'Detailed knowledge of relevant political concepts, institutions and processes is demonstrated and appropriate political vocabulary is used (AO1). Thorough explanations and appropriate selection of accurate supporting examples demonstrate detailed understanding (AO1). Analysis of three clear points is structured, clearly focused on the question and confidently developed into a coherent answer (AO2).' },
      { range: [4, 6], descriptor: 'Level 2', criteria: 'Generally sound knowledge of political concepts, institutions and processes is demonstrated and generally appropriate political vocabulary is used (AO1). Some development of explanations and generally appropriate selection of supporting examples, though further detail may be required in places and some inaccuracies may be present (AO1). Analysis is developed in most places, though some points may be descriptive or in need of further development (AO2).' },
      { range: [1, 3], descriptor: 'Level 1', criteria: 'Limited knowledge of political concepts, institutions and processes is demonstrated and little or no appropriate political vocabulary is used (AO1). Limited development of explanations and selection of supporting examples, with further detail required and inaccuracies present throughout (AO1). Analysis takes the form of description for the most part; coherence and structure are limited (AO2).' },
    ],
    // These are hard caps in the published scheme, not guidance. A marker
    // that ignores them inflates two-point answers by a whole level.
    rules: [
      'The question asks for THREE ways/methods/reasons. A student who makes only TWO relevant points cannot score above Level 2 (maximum 6 marks). A student who makes only ONE cannot score above Level 1 (maximum 3 marks).',
      'If more than three points are offered, credit only the best three.',
    ],
  },
  25: {
    source: 'AQA A-level Politics 7152/1 and 7152/3 mark schemes, June 2023 — identical ranges and AO targets on both',
    ao: 'AO1: 5 marks, AO2: 10 marks, AO3: 10 marks — so knowledge alone is worth only a fifth of the marks; analysis and evaluation carry the paper',
    levels: [
      { range: [21, 25], descriptor: 'Level 5', criteria: 'Detailed and accurate knowledge and understanding of relevant political concepts, institutions and processes are used to support analysis of the issue under discussion (AO1). Analysis is balanced and confidently developed (AO2). Links are well explained, focused on the question and fully supported with relevant and developed examples (AO2). Evaluation leads to well substantiated conclusions that are consistent with the preceding discussion (AO3). Relevant perspectives are successfully evaluated in the process of constructing arguments (AO3). The answer is well organised, coherent, with a sustained analytical focus on the question (AO2).' },
      { range: [16, 20], descriptor: 'Level 4', criteria: 'Accurate knowledge and understanding are used to support analysis, though further detail may be required in places (AO1). Analysis is balanced and developed, though some elements could be expanded further (AO2). Links are relevant to the question as set and supported with examples (AO2). Evaluation leads to conclusions that show some substantiation and are consistent with the preceding discussion (AO3). Relevant perspectives are evaluated in constructing arguments, although in places there could be further development (AO3).' },
      { range: [11, 15], descriptor: 'Level 3', criteria: 'Generally sound knowledge and understanding are used to support points made, though inaccuracies will be present (AO1). Analytical points are made and developed in places, showing some balance, though some points are descriptive rather than analytical (AO2). Links are made, though explanation will lack depth (AO2). Evaluation leads to conclusions that are consistent with the preceding discussion but lack substantiation (AO3). Relevant perspectives are commented on, though evaluation lacks depth (AO3).' },
      { range: [6, 10], descriptor: 'Level 2', criteria: 'Some knowledge and understanding are used to support points made, though these contain inaccuracies and irrelevant material (AO1). Analysis takes the form of description in most places, with some attempt at balance, though many points are unsupported assertions (AO2). Links tend to be limited and undeveloped (AO2). Some attempt to draw conclusions is made, but these lack depth and clear development from the preceding discussion (AO3). Relevant perspectives are identified, though evaluation is superficial (AO3).' },
      { range: [1, 5], descriptor: 'Level 1', criteria: 'Limited knowledge and understanding, with inaccuracies and irrelevant material present throughout (AO1). Analysis takes the form of description and assertion, with little or no attempt made at balance (AO2). Few if any links are made (AO2). Conclusions, when offered, are asserted and have an implicit relationship to the preceding discussion (AO3). Little or no evaluation of relevant perspectives is present (AO3).' },
    ],
    rules: [
      'It does not matter which view the student reaches. What matters is that their position is supported by their own arguments and examples.',
    ],
  },
};

// Rules that come from the wording of the question itself rather than the
// tariff. Kept next to the grids so there is one place to look.
const EDEXCEL_RULES = {
  30: [
    'All three AOs carry weight in this grid, so a knowledge-dense answer that never explicitly weighs the arguments against each other is capped well below the top band. Where the question supplies a source, the source rule below governs what counts; where it does not, expect a balanced debate across the topic and a conclusion that decides the question rather than summarising it.',
  ],
  24: [
    'Political ideas essays require NAMED specification thinkers. An answer that discusses the ideology without naming and using thinkers cannot reach the top bands.',
    'The three AOs carry roughly equal weight, so a knowledge-dense answer with no evaluation is capped well below the top band.',
  ],
  12: [
    'Component 3 comparative questions are marked on the comparative theories or approaches, not on description of the two systems side by side.',
  ],
};

/* ── emit ────────────────────────────────────────────────────────────── */
function j(v) { return JSON.stringify(v, null, 2).replace(/\n/g, '\n  '); }

function main() {
  const subjects = loadSubjects();
  console.log('Reading Politics / Edexcel grids from papers-config.js…');
  const edexcel = gridsFor(subjects, 'Politics', 'Edexcel');
  const tariffs = Object.keys(edexcel).map(Number).sort((a, b) => a - b);
  console.log(`  found tariffs: ${tariffs.join(', ')}`);

  const entries = [];
  tariffs.forEach(t => {
    entries.push([`Politics|Edexcel|${t}`, {
      source: `papers-config.js — Pearson 9PL0 mark schemes (generated by scripts/build-mark-bands.js from ${edexcel[t].parts} transcribed parts)`,
      ao: 'AO1, AO2 and AO3 all carry weight in the published grid; the level descriptors below name which is which.',
      levels: edexcel[t].levels,
      rules: EDEXCEL_RULES[t] || [],
    }]);
  });
  Object.keys(AQA_BANDS).map(Number).sort((a, b) => a - b).forEach(t => {
    entries.push([`Politics|AQA|${t}`, AQA_BANDS[t]]);
  });

  const body = entries
    .map(([k, v]) => `  ${JSON.stringify(k)}: ${j(v)},`)
    .join('\n');

  const src = `/*
 * ── LEVEL-OF-RESPONSE GRIDS FOR AI MARKING ──────────────────────────────
 *
 * GENERATED FILE — do not edit by hand.
 * Run \`node scripts/build-mark-bands.js\` to regenerate, and see that script
 * for why the Edexcel half is copied out of papers-config.js instead of
 * being retyped. tests/mark-bands.test.js fails if this file drifts from it.
 *
 * Keyed "Subject|Board|Marks". Consumed by api/mark-essay.js (so the marker
 * grades against the real band boundaries instead of inventing them) and by
 * api/generate-model-answer.js (so a model answer is written to the standard
 * the top band actually describes).
 *
 * Only tariffs with a VERIFIED published grid belong here. A subject with no
 * entry falls back to the generic prompt, which is the honest default — a
 * guessed band boundary is worse than none.
 */
const MARK_BANDS = {
${body}
};

/** The grid for a subject+board+tariff, or null when none is verified. */
function bandsFor(subject, board, marks) {
  if (!subject || !board || !marks) return null;
  return MARK_BANDS[\`\${subject}|\${board}|\${marks}\`] || null;
}

/**
 * Rules that come from how the question is WORDED rather than its tariff, so
 * they are detected from the question text. The AI feedback banks embed these
 * rubrics verbatim in the question, but nothing told the marker they bind.
 */
function rubricRules(question) {
  const q = String(question || '');
  const rules = [];
  if (/only the information presented in the source|compare and contrast different opinions in the source/i.test(q)) {
    rules.push('This question sets a SOURCE rubric. Judge only what the answer does with the source: reward comparing and contrasting the opinions within it, and give no credit for material imported from outside it. An answer that does not engage with the source cannot reach the top bands.');
  }
  if (/appropriate thinkers|thinkers you have studied/i.test(q)) {
    rules.push('This question sets a THINKERS rubric. The answer must name and use specification thinkers. Say which thinkers were used, and if none were named, treat that as a band-limiting omission rather than a minor one.');
  }
  if (/\\b(explain and analyse|analyse and explain)\\b[^.]{0,40}\\bthree\\b/i.test(q)) {
    rules.push('This question asks for exactly THREE points. Count the relevant points the answer actually makes and apply the published caps: two points cannot exceed Level 2, one point cannot exceed Level 1. Credit only the best three if more are offered.');
  }
  return rules;
}

/**
 * Render a grid as prompt text. Returns '' when there is no verified grid,
 * so callers can concatenate unconditionally.
 */
function renderBands(entry, extraRules = []) {
  if (!entry) {
    return extraRules.length
      ? \`\\nQUESTION-SPECIFIC RULES (these bind — apply them):\\n\${extraRules.map(r => \`- \${r}\`).join('\\n')}\\n\`
      : '';
  }
  const grid = entry.levels
    .map(l => \`  \${l.descriptor} (\${l.range[0]}-\${l.range[1]} marks): \${l.criteria}\`)
    .join('\\n');
  const rules = [...(entry.rules || []), ...extraRules];
  return \`
OFFICIAL LEVEL-OF-RESPONSE GRID FOR THIS TARIFF — mark against THIS, not a general impression.
Assessment objectives: \${entry.ao}

\${grid}

Pick the level by BEST FIT across the whole answer rather than by hunting for
gaps, then choose the mark within that level from how consistently the answer
meets the descriptor. Report the level you chose in the "band" field, using the
descriptor wording above.
\${rules.length ? \`\\nRULES THAT BIND FOR THIS QUESTION:\\n\${rules.map(r => \`- \${r}\`).join('\\n')}\\n\` : ''}\`;
}

module.exports = { MARK_BANDS, bandsFor, rubricRules, renderBands };
`;

  fs.writeFileSync(OUT, src);
  console.log(`\nWrote ${path.relative(ROOT, OUT)} — ${entries.length} grids: ${entries.map(([k]) => k).join(', ')}`);
}

module.exports = { loadSubjects, gridsFor, AQA_BANDS, EDEXCEL_RULES };

if (require.main === module) main();
