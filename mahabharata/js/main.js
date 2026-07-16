/**
 * Mahābhārata player — cinematic plate theater.
 * Painterly Imagine plates + Ken Burns / crossfade; voice + sitar.
 */
import { EPISODE } from "../episodes/01-birds-eye/script.js";

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
epSub.textContent = EPISODE.subtitle;

const TOTAL = EPISODE.totalSec;

// ── Narration — deep Indian-English male (browser TTS) ─────────
/**
 * Kathavachak voice — prefers pre-rendered Grok TTS (voice: naksh).
 * Falls back to browser speechSynthesis if clip missing.
 */
class Kathavachak {
  constructor() {
    this.on = true;
    this._token = 0;
    this._audio = null;
    this._fallbackVoice = null;
    this.base = EPISODE.voice?.base || "episodes/01-birds-eye/audio/";
    if (typeof speechSynthesis !== "undefined") {
      speechSynthesis.getVoices();
      speechSynthesis.addEventListener("voiceschanged", () => this._pickFallback());
      setTimeout(() => this._pickFallback(), 300);
    }
  }

  _pickFallback() {
    if (typeof speechSynthesis === "undefined") return;
    const all = speechSynthesis.getVoices();
    const prefer = all.find((v) => /en-in|ravi|india/i.test(`${v.lang} ${v.name}`));
    this._fallbackVoice =
      prefer || all.find((v) => /male|daniel|alex|david|george/i.test(v.name) && /^en/i.test(v.lang)) || all.find((v) => /^en/i.test(v.lang));
  }

  stop() {
    this._token++;
    if (this._audio) {
      try {
        this._audio.pause();
        this._audio.removeAttribute("src");
        this._audio.load();
      } catch {
        /* ok */
      }
      this._audio = null;
    }
    try {
      speechSynthesis?.cancel();
    } catch {
      /* ok */
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
      const url = this.base + file;
      const a = new Audio(url);
      a.preload = "auto";
      a.volume = 1;
      this._audio = a;
      a.play().catch(() => {
        // missing file / autoplay — fallback
        if (token === this._token) this._speakBrowser(who, text, token);
      });
      a.onended = () => {
        if (token === this._token) this._audio = null;
      };
      a.onerror = () => {
        if (token === this._token) this._speakBrowser(who, text, token);
      };
      return;
    }

    if (text) this._speakBrowser(who, text, token);
  }

  _speakBrowser(who, text, token) {
    if (!text?.trim() || typeof speechSynthesis === "undefined") return;
    if (!this._fallbackVoice) this._pickFallback();
    const u = new SpeechSynthesisUtterance(text.trim());
    u.pitch = who?.toLowerCase() === "drona" ? 0.75 : 0.85;
    u.rate = 0.88;
    u.volume = 1;
    u.lang = "en-IN";
    if (this._fallbackVoice) u.voice = this._fallbackVoice;
    u.onend = () => {};
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

// ── Soulful sitar ambient (Web Audio synthesis) ────────────────
/**
 * Sparse sitar plucks + soft tanpura bed. No samples — metallic
 * partials, slow meend, sympathetic shimmer. Soulful, not busy.
 */
class SoulfulSitar {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.wet = null;
    this.nodes = [];
    this.timers = [];
    this.on = false;
    // Sa-based free scale (Hz) — soft evening contour
    this.Sa = 138.59; // C#3-ish
    this.scale = null; // filled on ensure
  }

  async ensure() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;

    // simple lush delay "hall" for soul
    const delay = this.ctx.createDelay(1.2);
    delay.delayTime.value = 0.32;
    const fb = this.ctx.createGain();
    fb.gain.value = 0.28;
    const delayGain = this.ctx.createGain();
    delayGain.gain.value = 0.22;
    delay.connect(fb);
    fb.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(this.master);

    // second longer echo
    const delay2 = this.ctx.createDelay(2);
    delay2.delayTime.value = 0.58;
    const fb2 = this.ctx.createGain();
    fb2.gain.value = 0.18;
    const d2g = this.ctx.createGain();
    d2g.gain.value = 0.12;
    delay2.connect(fb2);
    fb2.connect(delay2);
    delay2.connect(d2g);
    d2g.connect(this.master);

    this.wet = this.ctx.createGain();
    this.wet.gain.value = 1;
    this.wet.connect(this.master);
    this.wet.connect(delay);
    this.wet.connect(delay2);
    this.master.connect(this.ctx.destination);

    this._delay = delay;
    this._delay2 = delay2;

    const Sa = this.Sa;
    // just ratios: Sa Re(komal-ish soft) Ga Ma Pa Dha Ni Sa
    this.scale = [
      Sa,
      Sa * (16 / 15),
      Sa * (5 / 4),
      Sa * (4 / 3),
      Sa * (3 / 2),
      Sa * (8 / 5),
      Sa * (15 / 8),
      Sa * 2,
      Sa * 2 * (5 / 4),
      Sa * 2 * (3 / 2),
    ];
  }

  _track(node) {
    this.nodes.push(node);
    return node;
  }

  /** Soft continuous tanpura bed under plucks */
  _startTanpura(t0) {
    const Sa = this.Sa;
    const Pa = Sa * 1.5;
    const SaLow = Sa / 2;
    for (const [freq, type, amp, det] of [
      [SaLow, "sine", 0.045, 0],
      [SaLow * 1.002, "triangle", 0.02, 0.3],
      [Sa, "sine", 0.035, -0.2],
      [Sa * 1.003, "sine", 0.02, 0.4],
      [Pa, "sine", 0.028, 0],
      [Pa * 0.997, "triangle", 0.012, -0.3],
      [Sa * 2, "sine", 0.012, 0.1],
    ]) {
      const o = this._track(this.ctx.createOscillator());
      const g = this._track(this.ctx.createGain());
      o.type = type;
      o.frequency.value = freq;
      if (det) {
        const lfo = this._track(this.ctx.createOscillator());
        const lg = this._track(this.ctx.createGain());
        lfo.frequency.value = 0.08 + Math.abs(det) * 0.05;
        lg.gain.value = 0.4;
        lfo.connect(lg);
        lg.connect(o.frequency);
        lfo.start(t0);
      }
      g.gain.value = amp;
      o.connect(g);
      g.connect(this.wet);
      o.start(t0);
    }
  }

  /**
   * Metallic sitar-like pluck: slightly inharmonic partials + meend.
   */
  pluck(freq, when, { dur = 2.8, amp = 0.22, meend = 0 } = {}) {
    if (!this.ctx || !this.on) return;
    const t = when;
    const out = this._track(this.ctx.createGain());
    out.gain.setValueAtTime(0, t);
    out.gain.linearRampToValueAtTime(amp, t + 0.012);
    out.gain.exponentialRampToValueAtTime(0.001, t + dur);
    out.connect(this.wet);

    // bright attack noise through bandpass
    const noiseBuf = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * 0.04), this.ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const noise = this._track(this.ctx.createBufferSource());
    noise.buffer = noiseBuf;
    const bp = this._track(this.ctx.createBiquadFilter());
    bp.type = "bandpass";
    bp.frequency.value = freq * 3;
    bp.Q.value = 4;
    const ng = this._track(this.ctx.createGain());
    ng.gain.setValueAtTime(amp * 0.55, t);
    ng.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    noise.connect(bp);
    bp.connect(ng);
    ng.connect(out);
    noise.start(t);
    noise.stop(t + 0.05);

    // partials — slightly stretched like a string
    const ratios = [1, 2.01, 3.02, 4.05, 5.08, 6.12, 8.2, 10.3, 12.4];
    const amps = [1, 0.55, 0.32, 0.2, 0.14, 0.1, 0.07, 0.045, 0.03];
    for (let i = 0; i < ratios.length; i++) {
      const o = this._track(this.ctx.createOscillator());
      const g = this._track(this.ctx.createGain());
      o.type = i < 2 ? "triangle" : "sine";
      const f0 = freq * ratios[i];
      o.frequency.setValueAtTime(f0, t);
      // gentle meend (glide) on fundamental-ish partials
      if (meend && i < 3) {
        o.frequency.linearRampToValueAtTime(f0 * (1 + meend), t + dur * 0.45);
        o.frequency.linearRampToValueAtTime(f0 * (1 + meend * 0.3), t + dur * 0.85);
      }
      // slow jawari-ish vibrato
      const lfo = this._track(this.ctx.createOscillator());
      const lg = this._track(this.ctx.createGain());
      lfo.frequency.value = 4.5 + i * 0.15;
      lg.gain.value = f0 * 0.0025;
      lfo.connect(lg);
      lg.connect(o.frequency);
      lfo.start(t);
      lfo.stop(t + dur + 0.1);

      const peak = amps[i] * (i === 0 ? 0.5 : 0.35);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(peak, t + 0.008 + i * 0.002);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur * (0.55 + 0.4 / (i + 1)));
      o.connect(g);
      g.connect(out);
      o.start(t);
      o.stop(t + dur + 0.15);
    }

    // sympathetic string shimmer (quiet high Sa)
    const sym = this._track(this.ctx.createOscillator());
    const sg = this._track(this.ctx.createGain());
    sym.type = "sine";
    sym.frequency.value = this.Sa * 2 * 1.5;
    sg.gain.setValueAtTime(0, t);
    sg.gain.linearRampToValueAtTime(0.03, t + 0.05);
    sg.gain.exponentialRampToValueAtTime(0.001, t + dur * 0.9);
    sym.connect(sg);
    sg.connect(this.wet);
    sym.start(t);
    sym.stop(t + dur);
  }

  _schedulePhrase() {
    if (!this.on || !this.ctx) return;
    const t0 = this.ctx.currentTime + 0.08;
    const sc = this.scale;
    // soulful sparse motifs — never dense
    const phrases = [
      [
        [0, 0],
        [1.6, 4],
        [3.4, 2],
        [5.2, 7],
        [7.5, 4],
      ],
      [
        [0, 4],
        [1.2, 5],
        [2.8, 7],
        [4.5, 8],
        [6.8, 4],
        [9.0, 0],
      ],
      [
        [0, 2],
        [2.0, 4],
        [3.5, 3],
        [5.5, 4],
        [8.0, 7],
      ],
      [
        [0, 7],
        [1.8, 5],
        [3.6, 4],
        [5.5, 2],
        [7.8, 0],
        [10.0, 4],
      ],
    ];
    const phrase = phrases[(Math.random() * phrases.length) | 0];
    let lastEnd = 0;
    for (const [at, deg] of phrase) {
      const freq = sc[deg % sc.length];
      const meend = Math.random() > 0.45 ? 0.03 + Math.random() * 0.04 : 0;
      const amp = 0.14 + Math.random() * 0.1;
      const dur = 2.2 + Math.random() * 1.6;
      this.pluck(freq, t0 + at, { dur, amp, meend: Math.random() > 0.5 ? meend : -meend * 0.5 });
      lastEnd = Math.max(lastEnd, at + dur * 0.5);
    }
    // occasional low Sa anchor
    if (Math.random() > 0.4) {
      this.pluck(this.Sa / 2, t0 + lastEnd * 0.3, { dur: 3.5, amp: 0.1, meend: 0.015 });
    }
    const waitMs = (lastEnd + 2.5 + Math.random() * 3.5) * 1000;
    this.timers.push(setTimeout(() => this._schedulePhrase(), waitMs));
  }

  async start() {
    await this.ensure();
    if (this.ctx.state === "suspended") await this.ctx.resume();
    if (this.on) return;
    this.on = true;
    const t = this.ctx.currentTime;
    this._startTanpura(t);
    // opening pluck
    this.pluck(this.Sa * 1.5, t + 0.4, { dur: 3.2, amp: 0.2, meend: 0.035 });
    this.pluck(this.Sa, t + 1.8, { dur: 3.5, amp: 0.16, meend: -0.02 });
    this.timers.push(setTimeout(() => this._schedulePhrase(), 3200));
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(0.72, t + 1.4);
  }

  stop() {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(0, t + 0.8);
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
    }, 900);
  }

  async toggle() {
    if (this.on) this.stop();
    else await this.start();
    return this.on;
  }
}
const drone = new SoulfulSitar();



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
const plateBase = "episodes/01-birds-eye/stills/";

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
    img.src = plateBase + file;
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
      btnMute.textContent = "Sitar ✓";
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
    btnMute.textContent = "Sitar ✓";
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
  btnMute.textContent = on ? "Sitar ✓" : "Sitar";
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
