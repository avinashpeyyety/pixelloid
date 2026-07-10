/**
 * Chocolate Dance School — Professor Cocoa teaches the class to groove.
 * Three.js + procedural Web Audio dance jam.
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// ─── Dialogue script ───────────────────────────────────────────
const SCRIPT = [
  { t: 0, who: "Professor Cocoa", text: "Welcome, tiny truffles! Today we learn the CHOCOLATE CHA-CHA!" },
  { t: 4.2, who: "Professor Cocoa", text: "Rule one: never dance near a hot cup of tea. We melt. It’s awkward." },
  { t: 8.5, who: "Chip", text: "I once sat on a radiator. My bottom is… artistic now." },
  { t: 12, who: "Professor Cocoa", text: "Arms up! Wiggle like you just found free sprinkles!" },
  { t: 16, who: "Truffle", text: "Is this left? Is this right? I’M A ROUND BOY I HAVE NO LEFT!" },
  { t: 20.5, who: "Professor Cocoa", text: "Spin! Spin! You’re not stuck to the wrapper anymore!" },
  { t: 24.5, who: "Minty", text: "If I spin too fast I become a breath mint tornado. AAAAA—" },
  { t: 28.5, who: "Professor Cocoa", text: "Hip shake! Imagine a marshmallow is judging you. Impress it!" },
  { t: 33, who: "Whitey", text: "Do white chocolates count? I’m basically fancy butter with dreams." },
  { t: 37, who: "Professor Cocoa", text: "EVERYONE counts! Especially fancy butter with dreams!" },
  { t: 41, who: "Professor Cocoa", text: "Finale: the Cocoa Hop! Jump! Bounce! Don’t land in the fondue!" },
  { t: 46, who: "Chip", text: "I hopped into the fondue last Tuesday. Still sticky. Still fabulous." },
  { t: 50.5, who: "Professor Cocoa", text: "Class dismissed! You are all… slightly less awkward chocolates. 🏆" },
  { t: 55, who: "Everyone", text: "YAYYYYY! More chocolate! Wait— WE are the chocolate!" },
];

const DANCE_PHASES = [
  { until: 12, move: "idle" },
  { until: 20, move: "wiggle" },
  { until: 28, move: "spin" },
  { until: 41, move: "hip" },
  { until: 55, move: "hop" },
  { until: 999, move: "celebrate" },
];

// ─── Music (Web Audio) ─────────────────────────────────────────
class DanceJam {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.playing = false;
    this._nodes = [];
    this._timers = [];
  }

  async ensure() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.22;
    this.master.connect(this.ctx.destination);
  }

  async start() {
    await this.ensure();
    if (this.ctx.state === "suspended") await this.ctx.resume();
    if (this.playing) return;
    this.playing = true;
    this._scheduleLoop();
  }

  stop() {
    this.playing = false;
    for (const t of this._timers) clearTimeout(t);
    this._timers = [];
    for (const n of this._nodes) {
      try {
        n.stop?.();
        n.disconnect?.();
      } catch {
        /* ok */
      }
    }
    this._nodes = [];
  }

  _tone(freq, when, dur, type = "square", gain = 0.12) {
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(gain, when + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, when + dur);
    o.connect(g);
    g.connect(this.master);
    o.start(when);
    o.stop(when + dur + 0.05);
    this._nodes.push(o);
  }

  _kick(when) {
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(140, when);
    o.frequency.exponentialRampToValueAtTime(40, when + 0.12);
    g.gain.setValueAtTime(0.35, when);
    g.gain.exponentialRampToValueAtTime(0.001, when + 0.15);
    o.connect(g);
    g.connect(this.master);
    o.start(when);
    o.stop(when + 0.16);
    this._nodes.push(o);
  }

  _scheduleLoop() {
    if (!this.playing || !this.ctx) return;
    const t0 = this.ctx.currentTime + 0.05;
    const beat = 0.28; // bouncy
    // C major-ish happy pattern
    const melody = [523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 392];
    for (let i = 0; i < 16; i++) {
      const when = t0 + i * beat;
      if (i % 2 === 0) this._kick(when);
      // hi clack
      if (i % 2 === 1) this._tone(1800 + (i % 4) * 80, when, 0.05, "triangle", 0.04);
      // melody every beat
      const note = melody[i % melody.length];
      this._tone(note, when, beat * 0.7, i % 3 === 0 ? "triangle" : "square", 0.08);
      // bass
      if (i % 4 === 0) this._tone(130.81, when, beat * 1.5, "sawtooth", 0.05);
    }
    const barMs = 16 * beat * 1000;
    this._timers.push(setTimeout(() => this._scheduleLoop(), barMs - 30));
  }
}

const jam = new DanceJam();

// ─── Three.js scene ────────────────────────────────────────────
const stage = document.getElementById("stage");
const speechWho = document.getElementById("speech-who");
const speechText = document.getElementById("speech-text");
const lessonBadge = document.getElementById("lesson-badge");
const btnStart = document.getElementById("btn-start");
const btnMusic = document.getElementById("btn-music");
const btnReset = document.getElementById("btn-reset");
const loader = document.getElementById("loader");

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a1814);
scene.fog = new THREE.Fog(0x2a1814, 18, 42);

const camera = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 5.2, 11.5);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.6, 0);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI * 0.48;
controls.minDistance = 6;
controls.maxDistance = 20;
controls.update();

// Lights
scene.add(new THREE.AmbientLight(0xffe0c0, 0.55));
const key = new THREE.DirectionalLight(0xfff0dd, 1.1);
key.position.set(4, 10, 6);
key.castShadow = true;
key.shadow.mapSize.set(1024, 1024);
scene.add(key);
const fill = new THREE.PointLight(0xff6b9d, 0.45, 30);
fill.position.set(-5, 3, 2);
scene.add(fill);
const rim = new THREE.PointLight(0x7dd3fc, 0.25, 25);
rim.position.set(0, 2, -6);
scene.add(rim);

// Disco spots
const spots = [];
for (let i = 0; i < 4; i++) {
  const c = [0xff6b9d, 0xffc857, 0x7dd3fc, 0xc084fc][i];
  const s = new THREE.PointLight(c, 0.35, 12);
  s.position.set(Math.cos((i / 4) * Math.PI * 2) * 4, 4.5, Math.sin((i / 4) * Math.PI * 2) * 3);
  scene.add(s);
  spots.push(s);
}

// Room
function makeRoom() {
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x4a2818,
    roughness: 0.55,
    metalness: 0.1,
  });
  const floor = new THREE.Mesh(new THREE.CircleGeometry(14, 64), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  // Dance floor tiles
  const tileG = new THREE.Group();
  for (let x = -3; x <= 3; x++) {
    for (let z = -2; z <= 2; z++) {
      const col = (x + z) % 2 === 0 ? 0x3d1f12 : 0x5c2e1a;
      const t = new THREE.Mesh(
        new THREE.BoxGeometry(1.05, 0.06, 1.05),
        new THREE.MeshStandardMaterial({ color: col, roughness: 0.4, metalness: 0.2 })
      );
      t.position.set(x * 1.1, 0.03, z * 1.1);
      t.receiveShadow = true;
      tileG.add(t);
    }
  }
  scene.add(tileG);

  // Back wall
  const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 10),
    new THREE.MeshStandardMaterial({ color: 0x3b2018, roughness: 0.9 })
  );
  wall.position.set(0, 4, -7);
  scene.add(wall);

  // Curtains
  for (const side of [-1, 1]) {
    const curtain = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 7, 0.3),
      new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.85 })
    );
    curtain.position.set(side * 6.5, 3.5, -6.5);
    scene.add(curtain);
  }

  // Banner
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#7c2d12";
  ctx.fillRect(0, 0, 512, 128);
  ctx.fillStyle = "#fde68a";
  ctx.font = "bold 42px Fredoka, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🍫 DANCE OR MELT 🍫", 256, 78);
  const tex = new THREE.CanvasTexture(canvas);
  const banner = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 1.5),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true })
  );
  banner.position.set(0, 6.2, -6.6);
  scene.add(banner);

  // Confetti particles
  const n = 80;
  const pos = new Float32Array(n * 3);
  const col = new Float32Array(n * 3);
  const colors = [0xff6b9d, 0xffc857, 0x7dd3fc, 0xc084fc, 0x86efac];
  for (let i = 0; i < n; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 12;
    pos[i * 3 + 1] = Math.random() * 8 + 1;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    const c = new THREE.Color(colors[i % colors.length]);
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  const confGeo = new THREE.BufferGeometry();
  confGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  confGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const conf = new THREE.Points(
    confGeo,
    new THREE.PointsMaterial({ size: 0.12, vertexColors: true, transparent: true, opacity: 0.85 })
  );
  conf.userData.base = pos.slice(0);
  scene.add(conf);
  return { conf, tileG };
}

const { conf: confetti } = makeRoom();

// ─── Chocolate characters ──────────────────────────────────────
function makeFace(group, skinColor, opts = {}) {
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.4 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xfffaf0, roughness: 0.5 });
  for (const sx of [-1, 1]) {
    const white = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), whiteMat);
    white.position.set(sx * 0.22, 0.15, 0.38);
    group.add(white);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 10), eyeMat);
    pupil.position.set(sx * 0.22, 0.15, 0.48);
    group.add(pupil);
    if (opts.blinkTargets) opts.blinkTargets.push(white, pupil);
  }
  // smile
  const smile = new THREE.Mesh(
    new THREE.TorusGeometry(0.14, 0.03, 8, 16, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0x3a1a10 })
  );
  smile.position.set(0, -0.08, 0.4);
  smile.rotation.x = Math.PI;
  group.add(smile);
}

function makeArm(color, side) {
  const arm = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.08, 0.45, 4, 8),
    new THREE.MeshStandardMaterial({ color, roughness: 0.55 })
  );
  arm.position.set(side * 0.55, 0.1, 0);
  arm.castShadow = true;
  return arm;
}

function makeLeg(color, side) {
  const leg = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.09, 0.35, 4, 8),
    new THREE.MeshStandardMaterial({ color, roughness: 0.55 })
  );
  leg.position.set(side * 0.18, -0.55, 0);
  leg.castShadow = true;
  return leg;
}

function createBarChocolate({ name, color, accent, x, z, isTeacher = false }) {
  const root = new THREE.Group();
  root.position.set(x, 0.95, z);
  root.userData = { name, isTeacher, phase: Math.random() * Math.PI * 2, move: "idle" };

  const body = new THREE.Group();
  root.add(body);

  // Main bar
  const barMat = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.35,
    metalness: 0.15,
  });
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.1, 0.4), barMat);
  bar.castShadow = true;
  body.add(bar);

  // Segment lines (chocolate squares)
  const lineMat = new THREE.MeshBasicMaterial({ color: accent || 0x3d1f0a });
  for (let i = -1; i <= 1; i++) {
    if (i === 0) continue;
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.05, 0.42), lineMat);
    line.position.x = i * 0.28;
    body.add(line);
  }
  const hline = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.02, 0.42), lineMat);
  body.add(hline);

  makeFace(body, color);

  if (isTeacher) {
    // Glasses
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.6,
      roughness: 0.3,
    });
    for (const sx of [-1, 1]) {
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.025, 8, 20), glassMat);
      rim.position.set(sx * 0.22, 0.15, 0.42);
      body.add(rim);
    }
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 0.03), glassMat);
    bridge.position.set(0, 0.15, 0.45);
    body.add(bridge);
    // Bow tie
    const bow = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.12, 0.08),
      new THREE.MeshStandardMaterial({ color: 0xdc2626 })
    );
    bow.position.set(0, -0.35, 0.25);
    body.add(bow);
    // Top hat
    const hat = new THREE.Group();
    const brim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.4, 0.06, 20),
      new THREE.MeshStandardMaterial({ color: 0x1c1917 })
    );
    const top = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.4, 20),
      new THREE.MeshStandardMaterial({ color: 0x1c1917 })
    );
    top.position.y = 0.22;
    hat.add(brim, top);
    hat.position.y = 0.72;
    body.add(hat);
  }

  const L = makeArm(color, -1);
  const R = makeArm(color, 1);
  const LL = makeLeg(color, -1);
  const RR = makeLeg(color, 1);
  body.add(L, R, LL, RR);

  root.userData.body = body;
  root.userData.arms = [L, R];
  root.userData.legs = [LL, RR];
  root.userData.baseY = root.position.y;

  scene.add(root);
  return root;
}

function createTruffle({ name, color, x, z }) {
  const root = new THREE.Group();
  root.position.set(x, 0.75, z);
  root.userData = { name, isTeacher: false, phase: Math.random() * 6, move: "idle" };

  const body = new THREE.Group();
  root.add(body);

  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 24, 24),
    new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.05 })
  );
  ball.castShadow = true;
  body.add(ball);

  // Dusting
  const dust = new THREE.Mesh(
    new THREE.SphereGeometry(0.57, 16, 16),
    new THREE.MeshStandardMaterial({
      color: 0x3f2a1e,
      transparent: true,
      opacity: 0.35,
      roughness: 1,
    })
  );
  body.add(dust);

  makeFace(body, color);
  body.scale.set(1.1, 1, 1.1);

  const L = makeArm(color, -1);
  const R = makeArm(color, 1);
  L.position.x = -0.55;
  R.position.x = 0.55;
  body.add(L, R);

  root.userData.body = body;
  root.userData.arms = [L, R];
  root.userData.legs = [];
  root.userData.baseY = root.position.y;

  scene.add(root);
  return root;
}

function createWhiteBar({ name, x, z }) {
  return createBarChocolate({
    name,
    color: 0xf5e6d3,
    accent: 0xd4b896,
    x,
    z,
  });
}

// Cast
const professor = createBarChocolate({
  name: "Professor Cocoa",
  color: 0x5c2e0a,
  accent: 0x3d1a05,
  x: 0,
  z: -1.2,
  isTeacher: true,
});
professor.scale.set(1.25, 1.25, 1.25);
professor.position.y = 1.15;
professor.userData.baseY = 1.15;

const students = [
  createBarChocolate({ name: "Chip", color: 0x7b3f1a, accent: 0x4a2410, x: -2.4, z: 1.4 }),
  createTruffle({ name: "Truffle", color: 0x4a2512, x: -0.8, z: 2.0 }),
  createBarChocolate({ name: "Minty", color: 0x3d5c45, accent: 0x2a3d30, x: 0.9, z: 1.6 }),
  createWhiteBar({ name: "Whitey", x: 2.5, z: 1.3 }),
];

// Name labels (sprites)
function makeNameLabel(text) {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 64;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "rgba(42,16,8,0.75)";
  roundRect(ctx, 20, 12, 216, 40, 12);
  ctx.fill();
  ctx.fillStyle = "#ffe8c8";
  ctx.font = "bold 22px Fredoka, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(text, 128, 40);
  const tex = new THREE.CanvasTexture(c);
  const spr = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false })
  );
  spr.scale.set(1.6, 0.4, 1);
  return spr;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

for (const ch of [professor, ...students]) {
  const lab = makeNameLabel(ch.userData.name.split(" ")[0]);
  lab.position.y = ch.userData.isTeacher ? 1.55 : 1.15;
  ch.add(lab);
}

// ─── Animation state ───────────────────────────────────────────
const state = {
  running: false,
  t0: 0,
  elapsed: 0,
  scriptIdx: 0,
  music: false,
};

function setSpeech(who, text) {
  speechWho.textContent = who;
  speechText.innerHTML = text;
  const el = document.getElementById("speech");
  el.style.animation = "none";
  void el.offsetWidth;
  el.style.animation = "pop-in 0.35s ease";
}

function currentMove(elapsed) {
  for (const p of DANCE_PHASES) {
    if (elapsed < p.until) return p.move;
  }
  return "celebrate";
}

function animateCharacter(ch, elapsed, dt, move, isTeacher) {
  const body = ch.userData.body;
  const phase = ch.userData.phase;
  const t = elapsed * 2 + phase;
  const [aL, aR] = ch.userData.arms;
  const legs = ch.userData.legs;

  // reset-ish
  body.rotation.set(0, 0, 0);
  body.position.y = 0;

  const skill = isTeacher ? 1.2 : 0.55 + (phase % 1) * 0.5; // students are worse = funnier
  const lag = isTeacher ? 0 : phase * 0.3;

  switch (move) {
    case "idle":
      body.position.y = Math.sin(t * 1.2) * 0.04;
      body.rotation.z = Math.sin(t * 0.8) * 0.05;
      aL.rotation.z = 0.3 + Math.sin(t) * 0.1;
      aR.rotation.z = -0.3 - Math.sin(t) * 0.1;
      break;
    case "wiggle":
      body.rotation.z = Math.sin((t + lag) * 6) * 0.25 * skill;
      body.rotation.x = Math.sin((t + lag) * 4) * 0.1;
      aL.rotation.z = Math.PI / 2 + Math.sin(t * 8) * 0.5 * skill;
      aR.rotation.z = -Math.PI / 2 - Math.sin(t * 8 + 1) * 0.5 * skill;
      aL.rotation.x = Math.sin(t * 5) * 0.4;
      aR.rotation.x = Math.cos(t * 5) * 0.4;
      break;
    case "spin":
      body.rotation.y += dt * (2.5 * skill + (isTeacher ? 1 : -0.5 + Math.sin(phase) * 0.8));
      aL.rotation.z = 1.2;
      aR.rotation.z = -1.2;
      body.position.y = Math.abs(Math.sin(t * 3)) * 0.15 * skill;
      break;
    case "hip":
      body.rotation.z = Math.sin((t + lag) * 5) * 0.35 * skill;
      body.position.x = Math.sin((t + lag) * 5) * 0.12;
      aL.rotation.z = 0.2 + Math.sin(t * 3) * 0.8;
      aR.rotation.z = -0.2 - Math.cos(t * 3) * 0.8;
      if (legs[0]) {
        legs[0].rotation.x = Math.sin(t * 5) * 0.3;
        legs[1].rotation.x = -Math.sin(t * 5) * 0.3;
      }
      break;
    case "hop":
      body.position.y = Math.abs(Math.sin((t + lag) * 4)) * 0.55 * skill;
      aL.rotation.z = 1.5;
      aR.rotation.z = -1.5;
      body.rotation.z = Math.sin(t * 4) * 0.15;
      if (legs[0]) {
        legs[0].rotation.x = -0.6;
        legs[1].rotation.x = -0.6;
      }
      break;
    case "celebrate":
      body.position.y = Math.abs(Math.sin(t * 5)) * 0.4;
      body.rotation.y += dt * 3;
      aL.rotation.z = Math.PI / 2 + Math.sin(t * 10) * 0.3;
      aR.rotation.z = -Math.PI / 2 - Math.sin(t * 10) * 0.3;
      break;
  }

  // Professor always faces students a bit when not spinning hard
  if (isTeacher && move !== "spin" && move !== "celebrate") {
    body.rotation.y = Math.sin(t * 0.5) * 0.2;
  }
}

function updateScript(elapsed) {
  while (state.scriptIdx < SCRIPT.length - 1 && elapsed >= SCRIPT[state.scriptIdx + 1].t) {
    state.scriptIdx++;
  }
  const line = SCRIPT[state.scriptIdx];
  if (speechWho.textContent !== line.who || !speechText.textContent.includes(line.text.slice(0, 12))) {
    setSpeech(line.who, line.text);
  }
  // lesson badge
  const move = currentMove(elapsed);
  const labels = {
    idle: "Lesson 1 · Hello!",
    wiggle: "Lesson 2 · Wiggle",
    spin: "Lesson 3 · Spin",
    hip: "Lesson 4 · Hip shake",
    hop: "Lesson 5 · Cocoa Hop",
    celebrate: "Graduation! 🎉",
  };
  lessonBadge.textContent = labels[move] || "Class";
}

// ─── Loop ──────────────────────────────────────────────────────
const clock = new THREE.Clock();

function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);

  if (state.running) {
    state.elapsed = (performance.now() - state.t0) / 1000;
    const move = currentMove(state.elapsed);
    updateScript(state.elapsed);
    animateCharacter(professor, state.elapsed, dt, move, true);
    for (const s of students) animateCharacter(s, state.elapsed, dt, move, false);

    // Disco lights pulse
    const pulse = 0.25 + Math.sin(state.elapsed * 4) * 0.15;
    spots.forEach((s, i) => {
      s.intensity = pulse + Math.sin(state.elapsed * 3 + i) * 0.12;
    });

    // Confetti rain when celebrating
    if (move === "celebrate" || move === "hop") {
      const pos = confetti.geometry.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        pos[i + 1] -= dt * (1.2 + (i % 5) * 0.2);
        if (pos[i + 1] < 0) {
          pos[i + 1] = 8;
          pos[i] = (Math.random() - 0.5) * 12;
        }
      }
      confetti.geometry.attributes.position.needsUpdate = true;
    }

    // End of show
    if (state.elapsed > 62) {
      state.running = false;
      btnStart.textContent = "▶ Watch again";
    }
  } else {
    // gentle idle
    animateCharacter(professor, performance.now() / 1000, dt, "idle", true);
    for (const s of students) animateCharacter(s, performance.now() / 1000, dt, "idle", false);
  }

  controls.update();
  renderer.render(scene, camera);
}

// ─── UI ────────────────────────────────────────────────────────
btnStart.addEventListener("click", async () => {
  state.running = true;
  state.t0 = performance.now();
  state.elapsed = 0;
  state.scriptIdx = 0;
  btnStart.textContent = "💃 Dancing…";
  setSpeech(SCRIPT[0].who, SCRIPT[0].text);
  if (state.music) await jam.start();
});

btnMusic.addEventListener("click", async () => {
  state.music = !state.music;
  btnMusic.setAttribute("aria-pressed", state.music ? "true" : "false");
  btnMusic.textContent = state.music ? "🎵 Music on" : "🎵 Music off";
  if (state.music) {
    await jam.start();
  } else {
    jam.stop();
  }
});

btnReset.addEventListener("click", () => {
  state.running = false;
  state.elapsed = 0;
  state.scriptIdx = 0;
  btnStart.textContent = "▶ Start class";
  setSpeech("Professor Cocoa", "Ready when you are — my wrapper is ironed!");
  lessonBadge.textContent = "Lesson 1";
  for (const ch of [professor, ...students]) {
    ch.userData.body.rotation.set(0, 0, 0);
    ch.userData.body.position.set(0, 0, 0);
  }
});

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// Kick off
requestAnimationFrame(() => loader.classList.add("done"));
tick();
