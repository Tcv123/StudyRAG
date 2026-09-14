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

   Rows are reconciled, not blindly inserted: a subject whose class has been
   archived is removed again. Only ever touches the caller's own rows, and only
   for account_type = 'teacher'.

   WHAT IT WILL NOT TOUCH. An account can be a student first and a teacher
   afterwards, and that student's subjects live in the same table. This used to
   reconcile the table to exactly the set of classes owned, which deleted every
   subject the person had chosen in setup — grades and targets with it — the
   moment they flipped the switch in Settings, under a label promising that
   nothing saved would be deleted. A row is now only ever deleted when BOTH of
   these hold:
     - it matches a subject+board this teacher has had a class for, archived
       ones included, so we know this sync is what created it; and
     - it carries no current_grade or target_grade, which this sync never
       writes and setup.html always does.
   Anything else is somebody's own revision record and is left alone.

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

    /* Archived classes are fetched too. They are not "wanted" — an archived
       class should not keep its subject alive — but they ARE proof that this
       sync is the thing that put that subject there, which is what makes the
       delete below safe. Classes are only ever archived, never hard-deleted
       (class.html:815), so this set never loses a class it needs to remember. */
    const { data: classes, error } = await supabaseClient
      .from('classes').select('subject, exam_board, level, archived, created_at')
      .order('created_at');
    if (error) return [];

    const active = (classes || []).filter(c => !c.archived);

    // One row per subject+board. Level isn't stored on user_subjects, so a
    // teacher covering the same subject at two levels collapses to one row —
    // see the note on profiles.level below.
    const wanted = new Map();
    for (const c of active) {
      wanted.set(`${c.subject}|${c.exam_board}`, c);
    }

    /* Every subject+board this teacher has ever had a class for. A user_subjects
       row outside this set was not created here — it belongs to the student this
       account used to be — and must be left alone. */
    const everTaught = new Set(
      (classes || []).map(c => `${c.subject}|${c.exam_board}`)
    );

    const { data: existing } = await supabaseClient
      .from('user_subjects')
      .select('id, subject, exam_board, current_grade, target_grade')
      .eq('user_id', user.id);

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

    /* Grades are the second guard, for the one case everTaught cannot see: a
       student who studied Maths AQA, later taught a Maths AQA class, then
       archived it. The key is in everTaught, but the row is still theirs. */
    const isOurs = r => r.current_grade == null && r.target_grade == null;

    const toRemove = [...have.entries()]
      .filter(([k, r]) => !wanted.has(k) && everTaught.has(k) && isOurs(r))
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
    const levels = [...new Set(active.map(c => c.level))];
    if (levels.length && !levels.includes(profile.level)) {
      const fallback = active[active.length - 1].level;
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
