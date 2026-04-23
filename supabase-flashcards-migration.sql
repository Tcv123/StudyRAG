-- ─────────────────────────────────────────────────────────────────────
-- FLASHCARDS + SUBSCRIPTIONS MIGRATION
-- Run this in the Supabase SQL editor after the base schema exists.
-- Idempotent — safe to re-run.
-- ─────────────────────────────────────────────────────────────────────

-- 1. SUBSCRIPTION + CARD-COLOUR COLUMNS ON PROFILES ------------------
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS subscription_tier TEXT DEFAULT 'free'
    CHECK (subscription_tier IN ('free','pro_monthly','pro_annual'));

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'active'
    CHECK (subscription_status IN ('active','canceled','past_due','trialing'));

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS subscription_expires_at TIMESTAMPTZ;

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT;

-- Card background colour preference (default white, user can pick from palette)
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS card_bg_color TEXT DEFAULT '#FFFFFF';


-- 2. HELPER: "does the current user have an active pro subscription?" -
CREATE OR REPLACE FUNCTION public.is_pro_user()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
      AND subscription_tier IN ('pro_monthly','pro_annual')
      AND subscription_status IN ('active','trialing')
      AND (subscription_expires_at IS NULL OR subscription_expires_at > NOW())
  );
$$;
GRANT EXECUTE ON FUNCTION public.is_pro_user() TO authenticated;


-- 3. SYSTEM FLASHCARDS (pre-made, pro-gated, read-only to users) -----
CREATE TABLE IF NOT EXISTS flashcards (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject      TEXT NOT NULL,
  exam_board   TEXT NOT NULL,
  topic_id     TEXT NOT NULL,           -- e.g. "3.1.1"
  topic_name   TEXT NOT NULL,           -- e.g. "Economic Problem and Methodology"
  front        TEXT NOT NULL,
  back         TEXT NOT NULL,
  card_order   INTEGER DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_flashcards_subject_board_topic
  ON flashcards (subject, exam_board, topic_id, card_order);

ALTER TABLE flashcards ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "pro users read system flashcards" ON flashcards;
CREATE POLICY "pro users read system flashcards" ON flashcards
  FOR SELECT
  USING (public.is_pro_user());


-- 4. USER-CREATED DECKS -----------------------------------------------
CREATE TABLE IF NOT EXISTS user_decks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  description TEXT,
  subject     TEXT,                -- nullable: deck can span topics / subjects
  exam_board  TEXT,
  topic_id    TEXT,                -- optional: tag deck to a specific topic
  card_color  TEXT DEFAULT '#FFFFFF',
  is_auto     BOOLEAN DEFAULT FALSE, -- auto-created via "+ Add card" button
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_user_decks_user
  ON user_decks (user_id, subject, exam_board, topic_id);

ALTER TABLE user_decks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "own decks" ON user_decks;
CREATE POLICY "own decks" ON user_decks
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- 5. CARDS WITHIN USER DECKS -----------------------------------------
CREATE TABLE IF NOT EXISTS user_flashcards (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  deck_id    UUID NOT NULL REFERENCES user_decks(id) ON DELETE CASCADE,
  front      TEXT NOT NULL,
  back       TEXT NOT NULL,
  card_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_user_flashcards_deck
  ON user_flashcards (deck_id, card_order);

ALTER TABLE user_flashcards ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "own cards via deck" ON user_flashcards;
CREATE POLICY "own cards via deck" ON user_flashcards
  FOR ALL
  USING (EXISTS (
    SELECT 1 FROM user_decks
    WHERE id = user_flashcards.deck_id
      AND user_id = auth.uid()
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM user_decks
    WHERE id = user_flashcards.deck_id
      AND user_id = auth.uid()
  ));


-- 6. SM-2 SPACED-REPETITION STATE (per user, per card) ---------------
-- Tracks interval, ease factor, repetitions and next due date.
-- card_source distinguishes system cards (flashcards.id) from user cards
-- (user_flashcards.id). card_id cannot have a single FK because it points
-- to two possible tables — cleanup on delete is handled by the app layer.
CREATE TABLE IF NOT EXISTS user_card_state (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  card_id        UUID NOT NULL,
  card_source    TEXT NOT NULL CHECK (card_source IN ('system','user')),
  interval_days  INTEGER DEFAULT 0,
  ease_factor    NUMERIC(4,2) DEFAULT 2.50,
  repetitions    INTEGER DEFAULT 0,
  due_date       DATE DEFAULT CURRENT_DATE,
  last_reviewed  TIMESTAMPTZ,
  UNIQUE (user_id, card_id, card_source)
);
CREATE INDEX IF NOT EXISTS idx_card_state_user_due
  ON user_card_state (user_id, due_date);

ALTER TABLE user_card_state ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "own card state" ON user_card_state;
CREATE POLICY "own card state" ON user_card_state
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- 7. DONE. Grant selects/usage so the anon/auth roles can see objects.
GRANT USAGE ON SCHEMA public TO authenticated;
