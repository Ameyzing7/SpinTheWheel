const intro=document.getElementById('intro'),scan=document.getElementById('scan'),dashboard=document.getElementById('dashboard'),fun=document.getElementById('fun'),toast=document.getElementById('toast');
function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}
function notBachu(){showToast("Nice try. Girlfriend recognition says you are definitely Bachu 😂");setTimeout(startScan,900)}
function startScan(){
  playMediaClip("salute");
  intro.classList.add('hidden');
  scan.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});

  const messages=[
    "Initializing Bachu Recognition System… ❤️",
    "Scanning smile levels… dangerously adorable.",
    "Checking beautiful eyes… confirmed ✨",
    "Measuring main-character energy… off the charts.",
    "Analyzing cuteness… system limit exceeded 💖",
    "Searching for unnecessary overthinking… FOUND A LOT 😂",
    "Checking patience with boyfriend… approximately 2%.",
    "Verifying birthday princess status… 100% confirmed 👑",
    "Running future-wife compatibility test… 💍",
    "Finalizing results… please remain extremely cute.",
    "Scan complete. Results are ridiculous. ❤️"
  ];

  const bar=document.getElementById('loaderBar');
  const text=document.getElementById('scanText');
  const totalDuration=16000;
  const stepDuration=totalDuration/messages.length;
  let i=0;

  text.textContent=messages[0];
  bar.style.width="7%";

  const interval=setInterval(()=>{
    i++;
    const progress=Math.min(((i+1)/messages.length)*100,100);
    bar.style.width=progress+"%";

    if(i<messages.length){
      text.classList.remove('scan-pop');
      void text.offsetWidth;
      text.textContent=messages[i];
      text.classList.add('scan-pop');
    }

    if(i>=messages.length-1){
      clearInterval(interval);
      setTimeout(()=>{
        scan.classList.add('hidden');
        dashboard.classList.remove('hidden');
        window.scrollTo({top:0,behavior:'smooth'});
        confetti(28);
      },stepDuration);
    }
  },stepDuration);
}
function goToFun(){dashboard.classList.add('hidden');fun.classList.remove('hidden');setTimeout(()=>{document.getElementById('fun').scrollIntoView({behavior:'smooth'});initScratch();},120)}
const noBtn=document.getElementById('noBtn'),box=document.getElementById('yesNoBox');
function moveNo(){const maxX=Math.max(10,box.clientWidth-noBtn.offsetWidth-18),maxY=Math.max(10,box.clientHeight-noBtn.offsetHeight-18);noBtn.style.left=Math.floor(Math.random()*maxX)+"px";noBtn.style.top=Math.floor(Math.random()*maxY)+"px";noBtn.style.right="auto";noBtn.style.bottom="auto"}
noBtn.addEventListener('touchstart',e=>{e.preventDefault();moveNo();showToast("Absolutely not. Try again 😌")});noBtn.addEventListener('mouseenter',moveNo);noBtn.addEventListener('click',e=>{e.preventDefault();moveNo();showToast("Website rejected that answer 😂")});
function yesLove(){playMediaClip("celebration");showToast("Correct answer detected ❤️");hearts(18)}
const reasons=["Your smile ❤️","Your beautiful eyes ✨","The way your face lights up when you’re happy 💖","Your laugh — it’s one of my favorite sounds in the world 🥹","Your voice ❤️","The way you look at me 💕","Your cute little expressions 🥰","The warmth in your heart ❤️","How beautiful you are, inside and out ✨","The way you make me feel loved 💗","Your softness and sweetness 🫶","The comfort I feel when I talk to you ❤️","The little things you do that make me smile 💕","The way you make even ordinary moments feel special ✨","How caring you are ❤️","Your adorable smile when you’re trying not to laugh 🥹","The way I can imagine my whole future with you 💍❤️","The way my heart feels calmer just knowing you’re there 🫶","Every little thing that makes you, you ❤️","Simply because you’re my Bachu 💖"];let lastReason=-1;
async function newReason(){await withSound(playLoveChime);let idx;do{idx=Math.floor(Math.random()*reasons.length)}while(idx===lastReason&&reasons.length>1);lastReason=idx;const el=document.getElementById('loveReason');el.style.opacity=.25;setTimeout(()=>{el.textContent=reasons[idx];el.style.opacity=1},180)}
function quizWrong(){showToast("❌ System error: impossible answer. Please reconsider your life choices.")}
async function quizCorrect(){await withSound(playSuccess);showToast("✅ Correct. Full marks. Scholarship approved.");hearts(10)}
function rate(n){const t=document.getElementById('ratingText');if(n<5){t.textContent=n+" stars received… correcting obvious technical error → ⭐⭐⭐⭐⭐";showToast("Thank you! Your rating has been automatically upgraded to 5 stars 😂")}else{t.textContent="⭐⭐⭐⭐⭐ Excellent taste. No further questions.";hearts(8)}}
function redeem(btn){const c=btn.closest('.coupon');c.classList.add('redeemed');btn.textContent="REDEEMED ✅";btn.disabled=true;showToast("Coupon redeemed. Screenshot this and collect from boyfriend 😭")}
function secretChaos(){playMediaClip("airhorn");showToast("I KNEW YOU WOULDN'T LISTEN 😂❤️");confetti(70);hearts(35);if(navigator.vibrate)navigator.vibrate([70,40,70])}
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


const mediaClips={};

function wavBlobUrl(samples,sampleRate=12000){
  const buffer=new ArrayBuffer(44+samples.length*2);
  const view=new DataView(buffer);
  const write=(off,str)=>{for(let i=0;i<str.length;i++)view.setUint8(off+i,str.charCodeAt(i));};
  write(0,"RIFF");
  view.setUint32(4,36+samples.length*2,true);
  write(8,"WAVE");
  write(12,"fmt ");
  view.setUint32(16,16,true);
  view.setUint16(20,1,true);
  view.setUint16(22,1,true);
  view.setUint32(24,sampleRate,true);
  view.setUint32(28,sampleRate*2,true);
  view.setUint16(32,2,true);
  view.setUint16(34,16,true);
  write(36,"data");
  view.setUint32(40,samples.length*2,true);
  let off=44;
  for(let i=0;i<samples.length;i++,off+=2){
    const s=Math.max(-1,Math.min(1,samples[i]));
    view.setInt16(off,s<0?s*32768:s*32767,true);
  }
  return URL.createObjectURL(new Blob([buffer],{type:"audio/wav"}));
}

function fadeEnv(i,n,attack,release,sr){
  const a=Math.max(1,Math.floor(attack*sr));
  const rr=Math.max(1,Math.floor(release*sr));
  if(i<a)return i/a;
  if(i>n-rr)return Math.max(0,(n-i)/rr);
  return 1;
}

function brassClip(notes,totalDur,sr=12000){
  const out=new Float32Array(Math.floor(totalDur*sr));
  notes.forEach(note=>{
    const start=note[0],freq=note[1],dur=note[2],amp=note[3];
    const startI=Math.floor(start*sr);
    const n=Math.floor(dur*sr);
    for(let j=0;j<n&&startI+j<out.length;j++){
      const t=j/sr;
      let v=0,norm=0;
      for(let k=1;k<=5;k++){
        v+=(1/k)*Math.sin(2*Math.PI*freq*k*t);
        norm+=1/k;
      }
      v/=norm;
      out[startI+j]+=v*amp*fadeEnv(j,n,.01,.07,sr);
    }
  });
  return wavBlobUrl(out,sr);
}

function hornClip(sr=12000){
  const out=new Float32Array(Math.floor(1.12*sr));
  [0,.34,.68].forEach((start,idx)=>{
    const dur=idx===2?.34:.30;
    const n=Math.floor(dur*sr);
    const startI=Math.floor(start*sr);
    for(let j=0;j<n&&startI+j<out.length;j++){
      const t=j/sr;
      let v=0,norm=0;
      for(let k=1;k<=8;k++){
        v+=(1/k)*Math.sin(2*Math.PI*220*k*t);
        norm+=1/k;
      }
      v/=norm;
      v+=.38*Math.sin(2*Math.PI*224*t);
      v/=1.38;
      out[startI+j]+=v*.72*fadeEnv(j,n,.006,.05,sr);
    }
  });
  return wavBlobUrl(out,sr);
}


function bellClip(sr=12000){
  const out=new Float32Array(Math.floor(1.6*sr));
  const strikes=[[0,783.99],[.28,987.77],[.57,1174.66]];
  strikes.forEach(([start,freq])=>{
    const startI=Math.floor(start*sr);
    const n=Math.floor(.9*sr);
    for(let j=0;j<n&&startI+j<out.length;j++){
      const t=j/sr;
      const decay=Math.exp(-4.2*t);
      const v=(Math.sin(2*Math.PI*freq*t)+.48*Math.sin(2*Math.PI*freq*2.01*t)+.22*Math.sin(2*Math.PI*freq*3.97*t))*decay;
      out[startI+j]+=v*.22;
    }
  });
  return wavBlobUrl(out,sr);
}

function heartbeatMediaClip(sr=12000){
  const out=new Float32Array(Math.floor(2.1*sr));
  [0,.92].forEach(base=>{
    [[0,.14],[.19,.11]].forEach(([off,amp])=>{
      const startI=Math.floor((base+off)*sr);
      const n=Math.floor(.16*sr);
      for(let j=0;j<n&&startI+j<out.length;j++){
        const t=j/sr;
        const env=Math.exp(-18*t);
        out[startI+j]+=Math.sin(2*Math.PI*78*t)*env*amp*4.5;
      }
    });
  });
  return wavBlobUrl(out,sr);
}

function whooshClip(sr=12000){
  const out=new Float32Array(Math.floor(.85*sr));
  let seed=1234567;
  const rnd=()=>{seed=(seed*16807)%2147483647;return(seed/2147483647)*2-1;};
  for(let i=0;i<out.length;i++){
    const t=i/sr;
    const env=Math.sin(Math.PI*Math.min(1,t/.7))*Math.exp(-1.8*t);
    out[i]=rnd()*env*.22;
  }
  return wavBlobUrl(out,sr);
}

function sparkleClip(sr=12000){
  const out=new Float32Array(Math.floor(.9*sr));
  const notes=[[0,1046.5],[.10,1318.5],[.20,1567.98],[.31,2093]];
  notes.forEach(([start,freq])=>{
    const startI=Math.floor(start*sr);
    const n=Math.floor(.35*sr);
    for(let j=0;j<n&&startI+j<out.length;j++){
      const t=j/sr;
      out[startI+j]+=Math.sin(2*Math.PI*freq*t)*Math.exp(-7*t)*.24;
    }
  });
  return wavBlobUrl(out,sr);
}

function prepareMediaClips(){
  if(mediaClips.salute)return;
  mediaClips.salute=new Audio(brassClip([
    [0,392,.18,.40],
    [.12,523.25,.20,.42],
    [.26,659.25,.22,.44],
    [.42,783.99,.38,.48]
  ],.9));

  mediaClips.celebration=new Audio(brassClip([
    [0,523.25,.18,.40],
    [.09,659.25,.18,.43],
    [.18,783.99,.20,.46],
    [.30,1046.5,.42,.50]
  ],.95));

  mediaClips.airhorn=new Audio(hornClip());
  mediaClips.bells=new Audio(bellClip());
  mediaClips.heartbeat=new Audio(heartbeatMediaClip());
  mediaClips.whoosh=new Audio(whooshClip());
  mediaClips.sparkle=new Audio(sparkleClip());

  Object.values(mediaClips).forEach(a=>{
    a.preload="auto";
    a.volume=1;
  });
}

function playMediaClip(name){
  if(!soundEnabled)return;
  prepareMediaClips();
  const a=mediaClips[name];
  if(!a)return;
  try{
    a.pause();
    a.currentTime=0;
  }catch(e){}
  const p=a.play();
  if(p&&p.catch)p.catch(()=>{});
}

prepareMediaClips();

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


let scratchReady=false;
let scratchRevealed=false;

function initScratch(){
  if(scratchReady)return;
  const canvas=document.getElementById('scratchCanvas');
  const wrap=document.getElementById('scratchWrap');
  if(!canvas||!wrap||wrap.clientWidth===0)return;
  const dpr=Math.max(1,Math.min(2,window.devicePixelRatio||1));
  canvas.width=Math.floor(wrap.clientWidth*dpr);
  canvas.height=Math.floor(wrap.clientHeight*dpr);
  const ctx=canvas.getContext('2d');
  ctx.scale(dpr,dpr);
  const grad=ctx.createLinearGradient(0,0,wrap.clientWidth,wrap.clientHeight);
  grad.addColorStop(0,'#f3c8d7');
  grad.addColorStop(.45,'#d99bb4');
  grad.addColorStop(1,'#f8dce7');
  ctx.fillStyle=grad;
  ctx.fillRect(0,0,wrap.clientWidth,wrap.clientHeight);
  ctx.fillStyle='rgba(115,25,64,.82)';
  ctx.textAlign='center';
  ctx.font='800 18px -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif';
  ctx.fillText('Scratch me ❤️',wrap.clientWidth/2,wrap.clientHeight/2);
  ctx.globalCompositeOperation='destination-out';
  ctx.lineCap='round';
  ctx.lineJoin='round';
  ctx.lineWidth=38;

  let drawing=false;
  let strokes=0;
  const point=e=>{
    const rect=canvas.getBoundingClientRect();
    return{x:e.clientX-rect.left,y:e.clientY-rect.top};
  };
  const begin=e=>{
    e.preventDefault();
    drawing=true;
    const p=point(e);
    ctx.beginPath();ctx.moveTo(p.x,p.y);
    playMediaClip('sparkle');
  };
  const move=e=>{
    if(!drawing)return;
    e.preventDefault();
    const p=point(e);
    ctx.lineTo(p.x,p.y);ctx.stroke();
    strokes++;
    if(strokes>28&&!scratchRevealed){
      scratchRevealed=true;
      canvas.style.transition='opacity .8s ease';
      canvas.style.opacity='.12';
      playMediaClip('sparkle');
      hearts(12);
      showToast("Secret unlocked ❤️");
    }
  };
  const end=()=>{drawing=false;};
  canvas.addEventListener('pointerdown',begin);
  canvas.addEventListener('pointermove',move);
  window.addEventListener('pointerup',end);
  scratchReady=true;
}

let holdTimer=null;
let holdProgress=0;
function startHoldHeart(e){
  if(e)e.preventDefault();
  if(holdProgress>=100)return;
  const heart=document.getElementById('holdHeart');
  heart.classList.add('holding');
  playMediaClip('heartbeat');
  clearInterval(holdTimer);
  holdTimer=setInterval(()=>{
    holdProgress=Math.min(100,holdProgress+2);
    updateHoldHeart();
    if(holdProgress>=100){
      clearInterval(holdTimer);holdTimer=null;
      heart.classList.remove('holding');
      document.getElementById('holdResult').classList.remove('hidden');
      playMediaClip('celebration');
      hearts(28);confetti(22);
      showToast("Love meter overloaded ❤️");
    }
  },55);
}
function stopHoldHeart(){
  clearInterval(holdTimer);holdTimer=null;
  const heart=document.getElementById('holdHeart');
  if(heart)heart.classList.remove('holding');
}
function updateHoldHeart(){
  const fill=document.getElementById('holdHeartFill');
  const bar=document.getElementById('holdProgressBar');
  const pct=document.getElementById('holdPercent');
  if(fill)fill.style.clipPath='inset('+(100-holdProgress)+'% 0 0 0)';
  if(bar)bar.style.width=holdProgress+'%';
  if(pct)pct.textContent=holdProgress+'%';
}

function signContract(){
  const paper=document.getElementById('contractPaper');
  const line=document.getElementById('signatureLine');
  const btn=document.getElementById('signContractBtn');
  if(paper.classList.contains('signed')){
    showToast("Contract already binding for life 😂❤️");
    return;
  }
  paper.classList.add('signed');
  line.textContent='Signed: Bachu ❤️ Amey — valid forever';
  btn.textContent='SIGNED FOR LIFE ✅💍';
  btn.disabled=true;
  playMediaClip('bells');
  confetti(55);hearts(30);
  showToast("Marriage department approves this agreement 💍");
}

function blowCandles(){
  const card=document.getElementById('candleCard');
  const approved=document.getElementById('wishApproved');
  const btn=document.getElementById('blowCandlesBtn');
  if(card.classList.contains('wish-made'))return;
  playMediaClip('whoosh');
  card.classList.add('wish-made');
  btn.textContent='Candles blown out ❤️';
  btn.disabled=true;
  setTimeout(()=>{
    approved.classList.remove('hidden');
    playMediaClip('sparkle');
    hearts(32);confetti(30);
    showToast("Wish approved ✅");
  },650);
}

let heartbeatStarted=false;
function startHeartbeatMoment(){
  const card=document.getElementById('heartbeatCard');
  const hint=document.getElementById('heartbeatHint');
  if(heartbeatStarted){
    playMediaClip('heartbeat');
    return;
  }
  heartbeatStarted=true;
  card.classList.add('beating');
  hint.textContent='Listen… ❤️';
  playMediaClip('heartbeat');
  setTimeout(()=>playMediaClip('heartbeat'),1800);
  setTimeout(()=>hearts(14),1300);
}

let futureLoading=false;
function startFutureLoading(){
  if(futureLoading)return;
  futureLoading=true;
  const bar=document.getElementById('futureLoaderBar');
  const status=document.getElementById('futureStatus');
  const gf=document.getElementById('futureGirlfriend');
  const fi=document.getElementById('futureFiancee');
  const wife=document.getElementById('futureWife');
  const btn=document.getElementById('futureButton');
  const reveal=document.getElementById('futureReveal');
  btn.disabled=true;
  btn.textContent='Loading our future…';
  playMediaClip('sparkle');

  setTimeout(()=>{bar.style.width='36%';status.textContent='Girlfriend ❤️ — successfully installed';gf.classList.add('active');},250);
  setTimeout(()=>{bar.style.width='72%';status.textContent='Fiancée 💍 — preparing upgrade…';fi.classList.add('active');playMediaClip('sparkle');},1050);
  setTimeout(()=>{bar.style.width='96%';status.textContent='Wife 👰 — Loading… 💍';wife.classList.add('active');},1950);
  setTimeout(()=>{
    bar.style.width='99%';
    status.textContent='Loading… 💍';
    reveal.classList.remove('hidden');
    playMediaClip('bells');
    hearts(35);confetti(35);
    btn.textContent='Forever pending… ❤️';
  },3000);
}

const holdHeart=document.getElementById('holdHeart');
if(holdHeart){
  holdHeart.addEventListener('pointerdown',startHoldHeart);
  holdHeart.addEventListener('pointerup',stopHoldHeart);
  holdHeart.addEventListener('pointercancel',stopHoldHeart);
  holdHeart.addEventListener('pointerleave',stopHoldHeart);
}
window.addEventListener('resize',()=>{if(scratchReady){scratchReady=false;setTimeout(initScratch,120);}});
