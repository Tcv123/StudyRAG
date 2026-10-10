-- ═══════════════════════════════════════════════════════════════════════
-- Dismissing a signal on admin.html — 2026-10-10
--
-- Paste into the Supabase SQL editor. Idempotent — safe to re-run.
-- Apply BEFORE the admin.html change that calls it deploys. Without it the
-- page still loads every signal; the × just fails quietly and nothing hides.
--
-- WHY A TABLE. admin_security_signals() recomputes every row from live data
-- on each call, so there is no signal row to stamp "dismissed" on. This
-- table remembers which ones an admin waved off instead, keyed the same way
-- the page keys them: kind | user_id | detail. If the detail changes (the
-- tier moves, the count grows) the key no longer matches and the signal
-- comes back by itself — a dismissal covers what you saw, not what follows.
--
-- Shared by all admins: triage done on one device or by one admin shows up
-- for everyone. Rows go when the user they point at is deleted.
--
-- No RLS policies on purpose. The table is only reached through the two
-- SECURITY DEFINER functions below, which check is_admin() themselves.
-- ═══════════════════════════════════════════════════════════════════════

create table if not exists public.admin_dismissed_signals (
  signal_key    text primary key check (char_length(signal_key) <= 2000),
  kind          text not null,
  user_id       uuid references public.profiles(id) on delete cascade,
  dismissed_by  uuid,
  dismissed_at  timestamptz not null default now()
);

alter table public.admin_dismissed_signals enable row level security;
revoke all on table public.admin_dismissed_signals from public, anon, authenticated;


create or replace function public.admin_dismissed_signals()
returns table (signal_key text, dismissed_at timestamptz)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if not is_admin() then
    return;
  end if;

  return query
    select d.signal_key, d.dismissed_at
    from admin_dismissed_signals d;
end;
$$;

revoke all on function public.admin_dismissed_signals() from public, anon;
grant execute on function public.admin_dismissed_signals() to authenticated;


create or replace function public.admin_set_signal_dismissed(
  p_signal_key text,
  p_kind       text,
  p_user_id    uuid,
  p_dismissed  boolean
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not is_admin() then
    return false;
  end if;

  if p_dismissed then
    insert into admin_dismissed_signals (signal_key, kind, user_id, dismissed_by)
    values (left(p_signal_key, 2000), coalesce(p_kind, 'unknown'),
            -- A signal can name a user whose profile has since gone; store
            -- the dismissal without the link rather than failing the FK.
            (select p.id from profiles p where p.id = p_user_id),
            auth.uid())
    on conflict (signal_key) do update
      set dismissed_by = excluded.dismissed_by,
          dismissed_at = now();
  else
    delete from admin_dismissed_signals
     where signal_key = left(p_signal_key, 2000);
  end if;

  return true;
end;
$$;

revoke all on function public.admin_set_signal_dismissed(text, text, uuid, boolean) from public, anon;
grant execute on function public.admin_set_signal_dismissed(text, text, uuid, boolean) to authenticated;
