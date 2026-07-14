/**
 * Mahābhārata player — cinematic Three.js episode runner.
 * Beat-driven: camera, focus vignette, dialogue from episode script.
 */
import * as THREE from "three";
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
const P = EPISODE.palette;

// ── Soft ambient drone (optional) ──────────────────────────────
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
    // Deep pad + high shimmer
    for (const [freq, type, g] of [
      [55, "sine", 0.07],
      [82.5, "triangle", 0.035],
      [220, "sine", 0.018],
      [329.6, "sine", 0.012],
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
    this.master.gain.linearRampToValueAtTime(0.55, t + 1.2);
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
  toggle() {
    if (this.on) this.stop();
    else this.start();
    return this.on;
  }
}
const drone = new AmbientDrone();

// ── Renderer ───────────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
host.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0a0614, 0.028);

// Gradient sky via large sphere
const skyGeo = new THREE.SphereGeometry(80, 32, 24);
const skyMat = new THREE.ShaderMaterial({
  side: THREE.BackSide,
  depthWrite: false,
  uniforms: {
    top: { value: new THREE.Color(P.skyTop) },
    bot: { value: new THREE.Color(P.skyBot) },
    gold: { value: new THREE.Color(P.gold) },
    focus: { value: 0 },
  },
  vertexShader: `
    varying vec3 vPos;
    void main() {
      vPos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 top;
    uniform vec3 bot;
    uniform vec3 gold;
    uniform float focus;
    varying vec3 vPos;
    void main() {
      float h = normalize(vPos).y * 0.5 + 0.5;
      vec3 col = mix(bot, top, h);
      // dusk glow on horizon
      float glow = pow(1.0 - abs(normalize(vPos).y), 3.0) * 0.35;
      col = mix(col, gold * 0.35, glow * (1.0 - focus * 0.6));
      gl_FragColor = vec4(col, 1.0);
    }
  `,
});
scene.add(new THREE.Mesh(skyGeo, skyMat));

// ── Lights ─────────────────────────────────────────────────────
const amb = new THREE.AmbientLight(0x3a2848, 0.35);
scene.add(amb);

const sun = new THREE.DirectionalLight(0xffc978, 1.35);
sun.position.set(12, 18, 8);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 60;
sun.shadow.camera.left = -20;
sun.shadow.camera.right = 20;
sun.shadow.camera.top = 20;
sun.shadow.camera.bottom = -20;
sun.shadow.bias = -0.0003;
scene.add(sun);

const rim = new THREE.DirectionalLight(0x6a4cff, 0.45);
rim.position.set(-10, 6, -8);
scene.add(rim);

const fireGlow = new THREE.PointLight(0xe8a838, 0.8, 18, 2);
fireGlow.position.set(0, 1.2, 2);
scene.add(fireGlow);

// ── Ground ─────────────────────────────────────────────────────
const ground = new THREE.Mesh(
  new THREE.CircleGeometry(28, 64),
  new THREE.MeshStandardMaterial({
    color: P.earth,
    roughness: 0.92,
    metalness: 0.05,
  })
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// Soft grass patches
const grassMat = new THREE.MeshStandardMaterial({ color: 0x1a2e1c, roughness: 1 });
for (let i = 0; i < 40; i++) {
  const r = 3 + Math.random() * 18;
  const a = Math.random() * Math.PI * 2;
  const g = new THREE.Mesh(new THREE.ConeGeometry(0.12 + Math.random() * 0.1, 0.35 + Math.random() * 0.25, 5), grassMat);
  g.position.set(Math.cos(a) * r, 0.15, Math.sin(a) * r);
  g.rotation.z = (Math.random() - 0.5) * 0.3;
  g.castShadow = true;
  scene.add(g);
}

// ── Helpers: stylized humanoid ─────────────────────────────────
function makeFigure({ robe = 0x2a1a12, skin = 0xc4a07a, tall = 1.65, beard = false } = {}) {
  const root = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: robe, roughness: 0.85, metalness: 0.05 });
  const skinMat = new THREE.MeshStandardMaterial({ color: skin, roughness: 0.7 });
  const goldMat = new THREE.MeshStandardMaterial({ color: P.gold, roughness: 0.4, metalness: 0.6, emissive: P.gold, emissiveIntensity: 0.15 });

  // torso
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.7 * tall, 10), bodyMat);
  torso.position.y = 0.85 * tall;
  torso.castShadow = true;
  root.add(torso);

  // head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18 * tall, 16, 12), skinMat);
  head.position.y = 1.35 * tall;
  head.castShadow = true;
  root.add(head);

  // hair / topknot
  const hair = new THREE.Mesh(
    new THREE.SphereGeometry(0.17 * tall, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.55),
    new THREE.MeshStandardMaterial({ color: 0x1a1010, roughness: 0.9 })
  );
  hair.position.y = 1.4 * tall;
  root.add(hair);

  // simple arms
  const armGeo = new THREE.CylinderGeometry(0.05, 0.055, 0.55 * tall, 6);
  const armL = new THREE.Mesh(armGeo, bodyMat);
  armL.position.set(-0.32, 0.95 * tall, 0);
  armL.rotation.z = 0.25;
  armL.castShadow = true;
  root.add(armL);
  const armR = new THREE.Mesh(armGeo, bodyMat);
  armR.position.set(0.32, 0.95 * tall, 0);
  armR.rotation.z = -0.25;
  armR.castShadow = true;
  root.add(armR);

  // legs
  const legGeo = new THREE.CylinderGeometry(0.07, 0.08, 0.55 * tall, 6);
  const legL = new THREE.Mesh(legGeo, bodyMat);
  legL.position.set(-0.1, 0.28 * tall, 0);
  legL.castShadow = true;
  root.add(legL);
  const legR = new THREE.Mesh(legGeo, bodyMat);
  legR.position.set(0.1, 0.28 * tall, 0);
  legR.castShadow = true;
  root.add(legR);

  if (beard) {
    const b = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.22, 8), new THREE.MeshStandardMaterial({ color: 0xddd0c0, roughness: 0.9 }));
    b.position.set(0, 1.18 * tall, 0.12);
    b.rotation.x = 0.4;
    root.add(b);
  }

  // tilak / sacred mark
  const tilak = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 8), goldMat);
  tilak.position.set(0, 1.38 * tall, 0.16 * tall);
  root.add(tilak);

  root.userData = { armL, armR, head, torso };
  return root;
}

// ── Tree ───────────────────────────────────────────────────────
const tree = new THREE.Group();
tree.position.set(0, 0, -6);

const trunk = new THREE.Mesh(
  new THREE.CylinderGeometry(0.25, 0.4, 4.2, 10),
  new THREE.MeshStandardMaterial({ color: 0x3a2418, roughness: 0.95 })
);
trunk.position.y = 2.1;
trunk.castShadow = true;
trunk.receiveShadow = true;
tree.add(trunk);

const canopyMat = new THREE.MeshStandardMaterial({ color: P.leaf, roughness: 0.88, flatShading: true });
const canopyPositions = [
  [0, 5.2, 0, 1.8],
  [1.1, 4.6, 0.4, 1.2],
  [-1.0, 4.7, -0.3, 1.15],
  [0.3, 5.8, -0.6, 1.0],
  [-0.5, 5.5, 0.7, 0.95],
];
for (const [x, y, z, s] of canopyPositions) {
  const c = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), canopyMat);
  c.position.set(x, y, z);
  c.castShadow = true;
  tree.add(c);
}
scene.add(tree);

// ── Bird on branch ─────────────────────────────────────────────
const bird = new THREE.Group();
bird.position.set(0.9, 4.55, 0.35);

const birdBody = new THREE.Mesh(
  new THREE.SphereGeometry(0.12, 12, 10),
  new THREE.MeshStandardMaterial({ color: 0x3a4a6a, roughness: 0.6, metalness: 0.2 })
);
birdBody.scale.set(1.2, 0.85, 1.4);
birdBody.castShadow = true;
bird.add(birdBody);

const birdHead = new THREE.Mesh(
  new THREE.SphereGeometry(0.07, 10, 8),
  new THREE.MeshStandardMaterial({ color: 0x4a5a7a, roughness: 0.55 })
);
birdHead.position.set(0, 0.06, 0.12);
bird.add(birdHead);

// the critical eye
const birdEyeWhite = new THREE.Mesh(
  new THREE.SphereGeometry(0.028, 10, 8),
  new THREE.MeshStandardMaterial({ color: 0xf0e8d8, emissive: 0x221100, emissiveIntensity: 0.1 })
);
birdEyeWhite.position.set(0.035, 0.08, 0.16);
bird.add(birdEyeWhite);

const birdPupil = new THREE.Mesh(
  new THREE.SphereGeometry(0.014, 10, 8),
  new THREE.MeshStandardMaterial({
    color: 0x1a0808,
    emissive: 0x8b1a1a,
    emissiveIntensity: 0.4,
  })
);
birdPupil.position.set(0.04, 0.082, 0.175);
bird.add(birdPupil);

const beak = new THREE.Mesh(
  new THREE.ConeGeometry(0.025, 0.1, 6),
  new THREE.MeshStandardMaterial({ color: 0xe8a838, roughness: 0.5 })
);
beak.rotation.x = Math.PI / 2;
beak.position.set(0, 0.04, 0.2);
bird.add(beak);

// wing
const wing = new THREE.Mesh(
  new THREE.BoxGeometry(0.22, 0.04, 0.12),
  new THREE.MeshStandardMaterial({ color: 0x2a3a55, roughness: 0.7 })
);
wing.position.set(-0.1, 0.02, 0);
wing.rotation.z = 0.3;
bird.add(wing);

tree.add(bird);

// Eye focus orb (appears when camera locks on eye)
const eyeOrb = new THREE.Mesh(
  new THREE.SphereGeometry(0.06, 24, 16),
  new THREE.MeshStandardMaterial({
    color: 0xffe8a0,
    emissive: 0xe8a838,
    emissiveIntensity: 1.2,
    transparent: true,
    opacity: 0,
    roughness: 0.2,
    metalness: 0.3,
  })
);
// world-space roughly bird eye — updated each frame from bird
scene.add(eyeOrb);

const eyeRing = new THREE.Mesh(
  new THREE.RingGeometry(0.1, 0.14, 48),
  new THREE.MeshBasicMaterial({
    color: 0xf5d76e,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
    depthWrite: false,
  })
);
scene.add(eyeRing);

// ── Figures ────────────────────────────────────────────────────
const drona = makeFigure({ robe: 0x1a2030, skin: 0xb89068, tall: 1.72, beard: true });
drona.position.set(-2.2, 0, 1.5);
drona.rotation.y = 0.55;
scene.add(drona);

const arjuna = makeFigure({ robe: 0x1e3a5f, skin: 0xc4a07a, tall: 1.68 });
arjuna.position.set(1.4, 0, 2.2);
arjuna.rotation.y = -0.35;
scene.add(arjuna);

// Bow for Arjuna
const bow = new THREE.Group();
const bowArc = new THREE.Mesh(
  new THREE.TorusGeometry(0.55, 0.025, 8, 24, Math.PI),
  new THREE.MeshStandardMaterial({ color: 0x5a3a20, roughness: 0.6, metalness: 0.15 })
);
bowArc.rotation.z = Math.PI / 2;
bowArc.rotation.y = Math.PI / 2;
bow.add(bowArc);
const string = new THREE.Mesh(
  new THREE.CylinderGeometry(0.006, 0.006, 1.05, 4),
  new THREE.MeshStandardMaterial({ color: 0xd8c8a0, roughness: 0.5 })
);
string.position.z = 0.02;
bow.add(string);
bow.position.set(0.38, 1.1, 0.15);
bow.rotation.y = -0.4;
arjuna.add(bow);

// Arrow
const arrow = new THREE.Group();
const shaft = new THREE.Mesh(
  new THREE.CylinderGeometry(0.012, 0.012, 0.9, 6),
  new THREE.MeshStandardMaterial({ color: 0x8a6a40, roughness: 0.7 })
);
shaft.rotation.z = Math.PI / 2;
arrow.add(shaft);
const tip = new THREE.Mesh(
  new THREE.ConeGeometry(0.03, 0.1, 6),
  new THREE.MeshStandardMaterial({ color: 0xc0c8d0, metalness: 0.7, roughness: 0.3 })
);
tip.rotation.z = -Math.PI / 2;
tip.position.x = 0.5;
arrow.add(tip);
arrow.position.set(0.2, 1.15, 0.25);
arrow.visible = false;
arjuna.add(arrow);

// Princes (background)
const princes = [];
const princeColors = [0x4a2030, 0x2a3a28, 0x3a2a48, 0x4a3a20];
for (let i = 0; i < 4; i++) {
  const p = makeFigure({ robe: princeColors[i], skin: 0xb88860, tall: 1.55 + Math.random() * 0.1 });
  p.position.set(-3.5 + i * 0.7, 0, 3.5 + (i % 2) * 0.4);
  p.rotation.y = 0.2 + i * 0.05;
  p.scale.setScalar(0.92);
  scene.add(p);
  princes.push(p);
}

// ── Dust / ember particles ─────────────────────────────────────
const PART_N = 180;
const pGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(PART_N * 3);
const pVel = [];
for (let i = 0; i < PART_N; i++) {
  pPos[i * 3] = (Math.random() - 0.5) * 22;
  pPos[i * 3 + 1] = Math.random() * 8;
  pPos[i * 3 + 2] = (Math.random() - 0.5) * 22;
  pVel.push({
    y: 0.15 + Math.random() * 0.35,
    x: (Math.random() - 0.5) * 0.2,
    z: (Math.random() - 0.5) * 0.2,
  });
}
pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
const particles = new THREE.Points(
  pGeo,
  new THREE.PointsMaterial({
    color: 0xf5d76e,
    size: 0.06,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  })
);
scene.add(particles);

// ── Camera ─────────────────────────────────────────────────────
const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 120);
const camState = {
  pos: new THREE.Vector3(0, 2.4, 9),
  look: new THREE.Vector3(0, 2.2, -2),
  targetPos: new THREE.Vector3(0, 2.4, 9),
  targetLook: new THREE.Vector3(0, 2.2, -2),
  fov: 42,
  targetFov: 42,
};
camera.position.copy(camState.pos);

const CAMERAS = {
  wide: {
    pos: [0, 2.6, 10],
    look: [0, 2.4, -3],
    fov: 44,
  },
  drona: {
    pos: [-1.2, 1.7, 4.2],
    look: [-2.0, 1.55, 1.5],
    fov: 38,
  },
  princes: {
    pos: [-1.5, 1.9, 6.5],
    look: [-2.4, 1.4, 3.5],
    fov: 40,
  },
  bird: {
    pos: [2.2, 4.2, 3.5],
    look: [0.7, 4.5, -5.5],
    fov: 36,
  },
  "arjuna-bow": {
    pos: [3.2, 1.7, 4.0],
    look: [1.4, 1.45, 2.2],
    fov: 34,
  },
  "arjuna-eye": {
    pos: [1.9, 1.85, 3.0],
    look: [1.35, 1.75, 2.1],
    fov: 28,
  },
  eye: {
    pos: [1.35, 4.62, -4.6],
    look: [0.95, 4.63, -5.65],
    fov: 18,
  },
  release: {
    pos: [0.5, 3.5, 1.5],
    look: [0.5, 4.4, -5.5],
    fov: 32,
  },
  "wide-gold": {
    pos: [1.5, 3.2, 11],
    look: [0, 2.8, -3],
    fov: 46,
  },
};

function setCamera(name) {
  const c = CAMERAS[name] || CAMERAS.wide;
  camState.targetPos.set(...c.pos);
  camState.targetLook.set(...c.look);
  camState.targetFov = c.fov;
}

// ── Playback state ─────────────────────────────────────────────
let playing = false;
let t = 0;
let lastBeatIdx = -1;
let ended = false;
let focus = 0;
let targetFocus = 0;
let arrowFlying = false;
let arrowT = 0;
const arrowWorldStart = new THREE.Vector3();
const arrowWorldEnd = new THREE.Vector3();
const freeArrow = new THREE.Group();
{
  const s = new THREE.Mesh(
    new THREE.CylinderGeometry(0.012, 0.012, 0.9, 6),
    new THREE.MeshStandardMaterial({ color: 0x8a6a40, roughness: 0.7 })
  );
  s.rotation.z = Math.PI / 2;
  freeArrow.add(s);
  const tip2 = new THREE.Mesh(
    new THREE.ConeGeometry(0.03, 0.1, 6),
    new THREE.MeshStandardMaterial({ color: 0xc0c8d0, metalness: 0.7, roughness: 0.3 })
  );
  tip2.rotation.z = -Math.PI / 2;
  tip2.position.x = 0.5;
  freeArrow.add(tip2);
  freeArrow.visible = false;
  scene.add(freeArrow);
}

function fmt(sec) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

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

  // bow raise at arjuna beats
  if (b.cam === "arjuna-bow" || b.cam === "arjuna-eye" || b.cam === "eye") {
    arjuna.userData.armR.rotation.z = -1.1;
    arjuna.userData.armR.rotation.x = -0.4;
    arrow.visible = true;
  }
  if (b.cam === "release" && !arrowFlying) {
    // launch free arrow
    arrow.visible = false;
    arrowFlying = true;
    arrowT = 0;
    arjuna.updateMatrixWorld(true);
    arrowWorldStart.setFromMatrixPosition(arrow.matrixWorld);
    bird.updateMatrixWorld(true);
    birdEyeWhite.getWorldPosition(arrowWorldEnd);
    freeArrow.position.copy(arrowWorldStart);
    freeArrow.visible = true;
    freeArrow.lookAt(arrowWorldEnd);
    freeArrow.rotateY(Math.PI / 2);
  }
  if (b.cam === "wide-gold") {
    // golden hour
    sun.color.setHex(0xffb040);
    sun.intensity = 1.6;
    renderer.toneMappingExposure = 1.2;
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
  arrowFlying = false;
  freeArrow.visible = false;
  arrow.visible = false;
  arjuna.userData.armR.rotation.z = -0.25;
  arjuna.userData.armR.rotation.x = 0;
  sun.color.setHex(0xffc978);
  sun.intensity = 1.35;
  renderer.toneMappingExposure = 1.05;
  birdPupil.material.emissiveIntensity = 0.4;
  endCard.classList.remove("show");
  btnPlay.textContent = "Play";
  setCamera("wide");
  camState.pos.copy(camState.targetPos);
  camState.look.copy(camState.targetLook);
  camState.fov = camState.targetFov;
  updateBeat(0);
  applyBeat(0);
}

// ── UI ─────────────────────────────────────────────────────────
btnPlay.addEventListener("click", async () => {
  if (ended) {
    resetPlay();
  }
  playing = !playing;
  btnPlay.textContent = playing ? "Pause" : "Play";
  if (playing) {
    try {
      await drone.start();
      btnMute.textContent = "Sound ✓";
    } catch {
      /* autoplay policies */
    }
  }
});

btnRestart.addEventListener("click", () => {
  resetPlay();
  playing = true;
  btnPlay.textContent = "Pause";
  drone.start();
  btnMute.textContent = "Sound ✓";
});

btnReplay?.addEventListener("click", () => {
  resetPlay();
  playing = true;
  btnPlay.textContent = "Pause";
  drone.start();
  btnMute.textContent = "Sound ✓";
});

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
  arrowFlying = false;
  freeArrow.visible = false;
  updateBeat(t);
});

// ── Resize ─────────────────────────────────────────────────────
function onResize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}
addEventListener("resize", onResize);

// ── Animate ────────────────────────────────────────────────────
const clock = new THREE.Clock();
const tmpV = new THREE.Vector3();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

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
  const lerp = 1 - Math.exp(-2.2 * dt);
  camState.pos.lerp(camState.targetPos, lerp);
  camState.look.lerp(camState.targetLook, lerp);
  camState.fov += (camState.targetFov - camState.fov) * lerp;
  camera.position.copy(camState.pos);
  camera.lookAt(camState.look);
  camera.fov = camState.fov;
  camera.updateProjectionMatrix();

  focus += (targetFocus - focus) * (1 - Math.exp(-1.8 * dt));
  skyMat.uniforms.focus.value = focus;
  scene.fog.density = 0.022 + focus * 0.045;

  // eye orb world pos
  bird.updateMatrixWorld(true);
  birdPupil.getWorldPosition(tmpV);
  eyeOrb.position.copy(tmpV);
  eyeRing.position.copy(tmpV);
  eyeRing.lookAt(camera.position);

  const eyeVis = Math.max(0, (focus - 0.7) / 0.3);
  eyeOrb.material.opacity = eyeVis * 0.95;
  eyeOrb.material.emissiveIntensity = 0.8 + eyeVis * 1.5;
  eyeRing.material.opacity = eyeVis * 0.7;
  eyeRing.scale.setScalar(1 + Math.sin(performance.now() * 0.004) * 0.08 * eyeVis);
  birdPupil.material.emissiveIntensity = 0.4 + focus * 1.8;

  // subtle breathing / idle
  const breath = Math.sin(performance.now() * 0.0015) * 0.015;
  drona.position.y = breath;
  arjuna.position.y = breath * 0.9;
  bird.rotation.z = Math.sin(performance.now() * 0.002) * 0.04;
  bird.position.y = 4.55 + Math.sin(performance.now() * 0.0018) * 0.02;

  // fire flicker
  fireGlow.intensity = 0.55 + Math.sin(performance.now() * 0.008) * 0.15 + Math.random() * 0.08;

  // particles
  const arr = particles.geometry.attributes.position.array;
  for (let i = 0; i < PART_N; i++) {
    arr[i * 3] += pVel[i].x * dt;
    arr[i * 3 + 1] += pVel[i].y * dt;
    arr[i * 3 + 2] += pVel[i].z * dt;
    if (arr[i * 3 + 1] > 9) {
      arr[i * 3 + 1] = 0;
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 22;
    }
  }
  particles.geometry.attributes.position.needsUpdate = true;
  particles.material.opacity = 0.35 + focus * 0.4;

  // arrow flight
  if (arrowFlying) {
    arrowT += dt;
    const u = Math.min(1, arrowT / 1.4);
    const ease = 1 - Math.pow(1 - u, 2);
    freeArrow.position.lerpVectors(arrowWorldStart, arrowWorldEnd, ease);
    freeArrow.position.y += Math.sin(u * Math.PI) * 0.4;
    if (u >= 1) {
      arrowFlying = false;
      // impact flash on eye
      birdPupil.material.emissiveIntensity = 3;
      freeArrow.visible = false;
    }
  }

  // UI
  const pct = (t / TOTAL) * 100;
  fillEl.style.width = `${pct}%`;
  timeEl.textContent = `${fmt(t)} / ${fmt(TOTAL)}`;

  renderer.render(scene, camera);
}

// boot
setCamera("wide");
camState.pos.copy(camState.targetPos);
camState.look.copy(camState.targetLook);
applyBeat(0);
animate();

// hide loader
requestAnimationFrame(() => {
  setTimeout(() => loader.classList.add("done"), 400);
});

// URL ?ep= is reserved for multi-ep loader later
const params = new URLSearchParams(location.search);
if (params.get("auto") === "1") {
  btnPlay.click();
}
