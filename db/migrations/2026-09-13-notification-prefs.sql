-- ═══════════════════════════════════════════════════════════════════════
-- Notification preferences become real — 2026-09-13
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
-- Independent of 2026-09-13-setup-reminders.sql except for the note about
-- email_opt_out_at below, so the order you apply them in does not matter.
--
-- The six notification toggles on settings.html have always written to
-- localStorage and nowhere else. That made them per-device, invisible to any
-- sender, and lost on a cache clear — a student could turn off streak alerts
-- on their laptop and still get them, and nobody would ever know why. Now
-- that there is a real email preference sitting next to them, six decorative
-- switches beside a working one is worse than none at all.
--
-- DEFAULT TRUE, and the reason is worth stating. Defaulting to false would
-- mean that the day you build the senders, nobody receives anything and you
-- have to mass-flip every existing row, which is both a nasty migration and
-- a worse consent story than a default anyone can see and change. These are
-- notifications about a user's own activity on an account they created.
--
-- EXISTING CHOICES ARE NOT DISCARDED. Anyone who actually touched a toggle
-- has that choice sitting in their browser's localStorage. settings.html
-- imports it once, on the next load, and stamps notif_prefs_set_at so it
-- never does it again. Untouched toggles take the default. The practical
-- effect is that a toggle someone never pressed will appear to flip from off
-- to on — it was only showing off because absent-means-off was an accident of
-- the localStorage read, not a decision anybody made.
--
-- profiles.email_opt_out_at (2026-09-13-setup-reminders.sql) OUTRANKS ALL SIX.
-- It is the "stop emailing me" switch and these are "which kinds". Any sender
-- built on top of these columns must check it first:
--
--     where p.email_opt_out_at is null and p.notif_streak
--
-- Getting that wrong means mailing someone who explicitly unsubscribed, which
-- is the one mistake here with a regulator attached to it.
-- ═══════════════════════════════════════════════════════════════════════


-- ───────────────────────────────────────────────────────────────────────
-- 1. The columns
--
-- Named to match the data-key attributes already on the buttons in
-- settings.html, so the toggle and its column cannot drift apart.
-- ───────────────────────────────────────────────────────────────────────

-- Students
alter table public.profiles
  add column if not exists notif_reminders boolean not null default true;
alter table public.profiles
  add column if not exists notif_streak boolean not null default true;
alter table public.profiles
  add column if not exists notif_content boolean not null default true;

-- Teachers
alter table public.profiles
  add column if not exists notif_class_joins boolean not null default true;
alter table public.profiles
  add column if not exists notif_weekly_summary boolean not null default true;
alter table public.profiles
  add column if not exists notif_red_topics boolean not null default true;

-- Null means this row has never had its preferences written, which is what
-- tells settings.html to do the one-time localStorage import.
alter table public.profiles
  add column if not exists notif_prefs_set_at timestamptz;


-- ───────────────────────────────────────────────────────────────────────
-- 2. No policy or grant changes needed
--
-- These are preferences, not privileges. The existing "own profile" policy
-- already lets a signed-in user read and write their own row, and
-- guard_profile_privileges() in 2026-09-11-admin-security.sql only reverts
-- the named privilege columns, so these pass through untouched.
--
-- That guard is also why settings.html can write a column name taken from a
-- data-key attribute without it being a hole: the worst a tampered attribute
-- can do is name a protected column, and the trigger reverts that and logs
-- the attempt. The client-side allowlist there is for legibility, not safety.
-- ───────────────────────────────────────────────────────────────────────


-- ───────────────────────────────────────────────────────────────────────
-- 3. Check
--
--     select notif_reminders, notif_streak, notif_content,
--            notif_class_joins, notif_weekly_summary, notif_red_topics,
--            notif_prefs_set_at, email_opt_out_at
--       from public.profiles
--      limit 20
--
-- Every row should read true across the board with a null notif_prefs_set_at
-- until people start loading settings.html.
-- ───────────────────────────────────────────────────────────────────────
