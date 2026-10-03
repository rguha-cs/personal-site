/* Home intro: a quiet field of connected points that brightens around the pointer
   and occasionally fires a signal from one point to its neighbours. */
(function(){
  const cv = document.getElementById("net"); if(!cv) return;
  const ctx = cv.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const host = cv.parentElement;
  let W = 0, H = 0, dpr = 1, pts = [], pulses = [], mx = -9999, my = -9999, raf = 0, last = 0;
  const LINK = 130, REACH = 190;

  function build(){
    const r = host.getBoundingClientRect();
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    cv.width = Math.round(W*dpr); cv.height = Math.round(H*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const n = Math.min(120, Math.round(W*H/9000));
    pts = Array.from({length:n}, () => ({
      x:Math.random()*W, y:Math.random()*H,
      vx:(Math.random()-.5)*6, vy:(Math.random()-.5)*6, f:0
    }));
    pulses = [];
  }

  function fire(){
    const a = pts[Math.floor(Math.random()*pts.length)]; if(!a) return;
    a.f = 1;
    for(const b of pts){
      if(b === a) continue;
      const d = Math.hypot(a.x-b.x, a.y-b.y);
      if(d < LINK && pulses.length < 18) pulses.push({a, b, t:0, sp:160/d});
    }
  }

  function draw(dt){
    ctx.clearRect(0,0,W,H);
    for(const p of pts){
      if(!reduce){
        p.x += p.vx*dt; p.y += p.vy*dt;
        if(p.x < 0 || p.x > W) p.vx *= -1;
        if(p.y < 0 || p.y > H) p.vy *= -1;
      }
      p.f = Math.max(0, p.f - dt*1.2);
      p.near = Math.max(0, 1 - Math.hypot(p.x-mx, p.y-my)/REACH);
    }
    ctx.lineWidth = 1;
    for(let i = 0; i < pts.length; i++){
      const a = pts[i];
      for(let j = i+1; j < pts.length; j++){
        const b = pts[j], d = Math.hypot(a.x-b.x, a.y-b.y);
        if(d > LINK) continue;
        const k = 1 - d/LINK, lit = Math.max(a.near, b.near);
        ctx.strokeStyle = `rgba(200,173,244,${(.06 + .34*lit)*k})`;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
      }
    }
    for(let i = pulses.length-1; i >= 0; i--){
      const s = pulses[i]; s.t += s.sp*dt;
      if(s.t >= 1){ s.b.f = Math.max(s.b.f, .6); pulses.splice(i,1); continue; }
      const x = s.a.x + (s.b.x-s.a.x)*s.t, y = s.a.y + (s.b.y-s.a.y)*s.t;
      ctx.fillStyle = "rgba(226,210,255,.85)";
      ctx.beginPath(); ctx.arc(x,y,1.6,0,6.284); ctx.fill();
    }
    for(const p of pts){
      const g = Math.max(p.near, p.f);
      if(g > .05){
        ctx.fillStyle = `rgba(200,173,244,${.16*g})`;
        ctx.beginPath(); ctx.arc(p.x,p.y,2+7*g,0,6.284); ctx.fill();
      }
      ctx.fillStyle = `rgba(214,196,246,${.28 + .6*g})`;
      ctx.beginPath(); ctx.arc(p.x,p.y,1.3+1.1*g,0,6.284); ctx.fill();
    }
  }

  let fireT = 0;
  function loop(now){
    const dt = Math.min(.05, (now - last)/1000); last = now;
    fireT -= dt; if(fireT <= 0){ fire(); fireT = 1.4 + Math.random()*1.6; }
    draw(dt); raf = requestAnimationFrame(loop);
  }

  host.addEventListener("pointermove", e => {
    const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top;
    if(reduce) draw(0);
  });
  host.addEventListener("pointerleave", () => { mx = my = -9999; if(reduce) draw(0); });

  build();
  if(reduce) draw(0);
  else{
    const io = new IntersectionObserver(([en]) => {
      cancelAnimationFrame(raf);
      if(en.isIntersecting){ last = performance.now(); raf = requestAnimationFrame(loop); }
    });
    io.observe(host);
  }
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { build(); if(reduce) draw(0); }, 200); });
})();
