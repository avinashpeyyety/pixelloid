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

// ── Nimble sitar ambient (Web Audio) ───────────────────────────
/**
 * Light, dancing sitar — bright register, short plucks, playful phrases.
 * Less drone/weight, more sparkle under the story.
 */
class SoulfulSitar {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.wet = null;
    this.nodes = [];
    this.timers = [];
    this.on = false;
    // Higher Sa — nimble mid register (not heavy bass)
    this.Sa = 196.0; // G3
    this.scale = null;
  }

  async ensure() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;

    // Short airy slap-back — not a solemn hall
    const delay = this.ctx.createDelay(0.6);
    delay.delayTime.value = 0.14;
    const fb = this.ctx.createGain();
    fb.gain.value = 0.12;
    const delayGain = this.ctx.createGain();
    delayGain.gain.value = 0.14;
    delay.connect(fb);
    fb.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(this.master);

    const delay2 = this.ctx.createDelay(0.8);
    delay2.delayTime.value = 0.28;
    const fb2 = this.ctx.createGain();
    fb2.gain.value = 0.08;
    const d2g = this.ctx.createGain();
    d2g.gain.value = 0.08;
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

    const Sa = this.Sa;
    // Brighter major-ish playfulness: Sa Re Ga Ma Pa Dha Ni Sa² Ga² Pa²
    this.scale = [
      Sa,
      Sa * (9 / 8),
      Sa * (5 / 4),
      Sa * (4 / 3),
      Sa * (3 / 2),
      Sa * (5 / 3),
      Sa * (15 / 8),
      Sa * 2,
      Sa * 2 * (5 / 4),
      Sa * 2 * (3 / 2),
      Sa * 2 * (15 / 8),
      Sa * 4,
    ];
  }

  _track(node) {
    this.nodes.push(node);
    return node;
  }

  /** Thin high tanpura — whisper, not weight */
  _startTanpura(t0) {
    const Sa = this.Sa;
    const Pa = Sa * 1.5;
    for (const [freq, type, amp, det] of [
      [Sa, "sine", 0.014, 0.15],
      [Sa * 1.002, "sine", 0.008, -0.1],
      [Pa, "sine", 0.01, 0.12],
      [Sa * 2, "sine", 0.012, 0.2],
      [Sa * 2 * 1.003, "triangle", 0.006, -0.15],
      [Pa * 2, "sine", 0.005, 0.1],
    ]) {
      const o = this._track(this.ctx.createOscillator());
      const g = this._track(this.ctx.createGain());
      o.type = type;
      o.frequency.value = freq;
      if (det) {
        const lfo = this._track(this.ctx.createOscillator());
        const lg = this._track(this.ctx.createGain());
        lfo.frequency.value = 0.12 + Math.abs(det) * 0.08;
        lg.gain.value = 0.25;
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

  /** Short bright pluck — nimble, less solemn */
  pluck(freq, when, { dur = 1.1, amp = 0.16, meend = 0 } = {}) {
    if (!this.ctx || !this.on) return;
    const t = when;
    const out = this._track(this.ctx.createGain());
    out.gain.setValueAtTime(0, t);
    out.gain.linearRampToValueAtTime(amp, t + 0.006);
    out.gain.exponentialRampToValueAtTime(0.001, t + dur);
    out.connect(this.wet);

    // Crisp tick attack
    const noiseBuf = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * 0.02), this.ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const noise = this._track(this.ctx.createBufferSource());
    noise.buffer = noiseBuf;
    const bp = this._track(this.ctx.createBiquadFilter());
    bp.type = "bandpass";
    bp.frequency.value = Math.min(freq * 4.5, 6000);
    bp.Q.value = 2.5;
    const ng = this._track(this.ctx.createGain());
    ng.gain.setValueAtTime(amp * 0.7, t);
    ng.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
    noise.connect(bp);
    bp.connect(ng);
    ng.connect(out);
    noise.start(t);
    noise.stop(t + 0.03);

    // Fewer partials, brighter balance
    const ratios = [1, 2.01, 3.02, 4.05, 5.1, 7.15, 9.2];
    const amps = [0.85, 0.55, 0.28, 0.18, 0.12, 0.07, 0.04];
    for (let i = 0; i < ratios.length; i++) {
      const o = this._track(this.ctx.createOscillator());
      const g = this._track(this.ctx.createGain());
      o.type = i === 0 ? "triangle" : "sine";
      const f0 = freq * ratios[i];
      o.frequency.setValueAtTime(f0, t);
      // Quick playful slides, not long meend
      if (meend && i < 2) {
        o.frequency.linearRampToValueAtTime(f0 * (1 + meend), t + dur * 0.25);
        o.frequency.linearRampToValueAtTime(f0, t + dur * 0.55);
      }
      const lfo = this._track(this.ctx.createOscillator());
      const lg = this._track(this.ctx.createGain());
      lfo.frequency.value = 5.5 + i * 0.2;
      lg.gain.value = f0 * 0.0018;
      lfo.connect(lg);
      lg.connect(o.frequency);
      lfo.start(t);
      lfo.stop(t + dur + 0.05);

      const peak = amps[i] * (i === 0 ? 0.55 : 0.4);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(peak, t + 0.004 + i * 0.001);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur * (0.35 + 0.25 / (i + 1)));
      o.connect(g);
      g.connect(out);
      o.start(t);
      o.stop(t + dur + 0.08);
    }

    // High chime sparkle
    const sym = this._track(this.ctx.createOscillator());
    const sg = this._track(this.ctx.createGain());
    sym.type = "sine";
    sym.frequency.value = freq * 4 * 1.01;
    sg.gain.setValueAtTime(0, t);
    sg.gain.linearRampToValueAtTime(0.025, t + 0.01);
    sg.gain.exponentialRampToValueAtTime(0.001, t + Math.min(0.6, dur * 0.5));
    sym.connect(sg);
    sg.connect(this.wet);
    sym.start(t);
    sym.stop(t + dur);
  }

  _schedulePhrase() {
    if (!this.on || !this.ctx) return;
    const t0 = this.ctx.currentTime + 0.05;
    const sc = this.scale;
    // Nimble motifs — higher degrees, tight spacing
    const phrases = [
      [
        [0, 4],
        [0.28, 5],
        [0.55, 7],
        [0.9, 9],
        [1.35, 7],
        [1.7, 5],
        [2.1, 4],
      ],
      [
        [0, 7],
        [0.22, 9],
        [0.45, 11],
        [0.75, 9],
        [1.05, 7],
        [1.4, 8],
        [1.85, 7],
      ],
      [
        [0, 2],
        [0.2, 4],
        [0.4, 5],
        [0.65, 7],
        [0.95, 5],
        [1.25, 4],
        [1.6, 7],
        [2.0, 9],
      ],
      [
        [0, 9],
        [0.18, 7],
        [0.35, 5],
        [0.55, 7],
        [0.85, 9],
        [1.2, 11],
        [1.55, 9],
      ],
      [
        [0, 4],
        [0.15, 4],
        [0.35, 5],
        [0.55, 7],
        [0.85, 4],
        [1.1, 5],
        [1.4, 7],
        [1.75, 9],
        [2.15, 7],
      ],
    ];
    const phrase = phrases[(Math.random() * phrases.length) | 0];
    let lastEnd = 0;
    for (const [at, deg] of phrase) {
      const freq = sc[deg % sc.length];
      const meend = Math.random() > 0.65 ? 0.015 + Math.random() * 0.02 : 0;
      const amp = 0.1 + Math.random() * 0.08;
      const dur = 0.7 + Math.random() * 0.55;
      this.pluck(freq, t0 + at, {
        dur,
        amp,
        meend: Math.random() > 0.5 ? meend : -meend,
      });
      lastEnd = Math.max(lastEnd, at + dur * 0.4);
    }
    // Occasional bright high sparkle, not low drone
    if (Math.random() > 0.55) {
      this.pluck(sc[9 + ((Math.random() * 3) | 0)], t0 + lastEnd * 0.5, {
        dur: 0.9,
        amp: 0.08,
        meend: 0.02,
      });
    }
    // Short breath, then next phrase — keeps energy light
    const waitMs = (lastEnd + 0.55 + Math.random() * 1.1) * 1000;
    this.timers.push(setTimeout(() => this._schedulePhrase(), waitMs));
  }

  async start() {
    await this.ensure();
    if (this.ctx.state === "suspended") await this.ctx.resume();
    if (this.on) return;
    this.on = true;
    const t = this.ctx.currentTime;
    this._startTanpura(t);
    // Opening: light skip upward
    this.pluck(this.Sa * 1.5, t + 0.15, { dur: 0.9, amp: 0.14, meend: 0.02 });
    this.pluck(this.Sa * 2, t + 0.45, { dur: 0.85, amp: 0.12, meend: 0.015 });
    this.pluck(this.Sa * 2 * 1.25, t + 0.75, { dur: 1.0, amp: 0.13, meend: 0.02 });
    this.timers.push(setTimeout(() => this._schedulePhrase(), 1100));
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(0.58, t + 0.6);
  }

  stop() {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(0, t + 0.45);
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
    }, 550);
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
const plateCacheTag = EPISODE.voice?.cache || "nofeather1";

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
