-- Revision timetable sessions.
--
-- One row per planned study session on a user's weekly grid. The grid is
-- "recurring weekly" (no specific dates) — day_of_week + start_min is enough
-- to render the planner. If we add per-date scheduling later we can either
-- attach a date column to this table or roll out a sibling table.
--
-- How to apply: paste this file into the Supabase SQL editor and Run.
-- Idempotent — safe to re-run.

create table if not exists public.revision_sessions (
  id            uuid        primary key default gen_random_uuid(),
  user_id       uuid        not null references public.profiles(id) on delete cascade,
  day_of_week   smallint    not null check (day_of_week between 0 and 6),   -- 0 = Mon
  start_min     smallint    not null check (start_min between 0 and 1410),  -- minutes past midnight, 30-min grid
  duration_min  smallint    not null default 60 check (duration_min between 30 and 240),
  subject       text        not null,
  topic         text,
  notes         text,
  created_at    timestamptz not null default now()
);

alter table public.revision_sessions enable row level security;

drop policy if exists "own revision sessions" on public.revision_sessions;
create policy "own revision sessions" on public.revision_sessions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create index if not exists idx_revision_sessions_user
  on public.revision_sessions (user_id, day_of_week, start_min);
