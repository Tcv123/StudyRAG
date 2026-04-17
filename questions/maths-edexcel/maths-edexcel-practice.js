/*
 * Edexcel A-Level Mathematics (9MA0) — Exam Practice Question Bank
 * Auto-derived from written question banks (w-*.js files loaded first via practice.html).
 * 40 questions per topic: 15 green (2–4 marks) + 15 amber (4–6 marks) + 10 red (6–8 marks).
 * Format: { topicKey: { name, questions: [{ q, marks, markScheme, diagram? }] } }
 */

(function() {
  function convert(written) {
    const result = {};
    for (const [key, topic] of Object.entries(written)) {
      const qs = [
        ...(topic.green || []).map(q => Object.assign({ q: q.q, marks: q.marks, markScheme: q.modelAnswer }, q.diagram ? { diagram: true } : {})),
        ...(topic.amber || []).map(q => Object.assign({ q: q.q, marks: q.marks, markScheme: q.modelAnswer }, q.diagram ? { diagram: true } : {})),
        ...(topic.red   || []).map(q => Object.assign({ q: q.q, marks: q.marks, markScheme: q.modelAnswer }, q.diagram ? { diagram: true } : {})),
      ];
      result[key] = { name: topic.name, questions: qs };
    }
    return result;
  }

  window.MATHS_EDEXCEL_PRACTICE = convert({
    ...(typeof EDEXCEL_WRITTEN_P1_P11  !== 'undefined' ? EDEXCEL_WRITTEN_P1_P11  : {}),
    ...(typeof EDEXCEL_WRITTEN_P12_P21 !== 'undefined' ? EDEXCEL_WRITTEN_P12_P21 : {}),
    ...(typeof EDEXCEL_WRITTEN_S1_S8   !== 'undefined' ? EDEXCEL_WRITTEN_S1_S8   : {}),
    ...(typeof EDEXCEL_WRITTEN_M1_M2   !== 'undefined' ? EDEXCEL_WRITTEN_M1_M2   : {}),
    ...(typeof EDEXCEL_WRITTEN_M3_M4   !== 'undefined' ? EDEXCEL_WRITTEN_M3_M4   : {}),
    ...(typeof EDEXCEL_WRITTEN_M5_M7   !== 'undefined' ? EDEXCEL_WRITTEN_M5_M7   : {}),
  });
})();
