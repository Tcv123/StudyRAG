-- ═══════════════════════════════════════════════════════════════════════
-- Account deletion actually deletes the account (R-06) — 2026-10-10
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
-- Run after 2026-10-07-redact-security-events-on-delete.sql and
-- 2026-10-07-early-adopter-close-cleanly.sql.
--
-- supabase-config.js documents every user-scoped table as REFERENCES
-- profiles(id) ON DELETE CASCADE, and the deletion design rests on that.
-- The live tables have no such foreign keys at all, so "Delete account"
-- left subjects, RAG progress, medals and the attribution row in place —
-- and the auth.users row, email and all, was left behind with them.
--
-- Three parts:
--
--   1. Put the foreign keys in. Any existing foreign key on the same
--      column is replaced (so a NO ACTION or SET NULL one becomes CASCADE),
--      and rows whose owner is already gone are deleted first, because the
--      constraint cannot be added while they exist. Those rows are the
--      leftovers of accounts deleted before today.
--
--   2. request_account_deletion() deletes the auth.users row itself, for
--      auth.uid() only, instead of relying on a flag and a trigger. Every
--      table then cascades from it. Settings calls it unchanged.
--
--   3. A client can no longer DELETE its own profiles row directly. The
--      "own profile" policy is FOR ALL, so that was allowed, and it removed
--      the profile while leaving auth.users (and the email) in place.
--
-- RLS DELETE audit: user_medals and user_attribution have no DELETE
-- policy. Nothing in the app deletes from them, and deletion goes through
-- the SECURITY DEFINER function and the cascade, which RLS does not apply
-- to — so no policy is added. Giving students a way to wipe their own
-- attribution row would only make the referral numbers unreliable.
-- ═══════════════════════════════════════════════════════════════════════

-- 1. Foreign keys ─────────────────────────────────────────────────────────

-- Orphaned profiles are about to be deleted below. security_events keeps
-- the event and loses the email, as purge_auth_when_inactive() does.
update public.security_events se
   set email = null,
       detail = case when se.detail ? 'email' then se.detail - 'email' else se.detail end
 where se.user_id in (
   select p.id from public.profiles p
    where not exists (select 1 from auth.users u where u.id = p.id)
 );

-- The grant ledger keeps its row (the spot stays used) but not the address.
update public.early_adopter_grants g
   set email = null
 where g.email is not null
   and not exists (select 1 from auth.users u where u.id = g.user_id);

do $$
declare
  r       record;
  c       record;
  removed bigint;
begin
  -- Parents before children: profiles first, classes before class_members,
  -- user_decks before user_flashcards. A table that does not exist on this
  -- database is skipped with a notice.
  for r in
    select * from (values
      (1,  'profiles',                 'id',         'auth.users'),
      (2,  'user_subjects',            'user_id',    'public.profiles'),
      (3,  'topic_progress',           'user_id',    'public.profiles'),
      (4,  'practice_attempts',        'user_id',    'public.profiles'),
      (5,  'user_medals',              'user_id',    'public.profiles'),
      (6,  'revision_sessions',        'user_id',    'public.profiles'),
      (7,  'user_decks',               'user_id',    'public.profiles'),
      (8,  'user_flashcards',          'deck_id',    'public.user_decks'),
      (9,  'user_card_state',          'user_id',    'public.profiles'),
      (10, 'classes',                  'teacher_id', 'public.profiles'),
      (11, 'class_members',            'class_id',   'public.classes'),
      (12, 'class_members',            'student_id', 'public.profiles'),
      (13, 'teacher_subjects',         'teacher_id', 'public.profiles'),
      (14, 'class_join_attempts',      'student_id', 'public.profiles'),
      (15, 'user_attribution',         'user_id',    'auth.users'),
      (16, 'setup_reminders',          'user_id',    'auth.users'),
      (17, 'premium_expiry_reminders', 'user_id',    'auth.users')
    ) as t(ord, tbl, col, parent)
    order by ord
  loop
    if to_regclass('public.' || r.tbl) is null then
      raise notice 'skipped %: table does not exist', r.tbl;
      continue;
    end if;

    -- A row whose owner has no profile is not necessarily a deleted
    -- account's leftover: 14 real users once signed up without a profile
    -- (db/fix-missing-profiles.sql), and their rows look identical. So for
    -- tables hanging off profiles, only delete when the owner is gone from
    -- auth.users too. The ambiguous rows stay, and the constraint below is
    -- added NOT VALID so they do not block it; see the review at the end.
    execute format(
      'delete from public.%I x where x.%I is not null
         and not exists (select 1 from %s p where p.id = x.%I)'
      || case when r.parent = 'public.profiles'
              then ' and not exists (select 1 from auth.users u where u.id = x.%I)'
              else '' end,
      r.tbl, r.col, r.parent, r.col, r.col);
    get diagnostics removed = row_count;
    raise notice '%.%: removed % orphaned rows', r.tbl, r.col, removed;

    for c in
      select con.conname
        from pg_constraint con
        join pg_attribute att
          on att.attrelid = con.conrelid and att.attname = r.col
       where con.conrelid = ('public.' || r.tbl)::regclass
         and con.contype = 'f'
         and con.conkey = array[att.attnum]
    loop
      execute format('alter table public.%I drop constraint %I', r.tbl, c.conname);
    end loop;

    -- NOT VALID: enforced, and cascading, for every row from now on, but
    -- existing rows are not checked. Then validate where that succeeds.
    execute format(
      'alter table public.%I add constraint %I
         foreign key (%I) references %s(id) on delete cascade not valid',
      r.tbl, r.tbl || '_' || r.col || '_fkey', r.col, r.parent);
    begin
      execute format('alter table public.%I validate constraint %I',
        r.tbl, r.tbl || '_' || r.col || '_fkey');
    exception when foreign_key_violation then
      raise notice '%.%: left NOT VALID — rows owned by users with no profile remain (see review below)', r.tbl, r.col;
    end;
  end loop;
end $$;

-- 2. Deletion ─────────────────────────────────────────────────────────────

-- Same name and signature Settings already calls. Deletes auth.users for
-- the caller and nobody else; the cascade from part 1 takes the rest.
-- deletion_requested_at and the purge trigger stay for a deletion done by
-- hand (setting the flag from the dashboard), but are no longer the path
-- the button takes.
create or replace function public.request_account_deletion()
returns timestamptz
language plpgsql
security definer
set search_path = public
as $fn$
declare
  uid uuid := auth.uid();
  ts  timestamptz := now();
begin
  if uid is null then
    raise exception 'not signed in';
  end if;

  -- Before the cascade nulls user_id and takes the reference with it.
  update public.security_events set email = null where user_id = uid;
  update public.security_events set detail = detail - 'email'
   where user_id = uid and detail ? 'email';

  -- The ledger row stays so the spot stays used (G-07); the email goes.
  update public.early_adopter_grants set email = null where user_id = uid;

  delete from auth.users where id = uid;
  -- Belt and braces, in case profiles is ever without its foreign key again.
  delete from public.profiles where id = uid;

  return ts;
end;
$fn$;
revoke all on function public.request_account_deletion() from public, anon;
grant execute on function public.request_account_deletion() to authenticated;

-- The manual path, given the same email handling for the grant ledger.
create or replace function public.purge_auth_when_inactive()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  update public.security_events set email = null where user_id = new.id;
  update public.security_events set detail = detail - 'email'
   where user_id = new.id and detail ? 'email';
  update public.early_adopter_grants set email = null where user_id = new.id;
  delete from auth.users where id = new.id;
  return null;
end;
$fn$;

drop trigger if exists trg_purge_auth_when_inactive on public.profiles;
create trigger trg_purge_auth_when_inactive
  after update of deletion_requested_at on public.profiles
  for each row
  when (old.deletion_requested_at is null and new.deletion_requested_at is not null)
  execute function public.purge_auth_when_inactive();

-- 3. No direct profile deletes ────────────────────────────────────────────

-- Restrictive, so it narrows "own profile" rather than competing with it.
-- The cascade from auth.users and the SECURITY DEFINER functions are not
-- subject to RLS, so account deletion is unaffected.
drop policy if exists "no direct profile delete" on public.profiles;
create policy "no direct profile delete" on public.profiles
  as restrictive
  for delete
  to anon, authenticated
  using (false);

-- ── Check ────────────────────────────────────────────────────────────────
-- Every row should say CASCADE:
--
-- select conrelid::regclass as tbl, conname,
--        case confdeltype when 'c' then 'CASCADE' when 'n' then 'SET NULL'
--             when 'a' then 'NO ACTION' when 'r' then 'RESTRICT' end as on_delete
--   from pg_constraint
--  where contype = 'f' and conname like '%\_fkey' and connamespace = 'public'::regnamespace
--  order by 1;
--
-- ── Accounts deleted before today ────────────────────────────────────────
-- Their profile went and their auth.users row (with the email) stayed.
-- They cannot be told apart automatically from a sign-up whose profile was
-- never created (see db/fix-missing-profiles.sql), so review before
-- deleting:
--
-- select u.id, u.email, u.created_at, u.last_sign_in_at
--   from auth.users u
--  where not exists (select 1 from public.profiles p where p.id = u.id)
--  order by u.created_at;
--
-- For an id you have confirmed was a deleted account, its leftover rows in
-- the tables that hang off profiles are not reached by that cascade (there
-- is no profile to cascade from), so remove them as well:
--
-- delete from public.user_subjects     where user_id in ( ...ids... );
-- delete from public.topic_progress    where user_id in ( ...ids... );
-- delete from public.practice_attempts where user_id in ( ...ids... );
-- delete from public.user_medals       where user_id in ( ...ids... );
-- delete from public.revision_sessions where user_id in ( ...ids... );
-- delete from public.user_decks        where user_id in ( ...ids... );
-- delete from public.user_card_state   where user_id in ( ...ids... );
-- delete from auth.users where id in ( ...ids... );
--
-- An id that turns out to be a real user missing a profile: run
-- db/fix-missing-profiles.sql for them instead. Once every such id is dealt
-- with, the check above lists any constraint still NOT VALID
-- (convalidated = false), and `alter table ... validate constraint ...`
-- finishes it.
