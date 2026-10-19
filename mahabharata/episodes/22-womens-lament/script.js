/**
 * Episode 22 — The Women's Lament
 * Stri Parva (Jalapradanika, Stri-vilapa and Shraddha sub-parvas) · the days after the war
 * Logic pass 2026-10-19: the blind king Dhritarashtra comes from Hastinapura to the field with Gandhari, Kunti and the Kuru
 * women → Gandhari's grief turns to anger; Vyasa reminds her "where dharma is, there is victory" and she forgives the
 * Pandavas → Kunti weeps over her sons and raises Draupadi, who has lost all her children; Gandhari holds them both → by
 * Vyasa's boon Gandhari sees the whole field through her blindfold → her grief turns on Krishna: the curse of the
 * thirty-sixth year → Krishna accepts it with a faint smile; the Pandavas stand stunned → at Dhritarashtra's word
 * Yudhishthira orders last rites for all the fallen; the fires burn all night (shown only as a distant glow) → at the Ganga
 * the women offer water; Kunti reveals that Karna was the eldest brother → Yudhishthira offers water to Karna.
 * Picks up Ep 21's closing line ("The jewel is home and the war is over. Now the women of both houses come to the field to grieve.").
 * Sources: BORI CE/Debroy (Stri Parva ch. 9–27, Debroy vol. 8) + Gita Press Gorakhpur (Stri Parva adhyaya 10–27, vulgate)
 * + K.M. Ganguli (Stri Parva §10–§27). See plate-bible source_block.
 * Family-friendly: grief told with dignity — no bodies, no gore, no wounds, no blood, no corpses; the field is shown by
 * implication (empty chariots, fallen banners, lamps, the river). Karna and Draupadi's sons are narrated only.
 * Krishna = Ep 04 lock (official reference) on curse, accept. Draupadi = Ep 04 lock. Dhritarashtra = Ep 08 lock.
 * Vyasa = Ep 21 lock. Gandhari, Kunti (aged forward from Ep 03) = new Ep 22 locks.
 *
 * Audio: orion-00…08 rendered with free local Kokoro-82M bm_george (tools/render_local_voice.sh, speed 0.9);
 * see logic-reviews/RR-tts-kokoro.md. Stills: SuperGrok consumer Imagine (grok.com), prompt pack at
 * stills/_inbox/consumer-imagine/PROMPTS.md (1 scene master + 2 locks + 9 plates + poster).
 * Music: Raga Jogiya preset (js/main.js RAGA_PRESETS.jogiya) — never default flute+tabla.
 */
export const EPISODE = {
  id: "22",
  slug: "womens-lament",
  title: "The Women's Lament",
  subtitle: "After the war — the women of both houses on the field",
  style: "cinematic-plates",
  stillsDir: "episodes/22-womens-lament/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep22-kokoro-20261019",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/22-womens-lament/audio/",
  },
  music: {
    raga: "jogiya",
    note: "Raga Jogiya (Bhairav thaat) — the dawn raga of the jogi: karuna and viraha, longing and renunciation, the grief of parting that has turned to acceptance — the mothers on the field and the water-offerings at the Ganga at sunrise. S r m P d S' ascending (Ga and Ni omitted in the ascent), S' N d P, d m, P d m, G r S descending; komal Re and Dha, shuddha Ga and Ni (Ga and Ni light); vadi shuddha Ma, samvadi Sa; pakad r m P d, d m, m G r S. Tanpura + bansuri, no tabla. Duck under narration. Not used by any earlier episode (Ep 15 Shree, 16 Adana, 17 Multani, 18 Brindavani Sarang, 19 Bageshri, 20 Shankara, 21 Jaunpuri; Ep 09 Bhairav, 10 Darbari, 14 Miyan ki Todi). Player preset: js/main.js RAGA_PRESETS.jogiya (A#2, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/22-womens-lament/stills/poster.jpg",
  },
  plates: {
    arrive: "plate-arrive.jpg",
    forgive: "plate-forgive.jpg",
    mothers: "plate-mothers.jpg",
    sight: "plate-sight.jpg",
    curse: "plate-curse.jpg",
    accept: "plate-accept.jpg",
    rites: "plate-rites.jpg",
    reveal: "plate-reveal.jpg",
    offering: "plate-offering.jpg",
  },
  end: {
    title: "End of Episode 22",
    line: "The water rites are done. Yudhishthira rises from the Ganga — a king who no longer wants a kingdom.",
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
      plate: "arrive",
      zoom: 1.05,
      panX: 0,
      panY: 0,
      audio: "orion-00.mp3",
      who: "Narrator",
      text: "From Hastinapura the blind king Dhritarashtra comes to the field, with Gandhari, Kunti and all the women of the Kuru house.",
    },
    {
      t: 12,
      plate: "forgive",
      zoom: 1.1,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "Gandhari's grief turns to anger. Vyasa reminds her: 'Where dharma is, there is victory.' And she forgives the Pandavas.",
    },
    {
      t: 24,
      plate: "mothers",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "Kunti weeps over her sons, then lifts up Draupadi, who has lost all her children. Gandhari holds them both: 'I grieve as you do.'",
    },
    {
      t: 36,
      plate: "sight",
      zoom: 1.12,
      panX: 0,
      panY: -0.03,
      audio: "orion-03.mp3",
      who: "Narrator",
      text: "By Vyasa's boon, Gandhari sees the whole field through her blindfold, as if it lay close beside her. Across it, the women weep.",
    },
    {
      t: 48,
      plate: "curse",
      zoom: 1.14,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "Then her grief turns on Krishna. 'You could have stopped this war. In thirty-six years your own clan will fall, and its women will weep like these.'",
    },
    {
      t: 60,
      plate: "accept",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "Krishna accepts it with a faint smile. 'None but I could end my clan,' he says. The Pandavas stand stunned.",
    },
    {
      t: 72,
      plate: "rites",
      zoom: 1.16,
      panX: 0,
      panY: -0.03,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "At Dhritarashtra's word, Yudhishthira orders last rites for all the fallen, friend and foe. All night, the fires burn and hymns rise.",
    },
    {
      t: 84,
      plate: "reveal",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "At the Ganga, the women offer water to their dead. Then Kunti weeps: 'Karna was your eldest brother. Offer water to him too.'",
    },
    {
      t: 96,
      plate: "offering",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "Yudhishthira grieves for the brother he never knew. Standing in the Ganga, he offers water to Karna, eldest son of Kunti.",
    },
    {
      t: 108,
      plate: "offering",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
