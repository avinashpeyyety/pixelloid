/**
 * Episode 21 — The Brahmashira
 * Sauptika Parva, Aishika sub-parva · the morning after the night raid and the day of the pursuit
 * Logic pass 2026-10-15: morning in the ruined camp — Draupadi, grieving her five sons, vows to fast until Ashwatthama's
 * forehead jewel is brought → Bhima, bow in hand, rides after him toward the Ganga → Krishna warns that Ashwatthama holds the
 * brahmashira and drives Arjuna and Yudhishthira after Bhima → at Vyasa's hermitage on the Ganga, Ashwatthama sees Bhima and
 * turns a blade of grass into the brahmashira → at Krishna's word Arjuna looses his own, to quell it, with a blessing for all →
 * Vyasa and Narada step between the two fires → Arjuna withdraws his; Ashwatthama cannot and turns his on the unborn heir of
 * the Pandavas (implication only) → Krishna's word that the child will live; the jewel yielded; Ashwatthama walks away alone →
 * Bhima places the jewel in Draupadi's hands; she gives it to Yudhishthira to wear.
 * Picks up Ep 20's closing line ("The night is over. The Pandavas learn what it has done — and Bhima rides after Ashwatthama.").
 * Sources: BORI CE/Debroy (Sauptika Parva ch. 10–16, Aishika sub-parva, Debroy vol. 7) + Gita Press Gorakhpur (Sauptika Parva,
 * Aishika Parva adhyaya 10–16, vulgate) + K.M. Ganguli (Sauptika Parva §10–§16). See plate-bible source_block.
 * Family-friendly: no gore, no wounds; the weapon on the womb is told by implication only — no woman, unborn child or baby is
 * drawn. Nakula, Uttara and Draupadi's sons are narrated only.
 * Krishna = Ep 04 lock (official reference) on follow, answer, word. Draupadi = Ep 04 lock. Vyasa, Narada = new Ep 21 locks.
 *
 * Audio: orion-00…08 rendered with free local Kokoro-82M bm_george (tools/render_local_voice.sh, speed 0.9);
 * see logic-reviews/RR-tts-kokoro.md. Stills: SuperGrok consumer Imagine (grok.com), prompt pack at
 * stills/_inbox/consumer-imagine/PROMPTS.md (1 scene master + 2 locks + 9 plates + poster).
 * Music: Raga Jaunpuri preset (js/main.js RAGA_PRESETS.jaunpuri) — never default flute+tabla.
 */
export const EPISODE = {
  id: "21",
  slug: "brahmashira",
  title: "The Brahmashira",
  subtitle: "The morning after the night raid — the jewel on Ashwatthama's brow",
  style: "cinematic-plates",
  stillsDir: "episodes/21-brahmashira/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep21-kokoro-20261015",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/21-brahmashira/audio/",
  },
  music: {
    raga: "jaunpuri",
    note: "Raga Jaunpuri (Asavari thaat) — the late-morning raga (second prahar of the day, 9 AM–noon) of gravity and karuna, with veer rasa beneath it: the grieving queen's vow and the day-long pursuit to the Ganga. S R m P d n S' ascending (Ga omitted in the ascent), S' n d P, m g R S descending; komal Ga, Dha and Ni; vadi komal Dha, samvadi komal Ga; pakad m P d, m P, n d P, m g R S. Tanpura + bansuri, no tabla. Duck under narration. Not used by any earlier episode (Ep 15 Shree, 16 Adana, 17 Multani, 18 Brindavani Sarang, 19 Bageshri, 20 Shankara; Ep 10 Darbari, Ep 14 Miyan ki Todi). Player preset: js/main.js RAGA_PRESETS.jaunpuri (G2, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/21-brahmashira/stills/poster.jpg",
  },
  plates: {
    vow: "plate-vow.jpg",
    ride: "plate-ride.jpg",
    follow: "plate-follow.jpg",
    loose: "plate-loose.jpg",
    answer: "plate-answer.jpg",
    between: "plate-between.jpg",
    turn: "plate-turn.jpg",
    word: "plate-word.jpg",
    home: "plate-home.jpg",
  },
  end: {
    title: "End of Episode 21",
    line: "The jewel is home and the war is over. Now the women of both houses come to the field to grieve.",
    next: "index.html",
    nextLabel: "All episodes",
  },
  palette: {
    cloth: "#c4ad84",
    vermillion: "#a8321c",
    saffron: "#e0902a",
    gold: "#e6c656",
    indigo: "#203250",
    leaf: "#3a5a3e",
  },
  beats: [
    {
      t: 0,
      plate: "vow",
      zoom: 1.05,
      panX: 0,
      panY: 0,
      audio: "orion-00.mp3",
      who: "Narrator",
      text: "Morning finds the ruined camp. Draupadi, grieving her five sons, vows to fast until Ashwatthama's forehead jewel is brought to her.",
    },
    {
      t: 12,
      plate: "ride",
      zoom: 1.1,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "Bhima will not wait. Bow in hand, he races out in his chariot, following Ashwatthama's tracks toward the Ganga.",
    },
    {
      t: 24,
      plate: "follow",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "Krishna warns that Ashwatthama holds the brahmashira, which can burn the worlds. With Arjuna and Yudhishthira, he races after Bhima.",
    },
    {
      t: 36,
      plate: "loose",
      zoom: 1.12,
      panX: 0,
      panY: -0.03,
      audio: "orion-03.mp3",
      who: "Narrator",
      text: "At Vyasa's hermitage on the Ganga, Ashwatthama sees Bhima coming. He plucks a blade of grass, and it blazes into the brahmashira.",
    },
    {
      t: 48,
      plate: "answer",
      zoom: 1.14,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "At Krishna's word, Arjuna looses his own brahmashira — to quell the other weapon, with a blessing for all the worlds.",
    },
    {
      t: 60,
      plate: "between",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "The two fires rush to meet. Vyasa and Narada step between them, calm and shining, and bid both warriors call their weapons back.",
    },
    {
      t: 72,
      plate: "turn",
      zoom: 1.16,
      panX: 0,
      panY: -0.03,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "Arjuna withdraws his weapon. Ashwatthama cannot. Instead, he turns his against the unborn heir of the Pandavas.",
    },
    {
      t: 84,
      plate: "word",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "Krishna gives his word: the child will be born, and will live. Ashwatthama yields the jewel from his forehead, and walks away alone.",
    },
    {
      t: 96,
      plate: "home",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "Bhima places the jewel in Draupadi's hands. Her vow fulfilled, she gives it to Yudhishthira, to wear upon his head.",
    },
    {
      t: 108,
      plate: "home",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
