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
const btnReplay = document.getElementById("btn-replay");
const loader = document.getElementById("loader");
const endCard = document.getElementById("end-card");
const epTitle = document.getElementById("ep-title");
const epSub = document.getElementById("ep-sub");

epTitle.textContent = EPISODE.title;
epSub.textContent = EPISODE.subtitle;

const TOTAL = EPISODE.totalSec;

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

function drawBorderMotif(x, y, size, gold) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? size : size * 0.45;
    const px = Math.cos(a) * r;
    const py = Math.sin(a) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  fillStroke(gold ? C.gold : C.vermillion, C.ink, 1.5);
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.18, 0, Math.PI * 2);
  fillStroke(C.white, C.ink, 1);
  ctx.restore();
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
  roundRect(WORLD_W / 2 - 160, 58, 320, 36, 4);
  fillStroke(C.indigoDeep, C.gold, 2);
  ctx.fillStyle = C.gold;
  ctx.font = "600 15px 'Cormorant Garamond', Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("आदिपर्व · पक्षिणश्चक्षुः", WORLD_W / 2, 76);
  ctx.restore();
}

// ── Figures (flat tapestry puppets) ────────────────────────────
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
  } = opts;

  ctx.save();
  ctx.translate(x, y + breath);
  ctx.scale(scale, scale);

  // shadow on cloth
  ctx.beginPath();
  ctx.ellipse(0, 8, 42, 10, 0, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(40,20,10,0.25)";
  ctx.fill();

  // legs
  ctx.beginPath();
  ctx.moveTo(-16, 0);
  ctx.lineTo(-22, 70);
  ctx.lineTo(-8, 70);
  ctx.lineTo(-4, 10);
  ctx.closePath();
  fillStroke(robe, C.ink, 2.2);

  ctx.beginPath();
  ctx.moveTo(16, 0);
  ctx.lineTo(22, 70);
  ctx.lineTo(8, 70);
  ctx.lineTo(4, 10);
  ctx.closePath();
  fillStroke(robe, C.ink, 2.2);

  // dhoti panel
  ctx.beginPath();
  ctx.moveTo(-28, 5);
  ctx.quadraticCurveTo(0, 25, 28, 5);
  ctx.lineTo(22, -15);
  ctx.lineTo(-22, -15);
  ctx.closePath();
  fillStroke(robe, C.ink, 2.2);

  // torso
  ctx.beginPath();
  ctx.moveTo(-26, -15);
  ctx.lineTo(-30, -75);
  ctx.lineTo(30, -75);
  ctx.lineTo(26, -15);
  ctx.closePath();
  fillStroke(robe, C.ink, 2.5);

  // chest band
  ctx.beginPath();
  ctx.moveTo(-28, -50);
  ctx.lineTo(28, -50);
  ctx.lineTo(26, -42);
  ctx.lineTo(-26, -42);
  ctx.closePath();
  fillStroke(robeTrim, C.ink, 1.5);

  // left arm
  ctx.save();
  ctx.translate(-28, -68);
  ctx.rotate(0.35);
  ctx.beginPath();
  roundRect(-8, 0, 16, 55, 7);
  fillStroke(C.skin, C.ink, 2);
  ctx.beginPath();
  ctx.arc(0, 58, 8, 0, Math.PI * 2);
  fillStroke(C.skin, C.ink, 1.8);
  ctx.restore();

  // right arm (bow raise)
  ctx.save();
  ctx.translate(28, -68);
  ctx.rotate(-0.35 - armRaise * 1.35);
  ctx.beginPath();
  roundRect(-8, 0, 16, 55, 7);
  fillStroke(C.skin, C.ink, 2);
  ctx.beginPath();
  ctx.arc(0, 58, 8, 0, Math.PI * 2);
  fillStroke(C.skin, C.ink, 1.8);
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

  // eyes (front ¾, painted almond)
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

  // tilak
  ctx.beginPath();
  ctx.moveTo(0, -112);
  ctx.lineTo(-3, -100);
  ctx.lineTo(3, -100);
  ctx.closePath();
  fillStroke(C.vermillion, C.ink, 1);

  if (beard) {
    ctx.beginPath();
    ctx.moveTo(-14, -88);
    ctx.quadraticCurveTo(0, -68, 14, -88);
    ctx.quadraticCurveTo(0, -80, -14, -88);
    fillStroke(C.white, C.ink, 1.5);
  }

  if (crown) {
    ctx.beginPath();
    ctx.moveTo(-20, -122);
    ctx.lineTo(-16, -145);
    ctx.lineTo(0, -155);
    ctx.lineTo(16, -145);
    ctx.lineTo(20, -122);
    ctx.closePath();
    fillStroke(C.gold, C.ink, 2);
    ctx.beginPath();
    ctx.arc(0, -148, 5, 0, Math.PI * 2);
    fillStroke(C.vermillion, C.ink, 1);
  }

  // mouth
  ctx.beginPath();
  ctx.arc(0, -90, 5, 0.15, Math.PI - 0.15);
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  if (name) {
    ctx.fillStyle = C.ink;
    ctx.font = "600 11px 'DM Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(name, 0, 95);
  }

  ctx.restore();
}

function drawBow(x, y, scale, drawAmt = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  // bow arc
  ctx.beginPath();
  ctx.arc(0, 0, 48, -1.1, 1.1);
  ctx.strokeStyle = C.clothDark;
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 48, -1.1, 1.1);
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 2;
  ctx.stroke();
  // string
  const pull = -12 - drawAmt * 18;
  ctx.beginPath();
  ctx.moveTo(Math.cos(-1.1) * 48, Math.sin(-1.1) * 48);
  ctx.lineTo(pull, 0);
  ctx.lineTo(Math.cos(1.1) * 48, Math.sin(1.1) * 48);
  ctx.strokeStyle = C.white;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // arrow on string
  if (drawAmt > 0.05) {
    ctx.beginPath();
    ctx.moveTo(pull - 8, 0);
    ctx.lineTo(55, 0);
    ctx.strokeStyle = C.ash;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    // tip
    ctx.beginPath();
    ctx.moveTo(55, 0);
    ctx.lineTo(48, -5);
    ctx.lineTo(48, 5);
    ctx.closePath();
    fillStroke("#a8b0b8", C.ink, 1);
  }
  ctx.restore();
}

function drawTree(x, y, sway = 0) {
  ctx.save();
  ctx.translate(x, y);

  // trunk
  ctx.beginPath();
  ctx.moveTo(-18, 0);
  ctx.quadraticCurveTo(-8 + sway * 4, -120, -12 + sway * 6, -220);
  ctx.lineTo(14 + sway * 6, -220);
  ctx.quadraticCurveTo(12 + sway * 4, -120, 20, 0);
  ctx.closePath();
  fillStroke("#5a3820", C.ink, 2.5);

  // canopy clusters (pattachitra leaf masses)
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
    // inner highlight leaf marks
    ctx.beginPath();
    ctx.arc(cx + sway * 8 - r * 0.2, cy - r * 0.15, r * 0.45, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(80,140,90,0.35)";
    ctx.fill();
  }

  // decorative leaf strokes
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

  // branch perch
  ctx.beginPath();
  ctx.moveTo(-40, 18);
  ctx.quadraticCurveTo(0, 28, 50, 14);
  ctx.strokeStyle = "#5a3820";
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 2;
  ctx.stroke();

  // body
  ctx.beginPath();
  ctx.ellipse(0, 0, 28, 18, -0.2, 0, Math.PI * 2);
  fillStroke(C.indigo, C.ink, 2.2);

  // wing
  ctx.beginPath();
  ctx.moveTo(-5, -5);
  ctx.quadraticCurveTo(-35, -25, -40, 5);
  ctx.quadraticCurveTo(-20, 10, -5, 5);
  ctx.closePath();
  fillStroke("#2a3a5a", C.ink, 2);

  // tail
  ctx.beginPath();
  ctx.moveTo(-24, 5);
  ctx.lineTo(-48, 18);
  ctx.lineTo(-40, 22);
  ctx.lineTo(-20, 10);
  ctx.closePath();
  fillStroke(C.saffron, C.ink, 1.8);

  // head
  ctx.beginPath();
  ctx.ellipse(22, -10, 14, 12, 0.2, 0, Math.PI * 2);
  fillStroke(C.indigo, C.ink, 2);

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

  // sun / dusk disc
  ctx.beginPath();
  ctx.arc(200, 160, 42, 0, Math.PI * 2);
  fillStroke(C.saffron, C.ink, 2.5);
  ctx.beginPath();
  ctx.arc(200, 160, 28, 0, Math.PI * 2);
  fillStroke(C.gold, C.ink, 1.5);

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

  // peepal leaf motif (lower left corner art)
  ctx.save();
  ctx.translate(160, 720);
  ctx.rotate(-0.4);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(40, -20, 50, -60, 0, -90);
  ctx.bezierCurveTo(-50, -60, -40, -20, 0, 0);
  fillStroke("rgba(42,90,56,0.55)", C.ink, 2);
  ctx.beginPath();
  ctx.moveTo(0, -5);
  ctx.lineTo(0, -75);
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();
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
  // shaft
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(28, 0);
  ctx.strokeStyle = C.ash;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 1.2;
  ctx.stroke();
  // tip
  ctx.beginPath();
  ctx.moveTo(28, 0);
  ctx.lineTo(18, -6);
  ctx.lineTo(18, 6);
  ctx.closePath();
  fillStroke("#c0c8d0", C.ink, 1);
  // fletching
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(-36, -8);
  ctx.lineTo(-22, 0);
  ctx.lineTo(-36, 8);
  ctx.closePath();
  fillStroke(C.vermillion, C.ink, 1);
  // trail
  ctx.globalAlpha = 0.35;
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

function applyBeat(idx) {
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
}

function updateBeat(time) {
  let idx = 0;
  for (let i = 0; i < EPISODE.beats.length; i++) {
    if (time >= EPISODE.beats[i].t) idx = i;
  }
  if (idx !== lastBeatIdx) {
    lastBeatIdx = idx;
    applyBeat(idx);
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
  endCard.classList.remove("show");
  btnPlay.textContent = "Play";
  setCamera("wide");
  cam.cx = camT.cx;
  cam.cy = camT.cy;
  cam.zoom = camT.zoom;
  updateBeat(0);
  applyBeat(0);
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

  // princes (left group)
  const princeColors = ["#4a2030", "#2a3a28", "#3a2a48", "#4a3a20"];
  for (let i = 0; i < 4; i++) {
    drawFigure(480 + i * 55, 600 + (i % 2) * 8, {
      scale: 0.72,
      robe: princeColors[i],
      robeTrim: C.saffron,
      breath: breath * 0.6 + i,
      armRaise: 0.05 * Math.sin(now * 0.002 + i),
    });
  }

  // Drona
  drawFigure(320, 580, {
    scale: 1.05,
    robe: C.indigoDeep,
    robeTrim: C.gold,
    beard: true,
    crown: false,
    name: "Drona",
    breath,
    armRaise: 0.1 + Math.sin(now * 0.001) * 0.05,
  });
  // staff
  ctx.save();
  ctx.translate(360, 520 + breath);
  ctx.beginPath();
  ctx.moveTo(0, 20);
  ctx.lineTo(8, -90);
  ctx.strokeStyle = "#6a4428";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(8, -95, 8, 0, Math.PI * 2);
  fillStroke(C.gold, C.ink, 1.5);
  ctx.restore();

  // Arjuna
  drawFigure(1220, 590, {
    scale: 1.0,
    robe: "#1e3a5f",
    robeTrim: C.gold,
    crown: true,
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
btnPlay.addEventListener("click", async () => {
  if (ended) resetPlay();
  playing = !playing;
  btnPlay.textContent = playing ? "Pause" : "Play";
  if (playing) {
    try {
      await drone.start();
      btnMute.textContent = "Sound ✓";
    } catch {
      /* autoplay */
    }
  }
});

btnRestart.addEventListener("click", async () => {
  resetPlay();
  playing = true;
  btnPlay.textContent = "Pause";
  try {
    await drone.start();
    btnMute.textContent = "Sound ✓";
  } catch {
    /* ok */
  }
});

btnReplay?.addEventListener("click", () => btnRestart.click());

btnMute.addEventListener("click", async () => {
  const on = await drone.toggle();
  btnMute.textContent = on ? "Sound ✓" : "Sound";
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
  // re-apply state from scrub
  updateBeat(t);
  if (t >= 66) {
    arrowU = Math.min(1, (t - 66) / 1.4);
    birdHit = arrowU >= 1;
  }
  if (t >= 76) targetGold = 1;
});

// boot
setCamera("wide");
applyBeat(0);
requestAnimationFrame(frame);
requestAnimationFrame(() => {
  setTimeout(() => loader.classList.add("done"), 350);
});

const params = new URLSearchParams(location.search);
if (params.get("auto") === "1") btnPlay.click();
