(function () {
  const CYCLE_MS = 18000;

  const LINES = [
    { at: 0.04, who: "a", text: "Did you finish the animation sketch?" },
    { at: 0.16, who: "b", text: "Almost — just the timing on the bubbles." },
    { at: 0.32, who: "a", text: "Pure CSS? No JavaScript?" },
    { at: 0.48, who: "b", text: "Only keyframes and animation-delay." },
    { at: 0.64, who: "a", text: "Nice. It loops cleanly too." },
    { at: 0.8, who: "b", text: "Ship it. Coffee after." },
  ];

  const VOICES = { a: { pitch: 1.15, rate: 1.05 }, b: { pitch: 0.82, rate: 0.95 } };

  let ctx = null;
  let music = null;
  let running = false;
  let cycleTimer = null;
  let speechTimers = [];
  let musicOn = true;
  let voiceOn = true;

  function pickVoice(who) {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return null;
    const prefer =
      who === "a"
        ? (v) => /female|samantha|karen|victoria|zira/i.test(v.name)
        : (v) => /male|daniel|alex|fred|david|google uk english male/i.test(v.name);
    return voices.find(prefer) || voices[who === "a" ? 0 : Math.min(1, voices.length - 1)];
  }

  function speak(who, text) {
    if (!voiceOn || !window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice(who);
    if (v) u.voice = v;
    const cfg = VOICES[who];
    u.pitch = cfg.pitch;
    u.rate = cfg.rate;
    u.volume = 0.95;
    speechSynthesis.speak(u);
  }

  function clearSpeechTimers() {
    speechTimers.forEach(clearTimeout);
    speechTimers = [];
  }

  function scheduleSpeech() {
    clearSpeechTimers();
    LINES.forEach((line) => {
      speechTimers.push(setTimeout(() => speak(line.who, line.text), line.at * CYCLE_MS));
    });
  }

  function playBoing(time, freq) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.4, time + 0.25);
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(0.14, time + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.35);
    osc.connect(g);
    g.connect(music.master);
    osc.start(time);
    osc.stop(time + 0.4);
  }

  function playPluck(time, freq, dur = 0.12) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(0.09, time + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, time + dur);
    osc.connect(g);
    g.connect(music.master);
    osc.start(time);
    osc.stop(time + dur + 0.05);
  }

  function playThump(time) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(90, time);
    osc.frequency.exponentialRampToValueAtTime(45, time + 0.08);
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(0.2, time + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
    osc.connect(g);
    g.connect(music.master);
    osc.start(time);
    osc.stop(time + 0.2);
  }

  function scheduleMusicLoop() {
    if (!running || !musicOn || !ctx) return;
    clearTimeout(music.loopTimer);

    const bpm = 128;
    const beat = 60 / bpm;
    const loopDur = beat * 8;
    const startAt = ctx.currentTime + 0.05;

    const melody = [
      [0, 523.25],
      [0.5, 659.25],
      [1, 783.99],
      [1.5, 1046.5],
      [2, 783.99],
      [2.5, 659.25],
      [3, 587.33],
      [3.5, 523.25],
    ];

    for (let b = 0; b < 8; b++) playThump(startAt + b * beat);
    melody.forEach(([beatOff, freq]) => playPluck(startAt + beatOff * beat, freq));
    playBoing(startAt + loopDur - 0.35, 880);
    playBoing(startAt + loopDur - 0.15, 660);

    music.loopTimer = setTimeout(scheduleMusicLoop, loopDur * 1000 - 80);
  }

  function startMusic() {
    if (!ctx || !musicOn) return;
    clearTimeout(music?.loopTimer);
    music.master.gain.setTargetAtTime(0.22, ctx.currentTime, 0.05);
    scheduleMusicLoop();
  }

  function stopMusic() {
    if (!music) return;
    clearTimeout(music.loopTimer);
    music.loopTimer = null;
    if (ctx) music.master.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
  }

  function initAudio() {
    if (ctx) return;
    ctx = new AudioContext();
    music = {
      master: ctx.createGain(),
      loopTimer: null,
      nextLoop: 0,
    };
    music.master.gain.value = 0;
    music.master.connect(ctx.destination);
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }

  function startShow() {
    initAudio();
    ctx.resume();
    running = true;
    document.body.classList.add("audio-on");
    scheduleSpeech();
    startMusic();
    cycleTimer = setInterval(scheduleSpeech, CYCLE_MS);
    updatePlayButton();
  }

  function stopShow() {
    running = false;
    document.body.classList.remove("audio-on");
    clearInterval(cycleTimer);
    cycleTimer = null;
    clearSpeechTimers();
    speechSynthesis.cancel();
    stopMusic();
    updatePlayButton();
  }

  function updatePlayButton() {
    const btn = document.getElementById("btn-play");
    if (!btn) return;
    btn.textContent = running ? "⏸ Pause" : "▶ Play with sound";
    btn.setAttribute("aria-pressed", running ? "true" : "false");
  }

  function wireControls() {
    document.getElementById("btn-play")?.addEventListener("click", () => {
      running ? stopShow() : startShow();
    });

    document.getElementById("btn-music")?.addEventListener("click", (e) => {
      musicOn = !musicOn;
      e.currentTarget.classList.toggle("off", !musicOn);
      e.currentTarget.setAttribute("aria-pressed", musicOn ? "true" : "false");
      if (running) {
        if (musicOn) startMusic();
        else stopMusic();
      }
    });

    document.getElementById("btn-voice")?.addEventListener("click", (e) => {
      voiceOn = !voiceOn;
      e.currentTarget.classList.toggle("off", !voiceOn);
      e.currentTarget.setAttribute("aria-pressed", voiceOn ? "true" : "false");
      if (!voiceOn) speechSynthesis.cancel();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireControls);
  } else {
    wireControls();
  }
})();
