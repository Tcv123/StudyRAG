/**
 * Past-paper definitions consumed by past-papers.html and paper-attempt.html.
 *
 * Each paper has:
 *   id             — stable slug used in URLs (paper-attempt.html?id=...)
 *   subject, board, level, year, paperNumber, paperName
 *   totalMarks     — overall mark total for the paper
 *   durationMins   — exam duration in minutes
 *   qpUrl, msUrl   — PMT PDF links
 *   defaultQuestions — number of question rows to pre-seed the attempt form
 *                      with. The user can add/remove rows and edit max marks
 *                      to match the actual paper as they go.
 */
window.PAPERS = [
  {
    id: 'cs-aqa-2018-p1',
    subject: 'Computer Science',
    board: 'AQA',
    level: 'A-level',
    specCode: '7517/1',
    year: 'June 2018',
    paperNumber: 1,
    paperName: 'Paper 1 — Programming (on-screen)',
    description: 'On-screen practical/programming exam. Two and a half hours.',
    totalMarks: 75,
    durationMins: 150,
    defaultQuestions: 11,
    qpUrl: 'https://pmt.physicsandmathstutor.com/download/Computer-Science/A-level/Papers/AQA/Paper-1/QP/June%202018%20QP.pdf',
    msUrl: 'https://pmt.physicsandmathstutor.com/download/Computer-Science/A-level/Papers/AQA/Paper-1/MS/June%202018%20MS.pdf'
  },
  {
    id: 'cs-aqa-2018-p2',
    subject: 'Computer Science',
    board: 'AQA',
    level: 'A-level',
    specCode: '7517/2',
    year: 'June 2018',
    paperNumber: 2,
    paperName: 'Paper 2 — Written',
    description: 'Written paper covering theory: hardware, networks, data, consequences. Two and a half hours.',
    totalMarks: 75,
    durationMins: 150,
    defaultQuestions: 10,
    qpUrl: 'https://pmt.physicsandmathstutor.com/download/Computer-Science/A-level/Papers/AQA/Paper-2/QP/June%202018%20QP.pdf',
    msUrl: 'https://pmt.physicsandmathstutor.com/download/Computer-Science/A-level/Papers/AQA/Paper-2/MS/June%202018%20MS.pdf'
  }
];

window.findPaper = function (id) {
  return (window.PAPERS || []).find(p => p.id === id) || null;
};
