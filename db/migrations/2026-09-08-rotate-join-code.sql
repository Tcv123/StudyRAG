-- ═══════════════════════════════════════════════════════════════════════
-- Rotate join code — 2026-09-08
--
-- Depends on 2026-09-08-classroom.sql.
--
-- A join code's whole job is to be shared, which means sooner or later one
-- lands in a year-group group chat and people who aren't in the class start
-- turning up. Without this the teacher's only remedy is deleting the class
-- and rebuilding it, losing every membership — so the fix is worse than the
-- problem and they just live with the strangers.
--
-- Rotating replaces the code and nothing else. Existing members keep their
-- membership: they joined already, and punishing thirty students for one
-- leak is not the trade. The teacher removes the strangers from the roster
-- separately.
--
-- The code is generated server-side for the same reason it is at creation —
-- a client that can choose a code can squat on a memorable one, or pick one
-- already in use and find out by collision.
--
-- How to apply: paste this file into the Supabase SQL editor and Run.
-- Idempotent — safe to re-run.
-- ═══════════════════════════════════════════════════════════════════════

create or replace function public.rotate_join_code(p_class_id uuid)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  new_code text;
begin
  if not public.is_class_teacher(p_class_id) then
    raise exception 'Not your class';
  end if;

  new_code := public.gen_join_code();

  update public.classes
     set join_code = new_code
   where id = p_class_id;

  return new_code;
end;
$$;

revoke all on function public.rotate_join_code(uuid) from public, anon;
grant execute on function public.rotate_join_code(uuid) to authenticated;
