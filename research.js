/* Research page: each project's credits, awards and abstract. No embedded viewers. */
const CRED_ORDER = {"Lab":0, "Published":1, "Under review":2, "Presented":3, "Code":4, "Award":5};

function render(){
  document.getElementById("projnav").innerHTML = PROJECTS.map(p =>
    `<li><a href="#${p.id}" data-target="${p.id}">${p.short}</a></li>`).join("");

  document.getElementById("projects").innerHTML = PROJECTS.map(p => {
    const creds = p.creds
      .map((c, n) => ({c, n}))
      .sort((x, y) => ((CRED_ORDER[x.c.type] ?? 3) - (CRED_ORDER[y.c.type] ?? 3)) || (x.n - y.n))
      .map(({c}) => `<li><span class="ctype${c.type === "Award" ? " award" : ""}">${c.type}</span><span class="cbody">${c.body}</span></li>`).join("");
    const docs = p.docs.map(d =>
      `<li><a href="${d.external || d.src}" target="_blank" rel="noopener">${d.label}</a><span>${d.type}</span></li>`).join("");
    const [method, area] = p.kicker.split(" · ");
    return `<article class="proj" id="${p.id}">
      <p class="area"><b>${area || ""}</b><span>${method}</span></p>
      <h2>${p.title}</h2>
      <div class="split">
        <div class="side">
          <ul class="creds">${creds}</ul>
        </div>
        <div>
          <div class="abstract">${p.abstract.map(a => `<p>${a}</p>`).join("")}</div>
          ${p.figure ? `<figure class="projfig">
            <img src="${p.figure.src}" alt="${p.figure.alt || ""}" loading="lazy">
            <figcaption>${p.figure.caption || ""} <a href="${p.figure.src}" target="_blank" rel="noopener">View full size</a></figcaption>
          </figure>` : ""}
        </div>
      </div>
    </article>`;
  }).join("");
}

(function init(){
  render();
  const links = [...document.querySelectorAll("#projnav a")];
  const spy = new IntersectionObserver(es => es.forEach(en => {
    if(!en.isIntersecting) return;
    links.forEach(a => a.classList.toggle("on", a.dataset.target === en.target.id));
  }), {rootMargin:"-12% 0px -75% 0px"});
  document.querySelectorAll(".proj").forEach(el => spy.observe(el));
  if(location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
})();
