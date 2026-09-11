-- ═══════════════════════════════════════════════════════════════════════
-- Referral attribution + first-run feedback — 2026-09-11
--
-- One row per user, written once by the forced modal that appears after
-- login until it is answered. Its own table rather than a profiles column
-- so later onboarding questions can join here without widening profiles,
-- and so marketing data keeps its own access rules.
--
-- WRITE ONCE, NEVER EDIT — there is deliberately no update and no delete
-- policy. A user can insert their own answer and read it back, and that is
-- all. Without that, anyone could re-answer in a loop and skew the numbers.
-- The trade-off: feedback is captured once per user, at first sign-in. A
-- recurring "how are we doing" prompt would need its own append-only table.
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
--               renaming a label in the UI does not split one channel into
--               two bars later
-- source_detail free text, only populated when source = 'other'
-- feedback      free text, optional, whatever they felt like telling you
-- ───────────────────────────────────────────────────────────────────────

create table if not exists public.user_attribution (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  source        text not null,
  source_detail text,
  feedback      text,
  answered_at   timestamptz not null default now()
);

alter table public.user_attribution
  add column if not exists feedback text;

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
-- 3. Admin flag
--
-- Defaults to false for everybody, including every existing row. After
-- running this file, grant yourself access by running one more line with
-- your own address swapped in:
--
--     update profiles set is_admin = true where email = 'you@example.com'
--
-- Nothing in the app ever writes this column — it is set by hand in the
-- SQL editor only, which is what keeps it trustworthy as a gate.
-- ───────────────────────────────────────────────────────────────────────

alter table public.profiles
  add column if not exists is_admin boolean not null default false;


-- ───────────────────────────────────────────────────────────────────────
-- 4. Admin read paths
--
-- RLS on user_attribution is owner-only and stays that way. These two
-- SECURITY DEFINER functions are the ONLY way anyone sees another user's
-- row, and each re-checks is_admin itself rather than trusting the caller.
--
-- The check reads as a scalar subquery in the WHERE clause. For a caller
-- with no profile it evaluates to NULL, which filters everything out — so
-- the failure mode is an empty result, never a leak.
--
-- Deliberately no user_id and no email in either return type. The point is
-- the aggregate, and a name attached to a complaint is not needed to act
-- on it.
-- ───────────────────────────────────────────────────────────────────────

create or replace function public.attribution_breakdown()
returns table (source text, responses bigint, pct numeric)
language sql
stable
security definer
set search_path = public
as $$
  select
    a.source,
    count(*) as responses,
    round(100.0 * count(*) / nullif(sum(count(*)) over (), 0), 1) as pct
  from user_attribution a
  where (select p.is_admin from profiles p where p.id = auth.uid())
  group by a.source
  order by responses desc
$$;

create or replace function public.attribution_feedback()
returns table (source text, source_detail text, feedback text, answered_at timestamptz)
language sql
stable
security definer
set search_path = public
as $$
  select a.source, a.source_detail, a.feedback, a.answered_at
  from user_attribution a
  where (select p.is_admin from profiles p where p.id = auth.uid())
    and a.feedback is not null
    and length(btrim(a.feedback)) > 0
  order by a.answered_at desc
  limit 500
$$;

revoke execute on function public.attribution_breakdown() from public, anon;

revoke execute on function public.attribution_feedback() from public, anon;

grant execute on function public.attribution_breakdown() to authenticated;

grant execute on function public.attribution_feedback() to authenticated;


-- ───────────────────────────────────────────────────────────────────────
-- 5. Convenience view for the SQL editor
--
-- Same numbers as attribution_breakdown, for when you would rather just
-- run a query than open the page:
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
    count(*)                                           as responses,
    round(100.0 * count(*) / sum(count(*)) over (), 1) as pct
  from public.user_attribution
  group by source
  order by responses desc;

revoke all on public.attribution_summary from anon, authenticated;
