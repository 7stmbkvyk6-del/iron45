const PLAN = [
 {
  label:"MON", tag:"PUSH DAY", name:"Chest, Triceps & Shoulders",
  type:"lift", focus:"CHEST", sub:"+ Shoulders", color:"c-or",
  sections:[
   {title:"🔩 BARBELL — one loaded bar (flow on the bench)", dot:"var(--pri)", exs:[
     {n:"Barbell Bench Press",why:"Primary chest mass.",s:"5×5",t:"c",info:`<img class="ex-img" loading="lazy" alt="Bench press form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg">
       <div class="ex-info-row"><strong>Arch (easy trick):</strong> lie down, shrug your shoulders up, pull them back, then set them down — you should be able to slide a flat hand under your lower back.</div>
       <div class="ex-info-row"><strong>Elbows:</strong> tucked ~45–75° toward your ribs, NOT flared straight out like a plane.</div>
       <div class="ex-info-row"><strong>Wrists:</strong> straight and stacked over the elbows — no bent-back wrists.</div>
       <div class="ex-info-row"><strong>Path & focus:</strong> plant the heels (leg drive), lower to the LOWER chest, press in a slight arc back over the shoulders — feel pecs, not shoulders.</div>`},
     {n:"Barbell Pullover",why:"Chest + lats — full chest & early V-taper.",s:"3×12 · 3s stretch",t:"c",info:`<img class="ex-img" loading="lazy" alt="Pullover form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Barbell_Pullover/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> lie along the bench, bar over the chest with arms long and a fixed slight elbow bend.</div>
       <div class="ex-info-row"><strong>Move:</strong> lower the bar back over your head until you feel a deep lat/chest stretch, then pull it back.</div>
       <div class="ex-info-row"><strong>Avoid:</strong> bending the elbows more (that makes it a triceps move) — keep the arms long.</div>
       <div class="ex-info-row"><strong>Safety:</strong> only go as far back as the shoulders comfortably allow; stop before the ribs flare.</div>`},
     {n:"Barbell Overhead Press",why:"Front + side delts — shoulder width.",s:"4×6",t:"c",info:`<img class="ex-img" loading="lazy" alt="Overhead press form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> grip just outside the shoulders, wrists straight and stacked, elbows slightly in front of the bar.</div>
       <div class="ex-info-row"><strong>Brace:</strong> squeeze glutes + abs, ribs down — this stops the big backward lean (the #1 fault).</div>
       <div class="ex-info-row"><strong>Path:</strong> press straight up; move your head BACK as the bar passes, then "through the window" once it clears.</div>
       <div class="ex-info-row"><strong>Finish:</strong> bar over mid-foot, biceps by the ears.</div>`},
   ]},
   {title:"🏋️ DUMBBELL", dot:"var(--gold)", exs:[
     {n:"Incline Dumbbell Press",why:"Upper chest — the high shelf.",s:"3×10",t:"c",info:`<img class="ex-img" loading="lazy" alt="Incline DB press form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> bench ~30°, elbows ~45° (not flared straight out).</div>
       <div class="ex-info-row"><strong>Move:</strong> press up and slightly together, driving toward the collarbone; control the lower for a full stretch.</div>`},
     {n:"Dumbbell Lateral Raise",why:"Side delts — #1 move to look wider.",s:"3×15",t:"i",info:`<img class="ex-img" loading="lazy" alt="Lateral raise form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg">
       <div class="ex-info-row"><strong>Lead with the elbows</strong> (elbows above the hands), slight fixed elbow bend; "pour the jug" so pinkies sit a touch high.</div>
       <div class="ex-info-row"><strong>Stop at shoulder height</strong> — going higher steals it with the traps. Shoulders down, no shrug, light weight, no swinging.</div>`},
     {n:"Dumbbell Tricep Overhead Ext.",why:"Long-head triceps.",s:"3×12",t:"i",info:`<img class="ex-img" loading="lazy" alt="Overhead triceps extension form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Triceps_Extension/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> one DB in both hands overhead, elbows pointing up and tucked in.</div>
       <div class="ex-info-row"><strong>Move:</strong> lower behind the head for a stretch, then extend; don't let the elbows flare wide.</div>`},
   ]},
   {title:"🤸 BODYWEIGHT — finisher", dot:"var(--grn)", exs:[
     {n:"Push-Ups to Failure",why:"Burns out chest & triceps.",s:"2×max",t:"c",info:`<img class="ex-img" loading="lazy" alt="Push-up form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> straight plank — glutes and abs tight, no sagging hips; hands under or just outside the shoulders.</div>
       <div class="ex-info-row"><strong>Move:</strong> elbows ~45° (not flared to 90°), chest to the floor, full range every rep.</div>`},
   ]},
  ],
  overload:"45 lb bar? Progress with tempo, pauses and reps — not weight."
 },
 {
  label:"TUE", tag:"PULL DAY", name:"Back, Biceps & Rear Delts",
  type:"lift", focus:"BICEPS", sub:"+ Back & Rear Delts", color:"c-go",
  sections:[
   {title:"🔩 BARBELL — one loaded bar (bent-over block)", dot:"var(--pri)", exs:[
     {n:"Barbell Bent-Over Row",why:"Back thickness; loads biceps too.",s:"5×5",t:"c",info:`<img class="ex-img" loading="lazy" alt="Bent-over row form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> hinge so the torso is between parallel and ~45°; standing taller turns it into an arm move.</div>
       <div class="ex-info-row"><strong>Back:</strong> flat, neutral, braced — never round under load.</div>
       <div class="ex-info-row"><strong>Move:</strong> lead with the elbows (don't curl with the hands), pull to the lower ribs — "elbows to your back pockets."</div>
       <div class="ex-info-row"><strong>Squeeze:</strong> pinch the shoulder blades at the top.</div>`},
     {n:"Barbell Romanian Deadlift",why:"Hamstrings, glutes & back — the hinge.",s:"3×12 · 4s down",t:"c",info:`<img class="ex-img" loading="lazy" alt="Romanian deadlift form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg">
       <div class="ex-info-row"><strong>Hips BACK, not down</strong> — "close a door behind you with your hips." Soft knees, and that knee angle stays fixed.</div>
       <div class="ex-info-row"><strong>Bar path:</strong> slide it down the front of your thighs/shins, kept within an inch of the legs.</div>
       <div class="ex-info-row"><strong>Back:</strong> flat neutral spine; stop at a hamstring stretch (~torso parallel) — don't round to go lower.</div>
       <div class="ex-info-row"><strong>Light-bar tip:</strong> the slow 4s lower + chasing the stretch is the work.</div>`},
     {n:"Barbell Curl",why:"Primary bicep mass.",s:"4×8",t:"i",info:`<img class="ex-img" loading="lazy" alt="Barbell curl form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> elbows pinned to your sides — only the forearms move, no shoulder swing or back lean.</div>
       <div class="ex-info-row"><strong>Cue:</strong> supinated grip, squeeze at the top, lower under control.</div>`},
     {n:"Barbell Reverse Curl",why:"Brachioradialis/forearm thickness.",s:"3×12 · 2s down",t:"f",info:`<img class="ex-img" loading="lazy" alt="Reverse curl form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Barbell_Curl/0.jpg">
       <div class="ex-info-row"><strong>Grip:</strong> pronated (palms down); keep the wrists straight and firm the whole rep.</div>
       <div class="ex-info-row"><strong>Move:</strong> elbows pinned, lighter than your regular curl, slow strict lower — builds the top of the forearm.</div>`},
     {n:"Barbell Shrug",why:"Traps — neck-to-shoulder thickness.",s:"3×15 · 2s hold",t:"i",info:`<img class="ex-img" loading="lazy" alt="Shrug form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> shrug straight up (and slightly back), hold 2s at the top, lower fully.</div>
       <div class="ex-info-row"><strong>Avoid:</strong> rolling the shoulders — straight up and down only.</div>`},
   ]},
   {title:"🏋️ DUMBBELL", dot:"var(--gold)", exs:[
     {n:"Dumbbell Single-Arm Row",why:"Lat width, one side at a time.",s:"3×10",t:"c",info:`<img class="ex-img" loading="lazy" alt="One-arm row form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> hand and knee on the bench, flat braced back.</div>
       <div class="ex-info-row"><strong>Move:</strong> pull toward your HIP (not the chest) to load the lat; no torso twisting; squeeze at the top.</div>`},
     {n:"Bent-Over Rear Delt Fly",why:"Rear delts — posture & 3D shoulders.",s:"3×15",t:"i",info:`<img class="ex-img" loading="lazy" alt="Rear delt fly form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> hinge ~45°, light DBs, soft elbows.</div>
       <div class="ex-info-row"><strong>Move:</strong> think "push the weights out to the sides," not up; lead with the elbows; squeeze the rear delts — no swinging.</div>`},
     {n:"Dumbbell Hammer Curl",why:"Arm + forearm thickness.",s:"3×10",t:"f",info:`<img class="ex-img" loading="lazy" alt="Hammer curl form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> neutral grip (palms facing in) the whole rep; elbows pinned; no swing; control the lower.</div>`},
     {n:"Dumbbell Incline Curl",why:"Deep stretch = the bicep peak.",s:"3×10",t:"i",info:`<img class="ex-img" loading="lazy" alt="Incline curl form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> sit back on the incline so the arms hang BEHIND the body — that stretch is the point.</div>
       <div class="ex-info-row"><strong>Move:</strong> supinate hard at the top; don't swing.</div>`},
   ]},
  ],
  overload:"Add reps or slow the lower on the barbell moves. RDL: chase range before load."
 },
 {
  label:"WED", tag:"BURN DAY", name:"Cardio, Core & Forearms",
  type:"lift", focus:"BELLY", sub:"Fat Burn + Forearms", color:"c-bl",
  sections:[
   {title:"🔔 KETTLEBELL — one bell", dot:"var(--teal)", exs:[
     {n:"Kettlebell Swing",why:"Explosive full-body fat burner.",s:"4×15",t:"c",info:`<img class="ex-img" loading="lazy" alt="Kettlebell swing form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Swings/0.jpg">
       <div class="ex-info-row"><strong>It's a HINGE, not a squat</strong> — shins stay vertical, hinge at the hips.</div>
       <div class="ex-info-row"><strong>Hike it back</strong> between your legs like a football snap; upper arms connect to your ribs.</div>
       <div class="ex-info-row"><strong>Snap the hips and squeeze the glutes hard</strong> at the top — arms stay relaxed (hips do the work).</div>
       <div class="ex-info-row"><strong>Avoid:</strong> squatting it down or muscling it up with the arms. <em>(Image shows the one-arm version — do it two-handed.)</em></div>`},
     {n:"Kettlebell Goblet Squat",why:"Legs + big calorie burn for the belly.",s:"3×15 · 2s pause",t:"c",info:`<img class="ex-img" loading="lazy" alt="Goblet squat form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> bell at the chest, elbows down, feet a touch wider than the shoulders.</div>
       <div class="ex-info-row"><strong>Move:</strong> sit straight down between the hips, chest up; knees track over the toes (don't cave), heels stay down; pause 2s and drive through the heels.</div>`},
     {n:"Kettlebell Suitcase Carry",why:"Anti-tilt core — carves the obliques.",s:"3×40ft/side",t:"cr",info:`<img class="ex-img" loading="lazy" alt="Suitcase carry form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Farmers_Walk/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> one bell in one hand at your side, like a heavy suitcase.</div>
       <div class="ex-info-row"><strong>Move:</strong> walk tall and do NOT lean toward the weight — brace the opposite side to stay perfectly upright; switch hands each set.</div>
       <div class="ex-info-row"><strong>Why:</strong> resisting the tilt is direct oblique/waist work.</div>`},
   ]},
   {title:"🧱 CORE", dot:"var(--grn)", exs:[
     {n:"Plank",why:"Deep stabilizers — flatter midsection.",s:"3×45s",t:"cr",info:`<img class="ex-img" loading="lazy" alt="Plank form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> elbows under the shoulders, body one straight line.</div>
       <div class="ex-info-row"><strong>Cue:</strong> tuck the ribs, squeeze the glutes, brace the abs; don't sag or pike. Quality over the clock.</div>`},
     {n:"Dumbbell Russian Twist",why:"Obliques — carves the waist.",s:"3×20",t:"cr",info:`<img class="ex-img" loading="lazy" alt="Russian twist form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> lean back ~45°, brace the core, rotate from the SHOULDERS/torso (not just the hands), control the weight.</div>`},
   ]},
   {title:"🦾 FOREARMS", dot:"var(--pur)", exs:[
     {n:"Farmer's Carry",why:"Best forearm + trap builder; fixes posture.",s:"4×40ft",t:"f",info:`<img class="ex-img" loading="lazy" alt="Farmer's carry form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Farmers_Walk/0.jpg">
       <div class="ex-info-row"><strong>Grip:</strong> crush the handles with the WHOLE hand (no fingertips).</div>
       <div class="ex-info-row"><strong>Posture:</strong> tall chest, shoulders back and down, braced core; smooth steps, no leaning.</div>`},
     {n:"Dumbbell Wrist Curl",why:"Forearm flexors — underside thickness.",s:"3×20",t:"f",info:`<img class="ex-img" loading="lazy" alt="Wrist curl form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Dumbbell_Palms-Up_Wrist_Curl/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> forearms supported, palms up, wrists just off the edge.</div>
       <div class="ex-info-row"><strong>Move:</strong> let the weight roll to the fingertips, then curl up. Small range, full squeeze; forearms stay still.</div>`},
   ]},
   {title:"⏱️ FINISHER", dot:"var(--blu)", exs:[
     {n:"Jump Rope HIIT",why:"30s hard / 30–60s easy × 20 min.",s:"20 min",t:"cd",info:`<img class="ex-img" loading="lazy" alt="Jump rope form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rope_Jumping/0.jpg">
       <div class="ex-info-row"><strong>Form:</strong> stay on the balls of the feet, small hops; the WRISTS turn the rope (not big arm circles); stay relaxed.</div>`},
   ]},
  ],
  overload:"Push rope intervals harder, add a swing rep, or pause longer in the goblet squat."
 },
 {
  label:"THU", tag:"V-TAPER DAY", name:"Shoulders, Traps & Upper Back",
  type:"lift", focus:"WIDTH", sub:"Lats · Rear Delts · Posture", color:"c-te",
  sections:[
   {title:"🔩 BARBELL — one loaded bar", dot:"var(--pri)", exs:[
     {n:"Barbell Overhead Press",why:"More delt volume = shoulder width.",s:"3×10 · 3s down",t:"c",info:`<img class="ex-img" loading="lazy" alt="Overhead press form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> wrists stacked, brace glutes/abs (ribs down), press straight up and "through the window"; slow 3s lower. No backward lean.</div>`},
     {n:"Barbell Wide-Grip Bent-Over Row",why:"Upper back + rear delts — posture.",s:"3×12 · 1s squeeze",t:"c",info:`<img class="ex-img" loading="lazy" alt="Wide-grip row form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> wider-than-shoulder grip, hinge ~45°, flat back.</div>
       <div class="ex-info-row"><strong>Move:</strong> pull to the upper belly/lower chest with the elbows flaring out a bit — this biases rear delts and mid-traps; 1s squeeze of the blades.</div>`},
   ]},
   {title:"🏋️ DUMBBELL — width & posture", dot:"var(--gold)", exs:[
     {n:"Dumbbell Pullover",why:"Lats + serratus — V-taper width.",s:"3×12",t:"c",info:`<img class="ex-img" loading="lazy" alt="DB pullover form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Dumbbell_Pullover/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> lie across/along the bench, one DB over the chest, arms long; lower it back over your head for a big stretch, then pull it back — feel the lat/armpit, not just the triceps.</div>`},
     {n:"Bent-Over Reverse Fly (wide)",why:"Rear delts + mid-traps (retraction).",s:"3×15",t:"i",info:`<img class="ex-img" loading="lazy" alt="Reverse fly form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> hinge ~45°, light DBs, slightly higher elbow path than Tuesday's fly; squeeze the shoulder blades together at the top.</div>`},
     {n:"Prone Y-T-W Raise",why:"Lower traps & stabilizers — posture.",s:"3×10",t:"i",info:`<img class="ex-img" loading="lazy" alt="Prone rear-delt/scapular raise" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Rear_Delt_Raise/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> face-down on the bench, little or no weight, thumbs up.</div>
       <div class="ex-info-row"><strong>Move:</strong> lift the arms into a Y, then a T, then a W shape, squeezing the shoulder blades each time — slow and strict.</div>
       <div class="ex-info-row"><em>(Image is a close prone rear-delt raise — the Y-T-W just cycles three arm angles.)</em></div>`},
     {n:"Dumbbell Lateral Raise",why:"More side-delt width.",s:"3×15",t:"i",info:`<img class="ex-img" loading="lazy" alt="Lateral raise form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg">
       <div class="ex-info-row"><strong>Cue:</strong> lead with the elbows, stop at shoulder height, "pour the jug." Light and strict.</div>`},
     {n:"Dumbbell Shrug",why:"Upper traps.",s:"3×15 · 2s hold",t:"i",info:`<img class="ex-img" loading="lazy" alt="Dumbbell shrug form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> straight up and slightly back, 2s hold at the top, no rolling.</div>`},
   ]},
  ],
  overload:"Lighter, higher-rep day on purpose — chase the squeeze and add reps before load."
 },
 {
  label:"FRI", tag:"STRENGTH DAY", name:"Full Body Strength",
  type:"lift", focus:"FULL", sub:"Body Strength", color:"c-gn",
  sections:[
   {title:"🔩 BARBELL — one loaded bar", dot:"var(--pri)", exs:[
     {n:"Barbell Deadlift",why:"Total-body strength + back thickness.",s:"3×5",t:"c",info:`<img class="ex-img" loading="lazy" alt="Deadlift form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> bar over mid-foot (your shoelaces); hinge to grip just outside the legs, flat neutral spine, chest up, lats tight.</div>
       <div class="ex-info-row"><strong>Brace:</strong> big breath, push your belly out "like you're about to be punched," hold it.</div>
       <div class="ex-info-row"><strong>Move:</strong> push the floor away; the bar drags up the legs; lock out by squeezing the glutes — no leaning back.</div>`},
     {n:"Barbell Front Squat",why:"Quads + core — tough even light.",s:"3×12 · 3s down",t:"c",info:`<img class="ex-img" loading="lazy" alt="Front squat form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg">
       <div class="ex-info-row"><strong>ELBOWS UP / lead with the elbows</strong> — this one cue fixes most faults; upper arms roughly parallel to the floor.</div>
       <div class="ex-info-row"><strong>Bar:</strong> rests on the shelf of your front delts (not your throat); fingertips just guide it — don't wrap the whole hand.</div>
       <div class="ex-info-row"><strong>Move:</strong> chest tall, vertical torso, 3s controlled lower, drive through the heels. If the elbows drop, the bar rolls forward.</div>`},
     {n:"Barbell Overhead Press",why:"Second weekly shoulder hit — width.",s:"3×8",t:"c",info:`<img class="ex-img" loading="lazy" alt="Overhead press form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> wrists stacked, brace glutes/abs, press through the window. No big lean.</div>`},
     {n:"Barbell Hip Thrust",why:"Glutes & posterior chain.",s:"3×15 · 2s squeeze",t:"c",info:`<img class="ex-img" loading="lazy" alt="Hip thrust form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> upper back on the bench edge, bar across the hips (padded), feet flat and fairly close.</div>
       <div class="ex-info-row"><strong>Chin tucked ("double chin") and ribs down</strong> — a posterior tilt; this stops you over-arching the lower back.</div>
       <div class="ex-info-row"><strong>Move:</strong> drive through the HEELS to full lockout (torso and thighs in a line, knees ~90°); squeeze the glutes and pause 2s.</div>`},
   ]},
   {title:"🔔 KETTLEBELL / 🏋️ DUMBBELL", dot:"var(--teal)", exs:[
     {n:"Kettlebell Goblet Squat",why:"Legs + metabolism.",s:"3×12",t:"c",info:`<img class="ex-img" loading="lazy" alt="Goblet squat form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> bell at the chest, sit between the hips, chest up, knees track the toes, drive through the heels.</div>`},
     {n:"Kettlebell Goblet Lunge",why:"Single-leg quads & glutes; balance.",s:"3×10/leg",t:"c",info:`<img class="ex-img" loading="lazy" alt="Lunge form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> hold the bell at your chest, elbows down; step into a long stride.</div>
       <div class="ex-info-row"><strong>Move:</strong> drop the back knee straight down toward the floor, front shin near vertical, torso tall; push through the front heel to stand.</div>
       <div class="ex-info-row"><strong>Avoid:</strong> the front knee caving in or your weight on the toes — drive through the heel, knee tracks the toes.</div>`},
     {n:"Dumbbell Lateral Raise",why:"Side-delt width.",s:"3×15",t:"i",info:`<img class="ex-img" loading="lazy" alt="Lateral raise form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg">
       <div class="ex-info-row"><strong>Cue:</strong> lead with the elbows, shoulder height, strict.</div>`},
     {n:"Zottman Hammer Curl",why:"Biceps + forearms — kept last so it won't pre-fatigue the big lifts.",s:"3×10",t:"f",info:`<img class="ex-img" loading="lazy" alt="Zottman curl form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Zottman_Curl/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> curl up with a neutral/hammer grip, rotate to palms-down at the top, then lower slowly — that slow palms-down lower is the forearm work.</div>`},
   ]},
   {title:"⏱️ FINISHER", dot:"var(--blu)", exs:[
     {n:"Jump Rope Finisher",why:"Short conditioning hit.",s:"5 min",t:"cd",info:`<img class="ex-img" loading="lazy" alt="Jump rope form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rope_Jumping/0.jpg">
       <div class="ex-info-row"><strong>Form:</strong> balls of the feet, small hops, wrists turn the rope.</div>`},
   ]},
  ],
  overload:"Deadlift can climb a little weekly while the back stays flat. Everything else: tempo, pauses, reps."
 },
 {
  label:"SAT", tag:"CONDITIONING", name:"Core & Conditioning",
  type:"lift", focus:"BELLY", sub:"Burn the Belly", color:"c-bl",
  sections:[
   {title:"🔔 KETTLEBELL — one bell", dot:"var(--teal)", exs:[
     {n:"Kettlebell Swing",why:"Explosive full-body burn.",s:"4×20",t:"c",info:`<img class="ex-img" loading="lazy" alt="Kettlebell swing form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Swings/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> hinge (not squat), hike the bell back, snap the hips, squeeze the glutes hard at the top; arms are hooks. <em>(Image shows one-arm — do it two-handed.)</em></div>`},
     {n:"Kettlebell Halo",why:"Shoulder mobility + braced core, leg-light.",s:"3×8/direction",t:"cr",info:`
       <div class="ex-info-row"><strong>Setup:</strong> hold the bell upside-down by the horns at chest height.</div>
       <div class="ex-info-row"><strong>Move:</strong> circle it slowly and close around your head, keeping the core tight and ribs down; switch directions.</div>
       <div class="ex-info-row"><strong>Why:</strong> low-impact while sore legs recover. <em>(No clean stock photo for this one — going off the cues.)</em></div>`},
     {n:"Kettlebell Suitcase Carry",why:"Anti-tilt core — carves the obliques.",s:"3×40ft/side",t:"cr",info:`<img class="ex-img" loading="lazy" alt="Suitcase carry form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Farmers_Walk/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> one bell at your side; walk tall and do NOT lean toward it — brace the opposite side to stay upright; switch hands each set.</div>`},
   ]},
   {title:"🧱 CORE", dot:"var(--grn)", exs:[
     {n:"Reverse Crunch",why:"Lower abs — shows when the belly shrinks.",s:"3×15",t:"cr",info:`<img class="ex-img" loading="lazy" alt="Reverse crunch form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Crunch/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> curl your PELVIS toward your ribs, lifting the hips off the floor — no swinging the legs or momentum; exhale up, control down.</div>`},
     {n:"Dumbbell Russian Twist",why:"Obliques — the side lines.",s:"3×20",t:"cr",info:`<img class="ex-img" loading="lazy" alt="Russian twist form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg">
       <div class="ex-info-row"><strong>Move:</strong> lean back ~45°, rotate the shoulders side to side, control the weight, chest up.</div>`},
     {n:"Plank",why:"Stability + tighter midsection.",s:"3×45s",t:"cr",info:`<img class="ex-img" loading="lazy" alt="Plank form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg">
       <div class="ex-info-row"><strong>Cue:</strong> straight line head-to-heel, tuck ribs, squeeze glutes, brace abs.</div>`},
   ]},
   {title:"🦾 BALANCE + ⏱️ CONDITIONING", dot:"var(--pur)", exs:[
     {n:"Reverse Wrist Curl",why:"Forearm extensors — balances all the curling.",s:"3×15",t:"f",info:`<img class="ex-img" loading="lazy" alt="Reverse wrist curl form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Palms-Down_Barbell_Wrist_Curl/0.jpg">
       <div class="ex-info-row"><strong>Setup:</strong> forearms supported, palms DOWN, wrists off the edge.</div>
       <div class="ex-info-row"><strong>Move:</strong> lift the back of the hand up; small range, lighter than regular wrist curls; forearms stay still.</div>`},
     {n:"Jump Rope HIIT",why:"Second weekly fat-burn block.",s:"15 min",t:"cd",info:`<img class="ex-img" loading="lazy" alt="Jump rope form" src="https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rope_Jumping/0.jpg">
       <div class="ex-info-row"><strong>Form:</strong> balls of the feet, small hops, wrists turn the rope; hard/easy intervals.</div>`},
   ]},
  ],
  overload:"Push rope intervals harder (not longer) and add a core set before any load."
 },
 {
  label:"SUN", tag:"ACTIVE RECOVERY", name:"Mobility, Posture & Light Work",
  type:"active", focus:"RECOVERY", sub:"Your one rest day", color:"c-te",
  sections:[], overload:""
 },
];
