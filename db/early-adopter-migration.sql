-- ── EARLY ADOPTER MIGRATION ────────────────────────────────────────────────
-- Run this in your Supabase SQL editor.
-- Grants 1 month of Premium to the first 50 users who sign up.
-- ────────────────────────────────────────────────────────────────────────────

-- 1. Add premium columns to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS is_early_adopter BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS premium_until     TIMESTAMPTZ;

-- 2. RPC: count how many early-adopter slots have been claimed (public, no auth needed)
CREATE OR REPLACE FUNCTION public.count_early_adopters()
RETURNS INTEGER
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::INTEGER FROM public.profiles WHERE is_early_adopter = TRUE;
$$;
-- Allow unauthenticated visitors to call this (for the landing page counter)
GRANT EXECUTE ON FUNCTION public.count_early_adopters() TO anon, authenticated;

-- 3. Trigger function: auto-grant premium to the first 50 sign-ups
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

-- 4. Attach trigger to profiles (fires before each new row is inserted)
DROP TRIGGER IF EXISTS trg_grant_early_adopter ON public.profiles;
CREATE TRIGGER trg_grant_early_adopter
  BEFORE INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.grant_early_adopter_premium();

-- 5. Backfill: if you already have users, grant premium to the first 50
--    (ordered by created_at). Safe to run even on an empty table.
WITH first_fifty AS (
  SELECT id FROM public.profiles
  ORDER BY created_at ASC
  LIMIT 50
)
UPDATE public.profiles p
SET
  is_early_adopter = TRUE,
  premium_until    = COALESCE(p.premium_until, NOW() + INTERVAL '3 months')
FROM first_fifty f
WHERE p.id = f.id;
