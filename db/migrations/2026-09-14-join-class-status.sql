-- ═══════════════════════════════════════════════════════════════════════
-- join_class() returns a status instead of raising — 2026-09-14
--
-- THE BUG. The 2026-09-08 classroom migration logged a wrong join code and
-- then raised, in that order:
--
--     insert into public.class_join_attempts (student_id) values (me.id)
--     raise exception 'No class found with that code.'
--
-- The raise aborts the transaction, so the insert it had just made is rolled
-- back with it. Postgres has no autonomous transactions, so there is no way
-- to keep that row while still raising. class_join_attempts has therefore
-- been empty since the day it was created, and two things depend on it:
--
--   1. join_class()'s own rate limit. It counts rows in the last 15 minutes
--      and refuses at 10. The count has never been anything but zero, so
--      join-code guessing has been unthrottled — which is the whole reason
--      the table exists. This is the part that matters.
--
--   2. The join_code_guessing signal on admin.html. It can never fire.
--
-- THE FIX. Stop raising. Every outcome — good code, bad code, rate limited,
-- wrong level, full class — now comes back as a row with ok and message, and
-- the function returns normally, so the transaction commits and the attempt
-- row survives. The messages are the same strings the exceptions carried,
-- so the student sees exactly what they saw before.
--
-- BEHAVIOUR CHANGE WORTH KNOWING ABOUT: the rate limit starts working for
-- the first time. A student who mistypes a code 10 times inside 15 minutes
-- is now told to wait, where previously they could retry forever. 10 in a
-- quarter of an hour is far beyond honest typing, but it is a real change
-- to a path real students use, so it is called out here rather than buried.
--
-- Rate-limited attempts are deliberately NOT logged. Logging them would let
-- the limit feed itself: one blocked attempt would extend the window for the
-- next, and a student who tripped it once could be locked out indefinitely
-- by their own retries.
--
-- Needs the matching Dashboard.html change — the caller used to read the
-- error message off the thrown Postgres error and now reads data[0].message.
-- Apply this file first: the old page against the new function shows a
-- generic failure for a moment, the new page against the old function shows
-- nothing at all.
--
-- How to apply: paste into the Supabase SQL editor and Run. Idempotent.
-- ═══════════════════════════════════════════════════════════════════════


-- The return type gains columns, and create or replace cannot change a
-- function's OUT columns — it errors rather than replacing. The argument
-- signature is unchanged, so this drop finds the old function precisely.
-- Nothing else in the database references join_class, so there are no
-- dependent objects to cascade to.

drop function if exists public.join_class(text);


-- The only door into a class for a student.
--
-- A bad code returns a deliberately vague message and is logged against the
-- rate limit, so this cannot be used to probe which codes exist. A full class
-- does say so plainly: it leaks only that some code is real, the rate limit
-- already makes guessing hopeless, and the alternative is a teacher being
-- told their students "cannot find the class" when it is simply full.
--
-- ok is never null. The client branches on it and shows message when false.

create or replace function public.join_class(p_code text)
returns table (
  ok           boolean,
  message      text,
  class_id     uuid,
  class_name   text,
  subject      text,
  exam_board   text,
  teacher_name text
)
language plpgsql
security definer
set search_path = public
as $$
declare
  c         public.classes%rowtype;
  me        public.profiles%rowtype;
  n_recent  int;
  n_members int;
  code      text := upper(regexp_replace(coalesce(p_code, ''), '\s', '', 'g'));
begin
  -- OUT parameters are live variables in a returns-table function, and three
  -- of them (class_id, subject, exam_board) share a name with a column on
  -- public.classes. Every query below is therefore alias-qualified, and the
  -- success row is assigned field by field rather than built by a select
  -- whose column list would be ambiguous.
  ok           := false;
  message      := null;
  class_id     := null;
  class_name   := null;
  subject      := null;
  exam_board   := null;
  teacher_name := null;

  select * into me from public.profiles p where p.id = auth.uid();
  if me.id is null then
    message := 'Not signed in.';
    return next;
    return;
  end if;

  -- Rate limit before doing any lookup at all, so a blocked caller learns
  -- nothing about the code they tried.
  select count(*) into n_recent
    from public.class_join_attempts j
   where j.student_id = me.id
     and j.attempted_at > now() - interval '15 minutes';

  if n_recent >= 10 then
    message := 'Too many attempts. Wait a few minutes and try again.';
    return next;
    return;
  end if;

  select * into c
    from public.classes cl
   where cl.join_code = code
     and not cl.archived;

  if c.id is null then
    -- This is the row the old version threw away. The function returns
    -- normally below, so it commits.
    insert into public.class_join_attempts (student_id) values (me.id);
    message := 'No class found with that code.';
    return next;
    return;
  end if;

  -- Level guard. Progress rows carry no level marker, so a GCSE student in
  -- an A-Level class would write Biology/AQA rows against GCSE topic keys
  -- and quietly pollute the teacher's grid with topics that match nothing.
  if me.level is distinct from c.level then
    message := format('That class is %s — your account is set to %s. Change your level in settings first.',
                      c.level, coalesce(me.level, 'not set'));
    return next;
    return;
  end if;

  -- Already a member? Fall through to the ON CONFLICT below, so rejoining a
  -- full class you are already in still works.
  select count(*) into n_members
    from public.class_members cm
   where cm.class_id = c.id;

  if n_members >= c.max_students
     and not exists (select 1 from public.class_members m
                      where m.class_id = c.id and m.student_id = me.id) then
    message := format('That class is full (%s of %s places taken). Ask your teacher to make room.',
                      n_members, c.max_students);
    return next;
    return;
  end if;

  insert into public.class_members (class_id, student_id)
  values (c.id, me.id)
  on conflict do nothing;

  ok           := true;
  message      := null;
  class_id     := c.id;
  class_name   := c.name;
  subject      := c.subject;
  exam_board   := c.exam_board;

  select nullif(trim(coalesce(t.first_name, '') || ' ' || coalesce(t.last_name, '')), '')
    into teacher_name
    from public.profiles t
   where t.id = c.teacher_id;

  return next;
  return;
end;
$$;

revoke all on function public.join_class(text) from public, anon;
grant execute on function public.join_class(text) to authenticated;


-- ───────────────────────────────────────────────────────────────────────
-- Check your work
--
-- As a signed-in student, from the app console:
--
--   await supabaseClient.rpc('join_class', { p_code: 'ZZZZZZ' })
--
-- data[0].ok is false, data[0].message is the vague one. Then, as the
-- admin, in the SQL editor:
--
--   select count(*) from class_join_attempts
--
-- One row, where before there were none. Repeat the call ten times and the
-- eleventh comes back rate limited, then the join_code_guessing signal
-- appears on admin.html once ten land inside the same clock hour.
-- ───────────────────────────────────────────────────────────────────────
