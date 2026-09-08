-- ═══════════════════════════════════════════════════════════════════════
-- Class assignments — 2026-09-08
--
-- Lets a teacher set work for a class and see who has done it. Depends on
-- 2026-09-08-classroom.sql — run that first.
--
-- DESIGN NOTE — there is no completions table, on purpose.
--
--   The obvious shape is assignments + assignment_completions, with every
--   diagnostic and practice page writing a completion row when a student
--   finishes. That would mean editing 47 diagnostic pages plus practice.html
--   to know about a feature none of them care about, and every one of those
--   edits is a chance to break a page that currently works.
--
--   Instead, completion is DERIVED. A diagnostic already writes
--   topic_progress.updated_at, and practice already writes
--   practice_attempts.taken_at. So "has this student done the work?" is just
--   "is there a row for one of the assigned topics, stamped after the
--   assignment was set?" — which is true of work they did in the right
--   window whether or not they came via the assignment link.
--
--   The trade-off is honest and worth stating: a student who happened to
--   revise an assigned topic anyway counts as having done it. For "has this
--   landed with the class" that is the RIGHT answer — the teacher cares that
--   the topic got covered, not that a particular link was clicked.
--
-- How to apply: paste this file into the Supabase SQL editor and Run.
-- Idempotent — safe to re-run.
-- ═══════════════════════════════════════════════════════════════════════


-- ───────────────────────────────────────────────────────────────────────
-- 1. Table
-- ───────────────────────────────────────────────────────────────────────

create table if not exists public.assignments (
  id         uuid        primary key default gen_random_uuid(),
  class_id   uuid        not null references public.classes(id) on delete cascade,
  kind       text        not null check (kind in ('diagnostic','practice')),
  -- Spec topic ids, e.g. {'3.1','3.2'}. Topic lists live in client config,
  -- not the database, so these are stored as opaque strings and resolved to
  -- names by the page.
  topics     text[]      not null check (array_length(topics, 1) between 1 and 40),
  note       text        check (note is null or length(note) <= 280),
  due_at     timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_assignments_class
  on public.assignments (class_id, created_at desc);


-- ───────────────────────────────────────────────────────────────────────
-- 2. Row level security
-- ───────────────────────────────────────────────────────────────────────

alter table public.assignments enable row level security;

drop policy if exists "teacher manages assignments" on public.assignments;
create policy "teacher manages assignments" on public.assignments
  for all using (
    exists (select 1 from public.classes c
             where c.id = assignments.class_id and c.teacher_id = auth.uid())
  )
  with check (
    exists (select 1 from public.classes c
             where c.id = assignments.class_id and c.teacher_id = auth.uid())
  );

-- Students read the assignments for classes they are actually in. This is
-- safe to expose directly (unlike `classes`) because the policy is anchored
-- on their own membership rows, so an unfiltered select returns only their
-- own classes' work — there is no join code or other class's name to leak.
drop policy if exists "student reads own class assignments" on public.assignments;
create policy "student reads own class assignments" on public.assignments
  for select using (
    exists (select 1 from public.class_members m
             where m.class_id = assignments.class_id and m.student_id = auth.uid())
  );


-- ───────────────────────────────────────────────────────────────────────
-- 3. Functions
-- ───────────────────────────────────────────────────────────────────────

-- Who has done each assignment. One row per (assignment, student).
--
-- done_topics counts DISTINCT assigned topics the student has touched since
-- the assignment was set, so re-attempting the same topic three times does
-- not look like finishing three.
create or replace function public.class_assignment_progress(p_class_id uuid)
returns table (assignment_id uuid, student_id uuid, student_name text,
               done_topics int, total_topics int, done boolean,
               last_activity timestamptz)
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
  with a as (
    select * from public.assignments where class_id = p_class_id
  ),
  members as (
    select m.student_id,
           trim(coalesce(p.first_name,'') || ' ' || coalesce(p.last_name,'')) as nm
      from public.class_members m
      join public.profiles p on p.id = m.student_id
     where m.class_id = p_class_id
  ),
  hits as (
    select a.id as aid, mm.student_id, x.topic, x.at
      from a
      cross join members mm
      join lateral (
        -- A diagnostic writes topic_progress; practice writes an attempt.
        -- Either counts as having done the work for that topic.
        select tp.topic, tp.updated_at as at
          from public.topic_progress tp
         where tp.user_id = mm.student_id
           and tp.subject = c.subject and tp.exam_board = c.exam_board
           and tp.topic = any(a.topics)
           and tp.updated_at >= a.created_at
        union all
        select pa.topic, pa.taken_at
          from public.practice_attempts pa
         where pa.user_id = mm.student_id
           and pa.subject = c.subject and pa.exam_board = c.exam_board
           and pa.topic = any(a.topics)
           and pa.taken_at >= a.created_at
      ) x on true
  )
  select a.id, mm.student_id, mm.nm,
         coalesce(h.n, 0)::int,
         array_length(a.topics, 1)::int,
         coalesce(h.n, 0) >= array_length(a.topics, 1),
         h.last_at
    from a
    cross join members mm
    left join lateral (
      select count(distinct hits.topic) as n, max(hits.at) as last_at
        from hits
       where hits.aid = a.id and hits.student_id = mm.student_id
    ) h on true;
end;
$$;


-- A student's own assignments across every class they are in, with how far
-- through each one they are. Drives the class page and the dashboard nudge.
create or replace function public.my_assignments()
returns table (assignment_id uuid, class_id uuid, class_name text,
               subject text, exam_board text, level text,
               kind text, topics text[], note text, due_at timestamptz,
               created_at timestamptz, done_topics int, total_topics int)
language sql
security definer
set search_path = public
as $$
  select a.id, c.id, c.name, c.subject, c.exam_board, c.level,
         a.kind, a.topics, a.note, a.due_at, a.created_at,
         coalesce((
           select count(distinct t.topic)
             from (
               select tp.topic
                 from public.topic_progress tp
                where tp.user_id = auth.uid()
                  and tp.subject = c.subject and tp.exam_board = c.exam_board
                  and tp.topic = any(a.topics)
                  and tp.updated_at >= a.created_at
               union
               select pa.topic
                 from public.practice_attempts pa
                where pa.user_id = auth.uid()
                  and pa.subject = c.subject and pa.exam_board = c.exam_board
                  and pa.topic = any(a.topics)
                  and pa.taken_at >= a.created_at
             ) t
         ), 0)::int,
         array_length(a.topics, 1)::int
    from public.assignments a
    join public.classes c       on c.id = a.class_id
    join public.class_members m on m.class_id = a.class_id
   where m.student_id = auth.uid()
     and not c.archived
   order by coalesce(a.due_at, a.created_at);
$$;


-- ───────────────────────────────────────────────────────────────────────
-- 4. Grants
-- ───────────────────────────────────────────────────────────────────────

revoke all on function public.class_assignment_progress(uuid) from public, anon;
revoke all on function public.my_assignments()                 from public, anon;

grant execute on function public.class_assignment_progress(uuid) to authenticated;
grant execute on function public.my_assignments()                to authenticated;
