/* Community page: letters come from TESTIMONIALS in data.js. */
document.querySelectorAll("[data-letters]").forEach(slot => {
  slot.innerHTML = slot.dataset.letters.split(" ").map(id => {
    const t = TESTIMONIALS.find(x => x.id === id); if(!t) return "";
    const [title, ...org] = t.role.split(", ");
    return `<blockquote class="tq" id="letter-${t.id}">
      ${t.paras.map(p => `<p>${p}</p>`).join("")}
      <footer><b>${t.name}</b>${title}<br>${org.join(", ")}${t.date ? `<span class="date">${t.date}</span>` : ""}</footer>
    </blockquote>`;
  }).join("");
});
