/*
 * Edexcel A-Level Further Mathematics — Practice Question Bank
 * Derived from fm-edexcel-written.js (loaded before this file).
 * 40 questions per topic: 15 green + 15 amber + 10 red.
 */

(function() {
  if (typeof FM_EDEXCEL_WRITTEN === 'undefined') return;
  const result = {};
  for (const [key, topic] of Object.entries(FM_EDEXCEL_WRITTEN)) {
    const qs = [
      ...(topic.green || []).map(q => ({ q: q.q, marks: q.marks, markScheme: q.modelAnswer, ...(q.diagram ? { diagram: true } : {}) })),
      ...(topic.amber || []).map(q => ({ q: q.q, marks: q.marks, markScheme: q.modelAnswer, ...(q.diagram ? { diagram: true } : {}) })),
      ...(topic.red   || []).map(q => ({ q: q.q, marks: q.marks, markScheme: q.modelAnswer, ...(q.diagram ? { diagram: true } : {}) })),
    ];
    result[key] = { name: topic.name, questions: qs };
  }
  window.FM_EDEXCEL_PRACTICE = result;
})();
