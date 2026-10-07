-- ═══════════════════════════════════════════════════════════════════════
-- "Your free Premium is ending" — one email per comped account
--                                                            2026-10-07
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
-- Apply BEFORE api/cron/premium-expiry.js deploys.
--
-- The early-adopter comps expire from 2 December 2026. This gives each of
-- those accounts one email, seven days out, saying when access ends and
-- offering the chance to subscribe. After that date they drop to the free
-- plan silently, which is a poor way to find out.
--
-- Same shape as 2026-09-13-setup-reminders.sql deliberately: one ledger row
-- per user ever, claim-then-send, an opaque unsubscribe token per row. Read
-- that file for the reasoning behind each piece; this one only notes where
-- it differs.
-- ═══════════════════════════════════════════════════════════════════════

-- ───────────────────────────────────────────────────────────────────────
-- 1. The ledger
-- ───────────────────────────────────────────────────────────────────────
create table if not exists public.premium_expiry_reminders (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  claimed_at  timestamptz not null default now(),
  sent_at     timestamptz,
  attempts    integer     not null default 1,
  last_error  text,
  provider_id text
);

alter table public.premium_expiry_reminders
  add column if not exists unsubscribe_token uuid not null default gen_random_uuid();
alter table public.premium_expiry_reminders
  add column if not exists unsubscribed_at timestamptz;

create unique index if not exists premium_expiry_reminders_unsubscribe_token_key
  on public.premium_expiry_reminders (unsubscribe_token);

alter table public.premium_expiry_reminders enable row level security;
-- RLS on, no policies: service-role functions only, as with setup_reminders.


-- ───────────────────────────────────────────────────────────────────────
-- 2. Who is due
--
-- A comp is is_early_adopter with no stripe_customer_id. The moment someone
-- subscribes, the webhook writes their customer id and they drop out of this
-- list — including between being claimed and being sent, which is why the
-- cron re-reads rather than trusting a list from yesterday.
--
-- premium_until is the comp's own end date. subscription_expires_at is kept
-- in step by the grant, but premium_until is the column the grant owns, so
-- it is the one that decides.
--
-- Anyone who has opted out of email entirely is excluded here rather than in
-- the sender, so a dry run shows the real list.
-- ───────────────────────────────────────────────────────────────────────
create or replace function public.pending_premium_expiry_reminders(
  p_limit  integer  default 50,
  p_window interval default interval '7 days'
)
returns table (user_id uuid, email text, first_name text, premium_until timestamptz)
language sql
security definer
set search_path = public
as $fn$
  select
    p.id,
    p.email::text,
    coalesce(p.first_name, '')::text,
    p.premium_until
  from public.profiles p
  left join public.premium_expiry_reminders r on r.user_id = p.id
  where p.is_early_adopter
    and p.stripe_customer_id is null          -- has not already subscribed
    and p.premium_until is not null
    and p.premium_until > now()               -- not already lapsed
    and p.premium_until <= now() + p_window   -- ending within the window
    and p.email is not null
    and p.email_opt_out_at is null
    and p.deletion_requested_at is null
    and r.user_id is null                     -- never claimed before
  order by p.premium_until asc
  limit greatest(p_limit, 0);
$fn$;


-- ───────────────────────────────────────────────────────────────────────
-- 3. Claim, mark, fail
-- ───────────────────────────────────────────────────────────────────────
create or replace function public.claim_premium_expiry_reminder(p_user_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $fn$
declare
  token uuid;
begin
  insert into public.premium_expiry_reminders as r (user_id, claimed_at, attempts)
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


create or replace function public.mark_premium_expiry_reminder_sent(
  p_user_id     uuid,
  p_provider_id text default null
)
returns void
language sql
security definer
set search_path = public
as $fn$
  update public.premium_expiry_reminders
     set sent_at     = now(),
         provider_id = p_provider_id,
         last_error  = null
   where user_id = p_user_id;
$fn$;


create or replace function public.fail_premium_expiry_reminder(
  p_user_id uuid,
  p_error   text
)
returns void
language sql
security definer
set search_path = public
as $fn$
  update public.premium_expiry_reminders
     set last_error = left(p_error, 500)
   where user_id = p_user_id
     and sent_at is null;
$fn$;


-- ───────────────────────────────────────────────────────────────────────
-- 4. Unsubscribe — one link, both mailings
--
-- The tokens in the two reminder tables are drawn from the same uuid space
-- and api/unsubscribe.js calls one function, so this now checks both. A
-- token belongs to exactly one row in one table; checking setup_reminders
-- first preserves the existing behaviour exactly.
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
    update public.premium_expiry_reminders
       set unsubscribed_at = coalesce(unsubscribed_at, now())
     where unsubscribe_token = p_token
    returning user_id into target;
  end if;

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
-- 5. Lock the doors
-- ───────────────────────────────────────────────────────────────────────
revoke all on function public.pending_premium_expiry_reminders(integer, interval) from public, anon, authenticated;
revoke all on function public.claim_premium_expiry_reminder(uuid)                 from public, anon, authenticated;
revoke all on function public.mark_premium_expiry_reminder_sent(uuid, text)       from public, anon, authenticated;
revoke all on function public.fail_premium_expiry_reminder(uuid, text)            from public, anon, authenticated;

grant execute on function public.pending_premium_expiry_reminders(integer, interval) to service_role;
grant execute on function public.claim_premium_expiry_reminder(uuid)                 to service_role;
grant execute on function public.mark_premium_expiry_reminder_sent(uuid, text)       to service_role;
grant execute on function public.fail_premium_expiry_reminder(uuid, text)            to service_role;


-- ───────────────────────────────────────────────────────────────────────
-- 6. Dry run — expect 0 today, and a handful a week before 2 December
-- ───────────────────────────────────────────────────────────────────────
-- select * from public.pending_premium_expiry_reminders(100);
--
-- To see the whole cohort and when each one lands:
-- select date(premium_until) as ends, count(*)
--   from public.profiles
--  where is_early_adopter and stripe_customer_id is null
--  group by 1 order by 1;
