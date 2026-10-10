/**
 * Exam timetable watch — runs every Monday morning from a Vercel cron.
 *
 * Opens each board's timetable page, reads every summer timetable document
 * it has not seen before, imports the dates it can verify, records each
 * document as a finding, and emails you a summary. Most weeks it finds
 * nothing new and exits.
 *
 * WHAT IT WRITES. Every summer timetable PDF the boards publish is read by
 * api/_exam-timetable-auto.js, which looks up the exact entry codes of every
 * paper a student on this site can sit. A subject whose papers are ALL
 * found, and whose dates pass every check there (series year, May/June,
 * weekday, agrees with the weekday the board printed, tiers agree), goes
 * straight into exam_dates and onto dashboards. No click needed.
 *
 * Anything that does not pass stays exactly where it used to: a pending
 * finding on admin-exam-dates.html, with the rows it did find, for a human
 * to finish. The rule from the migration still holds — a missing date is a
 * gap, a wrong one is a disaster — it is enforced per subject by checks
 * instead of for the whole board by a person.
 *
 * Two things it never does:
 *   • overwrite a date an admin entered by hand (source = 'manual'). Once
 *     you have corrected a subject for a series, it is yours.
 *   • publish half a subject. Biology with Paper 2 missing waits for review;
 *     Chemistry in the same PDF still goes live.
 *
 * DETECTION is unchanged and robust: a document we have not seen before
 * (by content hash) on a board's timetable page. Re-issued amendments have
 * new bytes, so they are re-read and the dates updated.
 *
 * Required Vercel environment variables:
 *   CRON_SECRET                — same secret setup-reminder.js uses. Vercel
 *                                sends it as `Authorization: Bearer <secret>`.
 *                                Unset means this endpoint refuses to run.
 *   SUPABASE_URL               — already set
 *   SUPABASE_SERVICE_ROLE_KEY  — already set
 *   RESEND_API_KEY             — already set, used by api/contact.js
 *
 * Optional:
 *   TIMETABLE_ALERT_TO — where findings are emailed. Defaults to
 *                        REMINDER_REPLY_TO, then hello@raglearning.uk.
 *   SITE_URL           — defaults to https://raglearning.uk
 *   REMINDER_FROM      — reused as the From address.
 *
 * Manual dry run (fetches and reads the documents, writes nothing, sends
 * nothing — returns exactly what a real run would have imported):
 *   curl -H "Authorization: Bearer $CRON_SECRET" \
 *        https://raglearning.uk/api/cron/exam-timetable-check?dry=1
 *
 * Force a report even when nothing is new, to check the email renders:
 *   curl -H "Authorization: Bearer $CRON_SECRET" \
 *        "https://raglearning.uk/api/cron/exam-timetable-check?dry=1&all=1"
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

/* Shared with the admin paste box — one implementation of the date-format
 * handling, because having two would mean fixing every ambiguity twice.
 * See exam-timetable-parse.js. */
const { parseDelimited } = require('../../exam-timetable-parse.js');
const { extractFromPdf } = require('../_exam-timetable-auto.js');

/* Four board pages, each fetched once. Vercel gives this function 60s
 * (vercel.json); a slow board should cost us one source, not the run. */
const FETCH_TIMEOUT_MS = 12000;

/* Boards serve the same public page to a browser and to us, but a request
 * with no User-Agent gets bot-filtered by some CDNs. This is honest about
 * what it is and points at a page explaining why we are asking. */
const USER_AGENT =
  'RAGLearningTimetableBot/1.0 (+https://raglearning.uk/contact; weekly exam timetable check)';

/* Documents bigger than this are not timetables, and we only want the bytes
 * to hash them. 12MB is generous — the real ones are well under 1MB. */
const MAX_DOC_BYTES = 12 * 1024 * 1024;

/* A link has to look like a timetable to be worth reporting. Board sites
 * also link specifications, entry deadlines and JCQ booklets from the same
 * page, and reporting those would train you to ignore the email. */
const TIMETABLE_WORDS = /timetable|exam\s*dates|examination\s*dates/i;
const DOC_EXTENSION   = /\.(pdf|xlsx|xls|csv)(\?|#|$)/i;

/* Leave this much of Vercel's 60s for the database writes and the email.
 * A document not reached this run is not recorded, so the next run reads
 * it — running out of time costs a week, never a document. */
const TIME_BUDGET_MS = 42000;


module.exports = async function handler(req, res) {
  /* ── Who's calling ──────────────────────────────────────────────────
   * Closed by default, same as setup-reminder.js: a missing CRON_SECRET is
   * a 500, never an open door. This one cannot read student data, but it
   * can make us fetch arbitrary URLs from the sources table, so it stays
   * shut to everyone but the cron. */
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    console.error('[timetable-check] CRON_SECRET is not set — refusing to run');
    return res.status(500).json({ error: 'Not configured' });
  }
  if (!bearerMatches(req.headers.authorization, secret)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey   = process.env.RESEND_API_KEY;

  const missing = [
    ['SUPABASE_URL', supabaseUrl],
    ['SUPABASE_SERVICE_ROLE_KEY', serviceKey],
    ['RESEND_API_KEY', resendKey]
  ].filter(([, value]) => !value).map(([name]) => name);

  if (missing.length) {
    console.error('[timetable-check] missing env vars:', missing.join(', '));
    return res.status(500).json({ error: 'Not configured', missing });
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const dryRun    = req.query?.dry === '1' || req.query?.dry === 'true';
  const reportAll = req.query?.all === '1' || req.query?.all === 'true';
  const startedAt = Date.now();

  /* ── What counts as "new" ────────────────────────────────────────────
   * The summer the current academic year leads to: from July onwards that
   * is next summer, before July it is this one. Not "newer than anything
   * in exam_dates" — that floor rose the moment a series was imported and
   * then hid every amendment to it for the rest of the year. Documents for
   * the current series are re-checked each run; the content hash is what
   * stops an unchanged one being read twice. */
  const targetYear = currentSeriesYear(new Date());

  const { data: sources, error: sourcesErr } = await supabaseAdmin
    .from('exam_timetable_sources')
    .select('*')
    .eq('enabled', true)
    .order('board');

  if (sourcesErr) {
    console.error('[timetable-check] could not read sources:', sourcesErr.message);
    return res.status(500).json({ error: 'Could not read sources' });
  }
  if (!sources?.length) {
    return res.status(200).json({ checked: 0, note: 'No enabled sources.' });
  }

  const results = [];

  for (const source of sources) {
    const result = { board: source.board, page_url: source.page_url, documents: [] };
    results.push(result);

    /* ── Fetch the board's page ──────────────────────────────────────
     * A failure here is reported, not swallowed. A watch that quietly
     * returns nothing for two years because a URL moved is worse than no
     * watch at all — you would believe you were covered. */
    let html;
    try {
      html = await fetchText(source.page_url);
    } catch (err) {
      result.status = 'fetch-failed';
      result.error  = err.message;
      if (!dryRun) await recordCheck(supabaseAdmin, source, result);
      continue;
    }

    /* ── Every summer document for the series ────────────────────────
     * Not just the best one: AQA publishes GCSE and A-level as separate
     * PDFs, OCR five. Spreadsheets are dropped when the board also offers
     * a PDF of the same thing, which OCR always does. */
    let candidates = findTimetableLinks(html, source.page_url)
      .filter(link => reportAll || (link.year && link.year >= targetYear && link.score >= 0));
    if (candidates.some(c => /\.pdf(\?|#|$)/i.test(c.url))) {
      candidates = candidates.filter(c => !/\.xlsx?(\?|#|$)/i.test(c.url));
    }

    for (const link of candidates) {
      if (Date.now() - startedAt > TIME_BUDGET_MS) {
        result.documents.push({ doc_url: link.url, status: 'deferred', note: 'Out of time this run — will be read next run.' });
        continue;
      }
      result.documents.push(await processDocument(supabaseAdmin, source, link, { dryRun, reportAll, targetYear }));
    }

    const docs = result.documents;
    result.status = docs.some(d => d.status === 'imported' || d.status === 'needs-review') ? 'new-document' : 'no-change';
    const last = docs.filter(d => d.doc_hash).pop();
    if (last) { result.doc_url = last.doc_url; result.doc_hash = last.doc_hash; }
    if (!dryRun) await recordCheck(supabaseAdmin, source, result);
  }

  /* ── Tell somebody ───────────────────────────────────────────────────
   * Only when there is something to say. A weekly "nothing happened"
   * email is an email you stop reading.
   *
   * Fetch failures count as something to say — that is the watch telling
   * you it has gone blind. */
  const docs     = results.flatMap(r => r.documents.map(d => ({ board: r.board, ...d })));
  const newDocs  = docs.filter(d => d.status === 'imported'
                              || (d.status === 'needs-review' && (!d.seenBefore || d.imported?.length)));
  const failures = results.filter(r => r.status === 'fetch-failed');
  let emailed = false;

  if ((newDocs.length || failures.length) && !dryRun) {
    try {
      await sendReport(resendKey, newDocs, failures);
      emailed = true;
    } catch (err) {
      /* The findings are already in the table and the admin page will show
       * them, so a Resend outage costs you the nudge, not the information.
       * Do not fail the run over it. */
      console.error('[timetable-check] report email failed:', err.message);
    }
  }

  return res.status(200).json({
    dryRun,
    targetYear,
    checked: results.length,
    imported: docs.reduce((n, d) => n + (d.imported?.length || 0), 0),
    needsReview: docs.reduce((n, d) => n + (d.failed?.length || 0), 0),
    failures: failures.length,
    emailed,
    results
  });
};


/* ── One document ────────────────────────────────────────────────────────
 * Download, hash, skip if already handled, read, import what passes,
 * record the rest as a finding. Returns a summary for the report.
 * ──────────────────────────────────────────────────────────────────────── */
async function processDocument(supabaseAdmin, source, link, { dryRun, reportAll, targetYear }) {
  const doc = { doc_url: link.url, doc_title: link.text, series: `summer-${link.year || targetYear}` };
  const year = link.year || targetYear;

  /* Hash the document's bytes, not its URL. Boards re-issue a timetable at
   * the same URL when they amend a date — an amendment is exactly the thing
   * you most want picked up, and a URL comparison would miss it. */
  let bytes;
  try {
    bytes = await fetchBytes(link.url);
  } catch (err) {
    return { ...doc, status: 'download-failed', note: err.message };
  }
  doc.doc_hash = sha256(bytes);

  /* Already seen? A finding someone (or a previous run) finished with is
   * left alone. A pending one is read again — that is how the findings
   * from before this importer existed get imported, and how one that
   * failed on a since-fixed spec gets another go. */
  const { data: existing } = await supabaseAdmin
    .from('exam_timetable_findings')
    .select('id, status')
    .eq('board', source.board)
    .eq('doc_hash', doc.doc_hash)
    .maybeSingle();

  if (existing && existing.status !== 'pending' && !reportAll) {
    return { ...doc, status: 'no-change' };
  }

  /* ── Read it ─────────────────────────────────────────────────────── */
  let extracted;
  if (/\.pdf(\?|#|$)/i.test(link.url)) {
    try {
      extracted = await extractFromPdf(source.board, bytes, year);
    } catch (err) {
      extracted = { supported: false, resolved: [], failed: [], rows: [], error: err.message };
    }
  } else {
    /* CSV still goes through the old best-effort parser and waits for a
     * human: no board currently publishes one, so there is nothing to
     * build an automatic reader against. */
    const parsed = parseDocument(link.url, bytes);
    extracted = { supported: false, resolved: [], failed: [], rows: [], legacy: parsed };
  }

  /* ── Import what passed ──────────────────────────────────────────────
   * The finding row is created first so every imported exam date can
   * point back at the document it came from (exam_dates.finding_id). */
  const findingId = dryRun ? null : (existing?.id || await createFinding(supabaseAdmin, source, doc));

  const imported = [];
  const skipped  = [];
  for (const r of extracted.resolved) {
    const outcome = dryRun
      ? { ok: true }
      : await importSpec(supabaseAdmin, r, findingId);
    if (outcome.ok) imported.push({ key: r.key, rows: r.rows });
    else skipped.push({ key: r.key, reason: outcome.reason, error: !!outcome.error });
  }

  const failed = extracted.failed.map(f => ({ key: f.key, problems: f.problems }));
  const needsHuman = failed.length > 0 || skipped.some(s => s.error) || !!extracted.legacy?.rows?.length
                  || (!extracted.supported && !extracted.legacy);

  let status, note;
  if (!extracted.supported && !extracted.legacy) {
    status = 'needs-review';
    note = extracted.error
      ? `Could not read this PDF (${extracted.error}). Open it and use the paste box.`
      : `No automatic reader for ${source.board} yet. Open it and use the paste box.`;
  } else if (extracted.legacy) {
    status = extracted.legacy.rows.length ? 'needs-review' : 'irrelevant';
    note = extracted.legacy.note;
  } else if (!imported.length && !failed.length && !skipped.length) {
    status = 'irrelevant';
    note = 'None of the subjects on the site are in this document.';
  } else {
    status = needsHuman ? 'needs-review' : 'imported';
    note = summarise(imported, failed, skipped);
  }

  if (!dryRun) {
    /* Rows for the review page: only the ones for specs that did NOT go
     * live, in the shape the page's table already renders. */
    const reviewRows = extracted.legacy?.rows || extracted.failed.flatMap(f => f.rows.map(r => ({
      entry_code: r.code, title: r.title, exam_date: r.exam_date,
      session: r.session, duration: r.duration, raw: [r.code, r.title, r.exam_date, r.session, r.duration].filter(Boolean)
    })));

    await updateFinding(supabaseAdmin, findingId, {
      status: status === 'needs-review' ? 'pending' : status === 'imported' ? 'approved' : 'dismissed',
      rows:   reviewRows,
      note
    });
  }

  return {
    ...doc,
    status,
    note,
    /* A pending finding is re-read every run. Without this, one subject
     * that needs a human would re-send the same email every Monday. */
    seenBefore: !!existing,
    imported: imported.map(i => ({ key: i.key, dates: i.rows.map(r => `${r.paper}: ${r.exam_date} ${r.session}`) })),
    failed,
    skipped: skipped.map(({ key, reason }) => ({ key, reason }))
  };
}

function summarise(imported, failed, skipped) {
  const parts = [];
  if (imported.length) parts.push(`Imported automatically: ${imported.map(i => i.key).join(', ')}.`);
  if (skipped.length)  parts.push(`Left alone: ${skipped.map(s => `${s.key} (${s.reason})`).join('; ')}.`);
  if (failed.length)   parts.push(`Needs checking: ${failed.map(f => `${f.key} — ${f.problems.join('; ')}`).join(' | ')}.`);
  return parts.join(' ');
}

/* From July the next summer is the one students are revising for. */
function currentSeriesYear(now) {
  return now.getUTCMonth() >= 6 ? now.getUTCFullYear() + 1 : now.getUTCFullYear();
}


/* ── Writing exam dates ──────────────────────────────────────────────────
 * One spec at a time, all of its papers together.
 *
 * Hand-entered rows win. If any row for this subject, board, level and
 * series has source = 'manual', an admin has corrected it and the import
 * steps aside entirely — re-importing over a correction is how a fixed
 * date quietly un-fixes itself a week later.
 *
 * Import rows for the spec that are not in the new set are deleted, so an
 * amended timetable that renames or drops a paper does not leave the old
 * one on the dashboard next to its replacement.
 * ──────────────────────────────────────────────────────────────────────── */
async function importSpec(supabaseAdmin, resolved, findingId) {
  const { spec, rows } = resolved;
  const series = rows[0].series;

  const { data: current, error: readErr } = await supabaseAdmin
    .from('exam_dates')
    .select('id, paper, source')
    .eq('subject', spec.subject)
    .eq('exam_board', spec.board)
    .eq('level', spec.level)
    .eq('series', series);

  if (readErr) return { ok: false, error: true, reason: `could not read exam_dates: ${readErr.message}` };
  if ((current || []).some(r => r.source === 'manual')) {
    return { ok: false, reason: 'has hand-entered dates' };
  }

  const keep  = new Set(rows.map(r => r.paper));
  const stale = (current || []).filter(r => !keep.has(r.paper)).map(r => r.id);
  if (stale.length) {
    const { error } = await supabaseAdmin.from('exam_dates').delete().in('id', stale);
    if (error) return { ok: false, error: true, reason: `could not remove old rows: ${error.message}` };
  }

  const now = new Date().toISOString();
  const { error } = await supabaseAdmin
    .from('exam_dates')
    .upsert(rows.map(r => ({ ...r, source: 'import', finding_id: findingId, updated_at: now })),
            { onConflict: 'subject,exam_board,level,paper,series' });

  if (error) return { ok: false, error: true, reason: `could not save: ${error.message}` };
  return { ok: true };
}


/* ── Reading the board's page ────────────────────────────────────────────
 * Deliberately not a DOM parser. We want href, the link's visible text, and
 * nothing else; a regex over anchors cannot be broken by malformed markup
 * the way a strict parser can, and it adds no dependency to a function that
 * has to deploy reliably once a month.
 * ──────────────────────────────────────────────────────────────────────── */

function findTimetableLinks(html, baseUrl) {
  const anchors = [...String(html).matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  const seen = new Set();
  const out  = [];

  for (const [, rawHref, rawText] of anchors) {
    let url;
    try {
      url = new URL(rawHref, baseUrl).toString();
    } catch (e) { continue; }          // javascript:, mailto:, malformed

    if (!DOC_EXTENSION.test(url)) continue;
    if (seen.has(url)) continue;
    seen.add(url);

    const scored = scoreLink(url, stripTags(rawText).slice(0, 200));
    if (scored) out.push(scored);
  }

  /* Pearson's page puts its document links in data attributes that a
   * script turns into anchors, so the loop above sees none of them. Any
   * document URL in the raw HTML that no anchor already gave us is scored
   * the same way, with its filename standing in for the link text. */
  for (const [raw] of String(html).matchAll(/(?:https?:\/\/[^\s"'<>(),]+|\/content\/dam\/[^\s"'<>(),]+)\.(?:pdf|xlsx|xls|csv)\b/gi)) {
    let url;
    try { url = new URL(raw, baseUrl).toString(); } catch (e) { continue; }
    if (seen.has(url)) continue;
    seen.add(url);
    const text = decodeURIComponent(url.split('/').pop());
    const scored = scoreLink(url, text);
    if (scored) out.push(scored);
  }

  return out;
}

function scoreLink(url, text) {
  const haystack = `${text} ${decodeURIComponent(url)}`;
  if (!TIMETABLE_WORDS.test(haystack)) return null;

  /* The series year. Boards write "Summer 2027" or bury 2027 in the
   * filename — Pearson glues it to the next word ("summer-2027final"), so
   * this looks for four digits not touching other digits rather than a
   * word boundary. Bounded to a plausible window so a phone number or a
   * spec code cannot be mistaken for a year. */
  const years = [...haystack.matchAll(/(?<!\d)(20[2-9]\d)(?!\d)/g)]
    .map(m => parseInt(m[1], 10))
    .filter(y => y >= 2024 && y <= 2099);
  const year = years.length ? Math.max(...years) : null;

  /* Prefer the summer series — it is the one students sit and the one
   * exam-dates-config.js has always described. November and January
   * resit timetables are real but are not what the dashboard shows. */
  let score = 0;
  if (/summer|june|may/i.test(haystack))      score += 3;
  if (/final|confirmed/i.test(haystack))      score += 2;
  if (/provisional|draft/i.test(haystack))    score -= 1;
  if (/november|nov\b|january|october|autumn/i.test(haystack)) score -= 3;
  if (/\.csv(\?|#|$)/i.test(url))             score += 1;  // the one we can parse

  return { url, text, year, score };
}

function stripTags(html) {
  return String(html)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&amp;/g, '&')          // last, so "&amp;gt;" stays "&gt;"
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^>\s*/, '');           // Eduqas prefixes every link with a ">" arrow
}


/* ── Parsing a CSV ───────────────────────────────────────────────────────
 * PDFs go through api/_exam-timetable-auto.js, which matches known entry
 * codes and can therefore import on its own. A CSV goes through the free-
 * text parser the admin paste box uses, whose rows are guesses about which
 * subject they belong to — so they wait on the review page, as before.
 * ──────────────────────────────────────────────────────────────────────── */

function parseDocument(url, bytes) {
  if (!/\.csv(\?|#|$)/i.test(url)) {
    const kind = (url.match(/\.(pdf|xlsx|xls)(\?|#|$)/i) || [, 'that format'])[1];
    return {
      rows: [],
      note: `Not parsed — this is a ${String(kind).toUpperCase()} file. `
          + `Open it, copy the table, and paste it into the review page to turn it into rows.`
    };
  }
  return parseDelimited(bytes.toString('utf8'));
}


/* ── Talking to the database ─────────────────────────────────────────── */

async function recordCheck(supabaseAdmin, source, result) {
  const { error } = await supabaseAdmin
    .from('exam_timetable_sources')
    .update({
      last_checked_at: new Date().toISOString(),
      last_status:     result.status,
      last_error:      result.error || null,
      /* Only advance the remembered document when we actually saw one.
       * A fetch failure must not overwrite what we knew, or the next
       * successful run reports the same old timetable as new. */
      ...(result.doc_url  ? { last_doc_url:  result.doc_url  } : {}),
      ...(result.doc_hash ? { last_doc_hash: result.doc_hash } : {})
    })
    .eq('id', source.id);

  if (error) console.error(`[timetable-check] ${source.board}: could not record check:`, error.message);
}

/* Insert-or-fetch on (board, doc_hash), so two runs racing on the same
 * document end up pointing at one finding rather than two. */
async function createFinding(supabaseAdmin, source, doc) {
  const { error } = await supabaseAdmin
    .from('exam_timetable_findings')
    .upsert({
      source_id: source.id,
      board:     source.board,
      doc_url:   doc.doc_url,
      doc_hash:  doc.doc_hash,
      doc_title: doc.doc_title || null,
      series:    doc.series || null
    }, { onConflict: 'board,doc_hash', ignoreDuplicates: true });

  if (error) console.error(`[timetable-check] ${source.board}: could not record finding:`, error.message);

  const { data } = await supabaseAdmin
    .from('exam_timetable_findings')
    .select('id')
    .eq('board', source.board)
    .eq('doc_hash', doc.doc_hash)
    .maybeSingle();
  return data?.id || null;
}

/* reviewed_by stays null on an automatic decision — that null is how the
 * review page and anyone reading the table can tell the cron did it. */
async function updateFinding(supabaseAdmin, findingId, { status, rows, note }) {
  if (!findingId) return;
  const { error } = await supabaseAdmin
    .from('exam_timetable_findings')
    .update({
      status,
      parsed_rows: rows,
      parse_note:  note,
      reviewed_at: status === 'pending' ? null : new Date().toISOString(),
      reviewed_by: null
    })
    .eq('id', findingId);

  if (error) console.error('[timetable-check] could not update finding:', error.message);
}


/* ── The email ───────────────────────────────────────────────────────────
 * Goes to you, not to a student, so it is plain and short. Inline styles
 * for the same reason the reminder email uses them: Gmail strips <style>.
 *
 * Every board-supplied string goes through escHtml. The document titles in
 * here come off a third-party web page, and this email lands in an inbox
 * that renders HTML.
 * ──────────────────────────────────────────────────────────────────────── */

async function sendReport(apiKey, newDocs, failures) {
  const siteUrl = process.env.SITE_URL || 'https://raglearning.uk';
  const to = process.env.TIMETABLE_ALERT_TO
          || process.env.REMINDER_REPLY_TO
          || 'hello@raglearning.uk';

  const importedCount = newDocs.reduce((n, d) => n + (d.imported?.length || 0), 0);
  const reviewCount   = newDocs.filter(d => d.status === 'needs-review').length;

  const subject = newDocs.length
    ? `Exam timetable: ${importedCount} subject${importedCount === 1 ? '' : 's'} updated automatically`
      + (reviewCount ? `, ${reviewCount} document${reviewCount === 1 ? '' : 's'} need${reviewCount === 1 ? 's' : ''} a look` : '')
    : `Exam timetable watch could not reach ${failures.map(f => f.board).join(', ')}`;

  const payload = {
    from: process.env.REMINDER_FROM || 'RAG Learning <hello@raglearning.uk>',
    to: [to],
    subject,
    html: reportHtml(newDocs, failures, siteUrl),
    text: reportText(newDocs, failures, siteUrl)
  };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error(`Resend ${response.status}: ${await response.text()}`);
  const body = await response.json().catch(() => ({}));
  return body.id || null;
}

function reportHtml(newDocs, failures, siteUrl) {
  const reviewUrl = `${siteUrl}/admin-exam-dates`;

  let html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;`
           + `max-width:560px;margin:0 auto;padding:24px;color:#1f2937;line-height:1.55;">`
           + `<h2 style="font-size:18px;margin:0 0 16px;">Exam timetable watch</h2>`;

  for (const doc of newDocs) {
    const flagged = doc.status === 'needs-review';
    html += `<div style="border:1px solid ${flagged ? '#fde68a' : '#e5e7eb'};${flagged ? 'background:#fffbeb;' : ''}`
         +  `border-radius:8px;padding:14px;margin-bottom:12px;">`
         +  `<div style="font-weight:600;margin-bottom:4px;">${escHtml(doc.board)}`
         +  (doc.series ? ` — ${escHtml(doc.series)}` : '') + `</div>`
         +  `<div style="font-size:13px;color:#4b5563;margin-bottom:8px;">${escHtml(doc.doc_title || doc.doc_url)}</div>`;

    if (doc.imported?.length) {
      html += `<div style="font-size:13px;margin-bottom:6px;"><strong>Live now:</strong> `
           +  escHtml(doc.imported.map(i => i.key).join(', ')) + `</div>`;
    }
    for (const f of doc.failed || []) {
      html += `<div style="font-size:13px;color:#92400e;margin-bottom:4px;"><strong>Needs checking — ${escHtml(f.key)}:</strong> `
           +  escHtml(f.problems.join('; ')) + `</div>`;
    }
    for (const s of doc.skipped || []) {
      html += `<div style="font-size:13px;color:#4b5563;margin-bottom:4px;">Left alone — ${escHtml(s.key)}: ${escHtml(s.reason)}</div>`;
    }
    if (!doc.imported?.length && !doc.failed?.length && doc.note) {
      html += `<div style="font-size:13px;color:#4b5563;margin-bottom:6px;">${escHtml(doc.note)}</div>`;
    }

    html += `<a href="${escHtml(doc.doc_url)}" style="font-size:13px;color:#2563eb;">Open the document</a>`
         +  `</div>`;
  }

  for (const fail of failures) {
    html += `<div style="border:1px solid #fecaca;background:#fef2f2;border-radius:8px;padding:14px;margin-bottom:12px;">`
         +  `<div style="font-weight:600;margin-bottom:4px;">${escHtml(fail.board)} — could not reach the page</div>`
         +  `<div style="font-size:13px;color:#4b5563;">${escHtml(fail.error || '')}</div>`
         +  `<div style="font-size:13px;color:#4b5563;margin-top:6px;">`
         +  `The page has probably moved. Fix the URL on the review page — the watch is blind for this board until you do.</div>`
         +  `</div>`;
  }

  if (newDocs.some(d => d.status === 'needs-review')) {
    html += `<p style="font-size:14px;">Anything under "Needs checking" is waiting on the review page. Everything else is already on students' dashboards.</p>`;
  } else if (newDocs.length) {
    html += `<p style="font-size:14px;">Nothing needs you. The dates are already on students' dashboards.</p>`;
  }

  html += `<p style="margin-top:20px;"><a href="${escHtml(reviewUrl)}" `
       +  `style="display:inline-block;background:#111827;color:#fff;text-decoration:none;`
       +  `padding:10px 18px;border-radius:6px;font-size:14px;">Open exam dates</a></p>`
       +  `</div>`;

  return html;
}

function reportText(newDocs, failures, siteUrl) {
  const lines = ['Exam timetable watch', ''];

  for (const doc of newDocs) {
    lines.push(`${doc.board}${doc.series ? ` — ${doc.series}` : ''}`);
    lines.push(`  ${doc.doc_title || ''}`.trimEnd());
    if (doc.imported?.length) lines.push(`  Live now: ${doc.imported.map(i => i.key).join(', ')}`);
    for (const f of doc.failed || [])  lines.push(`  Needs checking — ${f.key}: ${f.problems.join('; ')}`);
    for (const s of doc.skipped || []) lines.push(`  Left alone — ${s.key}: ${s.reason}`);
    if (!doc.imported?.length && !doc.failed?.length && doc.note) lines.push(`  ${doc.note}`);
    lines.push(`  ${doc.doc_url}`);
    lines.push('');
  }

  for (const fail of failures) {
    lines.push(`${fail.board} — could not reach the page: ${fail.error || ''}`);
    lines.push('  The page has probably moved. Fix the URL on the review page.');
    lines.push('');
  }

  lines.push(`Exam dates: ${siteUrl}/admin-exam-dates`);
  return lines.join('\n');
}


/* ── Small helpers ───────────────────────────────────────────────────── */

async function fetchText(url) {
  const res = await withTimeout(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.text();
}

async function fetchBytes(url) {
  const res = await withTimeout(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const declared = parseInt(res.headers.get('content-length') || '0', 10);
  if (declared > MAX_DOC_BYTES) throw new Error(`Document is ${Math.round(declared / 1e6)}MB`);

  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length > MAX_DOC_BYTES) throw new Error('Document is too large');
  return buf;
}

function withTimeout(url) {
  /* AbortSignal.timeout would be tidier but is not on every Node runtime
   * Vercel might give us; an explicit controller works everywhere. */
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  return fetch(url, {
    signal: controller.signal,
    redirect: 'follow',
    headers: { 'User-Agent': USER_AGENT, 'Accept': '*/*' }
  }).finally(() => clearTimeout(timer));
}

function sha256(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function bearerMatches(header, secret) {
  const expected = `Bearer ${secret}`;
  const given = String(header || '');
  if (given.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(given), Buffer.from(expected));
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* Exported for scripts/check-timetable-sources.js, which runs the same link
 * detection against the live board pages without needing CRON_SECRET, the
 * database or a deploy. Checking a URL should not require production. */
module.exports.findTimetableLinks = findTimetableLinks;
