-- =====================================================================
-- user_subjects: add `options` so a student can record which optional
-- route they sit within a spec.
--
-- Politics Edexcel A-Level (9PL0) is the first case. Component 3 is
-- either 3A (USA) or 3B (Global) — never both — so without this every
-- student carries six topics they can never be examined on, and they
-- render permanently grey on the dashboard and breakdown.
--
-- JSONB rather than a `route text` column so the same mechanism covers
-- the other optional groups later (the 1-of-5 non-core ideology here,
-- and the same 1-of-5 that already leaves four grey topics on
-- Politics AQA) without a second migration.
--
-- Shape: { "<group>": "<chosen value>" }, e.g. {"c3": "3A"}
-- An absent key means "not chosen yet" — the app must treat that as
-- "show the picker", NOT as a default route.
--
-- Every statement is idempotent, so it is safe to re-run.
-- No BEGIN/COMMIT: statements are standalone so a client that splits
-- on the semicolon can run them one at a time.
-- =====================================================================


-- STEP 1 - add the column. Existing rows get '{}' from the default,
-- so there is nothing to backfill: every current student simply has
-- no route chosen yet, which is the truth.
ALTER TABLE user_subjects
  ADD COLUMN IF NOT EXISTS options JSONB NOT NULL DEFAULT '{}'::jsonb;


-- STEP 2 - reject anything that is not a JSON object. Guards against a
-- client writing a bare string or array and every reader then breaking.
ALTER TABLE user_subjects DROP CONSTRAINT IF EXISTS user_subjects_options_object_check;
ALTER TABLE user_subjects ADD CONSTRAINT user_subjects_options_object_check
  CHECK (jsonb_typeof(options) = 'object');


-- STEP 3 - VERIFY (read-only). Expect every row to show {} for now.
SELECT options, count(*) AS rows
FROM user_subjects
GROUP BY options
ORDER BY rows DESC;
