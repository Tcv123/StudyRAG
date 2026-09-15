-- ═══════════════════════════════════════════════════════════════════════
-- bug_reports seed — the 14 September 2026 full-site audit
--
-- Split into one INSERT per finding on purpose. The first version of this
-- was a single statement with 32 value tuples, which is all-or-nothing: one
-- bad row, one truncated paste, or one client that splits on ';' and you get
-- an empty table with no clue which row caused it. Thirty-two statements
-- cost nothing and fail individually, naming the row.
--
-- Every one is ON CONFLICT (ref) DO NOTHING, so running this twice changes
-- nothing and it will never overwrite an edit made from the page.
--
-- Safe to run after db/migrations/2026-09-14-bug-reports.sql, or on its own
-- if only the schema half of that file landed.
-- ═══════════════════════════════════════════════════════════════════════

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('R-02', 'The paid Stripe path writes to four columns that do not exist', 'red', 'open', 'live', 'api/create-checkout-session.js · api/stripe-webhook.js · settings.html:690', 'The rest of the app reads subscription_tier / subscription_status / subscription_expires_at. Only the Stripe files use pro_status, pro_plan, pro_current_period_end and stripe_subscription_id, none of which are on the live profiles table. So: checkout creates a brand new Stripe customer every attempt and the already_subscribed guard can never fire; success_url points at /auth/subscription-success.html, which does not exist, so the customer pays and lands on a 404; the webhook update fails, logs, and still returns 200 so Stripe never retries; and Settings keeps saying "Free".', 'pro_status              column profiles.pro_status does not exist
pro_plan                column profiles.pro_plan does not exist
pro_current_period_end  column ... does not exist
stripe_subscription_id  column ... does not exist
subscription_tier       ok', 'Point the three Stripe files at the subscription_* columns the rest of the app already uses, and create the two redirect pages. The webhook should return non-200 when the profile write fails, so Stripe retries.', 10)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('R-05', 'The in-app pricing page tells Pro users they are on Free', 'red', 'open', 'live', 'pricing-app.html:279', '"You’re on this plan" is static markup on the Free card; the page never reads the user’s subscription at all. A Pro user sees themselves as Free and is offered "Start 7-day free trial", which posts to create-checkout-session. The only thing between them and a second subscription is the already_subscribed guard, which is broken by R-02.', 'profile   subscription_tier pro_monthly - status active - expires 2026-12-14
page      Free card -> "You’re on this plan"
          Pro card  -> "Start 7-day free trial"', 'Read the subscription on load and swap which card says "You’re on this plan". nav-gating.js already has the exact isPro() logic to reuse.', 20)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('R-06', 'Deleting an account leaves every row behind, and the email with it', 'red', 'open', 'live', 'live profiles schema · supabase-config.js', 'supabase-config.js documents every user-scoped table as REFERENCES profiles(id) ON DELETE CASCADE, and the whole deletion design rests on it. The live tables have no such constraint — and it is absent, not misconfigured: NO ACTION would have refused the parent delete, and SET NULL would have nulled user_id so RLS stopped returning the rows. For a real student using Settings, subjects, RAG progress, medals and their attribution row stay in the database alongside a live auth.users record holding their email. user_medals and user_attribution also accepted a delete and removed nothing, so their RLS has no DELETE policy.', '              auth      profiles  subjects  progress  medals  attribution
teacher       signs in  GONE      1         1         13      1
student 1     signs in  GONE      1         0         2       0
student 2     signs in  GONE      1         0         2       0', 'Add the missing foreign keys, then re-check end to end with one throwaway account: deleting from Settings should leave nothing in any user-scoped table and no auth.users row. Audit the RLS delete policies in the same pass.', 30)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-01', 'Six topic lists, and 16 of 46 subject/board combinations disagree', 'amber', 'open', 'live', 'medals-engine.js:84 · Dashboard.html:1858 · breakdown.html:651 · notes.html:428 · practice.html · flashcards-config.js', 'How many topics a spec has is written down six times and the copies have drifted. The Practice page renders "Mathematics - Diagnostic 1/17 - AQA - 1/12 tested" on a single card. Computer Science AQA GCSE and Biology OCR B GCSE can never reach 100%, so their completion medals can never fire. Further Maths Edexcel has no Dashboard entry, so its Diagnostics card reads "Coming soon" despite having notes, 17 topics in Breakdown and its own model-answer bank.', 'subject_board                  medals dash brkd notes pract cards
Mathematics_AQA                    17   17   17    12    12    12
Computer Science_AQA|alevel        10   10   12    10    10    10
Computer Science_AQA|gcse          12    8    -     8     8     8
Biology_OCR B|gcse                 22   23   23     -    23     -
Further Mathematics_Edexcel        17    -   17    17    17    17', 'Promote one list to a shared config the way subjects-config.js already works, and have the other five import it.', 40)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-02', 'The exam timetable is last year’s, so "Upcoming exams" shows exams already sat', 'amber', 'open', 'live', 'exam-dates-config.js · Dashboard.html:945 · breakdown.html:1798', 'Only the May/June 2026 series is in the config, with a note to update it every year. Every new sign-up is now revising for summer 2027. The Dashboard opens on June 2026 with every paper marked "Done", because it looks for the first exam month at or after today and, finding none, falls back to the most recent past month. Breakdown instead says "No upcoming exams. Add subjects in setup to see exam dates here." — blaming the user for a data problem. revision-timetable.html never reads EXAM_DATES at all, so the Pro feature sold as "study plans built around your exam timetable" is not wired to it.', null, 'Add the 2027 dates, then make the fallback say "no exams scheduled yet" rather than opening on a past month, so next September degrades gracefully.', 50)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-03', 'The RAG threshold is a fixed number, but the maximum score is random', 'amber', 'open', 'code', 'diagnostics/*.html — all 47', 'The written question replaces one MCQ of a randomly chosen tier and is always worth 3, so the maximum obtainable score changes run to run — while the green threshold stays at an absolute 8. A student who drops exactly one amber MCQ scores 9 and goes green in one case, 7 and goes amber in another. Same performance, different rating, decided by Math.random().', 'written lands on green -> max 11   green needs 8/11 = 73%
written lands on amber -> max 10   green needs 8/10 = 80%
written lands on red   -> max  9   green needs 8/9  = 89%', 'Make THRESHOLD a fraction of the achievable maximum, or stop randomising which tier the written question replaces.', 60)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-04', '2,471 mark schemes print a literal backslash-n instead of breaking lines', 'amber', 'open', 'live', 'questions/maths-aqa/* · questions/physics/* · questions/maths-edexcel/* · questions/further-maths-edexcel/*', 'Mark schemes render as one run-on paragraph with visible escape characters. The CSS is fine — .mark-scheme-text already has white-space: pre-line. The data is double-escaped, holding backslash-n as two characters rather than a newline. That is effectively all of Maths AQA practice and all of Physics Edexcel.', '1265  questions/maths-aqa/maths-aqa-practice.js
 838  questions/physics/physics-edexcel-practice.js
 326  questions/physics/physics-edexcel-written.js
  42  nine further maths-edexcel and further-maths files', 'Repair the data; the CSS already handles real newlines. Leave papers-config.js and questions/cs/cs-ocr-alevel-written.js alone — their sequences are deliberate Python samples and ASCII tree art.', 70)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-05', 'Seven mark schemes state a different answer than the one marked correct', 'amber', 'open', 'code', 'papers-config.js — OCR A Chemistry', 'Of the 415 multiple-choice mark schemes, 16 contain visible working-out a student should never see ("Hmm", "Wait:", "Let me recalculate", "Let me trust official") and 7 of those conclude on a different letter than points[] records. A student who gets one of these right is told they are wrong, and the explanation visibly argues with itself.', 'D vs "Answer C"   C vs "Answer B"   D vs "Answer B"   A vs "Answer B"
B vs "Answer C"   C vs "Answer B"   D vs "Answer B"', 'Review those 16 by hand, then add a build check that flags any guidance string containing "Hmm", "Wait", "Actually" or "Let me re-".', 80)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-06', 'Password reset sends people back to the form they came from', 'amber', 'open', 'code', 'auth/forgot-password.html:242', 'vercel.json sets cleanUrls, so in production the path has no .html extension. The reset link is built by string-replacing an extension that is not there, so redirectTo comes out as the forgot-password page itself. The recovery token lands in the hash of a page with nothing to consume it, and the user cannot set a new password.', 'pathname.replace(/forgot-password\.html$/, …)
production pathname   /auth/forgot-password   -> regex never matches', 'Build the URL from the directory instead: pathname.replace(/[^/]*$/, ’’) + ’reset-password.html’ — which is what settings.html:1035 already does correctly.', 90)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-07', '"Join a class" in the sidebar does not open anything', 'amber', 'open', 'live', 'Dashboard.html:2732', 'The sidebar link is /Dashboard.html#join-class on every page, and it is the only way into the join flow. Loading that URL directly leaves the overlay hidden. There is also no hashchange listener, so clicking it while already on the Dashboard changes the hash and does nothing. Calling openJoinClass() by hand works, so it is only the entry point that is broken.', null, 'Call it directly rather than through a DOMContentLoaded that may already have fired, and add a hashchange handler for the same-page case.', 100)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-08', 'Dark mode: 74 pieces of text on the Dashboard alone fail contrast', 'amber', 'open', 'live', 'inline styles across 14 files · predicted-grade.js GRADE_COLOUR', 'The CSS custom properties are re-tuned properly for dark. The problem is roughly 87 colours hardcoded as hex in inline style attributes and JS template literals, which bypass the tokens and stay light-theme. predicted-grade.js is the highest-leverage fix: it hardcodes the whole grade palette and injects it inline, so every predicted-grade badge is light-theme green on a dark card. Separately, --muted2 is too dim for body text in dark mode.', '2.58  #506A8A  a stat value          needs 4.5
2.80  #059669  "Done" exam chip      needs 4.5
2.88  #B45309  "Diagnostic 0/10"     needs 4.5
3.02  #15803D  the predicted grade   needs 4.5

hardcoded: #D97706 x51  #DC2626 x12  #16A34A x8
           #B45309 x7   #15803D x5   #059669 x4', 'Route those inline colours through the existing custom properties.', 110)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-09', 'The setup wizard cannot be used with a keyboard', 'amber', 'open', 'live', 'auth/setup.html · auth/register.html · most app pages', 'An accessibility-tree read of setup.html returns eight unnamed generic nodes — no buttons, no radios, no labels. Level cards, subject cards, board pills and grade chips are all div onclick with no role, no tabindex and no accessible name. Registration’s Student/Teacher selector has the same problem, so a keyboard or screen-reader user may not be able to choose Teacher at all. The teacher’s New-class dialog uses real select elements and reads perfectly.', 'tabindex      0 occurrences in the entire site
role="..."    12 at most on any one page
div onclick   Dashboard 16 - settings 13 - mark-schemes 7 - class 7', 'Do the signup and setup path first — it is the only path every user must complete. Real button and radio elements would fix most of it without changing the design.', 120)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-10', 'The early-adopter banner is invisible on every screen size', 'amber', 'open', 'live', 'index.html — #earlyBanner', 'The banner is position:relative at the top of the document with z-index 10. The nav is position:fixed, 65px tall, z-index 100, and nothing offsets the page for it. The live spots-left counter is writing into an element nobody can see. The separate hero nudge is visible and fine.', 'desktop 1280px   banner 42px tall, 42px covered, fully hidden
mobile   375px   118px tall, first 65px covered — the headline is gone', 'Move the banner inside the fixed nav stack, or pad the body by the nav height.', 130)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-11', 'Five of six marketing pages lose their header nav on mobile', 'amber', 'open', 'live', 'features.html · pricing.html · subjects.html · support.html · contact.html', 'At 375px the nav links are hidden and there is no hamburger to bring them back — only Sign in and Register survive. index.html has a mobile menu; the other five do not. The footer rescues it partially, but Home and Subjects have no mobile route at all once you have landed on one of those pages.', null, 'Port index.html’s mobile menu to the other five.', 140)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-12', 'The whole page shrinks to 25% when innerWidth reports 0', 'amber', 'open', 'live', 'fit-to-screen.js', 'There is no guard for a zero viewport, so 0 / content clamps straight to MIN_ZOOM. Browsers report innerWidth 0 in a hidden, backgrounded or detached tab, and the page stays at quarter size until a resize event happens to fire.', 'measured on notes.html: { innerWidth: 0, zoom: "0.25", sidebarLeft: -60 }', 'if (!view) return;', 150)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-13', 'The teacher guard on student-only pages never fires in production', 'amber', 'open', 'code', 'classes-nav.js:114 and :208', 'The last path segment is compared against dashboard.html, breakdown.html and medals.html. Under cleanUrls that segment has no extension, so a teacher who reloads or follows an old link lands on the student dashboard and sees a progress report that will always read zero — the exact case the comment above it says it exists to prevent. admin-nav.js:112 strips the extension for this reason; classes-nav.js was never updated. Line 114 has the same bug more mildly: the current class never highlights in the sidebar.', null, 'Copy admin-nav.js’s .replace(/\.html$/, ’’) into both comparisons.', 160)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('A-14', 'Three past-paper mark schemes 404', 'amber', 'open', 'live', 'papers-config.js:22234, :22359, :22476', 'All 546 unique paper links were resolved; 543 are fine. The three failures are OCR A Chemistry June 2022 — the question papers still resolve, only the mark schemes moved.', null, 'Re-source the three URLs from OCR. The full link check takes about 40 seconds, so it is worth running on a schedule.', 170)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-01', 'The public site has no SEO or link-sharing metadata at all', 'green', 'open', 'code', 'every public page', 'Every link shared in WhatsApp, Discord or iMessage — how students actually pass things around — renders as a bare URL with no preview card. For a product whose acquisition is word of mouth plus search, this is probably the highest-value item on the list.', 'meta description   0 on index, features, pricing, subjects, support, contact
Open Graph cards   0 anywhere
rel=canonical      0 anywhere
robots.txt         missing
sitemap.xml        missing', 'Add descriptions and OG tags per page, a canonical, a robots.txt and a sitemap.', 180)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-02', 'The site promises 10-question diagnostics and delivers 5', 'green', 'open', 'code', 'index.html · features.html · pricing.html · pricing-app.html', 'Four marketing pages say ten questions per topic, split 3 green / 3 amber / 4 red, and the Perfect Score medal is described as 10/10. Every one of the 47 diagnostics hardcodes "This diagnostic has 5 questions" and builds 2 green, 2 amber, 1 red. medals-data.js gets it right — only the marketing pages say ten.', null, 'Either build the diagnostics up to ten questions or correct the copy. The copy is the cheaper half.', 190)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-03', '"No self-reporting needed" — but the written question is self-marked', 'green', 'open', 'code', 'index.html', 'The written question is worth 3 of the 9 to 11 available points, 27 to 33% of the diagnostic, and the student marks it themselves. That is a reasonable design; it just is not what the landing page claims.', null, 'Reword to something like "you mark one written answer against the model answer; the rest is automatic".', 200)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-04', 'A full-marks written answer is always coloured amber', 'green', 'open', 'live', 'diagnostics/*.html — 45 of 47', 'The chip class forces every written result to amber regardless of score, so full marks look identical to a partial answer. The r.pts >= W.green half of the condition is also dead logic: W.green is 1 and every correct MCQ scores at least 1.', 'cls = r.pts > 0 ? (r.pts >= W.green && r.type !== ’written’ ? ’hit-green’
                                                        : ’hit-amber’) : ’miss’;', 'Colour the written chip by level: full marks green, partial amber, missed grey.', 210)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-05', 'Free early adopters are told they are on a £9.99/month plan', 'green', 'open', 'live', 'settings.html · Dashboard.html', 'The early-adopter grant sets subscription_tier to pro_monthly, so with no payment at all Settings shows "RAG Pro (Monthly) - £9.99/month" and the Dashboard shows "RAG Pro - Monthly". "Manage plan" posts to create-portal-session, which 404s with no_customer because there is no Stripe customer.', null, 'Render the comp as something like "Early adopter — Premium free until 14 Dec 2026", and hide Manage plan when stripe_customer_id is null.', 220)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-06', '"How did you hear about us?" is skipped for everyone after the first user on a browser', 'green', 'open', 'live', 'referral-modal.js', 'Completion is recorded under the global localStorage key rag_referral_done, with no user id — while the welcome modal correctly scopes its own key per user. School and library machines silently lose attribution for everyone after user one.', null, 'Key it per user, the way rag_welcome_seen_<uid> already is.', 230)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-07', '"First 150 users" is enforced with a live row count', 'green', 'open', 'code', 'db/early-adopter-migration.sql', 'Both count_early_adopters() and the grant trigger use SELECT COUNT(*) FROM profiles — the number of profiles that exist right now, not the number of people who have ever claimed the offer. Delete an account and a slot reopens, and the landing-page counter ticks back up.', null, 'Count claimed grants (is_early_adopter = true) rather than live profiles, or keep a separate counter.', 240)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-08', 'AI Feedback shows the user raw server HTML when marking fails', 'green', 'open', 'live', 'ai-feedback.html:862 and :968 · paper-attempt.html:1844', 'The error path concatenates the first 300 characters of the response body into the message, so any non-JSON error page — a 502 or 504 from the function, a CDN error — lands in front of the student as markup. The contact form gets this right.', '"Couldn’t mark this answer — Server returned 501:
 <!DOCTYPE HTML> <html lang="en"> <head>"', 'Show a fixed message per status code and keep the body for the console.', 250)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-09', 'Setup never highlights the level a returning user already picked', 'green', 'open', 'live', 'auth/setup.html:1142', 'The level index map still has three entries (gcse 0, as 1, a-level 2) but only two level cards exist, so levelCards[2] is undefined and nothing is marked selected. It currently looks fine only by accident of hover styling — and if an AS card is ever added, the wrong card will light up.', null, 'Match on the card’s own level value rather than a positional index.', 260)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-10', 'Three early-adopter numbers on one landing page, two of them wrong', 'green', 'open', 'code', 'index.html:1169, :1205 · six page footers', 'The banner and EARLY_LIMIT say 150, the hero hardcodes "of 150" instead of reading EARLY_LIMIT, and the closing CTA still says "First 100 sign-ups". The footers of index, features, pricing, subjects, support and contact also still read 2025.', null, 'Read EARLY_LIMIT everywhere, drop the stale 100, and make the year dynamic.', 270)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-11', 'GCSE is sold, built, and unreachable', 'green', 'open', 'live', 'auth/setup.html · subjects.html · index.html · teacher.html', 'The repo ships 15+ GCSE diagnostics and many GCSE note sets, and the homepage roadmap says GCSE Computer Science, Biology and Geography are already live. But setup offers only A Level — GCSE is a disabled "Coming soon" card and AS Level is absent entirely, though profiles.level accepts it and predicted-grade.js has AS boundaries. subjects.html says GCSE is coming soon, contradicting the homepage. Meanwhile the teacher’s New-class dialog offers GCSE, AS and five subjects students cannot select, so a teacher can create a class nobody can match.', null, 'Decide which is true and make the three pages agree. If GCSE is close, opening setup is the smallest change with the biggest reach.', 280)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('G-12', 'Smaller things worth a sweep', 'green', 'open', 'live', 'various', 'Individually minor, collectively the texture a prospective customer notices.', '- four titles double the brand: "RAG Learning - Features - RAG Learning"
  (features, pricing, subjects, support; the -app variants are correct)
- the signup email links to raglearning.uk//auth/verify.html (double slash) —
  the live Supabase template has drifted from the repo copy
- "PREDICTED A* - Above target" after one topic out of 17; low confidence is
  conveyed only by opacity 0.72 and a hover tooltip, invisible on touch
- Dashboard says A Level = "Year 13, Ages 17-18"; setup says "Years 12 & 13"
- DASH_SUBJ_EMOJI and SUBJ_EMOJI are 9-entry copies of the 18-entry map in
  subjects-config.js, on pages that already load subjects-config.js
- Maths AQA and Further Maths Edexcel have no flashcards at all
- past papers stop at June 2024 (Maths AQA) and June 2023 (CS, Biology)
- subjects.html renders French, German and Spanish with no icon
- ai-feedback-mockup.html and flashcard-demo.html are dev artifacts deployed
  publicly with no noindex
- index.html lists Maths on 3 boards and Further Maths on "OCR";
  subjects-config.js has Maths on 4 and Further Maths on "OCR A"
- the referral modal has no close button and ignores Escape and backdrop clicks
- no per-user rate limit on the AI endpoints; Pro-gating limits the blast
  radius, but one Pro account can run up unbounded Groq spend', 'Pick these off whenever a related file is open.', 290)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('R-01', 'A missing quote mark took all 1,917 maths model answers off the site', 'red', 'fixed', 'live', 'model-answers-maths.js:2091', 'One value was missing its closing double quote, so the whole 638 KB file failed to parse. It was the only file in the repo that failed node --check. Mark Schemes showed no model answer for any maths question, and nothing reported a problem: the loader treats failure as non-fatal, and the lookup falls back to an empty string, which is indistinguishable from "no model answer for this question".', 'CS_MODEL_ANSWERS       332 entries
FM_MODEL_ANSWERS       482 entries
PHYSICS_MODEL_ANSWERS 1012 entries
MATHS_MODEL_ANSWERS   undefined', 'Fixed 14 Sep 2026 — quote added, 1,917 entries load again. Worth adding node --check over the data files to CI; one line would have caught it the day it landed.', 300)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('R-03', 'Students were told their class join failed, after it had succeeded', 'red', 'fixed', 'live', 'db/migrations/2026-09-14-join-class-status.sql · Dashboard.html:2782', 'The client half of the change shipped and the SQL half did not, so join_class still returned five columns with no ok field. Dashboard.html branches on !joined.ok, so every join showed an error — while the student was quietly added to the class. The same migration also fixes class_join_attempts, which had been empty since it was created because the old function logged the attempt and then raised, rolling the log row back. The join-code rate limit had therefore never worked.', 'UI said:      "Could not join that class. Try again in a moment."
class_members: joined_at 2026-09-14T12:40:24Z   <- it worked', 'Fixed 14 Sep 2026 — migration applied. Verified: success screen renders, and a bad code is refused on the 11th attempt in 15 minutes, so the rate limit is live.', 310)
on conflict (ref) do nothing;

insert into public.bug_reports (ref, title, severity, status, verified, area, detail, evidence, fix, rank)
values ('R-04', 'Switching to a teacher account deleted the student’s subjects and grades', 'red', 'fixed', 'live', 'teacher-subjects-sync.js · settings.html:458', 'The sync reconciled user_subjects to exactly the classes owned, deleting everything else — under a label reading "Changes which pages you see. Nothing you’ve already saved is deleted." A student with four subjects who switched to teacher and made one class was left with one row, and even that had lost both grades. Switching back restored nothing.', 'before   Mathematics/AQA C-A, Computer Science/AQA C-A,
         Biology/AQA C-A, Further Mathematics/Edexcel C-A
after    Mathematics/AQA   current_grade null   target_grade null', 'Fixed 14 Sep 2026 — a row is now only deleted when it matches a subject+board this teacher has had a class for (archived included, so we know the sync created it) AND carries no grades. Covered by five scenario tests.', 320)
on conflict (ref) do nothing;
