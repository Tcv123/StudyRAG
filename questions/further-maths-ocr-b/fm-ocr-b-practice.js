/*
 * OCR B (MEI) A-Level Further Mathematics — Practice Question Bank
 * Reuses the written bank (40 per topic, all written) as the practice pool.
 * Expects fm-ocr-b-written*.js files loaded previously.
 */
const FM_OCR_B_PRACTICE = (() => {
  const out = {};
  if (typeof FM_OCR_B_WRITTEN === 'undefined') return out;
  for (const key of Object.keys(FM_OCR_B_WRITTEN)) {
    const t = FM_OCR_B_WRITTEN[key];
    const questions = [...(t.green || []), ...(t.amber || []), ...(t.red || [])].map(q => ({
      q: q.q,
      marks: q.marks,
      markScheme: q.modelAnswer,
      hasDiagram: q.hasDiagram || false,
    }));
    out[key] = { name: t.name, questions };
  }
  return out;
})();
