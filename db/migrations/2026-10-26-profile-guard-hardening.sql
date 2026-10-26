-- ═══════════════════════════════════════════════════════════════════════
-- Profile guard hardening — 2026-10-26
--
-- Run by hand in the Supabase SQL editor (Dashboard -> SQL Editor -> New
-- query -> paste -> Run). Nothing deploys it automatically. Safe to re-run:
-- both functions are CREATE OR REPLACE and the triggers from
-- 2026-09-11-admin-security.sql already point at them by name, so they are
-- left alone.
--
-- Closes three gaps in the guards that migration added:
--
--   1. guard_profile_insert() cleared is_admin, the tier, the dates and the
--      flag on a self-inserted profile row, but not stripe_customer_id or
--      subscription_status. A user who beat auth/post-auth.js to their own
--      row could insert it already pointing at someone else's Stripe
--      customer, and the billing portal route would then hand them that
--      customer's portal. Both are now reset to what a normal insert gets:
--      no customer, and the column default 'active' (the early-adopter
--      trigger, which sorts after this one, still applies its grant on top).
--
--   2. profiles.email was writable on both INSERT and UPDATE. Settings says
--      "Email cannot be changed", the cron mailers and the admin console
--      read this column, and the early-adopter grant copies it — so a user
--      could point their row at any address. Both guards now force it to
--      the auth.users email for that id. Every legitimate client write
--      (settings.html, auth/post-auth.js, auth/setup.html) already sends
--      user.email from the session, which is the same value, so nothing
--      the app does changes. A side effect worth having: when someone
--      changes their sign-in email through Supabase Auth, the next write
--      to their profile brings the stale copy back in line.
--
--   3. Logging is unchanged in shape: UPDATE attempts land in
--      security_events straight away as 'privilege_escalation_blocked';
--      INSERT attempts go through app.pending_priv_insert to
--      log_blocked_profile_insert(), exactly as before. An email that
--      already matched auth.users (or the row's old value) is not an
--      attempt and is not logged.
--
-- Service role and SQL editor (auth.uid() is null) stay exempt, as do the
-- admin_flag_user()/admin_unflag_user() writes via app.admin_write.
-- ═══════════════════════════════════════════════════════════════════════


-- ───────────────────────────────────────────────────────────────────────
-- 1. UPDATE guard — 2026-09-11 definition plus the email lock
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.guard_profile_privileges()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  changed    text[]  := array[]::text[];
  attempted  jsonb   := '{}'::jsonb;
  auth_email text;
begin
  -- Server-side callers (service role, SQL editor) have no auth.uid().
  if auth.uid() is null then
    return new;
  end if;

  -- admin_flag_user() / admin_unflag_user(): see 2026-09-11-admin-security.sql.
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

  -- The email is whatever auth.users says it is. If auth has none (not a
  -- path this app offers), keep the row's existing value.
  select u.email into auth_email from auth.users u where u.id = old.id;
  if new.email is distinct from coalesce(auth_email, old.email) then
    if new.email is distinct from old.email then
      changed   := array_append(changed, 'email');
      attempted := attempted || jsonb_build_object('email', new.email);
    end if;
    new.email := coalesce(auth_email, old.email);
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


-- ───────────────────────────────────────────────────────────────────────
-- 2. INSERT guard — 2026-09-11 definition plus stripe_customer_id,
--    subscription_status and the email lock. Still runs as
--    trg_aa_guard_profile_insert, ahead of trg_grant_early_adopter, so the
--    grant reads the corrected email.
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.guard_profile_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  attempted  jsonb := '{}'::jsonb;
  auth_email text;
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

  -- Column default is 'active' (2026-09-11 section 1); a fresh free row
  -- gets exactly that.
  if new.subscription_status is not null and new.subscription_status <> 'active' then
    attempted := attempted || jsonb_build_object('subscription_status', new.subscription_status);
  end if;
  new.subscription_status := 'active';

  if new.stripe_customer_id is not null then
    attempted := attempted || jsonb_build_object('stripe_customer_id', new.stripe_customer_id);
    new.stripe_customer_id := null;
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

  select u.email into auth_email from auth.users u where u.id = new.id;
  if new.email is distinct from auth_email then
    if new.email is not null then
      attempted := attempted || jsonb_build_object('email', new.email);
    end if;
    new.email := auth_email;
  end if;

  new.flagged_at  := null;
  new.flag_reason := null;
  new.flagged_by  := null;

  -- Logged by the AFTER trigger log_blocked_profile_insert(): the FK on
  -- security_events.user_id can't be met until this row exists.
  if attempted <> '{}'::jsonb then
    perform set_config('app.pending_priv_insert', attempted::text, true);
  end if;

  return new;
end;
$$;
