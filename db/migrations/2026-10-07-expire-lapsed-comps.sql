-- ═══════════════════════════════════════════════════════════════════════
-- Lapsed early-adopter comps: move them to free — 2026-10-07
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
--
-- The grant sets subscription_tier = 'pro_monthly' with an expiry date, and
-- nothing ever sets it back. Access does end on the right day, because every
-- isPro() test in the app also checks subscription_expires_at — but the tier
-- column keeps saying pro_monthly for ever. From December that would leave
-- the premium_users view listing 138 "subscribers" who are not subscribed to
-- anything, which is the sort of number that gets read out loud before
-- anyone checks how it was counted.
--
-- Only touches comps: is_early_adopter with no Stripe customer behind them.
-- A comp who went on to subscribe has a stripe_customer_id, and their tier
-- belongs to the webhook.
--
-- is_early_adopter stays true. It is a fact about how they joined, it drives
-- the Dashboard banner, and the grants ledger counts spots either way.
-- ═══════════════════════════════════════════════════════════════════════

create or replace function public.expire_lapsed_comps()
returns integer
language plpgsql
security definer
set search_path = public
as $fn$
declare
  changed integer;
begin
  update public.profiles
     set subscription_tier   = 'free',
         subscription_status = 'canceled'
   where is_early_adopter
     and stripe_customer_id is null
     and premium_until is not null
     and premium_until <= now()
     and coalesce(subscription_tier, 'free') <> 'free';

  get diagnostics changed = row_count;
  return changed;
end;
$fn$;

revoke all on function public.expire_lapsed_comps() from public, anon, authenticated;
grant execute on function public.expire_lapsed_comps() to service_role;

-- Catch anything already lapsed. Expect 0 today — the comps run to December.
select public.expire_lapsed_comps() as rows_expired;
