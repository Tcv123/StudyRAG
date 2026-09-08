/* ═══════════════════════════════════════
   TEACHER SUBJECT SYNC
   ────────────────────────────────────────
   Keeps a teacher's user_subjects rows in step with the classes they own.

   Notes, Practice and Breakdown all build themselves from user_subjects.
   Teachers never go through auth/setup.html, so they have none, and those
   three pages would each greet them with "No subjects added yet".

   The alternative was forking all three pages to read from a teacher-only
   source. This is much less invasive: a teacher's subjects ARE the subjects
   they teach, so derive them from their classes and let every existing page
   work untouched. Deriving from classes (rather than asking at onboarding)
   also means the two can never drift apart.

   Rows are reconciled, not blindly inserted: subjects for classes that have
   been deleted or archived are removed again. Only ever touches the caller's
   own rows, and only for account_type = 'teacher'.

   Load AFTER supabase-config.js on teacher-facing pages. Exposes
   window.syncTeacherSubjects() -> Promise<[{subject, exam_board, level}]>.
═══════════════════════════════════════ */
(function () {
  'use strict';

  async function sync() {
    if (typeof supabaseClient === 'undefined') return [];

    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return [];

    const { data: profile } = await supabaseClient
      .from('profiles').select('account_type, level').eq('id', user.id).maybeSingle();
    if (profile?.account_type !== 'teacher') return [];

    const { data: classes, error } = await supabaseClient
      .from('classes').select('subject, exam_board, level, created_at')
      .eq('archived', false).order('created_at');
    if (error) return [];

    // One row per subject+board. Level isn't stored on user_subjects, so a
    // teacher covering the same subject at two levels collapses to one row —
    // see the note on profiles.level below.
    const wanted = new Map();
    for (const c of (classes || [])) {
      wanted.set(`${c.subject}|${c.exam_board}`, c);
    }

    const { data: existing } = await supabaseClient
      .from('user_subjects').select('id, subject, exam_board').eq('user_id', user.id);

    const have = new Map((existing || []).map(r => [`${r.subject}|${r.exam_board}`, r]));

    const toAdd = [...wanted.entries()]
      .filter(([k]) => !have.has(k))
      .map(([, c]) => ({
        user_id:    user.id,
        subject:    c.subject,
        exam_board: c.exam_board,
        emoji:      (window.SUBJECTS_CONFIG && window.SUBJECTS_CONFIG.emojiFor(c.subject)) || '📚',
        rag_status: 'pending'
      }));

    const toRemove = [...have.entries()]
      .filter(([k]) => !wanted.has(k))
      .map(([, r]) => r.id);

    if (toAdd.length)    await supabaseClient.from('user_subjects').insert(toAdd);
    if (toRemove.length) await supabaseClient.from('user_subjects').delete().in('id', toRemove);

    /* profiles.level decides which spec every page resolves — GCSE Physics
       and A-Level Physics are different topic lists behind the same
       subject+board.

       Only correct it when it is wrong. A teacher covering two levels picks
       between them with the switcher in the sidebar, and that choice writes
       profiles.level; if this ran unconditionally on every page load it
       would immediately undo them. So: leave it alone whenever it already
       matches a level they teach, and otherwise fall back to their most
       recent class. */
    const levels = [...new Set((classes || []).map(c => c.level))];
    if (levels.length && !levels.includes(profile.level)) {
      const fallback = classes[classes.length - 1].level;
      await supabaseClient.from('profiles').update({ level: fallback }).eq('id', user.id);
      try { localStorage.setItem('cached_level', fallback); } catch (e) {}
    } else if (profile.level) {
      try { localStorage.setItem('cached_level', profile.level); } catch (e) {}
    }

    return [...wanted.values()].map(c => ({
      subject: c.subject, exam_board: c.exam_board, level: c.level
    }));
  }

  window.syncTeacherSubjects = sync;
})();
