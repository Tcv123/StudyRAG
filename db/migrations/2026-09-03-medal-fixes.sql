-- ═══════════════════════════════════════════════════════════════════════
-- Medal fixes — 2026-09-03
--
-- Hat Trick (perfect_3) and Flawless (perfect_10) ask for 3 and 10 perfect
-- diagnostics, but nothing recorded how many a student had done: user_medals
-- has UNIQUE (user_id, medal_id), so it can only ever hold ONE 'perfect_score'
-- row no matter how many perfect runs happen. Both medals were unobtainable.
--
-- This counter is incremented by awardDiagnosticMedals() in medals-engine.js
-- each time a diagnostic is completed with full marks on every question.
--
-- Safe to re-run.
-- ═══════════════════════════════════════════════════════════════════════

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS perfect_diagnostics INTEGER NOT NULL DEFAULT 0;

-- Backfill: anyone already holding the 'perfect_score' medal has at least one
-- perfect run behind them, so start their counter at 1 rather than 0.
UPDATE profiles p
   SET perfect_diagnostics = 1
 WHERE perfect_diagnostics = 0
   AND EXISTS (
     SELECT 1 FROM user_medals m
      WHERE m.user_id = p.id AND m.medal_id = 'perfect_score'
   );
