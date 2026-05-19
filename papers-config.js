/**
 * Past-paper data. Source: A-Level_Past_Papers_Official_1.docx.
 *
 * Every URL points to the official exam board's own domain — aqa.org.uk,
 * qualifications.pearson.com, ocr.org.uk, or eduqas.co.uk. No third-party
 * mirrors (PMT etc).
 *
 * Two shapes per board:
 *   - officialPageUrl (always present): the canonical official entry point.
 *     AQA, Pearson, Eduqas, and OCR (for most subjects) don't expose stable
 *     per-paper URLs — the assessment-resources / past-papers page IS the
 *     official entry point. The UI surfaces this as a single card per board.
 *   - papers (optional): a list of direct per-paper records when the board
 *     does publish stable PDF URLs. Currently only OCR A-level Mathematics
 *     (H240) qualifies. Each entry feeds the paper-attempt.html flow.
 */
window.SUBJECTS = [
  {
    name: 'Mathematics',
    icon: '📐',
    boards: [
      {
        board: 'AQA',
        specCode: '7357',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/assessment-resources'
      },
      {
        board: 'Edexcel (Pearson)',
        specCode: '9MA0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html'
      },
      {
        board: 'OCR A',
        specCode: 'H240',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-a-h230-h240-from-2017/assessment/',
        note: "OCR ran its 2020 and 2021 sittings in November.",
        papers: [
          // Each component is 100 marks, 2 hours. 6 sittings × 3 components = 18 papers.
          // June 2018
          { id: 'maths-ocr-h240-2018-c1', year: 'June 2018', paperName: 'Component 1 — Pure Mathematics',
            paperCode: 'H240/01', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/535607-question-paper-pure-mathematics.pdf',
            msUrl: null,
            msNote: 'OCR no longer hosts this mark scheme publicly. Use the question paper for practice and check the official OCR archive if needed.' },
          { id: 'maths-ocr-h240-2018-c2', year: 'June 2018', paperName: 'Component 2 — Pure Mathematics & Statistics',
            paperCode: 'H240/02', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/535611-question-paper-pure-mathematics-and-statistics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/535622-mark-scheme-pure-mathematics-and-statistics.pdf' },
          { id: 'maths-ocr-h240-2018-c3', year: 'June 2018', paperName: 'Component 3 — Pure Mathematics & Mechanics',
            paperCode: 'H240/03', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/535617-question-paper-pure-mathematics-and-mechanics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/535623-mark-scheme-pure-mathematics-and-mechanics.pdf' },
          // June 2019
          { id: 'maths-ocr-h240-2019-c1', year: 'June 2019', paperName: 'Component 1 — Pure Mathematics',
            paperCode: 'H240/01', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/621197-question-paper-pure-mathematics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/621389-mark-scheme-pure-mathematics.pdf' },
          { id: 'maths-ocr-h240-2019-c2', year: 'June 2019', paperName: 'Component 2 — Pure Mathematics & Statistics',
            paperCode: 'H240/02', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/621199-question-paper-pure-mathematics-and-statistics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/621390-mark-scheme-pure-mathematics-and-statistics.pdf' },
          { id: 'maths-ocr-h240-2019-c3', year: 'June 2019', paperName: 'Component 3 — Pure Mathematics & Mechanics',
            paperCode: 'H240/03', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/621201-question-paper-pure-mathematics-and-mechanics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/621391-mark-scheme-pure-mathematics-and-mechanics.pdf' },
          // Nov 2020 (COVID series)
          { id: 'maths-ocr-h240-2020-c1', year: 'Nov 2020', paperName: 'Component 1 — Pure Mathematics',
            paperCode: 'H240/01', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/643526-question-paper-pure-mathematics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/643532-mark-scheme-pure-mathematics.pdf' },
          { id: 'maths-ocr-h240-2020-c2', year: 'Nov 2020', paperName: 'Component 2 — Pure Mathematics & Statistics',
            paperCode: 'H240/02', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/643528-question-paper-pure-mathematics-and-statistics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/643533-mark-scheme-pure-mathematics-and-statistics.pdf' },
          { id: 'maths-ocr-h240-2020-c3', year: 'Nov 2020', paperName: 'Component 3 — Pure Mathematics & Mechanics',
            paperCode: 'H240/03', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/643530-question-paper-pure-mathematics-and-mechanics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/643534-mark-scheme-pure-mathematics-and-mechanics.pdf' },
          // Nov 2021 (COVID series)
          { id: 'maths-ocr-h240-2021-c1', year: 'Nov 2021', paperName: 'Component 1 — Pure Mathematics',
            paperCode: 'H240/01', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/667253-question-paper-pure-mathematics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/667259-mark-scheme-pure-mathematics.pdf' },
          { id: 'maths-ocr-h240-2021-c2', year: 'Nov 2021', paperName: 'Component 2 — Pure Mathematics & Statistics',
            paperCode: 'H240/02', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/667255-question-paper-pure-mathematics-and-statistics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/667260-mark-scheme-pure-mathematics-and-statistics.pdf' },
          { id: 'maths-ocr-h240-2021-c3', year: 'Nov 2021', paperName: 'Component 3 — Pure Mathematics & Mechanics',
            paperCode: 'H240/03', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/667257-question-paper-pure-mathematics-and-mechanics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/667261-mark-scheme-pure-mathematics-and-mechanics.pdf' },
          // June 2022
          { id: 'maths-ocr-h240-2022-c1', year: 'June 2022', paperName: 'Component 1 — Pure Mathematics',
            paperCode: 'H240/01', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/676845-question-paper-pure-mathematics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/677005-mark-scheme-pure-mathematics.pdf' },
          { id: 'maths-ocr-h240-2022-c2', year: 'June 2022', paperName: 'Component 2 — Pure Mathematics & Statistics',
            paperCode: 'H240/02', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/676847-question-paper-pure-mathematics-and-statistics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/677006-mark-scheme-pure-mathematics-and-statistics.pdf' },
          { id: 'maths-ocr-h240-2022-c3', year: 'June 2022', paperName: 'Component 3 — Pure Mathematics & Mechanics',
            paperCode: 'H240/03', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/676849-question-paper-pure-mathematics-and-mechanics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/677007-mark-scheme-pure-mathematics-and-mechanics.pdf' },
          // June 2023
          { id: 'maths-ocr-h240-2023-c1', year: 'June 2023', paperName: 'Component 1 — Pure Mathematics',
            paperCode: 'H240/01', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/703866-question-paper-pure-mathematics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/704008-mark-scheme-pure-mathematics.pdf' },
          { id: 'maths-ocr-h240-2023-c2', year: 'June 2023', paperName: 'Component 2 — Pure Mathematics & Statistics',
            paperCode: 'H240/02', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/703868-question-paper-pure-mathematics-and-statistics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/704009-mark-scheme-pure-mathematics-and-statistics.pdf' },
          { id: 'maths-ocr-h240-2023-c3', year: 'June 2023', paperName: 'Component 3 — Pure Mathematics & Mechanics',
            paperCode: 'H240/03', totalMarks: 100, durationMins: 120, defaultQuestions: 10,
            qpUrl: 'https://www.ocr.org.uk/Images/703870-question-paper-pure-mathematics-and-mechanics.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/704010-mark-scheme-pure-mathematics-and-mechanics.pdf' }
        ]
      }
    ]
  },
  {
    name: 'Further Mathematics',
    icon: '∑',
    boards: [
      { board: 'AQA', specCode: '7367',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/mathematics/a-level/further-mathematics-7367/assessment-resources' },
      { board: 'Edexcel (Pearson)', specCode: '9FM0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/further-mathematics-2017.html' },
      { board: 'OCR A', specCode: 'H245',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/further-mathematics-a-h235-h245-from-2017/assessment/' },
      { board: 'OCR B (MEI)', specCode: 'H645',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/further-mathematics-b-mei-h635-h645-from-2017/assessment/' }
    ]
  },
  {
    name: 'Physics',
    icon: '⚛',
    boards: [
      { board: 'AQA', specCode: '7408',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/physics/a-level/physics-7408/assessment-resources' },
      { board: 'Edexcel (Pearson)', specCode: '9PH0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/physics-2015.html' },
      { board: 'OCR A', specCode: 'H556',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/physics-a-h156-h556-from-2015/assessment/' },
      { board: 'OCR B (Advancing Physics)', specCode: 'H557',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/physics-b-advancing-physics-h157-h557-from-2015/assessment/' }
    ]
  },
  {
    name: 'Biology',
    icon: '🧬',
    boards: [
      { board: 'AQA', specCode: '7402',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/biology/a-level/biology-7402/assessment-resources' },
      { board: 'Edexcel A (Salters-Nuffield)', specCode: '9BN0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/biology-a-2015.html' },
      { board: 'Edexcel B', specCode: '9BI0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/biology-b-2015.html' },
      { board: 'OCR A', specCode: 'H420',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/biology-a-h020-h420-from-2015/assessment/' },
      { board: 'OCR B (Advancing Biology)', specCode: 'H422',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/biology-b-advancing-biology-h022-h422-from-2015/assessment/' }
    ]
  },
  {
    name: 'Chemistry',
    icon: '⚗',
    boards: [
      { board: 'AQA', specCode: '7405',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/chemistry/a-level/chemistry-7405/assessment-resources' },
      { board: 'Edexcel (Pearson)', specCode: '9CH0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/chemistry-2015.html' },
      { board: 'OCR A', specCode: 'H432',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/chemistry-a-h032-h432-from-2015/assessment/' },
      { board: 'OCR B (Salters)', specCode: 'H433',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/chemistry-b-salters-h033-h433-from-2015/assessment/' }
    ]
  },
  {
    name: 'Computer Science',
    icon: '💻',
    boards: [
      { board: 'AQA', specCode: '7517',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/computer-science-and-it/a-level/computer-science-7516-7517/assessment-resources' },
      { board: 'OCR', specCode: 'H446',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/assessment/' }
    ]
  },
  {
    name: 'Economics',
    icon: '💹',
    boards: [
      { board: 'AQA', specCode: '7136',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/economics/a-level/economics-7135-7136/assessment-resources' },
      { board: 'Edexcel A', specCode: '9EC0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/economics-a-2015.html' },
      { board: 'Edexcel B', specCode: '9EB0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/economics-b-2015.html' },
      { board: 'OCR', specCode: 'H460',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/economics-h060-h460-from-2015/assessment/' }
    ]
  },
  {
    name: 'Geography',
    icon: '🌍',
    boards: [
      { board: 'AQA', specCode: '7037',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/geography/a-level/geography-7037/assessment-resources' },
      { board: 'Edexcel (Pearson)', specCode: '9GE0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/geography-2016.html' },
      { board: 'Eduqas (WJEC)', specCode: 'A110QS',
        officialPageUrl: 'https://www.eduqas.co.uk/qualifications/geography-as-a-level/',
        note: "Eduqas requires a free account to download papers (their official policy)." },
      { board: 'OCR', specCode: 'H481',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/geography-h081-h481-from-2016/assessment/' }
    ]
  }
];

// Flatten every direct paper across subjects/boards for paper-attempt.html lookups.
window.PAPERS = window.SUBJECTS.flatMap(subj =>
  subj.boards.flatMap(board =>
    (board.papers || []).map(p => ({
      ...p,
      subject: subj.name,
      board:   board.board,
      specCode: p.paperCode || board.specCode,
      level:   'A-level',
      description: `${board.board} ${board.specCode} — ${p.paperName}. ${Math.round(p.durationMins/60*10)/10}h paper, ${p.totalMarks} marks.`
    }))
  )
);

window.findPaper = function (id) {
  return (window.PAPERS || []).find(p => p.id === id) || null;
};
