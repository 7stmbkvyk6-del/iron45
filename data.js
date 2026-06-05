// Iron45 dynamic data — Claude updates & pushes this file. Last sync baked below.
window.IRON45 = {
  updated: "2026-06-04",
  config: {
    start_date: "2026-06-01",        // Day 1 = Mon Jun 1
    step_floor_training: 6000,
    step_floor_rest: 8000,
    active_cal_target: 500,
    sleep_target: 8,
    log_endpoint: ""                  // <- Apps Script URL goes here for cross-device sync
  },
  // most-recent first not required; charts use chronological
  health: [
    {date:"2026-05-25", steps:5200, active_cal:410, sleep_hr:6.1, deep_hr:1.1, rem_hr:1.3, resting_hr:80, hrv:24, weight:251},
    {date:"2026-05-26", steps:8100, active_cal:560, sleep_hr:6.8, deep_hr:1.2, rem_hr:1.5, resting_hr:79, hrv:28, weight:null},
    {date:"2026-05-27", steps:6400, active_cal:430, sleep_hr:5.9, deep_hr:1.0, rem_hr:1.2, resting_hr:81, hrv:22, weight:null},
    {date:"2026-05-28", steps:9300, active_cal:720, sleep_hr:7.2, deep_hr:1.4, rem_hr:1.7, resting_hr:78, hrv:30, weight:250},
    {date:"2026-05-29", steps:7200, active_cal:520, sleep_hr:6.4, deep_hr:1.2, rem_hr:1.4, resting_hr:79, hrv:26, weight:null},
    {date:"2026-05-30", steps:4800, active_cal:300, sleep_hr:6.0, deep_hr:1.0, rem_hr:1.3, resting_hr:80, hrv:23, weight:null},
    {date:"2026-05-31", steps:8800, active_cal:640, sleep_hr:7.5, deep_hr:1.5, rem_hr:1.7, resting_hr:77, hrv:31, weight:250},
    {date:"2026-06-01", steps:10200, active_cal:780, sleep_hr:6.9, deep_hr:1.3, rem_hr:1.6, resting_hr:76, hrv:33, weight:null},
    {date:"2026-06-02", steps:6100, active_cal:470, sleep_hr:6.2, deep_hr:1.1, rem_hr:1.4, resting_hr:78, hrv:27, weight:250},
    {date:"2026-06-03", steps:9312, active_cal:950, sleep_hr:6.95, deep_hr:1.33, rem_hr:1.63, resting_hr:77, hrv:26, weight:250}
  ],
  coach_note: "Strong Wednesday — 9,312 steps and a big 950 active-kcal day, resting HR holding at 77. Sleep is the lever: you're around 7h, push for an earlier bedtime to bank 7.5–8h. Today is Rest, well-timed against amber recovery. Friday is Full Body — come in fresh and add a rep or a little weight on the deadlift.",
  // note: 5/25–6/2 are seed estimates; 6/3 is from your real export. Ask me to "sync" and I'll bake exact numbers from every daily CSV.
  seed_notice: true
};
