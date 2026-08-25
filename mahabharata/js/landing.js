import { EPISODES } from "./episodes.js?v=ep11-chakravyuha";

const grid = document.getElementById("ep-grid");
if (grid) {
  for (const ep of EPISODES) {
    const live = ep.status === "live" && ep.play;
    const el = document.createElement(live ? "a" : "div");
    el.className = `ep-card${live ? "" : " planned"}`;
    if (live) el.href = ep.play;
    el.innerHTML = `
      <div class="ep-card-top">
        <span class="ep-num">EP ${ep.id}</span>
        <span class="ep-status ${ep.status}">${ep.status === "live" ? "Live" : "Planned"}</span>
      </div>
      <h2>${ep.title}</h2>
      <p class="ep-sanskrit">${ep.sanskrit || ""}</p>
      <p class="ep-meta">${ep.chapter} · ${ep.duration}</p>
      <p class="ep-blurb">${ep.blurb}</p>
    `;
    grid.appendChild(el);
  }
}
