(function () {
  const SPEAKERS = {
    brother: { label: "Brother", age: "7", pitch: 2.0, rate: 1.24 },
    sister: { label: "Sister", age: "5", pitch: 2.0, rate: 1.1 },
    grok: { label: "Grok Ara", age: "", pitch: 1.05, rate: 0.92 },
  };

  const COLORS = {
    brother: "#5b9fd4",
    sister: "#e878a8",
    grok: "#9b7bff",
  };

  let ctx = null;
  let music = null;
  let running = false;
  let musicOn = true;
  let voiceOn = true;
  let lineIndex = 0;
  let playToken = 0;
  let speakQueue = Promise.resolve();
  let brotherVoice = null;
  let sisterVoice = null;

  const chatLog = document.getElementById("chat-log");
  const activeBubble = document.getElementById("active-bubble");
  const activeLabel = document.getElementById("active-label");
  const progressFill = document.getElementById("progress-fill");
  const progressLabel = document.getElementById("progress-label");
  const cast = document.getElementById("cast");

  // Block deep / adult voices — browser TTS often defaults to these
  const DEEP_VOICE =
    /daniel|alex|fred|david|james|oliver|tom|lee|ralph|aaron|gordon|bruce|richard|mark|george|brian|christopher|microsoft david|microsoft mark|google uk english male|google us english male|english male|\bmale\b/i;

  const BROTHER_VOICE_PREFS = [
    /victoria/i,
    /tessa/i,
    /flo/i,
    /karen/i,
    /zira/i,
    /junior/i,
    /google uk english f/i,
    /google us english f/i,
    /female/i,
  ];

  const SISTER_VOICE_PREFS = [
    /moira/i,
    /samantha/i,
    /karen/i,
    /victoria/i,
    /flo/i,
    /tessa/i,
    /susan/i,
    /zira/i,
    /google uk english f/i,
    /google us english f/i,
    /female/i,
  ];

  function englishVoices() {
    return speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang));
  }

  function childVoices(voices) {
    return voices.filter((v) => !DEEP_VOICE.test(v.name));
  }

  function isDeepVoice(voice) {
    return !voice || DEEP_VOICE.test(voice.name);
  }

  function matchVoice(voices, pattern) {
    return voices.find((v) => pattern.test(v.name));
  }

  function firstMatch(voices, patterns) {
    for (const pattern of patterns) {
      const hit = matchVoice(voices, pattern);
      if (hit) return hit;
    }
    return null;
  }

  function resolveKidVoices() {
    const pool = childVoices(englishVoices());
    if (!pool.length) return;

    // 5yo girl first — keeps Moira/Samantha away from brother
    sisterVoice = firstMatch(pool, SISTER_VOICE_PREFS) || pool[0];

    // 7yo boy: Victoria/Tessa/Flo — bright and distinct from sister
    const brotherPool = pool.filter((v) => v !== sisterVoice);
    brotherVoice = firstMatch(brotherPool, BROTHER_VOICE_PREFS) || brotherPool[0] || sisterVoice;
  }

  function pickVoice(who) {
    const voices = englishVoices();
    if (!voices.length) return null;
    if (who === "grok") {
      return matchVoice(voices, /samantha|karen|victoria|zira|aria|moira|susan/i) || voices[0];
    }
    resolveKidVoices();
    const voice = who === "brother" ? brotherVoice : sisterVoice;
    if (!isDeepVoice(voice)) return voice;
    const prefs = who === "brother" ? BROTHER_VOICE_PREFS : SISTER_VOICE_PREFS;
    return firstMatch(childVoices(voices), prefs);
  }

  function estimateReadMs(text) {
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1600, words * 380);
  }

  async function waitForSpeechIdle() {
    let quietTicks = 0;
    while (quietTicks < 4) {
      await pause(120);
      if (!speechSynthesis.speaking && !speechSynthesis.pending) quietTicks++;
      else quietTicks = 0;
    }
    await pause(420);
  }

  function speakOne(who, text) {
    return new Promise((resolve) => {
      const readMs = estimateReadMs(text);

      if (!voiceOn || !window.speechSynthesis) {
        setTimeout(resolve, readMs);
        return;
      }

      speechSynthesis.cancel();

      const u = new SpeechSynthesisUtterance(text);
      const cfg = SPEAKERS[who];
      const v = pickVoice(who);
      if (v && !isDeepVoice(v)) u.voice = v;
      u.pitch = cfg.pitch;
      u.rate = cfg.rate;
      u.volume = 0.95;

      let settled = false;
      const finish = async () => {
        if (settled) return;
        settled = true;
        clearInterval(keepAlive);
        clearTimeout(fallback);
        await waitForSpeechIdle();
        resolve();
      };

      u.onend = () => finish();
      u.onerror = () => finish();

      // Chrome/Safari: keep long utterances alive without ending early
      const keepAlive = setInterval(() => {
        if (settled) return;
        if (speechSynthesis.speaking) {
          if (speechSynthesis.paused) speechSynthesis.resume();
          else {
            speechSynthesis.pause();
            speechSynthesis.resume();
          }
        }
      }, 9000);

      const fallback = setTimeout(() => finish(), Math.min(180000, readMs + 12000));

      speechSynthesis.speak(u);
    });
  }

  function speak(who, text) {
    speakQueue = speakQueue.then(() => speakOne(who, text));
    return speakQueue;
  }

  function setSpeaker(who) {
    cast.querySelectorAll(".person").forEach((el) => {
      el.classList.toggle("speaking", el.dataset.who === who);
    });
  }

  function clearSpeaker() {
    cast.querySelectorAll(".person").forEach((el) => el.classList.remove("speaking"));
  }

  function addToLog(who, text) {
    const item = document.createElement("div");
    item.className = `log-line from-${who}`;
    const name = SPEAKERS[who].label + (SPEAKERS[who].age ? ` (${SPEAKERS[who].age})` : "");
    item.innerHTML = `<span class="log-name">${name}</span><span class="log-text">${escapeHtml(text)}</span>`;
    chatLog.appendChild(item);
    while (chatLog.children.length > 5) chatLog.removeChild(chatLog.firstChild);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function showLine(idx) {
    const line = window.CONVERSATION[idx];
    if (!line) return;
    const cfg = SPEAKERS[line.who];
    const name = cfg.label + (cfg.age ? ` (${cfg.age})` : "");
    activeLabel.textContent = name;
    activeLabel.style.color = COLORS[line.who];
    activeBubble.textContent = line.text;
    activeBubble.className = `bubble from-${line.who}`;
    progressFill.style.width = `${((idx + 1) / window.CONVERSATION.length) * 100}%`;
    progressLabel.textContent = `Line ${idx + 1} of ${window.CONVERSATION.length}`;
    setSpeaker(line.who);
  }

  async function playConversation(token) {
    const lines = window.CONVERSATION;
    for (let i = lineIndex; i < lines.length; i++) {
      if (token !== playToken || !running) return;
      lineIndex = i;
      const line = lines[i];
      showLine(i);
      await speak(line.who, line.text);
      if (token !== playToken || !running) return;
      addToLog(line.who, line.text);
      await pause(650);
    }
    clearSpeaker();
    activeLabel.textContent = "The end";
    activeBubble.textContent = "Sweet dreams… (click Play to watch again)";
    activeBubble.className = "bubble from-grok";
    lineIndex = 0;
    if (running) {
      await pause(2000);
      if (token === playToken && running) playConversation(token);
    }
  }

  function pause(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function playPluck(time, freq, dur = 0.14) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(0.06, time + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, time + dur);
    osc.connect(g);
    g.connect(music.master);
    osc.start(time);
    osc.stop(time + dur + 0.05);
  }

  function scheduleMusicLoop() {
    if (!running || !musicOn || !ctx) return;
    clearTimeout(music.loopTimer);
    const beat = 0.45;
    const loopDur = beat * 8;
    const startAt = ctx.currentTime + 0.05;
    const notes = [392, 440, 494, 523, 494, 440, 392, 349];
    notes.forEach((n, i) => playPluck(startAt + i * beat, n));
    music.loopTimer = setTimeout(scheduleMusicLoop, loopDur * 1000 - 60);
  }

  function startMusic() {
    if (!ctx || !musicOn) return;
    clearTimeout(music?.loopTimer);
    music.master.gain.setTargetAtTime(0.14, ctx.currentTime, 0.05);
    scheduleMusicLoop();
  }

  function stopMusic() {
    if (!music) return;
    clearTimeout(music.loopTimer);
    if (ctx) music.master.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
  }

  function initAudio() {
    if (ctx) return;
    ctx = new AudioContext();
    music = { master: ctx.createGain(), loopTimer: null };
    music.master.gain.value = 0;
    music.master.connect(ctx.destination);
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => {
      speechSynthesis.getVoices();
      brotherVoice = null;
      sisterVoice = null;
      resolveKidVoices();
    };
  }

  function waitForVoices() {
    return new Promise((resolve) => {
      const ready = () => {
        brotherVoice = null;
        sisterVoice = null;
        resolveKidVoices();
        resolve();
      };
      if (speechSynthesis.getVoices().length) {
        ready();
        return;
      }
      speechSynthesis.onvoiceschanged = ready;
      setTimeout(ready, 1200);
    });
  }

  async function startShow() {
    initAudio();
    ctx.resume();
    await waitForVoices();
    running = true;
    playToken++;
    document.body.classList.add("audio-on");
    startMusic();
    playConversation(playToken);
    updatePlayButton();
  }

  function stopShow() {
    running = false;
    playToken++;
    speakQueue = Promise.resolve();
    document.body.classList.remove("audio-on");
    speechSynthesis.cancel();
    stopMusic();
    clearSpeaker();
    updatePlayButton();
  }

  function updatePlayButton() {
    const btn = document.getElementById("btn-play");
    if (!btn) return;
    btn.textContent = running ? "⏸ Pause" : "▶ Play conversation";
    btn.setAttribute("aria-pressed", running ? "true" : "false");
  }

  function wireControls() {
    document.getElementById("btn-play")?.addEventListener("click", () => {
      running ? stopShow() : startShow();
    });
    document.getElementById("btn-music")?.addEventListener("click", (e) => {
      musicOn = !musicOn;
      e.currentTarget.classList.toggle("off", !musicOn);
      if (running) musicOn ? startMusic() : stopMusic();
    });
    document.getElementById("btn-voice")?.addEventListener("click", (e) => {
      voiceOn = !voiceOn;
      e.currentTarget.classList.toggle("off", !voiceOn);
      if (!voiceOn) speechSynthesis.cancel();
    });
    document.getElementById("btn-restart")?.addEventListener("click", () => {
      lineIndex = 0;
      chatLog.innerHTML = "";
      progressFill.style.width = "0%";
      progressLabel.textContent = `Line 0 of ${window.CONVERSATION.length}`;
      if (running) {
        playToken++;
        playConversation(playToken);
      } else {
        activeLabel.textContent = "";
        activeBubble.textContent = "Press Play to start the kids' chat with Grok Ara.";
        activeBubble.className = "bubble";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireControls);
  } else {
    wireControls();
  }
})();
