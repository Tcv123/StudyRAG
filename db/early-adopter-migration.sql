-- ── EARLY ADOPTER MIGRATION ────────────────────────────────────────────────
-- Run this in your Supabase SQL editor.
-- Grants 3 months of Premium to the first 50 users who sign up.
-- ────────────────────────────────────────────────────────────────────────────

-- 1. Add premium columns to profiles (safe to re-run)
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS is_early_adopter BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS premium_until     TIMESTAMPTZ;

-- 2. Force-update ALL current users to early adopter + 3 months premium
--    (bypasses RLS because this runs as postgres in the SQL editor)
UPDATE public.profiles
SET
  is_early_adopter = TRUE,
  premium_until    = NOW() + INTERVAL '3 months'
WHERE is_early_adopter = FALSE OR premium_until IS NULL;

-- 3. RPC: count how many early-adopter slots have been claimed (used by landing page counter)
CREATE OR REPLACE FUNCTION public.count_early_adopters()
RETURNS INTEGER
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::INTEGER FROM public.profiles WHERE is_early_adopter = TRUE;
$$;
GRANT EXECUTE ON FUNCTION public.count_early_adopters() TO anon, authenticated;

-- 4. Trigger function: auto-grant premium to the first 50 new sign-ups
CREATE OR REPLACE FUNCTION public.grant_early_adopter_premium()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO current_count FROM public.profiles WHERE is_early_adopter = TRUE;
  IF current_count < 50 THEN
    NEW.is_early_adopter := TRUE;
    NEW.premium_until    := NOW() + INTERVAL '3 months';
  END IF;
  RETURN NEW;
END;
$$;

-- 5. Attach trigger to profiles
DROP TRIGGER IF EXISTS trg_grant_early_adopter ON public.profiles;
CREATE TRIGGER trg_grant_early_adopter
  BEFORE INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.grant_early_adopter_premium();
