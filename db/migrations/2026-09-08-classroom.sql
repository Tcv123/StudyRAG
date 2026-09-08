-- ═══════════════════════════════════════════════════════════════════════
-- Teacher & classroom mode — 2026-09-08
--
-- Adds classes, class membership by join code, and the read paths a teacher
-- needs to see their students' RAG data.
--
-- DESIGN NOTE — why everything goes through SECURITY DEFINER functions:
--
--   Students must be able to join a class by typing a code, but must NOT be
--   able to read the classes table. RLS filters rows, it cannot see a WHERE
--   clause — so any policy permissive enough to allow
--       select * from classes where join_code = 'H7K2M9'
--   is equally permissive to
--       select * from classes
--   which would hand every logged-in student the name and join code of every
--   class in the database. So: students get NO policy on classes at all, and
--   join_class() does the lookup with the definer's privileges instead.
--
--   The same reasoning runs the other way for teachers. topic_progress and
--   practice_attempts keep their existing owner-only policies untouched;
--   class_heatmap() and friends are the only way a teacher sees student rows,
--   and each one checks that the caller owns the class before returning
--   anything.
--
-- KNOWN LIMITATION — level is not stored on progress rows. Both the GCSE and
--   the A-Level Biology AQA diagnostics write subject='Biology',
--   exam_board='AQA' with no level marker, so the two specs are
--   indistinguishable in topic_progress. That is harmless per-student (a
--   profile has one level), but it means a class cannot filter by level in
--   SQL. join_class() therefore refuses a student whose profile level does
--   not match the class level, which keeps every member's rows on the same
--   spec. If levels ever need to coexist on one account, add a level column
--   to topic_progress and practice_attempts and backfill from profiles.
--
-- How to apply: paste this file into the Supabase SQL editor and Run.
-- Idempotent — safe to re-run.
-- ═══════════════════════════════════════════════════════════════════════


-- ───────────────────────────────────────────────────────────────────────
-- 1. Account type
--
-- Chosen at registration and carried through signup metadata. It steers
-- onboarding and navigation ONLY — it grants no data access whatsoever,
-- because anyone can tick "teacher" on a public signup form. What actually
-- protects a student is that they chose to join a class.
-- ───────────────────────────────────────────────────────────────────────

alter table public.profiles
  add column if not exists account_type text not null default 'student';

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'profiles_account_type_check'
  ) then
    alter table public.profiles
      add constraint profiles_account_type_check
      check (account_type in ('student','teacher'));
  end if;
end $$;


-- ───────────────────────────────────────────────────────────────────────
-- 2. Tables
-- ───────────────────────────────────────────────────────────────────────

-- A class is one subject + board + level. That constraint is what keeps the
-- heatmap a clean topic × student matrix, and it matches how teachers
-- actually work — a teacher covering GCSE and A-Level Physics has two
-- different groups of students, so two classes.
create table if not exists public.classes (
  id           uuid        primary key default gen_random_uuid(),
  teacher_id   uuid        not null references public.profiles(id) on delete cascade,
  name         text        not null check (length(trim(name)) between 1 and 80),
  subject      text        not null,
  exam_board   text        not null,
  level        text        not null check (level in ('gcse','as','a-level')),
  join_code    text        not null unique,
  archived     boolean     not null default false,
  -- Not used yet. Present from day one so that charging schools later is a
  -- billing change, not a migration.
  plan         text        not null default 'free',
  max_students integer     not null default 60 check (max_students between 1 and 500),
  created_at   timestamptz not null default now()
);

create index if not exists idx_classes_teacher
  on public.classes (teacher_id, archived, created_at desc);

create table if not exists public.class_members (
  class_id  uuid        not null references public.classes(id) on delete cascade,
  student_id uuid       not null references public.profiles(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (class_id, student_id)
);

create index if not exists idx_class_members_student
  on public.class_members (student_id);

-- What a teacher says they teach. A hint, never a gate: it pre-fills the
-- create-class form, drives the "we don't cover that board yet" warning at
-- onboarding, and tells us which boards to build next. Anything that
-- actually matters derives from classes instead, so the two can't drift.
create table if not exists public.teacher_subjects (
  id         uuid        primary key default gen_random_uuid(),
  teacher_id uuid        not null references public.profiles(id) on delete cascade,
  subject    text        not null,
  exam_board text        not null,
  level      text        not null check (level in ('gcse','as','a-level')),
  unique (teacher_id, subject, exam_board, level)
);

-- Failed join attempts, so join_class() can't be used as a code-guessing
-- oracle. Rows are written by the definer function only; nobody reads it
-- from the client.
create table if not exists public.class_join_attempts (
  id           bigserial   primary key,
  student_id   uuid        not null references public.profiles(id) on delete cascade,
  attempted_at timestamptz not null default now()
);

create index if not exists idx_join_attempts_student
  on public.class_join_attempts (student_id, attempted_at desc);


-- ───────────────────────────────────────────────────────────────────────
-- 3. Row level security
--
-- Note what is NOT here: no student-facing policy on classes, and no change
-- of any kind to topic_progress or practice_attempts.
-- ───────────────────────────────────────────────────────────────────────

alter table public.classes            enable row level security;
alter table public.class_members      enable row level security;
alter table public.teacher_subjects   enable row level security;
alter table public.class_join_attempts enable row level security;

drop policy if exists "teacher owns class" on public.classes;
create policy "teacher owns class" on public.classes
  for all using (teacher_id = auth.uid())
  with check (teacher_id = auth.uid());

-- A student may see and delete their own membership rows — that is what
-- "leave class" is. They still cannot resolve class_id into a name without
-- my_classes(), because they have no read on classes.
drop policy if exists "student sees own membership" on public.class_members;
create policy "student sees own membership" on public.class_members
  for select using (student_id = auth.uid());

drop policy if exists "student leaves class" on public.class_members;
create policy "student leaves class" on public.class_members
  for delete using (student_id = auth.uid());

-- Deliberately no INSERT policy: joining only ever happens via join_class().

drop policy if exists "teacher sees roster" on public.class_members;
create policy "teacher sees roster" on public.class_members
  for select using (
    exists (select 1 from public.classes c
             where c.id = class_members.class_id and c.teacher_id = auth.uid())
  );

drop policy if exists "teacher removes student" on public.class_members;
create policy "teacher removes student" on public.class_members
  for delete using (
    exists (select 1 from public.classes c
             where c.id = class_members.class_id and c.teacher_id = auth.uid())
  );

drop policy if exists "own teacher subjects" on public.teacher_subjects;
create policy "own teacher subjects" on public.teacher_subjects
  for all using (teacher_id = auth.uid())
  with check (teacher_id = auth.uid());

-- No policy at all on class_join_attempts: definer functions only.


-- ───────────────────────────────────────────────────────────────────────
-- 4. Helpers
-- ───────────────────────────────────────────────────────────────────────

-- Join codes get read off a whiteboard and typed by thirty teenagers, so the
-- alphabet drops every confusable pair: no O/0, no I/1/L.
create or replace function public.gen_join_code()
returns text
language plpgsql
as $$
declare
  alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  code text;
  i int;
begin
  loop
    code := '';
    for i in 1..6 loop
      code := code || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
    end loop;
    exit when not exists (select 1 from public.classes where join_code = code);
  end loop;
  return code;
end;
$$;

-- The single RAG threshold used everywhere. Mirrors sparkClass() in
-- breakdown.html so a teacher's grid and a student's own breakdown can never
-- disagree about what amber means.
create or replace function public.rag_from_pct(p_pct numeric)
returns text
language sql
immutable
as $$
  select case
    when p_pct is null then null
    when p_pct >= 70  then 'green'
    when p_pct >= 40  then 'amber'
    else 'red'
  end;
$$;

create or replace function public.is_class_teacher(p_class_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.classes
     where id = p_class_id and teacher_id = auth.uid()
  );
$$;


-- ───────────────────────────────────────────────────────────────────────
-- 5. Student-facing functions
-- ───────────────────────────────────────────────────────────────────────

-- Creates a class and returns it. Wrapped in a function purely so the join
-- code is generated server-side; the client never picks one.
create or replace function public.create_class(
  p_name text, p_subject text, p_exam_board text, p_level text
)
returns table (id uuid, name text, subject text, exam_board text,
               level text, join_code text)
language plpgsql
security definer
set search_path = public
as $$
declare
  new_id uuid;
begin
  if auth.uid() is null then
    raise exception 'Not signed in';
  end if;

  insert into public.classes (teacher_id, name, subject, exam_board, level, join_code)
  values (auth.uid(), trim(p_name), p_subject, p_exam_board, p_level, public.gen_join_code())
  returning classes.id into new_id;

  return query
    select c.id, c.name, c.subject, c.exam_board, c.level, c.join_code
      from public.classes c where c.id = new_id;
end;
$$;


-- The only door into a class for a student.
--
-- A bad code raises a deliberately vague error and is logged against the
-- rate limit, so this can't be used to probe which codes exist. A full class
-- does say so plainly: it leaks only that some code is real, the rate limit
-- already makes guessing hopeless, and the alternative is a teacher being
-- told their students "can't find the class" when it is simply full.
create or replace function public.join_class(p_code text)
returns table (class_id uuid, class_name text, subject text,
               exam_board text, teacher_name text)
language plpgsql
security definer
set search_path = public
as $$
declare
  c        public.classes%rowtype;
  me       public.profiles%rowtype;
  n_recent int;
  n_members int;
begin
  select * into me from public.profiles where id = auth.uid();
  if me.id is null then
    raise exception 'Not signed in';
  end if;

  -- Rate limit before doing any lookup at all, so a blocked caller learns
  -- nothing about the code they tried.
  select count(*) into n_recent
    from public.class_join_attempts
   where student_id = me.id
     and attempted_at > now() - interval '15 minutes';

  if n_recent >= 10 then
    raise exception 'Too many attempts. Wait a few minutes and try again.';
  end if;

  select * into c
    from public.classes
   where join_code = upper(regexp_replace(coalesce(p_code, ''), '\s', '', 'g'))
     and not archived;

  if c.id is null then
    insert into public.class_join_attempts (student_id) values (me.id);
    raise exception 'No class found with that code.';
  end if;

  -- Level guard. Progress rows carry no level marker, so a GCSE student in
  -- an A-Level class would write Biology/AQA rows against GCSE topic keys
  -- and quietly pollute the teacher's grid with topics that match nothing.
  if me.level is distinct from c.level then
    raise exception 'That class is % — your account is set to %. Change your level in settings first.',
      c.level, coalesce(me.level, 'not set');
  end if;

  -- Already a member? Fall through to the ON CONFLICT below, so rejoining a
  -- full class you are already in still works.
  select count(*) into n_members from public.class_members where class_members.class_id = c.id;
  if n_members >= c.max_students
     and not exists (select 1 from public.class_members m
                      where m.class_id = c.id and m.student_id = me.id) then
    raise exception 'That class is full (% of % places taken). Ask your teacher to make room.',
      n_members, c.max_students;
  end if;

  insert into public.class_members (class_id, student_id)
  values (c.id, me.id)
  on conflict do nothing;

  return query
    select c.id, c.name, c.subject, c.exam_board,
           trim(coalesce(t.first_name,'') || ' ' || coalesce(t.last_name,''))
      from public.profiles t where t.id = c.teacher_id;
end;
$$;


-- Feeds the CLASSES section in the sidebar.
--
-- This has to exist: class_members alone gives a student nothing but a bare
-- class_id, and they have no read on classes to resolve it into a name.
create or replace function public.my_classes()
returns table (class_id uuid, name text, subject text, exam_board text,
               level text, teacher_name text, joined_at timestamptz)
language sql
security definer
set search_path = public
as $$
  select c.id, c.name, c.subject, c.exam_board, c.level,
         trim(coalesce(t.first_name,'') || ' ' || coalesce(t.last_name,'')),
         m.joined_at
    from public.class_members m
    join public.classes  c on c.id = m.class_id
    join public.profiles t on t.id = c.teacher_id
   where m.student_id = auth.uid()
     and not c.archived
   order by m.joined_at;
$$;


-- ───────────────────────────────────────────────────────────────────────
-- 6. Teacher-facing functions
--
-- Each one checks is_class_teacher() first and returns nothing otherwise.
-- ───────────────────────────────────────────────────────────────────────

-- Needed because profiles is owner-only, so a teacher cannot otherwise turn
-- a student_id into a person's name.
create or replace function public.class_roster(p_class_id uuid)
returns table (student_id uuid, student_name text, joined_at timestamptz,
               last_active timestamptz)
language sql
security definer
set search_path = public
as $$
  select m.student_id,
         trim(coalesce(p.first_name,'') || ' ' || coalesce(p.last_name,'')),
         m.joined_at,
         greatest(
           (select max(tp.updated_at) from public.topic_progress tp
             where tp.user_id = m.student_id),
           (select max(pa.taken_at) from public.practice_attempts pa
             where pa.user_id = m.student_id)
         )
    from public.class_members m
    join public.classes  c on c.id = m.class_id
    join public.profiles p on p.id = m.student_id
   where m.class_id = p_class_id
     and public.is_class_teacher(p_class_id)
   order by p.first_name, p.last_name;
$$;


-- One row per (student, topic) that has ANY data behind it.
--
-- Topics live in SUBJECT_TOPICS on the client, not in the database, so this
-- deliberately does not return a row per spec topic. The page draws the full
-- topic list from config and fills these in; anything left over is the grey
-- "not started" cell, which is most of the grid on day one.
--
-- self_rag is what the student clicked. measured_rag is derived from their
-- last three practice attempts. The page renders measured cells solid and
-- self-rated cells hollow, so a teacher can always tell evidence from
-- self-assessment without anyone having to argue about which to trust.
create or replace function public.class_heatmap(p_class_id uuid)
returns table (student_id uuid, topic text,
               self_rag text, self_updated_at timestamptz,
               attempts int, avg_pct int, last_pct int,
               last_attempt_at timestamptz, measured_rag text)
language plpgsql
security definer
set search_path = public
as $$
declare
  c public.classes%rowtype;
begin
  if not public.is_class_teacher(p_class_id) then
    return;
  end if;

  select * into c from public.classes where id = p_class_id;

  return query
  with members as (
    select m.student_id from public.class_members m where m.class_id = p_class_id
  ),
  prog as (
    select tp.user_id, tp.topic, tp.rag_status, tp.updated_at
      from public.topic_progress tp
      join members mm on mm.student_id = tp.user_id
     where tp.subject = c.subject and tp.exam_board = c.exam_board
  ),
  ranked as (
    select pa.user_id, pa.topic, pa.pct, pa.taken_at,
           row_number() over (partition by pa.user_id, pa.topic
                              order by pa.taken_at desc) as rn
      from public.practice_attempts pa
      join members mm on mm.student_id = pa.user_id
     where pa.subject = c.subject and pa.exam_board = c.exam_board
  ),
  ev as (
    select r.user_id, r.topic,
           count(*)::int                              as attempts,
           round(avg(r.pct))::int                     as avg_pct,
           max(r.pct) filter (where r.rn = 1)::int    as last_pct,
           max(r.taken_at)                            as last_attempt_at
      from ranked r
     where r.rn <= 3
     group by r.user_id, r.topic
  ),
  keys as (
    select prog.user_id, prog.topic from prog
    union
    select ev.user_id, ev.topic from ev
  )
  select k.user_id, k.topic,
         pr.rag_status, pr.updated_at,
         coalesce(e.attempts, 0), e.avg_pct, e.last_pct, e.last_attempt_at,
         public.rag_from_pct(e.avg_pct)
    from keys k
    left join prog pr on pr.user_id = k.user_id and pr.topic = k.topic
    left join ev   e  on e.user_id  = k.user_id and e.topic  = k.topic;
end;
$$;


-- Per-topic aggregate behind the "teach this next" ranking.
--
-- Measured counts and self-rated counts stay separate on purpose. A topic
-- five students have failed is a different problem from one five students
-- reckon they are shaky on, and collapsing them into a single red number
-- would hide which is which.
--
-- total_members comes back so the page can work out the not-started count,
-- which is a blind spot rather than a weakness and belongs in its own column.
create or replace function public.class_topic_summary(p_class_id uuid)
returns table (topic text, total_members int,
               measured_red int, measured_amber int, measured_green int,
               self_red int, self_amber int, self_green int,
               avg_pct int)
language plpgsql
security definer
set search_path = public
as $$
declare
  n_members int;
begin
  if not public.is_class_teacher(p_class_id) then
    return;
  end if;

  select count(*) into n_members
    from public.class_members where class_id = p_class_id;

  return query
  select h.topic,
         n_members,
         count(*) filter (where h.measured_rag = 'red')::int,
         count(*) filter (where h.measured_rag = 'amber')::int,
         count(*) filter (where h.measured_rag = 'green')::int,
         count(*) filter (where h.measured_rag is null and h.self_rag = 'red')::int,
         count(*) filter (where h.measured_rag is null and h.self_rag = 'amber')::int,
         count(*) filter (where h.measured_rag is null and h.self_rag = 'green')::int,
         round(avg(h.avg_pct))::int
    from public.class_heatmap(p_class_id) h
   group by h.topic;
end;
$$;


-- ───────────────────────────────────────────────────────────────────────
-- 7. Grants
--
-- anon gets nothing. Every function above resolves the caller through
-- auth.uid(), which is null for an unauthenticated request.
-- ───────────────────────────────────────────────────────────────────────

revoke all on function public.gen_join_code()                from public, anon;
revoke all on function public.is_class_teacher(uuid)         from public, anon;
revoke all on function public.create_class(text,text,text,text) from public, anon;
revoke all on function public.join_class(text)               from public, anon;
revoke all on function public.my_classes()                   from public, anon;
revoke all on function public.class_roster(uuid)             from public, anon;
revoke all on function public.class_heatmap(uuid)            from public, anon;
revoke all on function public.class_topic_summary(uuid)      from public, anon;

grant execute on function public.rag_from_pct(numeric)        to authenticated;
grant execute on function public.is_class_teacher(uuid)       to authenticated;
grant execute on function public.create_class(text,text,text,text) to authenticated;
grant execute on function public.join_class(text)             to authenticated;
grant execute on function public.my_classes()                 to authenticated;
grant execute on function public.class_roster(uuid)           to authenticated;
grant execute on function public.class_heatmap(uuid)          to authenticated;
grant execute on function public.class_topic_summary(uuid)    to authenticated;

-- gen_join_code stays unexposed — it is only ever called from create_class.
