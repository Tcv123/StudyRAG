# Adding a subject or exam board

Copy the prompt, fill in the three fields, paste it into a new session.

---

```
Add <SUBJECT> <BOARD> at <GCSE | AS | A-Level> to RAG Learning. Course code
<CODE> — find the spec yourself; say so if the board's site blocks you rather
than guessing the topics.

Build in this order, stopping after each for my confirmation before starting
the next: diagnostics, notes, practice questions, flashcards, past papers
(links only), mark schemes (the per-question points and guidance). Before
generating in bulk, show me two or three samples and wait — eighty questions
built on a wrong reading of the spec is the expensive mistake, not a slow
first pass. Long stages come in chunks with checkpoints, not one dump.

There's no subject registry: a subject is defined by appearing in about a
dozen separate maps. Trace a built one to find them —
grep -rl "Economics" --include="*.js" --include="*.html" . | grep -vE "model-answers-|/questions/|node_modules"
Topic ids are the join key across topic_progress, the practice bank, the
diagnostic and every notes link, so show me the topic list and WAIT for me to
confirm it before building anything. Level is part of the key, not metadata
(Subject_Board|gcse / |alevel — the suffixed key wins). Dashboard.html and
breakdown.html each hold a DIAG_TOPICS copy and they have drifted; add to
both identically. Tell me what you wired and what you skipped, leave the
marketing pages until it works, and send me any migration before writing code
that needs it — the site auto-pushes live within minutes.
```

---

## Where a subject lives

| | |
|---|---|
| Selectable | `subjects-config.js` — `subjects[]`, `boards{}` |
| Diagnostic | `diagnostics/…-diagnostic.html` + `diagnostics-pages.js` |
| Notes | `subject-notes/`, `notes-<subject>-<board>-<level>/`, `notes.html` (two maps) |
| Practice | `questions/<subject>/…-practice.js` + `practice-bank-config.js` |
| Dashboards | `Dashboard.html` + `breakdown.html` (`DIAG_TOPICS`, emoji, colour) |
| Flashcards | `flashcards-config.js` + a `flashcards-…-content.sql` |
| Papers | `papers-config.js` — links, then `markSchemes` per question |
| Optional | `medals-data.js`, `medals-engine.js`, `exam-dates-config.js`, `model-answers-<subject>.js` |
| Last | `index.html`, `subjects.html`, `features.html` |

Verify signed in: subject appears in setup → diagnostic colours topics → they
show on dashboard and breakdown → practice loads → notes link from both.
Mismatched topic ids fail quietly — everything just renders grey.
