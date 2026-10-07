-- ═══════════════════════════════════════════════════════════════════════
-- Early adopter offer: count grants, not live profiles — 2026-10-07
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
--
-- The offer stands: the first 150 sign-ups get 3 months of Pro, as the
-- homepage banner says. What changes is how the trigger decides whether a
-- spot is left.
--
-- IT COUNTED LIVE PROFILES. `SELECT COUNT(*) FROM profiles` falls when
-- someone deletes their account, so a deletion handed the next sign-up a
-- free spot that had already been given away. With self-service deletion
-- live, 150 was a ceiling the offer could drift above indefinitely, and
-- the "spots left" counter on the homepage drifted with it.
--
-- Now every grant is recorded in early_adopter_grants, which nothing
-- deletes. 150 grants means 150 grants, whatever happens to the accounts
-- afterwards, and the counter means what it says.
--
-- TO CLOSE THE OFFER EARLY, at launch or any other time:
--   DROP TRIGGER IF EXISTS trg_grant_early_adopter ON public.profiles;
-- Existing comps are unaffected — they live in profiles.premium_until.
-- ═══════════════════════════════════════════════════════════════════════

-- 1. The ledger. One row per grant, never deleted. No foreign key to
--    profiles on purpose: the record of a spot being used must outlive the
--    account that used it.
CREATE TABLE IF NOT EXISTS public.early_adopter_grants (
  id          BIGSERIAL PRIMARY KEY,
  user_id     UUID        NOT NULL,
  email       TEXT,
  granted_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS early_adopter_grants_user_idx
  ON public.early_adopter_grants (user_id);

ALTER TABLE public.early_adopter_grants ENABLE ROW LEVEL SECURITY;
-- No policy: nobody reaches it through the API. The trigger is SECURITY
-- DEFINER and the count is served by the RPC below.
REVOKE ALL ON public.early_adopter_grants FROM anon, authenticated;

-- 2. Backfill the grants already made, so today's count is not reset to
--    zero and the next 28 sign-ups do not get a second helping of spots.
INSERT INTO public.early_adopter_grants (user_id, email, granted_at)
SELECT id, email, COALESCE(premium_until - INTERVAL '3 months', created_at, NOW())
  FROM public.profiles
 WHERE is_early_adopter
ON CONFLICT (user_id) DO NOTHING;

-- 3. The trigger, counting the ledger.
CREATE OR REPLACE FUNCTION public.grant_early_adopter_premium()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $fn$
DECLARE
  granted INTEGER;
BEGIN
  SELECT COUNT(*) INTO granted FROM public.early_adopter_grants;

  IF granted < 150 THEN
    NEW.is_early_adopter        := TRUE;
    NEW.premium_until           := NOW() + INTERVAL '3 months';
    NEW.subscription_tier       := 'pro_monthly';
    NEW.subscription_status     := 'active';
    NEW.subscription_expires_at := NOW() + INTERVAL '3 months';

    INSERT INTO public.early_adopter_grants (user_id, email)
    VALUES (NEW.id, NEW.email)
    ON CONFLICT (user_id) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$fn$;

-- Trigger unchanged, recreated so a fresh database gets it either way.
-- Name still sorts after trg_aa_guard_profile_insert, which must run first.
DROP TRIGGER IF EXISTS trg_grant_early_adopter ON public.profiles;
CREATE TRIGGER trg_grant_early_adopter
  BEFORE INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.grant_early_adopter_premium();

-- 4. The homepage counter reads this. It used to count profiles, which is
--    why the banner could say "28 spots left" on a day when 150 had already
--    been given away.
CREATE OR REPLACE FUNCTION public.count_early_adopters()
RETURNS INTEGER
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::INTEGER FROM public.early_adopter_grants;
$$;
GRANT EXECUTE ON FUNCTION public.count_early_adopters() TO anon, authenticated;
