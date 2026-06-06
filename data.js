// Iron45 dynamic data — Claude updates & pushes this file.
window.IRON45 = {
  updated: "2026-06-05",
  config: {
    start_date: "2026-06-01",        // Day 1 = Mon Jun 1
    step_floor_training: 6000,
    step_floor_rest: 8000,
    active_cal_target: 500,
    sleep_target: 8,
    log_endpoint: "https://script.google.com/macros/s/AKfycbzcqX_9YW6URlZr0PZPPQuXhswD43PCQqQphlIQKI35E0CQ8_NQ8pznYUgi-AsJGekE/exec"                  // Apps Script URL for cross-device log sync (added later)
  },
  health: [
    {date:"2026-05-28", steps:9300,  active_cal:720, sleep_hr:7.2,  deep_hr:1.4,  rem_hr:1.7,  resting_hr:79, hrv:27, weight:251},
    {date:"2026-05-29", steps:7200,  active_cal:520, sleep_hr:6.4,  deep_hr:1.2,  rem_hr:1.4,  resting_hr:80, hrv:25, weight:null},
    {date:"2026-05-30", steps:4800,  active_cal:300, sleep_hr:6.0,  deep_hr:1.0,  rem_hr:1.3,  resting_hr:80, hrv:23, weight:null},
    {date:"2026-05-31", steps:8800,  active_cal:640, sleep_hr:7.5,  deep_hr:1.5,  rem_hr:1.7,  resting_hr:78, hrv:30, weight:250},
    {date:"2026-06-01", steps:10200, active_cal:780, sleep_hr:6.9,  deep_hr:1.3,  rem_hr:1.6,  resting_hr:76, hrv:31, weight:null},
    {date:"2026-06-02", steps:6100,  active_cal:470, sleep_hr:6.2,  deep_hr:1.1,  rem_hr:1.4,  resting_hr:78, hrv:27, weight:250},
    {date:"2026-06-03", steps:9312,  active_cal:950, sleep_hr:6.95, deep_hr:1.33, rem_hr:1.63, resting_hr:77, hrv:26, weight:250},
    {date:"2026-06-04", steps:8278,  active_cal:744, sleep_hr:6.29, deep_hr:0.83, rem_hr:0.37, resting_hr:71, hrv:34, weight:250}
  ],
  coach_note: "Real progress in the numbers: resting HR has dropped 77 → 71 and HRV climbed to the mid-30s — your heart's getting more efficient. Last night you finally banked 7.85h with 2.2h REM, exactly the sleep target — protect that bedtime. Program update applied: only one rest day now (Sunday), a new Thursday for your weak points (dumbbell pullovers for lat width + reverse flies / Y-T-W for rear delts and posture — no new gear), and a Saturday core-and-conditioning block for the belly. Every day capped at 6 moves so you don't overcook it. Today is Friday — Full Body: add a rep or a little weight on the deadlift."
};
