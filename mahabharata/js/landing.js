import { EPISODES } from "./episodes.js?v=ep15-20261005";

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
    const base = `episodes/${ep.id}-${ep.slug}/stills/`;
    el.innerHTML = `
      <div class="ep-thumb">
        <picture>
          <source type="image/webp" srcset="${base}thumb@2x.webp 1280w" sizes="(max-width: 640px) 100vw, 420px" />
          <img src="${base}thumb.jpg" srcset="${base}thumb.jpg 640w, ${base}thumb@2x.jpg 1280w"
               sizes="(max-width: 640px) 100vw, 420px" alt="" loading="lazy" decoding="async" width="1280" height="720"
               onerror="this.closest('.ep-thumb').classList.add('no-img')" />
        </picture>
        <span class="ep-thumb-num">EP ${ep.id}</span>
        ${ep.duration ? `<span class="ep-thumb-dur">${ep.duration}</span>` : ""}
        ${live
          ? `<span class="ep-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg></span>`
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
