/* ═══════════════════════════════════════════════════════════════════
   SHARED SUBJECT + EXAM-BOARD CONFIG
   Single source of truth for setup.html and practice.html (and any
   other page that needs the full list of supported subject/board
   combinations). Keep this in sync with SUBJECT_TOPICS in practice.html.
═══════════════════════════════════════════════════════════════════ */
(function () {
  const subjects = [
    { name: 'Mathematics',         emoji: '➗'  },
    { name: 'Further Mathematics', emoji: '∑'  },
    { name: 'Chemistry',           emoji: '⚗️' },
    { name: 'Biology',             emoji: '🧬' },
    { name: 'Computer Science',    emoji: '💻' },
    { name: 'Physics',             emoji: '⚡' },
    { name: 'Economics',           emoji: '📈' },
    { name: 'Geography',           emoji: '🌍' },
    { name: 'English Language',    emoji: '📝' },
    { name: 'English Literature',  emoji: '📖' },
    { name: 'History',             emoji: '📜' },
    { name: 'French',              emoji: '🇫🇷' },
    { name: 'German',              emoji: '🇩🇪' },
    { name: 'Spanish',             emoji: '🇪🇸' },
  ];

  // Boards each subject is offered under. Every entry listed here should
  // also have a SUBJECT_TOPICS entry in practice.html — otherwise the
  // practice page will show a "Topics coming soon" placeholder card.
  const boards = {
    'Mathematics':         ['AQA', 'OCR', 'Edexcel'],
    'Further Mathematics': ['AQA', 'Edexcel', 'OCR A', 'OCR B'],
    'Chemistry':           ['AQA', 'Edexcel', 'OCR A', 'OCR B'],
    'Biology':             ['AQA', 'Edexcel A', 'Edexcel B', 'OCR A', 'OCR B'],
    'Computer Science':    ['AQA', 'OCR'],
    'Physics':             ['AQA', 'Edexcel', 'OCR A', 'OCR B'],
    'Economics':           ['AQA', 'Edexcel A', 'Edexcel B', 'OCR'],
    'Geography':           ['AQA', 'Edexcel', 'Eduqas', 'OCR'],
    'English Language':    ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
    'English Literature':  ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
    'History':             ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
    'French':              ['AQA', 'Edexcel', 'Eduqas'],
    'German':              ['AQA', 'Edexcel', 'Eduqas'],
    'Spanish':             ['AQA', 'Edexcel', 'Eduqas'],
  };

  // Subject names where Edexcel is not offered at A-Level / AS.
  const noEdexcelAlevel = ['Computer Science'];

  // Subject set restricted to GCSE. Further Maths and Economics are not
  // offered at GCSE on this platform; English Literature, History and the
  // MFL subjects are GCSE-only for now (no A-Level content yet).
  const gcseSubjectNames = [
    'Mathematics',
    'Physics',
    'Biology',
    'Chemistry',
    'Geography',
    'Computer Science',
    'English Literature',
    'English Language',
    'History',
    'French',
    'German',
    'Spanish',
  ];

  // Subjects that only have GCSE content — hidden at AS / A-Level.
  const gcseOnlySubjectNames = [
    'English Literature',
    'History',
    'French',
    'German',
    'Spanish',
  ];

  function getSubjectsFor(level) {
    if (level === 'gcse') {
      return gcseSubjectNames
        .map(name => subjects.find(s => s.name === name))
        .filter(Boolean);
    }
    // A-Level / AS: hide GCSE-only subjects until content is ready.
    return subjects.filter(s => !gcseOnlySubjectNames.includes(s.name));
  }

  function getBoardsFor(subjectName, level) {
    const list = boards[subjectName] || [];
    if ((level === 'a-level' || level === 'as') && noEdexcelAlevel.includes(subjectName)) {
      return list.filter(b => b !== 'Edexcel');
    }
    return list;
  }

  function emojiFor(subjectName) {
    const s = subjects.find(x => x.name === subjectName);
    return s ? s.emoji : '📚';
  }

  // Flag emojis fall back to regional-indicator letters on Windows, so
  // MFL subjects use a real flag image instead. Other subjects keep the
  // text emoji — callers that render via innerHTML can drop this in
  // directly; plain-text consumers should stick with emojiFor().
  const flagCodes = {
    'French':  'fr',
    'German':  'de',
    'Spanish': 'es',
  };
  function iconHtml(subjectName) {
    const code = flagCodes[subjectName];
    if (code) {
      return `<img src="https://flagcdn.com/${code}.svg" alt="" style="width:1.35em;height:1em;display:inline-block;vertical-align:middle;border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,0.06);">`;
    }
    return emojiFor(subjectName);
  }

  function isSupported(subjectName, board) {
    return (boards[subjectName] || []).includes(board);
  }

  window.SUBJECTS_CONFIG = {
    subjects,
    boards,
    noEdexcelAlevel,
    gcseSubjectNames,
    gcseOnlySubjectNames,
    getSubjectsFor,
    getBoardsFor,
    emojiFor,
    iconHtml,
    isSupported,
  };
})();
