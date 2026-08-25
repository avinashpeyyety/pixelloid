/**
 * Mahābhārata player — cinematic plate theater.
 * Painterly Imagine plates + Ken Burns / crossfade; voice + flute/tabla.
 * Loads episode from ?ep=01 … ?ep=11
 */
const EP_LOADERS = {
  "01": () => import("../episodes/01-birds-eye/script.js"),
  "02": () => import("../episodes/02-swayamvara/script.js"),
  "03": () => import("../episodes/03-bhima-bakasura/script.js"),
  "04": () => import("../episodes/04-akshayapatra/script.js"),
  "05": () => import("../episodes/05-yaksha-prashna/script.js"),
  "06": () => import("../episodes/06-kirata/script.js"),
  "07": () => import("../episodes/07-jayadratha/script.js"),
  "08": () => import("../episodes/08-peace-embassy/script.js"),
  "09": () => import("../episodes/09-gita/script.js"),
  "10": () => import("../episodes/10-bhishma-fall/script.js"),
  "11": () => import("../episodes/11-chakravyuha/script.js"),
};

const _epParam = String(new URLSearchParams(location.search).get("ep") || "01").replace(/\D/g, "") || "01";
const EP_ID = _epParam.padStart(2, "0");
const { EPISODE } = await (EP_LOADERS[EP_ID] || EP_LOADERS["01"])();

// ── DOM ────────────────────────────────────────────────────────
const host = document.getElementById("canvas-host");
const whoEl = document.getElementById("who");
const lineEl = document.getElementById("line");
const dialogueEl = document.getElementById("dialogue");
const fillEl = document.getElementById("progress-fill");
const timeEl = document.getElementById("time-readout");
const trackEl = document.getElementById("progress-track");
const btnPlay = document.getElementById("btn-play");
const btnRestart = document.getElementById("btn-restart");
const btnMute = document.getElementById("btn-mute");
const btnVoice = document.getElementById("btn-voice");
const btnReplay = document.getElementById("btn-replay");
const loader = document.getElementById("loader");
const endCard = document.getElementById("end-card");
const epTitle = document.getElementById("ep-title");
const epSub = document.getElementById("ep-sub");

epTitle.textContent = EPISODE.title;
epSub.textContent = `${EPISODE.subtitle} · cinematic plates`;
document.title = `Mahābhārata · ${EPISODE.title} — Pixelloid`;
const loaderP = loader?.querySelector("p");
if (loaderP) loaderP.textContent = "Loading the episode…";

// End card from episode metadata
const endMeta = EPISODE.end || {};
const endH2 = endCard?.querySelector("h2");
const endP = endCard?.querySelector(".end-card-inner > p");
const endActions = endCard?.querySelector(".end-actions");
if (endH2) endH2.textContent = endMeta.title || `End of Episode ${EPISODE.id}`;
if (endP) endP.textContent = endMeta.line || "";
if (endActions && endMeta.next) {
  let nextA = endActions.querySelector("a.btn-next");
  if (!nextA) {
    nextA = document.createElement("a");
    nextA.className = "btn btn-ghost btn-next";
    endActions.appendChild(nextA);
  }
  nextA.href = endMeta.next;
  nextA.textContent = endMeta.nextLabel || "Next episode";
}

const TOTAL = EPISODE.totalSec;

// ── Narration — deep Indian-English male (browser TTS) ─────────
/**
 * Kathavachak — Grok TTS pre-rendered MP3s only (no browser voice when clip exists).
 * Browser speechSynthesis is last-resort fallback only if the file 404s.
 */
class Kathavachak {
  constructor() {
    this.on = true;
    this._token = 0;
    this._audio = null;
    this._fallbackVoice = null;
    // Relative to play.html in mahabharata/
    this.base = EPISODE.voice?.base || "episodes/01-birds-eye/audio/";
    this.cacheTag = EPISODE.voice?.cache || "nofeather1";
    if (typeof speechSynthesis !== "undefined") {
      speechSynthesis.getVoices();
      speechSynthesis.addEventListener("voiceschanged", () => this._pickFallback());
      setTimeout(() => this._pickFallback(), 300);
    }
  }

  _pickFallback() {
    if (typeof speechSynthesis === "undefined") return;
    const all = speechSynthesis.getVoices();
    this._fallbackVoice =
      all.find((v) => /en-in|ravi|india/i.test(`${v.lang} ${v.name}`)) ||
      all.find((v) => /male/i.test(v.name) && /^en/i.test(v.lang)) ||
      all.find((v) => /^en/i.test(v.lang));
  }

  stop() {
    this._token++;
    // Always kill browser TTS first so it cannot overlap Grok clips
    try {
      speechSynthesis?.cancel();
    } catch {
      /* ok */
    }
    if (this._audio) {
      try {
        this._audio.onended = null;
        this._audio.onerror = null;
        this._audio.pause();
        this._audio.removeAttribute("src");
        this._audio.load();
      } catch {
        /* ok */
      }
      this._audio = null;
    }
  }

  /**
   * @param {string} who
   * @param {string} text
   * @param {{ audio?: string }} [opts]
   */
  speak(who, text, opts = {}) {
    if (!this.on) return;
    this.stop();
    const token = this._token;
    const file = opts.audio;

    if (file) {
      const url = `${this.base}${file}?v=${encodeURIComponent(this.cacheTag)}`;
      const a = new Audio();
      a.preload = "auto";
      a.volume = 1;
      a.crossOrigin = "anonymous";
      this._audio = a;

      const playClip = () => {
        if (token !== this._token) return;
        a.play().catch((err) => {
          console.warn("[katha] Grok clip play failed", url, err);
          // Do NOT fall back to browser TTS on autoplay policy if user already clicked Play
          // Only fall back when the resource is missing
        });
      };

      a.onended = () => {
        if (token === this._token) this._audio = null;
      };
      a.onerror = () => {
        console.warn("[katha] Grok clip missing or blocked", url);
        if (token === this._token && text) this._speakBrowser(who, text, token);
      };
      a.oncanplaythrough = playClip;
      a.src = url;
      a.load();
      // Some browsers fire playable before canplaythrough
      if (a.readyState >= 3) playClip();
      return;
    }

    if (text) this._speakBrowser(who, text, token);
  }

  _speakBrowser(who, text, token) {
    if (!text?.trim() || typeof speechSynthesis === "undefined") return;
    if (!this._fallbackVoice) this._pickFallback();
    try {
      speechSynthesis.cancel();
    } catch {
      /* ok */
    }
    const u = new SpeechSynthesisUtterance(text.trim());
    u.pitch = who?.toLowerCase() === "drona" ? 0.75 : 0.85;
    u.rate = 0.88;
    u.volume = 1;
    u.lang = "en-IN";
    if (this._fallbackVoice) u.voice = this._fallbackVoice;
    if (token !== this._token) return;
    speechSynthesis.speak(u);
  }

  setEnabled(on) {
    this.on = on;
    if (!on) this.stop();
  }
}

const katha = new Kathavachak();

// ── Palette (phad / pattachitra) ───────────────────────────────
const C = {
  cloth: "#c4a06a",
  clothDark: "#9a7848",
  clothLight: "#dcc08a",
  border: "#1a0c08",
  borderGold: "#c9a227",
  vermillion: "#b83218",
  saffron: "#e08a1e",
  gold: "#e8c547",
  indigo: "#1a2744",
  indigoDeep: "#0e1528",
  leaf: "#2a5a38",
  leafDark: "#1a3a24",
  skin: "#d4a574",
  skinDeep: "#b88858",
  white: "#f4ead4",
  ink: "#1a1008",
  ash: "#5a4838",
  sky: "#3d5a7a",
  skyDusk: "#6a3a4a",
};

// ── Flute + tabla ambient (Web Audio) ──────────────────────────
/**
 * Soft bansuri-like flute lines over a light tabla pulse.
 * Gentle, story-friendly — not heavy sitar/drone.
 */
class FluteTablaBed {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.wet = null;
    this.nodes = [];
    this.timers = [];
    this.on = false;
    this.Sa = 293.66; // D4 — flute-friendly
    this.scale = null;
    this.beat = 0.42; // ~142 bpm feel, light
  }

  async ensure() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;

    // Soft room for flute
    const delay = this.ctx.createDelay(1.0);
    delay.delayTime.value = 0.22;
    const fb = this.ctx.createGain();
    fb.gain.value = 0.18;
    const delayGain = this.ctx.createGain();
    delayGain.gain.value = 0.16;
    delay.connect(fb);
    fb.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(this.master);

    this.wet = this.ctx.createGain();
    this.wet.gain.value = 1;
    this.wet.connect(this.master);
    this.wet.connect(delay);
    this.master.connect(this.ctx.destination);

    const Sa = this.Sa;
    // Soft raga-ish path: Sa Re Ga Ma Pa Dha Ni Sa
    this.scale = [
      Sa * 0.75,
      Sa,
      Sa * (9 / 8),
      Sa * (5 / 4),
      Sa * (4 / 3),
      Sa * (3 / 2),
      Sa * (5 / 3),
      Sa * (15 / 8),
      Sa * 2,
      Sa * 2 * (9 / 8),
      Sa * 2 * (5 / 4),
    ];
  }

  _track(node) {
    this.nodes.push(node);
    return node;
  }

  /** Quiet Sa–Pa air under the flute */
  _startPad(t0) {
    const Sa = this.Sa;
    for (const [freq, amp] of [
      [Sa * 0.5, 0.012],
      [Sa, 0.01],
      [Sa * 1.5, 0.008],
    ]) {
      const o = this._track(this.ctx.createOscillator());
      const g = this._track(this.ctx.createGain());
      o.type = "sine";
      o.frequency.value = freq;
      g.gain.value = amp;
      o.connect(g);
      g.connect(this.wet);
      o.start(t0);
    }
  }

  /**
   * Bansuri-like tone: soft attack, breath noise, gentle vibrato, legato.
   */
  flute(freq, when, { dur = 1.4, amp = 0.12, glide = 0 } = {}) {
    if (!this.ctx || !this.on) return;
    const t = when;
    const out = this._track(this.ctx.createGain());
    // Soft breath-in attack
    out.gain.setValueAtTime(0, t);
    out.gain.linearRampToValueAtTime(amp, t + 0.06);
    out.gain.setValueAtTime(amp * 0.92, t + dur * 0.55);
    out.gain.exponentialRampToValueAtTime(0.001, t + dur);
    out.connect(this.wet);

    // Body: fundamental + soft octave (flute formants)
    const partials = [
      [1, 0.7, "sine"],
      [2, 0.22, "sine"],
      [3, 0.08, "triangle"],
    ];
    for (const [ratio, level, type] of partials) {
      const o = this._track(this.ctx.createOscillator());
      const g = this._track(this.ctx.createGain());
      o.type = type;
      const f0 = freq * ratio;
      o.frequency.setValueAtTime(glide ? f0 * (1 - glide) : f0, t);
      if (glide) o.frequency.linearRampToValueAtTime(f0, t + Math.min(0.12, dur * 0.2));
      // Vibrato
      const lfo = this._track(this.ctx.createOscillator());
      const lg = this._track(this.ctx.createGain());
      lfo.frequency.value = 4.8;
      lg.gain.value = f0 * 0.004;
      lfo.connect(lg);
      lg.connect(o.frequency);
      lfo.start(t);
      lfo.stop(t + dur + 0.05);
      g.gain.value = level;
      o.connect(g);
      g.connect(out);
      o.start(t);
      o.stop(t + dur + 0.05);
    }

    // Breath air (bandpassed noise)
    const nlen = Math.max(1, Math.floor(this.ctx.sampleRate * Math.min(dur, 2.5)));
    const noiseBuf = this.ctx.createBuffer(1, nlen, this.ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const noise = this._track(this.ctx.createBufferSource());
    noise.buffer = noiseBuf;
    const bp = this._track(this.ctx.createBiquadFilter());
    bp.type = "bandpass";
    bp.frequency.value = Math.min(freq * 2.2, 2800);
    bp.Q.value = 0.8;
    const ng = this._track(this.ctx.createGain());
    ng.gain.setValueAtTime(0, t);
    ng.gain.linearRampToValueAtTime(amp * 0.09, t + 0.08);
    ng.gain.exponentialRampToValueAtTime(0.001, t + dur);
    noise.connect(bp);
    bp.connect(ng);
    ng.connect(this.wet);
    noise.start(t);
    noise.stop(t + dur);
  }

  /** Tabla-ish: bayan (dha) low boom + dayan (tin/na) click */
  tabla(kind, when, amp = 0.2) {
    if (!this.ctx || !this.on) return;
    const t = when;
    if (kind === "dha" || kind === "dhin") {
      // Low bayan: pitch drop sine
      const o = this._track(this.ctx.createOscillator());
      const g = this._track(this.ctx.createGain());
      o.type = "sine";
      const f0 = kind === "dhin" ? 95 : 72;
      o.frequency.setValueAtTime(f0, t);
      o.frequency.exponentialRampToValueAtTime(38, t + 0.14);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(amp * 0.55, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
      o.connect(g);
      g.connect(this.master);
      o.start(t);
      o.stop(t + 0.32);
    } else {
      // tin / na / ke: high slap
      const nlen = Math.floor(this.ctx.sampleRate * 0.05);
      const noiseBuf = this.ctx.createBuffer(1, nlen, this.ctx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
      const noise = this._track(this.ctx.createBufferSource());
      noise.buffer = noiseBuf;
      const bp = this._track(this.ctx.createBiquadFilter());
      bp.type = kind === "na" ? "highpass" : "bandpass";
      bp.frequency.value = kind === "na" ? 1800 : 900;
      bp.Q.value = kind === "ke" ? 1.2 : 3.5;
      const g = this._track(this.ctx.createGain());
      const peak = amp * (kind === "tin" ? 0.28 : 0.18);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(peak, t + 0.002);
      g.gain.exponentialRampToValueAtTime(0.001, t + (kind === "tin" ? 0.08 : 0.05));
      noise.connect(bp);
      bp.connect(g);
      g.connect(this.master);
      noise.start(t);
      noise.stop(t + 0.06);

      // Brief tonal ping
      if (kind === "tin" || kind === "na") {
        const o = this._track(this.ctx.createOscillator());
        const og = this._track(this.ctx.createGain());
        o.type = "triangle";
        o.frequency.setValueAtTime(kind === "tin" ? 420 : 520, t);
        o.frequency.exponentialRampToValueAtTime(280, t + 0.06);
        og.gain.setValueAtTime(amp * 0.12, t);
        og.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
        o.connect(og);
        og.connect(this.master);
        o.start(t);
        o.stop(t + 0.08);
      }
    }
  }

  _scheduleTablaLoop() {
    if (!this.on || !this.ctx) return;
    const t0 = this.ctx.currentTime + 0.04;
    const b = this.beat;
    // Light tintal-ish 8-beat feel: Dha - tin tin Na | Dha - dhin Na
    const pattern = [
      [0, "dha", 0.22],
      [1, "ke", 0.08],
      [2, "tin", 0.16],
      [3, "tin", 0.14],
      [4, "na", 0.15],
      [5, "ke", 0.07],
      [6, "dhin", 0.18],
      [7, "na", 0.14],
    ];
    for (const [beat, kind, amp] of pattern) {
      // occasional skip for air
      if (Math.random() > 0.92 && kind === "ke") continue;
      this.tabla(kind, t0 + beat * b, amp * (0.85 + Math.random() * 0.2));
    }
    const waitMs = 8 * b * 1000 - 20;
    this.timers.push(setTimeout(() => this._scheduleTablaLoop(), waitMs));
  }

  _scheduleFlutePhrase() {
    if (!this.on || !this.ctx) return;
    const t0 = this.ctx.currentTime + 0.08;
    const sc = this.scale;
    // Lyrical, unhurried flute lines
    const phrases = [
      [
        [0, 1, 1.1],
        [1.0, 3, 0.9],
        [1.9, 5, 1.2],
        [3.2, 4, 0.8],
        [4.1, 5, 1.4],
      ],
      [
        [0, 5, 0.7],
        [0.75, 6, 0.7],
        [1.5, 8, 1.3],
        [2.9, 5, 0.9],
        [3.9, 3, 1.1],
      ],
      [
        [0, 2, 0.85],
        [0.9, 4, 0.85],
        [1.8, 5, 0.7],
        [2.5, 7, 1.2],
        [3.8, 5, 1.0],
        [4.9, 4, 1.1],
      ],
      [
        [0, 8, 1.0],
        [1.1, 7, 0.75],
        [1.9, 5, 0.9],
        [2.9, 6, 0.8],
        [3.8, 8, 1.3],
      ],
    ];
    const phrase = phrases[(Math.random() * phrases.length) | 0];
    let lastEnd = 0;
    for (const [at, deg, dur] of phrase) {
      const freq = sc[deg % sc.length];
      const glide = Math.random() > 0.55 ? 0.03 : 0;
      this.flute(freq, t0 + at, {
        dur: dur * (0.9 + Math.random() * 0.2),
        amp: 0.09 + Math.random() * 0.05,
        glide,
      });
      lastEnd = Math.max(lastEnd, at + dur);
    }
    const waitMs = (lastEnd + 1.2 + Math.random() * 2.0) * 1000;
    this.timers.push(setTimeout(() => this._scheduleFlutePhrase(), waitMs));
  }

  async start() {
    await this.ensure();
    if (this.ctx.state === "suspended") await this.ctx.resume();
    if (this.on) return;
    this.on = true;
    const t = this.ctx.currentTime;
    this._startPad(t);
    // Opening flute breath
    this.flute(this.Sa, t + 0.2, { dur: 1.5, amp: 0.11, glide: 0.02 });
    this.flute(this.Sa * 1.5, t + 1.5, { dur: 1.3, amp: 0.1, glide: 0.025 });
    this.timers.push(setTimeout(() => this._scheduleTablaLoop(), 400));
    this.timers.push(setTimeout(() => this._scheduleFlutePhrase(), 2200));
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(0.62, t + 0.8);
  }

  stop() {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(0, t + 0.5);
    this.on = false;
    for (const id of this.timers) clearTimeout(id);
    this.timers = [];
    setTimeout(() => {
      for (const n of this.nodes) {
        try {
          n.stop?.();
          n.disconnect?.();
        } catch {
          /* ok */
        }
      }
      this.nodes = [];
    }, 600);
  }

  async toggle() {
    if (this.on) this.stop();
    else await this.start();
    return this.on;
  }
}
const drone = new FluteTablaBed();



// ── Canvas cinematic plates ────────────────────────────────────
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d", { alpha: false });
host.appendChild(canvas);

let W = 0;
let H = 0;
let dpr = 1;

function resize() {
  dpr = Math.min(devicePixelRatio || 1, 2);
  W = innerWidth;
  H = innerHeight;
  canvas.width = Math.floor(W * dpr);
  canvas.height = Math.floor(H * dpr);
  canvas.style.width = `${W}px`;
  canvas.style.height = `${H}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
addEventListener("resize", resize);
resize();

// Load plates
const plateCache = new Map();
const plateBase = EPISODE.stillsDir || `episodes/${EPISODE.slug || "01-birds-eye"}/stills/`;
const plateCacheTag = EPISODE.voice?.cache || "v1";

function loadPlate(name) {
  if (plateCache.has(name)) return plateCache.get(name);
  const file = EPISODE.plates?.[name];
  const img = new Image();
  img.decoding = "async";
  const entry = { img, ready: false, name };
  if (file) {
    img.onload = () => {
      entry.ready = true;
    };
    img.onerror = () => {
      entry.ready = false;
    };
    img.src = `${plateBase}${file}?v=${encodeURIComponent(plateCacheTag)}-plates`;
  }
  plateCache.set(name, entry);
  return entry;
}

// Preload all
if (EPISODE.plates) {
  for (const k of Object.keys(EPISODE.plates)) loadPlate(k);
}

// State
let playing = false;
let t = 0;
let lastBeatIdx = -1;
let ended = false;

// Dual buffer for crossfade
let plateA = "wide";
let plateB = "wide";
let fade = 1; // 0 = A fully, 1 = B fully
let fadeTarget = 1;
let zoom = 1.05;
let zoomT = 1.05;
let panX = 0;
let panXT = 0;
let panY = 0;
let panYT = 0;

function applyBeat(idx, { speak = true } = {}) {
  const b = EPISODE.beats[idx];
  if (!b) return;

  const nextPlate = b.plate || "wide";
  loadPlate(nextPlate);
  if (nextPlate !== plateB) {
    plateA = plateB;
    plateB = nextPlate;
    fade = 0;
    fadeTarget = 1;
  }
  zoomT = b.zoom ?? 1.08;
  panXT = b.panX ?? 0;
  panYT = b.panY ?? 0;

  if (b.who || b.text) {
    dialogueEl.classList.remove("hidden");
    whoEl.textContent = b.who || "";
    lineEl.textContent = b.text || "";
  } else {
    dialogueEl.classList.add("hidden");
    katha.stop();
  }

  if (speak && playing && (b.text || b.audio)) {
    katha.speak(b.who || "Narrator", b.text || "", { audio: b.audio });
  }
}

function updateBeat(time, opts) {
  let idx = 0;
  for (let i = 0; i < EPISODE.beats.length; i++) {
    if (time >= EPISODE.beats[i].t) idx = i;
  }
  if (idx !== lastBeatIdx) {
    lastBeatIdx = idx;
    applyBeat(idx, opts);
  }
}

function resetPlay() {
  t = 0;
  playing = false;
  ended = false;
  lastBeatIdx = -1;
  plateA = "wide";
  plateB = "wide";
  fade = 1;
  fadeTarget = 1;
  zoom = 1.05;
  zoomT = 1.05;
  panX = 0;
  panXT = 0;
  panY = 0;
  panYT = 0;
  katha.stop();
  endCard.classList.remove("show");
  btnPlay.textContent = "Play";
  applyBeat(0, { speak: false });
  lastBeatIdx = 0;
}

function fmt(sec) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

/** Cover-fit image with Ken Burns zoom + pan (−0.5..0.5) */
function drawPlateCover(entry, z, px, py, alpha) {
  if (!entry?.ready || !entry.img.naturalWidth) return false;
  const img = entry.img;
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  // cover base
  const cover = Math.max(W / iw, H / ih) * z;
  const dw = iw * cover;
  const dh = ih * cover;
  // pan: shift within extra space
  const maxOx = Math.max(0, (dw - W) / 2);
  const maxOy = Math.max(0, (dh - H) / 2);
  const ox = (W - dw) / 2 + px * maxOx * 2;
  const oy = (H - dh) / 2 + py * maxOy * 2;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.drawImage(img, ox, oy, dw, dh);
  ctx.restore();
  return true;
}

function drawFallback(label) {
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, "#1a0a28");
  g.addColorStop(0.5, "#2a1810");
  g.addColorStop(1, "#0a0614");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "rgba(232,168,56,0.7)";
  ctx.font = "600 18px 'Cormorant Garamond', Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText(label || "Loading plates…", W / 2, H / 2);
}

// particles of gold dust over plates
const dust = Array.from({ length: 40 }, () => ({
  x: Math.random(),
  y: Math.random(),
  s: 0.5 + Math.random() * 1.8,
  v: 0.02 + Math.random() * 0.04,
  a: Math.random() * Math.PI * 2,
}));

let lastTs = performance.now();
let platesReadyOnce = false;

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - lastTs) / 1000);
  lastTs = now;

  if (playing && !ended) {
    t += dt;
    if (t >= TOTAL) {
      t = TOTAL;
      playing = false;
      ended = true;
      katha.stop();
      btnPlay.textContent = "Play";
      endCard.classList.add("show");
      dialogueEl.classList.add("hidden");
    }
    updateBeat(t);
  }

  // smooth transitions
  const k = 1 - Math.exp(-2.0 * dt);
  fade += (fadeTarget - fade) * (1 - Math.exp(-3.2 * dt));
  zoom += (zoomT - zoom) * k;
  panX += (panXT - panX) * k;
  panY += (panYT - panY) * k;

  // slow drift on zoom while holding a plate (alive feel)
  const drift = playing ? Math.sin(now * 0.00015) * 0.008 : 0;
  const zNow = zoom + drift;

  for (const d of dust) {
    d.y -= d.v * dt * 0.15;
    d.x += Math.sin(d.a + now * 0.0008) * 0.02 * dt;
    if (d.y < 0) {
      d.y = 1;
      d.x = Math.random();
    }
  }

  // ── draw ──
  ctx.fillStyle = "#07050c";
  ctx.fillRect(0, 0, W, H);

  const ea = loadPlate(plateA);
  const eb = loadPlate(plateB);
  const aOk = drawPlateCover(ea, zNow * 0.98, panX * 0.9, panY * 0.9, 1 - fade);
  const bOk = drawPlateCover(eb, zNow, panX, panY, fade);
  if (!aOk && !bOk) drawFallback("Loading cinematic plates…");
  else if (!platesReadyOnce && (aOk || bOk)) {
    platesReadyOnce = true;
    loader?.classList.add("done");
  }

  // gold dust overlay
  ctx.save();
  for (const d of dust) {
    ctx.globalAlpha = 0.15 + fade * 0.1;
    ctx.beginPath();
    ctx.arc(d.x * W, d.y * H, d.s, 0, Math.PI * 2);
    ctx.fillStyle = "#e8c547";
    ctx.fill();
  }
  ctx.restore();

  // vignette
  const vig = 0.35 + (zoom - 1) * 0.4;
  const vg = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.2, W / 2, H / 2, Math.max(W, H) * 0.75);
  vg.addColorStop(0, "rgba(7,5,12,0)");
  vg.addColorStop(1, `rgba(7,5,12,${Math.min(0.75, vig)})`);
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W, H);

  // thin cinematic letterbox feel on very tall screens
  if (H / W > 0.75) {
    const bar = H * 0.04;
    ctx.fillStyle = "rgba(7,5,12,0.55)";
    ctx.fillRect(0, 0, W, bar);
    ctx.fillRect(0, H - bar, W, bar);
  }

  fillEl.style.width = `${(t / TOTAL) * 100}%`;
  timeEl.textContent = `${fmt(t)} / ${fmt(TOTAL)}`;
}

// ── UI ─────────────────────────────────────────────────────────
function syncVoiceBtn() {
  if (!btnVoice) return;
  btnVoice.textContent = katha.on ? "Voice ✓" : "Voice";
  btnVoice.setAttribute("aria-pressed", katha.on ? "true" : "false");
}

btnPlay.addEventListener("click", async () => {
  if (ended) resetPlay();
  playing = !playing;
  btnPlay.textContent = playing ? "Pause" : "Play";
  if (playing) {
    try {
      await drone.start();
      btnMute.textContent = "Music ✓";
    } catch {
      /* autoplay */
    }
    const b = EPISODE.beats[lastBeatIdx] || EPISODE.beats[0];
    if (b?.text || b?.audio) katha.speak(b.who || "Narrator", b.text || "", { audio: b.audio });
  } else {
    katha.stop();
  }
});

btnRestart.addEventListener("click", async () => {
  resetPlay();
  playing = true;
  btnPlay.textContent = "Pause";
  try {
    await drone.start();
    btnMute.textContent = "Music ✓";
  } catch {
    /* ok */
  }
  const b = EPISODE.beats[0];
  if (b?.text || b?.audio) katha.speak(b.who || "Narrator", b.text || "", { audio: b.audio });
  lastBeatIdx = 0;
});

btnReplay?.addEventListener("click", () => btnRestart.click());

btnMute.addEventListener("click", async () => {
  const on = await drone.toggle();
  btnMute.textContent = on ? "Music ✓" : "Music";
});

btnVoice?.addEventListener("click", () => {
  katha.setEnabled(!katha.on);
  syncVoiceBtn();
  if (katha.on && playing) {
    const b = EPISODE.beats[lastBeatIdx] || EPISODE.beats[0];
    if (b?.text || b?.audio) katha.speak(b.who || "Narrator", b.text || "", { audio: b.audio });
  }
});

trackEl.addEventListener("click", (e) => {
  const rect = trackEl.getBoundingClientRect();
  const u = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  t = u * TOTAL;
  lastBeatIdx = -1;
  ended = false;
  endCard.classList.remove("show");
  katha.stop();
  updateBeat(t, { speak: playing });
});

// boot
applyBeat(0, { speak: false });
lastBeatIdx = 0;
syncVoiceBtn();
requestAnimationFrame(frame);
// hide loader after short wait even if plates slow
setTimeout(() => loader?.classList.add("done"), 1200);

const params = new URLSearchParams(location.search);
if (params.get("auto") === "1") btnPlay.click();
