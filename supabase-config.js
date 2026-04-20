/*
 * ── SUPABASE CONFIGURATION ──────────────────────────────────────────────
 *
 * IMPORTANT — run this SQL in your Supabase SQL editor before using the app:
 *
 *   -- 1. Profiles table
 *   CREATE TABLE IF NOT EXISTS profiles (
 *     id             UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
 *     first_name     TEXT,
 *     last_name      TEXT,
 *     email          TEXT,
 *     level          TEXT CHECK (level IN ('gcse','as','a-level')),
 *     setup_complete BOOLEAN DEFAULT FALSE,
 *     created_at     TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own profile" ON profiles FOR ALL USING (auth.uid() = id);
 *
 *   -- 2. Subjects table
 *   CREATE TABLE IF NOT EXISTS user_subjects (
 *     id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     user_id    UUID REFERENCES profiles(id) ON DELETE CASCADE,
 *     subject    TEXT NOT NULL,
 *     exam_board TEXT NOT NULL,
 *     emoji      TEXT DEFAULT '📚',
 *     rag_status TEXT DEFAULT 'pending',
 *     created_at TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE user_subjects ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own subjects" ON user_subjects FOR ALL USING (auth.uid() = user_id);
 *
 *   -- 3. Topic progress table
 *   CREATE TABLE IF NOT EXISTS topic_progress (
 *     id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     user_id    UUID REFERENCES profiles(id) ON DELETE CASCADE,
 *     subject    TEXT NOT NULL,
 *     exam_board TEXT NOT NULL,
 *     topic      TEXT NOT NULL,
 *     rag_status TEXT NOT NULL CHECK (rag_status IN ('green','amber','red')),
 *     updated_at TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE topic_progress ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own progress" ON topic_progress FOR ALL USING (auth.uid() = user_id);
 *
 *   -- 4. Medals table
 *   CREATE TABLE IF NOT EXISTS user_medals (
 *     id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     user_id    UUID REFERENCES profiles(id) ON DELETE CASCADE,
 *     medal_id   TEXT NOT NULL,
 *     earned_at  TIMESTAMPTZ DEFAULT NOW(),
 *     UNIQUE (user_id, medal_id)
 *   );
 *   ALTER TABLE user_medals ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own medals" ON user_medals FOR ALL USING (auth.uid() = user_id);
 *
 * IMPORTANT — enable email confirmation:
 *   Supabase dashboard → Authentication → Providers → Email
 *   → turn ON "Confirm email"
 *   Also set Site URL + Redirect URLs under Authentication → URL Configuration
 *   so the confirmation email link points back to your app.
 *
 * ────────────────────────────────────────────────────────────────────────
 */

const SUPABASE_URL     = "https://tfpnagnjnzmlgbnqeiwr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcG5hZ25qbnptbGdibnFlaXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjc0OTMsImV4cCI6MjA4OTg0MzQ5M30.OFGP03V0r68LMFb2N3oZTSohp3ARK78b2_1PunRLV8k";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
