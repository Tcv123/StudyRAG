-- ═══════════════════════════════════════════════════════════════════════
-- Referral attribution — "How did you hear about us?" — 2026-09-11
--
-- One row per user, written once by the forced modal that appears after
-- login until it is answered. Its own table rather than a profiles column
-- so later onboarding questions can join here without widening profiles,
-- and so marketing data keeps its own access rules.
--
-- WRITE ONCE, NEVER EDIT — there is deliberately no update and no delete
-- policy. A user can insert their own answer and read it back, and that is
-- all. Without that, anyone could re-answer in a loop and skew the numbers.
--
-- NO CHECK CONSTRAINT ON source — on purpose. The option list lives in
-- referral-modal.js. If a constraint policed it, adding an option to the JS
-- without also running a migration would make the insert fail for every
-- user, and because the modal is forced that would lock them out of the app
-- entirely. Bad data is recoverable, a lockout is not.
--
-- How to apply: paste this file into the Supabase SQL editor and Run.
-- Idempotent — safe to re-run.
-- ═══════════════════════════════════════════════════════════════════════


-- ───────────────────────────────────────────────────────────────────────
-- 1. The table
--
-- source        stable slug, e.g. 'tiktok' — never the display label, so
--               renaming a label in the UI does not split the pie chart
-- source_detail free text, only populated when source = 'other'
-- ───────────────────────────────────────────────────────────────────────

create table if not exists public.user_attribution (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  source        text not null,
  source_detail text,
  answered_at   timestamptz not null default now()
);

alter table public.user_attribution enable row level security;


-- ───────────────────────────────────────────────────────────────────────
-- 2. Policies — own row only, insert and select, nothing else
-- ───────────────────────────────────────────────────────────────────────

drop policy if exists "own attribution select" on public.user_attribution;

create policy "own attribution select" on public.user_attribution
  for select using (auth.uid() = user_id);

drop policy if exists "own attribution insert" on public.user_attribution;

create policy "own attribution insert" on public.user_attribution
  for insert with check (auth.uid() = user_id);


-- ───────────────────────────────────────────────────────────────────────
-- 3. The view you actually look at
--
-- Counts and percentages per source, biggest first. Run this in the SQL
-- editor whenever you want the numbers:
--
--     select * from attribution_summary
--
-- Access is revoked from anon and authenticated below. A view in the public
-- schema is exposed through the REST API and runs with the definer's rights,
-- so without that revoke any logged-in user could read the whole breakdown.
-- The SQL editor connects as postgres, which the revoke does not touch.
-- ───────────────────────────────────────────────────────────────────────

create or replace view public.attribution_summary as
  select
    source,
    count(*)                                                   as responses,
    round(100.0 * count(*) / sum(count(*)) over (), 1)         as pct
  from public.user_attribution
  group by source
  order by responses desc;

revoke all on public.attribution_summary from anon, authenticated;
