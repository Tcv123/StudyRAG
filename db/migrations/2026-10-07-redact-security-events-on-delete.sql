-- ═══════════════════════════════════════════════════════════════════════
-- Account deletion: clear the email left behind in security_events
--                                                            2026-10-07
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
--
-- security_events.email is a denormalised copy of the address, so that a
-- blocked privilege escalation still names someone after the account is
-- gone. The foreign key is ON DELETE SET NULL, which clears user_id and
-- leaves the email — so "delete my account" left the address behind, and
-- the privacy policy had to disclose it.
--
-- The event itself is worth keeping: it is the record of an attempt to
-- tamper with an account, and deleting it would hand anyone a way to erase
-- their own trail. So the row stays and the personal data goes. What is
-- left is the kind, severity, source and detail of what happened, with no
-- way back to a person.
--
-- Done inside purge_auth_when_inactive(), which already runs on the way to
-- deleting auth.users, so it covers the Settings button and any manual
-- deletion that goes through the same flag.
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION public.purge_auth_when_inactive()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Before the cascade nulls user_id and takes the reference with it.
  UPDATE public.security_events
     SET email = NULL
   WHERE user_id = NEW.id;

  -- The jsonb detail of a blocked escalation can carry the address too.
  UPDATE public.security_events
     SET detail = detail - 'email'
   WHERE user_id = NEW.id
     AND detail ? 'email';

  DELETE FROM auth.users WHERE id = NEW.id;
  RETURN NULL;
END;
$$;

-- Same trigger as before; recreated so a fresh database gets it either way.
DROP TRIGGER IF EXISTS trg_purge_auth_when_inactive ON public.profiles;
CREATE TRIGGER trg_purge_auth_when_inactive
  AFTER UPDATE OF deletion_requested_at ON public.profiles
  FOR EACH ROW
  WHEN (OLD.deletion_requested_at IS NULL AND NEW.deletion_requested_at IS NOT NULL)
  EXECUTE FUNCTION public.purge_auth_when_inactive();

-- Clean up addresses already orphaned by deletions before today.
UPDATE public.security_events
   SET email = NULL
 WHERE user_id IS NULL
   AND email IS NOT NULL;
