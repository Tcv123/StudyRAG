/* ═══════════════════════════════════════
   SHARED PRACTICE QUESTION BANK CONFIG
   ────────────────────────────────────────
   Used by:
     - practice.html  (browse + practise questions by topic)
     - ai-feedback.html (load same questions for AI marking)

   To add a new subject + board:
     1) Drop a *-practice.js file in /questions/<subject>/ that exports a
        global variable like SUBJECT_BOARD_PRACTICE = { topicId: ... }.
     2) Add an entry to BUNDLE_MAP pointing at the file.
     3) Add an entry to PRACTICE_MAP pointing at the global.
   Both pages will pick it up automatically.

   Two question-bank shapes are supported per topic:
     A:  { topicId: { name: '...', questions: [{ q, marks, ... }] } }
     B:  { topicId: [{ q, marks, ... }] }
═══════════════════════════════════════ */
(function () {
  'use strict';

  const BUNDLE_MAP = {
    'Computer Science_OCR':         ['questions/cs/cs-ocr-gcse-practice.js'],
    'Computer Science_OCR|alevel':  ['questions/cs/cs-ocr-alevel-practice.js'],
    'Computer Science_AQA|gcse':    ['questions/cs/cs-aqa-gcse-practice.js'],
    'Computer Science_AQA|alevel':  ['questions/cs/cs-aqa-alevel-practice.js'],
    'Physics_Edexcel':              ['questions/physics/physics-edexcel-practice.js'],
    'Physics_AQA':                  ['questions/physics/physics-aqa-practice.js'],
    'Physics_AQA|gcse':             ['questions/physics-aqa-gcse/physics-aqa-gcse-practice.js'],
    'Physics_Edexcel|gcse':         ['questions/physics-edexcel-gcse/physics-edexcel-gcse-practice.js'],
    'Physics_OCR A|gcse':           ['questions/physics-ocr-a-gcse/physics-ocr-a-gcse-practice.js'],
    'Physics_OCR A':                ['questions/physics/physics-ocr-a-practice.js'],
    'Physics_OCR B':                ['questions/physics/physics-ocr-b-practice.js'],
    'Physics_OCR B|gcse':           ['questions/physics-ocr-b-gcse/physics-ocr-b-gcse-practice.js'],
    'Economics_AQA':                ['questions/economics-aqa/economics-aqa-practice.js'],
    'Economics_Edexcel A':          ['questions/economics-edexcel-a/economics-edexcel-a-practice.js'],
    'Economics_OCR':                ['questions/economics-ocr/economics-ocr-practice.js'],
    'Economics_Edexcel B':          ['questions/economics-edexcel-b/economics-edexcel-b-practice.js'],
    'Chemistry_AQA':                ['questions/chemistry/chemistry-aqa-practice.js'],
    'Chemistry_Edexcel':            ['questions/chemistry/chemistry-edexcel-practice.js'],
    'Chemistry_OCR A':              ['questions/chemistry/chemistry-ocr-a-practice.js'],
    'Chemistry_OCR B':              ['questions/chemistry/chemistry-ocr-b-practice.js'],
    'Biology_AQA':                  ['questions/biology/biology-aqa-practice.js'],
    'Biology_AQA|gcse':             ['questions/biology/biology-aqa-gcse-practice.js'],
    'Biology_Edexcel|gcse':         ['questions/biology-edexcel-gcse/biology-edexcel-gcse-practice.js'],
    'Biology_Edexcel IGCSE|gcse':   ['questions/biology-edexcel-igcse/biology-edexcel-igcse-practice.js'],
    'Biology_Edexcel A':            ['questions/biology/biology-edexcel-a-practice.js'],
    'Biology_Edexcel B':            ['questions/biology/biology-edexcel-b-practice.js'],
    'Biology_OCR A':                ['questions/biology/biology-ocr-a-practice.js'],
    'Biology_OCR A|gcse':           ['questions/biology/biology-ocr-a-gcse-practice.js'],
    'Biology_OCR B':                ['questions/biology/biology-ocr-b-practice.js'],
    'Biology_OCR B|gcse':           ['questions/biology/biology-ocr-b-gcse-practice.js'],
    'Geography_AQA':                ['questions/geography-aqa/geography-aqa-practice.js'],
    'Geography_Edexcel':            ['questions/geography-edexcel/geography-edexcel-practice.js'],
    'Geography_Eduqas|gcse':        ['questions/geography-eduqas-gcse/geography-eduqas-gcse-practice.js'],
    'Geography_Eduqas|alevel':      ['questions/geography-eduqas-alevel/geography-eduqas-alevel-practice.js'],
    'Geography_OCR':                ['questions/geography-ocr/geography-ocr-practice.js'],
    'Mathematics_AQA':              ['questions/maths-aqa/maths-aqa-practice.js'],
    'Mathematics_OCR|gcse':         ['questions/maths-ocr-gcse/maths-ocr-gcse-practice.js'],
    'Mathematics_OCR|alevel':       ['questions/maths-ocr-alevel/maths-ocr-alevel-practice.js'],
    'Mathematics_Edexcel': [
      'questions/maths-edexcel/w-P1-P11.js',
      'questions/maths-edexcel/w-P12-P21.js',
      'questions/maths-edexcel/w-S1-S8.js',
      'questions/maths-edexcel/w-M1-M2.js',
      'questions/maths-edexcel/w-M3-M4.js',
      'questions/maths-edexcel/w-M5-M7.js',
      'questions/maths-edexcel/maths-edexcel-practice.js',
    ],
    'Further Mathematics_Edexcel': [
      'questions/further-maths-edexcel/fm-edexcel-written-cp1a.js',
      'questions/further-maths-edexcel/fm-edexcel-written-cp1b.js',
      'questions/further-maths-edexcel/fm-edexcel-written-cp2a.js',
      'questions/further-maths-edexcel/fm-edexcel-written-cp2b.js',
      'questions/further-maths-edexcel/fm-edexcel-written.js',
      'questions/further-maths-edexcel/fm-edexcel-practice.js',
    ],
    'Further Mathematics_AQA':      ['questions/further-maths-aqa/fm-aqa-practice.js'],
    'Further Mathematics_OCR A':    ['questions/further-maths-ocr/fm-ocr-practice.js'],
    'Further Mathematics_OCR B': [
      'questions/further-maths-ocr-b/fm-ocr-b-written-cp1.js',
      'questions/further-maths-ocr-b/fm-ocr-b-written-cp2.js',
      'questions/further-maths-ocr-b/fm-ocr-b-written-m.js',
      'questions/further-maths-ocr-b/fm-ocr-b-written-s.js',
      'questions/further-maths-ocr-b/fm-ocr-b-written-a.js',
      'questions/further-maths-ocr-b/fm-ocr-b-written.js',
      'questions/further-maths-ocr-b/fm-ocr-b-practice.js',
    ],
    'English Language_AQA':         ['questions/english-aqa/english-aqa-practice.js'],
    'English Language_Edexcel':     ['questions/english-edexcel/english-edexcel-practice.js'],
  };

  const PRACTICE_MAP = {
    'Computer Science_OCR': () => typeof CS_OCR_PRACTICE !== 'undefined' ? CS_OCR_PRACTICE : null,
    'Computer Science_OCR|alevel': () => typeof CS_OCR_PRACTICE !== 'undefined' ? CS_OCR_PRACTICE : null,
    'Computer Science_AQA|gcse': () => typeof CS_AQA_PRACTICE !== 'undefined' ? CS_AQA_PRACTICE : null,
    'Computer Science_AQA|alevel': () => typeof CS_AQA_PRACTICE !== 'undefined' ? CS_AQA_PRACTICE : null,
    'Physics_Edexcel': () => typeof PHYSICS_EDEXCEL_PRACTICE !== 'undefined' ? PHYSICS_EDEXCEL_PRACTICE : null,
    'Physics_AQA': () => typeof PHYSICS_AQA_PRACTICE !== 'undefined' ? PHYSICS_AQA_PRACTICE : null,
    'Physics_AQA|gcse': () => typeof PHYSICS_AQA_GCSE_PRACTICE !== 'undefined' ? PHYSICS_AQA_GCSE_PRACTICE : null,
    'Physics_Edexcel|gcse': () => typeof PHYSICS_EDEXCEL_GCSE_PRACTICE !== 'undefined' ? PHYSICS_EDEXCEL_GCSE_PRACTICE : null,
    'Physics_OCR A|gcse': () => typeof PHYSICS_OCR_A_GCSE_PRACTICE !== 'undefined' ? PHYSICS_OCR_A_GCSE_PRACTICE : null,
    'Physics_OCR A': () => typeof PHYSICS_OCR_A_PRACTICE !== 'undefined' ? PHYSICS_OCR_A_PRACTICE : null,
    'Physics_OCR B': () => typeof PHYSICS_OCR_B_PRACTICE !== 'undefined' ? PHYSICS_OCR_B_PRACTICE : null,
    'Physics_OCR B|gcse': () => typeof PHYSICS_OCR_B_GCSE_PRACTICE !== 'undefined' ? PHYSICS_OCR_B_GCSE_PRACTICE : null,
    'Economics_AQA': () => typeof ECONOMICS_AQA_PRACTICE !== 'undefined' ? ECONOMICS_AQA_PRACTICE : null,
    'Economics_Edexcel A': () => typeof ECONOMICS_EDEXCEL_A_PRACTICE !== 'undefined' ? ECONOMICS_EDEXCEL_A_PRACTICE : null,
    'Economics_OCR': () => typeof ECONOMICS_OCR_PRACTICE !== 'undefined' ? ECONOMICS_OCR_PRACTICE : null,
    'Economics_Edexcel B': () => typeof ECONOMICS_EDEXCEL_B_PRACTICE !== 'undefined' ? ECONOMICS_EDEXCEL_B_PRACTICE : null,
    'Chemistry_AQA': () => typeof CHEMISTRY_AQA_PRACTICE !== 'undefined' ? CHEMISTRY_AQA_PRACTICE : null,
    'Chemistry_Edexcel': () => typeof CHEMISTRY_EDEXCEL_PRACTICE !== 'undefined' ? CHEMISTRY_EDEXCEL_PRACTICE : null,
    'Chemistry_OCR A': () => typeof CHEMISTRY_OCR_A_PRACTICE !== 'undefined' ? CHEMISTRY_OCR_A_PRACTICE : null,
    'Chemistry_OCR B': () => typeof CHEMISTRY_OCR_B_PRACTICE !== 'undefined' ? CHEMISTRY_OCR_B_PRACTICE : null,
    'Biology_AQA': () => typeof BIOLOGY_AQA_PRACTICE !== 'undefined' ? BIOLOGY_AQA_PRACTICE : null,
    'Biology_AQA|gcse': () => typeof BIOLOGY_AQA_GCSE_PRACTICE !== 'undefined' ? BIOLOGY_AQA_GCSE_PRACTICE : null,
    'Biology_Edexcel|gcse': () => typeof BIOLOGY_EDEXCEL_GCSE_PRACTICE !== 'undefined' ? BIOLOGY_EDEXCEL_GCSE_PRACTICE : null,
    'Biology_Edexcel IGCSE|gcse': () => typeof BIOLOGY_EDEXCEL_IGCSE_PRACTICE !== 'undefined' ? BIOLOGY_EDEXCEL_IGCSE_PRACTICE : null,
    'Biology_Edexcel A': () => typeof BIOLOGY_EDEXCEL_A_PRACTICE !== 'undefined' ? BIOLOGY_EDEXCEL_A_PRACTICE : null,
    'Biology_Edexcel B': () => typeof BIOLOGY_EDEXCEL_B_PRACTICE !== 'undefined' ? BIOLOGY_EDEXCEL_B_PRACTICE : null,
    'Biology_OCR A': () => typeof BIOLOGY_OCR_A_PRACTICE !== 'undefined' ? BIOLOGY_OCR_A_PRACTICE : null,
    'Biology_OCR A|gcse': () => typeof BIOLOGY_OCR_A_GCSE_PRACTICE !== 'undefined' ? BIOLOGY_OCR_A_GCSE_PRACTICE : null,
    'Biology_OCR B': () => typeof BIOLOGY_OCR_B_PRACTICE !== 'undefined' ? BIOLOGY_OCR_B_PRACTICE : null,
    'Biology_OCR B|gcse': () => typeof BIOLOGY_OCR_B_GCSE_PRACTICE !== 'undefined' ? BIOLOGY_OCR_B_GCSE_PRACTICE : null,
    'Geography_AQA': () => typeof GEOGRAPHY_AQA_PRACTICE !== 'undefined' ? GEOGRAPHY_AQA_PRACTICE : null,
    'Geography_Edexcel': () => typeof GEOGRAPHY_EDEXCEL_PRACTICE !== 'undefined' ? GEOGRAPHY_EDEXCEL_PRACTICE : null,
    'Geography_Eduqas|gcse': () => typeof GEOGRAPHY_EDUQAS_PRACTICE !== 'undefined' ? GEOGRAPHY_EDUQAS_PRACTICE : null,
    'Geography_Eduqas|alevel': () => typeof GEOGRAPHY_EDUQAS_ALEVEL_PRACTICE !== 'undefined' ? GEOGRAPHY_EDUQAS_ALEVEL_PRACTICE : null,
    'Geography_OCR': () => typeof GEOGRAPHY_OCR_PRACTICE !== 'undefined' ? GEOGRAPHY_OCR_PRACTICE : null,
    'Mathematics_AQA': () => typeof MATHS_AQA_PRACTICE !== 'undefined' ? MATHS_AQA_PRACTICE : null,
    'Mathematics_OCR|gcse': () => typeof MATHS_OCR_PRACTICE !== 'undefined' ? MATHS_OCR_PRACTICE : null,
    'Mathematics_OCR|alevel': () => typeof MATHS_OCR_ALEVEL_PRACTICE !== 'undefined' ? MATHS_OCR_ALEVEL_PRACTICE : null,
    'Mathematics_Edexcel': () => typeof MATHS_EDEXCEL_PRACTICE !== 'undefined' ? MATHS_EDEXCEL_PRACTICE : null,
    'Further Mathematics_Edexcel': () => typeof FM_EDEXCEL_PRACTICE !== 'undefined' ? FM_EDEXCEL_PRACTICE : null,
    'Further Mathematics_AQA': () => typeof FM_AQA_PRACTICE !== 'undefined' ? FM_AQA_PRACTICE : null,
    'Further Mathematics_OCR A': () => typeof FM_OCR_PRACTICE !== 'undefined' ? FM_OCR_PRACTICE : null,
    'Further Mathematics_OCR B': () => typeof FM_OCR_B_PRACTICE !== 'undefined' ? FM_OCR_B_PRACTICE : null,
    'English Language_AQA': () => typeof ENGLISH_AQA_PRACTICE !== 'undefined' ? ENGLISH_AQA_PRACTICE : null,
    'English Language_Edexcel': () => typeof ENGLISH_EDEXCEL_PRACTICE !== 'undefined' ? ENGLISH_EDEXCEL_PRACTICE : null,
  };

  const _loadedScripts = new Set();
  const _bundlePromises = {};

  function loadScriptOnce(src) {
    if (_loadedScripts.has(src)) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload  = () => { _loadedScripts.add(src); resolve(); };
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(s);
    });
  }

  function lvSuffix() {
    const l = (localStorage.getItem('cached_level') || 'gcse').toLowerCase();
    return (l === 'a-level' || l === 'as' || l === 'alevel') ? 'alevel' : 'gcse';
  }

  function lvLookup(map, base) {
    const keyed = map[`${base}|${lvSuffix()}`];
    return keyed !== undefined ? keyed : map[base];
  }

  function loadPracticeBundle(subjectKey) {
    if (_bundlePromises[subjectKey]) return _bundlePromises[subjectKey];
    const files = lvLookup(BUNDLE_MAP, subjectKey);
    if (!files) return Promise.resolve();
    _bundlePromises[subjectKey] = files.reduce(
      (chain, src) => chain.then(() => loadScriptOnce(src)),
      Promise.resolve()
    );
    return _bundlePromises[subjectKey];
  }

  function getPracticeBank(subjectKey) {
    const getter = lvLookup(PRACTICE_MAP, subjectKey);
    if (!getter) return null;
    return getter();
  }

  // Returns the array of question objects for a topic, normalising both shapes:
  //   A: { topicId: { name, questions: [...] } }
  //   B: { topicId: [...] }
  function getPracticeTopicQuestions(subjectKey, topicId) {
    const bank = getPracticeBank(subjectKey);
    if (!bank || !topicId) return [];
    const data = bank[topicId];
    if (!data) return [];
    const questions = Array.isArray(data) ? data : (data.questions || []);
    return questions.filter(q => q && q.q);
  }

  // Expose
  window.PRACTICE_BUNDLE_MAP    = BUNDLE_MAP;
  window.PRACTICE_GLOBAL_MAP    = PRACTICE_MAP;
  window.loadPracticeBundle     = loadPracticeBundle;
  window.getPracticeBank        = getPracticeBank;
  window.getPracticeTopicQuestions = getPracticeTopicQuestions;
})();
