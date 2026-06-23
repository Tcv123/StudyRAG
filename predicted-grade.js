// predicted-grade.js
// Estimates a UK grade from topic RAG status + practice attempt history.
// Boundaries averaged from published AQA / Edexcel / OCR results 2022–2024.

(function () {

  // ── Grade boundaries ────────────────────────────────────────────────────────
  // Each band: the minimum mastery% needed to achieve that grade.
  // Derived from real boundary data: e.g. AQA A-level A* has sat around 78–83%
  // of total marks in recent series, so we use 80% as the threshold.

  const ALEVEL_BANDS = [
    { grade: 'A*', min: 0.80 },
    { grade: 'A',  min: 0.65 },
    { grade: 'B',  min: 0.52 },
    { grade: 'C',  min: 0.40 },
    { grade: 'D',  min: 0.29 },
    { grade: 'E',  min: 0.19 },
    { grade: 'U',  min: 0    },
  ];

  const AS_BANDS = [
    { grade: 'A',  min: 0.70 },
    { grade: 'B',  min: 0.57 },
    { grade: 'C',  min: 0.45 },
    { grade: 'D',  min: 0.33 },
    { grade: 'E',  min: 0.22 },
    { grade: 'U',  min: 0    },
  ];

  // GCSE boundaries are lower than many expect — a grade 4 (standard pass)
  // typically sits around 30–35% of total marks in most subjects.
  const GCSE_BANDS = [
    { grade: '9', min: 0.79 },
    { grade: '8', min: 0.70 },
    { grade: '7', min: 0.61 },
    { grade: '6', min: 0.51 },
    { grade: '5', min: 0.41 },
    { grade: '4', min: 0.31 },
    { grade: '3', min: 0.20 },
    { grade: '2', min: 0.12 },
    { grade: '1', min: 0.06 },
    { grade: 'U', min: 0    },
  ];

  // RAG → mastery weight: Green means well-known, Amber partial, Red poor.
  const RAG_WEIGHT = { green: 0.90, amber: 0.55, red: 0.20 };

  function bandsForLevel(level) {
    const l = (level || '').toLowerCase();
    if (l === 'a-level') return ALEVEL_BANDS;
    if (l === 'as')      return AS_BANDS;
    return GCSE_BANDS;
  }

  function gradeFromPct(pct, bands) {
    for (const b of bands) {
      if (pct >= b.min) return b.grade;
    }
    return 'U';
  }

  /**
   * Compute a predicted grade for one subject.
   *
   * @param {object} params
   * @param {string} params.level        — 'gcse' | 'as' | 'a-level'
   * @param {number} params.totalTopics  — total spec topics (from TOPIC_TOTAL)
   * @param {Array}  params.topicRows    — topic_progress rows for this subject/board
   * @param {Array}  params.practiceRows — practice_attempts rows for this subject/board (last 60 days)
   *
   * @returns {{
   *   grade: string,
   *   masteryPct: number,
   *   confidence: 'low'|'medium'|'high',
   *   ragScore: number,
   *   practiceScore: number|null
   * }}
   */
  function computePredictedGrade({ level, totalTopics, topicRows, practiceRows }) {
    const bands = bandsForLevel(level);

    // ── Signal 1: RAG topic coverage ──────────────────────────────────────────
    // Untested topics count as zero mastery, so a student who's only diagnosed
    // 3 out of 10 topics is penalised even if those 3 are all green.
    const specTopics = Math.max(totalTopics || topicRows.length, 1);
    let ragSum = 0;
    (topicRows || []).forEach(t => { ragSum += RAG_WEIGHT[t.rag_status] || 0; });
    const ragScore = ragSum / specTopics;  // 0–1

    // ── Signal 2: Practice question accuracy ──────────────────────────────────
    const attempts = (practiceRows || []).filter(r => (r.total_marks || 0) > 0);
    let practiceScore = null;
    if (attempts.length > 0) {
      const earned = attempts.reduce((s, r) => s + (r.earned       || 0), 0);
      const total  = attempts.reduce((s, r) => s + (r.total_marks  || 0), 0);
      if (total > 0) practiceScore = earned / total;
    }

    // ── Blend the two signals ─────────────────────────────────────────────────
    // With sparse practice data we lean on RAG more heavily.
    let masteryPct;
    if (practiceScore === null) {
      masteryPct = ragScore;
    } else if (attempts.length < 5) {
      masteryPct = ragScore * 0.70 + practiceScore * 0.30;
    } else {
      masteryPct = ragScore * 0.50 + practiceScore * 0.50;
    }

    // ── Confidence level ──────────────────────────────────────────────────────
    const testedFraction = (topicRows || []).length / specTopics;
    let confidence;
    if (attempts.length >= 10 && testedFraction >= 0.5) {
      confidence = 'high';
    } else if (attempts.length >= 5 || testedFraction >= 0.3) {
      confidence = 'medium';
    } else {
      confidence = 'low';
    }

    return {
      grade:         gradeFromPct(masteryPct, bands),
      masteryPct:    Math.round(masteryPct * 100),
      confidence,
      ragScore:      Math.round(ragScore * 100),
      practiceScore: practiceScore !== null ? Math.round(practiceScore * 100) : null,
    };
  }

  // ── Grade → display colour ────────────────────────────────────────────────
  const GRADE_COLOUR = {
    'A*': '#15803D', A: '#16A34A',
    '9': '#15803D', '8': '#16A34A', '7': '#22C55E',
    B: '#2563EB', C: '#2563EB',
    '6': '#2563EB', '5': '#2563EB',
    D: '#D97706', E: '#D97706',
    '4': '#D97706', '3': '#D97706',
    U: '#DC2626', '2': '#DC2626', '1': '#DC2626',
  };

  function gradeColour(g) { return GRADE_COLOUR[g] || '#6B7280'; }

  // ── Grade ordering, for predicted-vs-target comparison ────────────────────
  // Bands are listed best→worst, so a lower index is a better grade. We flip
  // that into a rank where a higher number is a better grade.
  function gradeRank(grade, level) {
    const bands = bandsForLevel(level);
    const idx = bands.findIndex(b => b.grade === grade);
    return idx === -1 ? -1 : (bands.length - 1 - idx);
  }

  // Describe a predicted grade relative to the student's target grade.
  // Returns { label, short, colour } or null when no comparison is possible.
  function targetStatus(prediction, target, level) {
    if (!target || target === 'none') return null;
    const pr = gradeRank(prediction.grade, level);
    const tr = gradeRank(target, level);
    if (pr < 0 || tr < 0) return null;
    const diff = pr - tr;
    if (diff >= 1)   return { label: '✓ Above target',          short: '✓ Above',    colour: '#15803D' };
    if (diff === 0)  return { label: '✓ On track',              short: '✓ On track', colour: '#16A34A' };
    if (diff === -1) return { label: '1 grade below target',    short: '1 below',    colour: '#D97706' };
    return             { label: `${-diff} grades below target`, short: `${-diff} below`, colour: '#DC2626' };
  }

  // ── Predicted-grade badge ─────────────────────────────────────────────────
  // Shared renderer so the dashboard and breakdown stay visually identical.
  //   opts.level   — 'gcse' | 'as' | 'a-level' (for target comparison)
  //   opts.target  — the student's target grade, optional
  //   opts.compact — true → a small fixed-width chip (for list rows)
  function renderPredictedGradeBadge(prediction, opts) {
    if (!prediction) return '';
    opts = opts || {};
    const col   = gradeColour(prediction.grade);
    const dim   = prediction.confidence === 'low';
    const qmark = dim ? '<span style="font-size:14px;font-weight:400;opacity:0.55;margin-left:2px;">?</span>' : '';
    const ts    = targetStatus(prediction, opts.target, opts.level);
    const tip   = dim
      ? 'Low confidence — answer more practice questions to improve accuracy'
      : `${prediction.masteryPct}% mastery · RAG ${prediction.ragScore}%${prediction.practiceScore !== null ? ` · Practice ${prediction.practiceScore}%` : ''}`;

    if (opts.compact) {
      return `<div title="${tip}" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;background:${col}12;border:1.5px solid ${col}40;border-radius:10px;padding:6px 14px;min-width:72px;cursor:help;opacity:${dim ? '0.72' : '1'};">
        <span style="font-size:9px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:${col}CC;">Predicted</span>
        <span style="font-size:20px;font-weight:800;color:${col};line-height:1;letter-spacing:-0.02em;">${prediction.grade}${qmark}</span>
        ${ts ? `<span style="font-size:9px;font-weight:700;color:${ts.colour};">${ts.short}</span>` : `<span style="font-size:9px;font-weight:600;color:var(--muted,#6B7280);">${prediction.masteryPct}% mastery</span>`}
      </div>`;
    }

    // Single-row pill — same compact height as the grade chips, with a small
    // inline on-track / below-target indicator when a target is set.
    return `<div title="${tip}" style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:${col}15;border:1.5px solid ${col}55;border-radius:10px;padding:8px 12px;margin-bottom:10px;cursor:help;opacity:${dim ? '0.6' : '1'};">
      <span style="display:flex;align-items:baseline;gap:8px;min-width:0;">
        <span style="font-size:12px;font-weight:600;color:${col}CC;white-space:nowrap;">Predicted grade</span>
        ${ts ? `<span style="font-size:10px;font-weight:700;color:${ts.colour};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${ts.short}</span>` : ''}
      </span>
      <span style="font-size:20px;font-weight:800;color:${col};letter-spacing:-0.01em;line-height:1;white-space:nowrap;">${prediction.grade}${qmark}</span>
    </div>`;
  }

  window.computePredictedGrade     = computePredictedGrade;
  window.predictedGradeColour      = gradeColour;
  window.renderPredictedGradeBadge = renderPredictedGradeBadge;
})();
