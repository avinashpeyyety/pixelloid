import { EPISODES } from "./episodes.js?v=ep-thumbs1";

const grid = document.getElementById("ep-grid");
if (grid) {
  for (const ep of EPISODES) {
    const live = ep.status === "live" && ep.play;
    const el = document.createElement(live ? "a" : "div");
    el.className = `ep-card${live ? "" : " planned"}`;
    if (live) {
      el.href = ep.play + (ep.play.includes("?") ? "&" : "?") + "auto=1";
      el.setAttribute("aria-label", `Play Episode ${ep.id}: ${ep.title}`);
    }
    const thumb = `episodes/${ep.id}-${ep.slug}/stills/thumb.jpg`;
    el.innerHTML = `
      <div class="ep-thumb">
        <img src="${thumb}" alt="" loading="lazy" decoding="async" width="640" height="360"
             onerror="this.closest('.ep-thumb').classList.add('no-img')" />
        <span class="ep-thumb-num">EP ${ep.id}</span>
        ${ep.duration ? `<span class="ep-thumb-dur">${ep.duration}</span>` : ""}
        ${live
          ? `<span class="ep-play" aria-hidden="true"><svg viewBox="0 0 68 48"><path class="ep-play-bg" d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.3.3 34 .3 34 .3s-21.3 0-26.5 1.4a8.5 8.5 0 0 0-6 6C.1 12.9.1 24 .1 24s0 11.1 1.4 16.3a8.5 8.5 0 0 0 6 6C12.7 47.7 34 47.7 34 47.7s21.3 0 26.5-1.4a8.5 8.5 0 0 0 6-6c1.4-5.2 1.4-16.3 1.4-16.3s0-11.1-1.4-16.3z"/><path class="ep-play-tri" d="M27 34V14l18 10z"/></svg></span>`
          : `<span class="ep-soon">Coming soon</span>`}
      </div>
      <div class="ep-body">
        <h2>${ep.title}</h2>
        <p class="ep-sanskrit">${ep.sanskrit || ""}</p>
        <p class="ep-meta">${ep.chapter}</p>
        <p class="ep-blurb">${ep.blurb}</p>
      </div>
    `;
    grid.appendChild(el);
  }
}
