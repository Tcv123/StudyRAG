-- ═══════════════════════════════════════════════════════════════════════
-- is_pro_user(): count the six-month plan as Pro — 2026-09-21
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
-- Run this BEFORE Stripe payments go live.
--
-- The six-month price on pricing-app.html is written to profiles by
-- api/stripe-webhook.js as subscription_tier = 'pro_biannual'. The original
-- is_pro_user() in supabase-flashcards-migration.sql listed only
-- pro_monthly and pro_annual, so a customer paying £56.94 every six months
-- would have been refused everything gated on this function.
--
-- Now matches isPro() in nav-gating.js and pricing-app.html: any tier
-- other than 'free' counts, provided the status and expiry are live.
-- ═══════════════════════════════════════════════════════════════════════

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
      AND coalesce(subscription_tier, 'free') <> 'free'
      AND subscription_status IN ('active','trialing')
      AND (subscription_expires_at IS NULL OR subscription_expires_at > NOW())
  );
$$;
GRANT EXECUTE ON FUNCTION public.is_pro_user() TO authenticated;
