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
-- DEFAULT FALSE — these are opt-in. Nothing is sent to anyone who has not
-- gone into settings and asked for it. The cost is that the day you build the
-- senders they will reach almost nobody, and growing each list is then a
-- product problem: give people a reason to turn it on at the moment it would
-- help them, rather than switching it on for them. That is the deliberate
-- trade. Note that most of these are aimed at schoolchildren, where the
-- quieter default is the easier one to defend.
--
-- EXISTING CHOICES ARE NOT DISCARDED. Anyone who actually turned a toggle on
-- has that sitting in their browser's localStorage. settings.html imports it
-- once, on the next load, and stamps notif_prefs_set_at so it never does it
-- again. Because the default matches localStorage's absent-means-off, nobody
-- sees a toggle move on their next visit: an explicit "on" survives the move
-- to the database, and everything else was already showing off.
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
  add column if not exists notif_reminders boolean not null default false;
alter table public.profiles
  add column if not exists notif_streak boolean not null default false;
alter table public.profiles
  add column if not exists notif_content boolean not null default false;

-- Teachers
alter table public.profiles
  add column if not exists notif_class_joins boolean not null default false;
alter table public.profiles
  add column if not exists notif_weekly_summary boolean not null default false;
alter table public.profiles
  add column if not exists notif_red_topics boolean not null default false;

-- Null means this row has never had its preferences written, which is what
-- tells settings.html to do the one-time localStorage import.
alter table public.profiles
  add column if not exists notif_prefs_set_at timestamptz;


-- ───────────────────────────────────────────────────────────────────────
-- 1b. Correct an earlier run
--
-- The first version of this file defaulted these to true. "add column if not
-- exists" is a no-op once the column is there, so re-running would silently
-- leave that default in place and every existing row sitting at true — the
-- exact opposite of the intent above, and invisible unless you go looking.
-- The statements below make the file self-correcting.
--
-- The row reset is confined to notif_prefs_set_at is null, which means nobody
-- has chosen anything yet. A row where someone has been through settings is
-- left exactly as they left it.
-- ───────────────────────────────────────────────────────────────────────
alter table public.profiles alter column notif_reminders      set default false;
alter table public.profiles alter column notif_streak         set default false;
alter table public.profiles alter column notif_content        set default false;
alter table public.profiles alter column notif_class_joins    set default false;
alter table public.profiles alter column notif_weekly_summary set default false;
alter table public.profiles alter column notif_red_topics     set default false;

update public.profiles
   set notif_reminders      = false,
       notif_streak         = false,
       notif_content        = false,
       notif_class_joins    = false,
       notif_weekly_summary = false,
       notif_red_topics     = false
 where notif_prefs_set_at is null;


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
-- Every row should read false across the board with a null notif_prefs_set_at
-- until people start loading settings.html. After that, a true is someone who
-- asked for it — which is the only thing that should ever make one true.
-- ───────────────────────────────────────────────────────────────────────
