-- ═══════════════════════════════════════════════════════════════════════
-- Exam dates, and the monthly watch on the boards' timetables — 2026-09-14
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
--
-- WHY THIS EXISTS. Exam dates were 42 hand-typed entries in
-- exam-dates-config.js, retyped every year from four PDFs. Two problems
-- with that, one of them live right now:
--
--   * Dashboard.html and breakdown.html both look up `${subject}_${board}`
--     with no level suffix, so every '|gcse' and '|alevel' key in that file
--     — CS AQA, Maths OCR, Biology AQA/Edexcel/OCR A, Physics AQA/Edexcel/
--     OCR A/OCR B, Geography Eduqas — has never matched anything. Those
--     students see no exam dates at all. The level column here is what
--     fixes it; exam-dates.js resolves the suffix on the fallback path too.
--
--   * Updating a date meant a redeploy, so a wrong date stayed wrong until
--     someone shipped. Dates students revise against should be fixable in
--     under a minute.
--
-- THE WATCH IS DELIBERATELY NOT AN AUTO-WRITER. No exam board publishes a
-- feed; they publish PDFs and spreadsheets whose layout changes between
-- years. A parser that silently mis-reads a column would put a wrong exam
-- date in front of a student revising against it, which is strictly worse
-- than showing none. So api/cron/exam-timetable-check.js only ever writes
-- to exam_timetable_findings, and nothing reaches exam_dates without an
-- admin pressing Approve on admin-exam-dates.html.
--
-- Detection is the robust half and is worth having on its own: "OCR put up
-- a document we have not seen before, here is the link" survives layout
-- changes that would break any parser. Parsing is best-effort on top.
-- ═══════════════════════════════════════════════════════════════════════


-- ───────────────────────────────────────────────────────────────────────
-- 1. The live dates
--
-- One row per paper per series. UNIQUE on (subject, board, level, paper,
-- series) so re-approving the same import updates rather than duplicating.
--
-- exam_date is a DATE and `session` carries AM/PM separately, rather than a
-- timestamptz. Boards publish a morning/afternoon session, not a start
-- time, and the client already turns AM into 09:00 and PM into 13:30 —
-- storing a fake precise time would invent information the board did not
-- give and would drift the moment anyone touched a timezone.
-- ───────────────────────────────────────────────────────────────────────
create table if not exists public.exam_dates (
  id          uuid primary key default gen_random_uuid(),
  subject     text not null,
  exam_board  text not null,
  level       text not null check (level in ('gcse','alevel')),
  paper       text not null,
  entry_code  text,
  exam_date   date not null,
  session     text not null default 'AM' check (session in ('AM','PM')),
  duration    text,
  series      text not null,
  source      text not null default 'manual' check (source in ('manual','import')),
  finding_id  uuid,
  updated_at  timestamptz not null default now()
);

create unique index if not exists exam_dates_unique
  on public.exam_dates (subject, exam_board, level, paper, series);

-- Every dashboard render filters on these three, so index them together.
create index if not exists exam_dates_lookup
  on public.exam_dates (subject, exam_board, level);


-- ───────────────────────────────────────────────────────────────────────
-- 2. What we watch
--
-- One row per board. page_url is the board's own timetable landing page —
-- the thing a human would open. The cron fetches it and looks for links to
-- timetable documents.
--
-- THESE URLS WILL ROT. Boards reorganise their sites. That is why they are
-- rows you can edit on admin-exam-dates.html and not constants in the
-- function: a moved page becomes a one-field fix, not a deploy. The cron
-- reports a fetch failure loudly for exactly this reason — a watch that
-- quietly returns nothing for two years is worse than no watch.
--
-- Verify each URL once after applying this; they are seeded from the
-- boards' published locations as of September 2026 and are a starting
-- point, not a guarantee.
-- ───────────────────────────────────────────────────────────────────────
create table if not exists public.exam_timetable_sources (
  id              uuid primary key default gen_random_uuid(),
  board           text not null unique,
  page_url        text not null,
  enabled         boolean not null default true,
  last_checked_at timestamptz,
  last_status     text,
  last_error      text,
  last_doc_url    text,
  last_doc_hash   text,
  created_at      timestamptz not null default now()
);

insert into public.exam_timetable_sources (board, page_url) values
  ('AQA',     'https://www.aqa.org.uk/exams-administration/dates-and-timetables'),
  ('OCR',     'https://www.ocr.org.uk/administration/general-administration/exam-timetables/'),
  ('Edexcel', 'https://qualifications.pearson.com/en/support/support-topics/exams/exam-timetables.html'),
  ('Eduqas',  'https://www.eduqas.co.uk/home/administration/key-dates-and-timetables/')
on conflict (board) do nothing;


-- ───────────────────────────────────────────────────────────────────────
-- 3. What the watch found
--
-- One row per previously-unseen document. parsed_rows is JSONB rather than
-- a child table on purpose: what comes out of a board spreadsheet is
-- half-structured and differs per board, and it is throwaway once approved.
-- Giving it a rigid schema would mean a migration every time a board
-- changed a column heading.
--
-- UNIQUE on (board, doc_hash) is what stops the 1st of every month
-- re-reporting the same timetable for the next eleven months.
-- ───────────────────────────────────────────────────────────────────────
create table if not exists public.exam_timetable_findings (
  id           uuid primary key default gen_random_uuid(),
  source_id    uuid references public.exam_timetable_sources(id) on delete set null,
  board        text not null,
  doc_url      text not null,
  doc_hash     text not null,
  doc_title    text,
  series       text,
  parsed_rows  jsonb not null default '[]'::jsonb,
  parse_note   text,
  status       text not null default 'pending'
                 check (status in ('pending','approved','dismissed')),
  found_at     timestamptz not null default now(),
  reviewed_at  timestamptz,
  reviewed_by  uuid references auth.users(id) on delete set null
);

create unique index if not exists exam_timetable_findings_doc
  on public.exam_timetable_findings (board, doc_hash);

-- The admin nav asks "are there any pending findings?" on every admin page
-- load, so make that count cheap.
create index if not exists exam_timetable_findings_pending
  on public.exam_timetable_findings (status) where status = 'pending';


-- ───────────────────────────────────────────────────────────────────────
-- 4. Access
--
-- exam_dates is readable by any signed-in user — it is a public timetable,
-- not personal data, and every dashboard needs it. Writes are admin-only,
-- enforced here rather than in the page, same as bug_reports.
--
-- The watch tables are admin-only in both directions. Nothing a student
-- could do with them, and last_error can carry fragments of a board's
-- server response.
--
-- is_admin() is the SECURITY DEFINER helper from
-- db/migrations/2026-09-11-admin-security.sql — it reports on the caller
-- and cannot be asked about anyone else.
-- ───────────────────────────────────────────────────────────────────────
alter table public.exam_dates             enable row level security;
alter table public.exam_timetable_sources enable row level security;
alter table public.exam_timetable_findings enable row level security;

drop policy if exists "exam dates readable"   on public.exam_dates;
drop policy if exists "exam dates admin write" on public.exam_dates;

create policy "exam dates readable"
  on public.exam_dates for select
  to authenticated
  using (true);

create policy "exam dates admin write"
  on public.exam_dates for all
  to authenticated
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists "timetable sources admin" on public.exam_timetable_sources;
create policy "timetable sources admin"
  on public.exam_timetable_sources for all
  to authenticated
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists "timetable findings admin" on public.exam_timetable_findings;
create policy "timetable findings admin"
  on public.exam_timetable_findings for all
  to authenticated
  using (public.is_admin()) with check (public.is_admin());


-- ───────────────────────────────────────────────────────────────────────
-- 5. Pending-findings count, for the admin sidebar
--
-- admin-nav.js hides the "Exam dates" item entirely unless this returns a
-- number above zero, so the item only appears when there is something to
-- look at. SECURITY DEFINER so it can count without handing out the rows,
-- but it still refuses anyone who is not an admin — a non-admin calling it
-- gets 0, which is also what they would get from the RLS anyway.
-- ───────────────────────────────────────────────────────────────────────
create or replace function public.pending_timetable_findings()
returns integer
language sql
security definer
set search_path = public
as $fn$
  select case
    when not public.is_admin() then 0
    else (select count(*)::int from public.exam_timetable_findings
          where status = 'pending')
  end
$fn$;

grant execute on function public.pending_timetable_findings() to authenticated;
