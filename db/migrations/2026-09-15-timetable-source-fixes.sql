-- ═══════════════════════════════════════════════════════════════════════
-- Timetable watch: correct the seeded board URLs — 2026-09-15
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
--
-- Follows db/migrations/2026-09-14-exam-dates.sql, whose seed used the
-- boards' published URLs as of that day without checking them. Three of the
-- four needed work, found by running scripts/check-timetable-sources.js
-- against the live pages:
--
--   AQA      ✓ worked as seeded. Finds both May/June 2027 timetables and
--              correctly ranks the January and November series below them.
--
--   OCR      ✗ 404. The path is /administration/key-dates-and-timetables/,
--              not /administration/general-administration/exam-timetables/.
--              Corrected below — thirty links, including the June 2027
--              finals for AS/A-Level and GCSE.
--
--   Eduqas   ✓ worked as seeded. Finds the summer 2027 GCE and GCSE
--              timetables.
--
--   Edexcel  ✗ loads, but has nothing to find. See below.
--
-- WHY EDEXCEL IS TURNED OFF RATHER THAN LEFT RUNNING. The Pearson page
-- returns a healthy 200 and 416KB of HTML containing the word "timetable"
-- 225 times, and not one document link: the site is AEM with client-side
-- rendering, so the timetables only exist after JavaScript runs. The
-- deeper /exam-timetables/provisional-timetables.html page is the same,
-- and /content/dam/pdf/Support/Timetables/ is a soft 404.
--
-- Left enabled, that board would return 'no-change' every month forever —
-- the watch reporting success while seeing nothing, which is the exact
-- failure the cron's header calls out as worse than no watch at all. You
-- would believe Edexcel was covered. Disabled, the review page shows it as
-- not watched, which is true.
--
-- Fetching it properly needs a headless browser. Puppeteer is already a
-- dependency of this repo (generate-pdfs.js), but it does not belong in a
-- 60-second serverless function, and adding it for one board is a poor
-- trade against pasting that board's table in by hand once a year.
--
-- So: Edexcel goes through the paste box on admin-exam-dates.html, same as
-- any PDF from the other three. Re-enable it on that page if Pearson ever
-- serves static links again — scripts/check-timetable-sources.js will tell
-- you in one command.
-- ═══════════════════════════════════════════════════════════════════════

update public.exam_timetable_sources
   set page_url = 'https://www.ocr.org.uk/administration/key-dates-and-timetables/'
 where board = 'OCR';

update public.exam_timetable_sources
   set enabled = false,
       last_status = 'not-watchable',
       last_error  = 'Pearson renders its timetable links in JavaScript, so there is '
                  || 'nothing for an HTML fetch to find. Use the paste box instead.'
 where board = 'Edexcel';
