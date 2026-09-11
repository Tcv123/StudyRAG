-- ── FIX MISSING PROFILES ───────────────────────────────────────────────────
-- Paste into the Supabase SQL editor (not a client that splits on ';' — the
-- function body between the $fn$ markers contains semicolons).
--
-- Problem: profiles rows are created client-side by ensureProfile() in
-- auth/post-auth.js, fire-and-forget with the result discarded. When that
-- request fails the row is never created and nothing retries. 14 confirmed
-- users ended up with no profile between 2026-05 and 2026-09, so they were
-- never granted early-adopter Premium.
--
-- Run STEP 1 and eyeball the count before running STEP 2 and 3.
-- ───────────────────────────────────────────────────────────────────────────


-- STEP 1 — dry run. Who is missing a profile? Expect ~14 rows.
SELECT
  u.id,
  u.email,
  u.created_at,
  u.raw_user_meta_data ->> 'first_name'   AS first_name,
  u.raw_user_meta_data ->> 'account_type' AS account_type
FROM auth.users u
WHERE u.email_confirmed_at IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = u.id)
ORDER BY u.created_at;


-- STEP 2 — backfill. Reconstructs the rows from auth.users metadata.
-- The existing BEFORE INSERT trigger fires on each, so all of them are
-- granted 3 months of Premium (86 + 14 = 100 profiles, still under the 150
-- cap). created_at is preserved so signup ordering stays honest.
INSERT INTO public.profiles (id, first_name, last_name, email, account_type, created_at)
SELECT
  u.id,
  COALESCE(u.raw_user_meta_data ->> 'first_name', ''),
  COALESCE(u.raw_user_meta_data ->> 'last_name',  ''),
  u.email,
  CASE WHEN u.raw_user_meta_data ->> 'account_type' = 'teacher'
       THEN 'teacher' ELSE 'student' END,
  u.created_at
FROM auth.users u
WHERE u.email_confirmed_at IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = u.id)
ON CONFLICT (id) DO NOTHING;


-- STEP 3 — prevent recurrence. Create the profile server-side the moment the
-- email is confirmed, so it no longer depends on the browser completing a
-- request. Fires on confirmation rather than on signup, which preserves
-- current behaviour: an unconfirmed registration gets no profile and burns no
-- early-adopter slot.
CREATE OR REPLACE FUNCTION public.create_profile_on_confirm()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $fn$
BEGIN
  IF NEW.email_confirmed_at IS NOT NULL THEN
    INSERT INTO public.profiles (id, first_name, last_name, email, account_type)
    VALUES (
      NEW.id,
      COALESCE(NEW.raw_user_meta_data ->> 'first_name', ''),
      COALESCE(NEW.raw_user_meta_data ->> 'last_name',  ''),
      NEW.email,
      CASE WHEN NEW.raw_user_meta_data ->> 'account_type' = 'teacher'
           THEN 'teacher' ELSE 'student' END
    )
    ON CONFLICT (id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$fn$;

DROP TRIGGER IF EXISTS trg_create_profile_on_confirm ON auth.users;
CREATE TRIGGER trg_create_profile_on_confirm
  AFTER INSERT OR UPDATE OF email_confirmed_at ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.create_profile_on_confirm();


-- STEP 4 — verify. missing_profiles should be 0.
SELECT
  (SELECT COUNT(*) FROM auth.users)      AS auth_users,
  (SELECT COUNT(*) FROM public.profiles) AS profiles,
  (SELECT COUNT(*) FROM auth.users u
     WHERE u.email_confirmed_at IS NOT NULL
       AND NOT EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = u.id)) AS missing_profiles;
