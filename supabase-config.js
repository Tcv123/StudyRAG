/*
 * ── SUPABASE CONFIGURATION ──────────────────────────────────────────────
 *
 * IMPORTANT — run this SQL in your Supabase SQL editor before using the app:
 *
 *   -- 1. Profiles table
 *   CREATE TABLE IF NOT EXISTS profiles (
 *     id             UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
 *     first_name     TEXT,
 *     last_name      TEXT,
 *     email          TEXT,
 *     level          TEXT CHECK (level IN ('gcse','as','a-level')),
 *     avatar_url     TEXT,
 *     setup_complete BOOLEAN DEFAULT FALSE,
 *     created_at     TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own profile" ON profiles FOR ALL USING (auth.uid() = id);
 *
 *   -- If the profiles table already exists, add the avatar column:
 *   ALTER TABLE profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;
 *
 *   -- Counter behind the Hat Trick / Flawless medals (3 and 10 perfect
 *   -- diagnostics). user_medals is a set, so it can't count repeats.
 *   -- See db/migrations/2026-09-03-medal-fixes.sql
 *   ALTER TABLE profiles ADD COLUMN IF NOT EXISTS perfect_diagnostics INTEGER NOT NULL DEFAULT 0;
 *
 *   -- 1b. Avatars storage bucket (run this in the SQL editor too)
 *   INSERT INTO storage.buckets (id, name, public)
 *     VALUES ('avatars', 'avatars', true)
 *     ON CONFLICT (id) DO NOTHING;
 *
 *   -- Storage policies: anyone can read, only the owner can write their own file
 *   CREATE POLICY "avatars are publicly readable"
 *     ON storage.objects FOR SELECT
 *     USING (bucket_id = 'avatars');
 *   CREATE POLICY "users can upload their own avatar"
 *     ON storage.objects FOR INSERT
 *     WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
 *   CREATE POLICY "users can update their own avatar"
 *     ON storage.objects FOR UPDATE
 *     USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
 *   CREATE POLICY "users can delete their own avatar"
 *     ON storage.objects FOR DELETE
 *     USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
 *
 *   -- 2. Subjects table
 *   CREATE TABLE IF NOT EXISTS user_subjects (
 *     id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     user_id       UUID REFERENCES profiles(id) ON DELETE CASCADE,
 *     subject       TEXT NOT NULL,
 *     exam_board    TEXT NOT NULL,
 *     emoji         TEXT DEFAULT '📚',
 *     rag_status    TEXT DEFAULT 'pending',
 *     current_grade TEXT,
 *     target_grade  TEXT,
 *     created_at    TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE user_subjects ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own subjects" ON user_subjects FOR ALL USING (auth.uid() = user_id);
 *
 *   -- If user_subjects already exists, add the grade columns:
 *   ALTER TABLE user_subjects ADD COLUMN IF NOT EXISTS current_grade TEXT;
 *   ALTER TABLE user_subjects ADD COLUMN IF NOT EXISTS target_grade  TEXT;
 *
 *   -- 3. Topic progress table
 *   CREATE TABLE IF NOT EXISTS topic_progress (
 *     id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     user_id    UUID REFERENCES profiles(id) ON DELETE CASCADE,
 *     subject    TEXT NOT NULL,
 *     exam_board TEXT NOT NULL,
 *     topic      TEXT NOT NULL,
 *     rag_status TEXT NOT NULL CHECK (rag_status IN ('green','amber','red')),
 *     updated_at TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE topic_progress ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own progress" ON topic_progress FOR ALL USING (auth.uid() = user_id);
 *
 *   -- 3b. Practice attempts (past tests history)
 *   CREATE TABLE IF NOT EXISTS practice_attempts (
 *     id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     user_id       UUID REFERENCES profiles(id) ON DELETE CASCADE,
 *     subject       TEXT NOT NULL,
 *     exam_board    TEXT NOT NULL,
 *     topic         TEXT NOT NULL,
 *     topic_name    TEXT,
 *     earned        INTEGER NOT NULL,
 *     total_marks   INTEGER NOT NULL,
 *     pct           INTEGER NOT NULL,
 *     questions     INTEGER NOT NULL,
 *     answered      INTEGER NOT NULL,
 *     time_used_sec INTEGER NOT NULL,
 *     timed_out     BOOLEAN DEFAULT FALSE,
 *     taken_at      TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE practice_attempts ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own attempts" ON practice_attempts FOR ALL USING (auth.uid() = user_id);
 *   CREATE INDEX IF NOT EXISTS idx_practice_attempts_user_subject
 *     ON practice_attempts (user_id, subject, exam_board, taken_at DESC);
 *
 *   -- 4. Medals table
 *   CREATE TABLE IF NOT EXISTS user_medals (
 *     id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     user_id    UUID REFERENCES profiles(id) ON DELETE CASCADE,
 *     medal_id   TEXT NOT NULL,
 *     created_at TIMESTAMPTZ DEFAULT NOW(),   -- named earned_at in older drafts; live column is created_at
 *     UNIQUE (user_id, medal_id)
 *   );
 *   ALTER TABLE user_medals ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "own medals" ON user_medals FOR ALL USING (auth.uid() = user_id);
 *
 *   -- 5. Self-service account deletion (immediate).
 *   -- Clicking "Delete account" calls request_account_deletion(), which
 *   -- deletes the caller's auth.users row; ON DELETE CASCADE fans out to
 *   -- every user-scoped table so nothing is left behind.
 *   --
 *   -- NOTE: the live database was built without the REFERENCES ... ON DELETE
 *   -- CASCADE clauses shown above, so deletion left every row (and the
 *   -- auth.users email) behind. The current request_account_deletion(), the
 *   -- foreign keys, and a policy stopping direct profile deletes are in
 *   -- db/migrations/2026-10-10-account-deletion-cascade.sql — that file, not
 *   -- 5b/5c below, is the source of truth.
 *
 *   -- 5a. Flag column + generated boolean mirror for easy filtering in the dashboard.
 *   -- account_active = TRUE while deletion_requested_at IS NULL; flips to FALSE the
 *   -- moment deletion is requested (and only stays FALSE for microseconds before the
 *   -- trigger cascades the row away).
 *   ALTER TABLE profiles ADD COLUMN IF NOT EXISTS deletion_requested_at TIMESTAMPTZ;
 *   ALTER TABLE profiles
 *     ADD COLUMN IF NOT EXISTS account_active BOOLEAN
 *     GENERATED ALWAYS AS (deletion_requested_at IS NULL) STORED;
 *
 *   -- 5b. RPC the client calls to schedule deletion. SECURITY DEFINER is safe
 *   -- because the UPDATE is pinned to auth.uid().
 *   CREATE OR REPLACE FUNCTION public.request_account_deletion()
 *   RETURNS TIMESTAMPTZ
 *   LANGUAGE plpgsql
 *   SECURITY DEFINER
 *   SET search_path = public
 *   AS $$
 *   DECLARE
 *     ts TIMESTAMPTZ := now();
 *   BEGIN
 *     UPDATE public.profiles
 *        SET deletion_requested_at = COALESCE(deletion_requested_at, ts)
 *      WHERE id = auth.uid();
 *     RETURN (SELECT deletion_requested_at FROM public.profiles WHERE id = auth.uid());
 *   END;
 *   $$;
 *   REVOKE ALL ON FUNCTION public.request_account_deletion() FROM PUBLIC, anon;
 *   GRANT EXECUTE ON FUNCTION public.request_account_deletion() TO authenticated;
 *
 *   -- 5c. Trigger: the moment deletion_requested_at transitions from NULL to a
 *   -- timestamp, delete the auth.users row. The CASCADE foreign keys on profiles,
 *   -- user_subjects, topic_progress, practice_attempts, and user_medals then wipe
 *   -- every trace of the account in the same transaction.
 *   CREATE OR REPLACE FUNCTION public.purge_auth_when_inactive()
 *   RETURNS TRIGGER
 *   LANGUAGE plpgsql
 *   SECURITY DEFINER
 *   SET search_path = public
 *   AS $$
 *   BEGIN
 *     -- security_events survives the cascade (ON DELETE SET NULL) because the
 *     -- record of a blocked escalation outlives the account it was aimed at.
 *     -- Its denormalised email must not. See
 *     -- db/migrations/2026-10-07-redact-security-events-on-delete.sql.
 *     UPDATE public.security_events SET email = NULL WHERE user_id = NEW.id;
 *     UPDATE public.security_events SET detail = detail - 'email'
 *      WHERE user_id = NEW.id AND detail ? 'email';
 *     DELETE FROM auth.users WHERE id = NEW.id;
 *     RETURN NULL;
 *   END;
 *   $$;
 *   DROP TRIGGER IF EXISTS trg_purge_auth_when_inactive ON public.profiles;
 *   CREATE TRIGGER trg_purge_auth_when_inactive
 *     AFTER UPDATE OF deletion_requested_at ON public.profiles
 *     FOR EACH ROW
 *     WHEN (OLD.deletion_requested_at IS NULL AND NEW.deletion_requested_at IS NOT NULL)
 *     EXECUTE FUNCTION public.purge_auth_when_inactive();
 *
 *   -- 5d. If you previously ran the pg_cron version, unschedule it — the trigger
 *   -- supersedes it. Safe to run even if the job was never created.
 *   -- SELECT cron.unschedule('purge-deleted-accounts');
 *
 * IMPORTANT — enable email confirmation:
 *   Supabase dashboard → Authentication → Providers → Email
 *   → turn ON "Confirm email"
 *   Also set Site URL + Redirect URLs under Authentication → URL Configuration
 *   so the confirmation email link points back to your app.
 *
 * ────────────────────────────────────────────────────────────────────────
 */

const SUPABASE_URL     = "https://tfpnagnjnzmlgbnqeiwr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcG5hZ25qbnptbGdibnFlaXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNjc0OTMsImV4cCI6MjA4OTg0MzQ5M30.OFGP03V0r68LMFb2N3oZTSohp3ARK78b2_1PunRLV8k";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─────────────────────────────────────────────────────────────────────────────
// topic_progress level compatibility layer
//
// WHY: topic_progress rows are identified by (user_id, subject, exam_board,
// topic) with no level, so a student moving GCSE -> A-Level on the same
// subject+board hits the same row and their GCSE result is overwritten.
// 11 subject+board pairs exist at both levels (CS OCR, CS AQA, Maths OCR,
// Biology AQA/OCR A/OCR B, Physics AQA/Edexcel/OCR A/OCR B, Geography Eduqas).
//
// WHAT: this transparently scopes every topic_progress query by level:
//   - reads/updates/deletes get .eq('level', <current level>)
//   - inserts/upserts get level added to the payload
//
// It is deliberately tolerant of the column not existing yet. It probes once
// per page load and becomes a no-op if topic_progress has no `level` column,
// so it is safe to deploy BEFORE the migration is run and needs no follow-up
// change after. Once the column exists it starts scoping automatically.
//
// Queries filtered by primary key (.eq('id', ...)) are left alone — they are
// already unique.
//
// Migration: migrations/2026-09-11_topic_progress_level.sql
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  var TABLE = 'topic_progress';
  var probe = null;

  function currentLevel() { return window.levelSuffix(); }

  // Does topic_progress have a `level` column? Probed once, cached for the page.
  function hasLevelColumn(client) {
    if (!probe) {
      probe = Promise.resolve(
        client.__rawFrom(TABLE).select('level').limit(1)
      ).then(function (res) {
        return !(res && res.error);
      }).catch(function () {
        return false;
      });
    }
    return probe;
  }

  // cached_level is only written once a page has loaded the profile (the
  // Dashboard does it after its first batch of queries). On a fresh browser
  // there is no cache yet, so an A-Level student's first topic_progress query
  // ran as GCSE — empty progress, and writes tagged with the wrong level. A
  // second account on the same browser inherited the first one's level the
  // same way. So read the signed-in user's level from their profile once per
  // page, before the first scoped query, and refresh the cache from it.
  var levelSync = null;
  function syncLevel(client) {
    if (!levelSync) {
      levelSync = Promise.resolve(client.auth.getSession()).then(function (res) {
        var user = res && res.data && res.data.session && res.data.session.user;
        if (!user) return;
        return Promise.resolve(
          client.__rawFrom('profiles').select('level').eq('id', user.id).maybeSingle()
        ).then(function (p) {
          var lvl = p && p.data && p.data.level;
          if (lvl) { try { localStorage.setItem('cached_level', lvl); } catch (e) {} }
        });
      }).catch(function () { /* keep whatever is cached */ });
    }
    return levelSync;
  }

  function ready(client) {
    return Promise.all([hasLevelColumn(client), syncLevel(client)])
      .then(function (r) { return r[0]; });
  }

  function withLevel(payload, lvl) {
    if (Array.isArray(payload)) {
      return payload.map(function (r) { return withLevel(r, lvl); });
    }
    if (payload && typeof payload === 'object' && payload.level === undefined) {
      var copy = {};
      for (var k in payload) if (Object.prototype.hasOwnProperty.call(payload, k)) copy[k] = payload[k];
      copy.level = lvl;
      return copy;
    }
    return payload;
  }

  // Wrap a PostgrestFilterBuilder so the level filter is appended lazily, at
  // execution time — after all the caller's own .eq() calls have been made.
  function wrapFilter(builder, client, state) {
    return new Proxy(builder, {
      get: function (target, prop, recv) {
        var value = Reflect.get(target, prop, recv);

        if (prop === 'then') {
          return function (onOk, onErr) {
            return ready(client).then(function (ok) {
              var q = target;
              if (ok && !state.hasLevelFilter && !state.byPrimaryKey) {
                q = target.eq('level', currentLevel());
                state.hasLevelFilter = true;
              }
              return q.then(onOk, onErr);
            }, onErr);
          };
        }

        if (typeof value === 'function') {
          return function () {
            if (prop === 'eq') {
              if (arguments[0] === 'id') state.byPrimaryKey = true;
              if (arguments[0] === 'level') state.hasLevelFilter = true;
            }
            if (prop === 'in' && arguments[0] === 'id') state.byPrimaryKey = true;
            var out = value.apply(target, arguments);
            // .eq/.order/.limit return the same builder; .single()/.maybeSingle()
            // return a thenable too — keep wrapping so `then` stays intercepted.
            if (out && typeof out === 'object' && typeof out.then === 'function') {
              return wrapFilter(out, client, state);
            }
            return out;
          };
        }
        return value;
      }
    });
  }

  function wrapQueryBuilder(qb, client) {
    return new Proxy(qb, {
      get: function (target, prop, recv) {
        var value = Reflect.get(target, prop, recv);
        if (typeof value !== 'function') return value;

        // Writes: the payload must carry the level, and it has to be decided
        // before the request is built — so defer the whole call until the probe
        // resolves. Nothing in the app chains .select() onto a write, so a
        // plain thenable is enough here.
        if (prop === 'insert' || prop === 'upsert') {
          return function () {
            var args = Array.prototype.slice.call(arguments);
            return {
              then: function (onOk, onErr) {
                return ready(client).then(function (ok) {
                  if (ok) args[0] = withLevel(args[0], currentLevel());
                  return Promise.resolve(value.apply(target, args)).then(onOk, onErr);
                }, onErr);
              },
              catch: function (onErr) { return this.then(undefined, onErr); }
            };
          };
        }

        // Reads and scoped writes: filters are appended lazily by wrapFilter.
        if (prop === 'select' || prop === 'update' || prop === 'delete') {
          return function () {
            var out = value.apply(target, arguments);
            return wrapFilter(out, client, { hasLevelFilter: false, byPrimaryKey: false });
          };
        }

        return function () { return value.apply(target, arguments); };
      }
    });
  }

  if (typeof supabaseClient !== 'undefined' && supabaseClient && !supabaseClient.__rawFrom) {
    supabaseClient.__rawFrom = supabaseClient.from.bind(supabaseClient);
    supabaseClient.from = function (table) {
      var qb = supabaseClient.__rawFrom(table);
      return table === TABLE ? wrapQueryBuilder(qb, supabaseClient) : qb;
    };
  }
})();

// ─────────────────────────────────────────────────────────────────────────────
// Per-user localStorage scoping
//
// Several caches in localStorage belong to whoever is signed in. On a shared
// computer the next account would otherwise inherit them (a GCSE level, a Pro
// unlock, someone else's half-finished paper). Two pieces:
//
//   1. Paper attempts are keyed `paperAttempt.<uid>.<paperId>`. Old builds
//      wrote `paperAttempt.<paperId>` with no owner. Those legacy keys are
//      moved to the current user ONLY when this browser has never seen a
//      second account (`rag_multi_user` unset) and `rag_last_uid` is either
//      absent or this same user. Otherwise there is no way to know whose they
//      are, so they are left unread rather than handed to the wrong person.
//
//   2. A single SIGNED_OUT handler clears the signed-out user's caches
//      (but not their paper attempts, which exist nowhere else).
//
// Every localStorage access is wrapped: private-browsing / blocked-storage
// modes throw on access.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  var PAPER_PREFIX = 'paperAttempt.';
  // Clearly user-scoped keys (grep of localStorage.setItem across the repo).
  // Device preferences (dark_mode, study_goal, ms_pick*) are deliberately kept.
  var USER_KEYS = [
    'cached_level', 'cached_account_type',
    'rag_is_pro', 'rag_pro_expires_at',
    'rag_is_admin', 'rag_is_admin_expires_at',
    // study-tracker.js counters — left in place they would credit today's
    // minutes (and streak) to the next account to sign in.
    'study_date', 'study_seconds', 'streak_marked', 'streak_writing_at', 'study_daily_log'
  ];

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function lsKeys() {
    var out = [];
    try { for (var i = 0; i < localStorage.length; i++) out.push(localStorage.key(i)); } catch (e) {}
    return out;
  }

  window.paperAttemptKey = function (uid, paperId) {
    return PAPER_PREFIX + uid + '.' + paperId;
  };

  // Legacy un-namespaced key: `paperAttempt.<paperId>` where the remainder is
  // not `<uid>.<…>`. uids are UUIDs (or 'demo'), paper ids never are.
  var UUID_DOT = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\./i;
  function isLegacyPaperKey(k) {
    if (!k || k.indexOf(PAPER_PREFIX) !== 0) return false;
    var rest = k.slice(PAPER_PREFIX.length);
    return !UUID_DOT.test(rest) && rest.indexOf('demo.') !== 0;
  }

  var migrated = {};
  // Record who is signed in and, once, adopt legacy paper attempts for them
  // if it is safe to (see header). Idempotent; call before reading attempts.
  window.claimLegacyPaperAttempts = function (uid) {
    if (!uid || uid === 'demo' || migrated[uid]) return;
    migrated[uid] = true;
    var last = lsGet('rag_last_uid');
    if (last && last !== uid) lsSet('rag_multi_user', '1');
    var safe = !lsGet('rag_multi_user') && (!last || last === uid);
    lsSet('rag_last_uid', uid);
    if (!safe) return;
    lsKeys().filter(isLegacyPaperKey).forEach(function (k) {
      var v = lsGet(k);
      var target = window.paperAttemptKey(uid, k.slice(PAPER_PREFIX.length));
      if (v != null && lsGet(target) == null) lsSet(target, v);
      lsDel(k);
    });
  };

  if (typeof supabaseClient === 'undefined' || !supabaseClient || !supabaseClient.auth) return;

  var currentUid = null;
  supabaseClient.auth.onAuthStateChange(function (event, session) {
    var uid = session && session.user && session.user.id;
    if (uid) {
      if (uid !== currentUid) window.claimLegacyPaperAttempts(uid);
      currentUid = uid;
      return;
    }
    if (event !== 'SIGNED_OUT') return;
    // Kept synchronous: logout handlers navigate away as soon as signOut()
    // resolves, and supabase-js awaits subscribers before resolving.
    // Paper attempts are NOT cleared: they live only on this device, and the
    // uid in their key already hides them from any other account.
    USER_KEYS.forEach(lsDel);
    currentUid = null;
    // rag_last_uid / rag_multi_user stay: they record that this browser has
    // been used by more than one account, which the legacy migration needs.
  });
})();
