-- =====================================================================
-- topic_progress: add `level` so GCSE and A-Level stop overwriting
-- each other on shared topic ids (e.g. "1.1").
--
-- Run the STEP 0 check first. Then run steps 1-6 in order.
-- Every statement is idempotent, so it is safe to re-run.
-- No BEGIN/COMMIT: statements are standalone so a client that splits
-- on the semicolon can run them one at a time.
-- =====================================================================


-- STEP 0 - PRE-CHECK (read-only). Run this on its own first.
-- Expect 0 rows. If it returns rows, tell me before going further:
-- it means duplicates already exist and step 6 would fail.
SELECT user_id, subject, exam_board, topic, count(*) AS copies
FROM topic_progress
GROUP BY user_id, subject, exam_board, topic
HAVING count(*) > 1;


-- STEP 1 - add the column, nullable for now so the backfill can run.
ALTER TABLE topic_progress ADD COLUMN IF NOT EXISTS level text;


-- STEP 2 - backfill from each user's profile.
-- Mirrors _lvSuffix() in medals-engine.js exactly:
--   'a-level' or 'as'  ->  'alevel'
--   anything else      ->  'gcse'
UPDATE topic_progress AS tp
SET level = CASE WHEN p.level IN ('a-level', 'as') THEN 'alevel' ELSE 'gcse' END
FROM profiles AS p
WHERE p.id = tp.user_id
  AND tp.level IS NULL;


-- STEP 3 - any orphan rows whose user has no profile row fall back to gcse.
UPDATE topic_progress SET level = 'gcse' WHERE level IS NULL;


-- STEP 4 - lock the column down.
ALTER TABLE topic_progress ALTER COLUMN level SET DEFAULT 'gcse';
ALTER TABLE topic_progress ALTER COLUMN level SET NOT NULL;


-- STEP 5 - restrict to the two values the app uses.
ALTER TABLE topic_progress DROP CONSTRAINT IF EXISTS topic_progress_level_check;
ALTER TABLE topic_progress ADD CONSTRAINT topic_progress_level_check
  CHECK (level IN ('gcse', 'alevel'));


-- STEP 6 - stop the collision ever recurring at the database level.
CREATE UNIQUE INDEX IF NOT EXISTS topic_progress_user_subj_board_level_topic_idx
  ON topic_progress (user_id, subject, exam_board, level, topic);


-- STEP 7 - VERIFY (read-only). Expect: no nulls, only gcse/alevel.
SELECT level, count(*) AS rows
FROM topic_progress
GROUP BY level
ORDER BY level;
