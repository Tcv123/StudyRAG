-- ═══════════════════════════════════════════════════════════════════════
-- premium_users: every non-free account and how long it has left — 2026-09-21
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
--
-- A view, not a table: it reads profiles live, so it is always current and
-- there is nothing for the webhook to keep in sync. It appears in the
-- Supabase Table Editor under Views.
--
-- LOCKED DOWN ON PURPOSE. Supabase exposes everything in the public schema
-- through its API, and a plain view runs with its owner's rights, which
-- skip row-level security. Without the two guards below, any visitor to
-- the site could have listed every paying customer's name and email.
--   security_invoker = true  → profiles' own RLS applies to the reader
--   revoke from anon, authenticated → the API cannot read it at all
-- The Supabase dashboard and SQL editor still see every row.
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE VIEW public.premium_users
WITH (security_invoker = true) AS
SELECT
  id,
  email,
  first_name,
  last_name,
  subscription_tier,
  subscription_status,
  subscription_expires_at,
  CASE
    WHEN subscription_expires_at IS NULL THEN NULL
    ELSE greatest(0, ceil(extract(epoch FROM subscription_expires_at - NOW()) / 86400))::int
  END                                   AS days_left,
  stripe_customer_id,
  stripe_customer_id IS NULL            AS early_adopter_comp
FROM public.profiles
WHERE coalesce(subscription_tier, 'free') <> 'free'
ORDER BY subscription_expires_at NULLS LAST;

REVOKE ALL ON public.premium_users FROM anon, authenticated;
