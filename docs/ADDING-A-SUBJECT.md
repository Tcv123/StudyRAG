# Adding a subject or exam board

Paste the prompt below into a new session, filling in the four fields. The
checklist under it is what the prompt refers to — derived by tracing every
file that mentions Economics, a fully built subject.

---

## The prompt

> Add **\<SUBJECT>** **\<BOARD>** at **\<LEVEL: GCSE | AS | A-Level>** to RAG Learning.
>
> Spec: \<link to the exam board's specification, or paste the topic list>
>
> Follow `docs/ADDING-A-SUBJECT.md`. Work through the checklist in order and
> tell me which steps you've done and which you've skipped — I'd rather have
> five registries wired correctly than sixteen done badly.
>
> Before writing any content, show me the topic list you've extracted from
> the spec (topic id + name) and wait for me to confirm it. Every registry
> keys off those ids, so getting them wrong means redoing all of it.
>
> If this needs a database migration, run it past me before writing code that
> depends on it — the site auto-pushes to live within minutes.

---

## Why this is fiddly

There is no subject registry. A subject is defined by appearing in roughly a
dozen separate maps, several of which are hand-maintained copies of each
other. Miss one and the subject half-works in a way that isn't obvious:
it'll show in the picker but have no diagnostic, or have notes that the
dashboard can't link to.

**Topic ids are the join key.** `topic_progress.topic`, `practice_attempts.topic`,
the practice bank, the diagnostic and every notes link all key off the same
string (`'3.1.2'`, `'P5'`, `'1.4'`). They must match exactly across all of
them. Confirm the topic list before building anything.

**Level is part of the key, not metadata.** GCSE and A-Level are different
specs with different topics behind the same subject + board. Most maps use a
`Subject_Board|gcse` / `Subject_Board|alevel` suffix, and the suffixed key
wins over the bare one. Getting this wrong silently serves the wrong spec.

---

## Checklist

### 1. Make it selectable

**`subjects-config.js`** — the closest thing to a source of truth.
- `subjects[]` — `{ name, emoji }`. Emoji must match the canonical set; see the
  `subject-icons` memory.
- `boards{}` — add the board to the subject's array.
- Then, only if they apply: `gcseSubjectNames`, `gcseOnlySubjectNames`,
  `comingSoonAlevel`, `noEdexcelAlevel`, `gcseOnlyBoards`.

At this point it appears in setup and the subject picker, and nothing else works.

### 2. Practice questions

- **`questions/<subject>/<subject>-<board>-<level>-practice.js`** — declares a
  top-level `const SUBJECT_BOARD_PRACTICE = { ... }`. Both shapes are supported:
  `{ topicId: { name, questions: [] } }` or `{ topicId: [] }`. Prefer the first —
  it carries topic names, which the class heatmap and teacher dashboard read.
- **`practice-bank-config.js`** — add to `BUNDLE_MAP` (path) and `PRACTICE_MAP`
  (a getter returning the global). Add to `AI_FEEDBACK_BUNDLE_MAP` /
  `AI_FEEDBACK_MAP` too if written questions exist.

### 3. Diagnostic

- **`diagnostics/<subject>-<board>-<level>-diagnostic.html`** — copy the closest
  existing one; ~10 calibrated questions per topic. It writes `topic_progress`
  directly, so its topic keys must match step 2 exactly.
- **`diagnostics-pages.js`** — add the `Subject_Board|level` → page path entry.

### 4. Notes

- **`subject-notes/<subject>-<board>-notes.html`** plus the per-topic pages under
  **`notes-<subject>-<board>-<level>/`**.
- **`notes.html`** — two separate maps: the notes registry
  (`'Subject|Board'` → `{ url, topics: [{num, name}] }`) and the diagnostic map
  (`'Subject|Board'` → `{ url, total, first }`).

### 5. Dashboards

- **`Dashboard.html`** — `DIAG_TOPICS` entry, `DASH_SUBJ_EMOJI`,
  `DASH_SUBJ_COLOR`, and the notes URL map.
- **`breakdown.html`** — its own `DIAG_TOPICS` entry, `SUBJ_EMOJI`, `SUBJ_COLOR`,
  and `BOARD_COLOR` / `BOARD_BG` if the board is new.

> ⚠️ The two `DIAG_TOPICS` copies have **drifted** — different topic descriptions,
> and breakdown.html has topics Dashboard.html lacks. Add your entry to both,
> identically, and don't assume either is correct for other subjects.

### 6. Everything else, as applicable

- **`medals-data.js`** — a `first_<subject>` medal (id, icon, name, desc, cat).
- **`medals-engine.js`** — `Subject_Board` → slug, used to match diagnostics.
- **`papers-config.js`** — past papers: spec code, official URL, paper list.
- **`exam-dates-config.js`** — `Subject_Board` → paper dates.
- **`flashcards-config.js`** — only if flashcards exist for it.
- **`model-answers-<subject>.js`** — only if AI marking is wanted.
- **Marketing:** `index.html`, `subjects.html`, `features.html` list subjects by
  hand. A subject that isn't ready shouldn't appear here yet.

---

## Verifying

```bash
# Every registry that mentions a built subject — compare yours against it
grep -rl "Economics" --include="*.js" --include="*.html" . \
  | grep -vE "model-answers-|/questions/|node_modules"
```

Then, signed in as a student on that spec: the subject appears in setup → the
diagnostic runs and colours topics → those topics show on the dashboard and
breakdown → practice questions load → notes link correctly from both.

Topic ids that don't match across steps 2–5 are the usual failure, and they
fail quietly: the page renders with everything grey.
