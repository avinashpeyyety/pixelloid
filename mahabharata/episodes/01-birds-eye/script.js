/**
 * Episode 01 — The Bird's Eye
 * Dronācārya’s test: what do you see?
 *
 * Beats drive phad-camera (pan/zoom on the cloth), focus, and dialogue.
 * Style: Phad / Pattachitra narrative scroll.
 */
export const EPISODE = {
  id: "01",
  title: "The Bird's Eye",
  subtitle: "Drona’s test of Arjuna",
  style: "phad-pattachitra",
  totalSec: 88,
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
      cam: "wide",
      focus: 0,
      who: "Narrator",
      text: "In the gardens of Hastināpura, the ācārya sets a test no prince will forget.",
    },
    {
      t: 8,
      cam: "drona",
      focus: 0.15,
      who: "Drona",
      text: "There — a bird upon the tree. Fix an arrow. Tell me what you see.",
    },
    {
      t: 16,
      cam: "princes",
      focus: 0.2,
      who: "Narrator",
      text: "One by one they speak of leaves, of sky, of feathers catching light.",
    },
    {
      t: 24,
      cam: "bird",
      focus: 0.35,
      who: "Prince",
      text: "I see the bird, the branch, the cloud behind it…",
    },
    {
      t: 32,
      cam: "drona",
      focus: 0.4,
      who: "Drona",
      text: "Not enough. Step aside.",
    },
    {
      t: 38,
      cam: "arjuna-bow",
      focus: 0.55,
      who: "Narrator",
      text: "Then Arjuna raises the bow. The world narrows.",
    },
    {
      t: 46,
      cam: "arjuna-eye",
      focus: 0.75,
      who: "Drona",
      text: "What do you see, Arjuna?",
    },
    {
      t: 52,
      cam: "eye",
      focus: 0.92,
      who: "Arjuna",
      text: "I see only the eye of the bird.",
    },
    {
      t: 60,
      cam: "eye",
      focus: 1,
      who: "Drona",
      text: "Loose.",
    },
    {
      t: 66,
      cam: "release",
      focus: 1,
      who: "Narrator",
      text: "The arrow flies true. Concentration is the first dharma of the warrior.",
    },
    {
      t: 76,
      cam: "wide-gold",
      focus: 0.3,
      who: "Narrator",
      text: "Thus the son of Indra learned: see the essential — and nothing else.",
    },
    {
      t: 86,
      cam: "wide-gold",
      focus: 0,
      who: "",
      text: "",
    },
  ],
};
