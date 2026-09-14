/**
 * Exam timetable watch — runs on the 1st of each month from a Vercel cron.
 *
 * Opens each board's timetable page, looks for a timetable document newer
 * than the series we already hold, and — if it finds one — records it and
 * emails you a link. Eleven months of the year it finds nothing and exits.
 *
 * THIS FUNCTION NEVER WRITES AN EXAM DATE. It only ever inserts into
 * exam_timetable_findings. Nothing reaches exam_dates, and therefore
 * nothing reaches a student's dashboard, until an admin presses Approve on
 * admin-exam-dates.html. The reasoning is in the migration header and worth
 * repeating: boards publish PDFs whose layout changes between years, and a
 * parser that mis-reads a column would put a wrong date in front of someone
 * revising against it. A missing date is a gap; a wrong one is a disaster.
 *
 * So the two halves have very different confidence levels, and the code
 * treats them differently:
 *
 *   DETECTION is robust. "A document we have not seen before appeared on
 *   OCR's timetable page, here is the URL" survives any layout change,
 *   because it reads nothing but <a href> and a four-digit year. This is
 *   the part that is actually worth automating.
 *
 *   PARSING is best-effort and deliberately narrow. CSV only — see
 *   parseDelimited below for why there is no PDF or XLSX path here. When it
 *   cannot parse, it says so and still reports the link, so the run
 *   degrades to "go look at this" rather than to silence.
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
 * Manual dry run (fetches the board pages, writes nothing, sends nothing —
 * returns exactly what a real run would have recorded):
 *   curl -H "Authorization: Bearer $CRON_SECRET" \
 *        https://raglearning.uk/api/cron/exam-timetable-check?dry=1
 *
 * Force a report even when nothing is new, to check the email renders:
 *   curl -H "Authorization: Bearer $CRON_SECRET" \
 *        "https://raglearning.uk/api/cron/exam-timetable-check?dry=1&all=1"
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

/* Four board pages, each fetched once. Vercel gives this function 60s
 * (vercel.json); a slow board should cost us one source, not the run. */
const FETCH_TIMEOUT_MS = 12000;

/* Boards serve the same public page to a browser and to us, but a request
 * with no User-Agent gets bot-filtered by some CDNs. This is honest about
 * what it is and points at a page explaining why we are asking. */
const USER_AGENT =
  'RAGLearningTimetableBot/1.0 (+https://raglearning.uk/contact; monthly exam timetable check)';

/* Documents bigger than this are not timetables, and we only want the bytes
 * to hash them. 12MB is generous — the real ones are well under 1MB. */
const MAX_DOC_BYTES = 12 * 1024 * 1024;

/* A link has to look like a timetable to be worth reporting. Board sites
 * also link specifications, entry deadlines and JCQ booklets from the same
 * page, and reporting those would train you to ignore the email. */
const TIMETABLE_WORDS = /timetable|exam\s*dates|examination\s*dates/i;
const DOC_EXTENSION   = /\.(pdf|xlsx|xls|csv)(\?|#|$)/i;


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

  /* ── What counts as "new" ────────────────────────────────────────────
   * The floor year. Without it the first run finds the summer 2026
   * timetable — which we already have, typed into exam-dates-config.js —
   * and reports all four boards as if something had happened.
   *
   * Read from the live table rather than hard-coded, so the floor rises on
   * its own every time you approve a series and this never needs editing.
   * Empty table falls back to the config's series, 2026. */
  const floorYear = await newestSeriesYear(supabaseAdmin);

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
    const result = { board: source.board, page_url: source.page_url };

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
      results.push(result);
      if (!dryRun) await recordCheck(supabaseAdmin, source, result);
      continue;
    }

    /* ── Find the candidate ──────────────────────────────────────────── */
    const candidates = findTimetableLinks(html, source.page_url)
      .filter(link => reportAll || (link.year && link.year > floorYear))
      .sort((a, b) => (b.year || 0) - (a.year || 0) || b.score - a.score);

    const best = candidates[0];
    if (!best) {
      result.status = 'no-change';
      results.push(result);
      if (!dryRun) await recordCheck(supabaseAdmin, source, result);
      continue;
    }

    result.doc_url   = best.url;
    result.doc_title = best.text;
    result.series    = best.year ? `summer-${best.year}` : null;

    /* ── Hash it ─────────────────────────────────────────────────────
     * Hash the document's bytes, not its URL. Boards re-issue a timetable
     * at the same URL when they amend a date — an amendment is exactly the
     * thing you most want to be told about, and a URL comparison would
     * miss it entirely. If the document will not download, fall back to
     * hashing the URL so the finding is still recorded once. */
    let bytes = null;
    try {
      bytes = await fetchBytes(best.url);
      result.doc_hash = sha256(bytes);
    } catch (err) {
      result.doc_hash    = sha256(Buffer.from(best.url));
      result.download_note = `Could not download the document (${err.message}) — hashed its URL instead.`;
    }

    if (result.doc_hash === source.last_doc_hash && !reportAll) {
      result.status = 'no-change';
      results.push(result);
      if (!dryRun) await recordCheck(supabaseAdmin, source, result);
      continue;
    }

    /* ── Best-effort parse ───────────────────────────────────────────── */
    const parsed = bytes ? parseDocument(best.url, bytes) : {
      rows: [],
      note: result.download_note || 'Document could not be downloaded.'
    };

    result.status     = 'new-document';
    result.rows       = parsed.rows.length;
    result.parse_note = parsed.note;
    results.push(result);

    if (!dryRun) {
      await recordFinding(supabaseAdmin, source, result, parsed);
      await recordCheck(supabaseAdmin, source, result);
    }
  }

  /* ── Tell somebody ───────────────────────────────────────────────────
   * Only when there is something to say. A monthly "nothing happened"
   * email is an email you stop reading, and the run you need to notice is
   * the one eleven months later.
   *
   * Fetch failures count as something to say — that is the watch telling
   * you it has gone blind. */
  const newDocs  = results.filter(r => r.status === 'new-document');
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
    floorYear,
    checked: results.length,
    newDocuments: newDocs.length,
    failures: failures.length,
    emailed,
    results
  });
};


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

    const text    = stripTags(rawText).slice(0, 200);
    const haystack = `${text} ${decodeURIComponent(url)}`;
    if (!TIMETABLE_WORDS.test(haystack)) continue;

    /* The series year. Boards write "Summer 2027" or bury 2027 in the
     * filename; both work. Bounded to a plausible window so a phone number
     * or a spec code cannot be mistaken for a year. */
    const years = [...haystack.matchAll(/\b(20[2-9]\d)\b/g)]
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
    if (/november|january|autumn/i.test(haystack)) score -= 3;
    if (/\.csv(\?|#|$)/i.test(url))             score += 1;  // the one we can parse

    out.push({ url, text, year, score });
  }

  return out;
}

function stripTags(html) {
  return String(html)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}


/* ── Parsing ─────────────────────────────────────────────────────────────
 * CSV and nothing else, on purpose.
 *
 * PDF and XLSX both need a dependency, and both are the formats whose
 * layout moves between years. Adding a parser for them would produce rows
 * that look authoritative and are wrong in ways nobody checks — the exact
 * failure this whole design is built to avoid. The admin page's paste box
 * runs this same function over a table copied out of the board's PDF or
 * spreadsheet, which takes half a minute once a year and puts a human eye
 * on the data at the moment it enters the system.
 *
 * Everything this returns is a suggestion. The review page shows every row
 * for checking before any of it becomes an exam date.
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

/* Shared by the cron and by the admin paste box, which is why it takes text
 * and not a file. Accepts comma, tab or pipe separation — a table pasted out
 * of a PDF usually arrives tab-separated, out of Excel always does. */
function parseDelimited(text) {
  const lines = String(text).split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (!lines.length) return { rows: [], note: 'Nothing to parse.' };

  const rows = [];
  let skipped = 0;

  for (const line of lines) {
    const cells = splitRow(line);
    if (cells.length < 2) { skipped++; continue; }

    const joined = cells.join(' ');

    /* A row is only a row if it carries a date. Headers, footnotes, page
     * numbers and board marketing all fail this and are counted as skipped
     * rather than guessed at. */
    const date = findDate(joined);
    if (!date) { skipped++; continue; }

    rows.push({
      entry_code: (joined.match(/\b([A-Z0-9]{4,6}\s?\/\s?[0-9A-Z]{1,3})\b/) || [])[1]?.replace(/\s/g, '') || null,
      title:      cells.find(c => /[a-z]{4}/i.test(c) && !/^\d/.test(c)) || cells[0],
      exam_date:  date,
      session:    /\bpm\b|afternoon/i.test(joined) ? 'PM' : 'AM',
      duration:   (joined.match(/\b(\d{1,2}\s?h(?:\s?\d{1,2}\s?m)?|\d{1,3}\s?min(?:ute)?s?)\b/i) || [])[1] || null,
      raw:        cells
    });
  }

  return {
    rows,
    note: rows.length
      ? `Parsed ${rows.length} row${rows.length === 1 ? '' : 's'}`
        + (skipped ? `, skipped ${skipped} line${skipped === 1 ? '' : 's'} with no date in them.` : '.')
        + ' Every row needs checking before approval.'
      : `Found no rows with a date in them across ${lines.length} line${lines.length === 1 ? '' : 's'}.`
  };
}

/* Quoted CSV cells can contain the delimiter, and paper titles genuinely do
 * ("Paper 3 — Pure, Statistics and Mechanics"). Pick the delimiter from the
 * line, then split on it outside quotes. */
function splitRow(line) {
  const delim = line.includes('\t') ? '\t'
              : line.includes('|')  ? '|'
              : ',';

  const cells = [];
  let cur = '', inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { cur += '"'; i++; }  // escaped ""
      else inQuotes = !inQuotes;
    } else if (ch === delim && !inQuotes) {
      cells.push(cur.trim()); cur = '';
    } else {
      cur += ch;
    }
  }
  cells.push(cur.trim());
  return cells.filter(c => c !== '');
}

/* Returns an ISO date or null. UK boards write dates day-first, so 05/06 is
 * the 5th of June and never the 6th of May — an American reading of that
 * column would move an exam by a month without looking wrong anywhere. */
const MONTHS = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12
};

function findDate(text) {
  /* "Wednesday 10 June 2027" / "10 Jun 27" */
  let m = text.match(/\b(\d{1,2})\s+([A-Za-z]{3,9})\.?\s+(\d{4}|\d{2})\b/);
  if (m) {
    const month = MONTHS[m[2].slice(0, 3).toLowerCase()];
    if (month) return iso(fullYear(m[3]), month, m[1]);
  }

  /* "10/06/2027" or "10-06-2027" — day first. */
  m = text.match(/\b(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4}|\d{2})\b/);
  if (m) return iso(fullYear(m[3]), +m[2], +m[1]);

  /* "2027-06-10" — already ISO, which is the only unambiguous one. */
  m = text.match(/\b(\d{4})-(\d{2})-(\d{2})\b/);
  if (m) return iso(+m[1], +m[2], +m[3]);

  return null;
}

function fullYear(y) {
  const n = parseInt(y, 10);
  return n < 100 ? 2000 + n : n;
}

function iso(year, month, day) {
  if (!(month >= 1 && month <= 12) || !(day >= 1 && day <= 31)) return null;
  if (!(year >= 2024 && year <= 2099)) return null;
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}


/* ── Talking to the database ─────────────────────────────────────────── */

async function newestSeriesYear(supabaseAdmin) {
  const { data } = await supabaseAdmin
    .from('exam_dates')
    .select('series')
    .order('series', { ascending: false })
    .limit(1);

  const series = data?.[0]?.series;
  const year   = series && parseInt(String(series).match(/(20\d{2})/)?.[1] || '', 10);

  /* No rows yet means nothing has been approved, but exam-dates-config.js
   * still describes summer 2026 and those dates are on dashboards today.
   * Treating the table's emptiness as "we have nothing" would report the
   * 2026 timetable as news. */
  return Number.isFinite(year) ? year : 2026;
}

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

async function recordFinding(supabaseAdmin, source, result, parsed) {
  /* onConflict on (board, doc_hash) with ignoreDuplicates is what makes a
   * re-run safe. If you curl this by hand twice in an afternoon, the second
   * run leaves the first finding — and any review already done on it —
   * exactly as it was. */
  const { error } = await supabaseAdmin
    .from('exam_timetable_findings')
    .upsert({
      source_id:   source.id,
      board:       source.board,
      doc_url:     result.doc_url,
      doc_hash:    result.doc_hash,
      doc_title:   result.doc_title || null,
      series:      result.series || null,
      parsed_rows: parsed.rows,
      parse_note:  [result.download_note, parsed.note].filter(Boolean).join(' ')
    }, { onConflict: 'board,doc_hash', ignoreDuplicates: true });

  if (error) console.error(`[timetable-check] ${source.board}: could not record finding:`, error.message);
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

  const subject = newDocs.length
    ? `Exam timetable: ${newDocs.map(d => d.board).join(', ')} published something new`
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
    html += `<div style="border:1px solid #e5e7eb;border-radius:8px;padding:14px;margin-bottom:12px;">`
         +  `<div style="font-weight:600;margin-bottom:4px;">${escHtml(doc.board)}`
         +  (doc.series ? ` — ${escHtml(doc.series)}` : '') + `</div>`
         +  `<div style="font-size:13px;color:#4b5563;margin-bottom:8px;">${escHtml(doc.doc_title || doc.doc_url)}</div>`
         +  `<div style="font-size:13px;color:#4b5563;margin-bottom:8px;">`
         +  (doc.rows ? `${doc.rows} row${doc.rows === 1 ? '' : 's'} parsed — all need checking.`
                      : escHtml(doc.parse_note || 'Not parsed.'))
         +  `</div>`
         +  `<a href="${escHtml(doc.doc_url)}" style="font-size:13px;color:#2563eb;">Open the document</a>`
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

  if (newDocs.length) {
    html += `<p style="font-size:14px;">Nothing is live yet. Every row waits on the review page until you approve it.</p>`;
  }

  html += `<p style="margin-top:20px;"><a href="${escHtml(reviewUrl)}" `
       +  `style="display:inline-block;background:#111827;color:#fff;text-decoration:none;`
       +  `padding:10px 18px;border-radius:6px;font-size:14px;">Review</a></p>`
       +  `</div>`;

  return html;
}

function reportText(newDocs, failures, siteUrl) {
  const lines = ['Exam timetable watch', ''];

  for (const doc of newDocs) {
    lines.push(`${doc.board}${doc.series ? ` — ${doc.series}` : ''}`);
    lines.push(`  ${doc.doc_title || ''}`.trimEnd());
    lines.push(`  ${doc.rows ? `${doc.rows} rows parsed — all need checking.` : (doc.parse_note || 'Not parsed.')}`);
    lines.push(`  ${doc.doc_url}`);
    lines.push('');
  }

  for (const fail of failures) {
    lines.push(`${fail.board} — could not reach the page: ${fail.error || ''}`);
    lines.push('  The page has probably moved. Fix the URL on the review page.');
    lines.push('');
  }

  if (newDocs.length) lines.push('Nothing is live until you approve it.');
  lines.push(`Review: ${siteUrl}/admin-exam-dates`);
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

/* The admin paste box posts here rather than duplicating the parser in the
 * browser — one implementation, one set of date-format bugs to fix. */
module.exports.parseDelimited = parseDelimited;
