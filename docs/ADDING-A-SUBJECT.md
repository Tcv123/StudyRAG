# Adding a subject or exam board

Copy the prompt, fill in the three fields, paste it into a new session.

---

```
Add <SUBJECT> <BOARD> at <GCSE | AS | A-Level> to RAG Learning.

Spec: <link, or paste the topic list>

There's no subject registry — a subject is defined by appearing in about a
dozen separate maps. Find them all by tracing a built subject first:
  grep -rl "Economics" --include="*.js" --include="*.html" . | grep -vE "model-answers-|/questions/|node_modules"

Two things that cost a full redo if wrong:
- Topic ids are the join key across topic_progress, the practice bank, the
  diagnostic and every notes link. Show me the topic list you've extracted
  and WAIT for me to confirm before building anything.
- Level is part of the key, not metadata. Most maps use a Subject_Board|gcse
  / Subject_Board|alevel suffix and the suffixed key wins.

Dashboard.html and breakdown.html both hold a DIAG_TOPICS copy and they have
drifted. Add to both identically.

Tell me which registries you wired and which you skipped. Don't touch the
marketing pages until it actually works.

The site auto-pushes live within minutes, so any migration goes to me first.
```

---

## Where a subject lives

| | |
|---|---|
| Selectable | `subjects-config.js` — `subjects[]`, `boards{}` |
| Practice | `questions/<subject>/…-practice.js` + `practice-bank-config.js` |
| Diagnostic | `diagnostics/…-diagnostic.html` + `diagnostics-pages.js` |
| Notes | `subject-notes/`, `notes-<subject>-<board>-<level>/`, `notes.html` (two maps) |
| Dashboards | `Dashboard.html` + `breakdown.html` (`DIAG_TOPICS`, emoji, colour) |
| Optional | `medals-data.js`, `medals-engine.js`, `papers-config.js`, `exam-dates-config.js`, `flashcards-config.js`, `model-answers-<subject>.js` |
| Last | `index.html`, `subjects.html`, `features.html` |

Verify signed in: subject appears in setup → diagnostic colours topics →
they show on dashboard and breakdown → practice loads → notes link from both.
Mismatched topic ids fail quietly — everything just renders grey.
