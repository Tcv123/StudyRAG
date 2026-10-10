-- ═══════════════════════════════════════════════════════════════════════
-- "Product news and offers" — a real marketing consent — 2026-10-10
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
-- Apply BEFORE the settings.html / register.html / Dashboard.html changes
-- that write it deploy. They degrade safely if it has not landed (the write
-- fails quietly and the toggle stays off), but nobody's choice is saved.
--
-- WHY A SEPARATE COLUMN. An email whose job is "you can buy Premium now" is
-- direct marketing under PECR, however it is worded. Sending it needs either
-- consent or the soft opt-in, and the soft opt-in needs an opt-out offered
-- at sign-up — which registration never had. So existing users have given
-- no permission for it, and none of the existing switches is it:
--
--   email_opt_out_at  "stop emailing me" — the master switch, outranks all
--   notif_content     "new topics or questions" — a product notification
--   notif_marketing   "news about features, plans and offers" — this one
--
-- DEFAULT FALSE, i.e. opt-in consent. True only when someone ticks the box
-- at sign-up, turns it on in Settings, or presses the button on the
-- Dashboard banner. Any sender must check both:
--
--     where p.email_opt_out_at is null and p.notif_marketing
--
-- notif_marketing_at records when consent was last given or withdrawn, so
-- "when did they agree" has an answer if anyone ever asks.
-- ═══════════════════════════════════════════════════════════════════════

alter table public.profiles
  add column if not exists notif_marketing boolean not null default false;

alter table public.profiles
  add column if not exists notif_marketing_at timestamptz;

-- Stamp the time on every change of the flag, whoever makes it, so the
-- client cannot forget to and cannot back-date it.
create or replace function public.stamp_marketing_consent()
returns trigger
language plpgsql
set search_path = public
as $fn$
begin
  if tg_op = 'INSERT' then
    if new.notif_marketing then
      new.notif_marketing_at := now();
    end if;
  elsif new.notif_marketing is distinct from old.notif_marketing then
    new.notif_marketing_at := now();
  end if;
  return new;
end;
$fn$;

drop trigger if exists trg_stamp_marketing_consent on public.profiles;
create trigger trg_stamp_marketing_consent
  before insert or update of notif_marketing on public.profiles
  for each row
  execute function public.stamp_marketing_consent();

-- No policy or grant changes: like the other notif_* columns this is a
-- preference, not a privilege, so the "own profile" policy covers it and
-- guard_profile_privileges() lets it through.

-- Check — expect 0 today:
-- select count(*) filter (where notif_marketing) as opted_in, count(*) as total
--   from public.profiles;
