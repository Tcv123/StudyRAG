-- ═══════════════════════════════════════════════════════════════════════
-- Drop class assignments — 2026-09-10
--
-- Reverses 2026-09-08-assignments.sql. The "set work" feature was built and
-- then cut: teachers tell a class what to do in the lesson, and a second
-- place to say it wasn't earning its keep.
--
-- The UI was removed on 2026-09-08, so nothing has read or written these
-- since. Dropping the table takes any rows in it with them — there should be
-- none, but if you want to be sure before running this:
--
--     select count(*) from public.assignments;
--
-- The functions go first: class_assignment_progress and my_assignments both
-- reference the table, and dropping it out from under them would leave two
-- broken functions behind.
--
-- Idempotent — safe to re-run.
-- ═══════════════════════════════════════════════════════════════════════

drop function if exists public.class_assignment_progress(uuid);
drop function if exists public.my_assignments();

drop table if exists public.assignments;
