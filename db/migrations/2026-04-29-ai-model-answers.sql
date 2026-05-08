-- Cache for AI-generated model answers.
--
-- Each row stores one Gemini-generated model answer for a unique
-- (subject, board, level, question) tuple. The first user to click Show-model
-- on a question pays the generation cost; everyone after them gets the stored
-- copy instantly.
--
-- How to apply: paste the whole file into the Supabase SQL editor and Run.
-- It's idempotent — safe to re-run.

create table if not exists public.ai_model_answers (
  id            bigserial primary key,
  subject       text        not null,
  board         text        not null,
  level         text        not null,        -- 'gcse' | 'alevel'
  topic         text,                        -- topic label, for human inspection only
  question_hash text        not null,        -- sha256 of the question text (stable identity)
  question_text text        not null,        -- the question, stored for debugging
  marks         integer     not null,
  command       text,                        -- command word (Discuss / Assess / etc.)
  model_answer  text        not null,
  generated_at  timestamptz not null default now(),
  generated_by  uuid,                        -- user who first triggered generation
  view_count    integer     not null default 1,

  -- Cache key: same question + board + level → one shared row.
  constraint ai_model_answers_unique_question
    unique (subject, board, level, question_hash)
);

create index if not exists idx_ai_model_answers_lookup
  on public.ai_model_answers (subject, board, level, question_hash);

-- Lock down direct client access. Reads and writes go through the
-- /api/generate-model-answer serverless function using the service role key.
alter table public.ai_model_answers enable row level security;

-- (Intentionally no policies — non-service-role clients can't see or write.)
