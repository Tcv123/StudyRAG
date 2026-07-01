-- ── EARLY ADOPTER MIGRATION ────────────────────────────────────────────────
-- Run this in your Supabase SQL editor.
-- Grants 3 months of Premium to the first 50 users who sign up.
-- ────────────────────────────────────────────────────────────────────────────

-- 1. Add early adopter + premium columns (safe to re-run)
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS is_early_adopter       BOOLEAN   NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS premium_until          TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS subscription_tier      TEXT      DEFAULT 'free',
  ADD COLUMN IF NOT EXISTS subscription_status    TEXT      DEFAULT 'active',
  ADD COLUMN IF NOT EXISTS subscription_expires_at TIMESTAMPTZ;

-- 2. Force-update ALL current users to pro_monthly for 3 months
UPDATE public.profiles
SET
  is_early_adopter        = TRUE,
  premium_until           = NOW() + INTERVAL '3 months',
  subscription_tier       = 'pro_monthly',
  subscription_status     = 'active',
  subscription_expires_at = NOW() + INTERVAL '3 months';

-- 3. RPC: count early-adopter slots claimed (used by landing page live counter)
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

-- 4. Trigger: auto-grant pro to the first 50 new sign-ups
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
    NEW.is_early_adopter        := TRUE;
    NEW.premium_until           := NOW() + INTERVAL '3 months';
    NEW.subscription_tier       := 'pro_monthly';
    NEW.subscription_status     := 'active';
    NEW.subscription_expires_at := NOW() + INTERVAL '3 months';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_grant_early_adopter ON public.profiles;
CREATE TRIGGER trg_grant_early_adopter
  BEFORE INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.grant_early_adopter_premium();
