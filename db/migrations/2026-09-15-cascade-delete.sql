-- ═══════════════════════════════════════════════════════════════════════
-- Make account deletion actually delete — 2026-09-15
--
-- THE BUG. supabase-config.js documents four tables as
--     user_id UUID REFERENCES profiles(id) ON DELETE CASCADE
-- and the whole deletion design rests on that: request_account_deletion()
-- stamps profiles.deletion_requested_at, a trigger deletes the auth.users
-- row, profiles goes with it, and the cascade is expected to fan out.
--
-- Those four constraints are not on the live database. They never were.
-- Every other user-scoped table was created by a file in db/migrations/ and
-- has its foreign key; these four exist only as a comment someone ran by
-- hand, and the REFERENCES clause did not survive the trip.
--
-- Measured on 2026-09-14, deleting three profiles rows:
--     user_subjects  3 rows left behind
--     topic_progress 1
--     user_medals   17
-- The constraint is absent rather than misconfigured: NO ACTION would have
-- refused the parent delete, and SET NULL would have nulled user_id, after
-- which RLS (auth.uid() = user_id) would have stopped returning the rows.
-- They came back still keyed to their owner.
--
-- So a student who uses Settings -> Delete account keeps their subjects,
-- RAG progress and medals in the database indefinitely. For a product used
-- by under-18s in the UK that is a data-retention problem, not untidiness.
--
-- NOT IN SCOPE, deliberately:
--   user_attribution and setup_reminders reference auth.users(id) on delete
--   cascade, not profiles. They are already correct — they survived the test
--   above only because auth.users still existed at that point.
--   security_events references profiles on delete SET NULL on purpose, so an
--   incident log outlives the account it describes. Left alone.
--
-- ORDER MATTERS. Orphans are deleted first: adding a foreign key to a table
-- that already holds rows with no matching parent fails outright. The rows
-- removed are ones whose owner is already gone, which is precisely the data
-- that should have been removed when they left.
--
-- How to apply: paste into the Supabase SQL editor and Run. Idempotent.
-- ═══════════════════════════════════════════════════════════════════════

-- ── 1. Clear what the missing cascade already stranded ─────────────────
do $$
declare
  t        text;
  n        bigint;
  total    bigint := 0;
  targets  text[] := array['user_subjects','topic_progress','practice_attempts','user_medals'];
begin
  foreach t in array targets loop
    if to_regclass('public.' || t) is null then
      raise notice 'skip %  (table not present)', t;
      continue;
    end if;
    execute format(
      'delete from public.%I c where not exists (select 1 from public.profiles p where p.id = c.user_id)', t
    );
    get diagnostics n = row_count;
    total := total + n;
    raise notice 'orphans removed from %: %', t, n;
  end loop;
  raise notice 'total orphaned rows removed: %', total;
end $$;


-- ── 2. Add the constraint the comment always claimed was there ─────────
do $$
declare
  t       text;
  cname   text;
  targets text[] := array['user_subjects','topic_progress','practice_attempts','user_medals'];
begin
  foreach t in array targets loop
    if to_regclass('public.' || t) is null then continue; end if;

    -- Already constrained to profiles? Leave it exactly as it is.
    select con.conname into cname
      from pg_constraint con
      join pg_class     src on src.oid = con.conrelid
      join pg_class     tgt on tgt.oid = con.confrelid
      join pg_namespace ns  on ns.oid  = src.relnamespace
     where ns.nspname = 'public'
       and src.relname = t
       and tgt.relname = 'profiles'
       and con.contype = 'f'
     limit 1;

    if cname is not null then
      raise notice 'skip %  (already has %)', t, cname;
      continue;
    end if;

    execute format(
      'alter table public.%I
         add constraint %I foreign key (user_id)
         references public.profiles(id) on delete cascade',
      t, t || '_user_id_fkey'
    );
    raise notice 'cascade added on %', t;
  end loop;
end $$;


-- ── 3. Let owners delete their own medals ──────────────────────────────
-- Documented as FOR ALL, but a delete from a signed-in owner was accepted
-- and removed nothing, so the live policy is narrower than the comment.
-- Restated here so "Reset all progress" in Settings can do what it says.
drop policy if exists "own medals" on public.user_medals;
create policy "own medals" on public.user_medals
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);


-- ───────────────────────────────────────────────────────────────────────
-- Check your work. Every row should read 'CASCADE':
--
--   select src.relname   as child_table,
--          con.conname   as constraint_name,
--          case con.confdeltype when 'c' then 'CASCADE'
--                               when 'n' then 'SET NULL'
--                               when 'a' then 'NO ACTION'
--                               else con.confdeltype::text end as on_delete
--     from pg_constraint con
--     join pg_class     src on src.oid = con.conrelid
--     join pg_class     tgt on tgt.oid = con.confrelid
--     join pg_namespace ns  on ns.oid  = src.relnamespace
--    where ns.nspname = 'public'
--      and tgt.relname = 'profiles'
--      and con.contype = 'f'
--    order by 1;
--
-- Then the real test, with one throwaway account: sign up, add a subject,
-- sit a diagnostic, delete the account from Settings, and confirm nothing
-- is left in user_subjects, topic_progress, practice_attempts or
-- user_medals — and no auth.users row.
-- ───────────────────────────────────────────────────────────────────────
