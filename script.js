const intro=document.getElementById('intro'),scan=document.getElementById('scan'),dashboard=document.getElementById('dashboard'),fun=document.getElementById('fun'),toast=document.getElementById('toast');
function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}
function notBachu(){showToast("Nice try. Girlfriend recognition says you are definitely Bachu 😂");setTimeout(startScan,900)}
async function startScan(){await withSound(playSalute);intro.classList.add('hidden');scan.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});const messages=["Initializing cuteness detector…","Checking attitude levels…","Measuring main-character energy…","Searching for unnecessary overthinking… FOUND A LOT.","Checking boyfriend tolerance… dangerously low.","Verifying birthday princess status…","Scan complete. Results are ridiculous."];const bar=document.getElementById('loaderBar'),text=document.getElementById('scanText');let i=0;const interval=setInterval(()=>{i++;bar.style.width=Math.min((i/messages.length)*100,100)+"%";text.textContent=messages[Math.min(i,messages.length-1)];if(i>=messages.length){clearInterval(interval);setTimeout(()=>{scan.classList.add('hidden');dashboard.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});confetti(28)},650)}},650)}
function goToFun(){dashboard.classList.add('hidden');fun.classList.remove('hidden');setTimeout(()=>document.getElementById('fun').scrollIntoView({behavior:'smooth'}),50)}
const noBtn=document.getElementById('noBtn'),box=document.getElementById('yesNoBox');
function moveNo(){const maxX=Math.max(10,box.clientWidth-noBtn.offsetWidth-18),maxY=Math.max(10,box.clientHeight-noBtn.offsetHeight-18);noBtn.style.left=Math.floor(Math.random()*maxX)+"px";noBtn.style.top=Math.floor(Math.random()*maxY)+"px";noBtn.style.right="auto";noBtn.style.bottom="auto"}
noBtn.addEventListener('touchstart',e=>{e.preventDefault();moveNo();showToast("Absolutely not. Try again 😌")});noBtn.addEventListener('mouseenter',moveNo);noBtn.addEventListener('click',e=>{e.preventDefault();moveNo();showToast("Website rejected that answer 😂")});
async function yesLove(){await withSound(playCelebration);showToast("Correct answer detected ❤️");hearts(18)}
const reasons=["Your smile ❤️","Your beautiful eyes ✨","The way your face lights up when you’re happy 💖","Your laugh — it’s one of my favorite sounds in the world 🥹","Your voice ❤️","The way you look at me 💕","Your cute little expressions 🥰","The warmth in your heart ❤️","How beautiful you are, inside and out ✨","The way you make me feel loved 💗","Your softness and sweetness 🫶","The comfort I feel when I talk to you ❤️","The little things you do that make me smile 💕","The way you make even ordinary moments feel special ✨","How caring you are ❤️","Your adorable smile when you’re trying not to laugh 🥹","The way I can imagine my whole future with you 💍❤️","The way my heart feels calmer just knowing you’re there 🫶","Every little thing that makes you, you ❤️","Simply because you’re my Bachu 💖"];let lastReason=-1;
async function newReason(){await withSound(playLoveChime);let idx;do{idx=Math.floor(Math.random()*reasons.length)}while(idx===lastReason&&reasons.length>1);lastReason=idx;const el=document.getElementById('loveReason');el.style.opacity=.25;setTimeout(()=>{el.textContent=reasons[idx];el.style.opacity=1},180)}
function quizWrong(){showToast("❌ System error: impossible answer. Please reconsider your life choices.")}
async function quizCorrect(){await withSound(playSuccess);showToast("✅ Correct. Full marks. Scholarship approved.");hearts(10)}
function rate(n){const t=document.getElementById('ratingText');if(n<5){t.textContent=n+" stars received… correcting obvious technical error → ⭐⭐⭐⭐⭐";showToast("Thank you! Your rating has been automatically upgraded to 5 stars 😂")}else{t.textContent="⭐⭐⭐⭐⭐ Excellent taste. No further questions.";hearts(8)}}
function redeem(btn){const c=btn.closest('.coupon');c.classList.add('redeemed');btn.textContent="REDEEMED ✅";btn.disabled=true;showToast("Coupon redeemed. Screenshot this and collect from boyfriend 😭")}
async function secretChaos(){await withSound(playAirHorn);showToast("I KNEW YOU WOULDN'T LISTEN 😂❤️");confetti(70);hearts(35);if(navigator.vibrate)navigator.vibrate([70,40,70])}
async function finalHearts(){await withSound(playRomanticFinale);hearts(42);confetti(34);showToast("Happy Birthday, Bachu ❤️")}
function hearts(count){const symbols=["❤️","💖","💕","💘","💗","🧿"];for(let i=0;i<count;i++){setTimeout(()=>{const h=document.createElement('div');h.className='float-heart';h.textContent=symbols[Math.floor(Math.random()*symbols.length)];h.style.left=(Math.random()*100)+'vw';h.style.fontSize=(18+Math.random()*24)+'px';h.style.setProperty('--dur',(3+Math.random()*3)+'s');h.style.setProperty('--drift',((Math.random()-.5)*130)+'px');document.body.appendChild(h);setTimeout(()=>h.remove(),6500)},i*70)}}
function confetti(count){for(let i=0;i<count;i++){setTimeout(()=>{const c=document.createElement('div');c.className='confetti';c.style.left=(Math.random()*100)+'vw';c.style.background='hsl('+Math.random()*360+',90%,70%)';c.style.setProperty('--dur',(2.8+Math.random()*2.8)+'s');document.body.appendChild(c);setTimeout(()=>c.remove(),6000)},i*25)}}
async function flowerSurprise(){
  await withSound(playSparkle);setTimeout(()=>withSound(playLoveChime),280);
  const overlay=document.getElementById('flowerOverlay');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden','false');
  const bouquets=["💐","🌹","🌷","💐","🌸","💐","🌺","🌹"];
  for(let i=0;i<34;i++){
    setTimeout(()=>{
      const b=document.createElement('div');
      b.className='bouquet-pop';
      b.textContent=bouquets[Math.floor(Math.random()*bouquets.length)];
      b.style.left=(Math.random()*92)+'vw';
      b.style.setProperty('--dur',(3.2+Math.random()*2.2)+'s');
      b.style.setProperty('--rot',((Math.random()-.5)*26)+'deg');
      document.body.appendChild(b);
      setTimeout(()=>b.remove(),6000);
    },i*90);
  }
  const petals=["🌸","🌹","💗","✨"];
  for(let i=0;i<42;i++){
    setTimeout(()=>{
      const p=document.createElement('div');
      p.className='flower-petal';
      p.textContent=petals[Math.floor(Math.random()*petals.length)];
      p.style.left=(Math.random()*100)+'vw';
      p.style.setProperty('--dur',(3.5+Math.random()*2.4)+'s');
      p.style.setProperty('--drift',((Math.random()-.5)*150)+'px');
      document.body.appendChild(p);
      setTimeout(()=>p.remove(),6500);
    },i*70);
  }
  hearts(28);
  if(navigator.vibrate) navigator.vibrate([55,35,55]);
  setTimeout(()=>{
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden','true');
  },4700);
}
// Bachu birthday theme revision 2

let soundEnabled=true;
let audioCtx=null;

async function ensureAudio(){
  const AC=window.AudioContext||window.webkitAudioContext;
  if(!AC) return null;
  if(!audioCtx) audioCtx=new AC();
  if(audioCtx.state==='suspended'){
    try{ await audioCtx.resume(); }catch(e){}
  }
  return audioCtx;
}

async function toggleSound(){
  soundEnabled=!soundEnabled;
  const btn=document.getElementById('soundToggle');
  if(btn) btn.textContent=soundEnabled?'🔊':'🔇';
  if(soundEnabled){
    await ensureAudio();
    playLoveChime();
    showToast("Sound ON 🔊");
  }else{
    showToast("Sound OFF 🔇");
  }
}

function tone(freq,duration=0.18,delay=0,type='sine',gain=0.09){
  if(!soundEnabled || !audioCtx || audioCtx.state!=='running') return;
  const ctx=audioCtx;
  const osc=ctx.createOscillator();
  const g=ctx.createGain();
  osc.type=type;
  osc.frequency.setValueAtTime(freq,ctx.currentTime+delay);
  g.gain.setValueAtTime(0.0001,ctx.currentTime+delay);
  g.gain.exponentialRampToValueAtTime(gain,ctx.currentTime+delay+0.015);
  g.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+delay+duration);
  osc.connect(g).connect(ctx.destination);
  osc.start(ctx.currentTime+delay);
  osc.stop(ctx.currentTime+delay+duration+0.04);
}

function playLoveChime(){
  tone(523.25,.22,0,'sine',.075);
  tone(659.25,.24,.09,'sine',.07);
  tone(783.99,.3,.18,'sine',.065);
}

function playHeartbeat(){
  tone(95,.11,0,'sine',.14);
  tone(78,.12,.18,'sine',.12);
}

function playSparkle(){
  [880,1174.66,1567.98,2093].forEach((f,i)=>tone(f,.16,i*.055,'triangle',.055));
}

function playSuccess(){
  tone(523.25,.18,0,'sine',.075);
  tone(659.25,.18,.07,'sine',.075);
  tone(783.99,.18,.14,'sine',.075);
  tone(1046.5,.3,.21,'sine',.085);
}

function playRomanticFinale(){
  const seq=[523.25,659.25,783.99,659.25,880,1046.5];
  seq.forEach((f,i)=>tone(f,.28,i*.13,'sine',.07));
}

function brassNote(freq,duration=0.22,delay=0,gain=0.09){
  if(!soundEnabled || !audioCtx || audioCtx.state!=='running') return;
  const ctx=audioCtx;
  const t=ctx.currentTime+delay;
  [0,-8,8].forEach((detune,i)=>{
    const osc=ctx.createOscillator();
    const g=ctx.createGain();
    const filter=ctx.createBiquadFilter();
    osc.type='sawtooth';
    osc.frequency.setValueAtTime(freq,t);
    osc.detune.setValueAtTime(detune,t);
    filter.type='lowpass';
    filter.frequency.setValueAtTime(2400,t);
    g.gain.setValueAtTime(0.0001,t);
    g.gain.exponentialRampToValueAtTime(gain/(i===0?1:2.1),t+.018);
    g.gain.exponentialRampToValueAtTime(0.0001,t+duration);
    osc.connect(filter).connect(g).connect(ctx.destination);
    osc.start(t);
    osc.stop(t+duration+.05);
  });
}

function playSalute(){
  brassNote(392,.18,0,.085);
  brassNote(523.25,.20,.11,.09);
  brassNote(659.25,.24,.23,.095);
  brassNote(783.99,.38,.36,.11);
  tone(1174.66,.14,.39,'triangle',.05);
}

function playCelebration(){
  brassNote(523.25,.18,0,.085);
  brassNote(659.25,.18,.075,.09);
  brassNote(783.99,.22,.15,.095);
  brassNote(1046.5,.40,.25,.115);
  [1318.5,1567.98,2093].forEach((f,i)=>tone(f,.16,.30+i*.055,'triangle',.06));
}

function playAirHorn(){
  if(!soundEnabled || !audioCtx || audioCtx.state!=='running') return;
  const ctx=audioCtx;
  const start=ctx.currentTime;
  [0,.34,.68].forEach(offset=>{
    const t=start+offset;
    [220,277.18,349.23].forEach((freq,i)=>{
      const osc=ctx.createOscillator();
      const g=ctx.createGain();
      const filter=ctx.createBiquadFilter();
      osc.type='sawtooth';
      osc.frequency.setValueAtTime(freq,t);
      osc.frequency.linearRampToValueAtTime(freq*.94,t+.28);
      filter.type='lowpass';
      filter.frequency.setValueAtTime(1800,t);
      g.gain.setValueAtTime(0.0001,t);
      g.gain.exponentialRampToValueAtTime((i===0 ? .13 : .085),t+.012);
      g.gain.setValueAtTime((i===0 ? .11 : .07),t+.17);
      g.gain.exponentialRampToValueAtTime(0.0001,t+.30);
      osc.connect(filter).connect(g).connect(ctx.destination);
      osc.start(t);
      osc.stop(t+.33);
    });
    tone(110,.28,offset,'square',.05);
  });
}

async function withSound(fn){
  if(!soundEnabled) return;
  const ctx=await ensureAudio();
  if(!ctx || ctx.state!=='running') return;
  fn();
}

document.addEventListener('touchstart',()=>{ensureAudio();},{once:true,passive:true});
document.addEventListener('pointerdown',()=>{ensureAudio();},{once:true});
document.addEventListener('click',e=>{
  const btn=e.target.closest('button');
  if(!btn || btn.id==='soundToggle') return;
  if(
    btn.id==='yesBtn' ||
    btn.classList.contains('surprise-btn') ||
    (btn.getAttribute('onclick')||'').includes('finalHearts') ||
    (btn.getAttribute('onclick')||'').includes('startScan') ||
    (btn.getAttribute('onclick')||'').includes('newReason') ||
    (btn.getAttribute('onclick')||'').includes('quizCorrect') ||
    (btn.getAttribute('onclick')||'').includes('secretChaos')
  ) return;
  tone(660,.09,0,'sine',.022);
});
