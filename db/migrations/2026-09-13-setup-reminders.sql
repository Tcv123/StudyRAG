-- ═══════════════════════════════════════════════════════════════════════
-- Day-3 setup reminder — 2026-09-13
--
-- Paste into the Supabase SQL editor (not a client that splits on ';' — the
-- function bodies between the $fn$ markers contain semicolons).
-- Idempotent — safe to re-run.
--
-- WHAT THIS IS FOR. A student confirms their email, lands on auth/setup.html,
-- gets distracted, and never picks their subjects. Their dashboard is empty
-- because user_subjects is empty, so there is nothing to come back to. This
-- nudges them once, three days later, and then never again.
--
-- The alternative that was on the table — deleting incomplete accounts after
-- a week — would have been a disaster here, for reasons worth writing down
-- because they are the same reasons this function is shaped the way it is:
--
--   * setup_complete is FALSE for every teacher, permanently. post-auth.js
--     routes teachers straight to teacher.html and auth/setup.html is the
--     only thing in the codebase that ever writes the column, so a teacher
--     can run classes for a year and still look "incomplete". Hence the
--     account_type exclusion below, which falls back to the auth metadata
--     for anyone whose profiles row is still missing.
--
--   * "No profiles row" means "the row failed to write", not "not a real
--     user" — see db/fix-missing-profiles.sql, 14 accounts lost that way.
--     So this reads auth.users as the source of truth and LEFT JOINs
--     profiles, rather than the other way round.
--
-- THE MAX-AGE BOUND IS THE IMPORTANT PARAMETER. Without it the first run
-- emails every incomplete account going back to May, all at once, each one
-- claiming they signed up a few days ago. That is a spam complaint against
-- the raglearning.uk sending domain and it would take the contact form down
-- with it. Ten days is deliberately narrow. If you ever want to reach the
-- older backlog, do it as a one-off with its own honest wording, not by
-- widening this.
-- ═══════════════════════════════════════════════════════════════════════


-- ───────────────────────────────────────────────────────────────────────
-- 1. The ledger
--
-- One row per user, ever. It is what makes "we won't email you about this
-- again" in the email body a true statement rather than a hope, and what
-- stops a cron retry from sending twice.
--
-- RLS is ON with NO policies, the same pattern as security_events: the anon
-- key cannot read or write it by any route, and everything goes through the
-- service-role functions below. Students should not be able to enumerate
-- who has and hasn't finished setting up.
-- ───────────────────────────────────────────────────────────────────────
create table if not exists public.setup_reminders (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  claimed_at  timestamptz not null default now(),
  sent_at     timestamptz,
  attempts    integer     not null default 1,
  last_error  text,
  provider_id text
);

-- Added separately so this file stays re-runnable against a table created
-- by an earlier version of it.
alter table public.setup_reminders
  add column if not exists unsubscribe_token uuid not null default gen_random_uuid();
alter table public.setup_reminders
  add column if not exists unsubscribed_at timestamptz;

create unique index if not exists setup_reminders_unsubscribe_token_key
  on public.setup_reminders (unsubscribe_token);

alter table public.setup_reminders enable row level security;

-- The global opt-out. Null means subscribed, which makes every existing row
-- correct without a backfill.
alter table public.profiles
  add column if not exists email_opt_out_at timestamptz;


-- ───────────────────────────────────────────────────────────────────────
-- 2. Who is due a reminder
--
-- Anchored on email_confirmed_at rather than profiles.created_at: the
-- profile row is written by a trigger on confirmation, so the two are
-- normally the same moment, but only one of them is guaranteed to exist.
--
-- The user_subjects check is belt and braces. If setup_complete ever fails
-- to write while the subject rows land — the exact shape of failure this
-- codebase has already seen twice — the user has plainly finished setting
-- up and must not be told otherwise.
-- ───────────────────────────────────────────────────────────────────────
create or replace function public.pending_setup_reminders(
  p_limit   integer  default 50,
  p_min_age interval default interval '3 days',
  p_max_age interval default interval '10 days'
)
returns table (user_id uuid, email text, first_name text)
language sql
security definer
set search_path = public
as $fn$
  select
    u.id,
    u.email::text,
    coalesce(
      nullif(p.first_name, ''),
      u.raw_user_meta_data ->> 'first_name',
      ''
    )::text
  from auth.users u
  left join public.profiles        p on p.id      = u.id
  left join public.setup_reminders r on r.user_id = u.id
  where u.email_confirmed_at is not null
    and u.email is not null
    and u.deleted_at is null
    and (u.banned_until is null or u.banned_until < now())

    -- the window
    and u.email_confirmed_at <= now() - p_min_age
    and u.email_confirmed_at >= now() - p_max_age

    -- teachers never see the student setup flow, so their setup_complete
    -- is meaningless. Metadata fallback covers a missing profiles row.
    and coalesce(
          p.account_type,
          u.raw_user_meta_data ->> 'account_type',
          'student'
        ) <> 'teacher'

    -- asked us to stop
    and p.email_opt_out_at is null
    and r.unsubscribed_at is null

    -- genuinely has not set up
    and coalesce(p.setup_complete, false) = false
    and not exists (
      select 1 from public.user_subjects s where s.user_id = u.id
    )

    -- never sent, or a previous attempt failed and is still under the cap
    and (r.user_id is null or (r.sent_at is null and r.attempts < 3))

  order by u.email_confirmed_at
  limit p_limit
$fn$;


-- ───────────────────────────────────────────────────────────────────────
-- 3. Claim / settle
--
-- Claim before sending, not after. If the function times out or the deploy
-- restarts mid-run, the worst case is a reminder that never goes out —
-- which is invisible — rather than one that goes out twice, which is the
-- thing a student actually notices and resents.
--
-- The conflict clause is what makes a second concurrent run a no-op: it
-- only updates rows that are still unsent and under the attempt cap, so a
-- claim on an already-sent user returns no row and therefore false.
-- ───────────────────────────────────────────────────────────────────────
-- Returns the unsubscribe token on a successful claim, or null if this user
-- was already claimed by another run. The token has to come back from here
-- rather than from pending_setup_reminders() because the row it lives on
-- does not exist until this insert creates it. A retry after a failed send
-- returns the same token, so a token never goes stale mid-flight.
create or replace function public.claim_setup_reminder(p_user_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $fn$
declare
  token uuid;
begin
  insert into public.setup_reminders as r (user_id, claimed_at, attempts)
  values (p_user_id, now(), 1)
  on conflict (user_id) do update
     set claimed_at = now(),
         attempts   = r.attempts + 1
   where r.sent_at is null
     and r.attempts < 3
  returning r.unsubscribe_token into token;

  return token;
end;
$fn$;


create or replace function public.mark_setup_reminder_sent(
  p_user_id     uuid,
  p_provider_id text default null
)
returns void
language sql
security definer
set search_path = public
as $fn$
  update public.setup_reminders
     set sent_at     = now(),
         provider_id = p_provider_id,
         last_error  = null
   where user_id = p_user_id;
$fn$;


create or replace function public.fail_setup_reminder(
  p_user_id uuid,
  p_error   text
)
returns void
language sql
security definer
set search_path = public
as $fn$
  update public.setup_reminders
     set last_error = left(p_error, 500)
   where user_id = p_user_id
     and sent_at is null;
$fn$;


-- ───────────────────────────────────────────────────────────────────────
-- 3b. Unsubscribe
--
-- Looks up the opaque token from the email and records the opt-out in both
-- places: on profiles, where it is global and survives this table being
-- cleared, and on the reminder row itself, which is the only place it can
-- land if the user's profiles row was never created.
--
-- Returns true for a token it recognises, including one that has already
-- been used. Someone who clicks unsubscribe twice should be told they are
-- unsubscribed, not shown an error. False means the token is not real.
--
-- Deliberately no "resubscribe": there is nothing to resubscribe to. The
-- only mail this gates is a one-off nudge they have now said no to.
-- ───────────────────────────────────────────────────────────────────────
create or replace function public.unsubscribe_by_token(p_token uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $fn$
declare
  target uuid;
begin
  update public.setup_reminders
     set unsubscribed_at = coalesce(unsubscribed_at, now())
   where unsubscribe_token = p_token
  returning user_id into target;

  if target is null then
    return false;
  end if;

  update public.profiles
     set email_opt_out_at = coalesce(email_opt_out_at, now())
   where id = target;

  return true;
end;
$fn$;


-- ───────────────────────────────────────────────────────────────────────
-- 4. Lock the doors
--
-- These read auth.users and every student's email address. Only the
-- service role — which lives in Vercel env vars and never reaches a
-- browser — may call them. The anon key in supabase-config.js is public.
-- ───────────────────────────────────────────────────────────────────────
revoke all on function public.pending_setup_reminders(integer, interval, interval) from public, anon, authenticated;
revoke all on function public.claim_setup_reminder(uuid)                          from public, anon, authenticated;
revoke all on function public.mark_setup_reminder_sent(uuid, text)                from public, anon, authenticated;
revoke all on function public.fail_setup_reminder(uuid, text)                     from public, anon, authenticated;
revoke all on function public.unsubscribe_by_token(uuid)                           from public, anon, authenticated;

grant execute on function public.pending_setup_reminders(integer, interval, interval) to service_role;
grant execute on function public.claim_setup_reminder(uuid)                          to service_role;
grant execute on function public.mark_setup_reminder_sent(uuid, text)                to service_role;
grant execute on function public.fail_setup_reminder(uuid, text)                     to service_role;
grant execute on function public.unsubscribe_by_token(uuid)                           to service_role;


-- ───────────────────────────────────────────────────────────────────────
-- 5. Dry run — run this on its own before you enable the cron
--
-- Expect a small number. If it returns dozens, something in the window is
-- wrong and you are about to mail the back catalogue. If any row is a
-- teacher or someone you know finished setting up, stop and work out why
-- before sending anything.
--
--     select * from public.pending_setup_reminders(1000)
--
-- To see the whole incomplete population without the window, for curiosity
-- rather than for sending:
--
--     select * from public.pending_setup_reminders(1000, interval '0 days', interval '100 years')
-- ───────────────────────────────────────────────────────────────────────
