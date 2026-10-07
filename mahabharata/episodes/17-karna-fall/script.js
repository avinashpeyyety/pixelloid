/**
 * Episode 17 — The Fall of Karna
 * Karna Parva · seventeenth day of Kurukshetra · Karna–Arjuna dvairatha + karna-vadha
 * Logic pass 2026-10-07: Krishna drives Arjuna, Shalya drives Karna; the two archers meet and heaven takes sides →
 * Karna fits the serpent-mouthed arrow; Shalya says it will miss and to fit another; "Karna never aims twice" →
 * Krishna presses the chariot into the earth with his feet, the horses kneel, the arrow takes only Arjuna's crown
 * (he binds his hair with a white cloth) → the earth seizes Karna's wheel through the Brahmin's curse and
 * Parashurama's Brahma weapon slips from his memory → Karna leaps down to lift the wheel and asks Arjuna to wait →
 * Krishna: where was your dharma when Draupadi was dragged into the hall in a single cloth and you laughed? →
 * Arjuna cuts down the standard and looses the Anjalika, bright as a sunbeam → in the afternoon Karna falls; a light
 * rises from his body into the sky → Krishna and Arjuna blow their conchs; Arjuna does not know Karna was Kunti's
 * firstborn — Krishna does.
 * Picks up Ep 16's closing line ("Shalya holds the reins. Karna rides to meet Arjuna."). Shalya's command on the
 * eighteenth day is left for Ep 18.
 * Sources: BORI CE/Debroy (Karna Parva 8.63–8.68; Udyoga 5.138–139; Stri 11.27) + Gita Press Gorakhpur (Karna Parva
 * adhyaya 87, 90–91, vulgate) + K.M. Ganguli (Karna Parva §87, §90–91; Udyoga §140; Stri §27). See plate-bible source_block.
 * Family-friendly: no gore, no bodies, no severed head. Draupadi, Kunti, Surya, Indra, the Brahmin and Parashurama are
 * narrated only, never drawn. Krishna = Ep 04 lock (official reference).
 *
 * Audio: orion-00…08 rendered with free local Kokoro-82M bm_george (tools/render_local_voice.sh, speed 0.9);
 * see logic-reviews/RR-tts-kokoro.md. Stills: NOT generated — SuperGrok consumer prompt pack at
 * stills/_inbox/consumer-imagine/PROMPTS.md (1 scene master + 9 plates + poster).
 * Music: Raga Multani preset (js/main.js RAGA_PRESETS.multani) — never default flute+tabla.
 */
export const EPISODE = {
  id: "17",
  slug: "karna-fall",
  title: "The Fall of Karna",
  subtitle: "Seventeenth day of Kurukshetra",
  style: "cinematic-plates",
  stillsDir: "episodes/17-karna-fall/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep17-kokoro-20261007",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/17-karna-fall/audio/",
  },
  music: {
    raga: "multani",
    note: "Raga Multani (Todi thaat) — the grave raga of the third prahar, late afternoon, the hour Karna falls: komal Re, komal Ga, tivra Ma, komal Dha; Re and Dha skipped in the ascent (N S g M P N S'), dwelling on komal Ga and Pa; karuna rasa with a hero's gravity. Tanpura + sparse bansuri, no tabla. Duck under narration. Not used by any earlier episode. Player preset: js/main.js RAGA_PRESETS.multani (G#2, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/17-karna-fall/stills/poster.jpg",
  },
  plates: {
    meet: "plate-meet.jpg",
    serpent: "plate-serpent.jpg",
    crown: "plate-crown.jpg",
    wheel: "plate-wheel.jpg",
    plea: "plate-plea.jpg",
    rebuke: "plate-rebuke.jpg",
    anjalika: "plate-anjalika.jpg",
    fall: "plate-fall.jpg",
    conch: "plate-conch.jpg",
  },
  end: {
    title: "End of Episode 17",
    line: "Karna has fallen. On the eighteenth day, Shalya will lead the Kauravas.",
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
      plate: "meet",
      zoom: 1.05,
      panX: 0,
      panY: 0,
      audio: "orion-00.mp3",
      who: "Narrator",
      text: "Seventeenth day. Krishna drives Arjuna; Shalya drives Karna. The two great archers meet at last, and heaven itself takes sides.",
    },
    {
      t: 12,
      plate: "serpent",
      zoom: 1.12,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "Karna fits his serpent-mouthed arrow. “It will miss — fit another,” Shalya warns. “Karna never aims twice,” he answers.",
    },
    {
      t: 24,
      plate: "crown",
      zoom: 1.14,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "Krishna presses the chariot into the earth with his feet. The horses kneel, and the arrow takes only Arjuna’s crown.",
    },
    {
      t: 36,
      plate: "wheel",
      zoom: 1.14,
      panX: 0.03,
      panY: -0.02,
      audio: "orion-03.mp3",
      who: "Narrator",
      text: "Then the earth swallows Karna’s wheel, as a Brahmin once cursed — and Parashurama’s Brahma weapon slips from his memory.",
    },
    {
      t: 48,
      plate: "plea",
      zoom: 1.14,
      panX: -0.02,
      panY: 0.02,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "Karna leaps down to heave at the wheel. “Wait, Arjuna! You stand on a chariot — I stand on the ground.”",
    },
    {
      t: 60,
      plate: "rebuke",
      zoom: 1.12,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "Krishna answers: “Where was your dharma when Draupadi was dragged into the hall in a single cloth — and you laughed?”",
    },
    {
      t: 72,
      plate: "anjalika",
      zoom: 1.16,
      panX: 0,
      panY: -0.03,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "Karna fights on. Arjuna cuts down his standard, then draws the Anjalika arrow, bright as a sunbeam, and looses it.",
    },
    {
      t: 84,
      plate: "fall",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "In the afternoon Karna, son of the Sun, falls. A radiant light rises from his body and climbs into the sky.",
    },
    {
      t: 96,
      plate: "conch",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "Krishna and Arjuna blow their conchs. Arjuna does not know Karna was Kunti’s firstborn — his own elder brother. Krishna knows.",
    },
    {
      t: 108,
      plate: "conch",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
