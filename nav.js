/* Top bar: Research dropdown listing every project (built from PROJECTS in data.js). */
(function(){
  document.querySelectorAll(".tb-row .has-menu").forEach(li => {
    const menu = li.querySelector("[data-projmenu]"), btn = li.querySelector(".caret");
    menu.innerHTML = PROJECTS.map(p => `<li><a href="research.html#${p.id}">${p.short}</a></li>`).join("");
    const set = open => { li.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); };
    btn.addEventListener("click", e => { e.stopPropagation(); set(!li.classList.contains("open")); });
    document.addEventListener("click", e => { if(!li.contains(e.target)) set(false); });
    li.addEventListener("keydown", e => { if(e.key === "Escape"){ set(false); btn.focus(); } });
    menu.addEventListener("click", e => {
      if(!e.target.closest("a")) return;
      set(false); li.classList.add("shut"); e.target.blur();
      setTimeout(() => li.classList.remove("shut"), 400);
    });
    li.addEventListener("pointerleave", () => li.classList.remove("shut"));
  });
})();