/**
 * Episode 19 — The Mace Duel
 * Shalya Parva (Gada-yuddha) · late afternoon and night of the eighteenth day of Kurukshetra · uru-bhanga
 * Logic pass 2026-10-07: hunters lead the Pandavas to the lake where Duryodhana hides → Yudhishthira calls him out and offers:
 * fight any one of us with any weapon, win and be king → Krishna is alarmed (no Pandava matches Duryodhana's skill with the
 * mace) → Bhima steps forward → Balarama arrives from his pilgrimage and leads them to Samantapanchaka → the duel: Bhima
 * stronger, Duryodhana more skilful → Krishna tells Arjuna that Bhima must keep his vow; Arjuna slaps his left thigh →
 * Duryodhana leaps, Bhima's mace breaks his thighs → Balarama raises his plough in fury; Krishna calms him with the vow →
 * at nightfall the fallen king names Ashwatthama commander.
 * Picks up Ep 18's closing line ("Shalya has fallen. Duryodhana hides in the lake — and the Pandavas are coming.").
 * The night raid (Sauptika Parva) is left for Ep 20.
 * Sources: BORI CE/Debroy (Shalya Parva, Debroy vol. 7) + Gita Press Gorakhpur (Shalya Parva adhyaya 30–34, 54–58, 60, 65,
 * vulgate) + K.M. Ganguli (Shalya Parva §30–§34, §54–§58, §60, §65). See plate-bible source_block.
 * Family-friendly: no gore, no bodies, no wounds shown. Kripa, Kritavarma, Nakula, Sahadeva and the hunters are narrated only.
 * Krishna = Ep 04 lock (official reference). Balarama = new Ep 19 lock.
 *
 * Audio: orion-00…08 rendered with free local Kokoro-82M bm_george (tools/render_local_voice.sh, speed 0.9);
 * see logic-reviews/RR-tts-kokoro.md. Stills: SuperGrok consumer Imagine (grok.com), prompt pack at
 * stills/_inbox/consumer-imagine/PROMPTS.md (1 scene master + 1 lock + 9 plates + poster).
 * Music: Raga Bageshri preset (js/main.js RAGA_PRESETS.bageshri) — never default flute+tabla.
 */
export const EPISODE = {
  id: "19",
  slug: "mace-duel",
  title: "The Mace Duel",
  subtitle: "Eighteenth day — the lake and the mace",
  style: "cinematic-plates",
  stillsDir: "episodes/19-mace-duel/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep19-kokoro-20261007",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/19-mace-duel/audio/",
  },
  music: {
    raga: "bageshri",
    note: "Raga Bageshri (Kafi thaat) — the late-night raga of longing and loss, for the fallen king by the dark lake: n D S g m D n S' ascending, S' n D m P D g m g R S descending; komal Ga and komal Ni, Pa only lightly touched; dwelling on Ma and Dha. Tanpura + bansuri, no tabla. Duck under narration. Not used by any earlier episode. Player preset: js/main.js RAGA_PRESETS.bageshri (B2, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/19-mace-duel/stills/poster.jpg",
  },
  plates: {
    shore: "plate-shore.jpg",
    rise: "plate-rise.jpg",
    warn: "plate-warn.jpg",
    balarama: "plate-balarama.jpg",
    duel: "plate-duel.jpg",
    signal: "plate-signal.jpg",
    strike: "plate-strike.jpg",
    wrath: "plate-wrath.jpg",
    vow: "plate-vow.jpg",
  },
  end: {
    title: "End of Episode 19",
    line: "The war is won by day. By night, Ashwatthama swears revenge.",
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
      plate: "shore",
      zoom: 1.05,
      panX: 0,
      panY: 0,
      audio: "orion-00.mp3",
      who: "Narrator",
      text: "Hunters lead the Pandavas to a lake where Duryodhana hides beneath the still water. Yudhishthira calls out: “Rise and fight, Duryodhana!”",
    },
    {
      t: 12,
      plate: "rise",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "Duryodhana rises, mace in hand. Yudhishthira makes an offer: “Fight any one of us, with any weapon. Win, and the kingdom is yours.”",
    },
    {
      t: 24,
      plate: "warn",
      zoom: 1.12,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "Krishna is alarmed at the rash offer: with the mace, Duryodhana has no equal. But Bhima steps forward, his great mace raised.",
    },
    {
      t: 36,
      plate: "balarama",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-03.mp3",
      who: "Narrator",
      text: "Then Balarama arrives from his pilgrimage, teacher of both men. He leads them to the holy lakes of Samantapanchaka to fight.",
    },
    {
      t: 48,
      plate: "duel",
      zoom: 1.14,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "Bhima and Duryodhana circle and clash like two mountains. Bhima is the stronger, but Duryodhana is the more skilful.",
    },
    {
      t: 60,
      plate: "signal",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "Krishna tells Arjuna: “Fairly, Bhima cannot win. Let him keep his vow.” Arjuna strikes his own left thigh, and Bhima sees.",
    },
    {
      t: 72,
      plate: "strike",
      zoom: 1.16,
      panX: 0,
      panY: -0.03,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "Duryodhana leaps high. Bhima’s mace sweeps low and breaks his thighs, and the Kaurava king crashes to the earth.",
    },
    {
      t: 84,
      plate: "wrath",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "Balarama raises his plough in fury: a blow below the navel breaks the law of the mace. Krishna calms him: it was Bhima’s vow.",
    },
    {
      t: 96,
      plate: "vow",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "Night falls. Duryodhana lies by the lake, unable to rise. Ashwatthama comes to him, and the fallen king names him commander.",
    },
    {
      t: 108,
      plate: "vow",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
