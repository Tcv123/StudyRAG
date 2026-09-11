-- ═══════════════════════════════════════════════════════════════════════
-- Admin console + abuse signals — 2026-09-11
--
-- Three things, in dependency order:
--
--   1. A REAL LOCK ON PRIVILEGE COLUMNS. Until now the only policy on
--      profiles was "own profile" FOR ALL USING (auth.uid() = id). Because
--      is_admin and subscription_tier live on profiles, that policy let any
--      signed-in user open the console and run
--
--          supabaseClient.from('profiles')
--            .update({ is_admin: true, subscription_tier: 'pro_monthly' })
--            .eq('id', myId)
--
--      and become an admin with a lifetime Pro plan. The anon key is in
--      supabase-config.js and the repo is public, so this was reachable by
--      anyone who opened devtools. Sections 4 and 5 close it with triggers
--      rather than a new policy, because a policy that blocked the whole
--      row would break the legitimate name/level/avatar writes the settings
--      and setup pages do.
--
--   2. security_events — an append-only incident log. RLS is ON with NO
--      policies at all, which means the anon key cannot read or write it by
--      any route. Everything goes through the SECURITY DEFINER functions
--      below, and every one of those re-checks is_admin itself.
--
--   3. admin_security_signals() — abuse detection derived live from data
--      you already have (practice_attempts, profiles, class_join_attempts).
--      This is what makes the page useful on day one: it reports on the
--      months of activity that happened before any logging existed, rather
--      than starting from an empty table.
--
-- WHAT THIS DELIBERATELY DOES NOT DO: no IP addresses, no user agents, no
-- device fingerprints. Supabase does not expose request IPs to SQL, and
-- collecting them for schoolchildren would be a GDPR question you do not
-- want to answer. Every signal here is derived from data the user already
-- gave you for the product to work.
--
-- How to apply: paste this file into the Supabase SQL editor and Run.
-- Idempotent — safe to re-run.
--
-- After running, grant yourself access:
--     update profiles set is_admin = true where email = 'you@example.com'
-- Run that as the SQL editor (which has no auth.uid()), NOT from the app —
-- section 4 blocks the app path on purpose.
-- ═══════════════════════════════════════════════════════════════════════


-- ───────────────────────────────────────────────────────────────────────
-- 1. Columns
--
-- is_admin may already exist from the referral-attribution migration.
-- flagged_at / flag_reason / flagged_by are the admin's own annotation on
-- an account: "I looked at this one and it is a problem". Nothing in the
-- app reads them yet — they exist so the judgement survives the page.
-- ───────────────────────────────────────────────────────────────────────

alter table public.profiles
  add column if not exists is_admin    boolean not null default false,
  add column if not exists flagged_at  timestamptz,
  add column if not exists flag_reason text,
  add column if not exists flagged_by  uuid references public.profiles(id) on delete set null;

-- The triggers in sections 4 and 5 name these columns, and plpgsql resolves
-- record fields at run time, not at create time. On a database where
-- early-adopter-migration.sql was never applied the trigger would compile
-- fine and then fail on the first profiles write — taking sign-up with it.
-- These are no-ops on your live database and insurance everywhere else.
alter table public.profiles
  add column if not exists subscription_tier       text default 'free',
  add column if not exists subscription_status     text default 'active',
  add column if not exists subscription_expires_at timestamptz,
  add column if not exists is_early_adopter        boolean not null default false,
  add column if not exists premium_until           timestamptz,
  add column if not exists stripe_customer_id      text;


-- ───────────────────────────────────────────────────────────────────────
-- 2. is_admin() helper
--
-- SECURITY DEFINER so it can read profiles regardless of RLS, and STABLE
-- so the planner calls it once per statement rather than once per row.
-- Returns false (never null) for signed-out callers and for users with no
-- profile row, so `if not is_admin() then` is always safe.
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select p.is_admin from profiles p where p.id = auth.uid()), false)
$$;

revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;


-- ───────────────────────────────────────────────────────────────────────
-- 3. The incident log
--
-- APPEND ONLY. There is no update path and no delete path anywhere in this
-- file except reviewed_at/resolution, which an admin stamps. An event, once
-- written, keeps its original detail forever.
--
-- source tells you how much to trust a row:
--   'db-trigger' — written by Postgres itself. Cannot be faked.
--   'client'     — reported by a browser via log_security_event(). Treat as
--                  a hint only: the user controls their own browser, so they
--                  can suppress these or send noise. Never act on a 'client'
--                  row alone.
-- ───────────────────────────────────────────────────────────────────────

create table if not exists public.security_events (
  id          bigserial   primary key,
  occurred_at timestamptz not null default now(),
  user_id     uuid        references public.profiles(id) on delete set null,
  email       text,
  kind        text        not null,
  severity    text        not null default 'medium'
              check (severity in ('low', 'medium', 'high')),
  source      text        not null default 'client'
              check (source in ('db-trigger', 'client')),
  detail      jsonb       not null default '{}'::jsonb,
  reviewed_at timestamptz,
  reviewed_by uuid        references public.profiles(id) on delete set null,
  resolution  text
);

create index if not exists idx_security_events_recent
  on public.security_events (occurred_at desc);

create index if not exists idx_security_events_open
  on public.security_events (reviewed_at, occurred_at desc)
  where reviewed_at is null;

create index if not exists idx_security_events_user
  on public.security_events (user_id, occurred_at desc);

-- RLS on, zero policies. Deny-by-default: the anon key gets nothing from
-- this table by any query it can construct. The only doors are the
-- SECURITY DEFINER functions below.
alter table public.security_events enable row level security;

revoke all on public.security_events from anon, authenticated;


-- ───────────────────────────────────────────────────────────────────────
-- 4. The privilege guard
--
-- Fires on every profiles UPDATE made by a signed-in user. If a protected
-- column changed, it is silently reverted to its previous value and the
-- attempt is logged.
--
-- WHY REVERT RATHER THAN RAISE: an exception would abort the whole
-- statement. If any legitimate client write ever happens to include a
-- protected column in its payload, raising would break that page for a real
-- student. Reverting keeps the harmless part of the write and drops only
-- the part that was not allowed. Verified against every profiles write in
-- the app as of today — settings.html, auth/setup.html, auth/post-auth.js,
-- study-tracker.js, medals-engine.js, classes-nav.js, teacher-subjects-sync.js,
-- revision-timetable.html, flashcards/study.html — none of them touch a
-- protected column, so in practice every row this logs is a real attempt.
--
-- WHY auth.uid() IS NULL IS EXEMPT: that is the SQL editor and the service
-- role key. The Stripe webhook (api/stripe-webhook.js) and the checkout
-- session route both use SUPABASE_SERVICE_ROLE_KEY, so real subscription
-- changes flow through untouched. Granting yourself admin by hand in the
-- SQL editor also still works, which is the point — that path requires the
-- database password, not just a browser.
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.guard_profile_privileges()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  changed   text[]  := array[]::text[];
  attempted jsonb   := '{}'::jsonb;
begin
  -- Server-side callers (service role, SQL editor) have no auth.uid().
  if auth.uid() is null then
    return new;
  end if;

  -- admin_flag_user() and admin_unflag_user() write the flag columns while
  -- signed in as the admin, so auth.uid() is set and this trigger would
  -- otherwise revert their own write. They announce themselves by setting a
  -- transaction-local GUC first. A client cannot fake it: set_config lives
  -- in pg_catalog, PostgREST only exposes functions in the public schema,
  -- and the setting dies with the transaction either way.
  if coalesce(current_setting('app.admin_write', true), 'off') = 'on' then
    return new;
  end if;

  if new.is_admin is distinct from old.is_admin then
    changed   := array_append(changed, 'is_admin');
    attempted := attempted || jsonb_build_object('is_admin', new.is_admin);
    new.is_admin := old.is_admin;
  end if;

  if new.subscription_tier is distinct from old.subscription_tier then
    changed   := array_append(changed, 'subscription_tier');
    attempted := attempted || jsonb_build_object('subscription_tier', new.subscription_tier);
    new.subscription_tier := old.subscription_tier;
  end if;

  if new.subscription_status is distinct from old.subscription_status then
    changed   := array_append(changed, 'subscription_status');
    attempted := attempted || jsonb_build_object('subscription_status', new.subscription_status);
    new.subscription_status := old.subscription_status;
  end if;

  if new.subscription_expires_at is distinct from old.subscription_expires_at then
    changed   := array_append(changed, 'subscription_expires_at');
    attempted := attempted || jsonb_build_object('subscription_expires_at', new.subscription_expires_at);
    new.subscription_expires_at := old.subscription_expires_at;
  end if;

  if new.is_early_adopter is distinct from old.is_early_adopter then
    changed   := array_append(changed, 'is_early_adopter');
    attempted := attempted || jsonb_build_object('is_early_adopter', new.is_early_adopter);
    new.is_early_adopter := old.is_early_adopter;
  end if;

  if new.premium_until is distinct from old.premium_until then
    changed   := array_append(changed, 'premium_until');
    attempted := attempted || jsonb_build_object('premium_until', new.premium_until);
    new.premium_until := old.premium_until;
  end if;

  if new.stripe_customer_id is distinct from old.stripe_customer_id then
    changed   := array_append(changed, 'stripe_customer_id');
    attempted := attempted || jsonb_build_object('stripe_customer_id', new.stripe_customer_id);
    new.stripe_customer_id := old.stripe_customer_id;
  end if;

  -- An admin must not be able to clear their own flag either.
  if new.flagged_at is distinct from old.flagged_at
     or new.flag_reason is distinct from old.flag_reason then
    changed   := array_append(changed, 'flag');
    new.flagged_at  := old.flagged_at;
    new.flag_reason := old.flag_reason;
    new.flagged_by  := old.flagged_by;
  end if;

  if array_length(changed, 1) is not null then
    insert into public.security_events (user_id, email, kind, severity, source, detail)
    values (
      old.id,
      old.email,
      'privilege_escalation_blocked',
      'high',
      'db-trigger',
      jsonb_build_object(
        'columns',   to_jsonb(changed),
        'attempted', attempted,
        'actor',     auth.uid()
      )
    );
  end if;

  return new;
end;
$$;

drop trigger if exists trg_guard_profile_privileges on public.profiles;

create trigger trg_guard_profile_privileges
  before update on public.profiles
  for each row
  execute function public.guard_profile_privileges();


-- ───────────────────────────────────────────────────────────────────────
-- 5. The same guard on INSERT
--
-- The "own profile" policy is FOR ALL, and an INSERT policy with no WITH
-- CHECK falls back to its USING clause — so a user whose profile row does
-- not exist yet could insert one with is_admin already true. auth/post-auth.js
-- creates that row on first sign-in, but a user can beat it to the punch.
--
-- NAME MATTERS HERE. Postgres fires BEFORE triggers in alphabetical order
-- by trigger name, and early-adopter-migration.sql already has
-- trg_grant_early_adopter on BEFORE INSERT. 'trg_aa_...' sorts first, so
-- this clears whatever the client sent and the early-adopter trigger then
-- applies the legitimate grant on top. Rename it and a self-inserted
-- pro_monthly would survive.
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.guard_profile_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  attempted jsonb := '{}'::jsonb;
begin
  if auth.uid() is null then
    return new;
  end if;

  if coalesce(new.is_admin, false) then
    attempted := attempted || jsonb_build_object('is_admin', true);
    new.is_admin := false;
  end if;

  if coalesce(new.subscription_tier, 'free') <> 'free' then
    attempted := attempted || jsonb_build_object('subscription_tier', new.subscription_tier);
    new.subscription_tier := 'free';
  end if;

  if coalesce(new.is_early_adopter, false) then
    attempted := attempted || jsonb_build_object('is_early_adopter', true);
    new.is_early_adopter := false;
  end if;

  if new.premium_until is not null then
    attempted := attempted || jsonb_build_object('premium_until', new.premium_until);
    new.premium_until := null;
  end if;

  if new.subscription_expires_at is not null then
    attempted := attempted || jsonb_build_object('subscription_expires_at', new.subscription_expires_at);
    new.subscription_expires_at := null;
  end if;

  new.flagged_at  := null;
  new.flag_reason := null;
  new.flagged_by  := null;

  -- The event cannot be written here. security_events.user_id is a foreign
  -- key to profiles(id), and in a BEFORE INSERT trigger the profiles row
  -- does not exist yet, so the insert would fail the constraint and take the
  -- whole statement down with it. Hand the attempt to the AFTER trigger
  -- through a transaction-local setting instead.
  if attempted <> '{}'::jsonb then
    perform set_config('app.pending_priv_insert', attempted::text, true);
  end if;

  return new;
end;
$$;

drop trigger if exists trg_aa_guard_profile_insert on public.profiles;

create trigger trg_aa_guard_profile_insert
  before insert on public.profiles
  for each row
  execute function public.guard_profile_insert();


-- The other half of section 5: now that the row exists, the foreign key on
-- security_events.user_id can be satisfied, so the blocked attempt gets
-- logged against the account that made it.

create or replace function public.log_blocked_profile_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  pending text := current_setting('app.pending_priv_insert', true);
begin
  if pending is null or pending = '' then
    return null;
  end if;

  insert into public.security_events (user_id, email, kind, severity, source, detail)
  values (
    new.id,
    new.email,
    'privileged_insert_blocked',
    'high',
    'db-trigger',
    jsonb_build_object('attempted', pending::jsonb, 'actor', auth.uid())
  );

  -- Clear it so a second insert in the same transaction cannot inherit the
  -- first one's attempt and log it twice.
  perform set_config('app.pending_priv_insert', '', true);

  return null;
end;
$$;

drop trigger if exists trg_zz_log_blocked_profile_insert on public.profiles;

create trigger trg_zz_log_blocked_profile_insert
  after insert on public.profiles
  for each row
  execute function public.log_blocked_profile_insert();


-- ───────────────────────────────────────────────────────────────────────
-- 6. Client-reported events
--
-- The browser can report something it noticed — currently just "a non-admin
-- opened an admin page". Rate limited to 20 rows per user per hour so it
-- cannot be turned into a way to flood the table, and hard-pinned to
-- source = 'client' and severity = 'low' so a caller cannot dress its own
-- report up as a trigger-written one.
--
-- kind is clamped to a known list for the same reason — otherwise the log
-- fills with whatever string an attacker felt like typing.
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.log_security_event(p_kind text, p_detail jsonb default '{}'::jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  recent integer;
begin
  if auth.uid() is null then
    return;
  end if;

  if p_kind not in ('admin_page_denied', 'pro_page_denied') then
    return;
  end if;

  select count(*) into recent
  from security_events
  where user_id = auth.uid()
    and source = 'client'
    and occurred_at > now() - interval '1 hour';

  if recent >= 20 then
    return;
  end if;

  insert into security_events (user_id, email, kind, severity, source, detail)
  select auth.uid(), p.email, p_kind, 'low', 'client',
         coalesce(p_detail, '{}'::jsonb)
  from profiles p
  where p.id = auth.uid();
end;
$$;

revoke all on function public.log_security_event(text, jsonb) from public, anon;
grant execute on function public.log_security_event(text, jsonb) to authenticated;


-- ───────────────────────────────────────────────────────────────────────
-- 7. Admin read: the event log
--
-- Every admin function follows the same shape — check is_admin() first,
-- return nothing if the caller is not one. Not an exception: a non-admin
-- who calls these gets an empty result, which tells them nothing about
-- whether the table has rows in it.
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.admin_security_events(
  p_limit     integer default 100,
  p_only_open boolean default false
)
returns table (
  id          bigint,
  occurred_at timestamptz,
  user_id     uuid,
  who         text,
  kind        text,
  severity    text,
  source      text,
  detail      jsonb,
  reviewed_at timestamptz,
  resolution  text
)
language sql
stable
security definer
set search_path = public
as $$
  select
    e.id,
    e.occurred_at,
    e.user_id,
    coalesce(nullif(trim(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, '')), ''),
             e.email,
             'deleted account') as who,
    e.kind,
    e.severity,
    e.source,
    e.detail,
    e.reviewed_at,
    e.resolution
  from security_events e
  left join profiles p on p.id = e.user_id
  where is_admin()
    and (not p_only_open or e.reviewed_at is null)
  order by e.occurred_at desc
  limit greatest(1, least(coalesce(p_limit, 100), 500))
$$;

revoke all on function public.admin_security_events(integer, boolean) from public, anon;
grant execute on function public.admin_security_events(integer, boolean) to authenticated;


-- ───────────────────────────────────────────────────────────────────────
-- 8. Admin read: headline counts
-- ───────────────────────────────────────────────────────────────────────

-- plpgsql rather than a plain sql function on purpose. An aggregate with
-- no GROUP BY returns one row even when its WHERE filters everything out,
-- so a `where is_admin()` in a sql body would still have run the
-- `select count(*) from profiles` subqueries for a non-admin and handed
-- back the user count. An early return is the only version that leaks
-- nothing.

create or replace function public.admin_security_summary()
returns table (
  open_events   bigint,
  high_events   bigint,
  events_7d     bigint,
  flagged_users bigint,
  total_users   bigint
)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if not is_admin() then
    return;
  end if;

  return query
    select
      count(*) filter (where e.reviewed_at is null),
      count(*) filter (where e.severity = 'high' and e.reviewed_at is null),
      count(*) filter (where e.occurred_at > now() - interval '7 days'),
      (select count(*) from profiles where flagged_at is not null),
      (select count(*) from profiles)
    from security_events e;
end;
$$;

revoke all on function public.admin_security_summary() from public, anon;
grant execute on function public.admin_security_summary() to authenticated;


-- ───────────────────────────────────────────────────────────────────────
-- 9. Admin read: live abuse signals
--
-- Computed from scratch on every call rather than stored. Two reasons:
-- it works retroactively over data that predates this migration, and there
-- is no cache to go stale or to be poisoned.
--
-- Each block is a heuristic, not a verdict. The page says so. Read
-- "occurrences" as how loud the signal is, not how guilty the account is —
-- a teacher demoing the app can trip bulk_attempts honestly.
--
-- The three optional tables (class_join_attempts, classes, user_attribution)
-- are probed with to_regclass and queried through EXECUTE, so this file
-- still applies cleanly on a database where the classroom or referral
-- migrations were never run.
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.admin_security_signals()
returns table (
  kind        text,
  severity    text,
  headline    text,
  detail      text,
  user_id     uuid,
  who         text,
  occurrences bigint,
  last_seen   timestamptz
)
language plpgsql
stable
security definer
set search_path = public
as $fn$
begin
  if not is_admin() then
    return;
  end if;

  -- ── Blocked privilege escalation ─────────────────────────────────────
  -- The only signal here that is proof rather than suspicion. Section 4
  -- writes these, and nothing but Postgres can write them.
  return query
    select
      'privilege_escalation'::text,
      'high'::text,
      'Tried to grant themselves admin or Pro'::text,
      format('%s blocked attempt(s) - the change was reverted before it landed', count(*))::text,
      e.user_id,
      coalesce(e.email, 'deleted account')::text,
      count(*),
      max(e.occurred_at)
    from security_events e
    where e.kind in ('privilege_escalation_blocked', 'privileged_insert_blocked')
    group by e.user_id, e.email;

  -- ── Results that are arithmetically impossible ───────────────────────
  -- A score over 100%, more marks earned than the paper is worth, or more
  -- questions answered than exist. The app cannot produce any of these,
  -- so the row was written by hand against the REST endpoint.
  return query
    select
      'impossible_score'::text,
      'high'::text,
      'Practice results that cannot happen'::text,
      format('%s attempt(s), highest pct recorded %s', count(*), max(a.pct))::text,
      a.user_id,
      coalesce(nullif(trim(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, '')), ''),
               p.email, 'deleted account')::text,
      count(*),
      max(a.taken_at)
    from practice_attempts a
    left join profiles p on p.id = a.user_id
    where a.pct > 100
       or a.pct < 0
       or a.earned > a.total_marks
       or a.earned < 0
       or a.answered > a.questions
    group by a.user_id, p.first_name, p.last_name, p.email;

  -- ── Full marks, no time on the clock ─────────────────────────────────
  -- Possible by luck on a 5-question paper. Not possible repeatedly.
  -- Worth a look at 3 or more, which is why the threshold is here and not
  -- on the page.
  return query
    select
      'instant_full_marks'::text,
      'medium'::text,
      'Perfect scores submitted in seconds'::text,
      format('%s paper(s) at 100%% with under 10s on the clock', count(*))::text,
      a.user_id,
      coalesce(nullif(trim(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, '')), ''),
               p.email, 'deleted account')::text,
      count(*),
      max(a.taken_at)
    from practice_attempts a
    left join profiles p on p.id = a.user_id
    where a.pct = 100
      and a.time_used_sec < 10
      and a.questions >= 5
    group by a.user_id, p.first_name, p.last_name, p.email
    having count(*) >= 3;

  -- ── Machine-speed submission ─────────────────────────────────────────
  -- 40 papers inside one clock hour. A very keen student might do 10.
  return query
    select
      'bulk_attempts'::text,
      'medium'::text,
      'Papers submitted faster than a person can read them'::text,
      format('%s attempt(s) in a single hour', max(x.c))::text,
      x.user_id,
      coalesce(nullif(trim(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, '')), ''),
               p.email, 'deleted account')::text,
      sum(x.c)::bigint,
      max(x.last_at)
    from (
      select a.user_id,
             date_trunc('hour', a.taken_at) as hr,
             count(*) as c,
             max(a.taken_at) as last_at
      from practice_attempts a
      group by a.user_id, date_trunc('hour', a.taken_at)
      having count(*) >= 40
    ) x
    left join profiles p on p.id = x.user_id
    group by x.user_id, p.first_name, p.last_name, p.email;

  -- ── Paid tier with nothing behind it ─────────────────────────────────
  -- Pro comes from exactly two places: a Stripe subscription (which leaves
  -- a stripe_customer_id) or the early-adopter trigger (which sets
  -- is_early_adopter). A paid tier with neither means the column was set by
  -- something that was not either of those.
  return query
    select
      'unbacked_pro'::text,
      'high'::text,
      'Pro tier with no Stripe customer and no early-adopter grant'::text,
      format('tier %s, status %s', p.subscription_tier, coalesce(p.subscription_status, 'null'))::text,
      p.id,
      coalesce(nullif(trim(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, '')), ''),
               p.email, 'deleted account')::text,
      1::bigint,
      p.created_at
    from profiles p
    where coalesce(p.subscription_tier, 'free') <> 'free'
      and p.stripe_customer_id is null
      and not coalesce(p.is_early_adopter, false);

  -- ── Markup in a name ─────────────────────────────────────────────────
  -- Names are rendered into the sidebar, the class register and the teacher
  -- dashboard. Anything that looks like a tag or a handler in one is either
  -- an XSS probe or someone testing the boundaries.
  return query
    select
      'injected_markup'::text,
      'high'::text,
      'Markup or script syntax in a profile name'::text,
      format('stored name: %s', left(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, ''), 120))::text,
      p.id,
      coalesce(p.email, 'deleted account')::text,
      1::bigint,
      p.created_at
    from profiles p
    where (coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, ''))
          ~* '(<\s*/?\s*(script|iframe|img|svg|object|embed)|javascript:|on(error|load|click)\s*=)';

  -- ── A burst of accounts ──────────────────────────────────────────────
  -- 15 sign-ups in one hour is normal for a launch day and odd otherwise.
  -- Low severity on purpose: this one is context, not an accusation.
  return query
    select
      'signup_burst'::text,
      'low'::text,
      'Unusual number of sign-ups in one hour'::text,
      format('%s accounts created in the hour beginning %s',
             y.c, to_char(y.hr, 'YYYY-MM-DD HH24:MI'))::text,
      null::uuid,
      format('%s accounts', y.c)::text,
      y.c,
      y.last_at
    from (
      select date_trunc('hour', p.created_at) as hr,
             count(*) as c,
             max(p.created_at) as last_at
      from profiles p
      group by date_trunc('hour', p.created_at)
      having count(*) >= 15
    ) y;

  -- ── Join-code guessing ───────────────────────────────────────────────
  -- class_join_attempts only records FAILED joins (see the classroom
  -- migration), so a high count is someone walking the code space looking
  -- for a class to drop into.
  if to_regclass('public.class_join_attempts') is not null then
    return query execute $q$
      select
        'join_code_guessing'::text,
        'high'::text,
        'Repeated failed attempts to join a class'::text,
        format('%s failed join(s) in a single hour', max(z.c))::text,
        z.student_id,
        coalesce(nullif(trim(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, '')), ''),
                 p.email, 'deleted account')::text,
        sum(z.c)::bigint,
        max(z.last_at)
      from (
        select j.student_id,
               date_trunc('hour', j.attempted_at) as hr,
               count(*) as c,
               max(j.attempted_at) as last_at
        from class_join_attempts j
        group by j.student_id, date_trunc('hour', j.attempted_at)
        having count(*) >= 10
      ) z
      left join profiles p on p.id = z.student_id
      group by z.student_id, p.first_name, p.last_name, p.email
    $q$;
  end if;

  -- ── Markup in a class name ───────────────────────────────────────────
  -- Class names are rendered to every student in the class, so this one
  -- reaches other people's screens rather than only the author's.
  if to_regclass('public.classes') is not null then
    return query execute $q$
      select
        'injected_markup_class'::text,
        'high'::text,
        'Markup or script syntax in a class name'::text,
        format('class name: %s', left(c.name, 120))::text,
        c.teacher_id,
        coalesce(nullif(trim(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, '')), ''),
                 p.email, 'deleted account')::text,
        1::bigint,
        c.created_at
      from classes c
      left join profiles p on p.id = c.teacher_id
      where c.name ~* '(<\s*/?\s*(script|iframe|img|svg|object|embed)|javascript:|on(error|load|click)\s*=)'
    $q$;
  end if;

  -- ── Links in first-run feedback ──────────────────────────────────────
  -- The feedback box is free text nobody moderates. A URL in it is almost
  -- always spam rather than feedback.
  if to_regclass('public.user_attribution') is not null then
    return query execute $q$
      select
        'spam_feedback'::text,
        'low'::text,
        'A link in the first-run feedback box'::text,
        left(a.feedback, 160)::text,
        a.user_id,
        coalesce(nullif(trim(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, '')), ''),
                 p.email, 'deleted account')::text,
        1::bigint,
        a.answered_at
      from user_attribution a
      left join profiles p on p.id = a.user_id
      where a.feedback ~* '(https?://|www\.|\.(com|net|ru|xyz|top)\b)'
    $q$;
  end if;

  return;
end;
$fn$;

revoke all on function public.admin_security_signals() from public, anon;
grant execute on function public.admin_security_signals() to authenticated;


-- ───────────────────────────────────────────────────────────────────────
-- 10. Admin write: review an event, flag an account
--
-- Flagging is an annotation and nothing more — it does not suspend the
-- account, block sign-in or hide anyone's work. Deciding what to do about
-- a flagged account stays a human decision made in the Supabase dashboard.
-- That is deliberate: an automated ban triggered by a heuristic is how you
-- lock a real student out of their revision the night before an exam.
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.admin_review_security_event(
  p_event_id   bigint,
  p_resolution text default null
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_admin() then
    return false;
  end if;

  update security_events
     set reviewed_at = now(),
         reviewed_by = auth.uid(),
         resolution  = left(coalesce(p_resolution, 'reviewed'), 500)
   where id = p_event_id;

  return found;
end;
$$;

revoke all on function public.admin_review_security_event(bigint, text) from public, anon;
grant execute on function public.admin_review_security_event(bigint, text) to authenticated;


create or replace function public.admin_flag_user(
  p_user_id uuid,
  p_reason  text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_admin() then
    return false;
  end if;

  -- An admin cannot flag another admin. Two admins fighting over each
  -- other's rows is not a state worth supporting.
  if (select p.is_admin from profiles p where p.id = p_user_id) then
    return false;
  end if;

  perform set_config('app.admin_write', 'on', true);

  update profiles
     set flagged_at  = now(),
         flag_reason = left(coalesce(p_reason, 'flagged by admin'), 500),
         flagged_by  = auth.uid()
   where id = p_user_id;

  if not found then
    return false;
  end if;

  insert into security_events (user_id, email, kind, severity, source, detail)
  select p_user_id, p.email, 'account_flagged', 'medium', 'db-trigger',
         jsonb_build_object('reason', left(coalesce(p_reason, ''), 500), 'by', auth.uid())
  from profiles p
  where p.id = p_user_id;

  return true;
end;
$$;

revoke all on function public.admin_flag_user(uuid, text) from public, anon;
grant execute on function public.admin_flag_user(uuid, text) to authenticated;


create or replace function public.admin_unflag_user(p_user_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_admin() then
    return false;
  end if;

  perform set_config('app.admin_write', 'on', true);

  update profiles
     set flagged_at  = null,
         flag_reason = null,
         flagged_by  = null
   where id = p_user_id;

  if not found then
    return false;
  end if;

  insert into security_events (user_id, email, kind, severity, source, detail)
  select p_user_id, p.email, 'account_unflagged', 'low', 'db-trigger',
         jsonb_build_object('by', auth.uid())
  from profiles p
  where p.id = p_user_id;

  return true;
end;
$$;

revoke all on function public.admin_unflag_user(uuid) from public, anon;
grant execute on function public.admin_unflag_user(uuid) to authenticated;


create or replace function public.admin_flagged_users()
returns table (
  user_id     uuid,
  who         text,
  email       text,
  flag_reason text,
  flagged_at  timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select
    p.id,
    coalesce(nullif(trim(coalesce(p.first_name, '') || ' ' || coalesce(p.last_name, '')), ''),
             p.email, 'unnamed')::text,
    p.email,
    p.flag_reason,
    p.flagged_at
  from profiles p
  where is_admin()
    and p.flagged_at is not null
  order by p.flagged_at desc
$$;

revoke all on function public.admin_flagged_users() from public, anon;
grant execute on function public.admin_flagged_users() to authenticated;


-- ───────────────────────────────────────────────────────────────────────
-- 11. Check your work
--
-- Run these two by hand after applying. The first should return true for
-- you and nobody else. The second should return zero rows on a healthy
-- database, and is the query to come back to after any incident.
--
--   select email, is_admin from profiles where is_admin
--   select * from admin_security_signals() order by severity, last_seen desc
--
-- And the one that proves section 4 works — run it from the app console
-- while signed in as a normal user, then re-read the row. is_admin will
-- still be false and a high-severity event will be waiting for you.
-- ───────────────────────────────────────────────────────────────────────
