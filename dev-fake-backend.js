/* TEMPORARY — local runthrough harness. Not for commit.
 *
 * Intercepts PostgREST calls for the USER-SCOPED tables only and serves them
 * from memory, so a full student journey can be walked without an account and
 * without writing anything to the real database.
 *
 * `flashcards` is deliberately NOT faked — those requests go to the real
 * Supabase, so the runthrough also proves the Politics card SQL landed.
 *
 * Real auth, real supabase-js, real page code. Only the REST layer is faked.
 */
(function () {
  const FAKE = ['profiles', 'user_subjects', 'topic_progress', 'user_medals',
                'practice_attempts', 'exam_dates', 'user_flashcard_progress'];
  const UID = window.__FAKE_UID__ || '5cfbc6cb-da30-4e46-9db6-f2edc82d1109';
  const now = () => new Date().toISOString();
  const ago = (d) => new Date(Date.now() - d * 86400000).toISOString();

  // ── seed: a Politics AQA A-Level student mid-way through ────────────────
  const POLITICS = ['1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.10',
                    '2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8','2.9','2.10',
                    '2.11','2.12','2.13','2.14','3.1','3.2','3.3','3.5'];
  const RAG = (i) => i < 12 ? 'green' : (i < 20 ? 'amber' : 'red');

  const DB = {
    profiles: [{
      id: UID, first_name: 'Runthrough', last_name: 'Student',
      email: 'runthrough@example.test', level: 'a-level', avatar_url: null,
      setup_complete: true, created_at: ago(30), streak_count: 4,
      perfect_diagnostics: 1, subscription_tier: 'pro', subscription_status: 'active',
      subscription_expires_at: null, last_active_date: now(),
    }],
    user_subjects: [{
      id: 1, user_id: UID, subject: 'Politics', exam_board: 'AQA',
      created_at: ago(20),
    }],
    topic_progress: POLITICS.map((t, i) => ({
      id: 1000 + i, user_id: UID, subject: 'Politics', exam_board: 'AQA',
      level: 'alevel', topic: t, rag_status: RAG(i), updated_at: ago(i % 7),
    })),
    user_medals: [],
    practice_attempts: [
      { id: 1, user_id: UID, subject: 'Politics', exam_board: 'AQA', answered: 10,
        questions: 10, details: { tier: 'green' }, taken_at: ago(1) },
      { id: 2, user_id: UID, subject: 'Politics', exam_board: 'AQA', answered: 8,
        questions: 10, details: { tier: 'amber' }, taken_at: ago(2) },
    ],
    exam_dates: [],
    user_flashcard_progress: [],
  };
  window.__FAKE_DB__ = DB;

  // ── PostgREST query parsing ─────────────────────────────────────────────
  const OPS = {
    eq: (a, b) => String(a) === b, neq: (a, b) => String(a) !== b,
    gt: (a, b) => a > b, gte: (a, b) => a >= b,
    lt: (a, b) => a < b, lte: (a, b) => a <= b,
    is: (a, b) => (b === 'null' ? a == null : String(a) === b),
    in: (a, b) => b.replace(/^\(|\)$/g, '').split(',')
          .map(s => s.replace(/^"|"$/g, '')).includes(String(a)),
  };

  function applyQuery(table, params) {
    let rows = (DB[table] || []).slice();
    for (const [key, val] of params) {
      if (['select', 'order', 'limit', 'offset', 'on_conflict'].includes(key)) continue;
      const m = /^(\w+)\.(.*)$/s.exec(val);
      if (!m || !OPS[m[1]]) continue;
      rows = rows.filter(r => OPS[m[1]](r[key], m[2]));
    }
    const order = params.get('order');
    if (order) {
      const [col, dir] = order.split('.');
      rows.sort((a, b) => (a[col] > b[col] ? 1 : a[col] < b[col] ? -1 : 0) * (dir === 'desc' ? -1 : 1));
    }
    const limit = params.get('limit');
    if (limit) rows = rows.slice(0, Number(limit));
    return rows;
  }

  function project(rows, select) {
    if (!select || select === '*') return rows;
    const cols = select.split(',').map(s => s.trim()).filter(c => c && c !== '*');
    if (!cols.length) return rows;
    return rows.map(r => {
      const o = {};
      cols.forEach(c => { o[c] = r[c]; });
      return o;
    });
  }

  const json = (body, status, headers) => new Response(
    body === null ? '' : JSON.stringify(body),
    { status: status || 200, headers: Object.assign({ 'Content-Type': 'application/json' }, headers || {}) }
  );

  const origFetch = window.fetch.bind(window);
  const log = [];
  window.__FAKE_LOG__ = log;

  window.fetch = async function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url);
    const opts = init || (typeof input === 'object' ? input : {}) || {};
    if (!url || !url.includes('/rest/v1/')) return origFetch(input, init);

    const after = url.split('/rest/v1/')[1];
    const table = after.split('?')[0].split('/')[0];
    if (!FAKE.includes(table)) { log.push('PASSTHROUGH ' + table); return origFetch(input, init); }

    const params = new URLSearchParams(after.split('?')[1] || '');
    const method = (opts.method || 'GET').toUpperCase();
    const hdrs = new Headers(opts.headers || {});
    const wantsObject = (hdrs.get('Accept') || '').includes('pgrst.object');
    const prefer = hdrs.get('Prefer') || '';
    log.push(method + ' ' + decodeURIComponent(after));

    if (method === 'GET' || method === 'HEAD') {
      const rows = project(applyQuery(table, params), params.get('select'));
      if (prefer.includes('count=exact')) {
        const all = applyQuery(table, params).length;
        return json(method === 'HEAD' ? null : rows, 200,
          { 'Content-Range': `0-${Math.max(all - 1, 0)}/${all}` });
      }
      if (wantsObject) {
        if (rows.length === 1) return json(rows[0]);
        return json({ code: 'PGRST116', message: 'Cannot coerce the result to a single JSON object' }, 406);
      }
      return json(rows);
    }

    const body = opts.body ? JSON.parse(opts.body) : null;

    if (method === 'POST') {                       // insert / upsert
      const incoming = Array.isArray(body) ? body : [body];
      const conflict = (params.get('on_conflict') || '').split(',').filter(Boolean);
      const out = [];
      for (const row of incoming) {
        let existing = null;
        if (conflict.length) {
          existing = (DB[table] || []).find(r => conflict.every(c => String(r[c]) === String(row[c])));
        }
        if (existing) {
          if (!prefer.includes('ignoreDuplicates')) Object.assign(existing, row);
          out.push(existing);
        } else {
          const rec = Object.assign({ id: Date.now() + Math.random() }, row);
          (DB[table] = DB[table] || []).push(rec);
          out.push(rec);
        }
      }
      return json(prefer.includes('return=representation') ? out : null, 201);
    }

    if (method === 'PATCH') {                      // update
      const rows = applyQuery(table, params);
      rows.forEach(r => Object.assign(r, body));
      return json(prefer.includes('return=representation') ? rows : null, 200);
    }

    if (method === 'DELETE') {
      const doomed = new Set(applyQuery(table, params));
      DB[table] = (DB[table] || []).filter(r => !doomed.has(r));
      return json(null, 204);
    }

    return json([], 200);
  };

  console.log('[fake-backend] active — faking', FAKE.join(', '), '| flashcards pass through to real Supabase');
})();
