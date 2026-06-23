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

  window.computePredictedGrade = computePredictedGrade;
  window.predictedGradeColour  = gradeColour;
})();
