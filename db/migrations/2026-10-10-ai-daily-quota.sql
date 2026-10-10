-- ═══════════════════════════════════════════════════════════════════════
-- Per-user daily cap on AI calls — 2026-10-10
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
--
-- mark-essay, mark-against-scheme and generate-model-answer are Pro-gated
-- and nothing else. Pro-gating limits who can run up Groq spend, not how
-- much: one Pro account, or one leaked token, could loop any of them all
-- day. Vercel functions keep no memory between calls, so the count lives
-- here.
--
-- One row per user per UTC day, shared by all three endpoints. Only real
-- model calls are counted — a cached model answer costs nothing and is not
-- charged. The limit itself is passed in by the caller (AI_DAILY_LIMIT on
-- Vercel, default 100) so it can change without a migration.
--
-- Until this is run the endpoints carry on uncapped: api/_ai-quota.js treats
-- a missing function as "allowed" rather than locking every student out.
-- ═══════════════════════════════════════════════════════════════════════

create table if not exists public.ai_usage (
  user_id uuid    not null references auth.users(id) on delete cascade,
  day     date    not null default (now() at time zone 'utc')::date,
  calls   integer not null default 0,
  primary key (user_id, day)
);

alter table public.ai_usage enable row level security;
-- No policies: only the service role (the api/ functions) reads or writes it.

-- Atomic check-and-increment. Returns true and counts the call when the user
-- is under p_limit for today, false (and counts nothing) when they are not.
-- One statement, so two concurrent calls cannot both squeeze under the cap.
create or replace function public.consume_ai_call(p_user uuid, p_limit integer)
returns boolean
language plpgsql
security definer
set search_path = public
as $fn$
declare
  used integer;
begin
  insert into public.ai_usage (user_id, day, calls)
       values (p_user, (now() at time zone 'utc')::date, 1)
  on conflict (user_id, day)
       do update set calls = public.ai_usage.calls + 1
        where public.ai_usage.calls < p_limit
  returning calls into used;

  return used is not null;
end;
$fn$;

revoke all on function public.consume_ai_call(uuid, integer) from public, anon, authenticated;
grant execute on function public.consume_ai_call(uuid, integer) to service_role;
