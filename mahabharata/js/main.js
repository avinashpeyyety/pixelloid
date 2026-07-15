/**
 * Mahābhārata player — 2D narrative cloth (Phad / Pattachitra inspired).
 * Beat-driven scroll theater: painted figures, bold outline, camera pans the phad.
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
 * Kathavachak-style: one bard voice for the phad.
 * Prefers en-IN male (Ravi, etc.), else deep English male + low pitch.
 */
class Kathavachak {
  constructor() {
    this.on = true;
    this.voice = null;
    this._ready = false;
    this._token = 0;
    this._keepAlive = null;
    if (typeof speechSynthesis !== "undefined") {
      speechSynthesis.getVoices();
      speechSynthesis.addEventListener("voiceschanged", () => this.pickVoice());
      // delayed pick (Chrome loads voices async)
      setTimeout(() => this.pickVoice(), 200);
      setTimeout(() => this.pickVoice(), 800);
    }
  }

  pickVoice() {
    if (typeof speechSynthesis === "undefined") return null;
    const all = speechSynthesis.getVoices();
    if (!all.length) return this.voice;

    const score = (v) => {
      const name = v.name || "";
      const lang = (v.lang || "").toLowerCase();
      let s = 0;
      // Indian English / Hindi-capable systems
      if (/^en-in/i.test(lang)) s += 100;
      if (/^hi/i.test(lang)) s += 40;
      if (/ravi|hemant|indian|india/i.test(name)) s += 80;
      // Known deep / male storyteller-ish English voices
      if (/google uk english male|microsoft (david|mark|george|ryan|guy)|daniel|alex|fred|bruce|aaron|james|tom|lee|ralph|gordon|richard|brian|christopher|english male|\bmale\b/i.test(name))
        s += 50;
      if (/en-gb|en-us|en-au/i.test(lang) && /male|david|daniel|james|george/i.test(name)) s += 30;
      // Prefer local for lower latency
      if (v.localService) s += 5;
      // Penalize clearly female
      if (/female|zira|samantha|karen|moira|victoria|susan|aria|tessa|flo|neerja/i.test(name) && !/ravi|hemant|male/i.test(name))
        s -= 120;
      if (/^en/i.test(lang)) s += 10;
      return s;
    };

    let best = null;
    let bestS = -Infinity;
    for (const v of all) {
      const s = score(v);
      if (s > bestS) {
        bestS = s;
        best = v;
      }
    }
    this.voice = best;
    this._ready = !!best;
    return this.voice;
  }

  /** Slight role colouring — still one deep male bard. */
  roleParams(who) {
    const w = (who || "Narrator").toLowerCase();
    if (w === "drona") return { pitch: 0.72, rate: 0.82 };
    if (w === "arjuna") return { pitch: 0.88, rate: 0.9 };
    if (w === "prince") return { pitch: 0.92, rate: 0.93 };
    // Narrator / default — deep, measured
    return { pitch: 0.78, rate: 0.86 };
  }

  stop() {
    this._token++;
    if (this._keepAlive) {
      clearInterval(this._keepAlive);
      this._keepAlive = null;
    }
    try {
      speechSynthesis?.cancel();
    } catch {
      /* ok */
    }
  }

  speak(who, text) {
    if (!this.on || !text || !text.trim()) return;
    if (typeof speechSynthesis === "undefined") return;

    this.stop();
    const token = this._token;
    if (!this.voice) this.pickVoice();

    const u = new SpeechSynthesisUtterance(text.trim());
    const { pitch, rate } = this.roleParams(who);
    u.pitch = pitch;
    u.rate = rate;
    u.volume = 1;
    if (this.voice) {
      u.voice = this.voice;
      // Force Indian English locale when possible for accent
      if (/en-in|india|ravi|hemant/i.test(`${this.voice.lang} ${this.voice.name}`)) {
        u.lang = "en-IN";
      } else if (/^hi/i.test(this.voice.lang || "")) {
        u.lang = this.voice.lang;
      } else {
        u.lang = this.voice.lang || "en-IN";
      }
    } else {
      u.lang = "en-IN";
    }

    // Chrome bug: long speech can stall — nudge pause/resume
    this._keepAlive = setInterval(() => {
      if (token !== this._token) return;
      if (!speechSynthesis.speaking) return;
      if (speechSynthesis.paused) speechSynthesis.resume();
      else {
        speechSynthesis.pause();
        speechSynthesis.resume();
      }
    }, 10000);

    u.onend = () => {
      if (token !== this._token) return;
      if (this._keepAlive) {
        clearInterval(this._keepAlive);
        this._keepAlive = null;
      }
    };
    u.onerror = () => {
      if (this._keepAlive) {
        clearInterval(this._keepAlive);
        this._keepAlive = null;
      }
    };

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

// ── Soft ambient ───────────────────────────────────────────────
class AmbientDrone {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.nodes = [];
    this.on = false;
  }
  async ensure() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(this.ctx.destination);
  }
  async start() {
    await this.ensure();
    if (this.ctx.state === "suspended") await this.ctx.resume();
    if (this.on) return;
    this.on = true;
    const t = this.ctx.currentTime;
    for (const [freq, type, g] of [
      [73.4, "sine", 0.06],
      [110, "triangle", 0.03],
      [220, "sine", 0.015],
      [329.6, "sine", 0.01],
    ]) {
      const o = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      o.type = type;
      o.frequency.value = freq;
      gain.gain.value = g;
      o.connect(gain);
      gain.connect(this.master);
      o.start(t);
      this.nodes.push(o, gain);
    }
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(0.5, t + 1.2);
  }
  stop() {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(0, t + 0.6);
    this.on = false;
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
    }, 700);
  }
  async toggle() {
    if (this.on) this.stop();
    else await this.start();
    return this.on;
  }
}
const drone = new AmbientDrone();

// ── Canvas ─────────────────────────────────────────────────────
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d", { alpha: false });
host.appendChild(canvas);

// World is a long painted phad (scroll width in design units)
const WORLD_W = 1600;
const WORLD_H = 900;

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

// ── Camera (pan/zoom on the cloth) ─────────────────────────────
// Each cam is a rectangle in world space: cx, cy, zoom (higher = closer)
const CAMERAS = {
  wide: { cx: 800, cy: 480, zoom: 1 },
  drona: { cx: 380, cy: 520, zoom: 1.55 },
  princes: { cx: 620, cy: 560, zoom: 1.45 },
  bird: { cx: 1120, cy: 220, zoom: 1.9 },
  "arjuna-bow": { cx: 1180, cy: 520, zoom: 1.7 },
  "arjuna-eye": { cx: 1200, cy: 420, zoom: 2.4 },
  eye: { cx: 1185, cy: 195, zoom: 4.2 },
  release: { cx: 1000, cy: 320, zoom: 1.8 },
  "wide-gold": { cx: 800, cy: 460, zoom: 1.05 },
};

const cam = { cx: 800, cy: 480, zoom: 1 };
const camT = { cx: 800, cy: 480, zoom: 1 };

function setCamera(name) {
  const c = CAMERAS[name] || CAMERAS.wide;
  camT.cx = c.cx;
  camT.cy = c.cy;
  camT.zoom = c.zoom;
}

// ── Noise / cloth grain (cached) ───────────────────────────────
const grainCanvas = document.createElement("canvas");
grainCanvas.width = 256;
grainCanvas.height = 256;
{
  const g = grainCanvas.getContext("2d");
  const img = g.createImageData(256, 256);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() * 40) | 0;
    img.data[i] = n;
    img.data[i + 1] = n;
    img.data[i + 2] = n;
    img.data[i + 3] = 28;
  }
  g.putImageData(img, 0, 0);
}

// ── Drawing helpers ────────────────────────────────────────────
function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function fillStroke(fill, stroke = C.ink, lw = 2.5) {
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lw;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();
  }
}

// ── Kalamkari motif library (Sri Kalahasti / Machilipatnam spirit) ──
const K = {
  madder: "#8b2a1a",
  indigo: "#1a3358",
  indigoDeep: "#0c1a30",
  rust: "#a84820",
  ochre: "#c48828",
  gold: "#e0b840",
  cream: "#f2e6c8",
  black: "#1a1008",
  teal: "#1a5048",
  rose: "#a83848",
};

/** Classic mango paisley (butta) */
function drawPaisley(x, y, s = 1, flip = 1, fill = K.madder) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s * flip, s);
  ctx.beginPath();
  ctx.moveTo(0, 12);
  ctx.bezierCurveTo(-14, 8, -16, -6, -6, -14);
  ctx.bezierCurveTo(4, -20, 14, -12, 10, 0);
  ctx.bezierCurveTo(18, -8, 16, -22, 4, -26);
  ctx.bezierCurveTo(-12, -30, -22, -12, -18, 4);
  ctx.bezierCurveTo(-16, 14, -6, 16, 0, 12);
  ctx.closePath();
  fillStroke(fill, K.black, 1.4);
  // inner seed
  ctx.beginPath();
  ctx.ellipse(-2, -4, 3.5, 5, -0.3, 0, Math.PI * 2);
  fillStroke(K.gold, K.black, 0.9);
  ctx.beginPath();
  ctx.arc(-2, -4, 1.2, 0, Math.PI * 2);
  fillStroke(K.cream, null);
  // tip curl
  ctx.beginPath();
  ctx.arc(6, -22, 3, 0, Math.PI * 2);
  fillStroke(K.ochre, K.black, 0.8);
  ctx.restore();
}

/** Small lotus rosette */
function drawLotus(x, y, r = 10, fill = K.rose) {
  ctx.save();
  ctx.translate(x, y);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.ellipse(Math.cos(a) * r * 0.45, Math.sin(a) * r * 0.45, r * 0.38, r * 0.18, a, 0, Math.PI * 2);
    fillStroke(i % 2 ? fill : K.gold, K.black, 0.9);
  }
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
  fillStroke(K.cream, K.black, 1);
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.12, 0, Math.PI * 2);
  fillStroke(K.madder, null);
  ctx.restore();
}

/** Peacock feather eye (kalamkari classic) */
function drawPeacockEye(x, y, s = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.beginPath();
  ctx.ellipse(0, 0, 7, 11, 0, 0, Math.PI * 2);
  fillStroke(K.teal, K.black, 1.1);
  ctx.beginPath();
  ctx.ellipse(0, -1, 4.5, 7, 0, 0, Math.PI * 2);
  fillStroke("#2a6a58", K.black, 0.8);
  ctx.beginPath();
  ctx.ellipse(0, -1, 2.5, 4, 0, 0, Math.PI * 2);
  fillStroke(K.gold, K.black, 0.7);
  ctx.beginPath();
  ctx.arc(0, -1, 1.2, 0, Math.PI * 2);
  fillStroke(K.indigoDeep, null);
  // stem
  ctx.beginPath();
  ctx.moveTo(0, 11);
  ctx.quadraticCurveTo(2, 16, 0, 20);
  ctx.strokeStyle = K.teal;
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.restore();
}

/** Vine tendril segment */
function drawVine(x0, y0, x1, y1, amp = 6) {
  const mx = (x0 + x1) / 2;
  const my = (y0 + y1) / 2 + amp;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.quadraticCurveTo(mx, my, x1, y1);
  ctx.strokeStyle = K.teal;
  ctx.lineWidth = 1.3;
  ctx.stroke();
  // leaf
  ctx.beginPath();
  ctx.ellipse(mx + 3, my - 2, 4, 2.2, 0.5, 0, Math.PI * 2);
  fillStroke(K.teal, K.black, 0.7);
}

/** Horizontal jali / border band of buttas */
function drawKalamkariBand(x, y, w, h, motif = "paisley") {
  ctx.save();
  roundRect(x, y, w, h, 2);
  fillStroke(K.indigoDeep, K.black, 1.2);
  // inner gold line
  ctx.strokeStyle = K.gold;
  ctx.lineWidth = 0.8;
  ctx.strokeRect(x + 2, y + 2, w - 4, h - 4);
  const n = Math.max(2, Math.floor(w / 14));
  for (let i = 0; i < n; i++) {
    const px = x + 8 + (i + 0.5) * ((w - 16) / n);
    const py = y + h / 2;
    if (motif === "lotus") drawLotus(px, py, h * 0.28, i % 2 ? K.rose : K.madder);
    else if (motif === "eye") drawPeacockEye(px, py - 1, h * 0.045);
    else drawPaisley(px, py + 1, h * 0.055, i % 2 ? 1 : -1, i % 3 === 0 ? K.madder : K.ochre);
  }
  ctx.restore();
}

/** Fill a polygon path already begun — clip and stamp motifs */
function stampKalamkariInPath(drawPathFn, opts = {}) {
  const {
    density = 1,
    style = "royal", // royal | sage | warrior | simple
  } = opts;
  ctx.save();
  drawPathFn();
  ctx.clip();

  // dyed base wash already filled by caller — motifs on top
  const bounds = { x: -36, y: -80, w: 72, h: 160 };
  if (style === "royal") {
    for (let row = 0; row < 5 * density; row++) {
      for (let col = 0; col < 3; col++) {
        const px = bounds.x + 12 + col * 22 + (row % 2) * 10;
        const py = bounds.y + 18 + row * 28;
        if ((row + col) % 2 === 0) drawPaisley(px, py, 0.55, col % 2 ? 1 : -1, K.madder);
        else drawLotus(px, py, 6, K.rose);
      }
    }
    // vertical vine
    for (let i = 0; i < 4; i++) {
      drawVine(-8, -60 + i * 30, 8, -40 + i * 30, 5 + (i % 2) * 4);
    }
  } else if (style === "sage") {
    // restrained indigo geometry + small lotuses (ācārya)
    for (let i = 0; i < 6; i++) {
      const py = -65 + i * 22;
      ctx.beginPath();
      ctx.moveTo(-18, py);
      ctx.lineTo(18, py);
      ctx.strokeStyle = "rgba(224,184,64,0.55)";
      ctx.lineWidth = 1;
      ctx.stroke();
      if (i % 2 === 0) drawLotus(0, py + 8, 5, K.ochre);
    }
    drawPaisley(-12, 20, 0.4, 1, K.ochre);
    drawPaisley(12, 20, 0.4, -1, K.ochre);
  } else if (style === "warrior") {
    for (let i = 0; i < 4; i++) {
      drawPeacockEye(-14 + (i % 2) * 28, -55 + i * 26, 0.85);
      drawPaisley(10 - (i % 2) * 20, -40 + i * 26, 0.45, i % 2 ? 1 : -1, K.indigo);
    }
    drawLotus(0, 10, 7, K.madder);
  } else {
    for (let i = 0; i < 3; i++) {
      drawPaisley(-10 + i * 10, -40 + i * 30, 0.4, i % 2 ? 1 : -1, K.rust);
    }
  }
  ctx.restore();
}

function drawBorderMotif(x, y, size, gold) {
  drawLotus(x, y, size * 0.9, gold ? K.gold : K.madder);
}

function drawClothBackground() {
  // base dyed cloth
  const grd = ctx.createLinearGradient(0, 0, 0, WORLD_H);
  grd.addColorStop(0, "#b89058");
  grd.addColorStop(0.35, C.cloth);
  grd.addColorStop(0.7, "#b88850");
  grd.addColorStop(1, C.clothDark);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, WORLD_W, WORLD_H);

  // vertical dye bands (hand-dyed look)
  for (let i = 0; i < 12; i++) {
    const x = (i / 12) * WORLD_W + Math.sin(i * 1.7) * 20;
    ctx.fillStyle = i % 2 === 0 ? "rgba(140,100,50,0.08)" : "rgba(220,190,130,0.06)";
    ctx.fillRect(x, 0, WORLD_W / 14, WORLD_H);
  }

  // sky band (upper painted zone)
  const sky = ctx.createLinearGradient(0, 60, 0, 340);
  sky.addColorStop(0, C.indigoDeep);
  sky.addColorStop(0.55, C.indigo);
  sky.addColorStop(0.85, C.skyDusk);
  sky.addColorStop(1, "rgba(180,120,70,0)");
  ctx.fillStyle = sky;
  ctx.fillRect(40, 50, WORLD_W - 80, 300);

  // ground band
  const ground = ctx.createLinearGradient(0, 520, 0, WORLD_H - 40);
  ground.addColorStop(0, "rgba(60,100,50,0.35)");
  ground.addColorStop(0.3, "rgba(80,60,30,0.45)");
  ground.addColorStop(1, "rgba(50,35,20,0.55)");
  ctx.fillStyle = ground;
  ctx.fillRect(40, 520, WORLD_W - 80, WORLD_H - 560);

  // grain overlay
  ctx.save();
  ctx.globalAlpha = 0.35;
  const pat = ctx.createPattern(grainCanvas, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(0, 0, WORLD_W, WORLD_H);
  ctx.restore();
}

function drawOrnateBorder() {
  const m = 28;
  const m2 = 48;

  // outer dark frame
  ctx.strokeStyle = C.border;
  ctx.lineWidth = 14;
  ctx.strokeRect(m, m, WORLD_W - m * 2, WORLD_H - m * 2);

  // gold inner
  ctx.strokeStyle = C.borderGold;
  ctx.lineWidth = 4;
  ctx.strokeRect(m2, m2, WORLD_W - m2 * 2, WORLD_H - m2 * 2);

  // thin vermillion
  ctx.strokeStyle = C.vermillion;
  ctx.lineWidth = 2;
  ctx.strokeRect(m2 + 10, m2 + 10, WORLD_W - (m2 + 10) * 2, WORLD_H - (m2 + 10) * 2);

  // corner lotuses
  const corners = [
    [70, 70],
    [WORLD_W - 70, 70],
    [70, WORLD_H - 70],
    [WORLD_W - 70, WORLD_H - 70],
  ];
  for (const [x, y] of corners) drawBorderMotif(x, y, 18, true);

  // edge diamond run
  for (let x = 120; x < WORLD_W - 120; x += 56) {
    drawBorderMotif(x, 40, 8, x % 112 < 56);
    drawBorderMotif(x, WORLD_H - 40, 8, x % 112 >= 56);
  }
  for (let y = 120; y < WORLD_H - 120; y += 56) {
    drawBorderMotif(40, y, 8, y % 112 < 56);
    drawBorderMotif(WORLD_W - 40, y, 8, y % 112 >= 56);
  }

  // title cartouche (top center of cloth)
  ctx.save();
  roundRect(WORLD_W / 2 - 170, 52, 340, 48, 4);
  fillStroke(C.indigoDeep, C.gold, 2);
  // mini kalamkari band under title
  drawKalamkariBand(WORLD_W / 2 - 150, 88, 300, 8, "paisley");
  ctx.fillStyle = C.gold;
  ctx.font = "600 15px 'Cormorant Garamond', Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("आदिपर्व · पक्षिणश्चक्षुः", WORLD_W / 2, 70);
  ctx.font = "500 10px 'DM Sans', sans-serif";
  ctx.fillStyle = K.ochre;
  ctx.fillText("kalamkari · phad", WORLD_W / 2, 84);
  ctx.restore();
}

// ── Figures (kalamkari-attired puppets) ────────────────────────
function drawFigure(x, y, opts = {}) {
  const {
    scale = 1,
    robe = C.indigo,
    robeTrim = C.gold,
    armRaise = 0,
    beard = false,
    crown = false,
    name = "",
    breath = 0,
    kalamkari = "simple", // royal | sage | warrior | simple
    jewels = false,
    angavastram = false, // shoulder cloth
  } = opts;

  ctx.save();
  ctx.translate(x, y + breath);
  ctx.scale(scale, scale);

  // shadow on cloth
  ctx.beginPath();
  ctx.ellipse(0, 8, 42, 10, 0, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(40,20,10,0.25)";
  ctx.fill();

  const legPath = (side) => {
    const s = side;
    ctx.beginPath();
    ctx.moveTo(-16 * s, 0);
    ctx.lineTo(-22 * s, 70);
    ctx.lineTo(-8 * s, 70);
    ctx.lineTo(-4 * s, 10);
    ctx.closePath();
  };

  // legs + dhoti with kalamkari
  for (const side of [1, -1]) {
    legPath(side);
    fillStroke(robe, C.ink, 2.2);
    stampKalamkariInPath(() => legPath(side), { style: kalamkari, density: 0.6 });
    // ankle kadas
    if (jewels || kalamkari === "royal" || kalamkari === "warrior") {
      ctx.beginPath();
      ctx.ellipse(-15 * side, 66, 7, 3, 0, 0, Math.PI * 2);
      fillStroke(K.gold, K.black, 1);
    }
  }

  // dhoti panel
  const dhoti = () => {
    ctx.beginPath();
    ctx.moveTo(-28, 5);
    ctx.quadraticCurveTo(0, 28, 28, 5);
    ctx.lineTo(24, -15);
    ctx.lineTo(-24, -15);
    ctx.closePath();
  };
  dhoti();
  fillStroke(robe, C.ink, 2.2);
  stampKalamkariInPath(dhoti, { style: kalamkari });
  // dhoti border (zari / kalamkari edge)
  drawKalamkariBand(-26, -8, 52, 9, kalamkari === "sage" ? "lotus" : "paisley");

  // torso angarakha / jama
  const torso = () => {
    ctx.beginPath();
    ctx.moveTo(-26, -15);
    ctx.lineTo(-32, -78);
    ctx.lineTo(32, -78);
    ctx.lineTo(26, -15);
    ctx.closePath();
  };
  torso();
  fillStroke(robe, C.ink, 2.5);
  stampKalamkariInPath(torso, { style: kalamkari });

  // ornate neck yoke
  ctx.beginPath();
  ctx.moveTo(-30, -78);
  ctx.quadraticCurveTo(0, -62, 30, -78);
  ctx.lineTo(28, -72);
  ctx.quadraticCurveTo(0, -58, -28, -72);
  ctx.closePath();
  fillStroke(K.gold, K.black, 1.4);
  drawLotus(0, -70, 5, K.madder);

  // chest band (kamarband upper)
  drawKalamkariBand(-28, -48, 56, 11, kalamkari === "warrior" ? "eye" : "lotus");

  // angavastram (shawl drape)
  if (angavastram) {
    ctx.beginPath();
    ctx.moveTo(-34, -70);
    ctx.quadraticCurveTo(-50, -20, -30, 40);
    ctx.lineTo(-18, 38);
    ctx.quadraticCurveTo(-38, -20, -22, -68);
    ctx.closePath();
    fillStroke(K.ochre, K.black, 1.5);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(-34, -70);
    ctx.quadraticCurveTo(-50, -20, -30, 40);
    ctx.lineTo(-18, 38);
    ctx.quadraticCurveTo(-38, -20, -22, -68);
    ctx.closePath();
    ctx.clip();
    for (let i = 0; i < 5; i++) {
      drawPaisley(-32, -50 + i * 18, 0.4, 1, i % 2 ? K.madder : K.indigo);
    }
    ctx.restore();
  }

  // left arm + bangle
  ctx.save();
  ctx.translate(-28, -68);
  ctx.rotate(0.35);
  ctx.beginPath();
  roundRect(-8, 0, 16, 55, 7);
  fillStroke(C.skin, C.ink, 2);
  // armlet
  ctx.beginPath();
  ctx.ellipse(0, 18, 10, 4, 0, 0, Math.PI * 2);
  fillStroke(K.gold, K.black, 1);
  drawPaisley(0, 18, 0.25, 1, K.madder);
  ctx.beginPath();
  ctx.arc(0, 58, 8, 0, Math.PI * 2);
  fillStroke(C.skin, C.ink, 1.8);
  // wrist kada
  ctx.beginPath();
  ctx.ellipse(0, 52, 9, 3.5, 0, 0, Math.PI * 2);
  fillStroke(K.gold, K.black, 1);
  ctx.restore();

  // right arm
  ctx.save();
  ctx.translate(28, -68);
  ctx.rotate(-0.35 - armRaise * 1.35);
  ctx.beginPath();
  roundRect(-8, 0, 16, 55, 7);
  fillStroke(C.skin, C.ink, 2);
  ctx.beginPath();
  ctx.ellipse(0, 18, 10, 4, 0, 0, Math.PI * 2);
  fillStroke(K.gold, K.black, 1);
  ctx.beginPath();
  ctx.arc(0, 58, 8, 0, Math.PI * 2);
  fillStroke(C.skin, C.ink, 1.8);
  ctx.beginPath();
  ctx.ellipse(0, 52, 9, 3.5, 0, 0, Math.PI * 2);
  fillStroke(K.gold, K.black, 1);
  ctx.restore();

  // head
  ctx.beginPath();
  ctx.ellipse(0, -100, 24, 28, 0, 0, Math.PI * 2);
  fillStroke(C.skin, C.ink, 2.5);

  // hair / topknot
  ctx.beginPath();
  ctx.ellipse(0, -118, 22, 16, 0, Math.PI, Math.PI * 2);
  fillStroke(C.ink, C.ink, 1);
  ctx.beginPath();
  ctx.arc(0, -132, 10, 0, Math.PI * 2);
  fillStroke(C.ink, C.ink, 1);
  // hair jewel
  if (crown || jewels) {
    ctx.beginPath();
    ctx.arc(0, -132, 4, 0, Math.PI * 2);
    fillStroke(K.gold, K.black, 1);
    ctx.beginPath();
    ctx.arc(0, -132, 1.8, 0, Math.PI * 2);
    fillStroke(K.madder, null);
  }

  // eyes
  ctx.beginPath();
  ctx.ellipse(-7, -102, 5.5, 3.5, -0.15, 0, Math.PI * 2);
  fillStroke(C.white, C.ink, 1.2);
  ctx.beginPath();
  ctx.ellipse(7, -102, 5.5, 3.5, 0.15, 0, Math.PI * 2);
  fillStroke(C.white, C.ink, 1.2);
  ctx.beginPath();
  ctx.arc(-6, -102, 2.2, 0, Math.PI * 2);
  fillStroke(C.ink, null);
  ctx.beginPath();
  ctx.arc(6, -102, 2.2, 0, Math.PI * 2);
  fillStroke(C.ink, null);

  // tilak / urna
  ctx.beginPath();
  ctx.moveTo(0, -112);
  ctx.lineTo(-3.5, -98);
  ctx.lineTo(3.5, -98);
  ctx.closePath();
  fillStroke(C.vermillion, C.ink, 1);

  // earrings
  if (jewels || crown || kalamkari === "royal") {
    for (const sx of [-18, 18]) {
      ctx.beginPath();
      ctx.arc(sx, -95, 4, 0, Math.PI * 2);
      fillStroke(K.gold, K.black, 1);
      ctx.beginPath();
      ctx.arc(sx, -88, 3, 0, Math.PI * 2);
      fillStroke(K.madder, K.black, 0.8);
    }
  }

  // necklace
  if (jewels || kalamkari === "royal" || kalamkari === "warrior") {
    ctx.beginPath();
    ctx.arc(0, -78, 16, 0.2, Math.PI - 0.2);
    ctx.strokeStyle = K.gold;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, -76, 12, 0.3, Math.PI - 0.3);
    ctx.strokeStyle = K.madder;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    drawLotus(0, -68, 4, K.gold);
  }

  if (beard) {
    ctx.beginPath();
    ctx.moveTo(-14, -88);
    ctx.quadraticCurveTo(0, -68, 14, -88);
    ctx.quadraticCurveTo(0, -80, -14, -88);
    fillStroke(C.white, C.ink, 1.5);
  }

  if (crown) {
    // kirīṭa — multi-tier kalamkari crown
    ctx.beginPath();
    ctx.moveTo(-24, -118);
    ctx.lineTo(-22, -138);
    ctx.lineTo(-10, -150);
    ctx.lineTo(0, -162);
    ctx.lineTo(10, -150);
    ctx.lineTo(22, -138);
    ctx.lineTo(24, -118);
    ctx.closePath();
    fillStroke(K.gold, K.black, 2);
    // tiers
    ctx.beginPath();
    ctx.moveTo(-20, -128);
    ctx.lineTo(20, -128);
    ctx.strokeStyle = K.madder;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-16, -140);
    ctx.lineTo(16, -140);
    ctx.stroke();
    // peacock eyes on crown
    drawPeacockEye(-10, -136, 0.55);
    drawPeacockEye(10, -136, 0.55);
    drawLotus(0, -152, 6, K.madder);
    // hanging pearls
    for (const sx of [-18, -8, 8, 18]) {
      ctx.beginPath();
      ctx.arc(sx, -116, 2.2, 0, Math.PI * 2);
      fillStroke(K.cream, K.black, 0.7);
    }
  }

  // mouth
  ctx.beginPath();
  ctx.arc(0, -90, 5, 0.15, Math.PI - 0.15);
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  if (name) {
    // name plate with tiny border
    roundRect(-28, 82, 56, 16, 3);
    fillStroke("rgba(244,234,212,0.85)", K.gold, 1.2);
    ctx.fillStyle = C.ink;
    ctx.font = "600 11px 'DM Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name, 0, 90);
  }

  ctx.restore();
}

function drawBow(x, y, scale, drawAmt = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // Gāṇḍīva-inspired ornate bow
  ctx.beginPath();
  ctx.arc(0, 0, 48, -1.1, 1.1);
  ctx.strokeStyle = "#5a3018";
  ctx.lineWidth = 7;
  ctx.stroke();
  // gold kalamkari inlay line
  ctx.beginPath();
  ctx.arc(0, 0, 48, -1.1, 1.1);
  ctx.strokeStyle = K.gold;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 48, -1.1, 1.1);
  ctx.strokeStyle = K.black;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // grip with paisley wraps
  for (let i = -2; i <= 2; i++) {
    const a = i * 0.18;
    const gx = Math.cos(a) * 48;
    const gy = Math.sin(a) * 48;
    drawPaisley(gx * 0.15, gy, 0.28, 1, i % 2 ? K.madder : K.ochre);
  }
  // tip lotuses
  const t0x = Math.cos(-1.1) * 48;
  const t0y = Math.sin(-1.1) * 48;
  const t1x = Math.cos(1.1) * 48;
  const t1y = Math.sin(1.1) * 48;
  drawLotus(t0x, t0y, 5, K.gold);
  drawLotus(t1x, t1y, 5, K.gold);

  // string
  const pull = -12 - drawAmt * 18;
  ctx.beginPath();
  ctx.moveTo(t0x, t0y);
  ctx.lineTo(pull, 0);
  ctx.lineTo(t1x, t1y);
  ctx.strokeStyle = K.cream;
  ctx.lineWidth = 1.6;
  ctx.stroke();

  // arrow on string
  if (drawAmt > 0.05) {
    ctx.beginPath();
    ctx.moveTo(pull - 8, 0);
    ctx.lineTo(55, 0);
    ctx.strokeStyle = "#6a4428";
    ctx.lineWidth = 2.8;
    ctx.stroke();
    // shaft gold rings
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(pull + 10 + i * 14, 0, 2.5, 0, Math.PI * 2);
      fillStroke(K.gold, K.black, 0.7);
    }
    // tip
    ctx.beginPath();
    ctx.moveTo(58, 0);
    ctx.lineTo(48, -6);
    ctx.lineTo(48, 6);
    ctx.closePath();
    fillStroke("#c0c8d0", K.black, 1);
    // fletching peacock-hued
    ctx.beginPath();
    ctx.moveTo(pull - 6, 0);
    ctx.lineTo(pull - 18, -8);
    ctx.lineTo(pull - 2, 0);
    ctx.lineTo(pull - 18, 8);
    ctx.closePath();
    fillStroke(K.teal, K.black, 1);
  }
  ctx.restore();
}

function drawDronaStaff(x, y, breath = 0) {
  ctx.save();
  ctx.translate(x, y + breath);
  // bamboo/wood shaft with kalamkari bands
  ctx.beginPath();
  ctx.moveTo(0, 30);
  ctx.lineTo(6, -100);
  ctx.strokeStyle = "#6a4428";
  ctx.lineWidth = 6;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.strokeStyle = K.black;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  for (let i = 0; i < 5; i++) {
    const ty = 20 - i * 28;
    ctx.beginPath();
    ctx.ellipse(3, ty, 7, 3, 0.1, 0, Math.PI * 2);
    fillStroke(i % 2 ? K.gold : K.madder, K.black, 0.9);
  }
  // finial lotus + peacock
  drawLotus(7, -108, 9, K.gold);
  drawPeacockEye(7, -122, 0.7);
  ctx.restore();
}

function drawTree(x, y, sway = 0) {
  ctx.save();
  ctx.translate(x, y);

  // trunk with bark rings (textile tree)
  ctx.beginPath();
  ctx.moveTo(-18, 0);
  ctx.quadraticCurveTo(-8 + sway * 4, -120, -12 + sway * 6, -220);
  ctx.lineTo(14 + sway * 6, -220);
  ctx.quadraticCurveTo(12 + sway * 4, -120, 20, 0);
  ctx.closePath();
  fillStroke("#5a3820", C.ink, 2.5);
  for (let i = 0; i < 6; i++) {
    const ty = -20 - i * 32;
    ctx.beginPath();
    ctx.ellipse(0 + sway * 2, ty, 14 - i, 4, 0, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(26,16,8,0.45)";
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }

  // canopy clusters
  const clusters = [
    [0, -280, 70],
    [-55, -250, 55],
    [55, -255, 58],
    [-30, -310, 48],
    [35, -315, 50],
    [0, -340, 42],
  ];
  for (const [cx, cy, r] of clusters) {
    ctx.beginPath();
    ctx.arc(cx + sway * 8, cy, r, 0, Math.PI * 2);
    fillStroke(C.leaf, C.ink, 2.5);
    ctx.beginPath();
    ctx.arc(cx + sway * 8 - r * 0.2, cy - r * 0.15, r * 0.45, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(80,140,90,0.35)";
    ctx.fill();
  }

  // kalamkari leaf vines in canopy
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const lx = Math.cos(a) * 55 + sway * 8;
    const ly = -280 + Math.sin(a) * 40;
    drawPaisley(lx, ly, 0.35, i % 2 ? 1 : -1, i % 2 ? K.teal : K.ochre);
  }
  drawLotus(sway * 8, -300, 10, K.rose);

  ctx.strokeStyle = C.leafDark;
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const rr = 90 + (i % 3) * 12;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * 20 + sway * 8, -280 + Math.sin(a) * 15);
    ctx.quadraticCurveTo(
      Math.cos(a) * rr * 0.5 + sway * 8,
      -280 + Math.sin(a) * rr * 0.5,
      Math.cos(a) * rr + sway * 8,
      -280 + Math.sin(a) * rr * 0.7
    );
    ctx.stroke();
  }

  ctx.restore();
}

function drawBird(x, y, opts = {}) {
  const { eyeGlow = 0, hit = false, bob = 0 } = opts;
  ctx.save();
  ctx.translate(x, y + bob);

  // branch perch with kalamkari rings
  ctx.beginPath();
  ctx.moveTo(-40, 18);
  ctx.quadraticCurveTo(0, 28, 50, 14);
  ctx.strokeStyle = "#5a3820";
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 2;
  ctx.stroke();
  for (const bx of [-20, 0, 25]) {
    ctx.beginPath();
    ctx.ellipse(bx, 20, 5, 2.5, 0.1, 0, Math.PI * 2);
    fillStroke(K.gold, K.black, 0.7);
  }

  // body — peafowl-inspired kalamkari bird
  ctx.beginPath();
  ctx.ellipse(0, 0, 28, 18, -0.2, 0, Math.PI * 2);
  fillStroke(C.indigo, C.ink, 2.2);
  // breast buttas
  drawPaisley(-6, 2, 0.4, 1, K.madder);
  drawPaisley(4, 4, 0.32, -1, K.ochre);
  drawLotus(-2, -4, 4, K.gold);

  // wing with peacock-eye cascade
  ctx.beginPath();
  ctx.moveTo(-5, -5);
  ctx.quadraticCurveTo(-35, -25, -40, 5);
  ctx.quadraticCurveTo(-20, 10, -5, 5);
  ctx.closePath();
  fillStroke("#2a3a5a", C.ink, 2);
  drawPeacockEye(-22, -8, 0.75);
  drawPeacockEye(-30, 0, 0.55);

  // kalamkari tail train
  ctx.beginPath();
  ctx.moveTo(-24, 5);
  ctx.lineTo(-55, 12);
  ctx.lineTo(-62, 28);
  ctx.lineTo(-40, 22);
  ctx.lineTo(-20, 10);
  ctx.closePath();
  fillStroke(K.teal, C.ink, 1.8);
  drawPeacockEye(-48, 16, 0.7);
  drawPaisley(-38, 8, 0.35, 1, K.ochre);

  // head
  ctx.beginPath();
  ctx.ellipse(22, -10, 14, 12, 0.2, 0, Math.PI * 2);
  fillStroke(C.indigo, C.ink, 2);
  // crest
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(18 + i * 3, -20);
    ctx.quadraticCurveTo(16 + i * 4, -32, 20 + i * 3, -36);
    ctx.strokeStyle = K.teal;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(20 + i * 3, -36, 2, 0, Math.PI * 2);
    fillStroke(K.gold, K.black, 0.6);
  }

  // beak
  ctx.beginPath();
  ctx.moveTo(34, -8);
  ctx.lineTo(48, -4);
  ctx.lineTo(34, 0);
  ctx.closePath();
  fillStroke(C.saffron, C.ink, 1.5);

  // THE EYE — story climax motif
  const er = 7 + eyeGlow * 4;
  ctx.beginPath();
  ctx.arc(26, -12, er, 0, Math.PI * 2);
  fillStroke(C.white, C.ink, 2);

  // concentric painted rings (focus)
  if (eyeGlow > 0.2) {
    for (let i = 1; i <= 3; i++) {
      ctx.beginPath();
      ctx.arc(26, -12, er + i * 6 * eyeGlow, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(232, 197, 71, ${0.55 - i * 0.12})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  ctx.beginPath();
  ctx.arc(27, -12, 3.5 + eyeGlow, 0, Math.PI * 2);
  fillStroke(hit ? C.vermillion : C.ink, C.ink, 1);

  // highlight
  ctx.beginPath();
  ctx.arc(25, -14, 1.5, 0, Math.PI * 2);
  fillStroke(C.white, null);

  // feet
  ctx.beginPath();
  ctx.moveTo(-5, 16);
  ctx.lineTo(-8, 24);
  ctx.moveTo(5, 16);
  ctx.lineTo(8, 24);
  ctx.strokeStyle = C.saffron;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();
}

function drawGardenDecor() {
  // distant hills (stylized)
  ctx.beginPath();
  ctx.moveTo(60, 360);
  ctx.quadraticCurveTo(200, 280, 380, 350);
  ctx.quadraticCurveTo(500, 300, 650, 355);
  ctx.lineTo(650, 400);
  ctx.lineTo(60, 400);
  ctx.closePath();
  fillStroke("rgba(40,60,50,0.5)", C.ink, 2);

  ctx.beginPath();
  ctx.moveTo(900, 370);
  ctx.quadraticCurveTo(1100, 290, 1300, 360);
  ctx.quadraticCurveTo(1450, 320, 1540, 370);
  ctx.lineTo(1540, 410);
  ctx.lineTo(900, 410);
  ctx.closePath();
  fillStroke("rgba(50,40,60,0.4)", C.ink, 2);

  // sun / dusk disc with kalamkari rays
  ctx.beginPath();
  ctx.arc(200, 160, 42, 0, Math.PI * 2);
  fillStroke(C.saffron, C.ink, 2.5);
  ctx.beginPath();
  ctx.arc(200, 160, 28, 0, Math.PI * 2);
  fillStroke(C.gold, C.ink, 1.5);
  drawLotus(200, 160, 10, K.madder);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(200 + Math.cos(a) * 44, 160 + Math.sin(a) * 44);
    ctx.lineTo(200 + Math.cos(a) * 58, 160 + Math.sin(a) * 58);
    ctx.strokeStyle = K.ochre;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // decorative grass tufts
  ctx.strokeStyle = C.leafDark;
  ctx.lineWidth = 2;
  for (let i = 0; i < 40; i++) {
    const gx = 80 + i * 38 + (i % 3) * 7;
    const gy = 620 + (i % 5) * 18;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.quadraticCurveTo(gx - 6, gy - 18, gx + 2, gy - 32);
    ctx.moveTo(gx, gy);
    ctx.quadraticCurveTo(gx + 8, gy - 16, gx + 4, gy - 28);
    ctx.stroke();
  }

  // corner kalamkari panels (tree of life buttas)
  for (const [bx, by, flip] of [
    [140, 720, 1],
    [1460, 720, -1],
    [140, 200, 1],
    [1460, 200, -1],
  ]) {
    ctx.save();
    ctx.translate(bx, by);
    ctx.scale(flip, 1);
    drawPaisley(0, 0, 1.1, 1, K.madder);
    drawPaisley(18, -28, 0.75, -1, K.ochre);
    drawLotus(8, -50, 8, K.rose);
    drawVine(0, 10, 0, 50, 8);
    drawPeacockEye(-12, -20, 0.8);
    ctx.restore();
  }

  // ground border strip of buttas
  for (let x = 100; x < WORLD_W - 100; x += 48) {
    if (x > 450 && x < 700) continue;
    if (x > 1000 && x < 1300) continue;
    drawPaisley(x, 780, 0.45, (x / 48) % 2 ? 1 : -1, (x / 48) % 3 === 0 ? K.madder : K.indigo);
  }
}

function drawFlyingArrow(x0, y0, x1, y1, u) {
  if (u <= 0 || u > 1.05) return;
  const e = 1 - Math.pow(1 - Math.min(1, u), 2);
  const x = x0 + (x1 - x0) * e;
  const y = y0 + (y1 - y0) * e - Math.sin(e * Math.PI) * 60;
  const ang = Math.atan2(y1 - y0 - Math.cos(e * Math.PI) * 60 * 0.3, x1 - x0);

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang);
  // ornate shaft
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(28, 0);
  ctx.strokeStyle = "#6a4428";
  ctx.lineWidth = 3.2;
  ctx.stroke();
  ctx.strokeStyle = K.gold;
  ctx.lineWidth = 1.2;
  ctx.stroke();
  for (const rx of [-12, 0, 12]) {
    ctx.beginPath();
    ctx.arc(rx, 0, 2.2, 0, Math.PI * 2);
    fillStroke(K.madder, K.black, 0.6);
  }
  // tip
  ctx.beginPath();
  ctx.moveTo(30, 0);
  ctx.lineTo(18, -6);
  ctx.lineTo(18, 6);
  ctx.closePath();
  fillStroke("#c0c8d0", C.ink, 1);
  // peacock fletching
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(-40, -9);
  ctx.lineTo(-20, 0);
  ctx.lineTo(-40, 9);
  ctx.closePath();
  fillStroke(K.teal, C.ink, 1);
  drawPeacockEye(-34, 0, 0.45);
  // trail
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(-70, 4);
  ctx.strokeStyle = C.gold;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
}

// ── Scene state ────────────────────────────────────────────────
let playing = false;
let t = 0;
let lastBeatIdx = -1;
let ended = false;
let focus = 0;
let targetFocus = 0;
let armRaise = 0;
let targetArm = 0;
let arrowU = -1;
let birdHit = false;
let goldHour = 0;
let targetGold = 0;

const dust = Array.from({ length: 60 }, () => ({
  x: Math.random() * WORLD_W,
  y: Math.random() * WORLD_H,
  s: 1 + Math.random() * 2.5,
  v: 8 + Math.random() * 20,
  a: Math.random() * Math.PI * 2,
}));

function applyBeat(idx, { speak = true } = {}) {
  const b = EPISODE.beats[idx];
  if (!b) return;
  setCamera(b.cam);
  targetFocus = b.focus ?? 0;

  if (b.who || b.text) {
    dialogueEl.classList.remove("hidden");
    whoEl.textContent = b.who || "";
    lineEl.textContent = b.text || "";
  } else {
    dialogueEl.classList.add("hidden");
    katha.stop();
  }

  if (b.cam === "arjuna-bow" || b.cam === "arjuna-eye" || b.cam === "eye") {
    targetArm = 1;
  } else if (b.cam === "release") {
    targetArm = 0.3;
    if (arrowU < 0) arrowU = 0;
  } else if (b.cam === "wide-gold") {
    targetGold = 1;
    targetArm = 0;
  } else {
    targetArm = b.cam === "drona" ? 0.15 : 0;
  }

  // Kathavachak: speak line when the beat lands during play
  if (speak && playing && b.text) {
    katha.speak(b.who || "Narrator", b.text);
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
  focus = 0;
  targetFocus = 0;
  armRaise = 0;
  targetArm = 0;
  arrowU = -1;
  birdHit = false;
  goldHour = 0;
  targetGold = 0;
  katha.stop();
  endCard.classList.remove("show");
  btnPlay.textContent = "Play";
  setCamera("wide");
  cam.cx = camT.cx;
  cam.cy = camT.cy;
  cam.zoom = camT.zoom;
  applyBeat(0, { speak: false });
  lastBeatIdx = 0;
}

function fmt(sec) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

// ── Render world ───────────────────────────────────────────────
function renderWorld(now) {
  const breath = Math.sin(now * 0.0015) * 2.5;
  const sway = Math.sin(now * 0.0008) * 1.2;
  const bob = Math.sin(now * 0.002) * 3;

  drawClothBackground();

  // gold hour wash
  if (goldHour > 0.01) {
    ctx.save();
    ctx.globalAlpha = goldHour * 0.28;
    const g = ctx.createRadialGradient(200, 160, 20, 800, 400, 900);
    g.addColorStop(0, C.gold);
    g.addColorStop(0.5, C.saffron);
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, WORLD_W, WORLD_H);
    ctx.restore();
  }

  drawGardenDecor();
  drawTree(1080, 580, sway);

  // princes — each a different kalamkari field
  const princeStyles = [
    { robe: "#4a2030", kalamkari: "simple" },
    { robe: "#1a3a28", kalamkari: "warrior" },
    { robe: "#3a2a48", kalamkari: "simple" },
    { robe: "#4a3a18", kalamkari: "royal" },
  ];
  for (let i = 0; i < 4; i++) {
    drawFigure(480 + i * 55, 600 + (i % 2) * 8, {
      scale: 0.72,
      robe: princeStyles[i].robe,
      robeTrim: C.saffron,
      kalamkari: princeStyles[i].kalamkari,
      jewels: i === 3,
      breath: breath * 0.6 + i,
      armRaise: 0.05 * Math.sin(now * 0.002 + i),
    });
  }

  // Drona — sage kalamkari, angavastram, staff
  drawFigure(320, 580, {
    scale: 1.05,
    robe: C.indigoDeep,
    robeTrim: C.gold,
    beard: true,
    crown: false,
    name: "Drona",
    kalamkari: "sage",
    angavastram: true,
    jewels: true,
    breath,
    armRaise: 0.1 + Math.sin(now * 0.001) * 0.05,
  });
  drawDronaStaff(368, 530, breath);

  // Arjuna — royal warrior kalamkari, kirīṭa, Gāṇḍīva
  drawFigure(1220, 590, {
    scale: 1.0,
    robe: "#1e3a5f",
    robeTrim: C.gold,
    crown: true,
    name: "Arjuna",
    kalamkari: "warrior",
    jewels: true,
    angavastram: true,
    breath: breath * 0.9,
    armRaise,
  });
  drawBow(1285, 500 + breath * 0.9, 1.05, armRaise);

  // Bird
  const eyeGlow = Math.max(0, (focus - 0.55) / 0.45);
  drawBird(1180, 250, { eyeGlow, hit: birdHit, bob });

  // flying arrow path: from Arjuna bow to bird eye
  if (arrowU >= 0) {
    drawFlyingArrow(1285, 500, 1206, 238, arrowU);
  }

  // dust motes (gold flecks on cloth)
  ctx.save();
  for (const d of dust) {
    ctx.globalAlpha = 0.25 + focus * 0.35;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.s, 0, Math.PI * 2);
    ctx.fillStyle = C.gold;
    ctx.fill();
  }
  ctx.restore();

  drawOrnateBorder();

  // extreme eye medallion overlay when fully focused (pattachitra mandala feel)
  if (focus > 0.85) {
    const a = (focus - 0.85) / 0.15;
    ctx.save();
    ctx.globalAlpha = a * 0.9;
    ctx.translate(1180, 238);
    for (let i = 5; i >= 1; i--) {
      ctx.beginPath();
      ctx.arc(0, 0, 18 + i * 14, 0, Math.PI * 2);
      ctx.strokeStyle = i % 2 ? C.gold : C.vermillion;
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    fillStroke(C.white, C.ink, 3);
    ctx.beginPath();
    ctx.arc(2, 0, 7, 0, Math.PI * 2);
    fillStroke(birdHit ? C.vermillion : C.ink, C.ink, 1.5);
    ctx.restore();
  }
}

// ── Main frame ─────────────────────────────────────────────────
let lastTs = performance.now();

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

  // smooth camera
  const k = 1 - Math.exp(-2.4 * dt);
  cam.cx += (camT.cx - cam.cx) * k;
  cam.cy += (camT.cy - cam.cy) * k;
  cam.zoom += (camT.zoom - cam.zoom) * k;
  focus += (targetFocus - focus) * (1 - Math.exp(-1.8 * dt));
  armRaise += (targetArm - armRaise) * (1 - Math.exp(-2.5 * dt));
  goldHour += (targetGold - goldHour) * (1 - Math.exp(-1.2 * dt));

  // arrow flight
  if (arrowU >= 0 && arrowU < 1.1) {
    arrowU += dt * 0.75;
    if (arrowU >= 1 && !birdHit) birdHit = true;
  }

  // dust drift
  for (const d of dust) {
    d.y -= d.v * dt * 0.15;
    d.x += Math.sin(d.a + now * 0.001) * 8 * dt;
    if (d.y < 40) {
      d.y = WORLD_H - 40;
      d.x = Math.random() * WORLD_W;
    }
  }

  // ── draw ──
  // outer stage (deep indigo beyond cloth)
  ctx.fillStyle = "#07050c";
  ctx.fillRect(0, 0, W, H);

  // fit world into view with camera
  // base scale so world fits height with margin
  const baseScale = Math.min(W / WORLD_W, H / WORLD_H) * 0.98;
  const scale = baseScale * cam.zoom;
  const vx = W / 2 - cam.cx * scale;
  const vy = H / 2 - cam.cy * scale;

  ctx.save();
  ctx.translate(vx, vy);
  ctx.scale(scale, scale);
  renderWorld(now);
  ctx.restore();

  // soft vignette in screen space (focus deepens)
  const vig = 0.25 + focus * 0.45;
  const vg = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.15, W / 2, H / 2, Math.max(W, H) * 0.72);
  vg.addColorStop(0, "rgba(7,5,12,0)");
  vg.addColorStop(1, `rgba(7,5,12,${vig})`);
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W, H);

  // UI progress
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
      btnMute.textContent = "Drone ✓";
    } catch {
      /* autoplay */
    }
    // Speak current beat immediately on play/resume
    const b = EPISODE.beats[lastBeatIdx] || EPISODE.beats[0];
    if (b?.text) katha.speak(b.who || "Narrator", b.text);
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
    btnMute.textContent = "Drone ✓";
  } catch {
    /* ok */
  }
  const b = EPISODE.beats[0];
  if (b?.text) katha.speak(b.who || "Narrator", b.text);
  lastBeatIdx = 0;
});

btnReplay?.addEventListener("click", () => btnRestart.click());

btnMute.addEventListener("click", async () => {
  const on = await drone.toggle();
  btnMute.textContent = on ? "Drone ✓" : "Drone";
});

btnVoice?.addEventListener("click", () => {
  katha.setEnabled(!katha.on);
  syncVoiceBtn();
  if (katha.on && playing) {
    const b = EPISODE.beats[lastBeatIdx] || EPISODE.beats[0];
    if (b?.text) katha.speak(b.who || "Narrator", b.text);
  }
});

trackEl.addEventListener("click", (e) => {
  const rect = trackEl.getBoundingClientRect();
  const u = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  t = u * TOTAL;
  lastBeatIdx = -1;
  ended = false;
  endCard.classList.remove("show");
  arrowU = -1;
  birdHit = false;
  goldHour = 0;
  targetGold = 0;
  katha.stop();
  // re-apply state from scrub; speak if playing
  updateBeat(t, { speak: playing });
  if (t >= 66) {
    arrowU = Math.min(1, (t - 66) / 1.4);
    birdHit = arrowU >= 1;
  }
  if (t >= 76) targetGold = 1;
});

// boot
setCamera("wide");
applyBeat(0, { speak: false });
lastBeatIdx = 0;
syncVoiceBtn();
requestAnimationFrame(frame);
requestAnimationFrame(() => {
  setTimeout(() => loader.classList.add("done"), 350);
});

const params = new URLSearchParams(location.search);
if (params.get("auto") === "1") btnPlay.click();
