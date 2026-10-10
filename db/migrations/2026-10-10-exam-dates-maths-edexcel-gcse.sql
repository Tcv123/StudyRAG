-- =====================================================================
-- exam_dates: Edexcel GCSE Mathematics (1MA1), summer 2027.
--
-- Source: Pearson's FINAL GCSE Summer 2027 timetable
-- (gcse-summer-2027final.pdf). Foundation and Higher sit together, so
-- one row per paper. Resits (November) deliberately not included.
--
-- These are exactly the rows the Monday timetable bot produces for this
-- spec (same paper labels, codes and series), written with
-- source = 'import' so the bot's next run simply upserts over them.
-- Writing them as 'manual' would make the bot skip this subject forever.
--
-- Idempotent: safe to run more than once.
-- =====================================================================

insert into public.exam_dates
  (subject, exam_board, level, paper, entry_code, exam_date, session, duration, series, source)
values
  ('Mathematics', 'Edexcel', 'gcse', 'Paper 1 — Non-calculator', '1MA1/1F, 1MA1/1H', '2027-05-14', 'AM', '1h 30m', 'summer-2027', 'import'),
  ('Mathematics', 'Edexcel', 'gcse', 'Paper 2 — Calculator',     '1MA1/2F, 1MA1/2H', '2027-05-27', 'AM', '1h 30m', 'summer-2027', 'import'),
  ('Mathematics', 'Edexcel', 'gcse', 'Paper 3 — Calculator',     '1MA1/3F, 1MA1/3H', '2027-06-14', 'AM', '1h 30m', 'summer-2027', 'import')
on conflict (subject, exam_board, level, paper, series) do update
  set entry_code = excluded.entry_code,
      exam_date  = excluded.exam_date,
      session    = excluded.session,
      duration   = excluded.duration,
      updated_at = now()
  where public.exam_dates.source = 'import';   -- never overwrite a hand-entered date


-- Check (read-only): expect 3 rows.
select paper, entry_code, exam_date, session, duration, series, source
from public.exam_dates
where subject = 'Mathematics' and exam_board = 'Edexcel' and level = 'gcse'
order by exam_date;
