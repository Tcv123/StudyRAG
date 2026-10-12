/**
 * Calls the site's cron endpoints on schedule. The work itself still happens
 * in api/cron/*.js on the Pages site; this only knocks on the door with the
 * `Authorization: Bearer <CRON_SECRET>` header those endpoints require.
 *
 * Times are UTC.
 */
const JOBS = {
  '0 16 * * *': '/api/cron/setup-reminder',
  '0 9 * * 1':  '/api/cron/exam-timetable-check',
};

export default {
  async scheduled(event, env, ctx) {
    const path = JOBS[event.cron];
    if (!path) {
      console.error(`no job for cron "${event.cron}"`);
      return;
    }
    const res = await fetch(new URL(path, env.SITE_URL), {
      headers: { Authorization: `Bearer ${env.CRON_SECRET}` },
    });
    const body = await res.text();
    console.log(`${path} -> ${res.status} ${body.slice(0, 500)}`);
    if (!res.ok) throw new Error(`${path} failed with ${res.status}`);
  },
};
