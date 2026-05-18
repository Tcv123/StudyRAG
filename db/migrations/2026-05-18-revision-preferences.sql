-- Revision timetable preferences.
--
-- Adds five columns to public.profiles that drive the auto-fill engine on
-- revision-timetable.html. All are nullable: if any of them is NULL we treat
-- the user as "hasn't set preferences yet" and show the setup wizard before
-- rendering the grid.
--
-- How to apply: paste into the Supabase SQL editor and Run. Idempotent.

alter table public.profiles
  add column if not exists rt_study_days     smallint[],   -- subset of {0..6}, 0=Mon
  add column if not exists rt_earliest_start smallint,     -- hour 0..23, e.g. 17 = 5pm
  add column if not exists rt_latest_end     smallint,     -- hour 0..23, e.g. 22 = 10pm
  add column if not exists rt_weekend_mode   text          -- 'same' | 'more' | 'less' | 'none'
    check (rt_weekend_mode in ('same','more','less','none')),
  add column if not exists rt_weekly_hours   smallint      -- target hours per week, 1..40
    check (rt_weekly_hours between 1 and 40),
  -- Per-day blackout windows (sport practice, tutoring, family time, etc).
  -- Shape: { "0": [[1020, 1110], ...], "1": [...], ... }
  --   key   = day_of_week (0..6, 0=Mon) as a string
  --   value = array of [start_min, end_min] pairs, minutes past midnight.
  -- Auto-fill skips any candidate slot that overlaps one of these windows.
  add column if not exists rt_busy_windows   jsonb default '{}'::jsonb,
  -- Default session length the auto-fill engine uses when placing sessions.
  -- Users can still manually create sessions of any duration via the modal.
  add column if not exists rt_session_minutes smallint default 60
    check (rt_session_minutes in (30, 60, 90, 120));

-- (No new policies needed — the existing "own profile" policy on profiles
-- already covers reads and writes against auth.uid().)
