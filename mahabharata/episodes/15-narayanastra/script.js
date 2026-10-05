/**
 * Episode 15 — The Narayana Weapon
 * Drona Parva · fifteenth day, afternoon · Narayanastra-mokshana upaparva
 * Logic pass 2026-10-05: Ashwatthama hears how Drona was disarmed → vows, looses the Narayana weapon →
 * sky of fire, the harder anyone fights the fiercer it grows, Yudhishthira despairs → Krishna: lay down
 * weapons, step down → Yudhishthira lays down his bow, Arjuna vows Gandiva will not be raised against it →
 * Bhima alone resists with his mace, the fire gathers on him → Krishna and Arjuna, unarmed, drag him down
 * and take his mace → weapon pacified, sky clears → Duryodhana asks again; it cannot be called twice.
 * Picks up Ep 14's closing line ("Ashwatthama's wrath is coming"); Karna Parva (Karna as commander) is Ep 16.
 * Sources: BORI CE/Debroy + Gita Press Gorakhpur + K.M. Ganguli (Drona Parva §193–201). See plate-bible source_block.
 * Family-friendly: no gore, no bodies; the weapon is shown as golden fire in the sky.
 *
 * Audio: orion-00…08 rendered 2026-10-05 with free local Kokoro-82M bm_george (tools/render_local_voice.sh,
 * speed 0.9); PRONOUNCE adds Narayana/Gandiva. Longest clip 9.50 s — all fit the 12 s grid (≥1 s gap), no retime.
 * Music: Raga Shree preset (js/main.js RAGA_PRESETS.shree) — never default flute+tabla.
 */
export const EPISODE = {
  id: "15",
  slug: "narayanastra",
  title: "The Narayana Weapon",
  subtitle: "Fifteenth day of Kurukshetra — afternoon",
  style: "cinematic-plates",
  stillsDir: "episodes/15-narayanastra/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep15-kokoro-20261005",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/15-narayanastra/audio/",
  },
  music: {
    raga: "shree",
    note: "Raga Shree (Purvi thaat) — grave sunset raga of awe and surrender: komal Re (with andolan), tivra Ma, komal Dha; Ga and Dha light. Tanpura + sparse bansuri, no tabla. Duck under narration. Player preset: js/main.js RAGA_PRESETS.shree (A2 mandra, andolan on komal Re, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/15-narayanastra/stills/poster.jpg",
  },
  plates: {
    wide: "plate-wide.jpg",
    invoke: "plate-invoke.jpg",
    storm: "plate-storm.jpg",
    counsel: "plate-counsel.jpg",
    surrender: "plate-surrender.jpg",
    bhima: "plate-bhima.jpg",
    pull: "plate-pull.jpg",
    calm: "plate-calm.jpg",
    once: "plate-once.jpg",
  },
  end: {
    title: "End of Episode 15",
    line: "The Narayana weapon is spent. Soon Karna will lead the Kaurava host.",
    next: "index.html",
    nextLabel: "All episodes",
  },
  palette: {
    cloth: "#c4a06a",
    vermillion: "#b83218",
    saffron: "#e08a1e",
    gold: "#e8c547",
    indigo: "#1a2744",
    leaf: "#2a5a38",
  },
  beats: [
    {
      t: 0,
      plate: "wide",
      zoom: 1.05,
      panX: 0,
      panY: 0,
      audio: "orion-00.mp3",
      who: "Narrator",
      text: "Afternoon of the fifteenth day. Ashwatthama, Drona’s son, hears how his father was tricked — and grief turns to fire.",
    },
    {
      t: 12,
      plate: "invoke",
      zoom: 1.14,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "He swears vengeance and calls up the Narayana weapon — once Narayana’s gift to his father, now passed to the son.",
    },
    {
      t: 24,
      plate: "storm",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "Arrows, discs and maces of fire fill the sky. The harder anyone fights, the fiercer it burns — and Yudhishthira despairs.",
    },
    {
      t: 36,
      plate: "counsel",
      zoom: 1.14,
      panX: 0.03,
      panY: -0.02,
      audio: "orion-03.mp3",
      who: "Krishna",
      text: "Lay down your weapons! Step down from your chariots! This weapon spares whoever stands unarmed on the earth.",
    },
    {
      t: 48,
      plate: "surrender",
      zoom: 1.16,
      panX: 0,
      panY: -0.03,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "Yudhishthira sets his bow on the earth. Arjuna vows that Gandiva will never be raised against this weapon.",
    },
    {
      t: 60,
      plate: "bhima",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "Only Bhima refuses. “I will answer it with my mace!” He charges — and all the fire gathers around him.",
    },
    {
      t: 72,
      plate: "pull",
      zoom: 1.14,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "Unarmed, Krishna and Arjuna run into the flames and pull Bhima down from his chariot, taking the mace from his hands.",
    },
    {
      t: 84,
      plate: "calm",
      zoom: 1.16,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "Disarmed and on the earth, Bhima is spared. The Narayana weapon fades, the sky clears, and a cool wind crosses the field.",
    },
    {
      t: 96,
      plate: "once",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "Duryodhana begs for it again. “It cannot be called twice,” Ashwatthama answers. “Called back, it would slay its caller.”",
    },
    {
      t: 108,
      plate: "once",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
