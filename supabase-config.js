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
 *     avatar_url     TEXT,
 *     setup_complete BOOLEAN DEFAULT FALSE,
 *     created_at     TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own profile" ON profiles FOR ALL USING (auth.uid() = id);
 *
 *   -- If the profiles table already exists, add the avatar column:
 *   ALTER TABLE profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;
 *
 *   -- 1b. Avatars storage bucket (run this in the SQL editor too)
 *   INSERT INTO storage.buckets (id, name, public)
 *     VALUES ('avatars', 'avatars', true)
 *     ON CONFLICT (id) DO NOTHING;
 *
 *   -- Storage policies: anyone can read, only the owner can write their own file
 *   CREATE POLICY "avatars are publicly readable"
 *     ON storage.objects FOR SELECT
 *     USING (bucket_id = 'avatars');
 *   CREATE POLICY "users can upload their own avatar"
 *     ON storage.objects FOR INSERT
 *     WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
 *   CREATE POLICY "users can update their own avatar"
 *     ON storage.objects FOR UPDATE
 *     USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
 *   CREATE POLICY "users can delete their own avatar"
 *     ON storage.objects FOR DELETE
 *     USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
 *
 *   -- 2. Subjects table
 *   CREATE TABLE IF NOT EXISTS user_subjects (
 *     id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     user_id       UUID REFERENCES profiles(id) ON DELETE CASCADE,
 *     subject       TEXT NOT NULL,
 *     exam_board    TEXT NOT NULL,
 *     emoji         TEXT DEFAULT '📚',
 *     rag_status    TEXT DEFAULT 'pending',
 *     current_grade TEXT,
 *     target_grade  TEXT,
 *     created_at    TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE user_subjects ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own subjects" ON user_subjects FOR ALL USING (auth.uid() = user_id);
 *
 *   -- If user_subjects already exists, add the grade columns:
 *   ALTER TABLE user_subjects ADD COLUMN IF NOT EXISTS current_grade TEXT;
 *   ALTER TABLE user_subjects ADD COLUMN IF NOT EXISTS target_grade  TEXT;
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
 *   -- 3b. Practice attempts (past tests history)
 *   CREATE TABLE IF NOT EXISTS practice_attempts (
 *     id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     user_id       UUID REFERENCES profiles(id) ON DELETE CASCADE,
 *     subject       TEXT NOT NULL,
 *     exam_board    TEXT NOT NULL,
 *     topic         TEXT NOT NULL,
 *     topic_name    TEXT,
 *     earned        INTEGER NOT NULL,
 *     total_marks   INTEGER NOT NULL,
 *     pct           INTEGER NOT NULL,
 *     questions     INTEGER NOT NULL,
 *     answered      INTEGER NOT NULL,
 *     time_used_sec INTEGER NOT NULL,
 *     timed_out     BOOLEAN DEFAULT FALSE,
 *     taken_at      TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE practice_attempts ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own attempts" ON practice_attempts FOR ALL USING (auth.uid() = user_id);
 *   CREATE INDEX IF NOT EXISTS idx_practice_attempts_user_subject
 *     ON practice_attempts (user_id, subject, exam_board, taken_at DESC);
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
 *   -- 5. Self-service account deletion (immediate, trigger-driven).
 *   -- Clicking "Delete account" calls request_account_deletion(), which stamps
 *   -- profiles.deletion_requested_at. An AFTER UPDATE trigger on that column
 *   -- immediately deletes the matching auth.users row; ON DELETE CASCADE fans
 *   -- out to every user-scoped table so nothing is left behind.
 *
 *   -- 5a. Flag column + generated boolean mirror for easy filtering in the dashboard.
 *   -- account_active = TRUE while deletion_requested_at IS NULL; flips to FALSE the
 *   -- moment deletion is requested (and only stays FALSE for microseconds before the
 *   -- trigger cascades the row away).
 *   ALTER TABLE profiles ADD COLUMN IF NOT EXISTS deletion_requested_at TIMESTAMPTZ;
 *   ALTER TABLE profiles
 *     ADD COLUMN IF NOT EXISTS account_active BOOLEAN
 *     GENERATED ALWAYS AS (deletion_requested_at IS NULL) STORED;
 *
 *   -- 5b. RPC the client calls to schedule deletion. SECURITY DEFINER is safe
 *   -- because the UPDATE is pinned to auth.uid().
 *   CREATE OR REPLACE FUNCTION public.request_account_deletion()
 *   RETURNS TIMESTAMPTZ
 *   LANGUAGE plpgsql
 *   SECURITY DEFINER
 *   SET search_path = public
 *   AS $$
 *   DECLARE
 *     ts TIMESTAMPTZ := now();
 *   BEGIN
 *     UPDATE public.profiles
 *        SET deletion_requested_at = COALESCE(deletion_requested_at, ts)
 *      WHERE id = auth.uid();
 *     RETURN (SELECT deletion_requested_at FROM public.profiles WHERE id = auth.uid());
 *   END;
 *   $$;
 *   REVOKE ALL ON FUNCTION public.request_account_deletion() FROM PUBLIC, anon;
 *   GRANT EXECUTE ON FUNCTION public.request_account_deletion() TO authenticated;
 *
 *   -- 5c. Trigger: the moment deletion_requested_at transitions from NULL to a
 *   -- timestamp, delete the auth.users row. The CASCADE foreign keys on profiles,
 *   -- user_subjects, topic_progress, practice_attempts, and user_medals then wipe
 *   -- every trace of the account in the same transaction.
 *   CREATE OR REPLACE FUNCTION public.purge_auth_when_inactive()
 *   RETURNS TRIGGER
 *   LANGUAGE plpgsql
 *   SECURITY DEFINER
 *   SET search_path = public
 *   AS $$
 *   BEGIN
 *     DELETE FROM auth.users WHERE id = NEW.id;
 *     RETURN NULL;
 *   END;
 *   $$;
 *   DROP TRIGGER IF EXISTS trg_purge_auth_when_inactive ON public.profiles;
 *   CREATE TRIGGER trg_purge_auth_when_inactive
 *     AFTER UPDATE OF deletion_requested_at ON public.profiles
 *     FOR EACH ROW
 *     WHEN (OLD.deletion_requested_at IS NULL AND NEW.deletion_requested_at IS NOT NULL)
 *     EXECUTE FUNCTION public.purge_auth_when_inactive();
 *
 *   -- 5d. If you previously ran the pg_cron version, unschedule it — the trigger
 *   -- supersedes it. Safe to run even if the job was never created.
 *   -- SELECT cron.unschedule('purge-deleted-accounts');
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
