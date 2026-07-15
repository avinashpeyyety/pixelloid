/**
 * Mahābhārata player — 2D narrative cloth.
 * Figures in the spirit of Bapu (S.L. Narayana): soft elongated form,
 * large almond eyes, lyrical drapery. Beat-driven camera on the phad.
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

// ── Bapu-style figures (S.L. Narayana "Bapu" spirit) ───────────
// Soft elongated forms, lyrical outline, large almond eyes, gentle
// drapery — illustration language, not textile stamp. Palette warm & quiet.
const B = {
  ink: "#2a1810",
  softInk: "#4a3020",
  skin: "#e0b090",
  skinShadow: "#c49070",
  cream: "#f7edd8",
  saffron: "#e8a848",
  gold: "#d4a84a",
  blue: "#3a5a7a",
  blueSoft: "#5a7a9a",
  sage: "#4a6a58",
  rose: "#c07060",
  white: "#fff8f0",
};

function drawBorderMotif(x, y, size, gold) {
  // simple soft lotus — border only, not on costumes
  ctx.save();
  ctx.translate(x, y);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
    ctx.beginPath();
    ctx.ellipse(Math.cos(a) * size * 0.35, Math.sin(a) * size * 0.35, size * 0.32, size * 0.16, a, 0, Math.PI * 2);
    fillStroke(gold ? B.gold : B.rose, B.ink, 1.2);
  }
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
  fillStroke(B.cream, B.ink, 1);
  ctx.restore();
}

function drawClothBackground() {
  const grd = ctx.createLinearGradient(0, 0, 0, WORLD_H);
  grd.addColorStop(0, "#c4a878");
  grd.addColorStop(0.35, C.cloth);
  grd.addColorStop(0.7, "#b89060");
  grd.addColorStop(1, C.clothDark);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, WORLD_W, WORLD_H);

  for (let i = 0; i < 12; i++) {
    const x = (i / 12) * WORLD_W + Math.sin(i * 1.7) * 20;
    ctx.fillStyle = i % 2 === 0 ? "rgba(140,100,50,0.07)" : "rgba(220,190,130,0.05)";
    ctx.fillRect(x, 0, WORLD_W / 14, WORLD_H);
  }

  // soft sky wash (Bapu illustration atmosphere)
  const sky = ctx.createLinearGradient(0, 50, 0, 380);
  sky.addColorStop(0, "#6a8aaa");
  sky.addColorStop(0.45, "#8a9eb8");
  sky.addColorStop(0.8, "#c4a888");
  sky.addColorStop(1, "rgba(196,168,106,0)");
  ctx.fillStyle = sky;
  ctx.fillRect(40, 50, WORLD_W - 80, 320);

  const ground = ctx.createLinearGradient(0, 500, 0, WORLD_H - 40);
  ground.addColorStop(0, "rgba(90,120,70,0.28)");
  ground.addColorStop(0.4, "rgba(120,90,50,0.35)");
  ground.addColorStop(1, "rgba(70,50,30,0.4)");
  ctx.fillStyle = ground;
  ctx.fillRect(40, 500, WORLD_W - 80, WORLD_H - 540);

  ctx.save();
  ctx.globalAlpha = 0.28;
  ctx.fillStyle = ctx.createPattern(grainCanvas, "repeat");
  ctx.fillRect(0, 0, WORLD_W, WORLD_H);
  ctx.restore();
}

function drawOrnateBorder() {
  const m = 28;
  const m2 = 48;
  ctx.strokeStyle = C.border;
  ctx.lineWidth = 12;
  ctx.strokeRect(m, m, WORLD_W - m * 2, WORLD_H - m * 2);
  ctx.strokeStyle = C.borderGold;
  ctx.lineWidth = 3;
  ctx.strokeRect(m2, m2, WORLD_W - m2 * 2, WORLD_H - m2 * 2);
  ctx.strokeStyle = C.vermillion;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(m2 + 8, m2 + 8, WORLD_W - (m2 + 8) * 2, WORLD_H - (m2 + 8) * 2);

  const corners = [
    [70, 70],
    [WORLD_W - 70, 70],
    [70, WORLD_H - 70],
    [WORLD_W - 70, WORLD_H - 70],
  ];
  for (const [x, y] of corners) drawBorderMotif(x, y, 16, true);
  for (let x = 120; x < WORLD_W - 120; x += 64) {
    drawBorderMotif(x, 38, 7, x % 128 < 64);
    drawBorderMotif(x, WORLD_H - 38, 7, x % 128 >= 64);
  }

  ctx.save();
  roundRect(WORLD_W / 2 - 160, 56, 320, 40, 6);
  fillStroke("rgba(42,24,16,0.88)", B.gold, 1.8);
  ctx.fillStyle = B.gold;
  ctx.font = "600 15px 'Cormorant Garamond', Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("आदिपर्व · पक्षिणश्चक्षुः", WORLD_W / 2, 70);
  ctx.font = "500 10px 'DM Sans', sans-serif";
  ctx.fillStyle = "rgba(232,200,120,0.85)";
  ctx.fillText("in the line of Bapu", WORLD_W / 2, 84);
  ctx.restore();
}

/**
 * Bapu figure: lyrical silhouette, large soft eyes, flowing dhoti,
 * minimal jewelry — character through gesture and face, not pattern.
 */
function drawFigure(x, y, opts = {}) {
  const {
    scale = 1,
    robe = B.blue,
    robeLight = null,
    armRaise = 0,
    beard = false,
    crown = false,
    name = "",
    breath = 0,
    sage = false,
    young = false,
  } = opts;
  const light = robeLight || robe;

  ctx.save();
  ctx.translate(x, y + breath);
  ctx.scale(scale, scale);

  // soft ground shadow
  ctx.beginPath();
  ctx.ellipse(0, 10, 38, 9, 0, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(40,24,12,0.18)";
  ctx.fill();

  // legs — slender, slightly curved (Bapu elongation)
  const drawLeg = (sx) => {
    ctx.beginPath();
    ctx.moveTo(sx * 10, 5);
    ctx.quadraticCurveTo(sx * 18, 35, sx * 14, 72);
    ctx.lineTo(sx * 4, 72);
    ctx.quadraticCurveTo(sx * 8, 35, sx * 4, 8);
    ctx.closePath();
    fillStroke(robe, B.ink, 2);
    // soft fold line
    ctx.beginPath();
    ctx.moveTo(sx * 8, 20);
    ctx.quadraticCurveTo(sx * 12, 40, sx * 10, 65);
    ctx.strokeStyle = "rgba(42,24,16,0.25)";
    ctx.lineWidth = 1.2;
    ctx.stroke();
  };
  drawLeg(-1);
  drawLeg(1);

  // dhoti — soft flowing panel, simple folds
  ctx.beginPath();
  ctx.moveTo(-30, -8);
  ctx.quadraticCurveTo(-34, 20, -22, 48);
  ctx.quadraticCurveTo(0, 58, 22, 48);
  ctx.quadraticCurveTo(34, 20, 30, -8);
  ctx.quadraticCurveTo(0, 8, -30, -8);
  ctx.closePath();
  const dhotiG = ctx.createLinearGradient(-30, -10, 30, 50);
  dhotiG.addColorStop(0, light);
  dhotiG.addColorStop(0.5, robe);
  dhotiG.addColorStop(1, light);
  fillStroke(dhotiG, B.ink, 2.2);
  // three soft fold arcs
  for (const fy of [8, 22, 36]) {
    ctx.beginPath();
    ctx.moveTo(-22, fy);
    ctx.quadraticCurveTo(0, fy + 10, 22, fy);
    ctx.strokeStyle = "rgba(42,24,16,0.22)";
    ctx.lineWidth = 1.3;
    ctx.stroke();
  }
  // waist cord
  ctx.beginPath();
  ctx.moveTo(-28, -6);
  ctx.quadraticCurveTo(0, 4, 28, -6);
  ctx.strokeStyle = B.gold;
  ctx.lineWidth = 2;
  ctx.stroke();

  // torso — soft rounded chest, elegant slope
  ctx.beginPath();
  ctx.moveTo(-24, -10);
  ctx.quadraticCurveTo(-32, -45, -26, -82);
  ctx.quadraticCurveTo(0, -90, 26, -82);
  ctx.quadraticCurveTo(32, -45, 24, -10);
  ctx.quadraticCurveTo(0, -4, -24, -10);
  ctx.closePath();
  const torsoG = ctx.createLinearGradient(0, -90, 0, -5);
  torsoG.addColorStop(0, light);
  torsoG.addColorStop(1, robe);
  fillStroke(torsoG, B.ink, 2.2);

  // soft chest highlight
  ctx.beginPath();
  ctx.ellipse(-6, -50, 10, 16, -0.2, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,248,240,0.12)";
  ctx.fill();

  // angavastram for sage — simple drape, no buttas
  if (sage) {
    ctx.beginPath();
    ctx.moveTo(-28, -78);
    ctx.quadraticCurveTo(-48, -30, -28, 30);
    ctx.lineTo(-16, 28);
    ctx.quadraticCurveTo(-34, -30, -16, -74);
    ctx.closePath();
    fillStroke(B.cream, B.ink, 1.8);
    ctx.beginPath();
    ctx.moveTo(-36, -50);
    ctx.quadraticCurveTo(-30, -20, -24, 10);
    ctx.strokeStyle = "rgba(42,24,16,0.2)";
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }

  // thin sacred thread
  ctx.beginPath();
  ctx.moveTo(-12, -78);
  ctx.quadraticCurveTo(8, -40, 14, -12);
  ctx.strokeStyle = "rgba(247,237,216,0.7)";
  ctx.lineWidth = 1.4;
  ctx.stroke();

  // arms — graceful curves
  const drawArm = (side, raise) => {
    ctx.save();
    ctx.translate(side * 26, -72);
    ctx.rotate(side * (0.4 - raise * 1.2));
    // upper
    ctx.beginPath();
    ctx.ellipse(0, 18, 7, 20, 0, 0, Math.PI * 2);
    fillStroke(B.skin, B.ink, 1.8);
    // forearm
    ctx.beginPath();
    ctx.ellipse(0, 42, 6, 16, 0.1 * side, 0, Math.PI * 2);
    fillStroke(B.skin, B.ink, 1.8);
    // hand
    ctx.beginPath();
    ctx.ellipse(0, 58, 7, 6, 0, 0, Math.PI * 2);
    fillStroke(B.skin, B.ink, 1.6);
    // simple thin bangle
    if (crown || young) {
      ctx.beginPath();
      ctx.ellipse(0, 50, 8, 3, 0, 0, Math.PI * 2);
      ctx.strokeStyle = B.gold;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    ctx.restore();
  };
  drawArm(-1, 0.05);
  drawArm(1, armRaise);

  // neck
  ctx.beginPath();
  ctx.ellipse(0, -88, 8, 10, 0, 0, Math.PI * 2);
  fillStroke(B.skin, B.ink, 1.5);

  // head — slightly large, soft oval (Bapu signature)
  ctx.beginPath();
  ctx.ellipse(0, -112, 26, 30, 0, 0, Math.PI * 2);
  fillStroke(B.skin, B.ink, 2.2);
  // cheek soft shadow
  ctx.beginPath();
  ctx.ellipse(10, -105, 8, 10, 0.3, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(196,144,112,0.35)";
  ctx.fill();

  // hair — soft mass + topknot
  ctx.beginPath();
  ctx.ellipse(0, -128, 24, 16, 0, Math.PI * 1.05, Math.PI * 1.95);
  fillStroke(B.ink, B.ink, 1);
  ctx.beginPath();
  ctx.ellipse(0, -142, 11, 10, 0, 0, Math.PI * 2);
  fillStroke(B.ink, B.ink, 1);
  // soft hairline
  ctx.beginPath();
  ctx.moveTo(-20, -120);
  ctx.quadraticCurveTo(0, -112, 20, -120);
  ctx.strokeStyle = B.ink;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // EYES — large almond, thick upper lid, soft lower (Bapu hallmark)
  const drawEye = (ex) => {
    // white
    ctx.beginPath();
    ctx.ellipse(ex, -112, 8, 5.5, ex > 0 ? 0.12 : -0.12, 0, Math.PI * 2);
    fillStroke(B.white, B.ink, 1.3);
    // iris
    ctx.beginPath();
    ctx.arc(ex + (ex > 0 ? 1 : -1), -112, 3.2, 0, Math.PI * 2);
    fillStroke("#3a2818", null);
    // pupil
    ctx.beginPath();
    ctx.arc(ex + (ex > 0 ? 1.2 : -1.2), -112, 1.5, 0, Math.PI * 2);
    fillStroke(B.ink, null);
    // spark
    ctx.beginPath();
    ctx.arc(ex + (ex > 0 ? 0 : -2), -113.5, 1, 0, Math.PI * 2);
    fillStroke(B.white, null);
    // thick upper lid curve
    ctx.beginPath();
    ctx.moveTo(ex - 8, -112);
    ctx.quadraticCurveTo(ex, -120, ex + 8, -112);
    ctx.strokeStyle = B.ink;
    ctx.lineWidth = 2.4;
    ctx.lineCap = "round";
    ctx.stroke();
    // soft brow
    ctx.beginPath();
    ctx.moveTo(ex - 9, -120);
    ctx.quadraticCurveTo(ex, -126, ex + 8, -121);
    ctx.strokeStyle = B.softInk;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  };
  drawEye(-9);
  drawEye(9);

  // nose — soft curve
  ctx.beginPath();
  ctx.moveTo(0, -112);
  ctx.quadraticCurveTo(3, -104, 1, -98);
  ctx.strokeStyle = B.softInk;
  ctx.lineWidth = 1.4;
  ctx.stroke();

  // gentle smile
  ctx.beginPath();
  ctx.moveTo(-7, -92);
  ctx.quadraticCurveTo(0, -87, 7, -92);
  ctx.strokeStyle = B.softInk;
  ctx.lineWidth = 1.6;
  ctx.lineCap = "round";
  ctx.stroke();

  // tilak — soft vertical
  ctx.beginPath();
  ctx.moveTo(0, -122);
  ctx.lineTo(0, -106);
  ctx.strokeStyle = C.vermillion;
  ctx.lineWidth = 2.2;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, -124, 2, 0, Math.PI * 2);
  fillStroke(C.vermillion, null);

  if (beard) {
    ctx.beginPath();
    ctx.moveTo(-16, -96);
    ctx.quadraticCurveTo(0, -78, 16, -96);
    ctx.quadraticCurveTo(0, -88, -16, -96);
    fillStroke(B.cream, B.ink, 1.4);
  }

  // thin earrings (young / crown)
  if (crown || young) {
    for (const sx of [-22, 22]) {
      ctx.beginPath();
      ctx.arc(sx, -100, 3, 0, Math.PI * 2);
      fillStroke(B.gold, B.ink, 1);
      ctx.beginPath();
      ctx.moveTo(sx, -97);
      ctx.lineTo(sx, -90);
      ctx.strokeStyle = B.gold;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  }

  // simple necklace line
  if (crown || young) {
    ctx.beginPath();
    ctx.arc(0, -82, 14, 0.25, Math.PI - 0.25);
    ctx.strokeStyle = B.gold;
    ctx.lineWidth = 1.8;
    ctx.stroke();
  }

  if (crown) {
    // elegant tall mukuta — clean silhouette, not busy
    ctx.beginPath();
    ctx.moveTo(-20, -130);
    ctx.quadraticCurveTo(-18, -155, 0, -168);
    ctx.quadraticCurveTo(18, -155, 20, -130);
    ctx.lineTo(16, -128);
    ctx.quadraticCurveTo(0, -148, -16, -128);
    ctx.closePath();
    const cg = ctx.createLinearGradient(0, -168, 0, -128);
    cg.addColorStop(0, B.gold);
    cg.addColorStop(1, B.saffron);
    fillStroke(cg, B.ink, 1.8);
    // single jewel
    ctx.beginPath();
    ctx.arc(0, -148, 4, 0, Math.PI * 2);
    fillStroke(C.vermillion, B.ink, 1);
    ctx.beginPath();
    ctx.arc(0, -148, 1.5, 0, Math.PI * 2);
    fillStroke(B.cream, null);
  }

  if (name) {
    ctx.fillStyle = B.ink;
    ctx.font = "600 11px 'DM Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(name, 0, 92);
  }

  ctx.restore();
}

function drawBow(x, y, scale, drawAmt = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  // simple elegant bow — clean curve
  ctx.beginPath();
  ctx.arc(0, 0, 50, -1.05, 1.05);
  ctx.strokeStyle = "#6a3a20";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 50, -1.05, 1.05);
  ctx.strokeStyle = B.ink;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // soft grip mark
  ctx.beginPath();
  ctx.arc(0, 0, 8, 0, Math.PI * 2);
  fillStroke("#8a5a30", B.ink, 1);

  const t0x = Math.cos(-1.05) * 50;
  const t0y = Math.sin(-1.05) * 50;
  const t1x = Math.cos(1.05) * 50;
  const t1y = Math.sin(1.05) * 50;
  const pull = -10 - drawAmt * 18;
  ctx.beginPath();
  ctx.moveTo(t0x, t0y);
  ctx.lineTo(pull, 0);
  ctx.lineTo(t1x, t1y);
  ctx.strokeStyle = B.cream;
  ctx.lineWidth = 1.4;
  ctx.stroke();

  if (drawAmt > 0.05) {
    ctx.beginPath();
    ctx.moveTo(pull - 6, 0);
    ctx.lineTo(58, 0);
    ctx.strokeStyle = "#6a4428";
    ctx.lineWidth = 2.4;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(58, 0);
    ctx.lineTo(48, -5);
    ctx.lineTo(48, 5);
    ctx.closePath();
    fillStroke("#b0b8c0", B.ink, 1);
    ctx.beginPath();
    ctx.moveTo(pull - 4, 0);
    ctx.lineTo(pull - 14, -6);
    ctx.lineTo(pull - 2, 0);
    ctx.lineTo(pull - 14, 6);
    ctx.closePath();
    fillStroke(B.rose, B.ink, 1);
  }
  ctx.restore();
}

function drawDronaStaff(x, y, breath = 0) {
  ctx.save();
  ctx.translate(x, y + breath);
  ctx.beginPath();
  ctx.moveTo(0, 28);
  ctx.lineTo(4, -95);
  ctx.strokeStyle = "#7a5030";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.strokeStyle = B.ink;
  ctx.lineWidth = 1.3;
  ctx.stroke();
  // simple rounded finial
  ctx.beginPath();
  ctx.arc(5, -100, 7, 0, Math.PI * 2);
  fillStroke(B.gold, B.ink, 1.4);
  ctx.restore();
}

function drawTree(x, y, sway = 0) {
  ctx.save();
  ctx.translate(x, y);
  // soft trunk
  ctx.beginPath();
  ctx.moveTo(-16, 0);
  ctx.quadraticCurveTo(-6 + sway * 4, -110, -10 + sway * 6, -210);
  ctx.lineTo(12 + sway * 6, -210);
  ctx.quadraticCurveTo(10 + sway * 4, -110, 18, 0);
  ctx.closePath();
  fillStroke("#6a4830", B.ink, 2);

  // soft cloud canopy (Bapu trees are rounded masses)
  const clusters = [
    [0, -270, 72],
    [-50, -245, 52],
    [52, -248, 54],
    [-28, -305, 44],
    [30, -308, 46],
    [0, -330, 40],
  ];
  for (const [cx, cy, r] of clusters) {
    ctx.beginPath();
    ctx.arc(cx + sway * 7, cy, r, 0, Math.PI * 2);
    fillStroke("#3d6a48", B.ink, 2);
    ctx.beginPath();
    ctx.arc(cx + sway * 7 - r * 0.25, cy - r * 0.2, r * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(120,180,110,0.3)";
    ctx.fill();
  }
  ctx.restore();
}

function drawBird(x, y, opts = {}) {
  const { eyeGlow = 0, hit = false, bob = 0 } = opts;
  ctx.save();
  ctx.translate(x, y + bob);

  // perch
  ctx.beginPath();
  ctx.moveTo(-36, 16);
  ctx.quadraticCurveTo(0, 24, 44, 12);
  ctx.strokeStyle = "#6a4830";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();

  // soft body
  ctx.beginPath();
  ctx.ellipse(0, 0, 26, 16, -0.15, 0, Math.PI * 2);
  fillStroke(B.blue, B.ink, 2);
  // wing
  ctx.beginPath();
  ctx.moveTo(-4, -4);
  ctx.quadraticCurveTo(-32, -20, -36, 4);
  ctx.quadraticCurveTo(-18, 8, -4, 4);
  ctx.closePath();
  fillStroke(B.blueSoft, B.ink, 1.8);
  // tail soft
  ctx.beginPath();
  ctx.moveTo(-22, 4);
  ctx.quadraticCurveTo(-48, 10, -50, 22);
  ctx.quadraticCurveTo(-36, 16, -18, 8);
  ctx.closePath();
  fillStroke(B.saffron, B.ink, 1.6);

  // head — slightly large, soft
  ctx.beginPath();
  ctx.ellipse(20, -8, 13, 12, 0.15, 0, Math.PI * 2);
  fillStroke(B.blue, B.ink, 2);

  // beak
  ctx.beginPath();
  ctx.moveTo(30, -6);
  ctx.lineTo(44, -2);
  ctx.lineTo(30, 2);
  ctx.closePath();
  fillStroke(B.saffron, B.ink, 1.3);

  // THE EYE — Bapu-scale almond on bird
  const er = 7 + eyeGlow * 5;
  ctx.beginPath();
  ctx.ellipse(24, -10, er, er * 0.85, 0.1, 0, Math.PI * 2);
  fillStroke(B.white, B.ink, 2);
  if (eyeGlow > 0.15) {
    for (let i = 1; i <= 3; i++) {
      ctx.beginPath();
      ctx.arc(24, -10, er + i * 5 * eyeGlow, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(212, 168, 74, ${0.5 - i * 0.1})`;
      ctx.lineWidth = 1.8;
      ctx.stroke();
    }
  }
  ctx.beginPath();
  ctx.arc(25, -10, 3 + eyeGlow, 0, Math.PI * 2);
  fillStroke(hit ? C.vermillion : B.ink, B.ink, 1);
  ctx.beginPath();
  ctx.arc(23.5, -11.5, 1.2, 0, Math.PI * 2);
  fillStroke(B.white, null);

  // thick upper lid
  ctx.beginPath();
  ctx.moveTo(24 - er, -10);
  ctx.quadraticCurveTo(24, -10 - er * 0.9, 24 + er, -10);
  ctx.strokeStyle = B.ink;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();
}

function drawGardenDecor() {
  // soft distant hills
  ctx.beginPath();
  ctx.moveTo(60, 360);
  ctx.quadraticCurveTo(220, 290, 400, 350);
  ctx.quadraticCurveTo(520, 310, 660, 355);
  ctx.lineTo(660, 400);
  ctx.lineTo(60, 400);
  ctx.closePath();
  fillStroke("rgba(70,100,80,0.4)", B.ink, 1.8);

  ctx.beginPath();
  ctx.moveTo(900, 365);
  ctx.quadraticCurveTo(1100, 295, 1300, 355);
  ctx.quadraticCurveTo(1450, 320, 1540, 365);
  ctx.lineTo(1540, 405);
  ctx.lineTo(900, 405);
  ctx.closePath();
  fillStroke("rgba(80,70,90,0.32)", B.ink, 1.8);

  // soft sun
  ctx.beginPath();
  ctx.arc(200, 155, 38, 0, Math.PI * 2);
  fillStroke(B.saffron, B.ink, 2);
  ctx.beginPath();
  ctx.arc(200, 155, 24, 0, Math.PI * 2);
  fillStroke(B.gold, null);

  // grass strokes
  ctx.strokeStyle = "rgba(50,80,45,0.55)";
  ctx.lineWidth = 1.8;
  ctx.lineCap = "round";
  for (let i = 0; i < 36; i++) {
    const gx = 90 + i * 42;
    const gy = 630 + (i % 4) * 16;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.quadraticCurveTo(gx - 5, gy - 16, gx + 2, gy - 28);
    ctx.stroke();
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
  ctx.beginPath();
  ctx.moveTo(-26, 0);
  ctx.lineTo(28, 0);
  ctx.strokeStyle = "#6a4428";
  ctx.lineWidth = 2.6;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(28, 0);
  ctx.lineTo(18, -5);
  ctx.lineTo(18, 5);
  ctx.closePath();
  fillStroke("#b0b8c0", B.ink, 1);
  ctx.beginPath();
  ctx.moveTo(-26, 0);
  ctx.lineTo(-34, -6);
  ctx.lineTo(-20, 0);
  ctx.lineTo(-34, 6);
  ctx.closePath();
  fillStroke(B.rose, B.ink, 1);
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.moveTo(-26, 0);
  ctx.lineTo(-65, 3);
  ctx.strokeStyle = B.gold;
  ctx.lineWidth = 1.8;
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

  // princes — soft Bapu silhouettes
  const princeRobes = [
    { robe: "#6a4050", light: "#8a6070" },
    { robe: "#3a5a48", light: "#5a7a68" },
    { robe: "#4a4060", light: "#6a6080" },
    { robe: "#6a5030", light: "#8a7050" },
  ];
  for (let i = 0; i < 4; i++) {
    drawFigure(480 + i * 55, 600 + (i % 2) * 8, {
      scale: 0.72,
      robe: princeRobes[i].robe,
      robeLight: princeRobes[i].light,
      young: true,
      breath: breath * 0.6 + i,
      armRaise: 0.05 * Math.sin(now * 0.002 + i),
    });
  }

  // Drona — sage, flowing angavastram
  drawFigure(320, 580, {
    scale: 1.05,
    robe: "#2a3848",
    robeLight: "#4a5868",
    beard: true,
    sage: true,
    name: "Drona",
    breath,
    armRaise: 0.1 + Math.sin(now * 0.001) * 0.05,
  });
  drawDronaStaff(368, 530, breath);

  // Arjuna — young prince, clean crown, bow
  drawFigure(1220, 590, {
    scale: 1.0,
    robe: "#2a4a68",
    robeLight: "#4a6a88",
    crown: true,
    young: true,
    name: "Arjuna",
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

  // focus medallion — soft rings on the eye
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
