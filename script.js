const intro=document.getElementById('intro'),scan=document.getElementById('scan'),dashboard=document.getElementById('dashboard'),fun=document.getElementById('fun'),toast=document.getElementById('toast');
function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}
function notBachu(){showToast("Nice try. Girlfriend recognition says you are definitely Bachu 😂");setTimeout(startScan,900)}
function startScan(){intro.classList.add('hidden');scan.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});const messages=["Initializing cuteness detector…","Checking attitude levels…","Measuring main-character energy…","Searching for unnecessary overthinking… FOUND A LOT.","Checking boyfriend tolerance… dangerously low.","Verifying birthday princess status…","Scan complete. Results are ridiculous."];const bar=document.getElementById('loaderBar'),text=document.getElementById('scanText');let i=0;const interval=setInterval(()=>{i++;bar.style.width=Math.min((i/messages.length)*100,100)+"%";text.textContent=messages[Math.min(i,messages.length-1)];if(i>=messages.length){clearInterval(interval);setTimeout(()=>{scan.classList.add('hidden');dashboard.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});confetti(28)},650)}},650)}
function goToFun(){dashboard.classList.add('hidden');fun.classList.remove('hidden');setTimeout(()=>document.getElementById('fun').scrollIntoView({behavior:'smooth'}),50)}
const noBtn=document.getElementById('noBtn'),box=document.getElementById('yesNoBox');
function moveNo(){const maxX=Math.max(10,box.clientWidth-noBtn.offsetWidth-18),maxY=Math.max(10,box.clientHeight-noBtn.offsetHeight-18);noBtn.style.left=Math.floor(Math.random()*maxX)+"px";noBtn.style.top=Math.floor(Math.random()*maxY)+"px";noBtn.style.right="auto";noBtn.style.bottom="auto"}
noBtn.addEventListener('touchstart',e=>{e.preventDefault();moveNo();showToast("Absolutely not. Try again 😌")});noBtn.addEventListener('mouseenter',moveNo);noBtn.addEventListener('click',e=>{e.preventDefault();moveNo();showToast("Website rejected that answer 😂")});
function yesLove(){showToast("Correct answer detected ❤️");hearts(18)}
const reasons=["Your smile ❤️","Your beautiful eyes ✨","The way your face lights up when you’re happy 💖","Your laugh — it’s one of my favorite sounds in the world 🥹","Your voice ❤️","The way you look at me 💕","Your cute little expressions 🥰","The warmth in your heart ❤️","How beautiful you are, inside and out ✨","The way you make me feel loved 💗","Your softness and sweetness 🫶","The comfort I feel when I talk to you ❤️","The little things you do that make me smile 💕","The way you make even ordinary moments feel special ✨","How caring you are ❤️","Your adorable smile when you’re trying not to laugh 🥹","The way I can imagine my whole future with you 💍❤️","The way my heart feels calmer just knowing you’re there 🫶","Every little thing that makes you, you ❤️","Simply because you’re my Bachu 💖"];let lastReason=-1;
function newReason(){let idx;do{idx=Math.floor(Math.random()*reasons.length)}while(idx===lastReason&&reasons.length>1);lastReason=idx;const el=document.getElementById('loveReason');el.style.opacity=.25;setTimeout(()=>{el.textContent=reasons[idx];el.style.opacity=1},180)}
function quizWrong(){showToast("❌ System error: impossible answer. Please reconsider your life choices.")}
function quizCorrect(){showToast("✅ Correct. Full marks. Scholarship approved.");hearts(10)}
function rate(n){const t=document.getElementById('ratingText');if(n<5){t.textContent=n+" stars received… correcting obvious technical error → ⭐⭐⭐⭐⭐";showToast("Thank you! Your rating has been automatically upgraded to 5 stars 😂")}else{t.textContent="⭐⭐⭐⭐⭐ Excellent taste. No further questions.";hearts(8)}}
function redeem(btn){const c=btn.closest('.coupon');c.classList.add('redeemed');btn.textContent="REDEEMED ✅";btn.disabled=true;showToast("Coupon redeemed. Screenshot this and collect from boyfriend 😭")}
function secretChaos(){showToast("I KNEW YOU WOULDN'T LISTEN 😂❤️");confetti(70);hearts(35);if(navigator.vibrate)navigator.vibrate([70,40,70])}
function finalHearts(){hearts(42);confetti(34);showToast("Happy Birthday, Bachu ❤️")}
function hearts(count){const symbols=["❤️","💖","💕","💘","💗","🧿"];for(let i=0;i<count;i++){setTimeout(()=>{const h=document.createElement('div');h.className='float-heart';h.textContent=symbols[Math.floor(Math.random()*symbols.length)];h.style.left=(Math.random()*100)+'vw';h.style.fontSize=(18+Math.random()*24)+'px';h.style.setProperty('--dur',(3+Math.random()*3)+'s');h.style.setProperty('--drift',((Math.random()-.5)*130)+'px');document.body.appendChild(h);setTimeout(()=>h.remove(),6500)},i*70)}}
function confetti(count){for(let i=0;i<count;i++){setTimeout(()=>{const c=document.createElement('div');c.className='confetti';c.style.left=(Math.random()*100)+'vw';c.style.background='hsl('+Math.random()*360+',90%,70%)';c.style.setProperty('--dur',(2.8+Math.random()*2.8)+'s');document.body.appendChild(c);setTimeout(()=>c.remove(),6000)},i*25)}}
function flowerSurprise(){
  const overlay=document.getElementById('flowerOverlay');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden','false');
  const bouquets=["💐","🌹","🌷","💐","🌸","💐","🌺","🌹"];
  for(let i=0;i<24;i++){
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
  for(let i=0;i<28;i++){
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
  hearts(18);
  if(navigator.vibrate) navigator.vibrate([55,35,55]);
  setTimeout(()=>{
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden','true');
  },4700);
}