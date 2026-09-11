-- ── BUMP EARLY ADOPTER LIMIT: 100 → 150 ────────────────────────────────────
-- Paste this whole block into the Supabase SQL editor and run it once.
-- (Use the Supabase editor, not a client that splits on ';' — the function
--  body between the $fn$ markers contains semicolons.)
-- Replaces the trigger function only; the trigger itself is unchanged.
-- ───────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.grant_early_adopter_premium()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $fn$
DECLARE
  current_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO current_count FROM public.profiles;
  IF current_count < 150 THEN
    NEW.is_early_adopter        := TRUE;
    NEW.premium_until           := NOW() + INTERVAL '3 months';
    NEW.subscription_tier       := 'pro_monthly';
    NEW.subscription_status     := 'active';
    NEW.subscription_expires_at := NOW() + INTERVAL '3 months';
  END IF;
  RETURN NEW;
END;
$fn$;
