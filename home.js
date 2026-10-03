/* Home page: honors panel, testimonial quick access, research index, recognition. */
function splitKicker(k){
  const [method, area] = k.split(" · ");
  return {method, area: area || ""};
}
const OUT_ICON = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3h8v8M13 3 3 13"/></svg>';

(function(){
  const hl = document.getElementById("honors");
  if(hl) hl.innerHTML = HONORS.map(h =>
    `<li><a href="${h.href}" target="_blank" rel="noopener">
      <span><span class="t">${h.title}</span><span class="s">${h.source}<span class="sr"> (opens in a new tab)</span></span></span>${OUT_ICON}</a></li>`).join("");

  const rec = document.getElementById("recognition");
  if(rec) rec.innerHTML = RECOGNITION.map(x =>
    `<li><p class="n">${x.name}</p><p class="d">${x.note}</p></li>`).join("");

  /* reach: one donut per group; hover or focus a slice/legend item to see its count */
  const imp = document.getElementById("impact");
  if(imp){
    const fmt = n => n.toLocaleString("en-US") + "+";
    const R = 46, C = 2*Math.PI*R, GAP = 2.2;
    imp.innerHTML = IMPACT.map((g, gi) => {
      const total = g.parts.reduce((a, p) => a + p.n, 0);
      let off = 0;
      const arcs = g.parts.map((p, pi) => {
        const len = Math.max(0, p.n/total*C - GAP);
        const el = `<circle class="arc" data-g="${gi}" data-p="${pi}" r="${R}" cx="60" cy="60"
          stroke="${p.color}" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-off}"></circle>`;
        off += p.n/total*C; return el;
      }).join("");
      const legend = g.parts.map((p, pi) =>
        `<li><a href="${p.link}" data-g="${gi}" data-p="${pi}" aria-label="${p.name}: ${fmt(p.n)} people">
          <i style="background:${p.color}"></i>${p.name}</a></li>`).join("");
      return `<figure class="donut" data-g="${gi}" data-total="${fmt(total)}">
        <div class="ring">
          <svg viewBox="0 0 120 120" aria-hidden="true"><g transform="rotate(-90 60 60)">${arcs}</g></svg>
          <div class="mid"><b>${fmt(total)}</b><span>${g.group}</span></div>
        </div>
        <figcaption class="sr">${g.group}: ${fmt(total)} people ${g.caption}.</figcaption>
        <ul class="legend">${legend}</ul>
      </figure>`;
    }).join("");

    const show = (gi, pi) => {
      const fig = imp.querySelector(`.donut[data-g="${gi}"]`), g = IMPACT[gi];
      const b = fig.querySelector(".mid b"), sp = fig.querySelector(".mid span");
      fig.classList.toggle("focus", pi != null);
      fig.querySelectorAll("[data-p]").forEach(el => el.classList.toggle("on", pi != null && +el.dataset.p === pi));
      if(pi == null){ b.textContent = fig.dataset.total; sp.textContent = g.group; }
      else { b.textContent = fmt(g.parts[pi].n); sp.textContent = g.parts[pi].name; }
    };
    const pick = e => e.target.closest("[data-p]");
    ["pointerover","focusin"].forEach(t => imp.addEventListener(t, e => { const el = pick(e); if(el) show(+el.dataset.g, +el.dataset.p); }));
    ["pointerout","focusout"].forEach(t => imp.addEventListener(t, e => { const el = pick(e); if(el) show(+el.dataset.g, null); }));
  }

  /* testimonials: cards open the full letter in a dialog */
  const q = document.getElementById("quotes"), dlg = document.getElementById("letter");
  if(q && dlg){
    q.innerHTML = TESTIMONIALS.map(t =>
      `<button class="qcard" type="button" data-letter="${t.id}" aria-haspopup="dialog">
        <span class="proj-tag">${t.project}</span>
        <blockquote>${t.excerpt}</blockquote>
        <span class="who"><b>${t.name}</b><span>${t.role}</span><span class="date">${t.date || ""}</span></span>
        <span class="read">Read the full letter</span>
      </button>`).join("");
    const body = dlg.querySelector(".letter-in");
    let opener = null;
    q.addEventListener("click", e => {
      const b = e.target.closest("[data-letter]"); if(!b) return;
      const t = TESTIMONIALS.find(x => x.id === b.dataset.letter); if(!t) return;
      opener = b;
      body.innerHTML = `
        <p class="proj-tag">${t.project}</p>
        <h2 id="letter-h">${t.name}</h2>
        <p class="role-line">${t.role}${t.date ? `<span class="date">${t.date}</span>` : ""}</p>
        <div class="body">${t.paras.map(p => `<p>${p}</p>`).join("")}</div>
        <div class="foot"><a href="${t.link}">Read about the project</a>
          <button class="btn" type="button" data-close>Close</button></div>`;
      body.scrollTop = 0;
      dlg.showModal();
    });
    dlg.addEventListener("click", e => {
      if(e.target === dlg || e.target.closest("[data-close]")) dlg.close();
    });
    dlg.addEventListener("close", () => opener && opener.focus());
  }

  const list = document.getElementById("projects-list");
  if(!list) return;
  list.innerHTML = PROJECTS.map(p => {
    const k = splitKicker(p.kicker);
    const types = p.creds.map(c => c.type);
    const flag = types.includes("Published") ? "Published" : types.includes("Under review") ? "Under review" : null;
    const n = p.docs.length;
    const status = [
      flag ? `<li class="on">${flag}</li>` : "",
      types.includes("Award") ? `<li class="on">Award-winning</li>` : "",
      `<li>${n} document${n === 1 ? "" : "s"}</li>`
    ].join("");
    return `<li class="prow">
      <div class="area"><b>${k.area}</b><span>${k.method}</span></div>
      <div><h3><a href="research.html#${p.id}">${p.title}</a></h3><p>${p.blurb}</p></div>
      <ul class="status">${status}</ul>
    </li>`;
  }).join("");
})();
