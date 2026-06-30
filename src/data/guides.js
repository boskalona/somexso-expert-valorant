const guides = [
  {
    id: 'beginner-fundamentals',
    level: 'Beginner',
    levelColor: '#4ade80',
    icon: '🌱',
    title: 'The Absolute Fundamentals',
    subtitle: 'Start here. Master these and you will climb out of Iron–Bronze guaranteed.',
    duration: '2–3 weeks',
    chapters: [
      {
        title: '1. Crosshair Placement',
        icon: '🎯',
        body: 'The single most impactful habit in Valorant. Keep your crosshair at head height at ALL times — not the floor, not the sky. Pre-aim the corner where an enemy head will appear. When done correctly, killing someone requires moving your mouse less than 10 pixels. Most Iron–Bronze players lose 90% of duels because their crosshair is at chest or knee height when the enemy appears.',
        steps: ['Always keep crosshair at head height.', 'Pre-aim spots before you get there.', 'Walk into a corner only when your crosshair is already on the head position.', 'Practice in Deathmatch: count how many times enemy appeared exactly where your crosshair was.']
      },
      {
        title: '2. Counter-Strafing',
        icon: '🦶',
        body: 'In Valorant, you cannot shoot accurately while moving. Counter-strafing is pressing the opposite movement key for one frame to instantly stop your momentum, then shooting. Without it, your bullets spray randomly. This single mechanic separates Bronze from Gold players.',
        steps: ['Moving right (D)? Tap A before shooting.', 'Moving left (A)? Tap D before shooting.', 'Listen for the footstep sound — it stops when you stop.', 'In deathmatch, practice: move, stop, click, move, stop, click.']
      },
      {
        title: '3. Sensitivity',
        icon: '🖱️',
        body: 'Find a sensitivity and keep it for at least 30 hours. Constant changes destroy muscle memory. Recommended starting point: 400 DPI × 0.4 in-game = 160 eDPI. Use a large mousepad (40cm × 40cm minimum). Low sensitivity = more arm = more accuracy at range.',
        steps: ['Set sensitivity and don\'t change it for 30 hours minimum.', 'Recommended: 400 DPI × 0.3–0.5 in-game sensitivity.', 'Large mousepad is not optional — invest in one.', 'Test: Can you do a 180 with one arm swipe? Good range.']
      },
      {
        title: '4. Minimap Awareness',
        icon: '🗺️',
        body: 'Check your minimap every 3–5 seconds. It tells you where your team is, where enemies were last seen, and which areas are safe. Most beginners never look at it. Minimap awareness alone will prevent 30% of your deaths.',
        steps: ['Check minimap at the start of every round for team positions.', 'After hearing gunfire, immediately look at minimap to see where it came from.', 'Use minimap to decide whether to push or fall back.', 'Set minimap zoom to show more of the map (increase radius in settings).']
      },
      {
        title: '5. Economy Basics',
        icon: '💰',
        body: 'Valorant is also an economy game. You cannot full-buy every round. After a loss, your team needs to decide: save (buy nothing) or force (buy cheap guns). The most common beginner mistake is buying a rifle alone when everyone else is saving — you give the enemy a free gun.',
        steps: ['After a loss: ask "is anyone else buying?" before purchasing.', 'If 2+ teammates are saving, you should save too.', 'Rifle + Light Shield minimum for a proper buy round.', 'Eco round goal: don\'t die with your gun. Save it for next round.']
      },
    ]
  },
  {
    id: 'intermediate-mechanics',
    level: 'Intermediate',
    levelColor: '#60a5fa',
    icon: '⚡',
    title: 'Silver to Platinum Mechanics',
    subtitle: 'You understand the basics. Now refine your mechanics and start thinking two steps ahead.',
    duration: '1–2 months',
    chapters: [
      {
        title: '1. Peeking Mechanics',
        icon: '👁️',
        body: 'Not all peeks are equal. Wide peeks clear your own crosshair placement and give you an angle before the enemy. Jiggle peeks bait shots without committing. Learning when to use each determines whether you win 60% or 40% of your duels.',
        steps: ['Wide peek: step 1–2m from the wall before peeking so you see the enemy before they fully see you.', 'Jiggle peek: tap left-right quickly to bait a shot without fully exposing yourself.', 'Never peek while moving — counter-strafe first, every single time.', 'Shoulder peek: expose just your shoulder to bait Operator shots before swinging.']
      },
      {
        title: '2. Ability Timing',
        icon: '⏱️',
        body: 'Abilities used at the wrong time are wasted. Flash 0.5 seconds before you peek, not 2 seconds. Smoke the angle that kills you, not the general area. Save utilities until the round situation calls for it — don\'t use your entire kit in the first 30 seconds.',
        steps: ['Flash should land 0.5s before your peek — not before, not after.', 'Smoke the specific angle you\'re going to peek past.', 'Don\'t save utility if a teammate is dying — use it.', 'Save ult for high-value situations: plant, 1vX, or retake.']
      },
      {
        title: '3. Map Control',
        icon: '🗺️',
        body: 'Taking map control means reaching positions before the enemies expect. On attack, claiming mid early opens both sites. On defense, aggressive positioning gives information before enemies commit. Map control determines which team has options each round.',
        steps: ['On attack, have a plan before the round starts — don\'t wander.', 'Learn which 2–3 positions on each map are "control" positions.', 'Trade space for information: push until you hear or see something, then report.', 'As a defender, aggressive positions gather early information about attack timing.']
      },
      {
        title: '4. Post-Plant Situations',
        icon: '💣',
        body: 'After planting the spike, most players stand on the site waiting to be killed. Wrong. Get off-site into unexpected angles. Know where the spike is visible from and hold those spots. Learn which abilities (slow, nanoswarm, molly) devastate defusers.',
        steps: ['After planting: immediately move to an unexpected angle.', 'Never stack multiple players in the same post-plant spot.', 'Slow/fire abilities on the spike punish every defuse attempt.', 'Count defuse time: 7 seconds — the last 3.5s is when to challenge.']
      },
      {
        title: '5. Communication',
        icon: '🎙️',
        body: 'Correct callouts win rounds that mechanics alone cannot. Say enemy positions immediately. Call your abilities before using them. After death, keep giving information from your camera. Positive communication creates better team performance — even with strangers.',
        steps: ['Call positions immediately: "2 B Long pushing" not "they\'re B."', 'Call abilities 3 seconds before: "flashing mid in 3."', 'After dying: keep watching your killer and call their position.', 'Never call "gg" before the round ends — it tilts your team.']
      },
    ]
  },
  {
    id: 'advanced-strategy',
    level: 'Advanced',
    levelColor: '#f59e0b',
    icon: '🔥',
    title: 'Diamond to Immortal Strategy',
    subtitle: 'Pure mechanics got you here. Winning now requires thinking and decision-making every round.',
    duration: '2–4 months',
    chapters: [
      {
        title: '1. Reading Enemies',
        icon: '🧠',
        body: 'At this level, good players predict what the enemy is doing based on utility usage, timing, and information. An early aggressive push usually means a fast round. A quiet first 30 seconds means utility-heavy execute coming. Reading the enemy tells you how to position before they commit.',
        steps: ['Track enemy utility: if they smoked mid, they won\'t smoke A main.', 'Quiet round start = prepare for a coordinated execute.', 'After losing a player, immediately ask "where were they going before they died?"', 'Enemy eco round: play more aggressively — they can\'t fight.']
      },
      {
        title: '2. Off-Angles',
        icon: '📐',
        body: 'Off-angles are positions enemies don\'t pre-aim. Instead of holding the most obvious spot, be 1–2 meters to the side. The enemy\'s crosshair placement was set for the standard position — they must re-adjust, losing 0.2–0.3 seconds. At Immortal speeds, that\'s a dead enemy.',
        steps: ['Identify the "standard" position enemies pre-aim.', 'Place yourself 1–2m to the side of that position.', 'Off-angles work once or twice per round per site — rotate after being found.', 'Combine off-angles with aggression: peek before they expect it.']
      },
      {
        title: '3. Manipulating Rotations',
        icon: '🔄',
        body: 'At higher levels, every action is a statement to the enemy — real or fake. A fake A execute makes B defenders hold A. A real B execute after a fake drains enemy utility. Learning to manipulate rotations through deliberate fakes is a hallmark of high-elo play.',
        steps: ['Run a fake: have 2 players make noise on one site while 3 execute the other.', 'Use early round utility on a site you won\'t attack.', 'Vary your round structure — same pattern every round is predictable.', 'Watch the clock: a forced rotation at 50 seconds leaves one site open.']
      },
      {
        title: '4. Clutch Situations',
        icon: '⚔️',
        body: 'A 1vX is not just mechanics — it\'s information management and patience. The biggest clutch mistake is rushing. In a 1v3, you don\'t need 3 kills — you need the spike. Separate enemies, take them one at a time, and use every ability you have.',
        steps: ['1vX: get the spike if you have it. Plant even before fighting.', 'Separate enemies: make noise on one side, kill from the other.', 'Never peek two enemies simultaneously — one at a time.', 'Use every utility you have — this is the moment to spend everything.']
      },
      {
        title: '5. VOD Review',
        icon: '📹',
        body: 'Watching your own games is the fastest way to improve at this level. You see mistakes you didn\'t notice while playing: bad positions, unnecessary peeks, and wasted utility. One hour of VOD review improves your game more than five hours of playing.',
        steps: ['After every loss, watch the key round where you made a mistake.', 'Specifically watch: your position when you died. Was it crossfire? Off-angle?', 'Watch the enemy\'s POV to see what they saw when they killed you.', 'Find 3 rounds per session to review. Don\'t rewatch wins — wins reveal little.']
      },
    ]
  },
  {
    id: 'pro-mindset',
    level: 'Pro',
    levelColor: '#f43f5e',
    icon: '💎',
    title: 'Radiant Mindset & Habits',
    subtitle: 'The mechanical gap closes at the top. What separates Radiant from Immortal is consistency, decision-making, and mental.',
    duration: 'Ongoing',
    chapters: [
      {
        title: '1. Consistency Over Performance',
        icon: '📊',
        body: 'Top players don\'t have perfect games — they have consistent games. Aim for 20 ACS above your average, not 400 ACS one-time plays. Consistency means every round you know your role, your position, and your plan. Variance decreases and rank climbs.',
        steps: ['Set a 10-session ACS goal, not a single game goal.', 'Track your stats weekly — consistency is visible in data.', 'Identify your variance: what makes your bad games bad? Fix that first.', 'Play fewer rounds per session at 100% focus vs many rounds tired.']
      },
      {
        title: '2. Role Discipline',
        icon: '🎭',
        body: 'At Radiant, every player knows their exact role and executes it regardless of personal preference. The IGL calls — everyone follows. The entry fragger goes first — every round, no exceptions. Role discipline means trusting your team and performing your function maximally.',
        steps: ['Know your role before the round starts: entry, support, anchor, lurk, or IGL.', 'If you\'re the entry fragger — go first every round, even when you don\'t want to.', 'If you\'re the IGL — call a default or execute before the buy phase ends.', 'Never play outside your role without clear communication.']
      },
      {
        title: '3. Mental Reset',
        icon: '🧘',
        body: 'At the highest level, mental state directly determines performance. Tilt from a bad round affects your positioning and decision-making in the next 3 rounds. Top players develop resets: a breath, a specific verbal phrase, or a physical cue to clear mental state between rounds.',
        steps: ['Stop playing after 2 losses in a row if you feel frustrated.', 'Between rounds: take one breath and say "next round is different."', 'After a death: analyze once, then fully reset. No carrying over.', 'Never blame teammates aloud — even when they\'re wrong.']
      },
      {
        title: '4. Preparation',
        icon: '📚',
        body: 'Radiant players study the game outside it. They watch pro matches, track patch notes, and learn from players better than themselves. The game changes every two weeks — staying ahead means learning faster than your competition.',
        steps: ['Watch 30 minutes of pro play per week on your main agent.', 'Read patch notes the day they drop — changes affect your agent and counters.', 'Follow one pro player who plays your main agent — copy their lineup setups.', 'Review your tracker.gg stats weekly for trends in your performance.']
      },
      {
        title: '5. Physical Fundamentals',
        icon: '💪',
        body: 'Top performance requires physical readiness. Hydration, sleep, and posture directly affect reaction time and accuracy. Dehydration alone reduces reaction time by 10–15%. Sleep deprivation reduces accuracy by up to 25%. The best aim training is sleeping 8 hours.',
        steps: ['Sleep 7–8 hours before ranked sessions. Non-negotiable.', 'Drink water before and during sessions — not coffee alone.', 'Chair height: elbows at 90° when using mouse. Wrist below elbow.', 'Warm up 15 minutes in Aim Lab or practice range before every ranked session.']
      },
    ]
  },
];

module.exports = guides;
