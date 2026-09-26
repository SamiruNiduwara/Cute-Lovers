/* =====================================================================
   EDIT ME — this is the only section you need to touch to personalize.
   ===================================================================== */
const CONFIG = {
  name: "My Love",
  yourName: "Yours, always",

  // ---- Anniversary tracker: the date it all started, as YYYY-MM-DD ----
  anniversaryDate: "2023-06-15",

  // ---- Her birthday, as YYYY-MM-DD (year is used to show the age she's turning) ----
  birthdayDate: "1999-04-22",

  // ---- Milestones: any days-together count you want tracked, plus a label ----
  milestones: [
    { label: "100 Days", days: 100 },
    { label: "6 Months", days: 182 },
    { label: "1 Year", days: 365 },
    { label: "500 Days", days: 500 },
    { label: "2 Years", days: 730 },
    { label: "3 Years", days: 1095 },
    { label: "1000 Days", days: 1000 },
    { label: "5 Years", days: 1825 }
  ],

  // ---- 10 titled letters. Tap any tile on the "Your letters" screen to open one. ----
  letters: [
    {
      id: "just-because",
      title: "Just because",
      tag: "💌",
      subtitle: "No occasion needed",
      paragraphs: [
        "No occasion, no reason, nothing to celebrate — I just wanted you to have this today.",
        "I've been trying to figure out how to say this, and I don't think there's one perfect way, so I'll just say it plainly: you make my ordinary days feel like something worth paying attention to.",
        "That's really it. That's the whole letter. I just wanted you to know that."
      ]
    },
    {
      id: "rough-day",
      title: "For a rough day",
      tag: "🤍",
      subtitle: "Read this when today feels like too much",
      paragraphs: [
        "If you're reading this, today's been hard. So first, breathe. You don't have to hold it together for anyone right now.",
        "Whatever's weighing on you doesn't change how I see you. You're still the same person I fell for — steady, kind, and trying your best.",
        "You don't have to fix everything today. Just get through it. I'm right here, and I'm not going anywhere."
      ]
    },
    {
      id: "missing-you",
      title: "When you're missing me",
      tag: "🥹",
      subtitle: "For the distance in between",
      paragraphs: [
        "I know the distance is hard some days. I feel it too, more than I probably say out loud.",
        "But missing someone is just proof of how much they matter to you — so in a strange way, I'm almost glad you feel it, because I feel it right back.",
        "This won't be forever. Until then, I'm still yours, from wherever I am."
      ]
    },
    {
      id: "good-morning",
      title: "Good morning",
      tag: "🌅",
      subtitle: "For the start of your day",
      paragraphs: [
        "However today goes, I hope it starts with knowing someone out there is already thinking about you.",
        "Go easy on yourself, drink some water, and do one small thing today just because it makes you happy.",
        "I hope your day is kind to you. And if it's not, come find me later — I'll be here."
      ]
    },
    {
      id: "good-night",
      title: "Good night",
      tag: "🌙",
      subtitle: "For winding down",
      paragraphs: [
        "Whatever today was, it's over now. Let it go for a little while.",
        "Wherever you are, I hope you feel warm and unhurried tonight. You've earned some rest.",
        "Sleep well. I'll still be thinking about you tomorrow, the same as I was today."
      ]
    },
    {
      id: "proud-of-you",
      title: "When I'm proud of you",
      tag: "🌟",
      subtitle: "For your wins, big or small",
      paragraphs: [
        "I need you to actually hear this, not just skim past it: I am so proud of you.",
        "Not just for the big wins — for the quiet, unglamorous effort that nobody claps for. I see that part too.",
        "You worked for this. Let yourself feel good about it. I'm already telling everyone."
      ]
    },
    {
      id: "after-we-argue",
      title: "After we argue",
      tag: "🫂",
      subtitle: "When we've had a hard moment",
      paragraphs: [
        "I hate when things feel tense between us. I never want silence to be the thing sitting in the room instead of us.",
        "Disagreeing doesn't scare me. What matters is that we're still on the same team, even when we see things differently.",
        "I love you on the easy days and on the hard ones. Let's talk it through, whenever you're ready."
      ]
    },
    {
      id: "when-you-doubt-yourself",
      title: "When you doubt yourself",
      tag: "💪",
      subtitle: "A little reminder of who you are",
      paragraphs: [
        "I know that voice in your head gets loud sometimes and tells you you're not enough. It's lying.",
        "I've watched you handle things you didn't think you could. You're more capable than the doubt is giving you credit for.",
        "You don't have to believe it on your own tonight — I'll believe it for both of us until you do."
      ]
    },
    {
      id: "no-reason-at-all",
      title: "For no reason at all",
      tag: "✨",
      subtitle: "Random, small, and true",
      paragraphs: [
        "A few completely unimportant things I love: the way you laugh at your own jokes before you finish telling them, how you say my name, the playlists you make that are basically letters in song form.",
        "None of this is profound. It's just true, and I wanted to write it down somewhere.",
        "You're my favorite person to do absolutely nothing with."
      ]
    },
    {
      id: "someday",
      title: "Someday, read this last",
      tag: "🔮",
      subtitle: "For further down the road",
      paragraphs: [
        "If you're reading this years from now, I hope we're still finding little reasons to write things like this to each other.",
        "I hope the ordinary days turned into a whole life, and that it still feels like this — easy, safe, worth showing up for.",
        "Thank you for choosing me, every day, even on the days it wasn't easy. I never took that for granted, then or now."
      ]
    }
  ],

  // ---- Memory timeline: starts empty on purpose. Visitors build their own timeline, entry by entry. ----
  timeline: [],

  reasons: [
    "The way you get excited about things you love, out loud, without holding back.",
    "You remember the little things I mention once and bring them up weeks later.",
    "Your laugh — the real one, not the polite one.",
    "How safe I feel telling you the truth about anything.",
    "The way you take care of the people around you without being asked.",
    "You make plans exciting just by being part of them.",
    "How you say 'we' about things before I even ask.",
    "You're my favorite person to do absolutely nothing with.",
    "The way you push me to be better, gently.",
    "That look you give me when you think I'm not paying attention.",
    "The way you say good morning like you mean it, even half asleep.",
    "You make me want to be a better version of myself, not a different one.",
    "How you always save me the last bite without me even asking.",
    "The way your whole face changes when you talk about something you love.",
    "You never make me feel silly for caring about small things.",
    "How you hype me up before things I'm nervous about.",
    "The way you hum without realizing it when you're happy.",
    "You ask how my day actually was, and you wait for the real answer.",
    "How you turn ordinary errands into something fun just by being there.",
    "The way you hold my hand a little tighter in crowds.",
    "You forgive quickly and never keep score.",
    "How you notice when I'm quiet and gently ask what's wrong.",
    "The playlists you make me that are basically just letters in song form.",
    "You believe in my dumbest ideas just enough to make them happen.",
    "The way you fall asleep mid-sentence and it's somehow adorable.",
    "How you defend me even when I'm not in the room.",
    "You make the most boring days feel like an inside joke.",
    "The way you say my name when you're trying not to laugh.",
    "How you remember exactly how I like my coffee.",
    "You've never once made me feel like too much.",
    "The way you dance in the kitchen when you think no one's watching.",
    "How you check in on the people I love, just because you love me.",
    "You make plans B, C, and D without complaining when plan A falls apart.",
    "The way you say 'come here' when I've had a hard day.",
    "How you still get a little shy when I compliment you.",
    "You've turned into my favorite person to be bored with.",
    "The way you root for me louder than I root for myself.",
    "How your bad moods never turn into bad treatment of me.",
    "You keep every little thing I've ever given you, even the silly ones.",
    "The way you say 'we'll figure it out' and I actually believe it.",
    "How you make me laugh so hard I forget what I was upset about.",
    "You're endlessly patient with me on my slow, grumpy mornings.",
    "The way you look for me first in every room you walk into.",
    "How you make ordinary Tuesdays feel like they matter.",
    "You never let me apologize for taking up space.",
    "The way you say 'I'm proud of you' like it's the easiest thing in the world.",
    "How being near you makes my shoulders drop an inch.",
    "You choose me, over and over, in all the small unglamorous ways.",
    "The way you remember my worries and quietly check back on them.",
    "How you make me feel like the good parts of me are the real parts.",
    "You are, simply, my favorite reason to come home."
  ],

  // ---- Emoji Love Puzzle: emojis + the word/phrase they spell out ----
  puzzles: [
    { emojis: "🐻❤️", answer: "bear hug" },
    { emojis: "🌙✨", answer: "moonlight" },
    { emojis: "☕📖", answer: "lazy morning" },
    { emojis: "💃🕺", answer: "date night" },
    { emojis: "🔑❤️", answer: "key to my heart" }
  ],

  // ---- Date Night Picker: ideas grouped by mood, so the pick always matches what's shown ----
  dateIdeas: {
    cozy: [
      "Cook dinner together from scratch",
      "Movie marathon with all the blankets",
      "Build a pillow fort and order dessert",
      "Bake something messy and eat it warm",
      "Lazy morning-in with pancakes and cartoons",
      "Puzzle night with music playing low"
    ],
    romantic: [
      "Go for a sunset walk, no phones",
      "Candlelit dinner at home, dressed up for no reason",
      "Slow dance in the kitchen to one song, then another",
      "Write each other a short love letter and swap them",
      "Stargazing with a shared blanket and hot drinks",
      "Recreate your very first date"
    ],
    adventurous: [
      "Surprise road trip, no destination decided yet",
      "Try a new restaurant neither of you has been to",
      "Take a spontaneous hike or bike ride",
      "Sign up for a class together — cooking, dance, pottery",
      "Explore a neighborhood you've never walked through",
      "Chase a sunrise somewhere new"
    ],
    budget: [
      "Picnic in the park with snacks from home",
      "Game night with the games you already own",
      "Free museum or gallery night, if your city has one",
      "DIY spa night — face masks and bad music",
      "Library date, then coffee and comparing what you picked",
      "Sunset from the highest free spot nearby"
    ]
  },

  // ---- Compliment Machine: full sentences it can land on ----
  compliments: [
    "You are the best part of my day, every day.",
    "Your smile is genuinely my favorite thing in this world.",
    "I fall for you a little more every single day.",
    "You make hard days feel a lot lighter.",
    "I love how you see the world — it makes me see it better too.",
    "You are so much more wonderful than you give yourself credit for.",
    "Being around you feels like home.",
    "You are, hands down, my favorite person."
  ]
};
/* ===================================================================== */

// ---- persist the anniversary + birthday dates the user sets, across visits ----
function saveDatesToStorage(){
  try{
    localStorage.setItem('loveAppDates', JSON.stringify({
      anniversaryDate: CONFIG.anniversaryDate,
      birthdayDate: CONFIG.birthdayDate
    }));
  }catch(e){ /* fine if storage isn't available */ }
}
(function loadDatesFromStorage(){
  try{
    const saved = JSON.parse(localStorage.getItem('loveAppDates') || 'null');
    if(saved && typeof saved === 'object'){
      if(saved.anniversaryDate) CONFIG.anniversaryDate = saved.anniversaryDate;
      if(saved.birthdayDate) CONFIG.birthdayDate = saved.birthdayDate;
    }
  }catch(e){ /* localStorage unavailable — the defaults above stay in place */ }
})();

document.getElementById('nameHeading').textContent = CONFIG.name;

/* ================= ENTRY GATE + WELCOME + LOGOUT ================= */
let gateSelectedGender = null;
let currentVisitor = null;

// Content is written from a boyfriend-to-girlfriend point of view by default.
// A girl visitor's partner is "him"; a boy visitor's partner is "her" — so we
// flip every partner-facing label to match whoever's actually logged in.
const PARTNER_TEXT = {
  girl: { poss: 'His', lower: 'his' },
  boy:  { poss: 'Her', lower: 'her' }
};

function applyPartnerGender(gender){
  const p = PARTNER_TEXT[gender] || PARTNER_TEXT.boy;
  document.getElementById('birthdayTicketLabel').textContent = p.poss + ' birthday';
  document.getElementById('birthdayHeading').textContent = p.poss + ' Birthday 🎂';
  document.getElementById('bdayEditorLabel').textContent = "When's " + p.lower + " birthday?";
  document.getElementById('bdayCountdownLabel').textContent = 'days until ' + p.lower + ' birthday';
}

function selectGender(g){
  gateSelectedGender = g;
  document.getElementById('pillGirl').classList.toggle('selected', g === 'girl');
  document.getElementById('pillBoy').classList.toggle('selected', g === 'boy');
  document.getElementById('gateError').textContent = '';
}

function setLoggedInUI(isLoggedIn){
  document.getElementById('logoutBtn').style.display = isLoggedIn ? 'flex' : 'none';
}

function submitGate(){
  const nameEl = document.getElementById('gateName');
  const ageEl = document.getElementById('gateAge');
  const errEl = document.getElementById('gateError');

  const name = nameEl.value.trim();
  const ageRaw = ageEl.value.trim();
  const age = Number(ageRaw);

  if(!name){ errEl.textContent = "I'd love to know your name first."; nameEl.focus(); return; }
  if(!gateSelectedGender){ errEl.textContent = 'Please pick one so I can say hi properly.'; return; }
  if(!ageRaw || !Number.isFinite(age) || age <= 0 || age > 120){ errEl.textContent = 'That age doesn\'t look right — mind checking it?'; ageEl.focus(); return; }

  errEl.textContent = '';
  const visitor = { name: name, gender: gateSelectedGender, age: age };
  try{ localStorage.setItem('loveAppVisitor', JSON.stringify(visitor)); }catch(e){ /* fine if storage isn't available */ }

  currentVisitor = visitor;
  applyPartnerGender(visitor.gender);
  showWelcome(visitor, false);
}

function showWelcome(visitor, isReturning){
  document.getElementById('gate').classList.remove('active');
  setLoggedInUI(true);

  const overlay = document.getElementById('welcome-overlay');
  const icon = document.getElementById('welcomeIcon');
  const msg = document.getElementById('welcomeMsg');
  const sub = document.getElementById('welcomeSub');

  icon.textContent = visitor.gender === 'girl' ? '👸' : '🤴';
  msg.textContent = (isReturning ? 'Welcome back, ' : 'Welcome, ') + visitor.name;
  sub.textContent = isReturning ? 'good to see you again' : "so glad you're here";

  // restart the pop/rise animations every time this is shown
  [icon, msg, sub].forEach(el=>{ el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; });

  overlay.classList.add('show');

  setTimeout(()=>{
    overlay.classList.remove('show');
    setTimeout(()=>{ showScreen('home'); }, 500); // wait for the fade-out to finish
  }, 3000);
}

function logoutUser(){
  try{ localStorage.removeItem('loveAppVisitor'); }catch(e){ /* nothing to clear */ }
  currentVisitor = null;
  gateSelectedGender = null;

  document.getElementById('gateName').value = '';
  document.getElementById('gateAge').value = '';
  document.getElementById('pillGirl').classList.remove('selected');
  document.getElementById('pillBoy').classList.remove('selected');
  document.getElementById('gateError').textContent = '';

  setLoggedInUI(false);
  showScreen('gate');
}

// On load: if this device already has someone logged in, skip the gate
// entirely — go straight to the personalized welcome, then home.
(function autoLogin(){
  try{
    const saved = JSON.parse(localStorage.getItem('loveAppVisitor') || 'null');
    if(saved && saved.name && saved.gender){
      currentVisitor = saved;
      applyPartnerGender(saved.gender);
      showWelcome(saved, true);
      return;
    }
  }catch(e){ /* localStorage unavailable — just show the gate below */ }
})();

/* ---------- navigation ---------- */
let annivInterval = null;
let bdayInterval = null;
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if(id === 'anniversary'){
    milestonesRendered = false;
    updateAnniversary();
    if(annivInterval) clearInterval(annivInterval);
    annivInterval = setInterval(updateAnniversary, 1000);
  } else if(annivInterval){
    clearInterval(annivInterval);
    annivInterval = null;
  }

  if(id === 'birthday'){
    updateBirthday();
    if(bdayInterval) clearInterval(bdayInterval);
    bdayInterval = setInterval(updateBirthday, 30000);
  } else if(bdayInterval){
    clearInterval(bdayInterval);
    bdayInterval = null;
  }
}

/* ---------- floating hearts on home ---------- */
(function(){
  const wrap = document.getElementById('floatHearts');
  const syms = ['💋','💖','❤️','🫶'];
  for(let i=0;i<8;i++){
    const s = document.createElement('span');
    s.textContent = syms[i % syms.length];
    s.style.left = (Math.random()*90)+'%';
    s.style.animationDelay = (Math.random()*14)+'s';
    s.style.animationDuration = (10+Math.random()*8)+'s';
    s.style.fontSize = (14+Math.random()*14)+'px';
    wrap.appendChild(s);
  }
})();

/* ---------- floating hearts on every other card (not home, not the hug popup) ---------- */
(function(){
  const targetScreens = ['lettersList','letterView','anniversary','reasons','gamesMenu','puzzleGame','pickerGame','slotGame','timeline'];
  const syms = ['💋','💖','❤️','🫶'];
  targetScreens.forEach(id=>{
    const screen = document.getElementById(id);
    if(!screen) return;
    const wrap = document.createElement('div');
    wrap.className = 'float-hearts-mini';
    for(let i=0;i<6;i++){
      const s = document.createElement('span');
      s.textContent = syms[i % syms.length];
      s.style.left = (Math.random()*90)+'%';
      s.style.animationDelay = (Math.random()*13)+'s';
      s.style.animationDuration = (9+Math.random()*7)+'s';
      s.style.fontSize = (11+Math.random()*8)+'px';
      wrap.appendChild(s);
    }
    screen.insertBefore(wrap, screen.firstChild);
  });
})();

/* ---------- floating birthday decorations (cake screen only) ---------- */
(function(){
  const screen = document.getElementById('birthday');
  if(!screen) return;
  const wrap = document.createElement('div');
  wrap.className = 'float-bday-mini';
  const syms = ['🎂','🎈','🎉','🍰','✨'];
  for(let i=0;i<7;i++){
    const s = document.createElement('span');
    s.textContent = syms[i % syms.length];
    s.style.left = (Math.random()*88)+'%';
    s.style.animationDelay = (Math.random()*12)+'s';
    s.style.animationDuration = (8+Math.random()*7)+'s';
    s.style.fontSize = (14+Math.random()*10)+'px';
    wrap.appendChild(s);
  }
  screen.insertBefore(wrap, screen.firstChild);
})();

/* ---------- copy to clipboard + toast (used by letter, reasons, date picker) ---------- */
let toastTimer = null;
function showToast(msg){
  const t = document.getElementById('copyToast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 1700);
}
function fallbackCopy(text, onDone){
  try{
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    onDone();
  }catch(e){ showToast("Couldn't copy — try pressing and holding the text"); }
}
function copyText(text, successMsg){
  const onDone = ()=> showToast(successMsg || 'Copied ❤');
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(onDone).catch(()=> fallbackCopy(text, onDone));
  } else {
    fallbackCopy(text, onDone);
  }
}

/* ---------- letters (list + individual letter view) ---------- */
const LETTERS_READ_KEY = 'loveAppLettersRead';
function loadReadLetters(){
  try{ return JSON.parse(localStorage.getItem(LETTERS_READ_KEY) || '[]'); }catch(e){ return []; }
}
let readLetters = loadReadLetters();
function markLetterRead(id){
  if(readLetters.includes(id)) return;
  readLetters.push(id);
  try{ localStorage.setItem(LETTERS_READ_KEY, JSON.stringify(readLetters)); }catch(e){ /* fine if storage unavailable */ }
}

function renderLettersList(){
  const wrap = document.getElementById('lettersListWrap');
  if(!wrap) return;
  wrap.innerHTML = '';
  CONFIG.letters.forEach(letter=>{
    const tile = document.createElement('div');
    tile.className = 'letter-tile' + (readLetters.includes(letter.id) ? ' read' : '');
    tile.onclick = ()=> openLetter(letter.id);
    tile.innerHTML = `
      <div class="icon">${letter.tag}</div>
      <div class="txt"><strong>${letter.title}</strong><span>${letter.subtitle}</span></div>
      <span class="read-badge" title="Read"></span>`;
    wrap.appendChild(tile);
  });
}

let currentLetterId = null;
let envelopeOpened = false;
function openLetter(id){
  currentLetterId = id;
  const letter = CONFIG.letters.find(l=> l.id === id);
  if(!letter) return;

  document.getElementById('letterViewTitle').textContent = letter.title;
  envelopeOpened = false;
  document.getElementById('envelope').classList.remove('open');
  document.getElementById('tapHint').style.opacity = '1';
  document.getElementById('letterPaper').classList.remove('show');
  document.getElementById('letterPaper').innerHTML = '';
  document.getElementById('copyLetterBtn').style.display = 'none';

  showScreen('letterView');
}
function openEnvelope(){
  if(envelopeOpened || !currentLetterId) return;
  envelopeOpened = true;
  const letter = CONFIG.letters.find(l=> l.id === currentLetterId);
  if(!letter) return;

  document.getElementById('envelope').classList.add('open');
  document.getElementById('tapHint').style.opacity = '0';
  const paper = document.getElementById('letterPaper');
  paper.innerHTML = letter.paragraphs.map((p,i)=>`<p style="animation-delay:${0.3+i*0.35}s">${p}</p>`).join('')
    + `<p class="sig" style="animation-delay:${0.3+letter.paragraphs.length*0.35}s">— ${CONFIG.yourName}</p>`;
  setTimeout(()=> paper.classList.add('show'), 550);
  document.getElementById('copyLetterBtn').style.display = 'flex';

  markLetterRead(currentLetterId);
  renderLettersList();
}
function copyLetter(){
  const letter = CONFIG.letters.find(l=> l.id === currentLetterId);
  if(!letter) return;
  const text = letter.paragraphs.join('\n\n') + '\n\n— ' + CONFIG.yourName;
  copyText(text, 'Letter copied 💌');
}
renderLettersList();

/* ---------- reasons ---------- */
let reasonOrder = [];
let reasonIdx = 0;
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function nextReason(){
  if(reasonIdx >= reasonOrder.length){ reasonOrder = shuffle(CONFIG.reasons); reasonIdx = 0; }
  document.getElementById('reasonText').textContent = reasonOrder[reasonIdx];
  reasonIdx++;
  document.getElementById('reasonCount').textContent = 'reason ' + (CONFIG.reasons.length - (reasonOrder.length - reasonIdx));
}
function copyReason(){
  const text = document.getElementById('reasonText').textContent;
  if(!text) return;
  copyText(text, 'Copied 💕');
}
nextReason();

/* ================= ANNIVERSARY TRACKER ================= */
const RING_CIRCUMFERENCE = 2 * Math.PI * 52; // matches r=52 in the SVG
let milestonesRendered = false;

function getElapsed(start, now){
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  if(seconds < 0){ seconds += 60; minutes--; }
  if(minutes < 0){ minutes += 60; hours--; }
  if(hours < 0){ hours += 24; days--; }
  if(days < 0){
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if(months < 0){ months += 12; years--; }

  const totalDays = Math.floor((now - start) / 86400000);
  return { years, months, days, hours, minutes, seconds, totalDays };
}

function renderMilestones(totalDays, start){
  const list = document.getElementById('milestoneList');
  list.innerHTML = '';
  const sorted = [...CONFIG.milestones].sort((a,b)=> a.days - b.days);
  sorted.forEach(m=>{
    const reached = totalDays >= m.days;
    const targetDate = new Date(start.getTime() + m.days*86400000);
    const dateStr = targetDate.toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });
    const row = document.createElement('div');
    row.className = 'milestone' + (reached ? ' reached' : '');
    const sub = reached
      ? 'reached on ' + dateStr
      : 'in ' + (m.days - totalDays) + ' day' + ((m.days - totalDays) === 1 ? '' : 's') + ' · ' + dateStr;
    row.innerHTML = '<div class="m-icon">' + (reached ? '✓' : '⏳') + '</div>'
      + '<div class="m-txt"><strong>' + m.label + '</strong><span>' + sub + '</span></div>';
    list.appendChild(row);
  });
}

/* ---------- date editor ---------- */
function toggleDateEditor(){
  const editor = document.getElementById('dateEditor');
  const showing = editor.classList.toggle('show');
  if(showing){
    document.getElementById('dateInput').value = CONFIG.anniversaryDate;
  }
}
function saveAnniversaryDate(){
  const val = document.getElementById('dateInput').value;
  if(!val) return;
  CONFIG.anniversaryDate = val;
  saveDatesToStorage();
  milestonesRendered = false;
  updateAnniversary();
  document.getElementById('dateEditor').classList.remove('show');
}

function updateAnniversary(){
  const start = new Date(CONFIG.anniversaryDate + 'T00:00:00');
  const now = new Date();

  document.getElementById('annivSince').textContent =
    'together since ' + start.toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });

  const el = getElapsed(start, now);
  document.getElementById('annivBigDays').textContent = el.totalDays;
  document.getElementById('uYears').textContent = el.years;
  document.getElementById('uMonths').textContent = el.months;
  document.getElementById('uDays').textContent = el.days;
  document.getElementById('uHours').textContent = String(el.hours).padStart(2,'0');
  document.getElementById('uMinutes').textContent = String(el.minutes).padStart(2,'0');
  document.getElementById('uSeconds').textContent = String(el.seconds).padStart(2,'0');

  // next anniversary (same month/day as start, next occurrence)
  let nextAnniv = new Date(now.getFullYear(), start.getMonth(), start.getDate());
  if(nextAnniv <= now) nextAnniv = new Date(now.getFullYear()+1, start.getMonth(), start.getDate());
  const prevAnniv = new Date(nextAnniv.getFullYear()-1, start.getMonth(), start.getDate());

  const cycleLength = nextAnniv - prevAnniv;
  const elapsedInCycle = now - prevAnniv;
  const percent = Math.max(0, Math.min(1, elapsedInCycle / cycleLength));

  const ring = document.getElementById('ringProgress');
  ring.style.strokeDasharray = RING_CIRCUMFERENCE;
  ring.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - percent);
  document.getElementById('ringPercent').textContent = Math.round(percent*100) + '%';

  const daysToNext = Math.ceil((nextAnniv - now) / 86400000);
  document.getElementById('annivNextText').textContent =
    'next anniversary in ' + daysToNext + ' day' + (daysToNext === 1 ? '' : 's') +
    ' · ' + nextAnniv.toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });

  // milestones only need to redraw once per visit (they don't change second to second)
  if(!milestonesRendered){
    renderMilestones(el.totalDays, start);
    milestonesRendered = true;
  }
}

/* ================= BIRTHDAY TRACKER ================= */
function toggleBdayEditor(){
  const editor = document.getElementById('bdayEditor');
  const showing = editor.classList.toggle('show');
  if(showing){
    document.getElementById('bdayInput').value = CONFIG.birthdayDate;
  }
}
function saveBirthdayDate(){
  const val = document.getElementById('bdayInput').value;
  if(!val) return;
  CONFIG.birthdayDate = val;
  saveDatesToStorage();
  updateBirthday();
  document.getElementById('bdayEditor').classList.remove('show');
}

function updateBirthday(){
  const birth = new Date(CONFIG.birthdayDate + 'T00:00:00');
  const now = new Date();

  document.getElementById('bdaySince').textContent =
    'birthday: ' + birth.toLocaleDateString(undefined, { month:'long', day:'numeric' });

  let nextBday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
  if(nextBday <= now) nextBday = new Date(now.getFullYear()+1, birth.getMonth(), birth.getDate());
  const prevBday = new Date(nextBday.getFullYear()-1, birth.getMonth(), birth.getDate());

  const daysToNext = Math.ceil((nextBday - now) / 86400000);
  document.getElementById('bdayCountdown').textContent = daysToNext;

  const cycleLength = nextBday - prevBday;
  const elapsedInCycle = now - prevBday;
  const percent = Math.max(0, Math.min(1, elapsedInCycle / cycleLength));

  const ring = document.getElementById('bdayRing');
  ring.style.strokeDasharray = RING_CIRCUMFERENCE;
  ring.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - percent);
  document.getElementById('bdayRingPercent').textContent = Math.round(percent*100) + '%';

  const turningAge = nextBday.getFullYear() - birth.getFullYear();
  document.getElementById('bdayNextText').textContent =
    'turning ' + turningAge + ' on ' + nextBday.toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });
}


/* ================= MEMORY TIMELINE (replaces the old "send a hug" section) =================
   Fully user-built: it starts empty, and every entry is something the visitor added
   themselves — with the ability to edit or delete any entry, any time.                     */
const TIMELINE_KEY = 'loveAppTimeline';
function loadTimelineEntries(){
  try{
    const saved = JSON.parse(localStorage.getItem(TIMELINE_KEY) || 'null');
    if(Array.isArray(saved)) return saved;
  }catch(e){ /* fall through to config defaults below */ }
  // first run on this device: seed from CONFIG.timeline (empty by default) so future
  // edits/deletes only ever touch localStorage, never the CONFIG source.
  return (CONFIG.timeline || []).map((t,i)=> Object.assign({ id: 'mem-seed-' + i }, t));
}
function saveTimelineEntries(){
  try{ localStorage.setItem(TIMELINE_KEY, JSON.stringify(timelineEntries)); }catch(e){ /* fine if storage unavailable */ }
}
let timelineEntries = loadTimelineEntries();
let editingMemoryId = null;

const TL_ICONS = ['💗','💫','✈️','🎉','🎂','🥂','🏡','🎄','💍','🌙','✨','📍'];

function formatTlDate(dateStr){
  try{
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });
  }catch(e){ return dateStr; }
}

function renderTimeline(){
  const list = document.getElementById('tlList');
  const empty = document.getElementById('tlEmpty');
  if(!list) return;
  list.innerHTML = '';

  if(!timelineEntries.length){
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  const sorted = [...timelineEntries].sort((a,b)=> a.date.localeCompare(b.date));
  sorted.forEach(entry=>{
    const item = document.createElement('div');
    item.className = 'tl-item' + (entry.id === editingMemoryId ? ' editing' : '');
    item.innerHTML = `
      <div class="tl-actions">
        <button class="tl-edit" onclick="editMemory('${entry.id}')" aria-label="Edit memory">✎</button>
        <button class="tl-del" onclick="deleteMemory('${entry.id}')" aria-label="Delete memory">✕</button>
      </div>
      <div class="tl-date">${formatTlDate(entry.date)}</div>
      <div class="tl-title"><span>${entry.icon || '💗'}</span><span>${entry.title}</span></div>
      <p class="tl-text">${entry.text || ''}</p>`;
    list.appendChild(item);
  });
}

function renderIconPicker(selected){
  const wrap = document.getElementById('tlIconPicker');
  wrap.innerHTML = '';
  TL_ICONS.forEach(icon=>{
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'tl-icon-chip' + (icon === selected ? ' selected' : '');
    chip.textContent = icon;
    chip.onclick = ()=>{
      wrap.querySelectorAll('.tl-icon-chip').forEach(c=> c.classList.remove('selected'));
      chip.classList.add('selected');
    };
    wrap.appendChild(chip);
  });
}
function getSelectedIcon(){
  const sel = document.querySelector('#tlIconPicker .tl-icon-chip.selected');
  return sel ? sel.textContent : TL_ICONS[0];
}

function toggleTimelineForm(show){
  const form = document.getElementById('tlForm');
  const shouldShow = typeof show === 'boolean' ? show : !form.classList.contains('show');
  form.classList.toggle('show', shouldShow);

  if(shouldShow){
    if(!editingMemoryId){
      document.getElementById('tlFormHeading').textContent = 'New memory';
      document.getElementById('tlSaveBtn').textContent = 'Save memory';
      document.getElementById('tlDate').value = '';
      document.getElementById('tlTitle').value = '';
      document.getElementById('tlText').value = '';
      renderIconPicker(TL_ICONS[0]);
    }
  } else {
    editingMemoryId = null;
    renderTimeline();
  }
}

function editMemory(id){
  const entry = timelineEntries.find(t=> t.id === id);
  if(!entry) return;
  editingMemoryId = id;

  document.getElementById('tlFormHeading').textContent = 'Edit memory';
  document.getElementById('tlSaveBtn').textContent = 'Save changes';
  document.getElementById('tlDate').value = entry.date || '';
  document.getElementById('tlTitle').value = entry.title || '';
  document.getElementById('tlText').value = entry.text || '';
  renderIconPicker(entry.icon || TL_ICONS[0]);

  renderTimeline();
  toggleTimelineForm(true);
  document.getElementById('tlForm').scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function saveMemoryForm(){
  const dateEl = document.getElementById('tlDate');
  const titleEl = document.getElementById('tlTitle');
  const textEl = document.getElementById('tlText');

  const date = dateEl.value;
  const title = titleEl.value.trim();
  const text = textEl.value.trim();
  const icon = getSelectedIcon();

  if(!date || !title){
    showToast('Add a date and a title first 🤍');
    return;
  }

  if(editingMemoryId){
    const entry = timelineEntries.find(t=> t.id === editingMemoryId);
    if(entry){
      entry.date = date; entry.title = title; entry.text = text; entry.icon = icon;
    }
    showToast('Memory updated 💗');
  } else {
    timelineEntries.push({ id: 'mem-' + Date.now(), date, title, text, icon });
    showToast('Memory added 💫');
  }

  saveTimelineEntries();
  editingMemoryId = null;
  toggleTimelineForm(false);
}

function deleteMemory(id){
  timelineEntries = timelineEntries.filter(t=> t.id !== id);
  saveTimelineEntries();
  if(editingMemoryId === id){
    editingMemoryId = null;
    document.getElementById('tlForm').classList.remove('show');
  }
  renderTimeline();
}

renderTimeline();

/* ================= EMOJI LOVE PUZZLE ================= */
let puzzleOrder = [], puzzleIdx = 0, puzzleScore = 0;
function startPuzzle(){
  showScreen('puzzleGame');
  document.getElementById('resultOverlay').classList.remove('show');
  puzzleOrder = shuffle(CONFIG.puzzles);
  puzzleIdx = 0; puzzleScore = 0;
  loadPuzzle();
}
function loadPuzzle(){
  const p = puzzleOrder[puzzleIdx];
  document.getElementById('puzzleEmojis').textContent = p.emojis;
  document.getElementById('puzzleProgress').textContent = (puzzleIdx+1)+' / '+puzzleOrder.length;
  document.getElementById('puzzleInput').value = '';
  document.getElementById('puzzleFeedback').textContent = '';
  document.getElementById('puzzleFeedback').className = 'puzzle-feedback';
  document.getElementById('puzzleInput').focus();
}
function normalize(s){ return s.trim().toLowerCase().replace(/[^a-z0-9 ]/g,''); }
function checkPuzzle(){
  const guess = normalize(document.getElementById('puzzleInput').value);
  const answer = normalize(puzzleOrder[puzzleIdx].answer);
  const fb = document.getElementById('puzzleFeedback');
  if(!guess) return;
  if(guess === answer){
    fb.textContent = "That's it! 🎉"; fb.className = 'puzzle-feedback correct';
    puzzleScore++;
    setTimeout(advancePuzzle, 700);
  } else {
    fb.textContent = 'Not quite — try again'; fb.className = 'puzzle-feedback wrong';
  }
}
function revealPuzzle(){
  const fb = document.getElementById('puzzleFeedback');
  fb.textContent = 'It was: ' + puzzleOrder[puzzleIdx].answer;
  fb.className = 'puzzle-feedback wrong';
  setTimeout(advancePuzzle, 900);
}
function advancePuzzle(){
  puzzleIdx++;
  if(puzzleIdx >= puzzleOrder.length){
    document.getElementById('resultTitle').textContent = 'All done!';
    document.getElementById('resultText').innerHTML = 'You got <b>'+puzzleScore+'</b> / '+puzzleOrder.length+' right.';
    document.getElementById('resultBtn').onclick = startPuzzle;
    document.getElementById('resultOverlay').classList.add('show');
  } else {
    loadPuzzle();
  }
}
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' && document.getElementById('puzzleGame').classList.contains('active')) checkPuzzle();
});

/* ================= DATE NIGHT PICKER ================= */
/* Category-based, not chance-based — the idea shown is always the idea picked. No mismatched reveal is possible. */
let pickerCategory = null;
let pickerHistory = [];
let pickerCurrentIdea = '';
const pickerCatLabels = { cozy:'Cozy at home', romantic:'Romantic', adventurous:'Adventurous', budget:'Budget-friendly' };

function selectPickerCategory(cat){
  pickerCategory = cat;
  pickerHistory = [];
  document.querySelectorAll('.picker-chip').forEach(c=> c.classList.toggle('selected', c.dataset.cat === cat));
  document.getElementById('pickerActions').style.display = 'flex';
  revealPickerIdea();
}
function revealPickerIdea(){
  const ideas = (CONFIG.dateIdeas && CONFIG.dateIdeas[pickerCategory]) || [];
  if(!ideas.length) return;
  let pool = ideas.filter(i => !pickerHistory.includes(i));
  if(!pool.length){ pickerHistory = []; pool = ideas; }
  const idea = pool[Math.floor(Math.random()*pool.length)];
  pickerHistory.push(idea);
  pickerCurrentIdea = idea;

  const inner = document.getElementById('pickerRevealInner');
  inner.innerHTML = '';
  const p = document.createElement('p');
  p.className = 'picker-idea';
  const catSpan = document.createElement('span');
  catSpan.className = 'picker-idea-cat';
  catSpan.textContent = pickerCatLabels[pickerCategory] || '';
  p.appendChild(catSpan);
  p.appendChild(document.createTextNode(idea));
  inner.appendChild(p);
}
function pickAgain(){
  if(!pickerCategory) return;
  revealPickerIdea();
}
function copyPickerIdea(){
  if(!pickerCurrentIdea) return;
  copyText(pickerCurrentIdea, 'Idea copied 💌');
}

/* ================= COMPLIMENT MACHINE ================= */
const reelIcons = ['💗','💕','💖','❤️','✨','🌹'];
function pullLever(){
  const btn = document.getElementById('slotBtn');
  btn.disabled = true;
  document.getElementById('complimentText').classList.remove('show');
  const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];
  const spins = [14, 18, 22];
  reels.forEach((reel, idx)=>{
    let count = 0;
    const iv = setInterval(()=>{
      reel.textContent = reelIcons[Math.floor(Math.random()*reelIcons.length)];
      count++;
      if(count >= spins[idx]){
        clearInterval(iv);
        reel.textContent = '💗';
        if(idx === reels.length-1){
          const c = CONFIG.compliments[Math.floor(Math.random()*CONFIG.compliments.length)];
          const p = document.getElementById('complimentText');
          p.textContent = c;
          setTimeout(()=> p.classList.add('show'), 100);
          btn.disabled = false;
        }
      }
    }, 80);
  });
}

/* ================= ANNIVERSARY + BIRTHDAY REMINDERS ================= */
const REMINDER_SETTINGS_KEY = 'loveAppReminderSettings';
const REMINDER_FIRED_KEY = 'loveAppRemindersFired';
const REMINDER_MILESTONES = [7, 3, 1, 0];

function loadReminderSettings(){
  try{ return JSON.parse(localStorage.getItem(REMINDER_SETTINGS_KEY) || '{}'); }catch(e){ return {}; }
}
function saveReminderSettings(){
  try{ localStorage.setItem(REMINDER_SETTINGS_KEY, JSON.stringify(reminderSettings)); }catch(e){}
}
let reminderSettings = loadReminderSettings();

function updateReminderUI(){
  const a = document.getElementById('annivReminderSwitch');
  const b = document.getElementById('bdayReminderSwitch');
  if(a){ a.classList.toggle('on', !!reminderSettings.anniv); a.setAttribute('aria-pressed', !!reminderSettings.anniv); }
  if(b){ b.classList.toggle('on', !!reminderSettings.bday); b.setAttribute('aria-pressed', !!reminderSettings.bday); }
}

function nativeNotificationsAvailable(){
  return !!(window.AndroidNotifications && window.AndroidNotifications.enableNotifications);
}

function toggleReminder(kind){
  const turningOn = !reminderSettings[kind];

  if(turningOn && !nativeNotificationsAvailable()){
    showToast("Notifications aren't available in this app 😕");
    return;
  }

  if(turningOn){
    // Android handles the real notification permission.
    window.AndroidNotifications.enableNotifications();
  }

  reminderSettings[kind] = turningOn;
  saveReminderSettings();
  updateReminderUI();
  showToast(turningOn
    ? (kind === 'anniv' ? 'Anniversary reminders on 💗' : 'Birthday reminders on 🎉')
    : 'Reminders turned off');

  if(turningOn) scheduleNativeReminders();
}

function annualReminderTimes(dateString){
  const source = new Date(dateString + 'T09:00:00');
  if(Number.isNaN(source.getTime())) return [];

  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, source.getMonth(), source.getDate(), 9, 0, 0, 0);
  if(target.getTime() < now.getTime()){
    year++;
    target = new Date(year, source.getMonth(), source.getDate(), 9, 0, 0, 0);
  }

  return REMINDER_MILESTONES.map(days => ({
    days,
    time: target.getTime() - days * 86400000
  })).filter(x => x.time > Date.now() + 5000);
}

function scheduleNativeReminders(){
  if(!nativeNotificationsAvailable()) return;

  if(reminderSettings.anniv){
    const times = annualReminderTimes(CONFIG.anniversaryDate);
    times.forEach(x => {
      const title = 'Our story';
      const body = x.days === 0 ? "Today's your anniversary! 💍" :
        ('Your anniversary is in ' + x.days + ' day' + (x.days===1?'':'s') + ' 💕');
      window.AndroidNotifications.scheduleNotification(
        title, body, 'anniv-' + x.days, x.time
      );
    });
  }

  if(reminderSettings.bday){
    const times = annualReminderTimes(CONFIG.birthdayDate);
    times.forEach(x => {
      const title = 'Birthday countdown';
      const body = x.days === 0 ? "It's the big day — happy birthday! 🎂" :
        ('Birthday coming up in ' + x.days + ' day' + (x.days===1?'':'s') + ' 🎈');
      window.AndroidNotifications.scheduleNotification(
        title, body, 'bday-' + x.days, x.time
      );
    });
  }
}

function checkReminders(){
  // Native Android alarms handle reminders even when the app is closed.
  // This keeps the web version working too when possible.
  scheduleNativeReminders();
}

updateReminderUI();
checkReminders();
setInterval(checkReminders, 60000);

/* ---------- installable app: register the service worker ---------- */
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{ /* fine if it fails — app still works online */ });
  });
}
