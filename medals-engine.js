/* ═══════════════════════════════════════════════════════════════════════
   MEDAL ENGINE — shared award logic
   ─────────────────────────────────────────────────────────────────────
   Single source of truth for *earning* medals. medals-data.js holds the
   definitions; this file decides who has earned what and writes it.

   Loaded by:
     • Dashboard.html        — runs the full check on load
     • medals.html           — runs the full check before rendering, so the
                               Medals page can't show stale data
     • diagnostics/*.html    — awardDiagnosticMedals() for the per-run medals
                               (perfect score, all tiers correct)

   Requires supabase-config.js (window.supabaseClient) to be loaded first.
   ALL_MEDALS (medals-data.js) is optional — only needed for 'medals_all'.
═══════════════════════════════════════════════════════════════════════ */

// ── Level-aware key lookup ───────────────────────────────────────────────
// Pass an explicit level where you have one (the profile row); otherwise we
// fall back to the level cached by the Dashboard. Falling back to 'gcse' for
// an A-Level student would silently pick the wrong topic counts, so an
// explicit level always wins.
function _lvSuffix(level) {
  const l = (level || localStorage.getItem('cached_level') || 'gcse').toLowerCase();
  return (l === 'a-level' || l === 'as') ? 'alevel' : 'gcse';
}
function _lvLookup(map, base, level) {
  const keyed = map[`${base}|${_lvSuffix(level)}`];
  return keyed !== undefined ? keyed : map[base];
}

// ── Subject → topic key mapping ──────────────────────────────────────────
// Key format: "SubjectName_Board"  →  topic_progress.subject value
// Keep in sync with SUBJECT_TOPICS in practice.html (same keys, same totals).
const SUBJECT_TOPIC_KEY = {
  'Computer Science_OCR': 'cs-ocr',
  'Computer Science_OCR|alevel': 'cs-ocr-alevel',
  'Mathematics_OCR B|alevel': 'maths-ocr-b-alevel',
  'Computer Science_AQA|gcse': 'cs-aqa-gcse',
  'Computer Science_AQA|alevel': 'cs-aqa-alevel',
  'Physics_Edexcel': 'physics-edexcel',
  'Physics_AQA': 'physics-aqa',
  'Physics_AQA|gcse': 'physics-aqa-gcse',
  'Physics_Edexcel|gcse': 'physics-edexcel-gcse',
  'Physics_OCR A|gcse': 'physics-ocr-a-gcse',
  'Physics_OCR A': 'physics-ocr-a',
  'Physics_OCR B': 'physics-ocr-b',
  'Physics_OCR B|gcse': 'physics-ocr-b-gcse',
  'Economics_AQA': 'economics-aqa',
  'Economics_Edexcel A': 'economics-edexcel-a',
  'Economics_OCR': 'economics-ocr',
  'Economics_Edexcel B': 'economics-edexcel-b',
  'Chemistry_AQA': 'chemistry-aqa',
  'Chemistry_Edexcel': 'chemistry-edexcel',
  'Chemistry_OCR A': 'chemistry-ocr-a',
  'Chemistry_OCR B': 'chemistry-ocr-b',
  'Biology_AQA': 'biology-aqa',
  'Biology_AQA|gcse': 'biology-aqa-gcse',
  'Biology_Edexcel|gcse': 'biology-edexcel-gcse',
  'Biology_Edexcel IGCSE|gcse': 'biology-edexcel-igcse',
  'Biology_Edexcel A': 'biology-edexcel-a',
  'Biology_Edexcel B': 'biology-edexcel-b',
  'Biology_OCR A': 'biology-ocr-a',
  'Biology_OCR A|gcse': 'biology-ocr-a-gcse',
  'Biology_OCR B': 'biology-ocr-b',
  'Biology_OCR B|gcse': 'biology-ocr-b-gcse',
  'Geography_AQA': 'geography-aqa',
  'Geography_Edexcel': 'geography-edexcel',
  'Geography_OCR': 'geography-ocr',
  'Geography_Eduqas|gcse': 'geography-eduqas-gcse',
  'Geography_Eduqas|alevel': 'geography-eduqas-alevel',
  'Mathematics_AQA': 'maths-aqa',
  'Mathematics_OCR|gcse': 'maths-ocr-gcse',
  'Mathematics_OCR|alevel': 'maths-ocr-alevel',
  'Mathematics_Edexcel': 'maths-edexcel',
  'Further Mathematics_Edexcel': 'further-maths-edexcel',
  'Further Mathematics_AQA': 'further-maths-aqa',
  'Further Mathematics_OCR A': 'further-maths-ocr',
  'Further Mathematics_OCR B': 'further-maths-ocr-b',
  'English Language_AQA': 'english-aqa',
  'English Language_Edexcel': 'english-edexcel',
};

const TOPIC_TOTAL = { 'cs-ocr': 11, 'cs-ocr-alevel': 8, 'cs-aqa-gcse': 12, 'cs-aqa-alevel': 10, 'physics-edexcel': 13, 'physics-edexcel-gcse': 15, 'physics-aqa': 8, 'physics-aqa-gcse': 8, 'physics-ocr-a': 6, 'physics-ocr-a-gcse': 6, 'physics-ocr-b': 6, 'physics-ocr-b-gcse': 6, 'economics-aqa': 10, 'economics-edexcel-a': 8, 'economics-ocr': 8, 'economics-edexcel-b': 8, 'chemistry-aqa': 6, 'chemistry-edexcel': 6, 'chemistry-ocr-a': 6, 'chemistry-ocr-b': 6, 'biology-aqa': 8, 'biology-aqa-gcse': 7, 'biology-edexcel-gcse': 9, 'biology-edexcel-igcse': 21, 'biology-edexcel-a': 8, 'biology-edexcel-b': 8, 'biology-ocr-a': 6, 'biology-ocr-a-gcse': 15, 'biology-ocr-b': 6, 'biology-ocr-b-gcse': 22, 'geography-aqa': 8, 'geography-edexcel': 8, 'geography-ocr': 8, 'geography-eduqas-gcse': 12, 'geography-eduqas-alevel': 10, 'maths-aqa': 17, 'maths-ocr-gcse': 19, 'maths-ocr-alevel': 12, 'maths-ocr-b-alevel': 25, 'maths-edexcel': 36, 'further-maths-edexcel': 17, 'further-maths-aqa': 9, 'further-maths-ocr': 25, 'further-maths-ocr-b': 25, 'english-aqa': 11, 'english-edexcel': 11 };

/* ═══════════════════════════════════════
   WRITING MEDALS
═══════════════════════════════════════ */

// user_medals has UNIQUE (user_id, medal_id), so a plain .insert() of a list
// containing any id the user already has — or the same id twice — rejects the
// WHOLE batch and every medal in it is silently lost. Always go through here:
// it de-dupes and upserts, so one clash can never cost the user the rest.
// Returns the ids that are now safely stored (empty array on failure).
async function saveMedals(userId, medalIds) {
  const ids = [...new Set(medalIds)].filter(Boolean);
  if (!ids.length) return [];
  const rows = ids.map(id => ({ user_id: userId, medal_id: id }));
  const { error } = await supabaseClient
    .from('user_medals')
    .upsert(rows, { onConflict: 'user_id,medal_id', ignoreDuplicates: true });
  if (error) {
    console.error('medals: save failed', error, ids);
    return [];
  }
  return ids;
}

/* ═══════════════════════════════════════
   PER-DIAGNOSTIC MEDALS
   Called from the diagnostic pages, which are the only place that can see
   an individual run's per-question results.
═══════════════════════════════════════ */
async function awardDiagnosticMedals(user, results, rag) {
  if (!user || !Array.isArray(results) || !results.length) return;
  const toAward = [];

  const perfect = rag === 'green' && results.every(r => r.pts > 0);
  if (perfect) toAward.push('perfect_score');

  // Tier Conqueror — got marks on a green, an amber AND a red question in the
  // same diagnostic.
  const tiersHit = new Set(results.filter(r => r.pts > 0).map(r => r.tier));
  if (['green', 'amber', 'red'].every(t => tiersHit.has(t))) toAward.push('all_tiers_green');

  // Hat Trick / Flawless need a running count of perfect diagnostics, which
  // nothing else records — user_medals can only ever hold one 'perfect_score'
  // row. profiles.perfect_diagnostics is that counter.
  if (perfect) {
    const { data: prof, error } = await supabaseClient
      .from('profiles').select('perfect_diagnostics').eq('id', user.id).maybeSingle();
    if (!error) {
      const count = (prof?.perfect_diagnostics || 0) + 1;
      await supabaseClient.from('profiles').update({ perfect_diagnostics: count }).eq('id', user.id);
      if (count >= 3)  toAward.push('perfect_3');
      if (count >= 10) toAward.push('perfect_10');
    }
  }

  await saveMedals(user.id, toAward);
}

/* ═══════════════════════════════════════
   FULL MEDAL CHECK
═══════════════════════════════════════ */
async function checkAndAwardMedals(user, topicRows, subjects, existingMedalIds) {
  const earned = new Set(existingMedalIds);
  const newMedals = [];
  // Must guard against newMedals too — awarding the same id twice used to
  // build a batch that violated the unique constraint and lost everything.
  function award(id) { if (!earned.has(id) && !newMedals.includes(id)) newMedals.push(id); }

  const greenTopics = topicRows.filter(t => t.rag_status === 'green').length;
  const amberTopics = topicRows.filter(t => t.rag_status === 'amber').length;
  const redTopics   = topicRows.filter(t => t.rag_status === 'red').length;
  const totalTested = topicRows.length;
  const nonRed      = greenTopics + amberTopics;

  // ── Profile (streak, name, signup date, level, perfect-run count) ──
  const { data: prof } = await supabaseClient
    .from('profiles').select('*').eq('id', user.id).single();
  const level = prof?.level;

  // Total topics across all the user's subjects — used to scale medal thresholds
  // so that they're achievable for users with fewer topics in their curriculum.
  let totalCurriculumTopics = 0;
  for (const s of subjects) {
    const key = _lvLookup(SUBJECT_TOPIC_KEY, `${s.subject}_${s.exam_board}`, level);
    totalCurriculumTopics += TOPIC_TOTAL[key] || 0;
  }
  // Scaled threshold: never require more than the user actually has
  const scale = (n) => Math.min(n, Math.max(1, totalCurriculumTopics));
  const frac  = (p) => Math.max(1, Math.ceil(totalCurriculumTopics * p));

  // ── Practice attempts (drives the practice + written-question medals) ──
  const { data: attempts } = await supabaseClient
    .from('practice_attempts')
    .select('answered, questions, details, taken_at')
    .eq('user_id', user.id)
    .order('taken_at', { ascending: false })
    .limit(500);
  const attemptRows = attempts || [];

  // ── Getting Started ──
  if (totalTested >= 1)       award('first_diagnostic');
  if (greenTopics >= 1)       award('first_green');
  if (amberTopics >= 1)       award('first_amber');
  if (subjects.length > 0)    award('setup_complete');

  // ── Diagnostic Milestones ──
  if (totalTested >= Math.min(5, scale(5)))   award('diag_5');
  if (totalTested >= Math.min(10, scale(10))) award('diag_10');
  if (totalTested >= frac(0.25))              award('diag_25');
  if (totalTested >= frac(0.5))               award('diag_50');
  if (totalCurriculumTopics > 0 && totalTested >= totalCurriculumTopics) award('diag_100');

  // perfect_score / perfect_3 / perfect_10 / all_tiers_green are awarded by
  // awardDiagnosticMedals() at the end of a run — only that has the per-question
  // results. Nothing to do here.

  // ── Green Topics ──
  if (greenTopics >= 3)  award('green_3');
  if (greenTopics >= 5)  award('green_5');
  if (greenTopics >= Math.min(10, scale(10))) award('green_10');
  if (greenTopics >= Math.min(20, Math.max(scale(20), frac(0.25)))) award('green_20');
  if (greenTopics >= Math.max(scale(50), frac(0.5))) award('green_50');

  // ── Subject Mastery ──
  let masteredCount = 0;
  for (const s of subjects) {
    const key = _lvLookup(SUBJECT_TOPIC_KEY, `${s.subject}_${s.exam_board}`, level);
    const total = TOPIC_TOTAL[key];
    if (!key || !total) continue;
    const gCount = topicRows.filter(t =>
      t.subject === s.subject && t.exam_board === s.exam_board && t.rag_status === 'green'
    ).length;
    if (gCount >= total) masteredCount++;
  }
  if (masteredCount >= 1) award('subject_master');
  if (masteredCount >= 2) award('subject_master_2');
  if (masteredCount >= subjects.length && subjects.length > 0) award('subject_master_all');

  // all_clear — every topic green
  let allGreen = subjects.length > 0;
  for (const s of subjects) {
    const key = _lvLookup(SUBJECT_TOPIC_KEY, `${s.subject}_${s.exam_board}`, level);
    const total = TOPIC_TOTAL[key];
    if (!key || !total) { allGreen = false; break; }
    const gCount = topicRows.filter(t =>
      t.subject === s.subject && t.exam_board === s.exam_board && t.rag_status === 'green'
    ).length;
    if (gCount < total) { allGreen = false; break; }
  }
  if (allGreen) award('all_clear');

  // ── Improvement ──
  if (nonRed >= 5)  award('moving_up');
  if (nonRed >= 10) award('moving_up_10');
  // red_to_green and red_to_green_5 need history — approximate by green count
  if (greenTopics >= 1) award('red_to_green');
  if (greenTopics >= 5) award('red_to_green_5');
  if (redTopics === 0 && totalTested > 0) award('no_reds');

  // ── Streaks ──
  const streak = prof?.streak_count || 0;
  if (streak >= 3)   award('streak_3');
  if (streak >= 7)   award('on_fire');
  if (streak >= 14)  award('streak_14');
  if (streak >= 30)  award('streak_30');
  if (streak >= 60)  award('streak_60');
  if (streak >= 100) award('streak_100');

  // profile_complete
  if (prof?.first_name && prof?.last_name) award('profile_complete');

  // ── Time-based ──
  if (prof?.created_at) {
    const daysSince = Math.floor((Date.now() - new Date(prof.created_at).getTime()) / 86400000);
    if (daysSince >= 7)   award('one_week');
    if (daysSince >= 30)  award('one_month');
    if (daysSince >= 90)  award('three_months');
    if (daysSince >= 180) award('six_months');
    if (daysSince >= 365) award('one_year');
  }

  // ── Coverage ──
  if (totalCurriculumTopics > 0 && totalTested >= Math.ceil(totalCurriculumTopics / 2)) award('half_topics');
  if (totalCurriculumTopics > 0 && totalTested >= totalCurriculumTopics) award('all_topics_tested');

  // ── Per-Subject Firsts ──
  const subjectNames = new Set(topicRows.map(t => t.subject));
  if (subjectNames.has('Computer Science')) award('first_cs');
  if (subjectNames.has('Physics'))          award('first_physics');
  if (subjectNames.has('Economics'))        award('first_economics');
  if (subjectNames.has('Chemistry'))        award('first_chemistry');
  if (subjectNames.has('Biology'))          award('first_biology');
  if (subjectNames.has('Geography'))        award('first_geography');
  if (subjectNames.has('Mathematics'))      award('first_maths');

  // ── Amber Milestones ──
  if (amberTopics >= 5)  award('amber_5');
  if (amberTopics >= 10) award('amber_10');
  if (amberTopics === 0 && greenTopics > 0 && totalTested > 0) award('amber_clear');
  // amber_to_green_3 — approximate: if green >= 3 they likely upgraded some
  if (greenTopics >= 3) award('amber_to_green_3');

  // ── Diagnostic Depth ──
  // These used to demand 150/200 distinct topics tested, impossible for most
  // curricula. Repurposed: diag_150 awards once every topic has been tested,
  // diag_200 once every topic is non-red (green or amber).
  if (totalCurriculumTopics > 0 && totalTested >= totalCurriculumTopics) award('diag_150');
  if (totalCurriculumTopics > 0 && nonRed >= totalCurriculumTopics) award('diag_200');

  // daily diagnostics — count today's entries
  const today = new Date().toISOString().slice(0, 10);
  const todayRows = topicRows.filter(t => t.updated_at && t.updated_at.slice(0, 10) === today);
  if (todayRows.length >= 3)  award('daily_3_diag');
  if (todayRows.length >= 5)  award('daily_5_diag');
  if (todayRows.length >= 7)  award('daily_7_diag');
  if (todayRows.length >= 10) award('daily_10_diag');

  // all_boards_tested — every board the user studies has at least one tested topic
  let allBoardsTested = subjects.length > 0;
  for (const s of subjects) {
    const hasTopic = topicRows.some(t => t.subject === s.subject && t.exam_board === s.exam_board);
    if (!hasTopic) { allBoardsTested = false; break; }
  }
  if (allBoardsTested && subjects.length > 0) award('all_boards_tested');

  // ── Green Topics Extended ──
  if (greenTopics >= Math.max(scale(75),  frac(0.75))) award('green_75');
  if (greenTopics >= scale(100)) award('green_100');
  // green_all_one_board — check if any single subject has all topics green
  for (const s of subjects) {
    const key = _lvLookup(SUBJECT_TOPIC_KEY, `${s.subject}_${s.exam_board}`, level);
    const total = TOPIC_TOTAL[key];
    if (!key || !total) continue;
    const gCount = topicRows.filter(t =>
      t.subject === s.subject && t.exam_board === s.exam_board && t.rag_status === 'green'
    ).length;
    if (gCount >= total) { award('green_all_one_board'); break; }
  }

  // ── Practice Questions ──
  // "Questions completed" = questions actually answered, not attempts started.
  const practiceQs = attemptRows.reduce((n, a) => n + (a.answered ?? a.questions ?? 0), 0);
  if (practiceQs >= 1)   award('practice_first');
  if (practiceQs >= 10)  award('practice_10');
  if (practiceQs >= 25)  award('practice_25');
  if (practiceQs >= 50)  award('practice_50');
  if (practiceQs >= 100) award('practice_100');

  // ── Written Questions ──
  // practice.html stores per-question detail with level 'full' | 'partial' |
  // 'miss' | 'skip'; 'full' means every mark on that question was earned.
  let fullMarkQs = 0;
  for (const a of attemptRows) {
    const details = Array.isArray(a.details) ? a.details : [];
    fullMarkQs += details.filter(d => d && d.level === 'full').length;
  }
  if (fullMarkQs >= 1) award('first_written_full');
  if (fullMarkQs >= 5) award('written_5_full');

  // ── Time-of-day / calendar medals ──
  // Judged on when the student actually studied (diagnostic saves + practice
  // attempts), NOT on when this page happens to be open. Revising at 7am and
  // opening the dashboard at 9am used to miss Early Bird entirely.
  const activity = [
    ...topicRows.map(t => t.updated_at),
    ...attemptRows.map(a => a.taken_at),
  ].filter(Boolean).map(ts => new Date(ts)).filter(d => !isNaN(d));

  const diagTimes = topicRows.map(t => t.updated_at).filter(Boolean)
    .map(ts => new Date(ts)).filter(d => !isNaN(d));

  const anyDiag  = (fn) => diagTimes.some(fn);
  const anyStudy = (fn) => activity.some(fn);

  if (anyDiag(d => d.getHours() < 8))                            award('early_bird');
  if (anyDiag(d => d.getHours() >= 22))                          award('night_owl');
  if (anyStudy(d => d.getHours() < 6))                           award('dawn_grinder');
  if (anyStudy(d => d.getHours() >= 12 && d.getHours() < 13))    award('lunch_learner');
  if (anyStudy(d => d.getHours() >= 16 && d.getHours() < 19))    award('after_school');
  if (anyStudy(d => d.getHours() < 3))                           award('midnight_oil');
  if (anyStudy(d => d.getDay() === 0 || d.getDay() === 6))       award('weekend_scholar');
  if (anyStudy(d => d.getDay() === 5 && d.getHours() >= 18))     award('friday_night');
  if (anyStudy(d => d.getMonth() === 0 && d.getDate() === 1))    award('new_year');
  if (anyStudy(d => d.getMonth() === 4 || d.getMonth() === 5))   award('exam_season');
  // Weekend Warrior needs BOTH days — not necessarily the same weekend.
  if (anyStudy(d => d.getDay() === 6) && anyStudy(d => d.getDay() === 0)) award('weekend_warrior');

  // ── Comeback & Recovery ──
  // comeback_kid — studied today after a 7+ day gap
  const nonTodayRows = topicRows.filter(t => t.updated_at && t.updated_at.slice(0, 10) !== today);
  if (nonTodayRows.length > 0 && todayRows.length > 0) {
    const lastDate = nonTodayRows.reduce((max, t) => t.updated_at > max ? t.updated_at : max, '');
    if (lastDate) {
      const daysSinceLast = Math.floor((Date.now() - new Date(lastDate).getTime()) / 86400000);
      if (daysSinceLast >= 7) award('comeback_kid');
    }
  }

  // clean_sweep — a subject with tested topics but zero reds
  for (const s of subjects) {
    const subjTopics = topicRows.filter(t => t.subject === s.subject && t.exam_board === s.exam_board);
    if (subjTopics.length >= 3 && subjTopics.every(t => t.rag_status !== 'red')) {
      award('clean_sweep');
      break;
    }
  }
  // bounce_back — if any topic changed today and is amber (approximate)
  if (todayRows.some(t => t.rag_status === 'amber')) award('bounce_back');
  // red_halved — if reds are less than half of total tested
  if (totalTested >= 4 && redTopics <= Math.floor(totalTested / 4)) award('red_halved');

  // ── Multi-Subject ──
  const greenSubjects = new Set(topicRows.filter(t => t.rag_status === 'green').map(t => t.subject));
  if (greenSubjects.size >= 3) award('cross_subject_green');

  let allSubjTested = subjects.length > 0;
  for (const s of subjects) {
    if (!topicRows.some(t => t.subject === s.subject)) { allSubjTested = false; break; }
  }
  if (allSubjTested && subjects.length > 0) award('all_subjects_tested');

  // ── Streak Extended ──
  if (streak >= 150) award('streak_150');
  if (streak >= 200) award('streak_200');
  if (streak >= 365) award('streak_365');
  // weekend_streak_4 — approximate: if streak >= 28 they've studied 4 weekends
  if (streak >= 28) award('weekend_streak_4');

  // ── Speed Records ──
  const todaySubjects = new Set(todayRows.map(t => t.subject));
  if (todaySubjects.size >= 2) award('two_subj_one_day');
  const todayGreens = todayRows.filter(t => t.rag_status === 'green').length;
  if (todayGreens >= 3) award('three_green_one_day');
  if (todayGreens >= 5) award('five_green_one_day');

  // ── Medal collection meta-medals ──
  const totalEarned = earned.size + newMedals.length;
  if (totalEarned >= 10) award('medals_10');
  if (totalEarned >= 25) award('medals_25');
  if (totalEarned >= 40) award('medals_40');
  if (totalEarned >= 50) award('medals_50');
  if (totalEarned >= 75) award('medals_75');
  if (totalEarned >= 90) award('medals_90');
  if (typeof ALL_MEDALS !== 'undefined' && totalEarned >= ALL_MEDALS.length - 1) {
    award('medals_all'); // -1 because this IS a medal
  }

  // Only report back what actually made it into the database — returning
  // optimistically made the Dashboard show medals the Medals page didn't have.
  const saved = await saveMedals(user.id, newMedals);
  return new Set([...existingMedalIds, ...saved]);
}

/* ═══════════════════════════════════════
   CONVENIENCE — fetch everything, then check
   Used by pages that don't already have the data loaded (medals.html).
═══════════════════════════════════════ */
async function loadAndCheckMedals(user) {
  const [{ data: subjects }, { data: medals }, { data: topicProgress }] = await Promise.all([
    supabaseClient.from('user_subjects').select('*').eq('user_id', user.id).order('created_at'),
    supabaseClient.from('user_medals').select('medal_id').eq('user_id', user.id),
    supabaseClient.from('topic_progress')
      .select('subject, exam_board, topic, rag_status, updated_at').eq('user_id', user.id),
  ]);
  const existing = new Set((medals || []).map(m => m.medal_id));
  try {
    return await checkAndAwardMedals(user, topicProgress || [], subjects || [], existing);
  } catch (err) {
    console.error('medals: check failed', err);
    return existing;
  }
}
