(function () {
  const SPEAKERS = {
    brother: { label: "Brother", age: "7", pitch: 1.28, rate: 1.08 },
    sister: { label: "Sister", age: "5", pitch: 1.45, rate: 1.12 },
    grok: { label: "Grok Ara", age: "", pitch: 1.02, rate: 0.94 },
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

  const chatLog = document.getElementById("chat-log");
  const activeBubble = document.getElementById("active-bubble");
  const activeLabel = document.getElementById("active-label");
  const progressFill = document.getElementById("progress-fill");
  const progressLabel = document.getElementById("progress-label");
  const cast = document.getElementById("cast");

  function pickVoice(who) {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return null;
    if (who === "grok") {
      return voices.find((v) => /female|samantha|karen|victoria|zira|aria/i.test(v.name)) || voices[0];
    }
    if (who === "sister") {
      return voices.find((v) => /child|junior|samantha|karen/i.test(v.name)) || voices[0];
    }
    return voices.find((v) => /male|boy|alex|daniel|fred/i.test(v.name)) || voices[Math.min(1, voices.length - 1)];
  }

  function speak(who, text) {
    return new Promise((resolve) => {
      if (!voiceOn || !window.speechSynthesis) {
        resolve();
        return;
      }
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const cfg = SPEAKERS[who];
      const v = pickVoice(who);
      if (v) u.voice = v;
      u.pitch = cfg.pitch;
      u.rate = cfg.rate;
      u.volume = 0.95;
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        resolve();
      };
      u.onend = finish;
      u.onerror = finish;
      const ms = Math.min(16000, Math.max(900, text.length * 42));
      setTimeout(finish, ms);
      speechSynthesis.speak(u);
    });
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
      await pause(280);
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
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }

  function startShow() {
    initAudio();
    ctx.resume();
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
