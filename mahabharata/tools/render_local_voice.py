#!/usr/bin/env python3
"""Render episode beat lines to Orion-fingerprint MP3s with a FREE LOCAL neural TTS.

Default voice pipeline since 2026-09-29 (Avinash's rule: SuperGrok consumer
subscription only — never call api.x.ai / Grok TTS Orion or any paid API).
This script makes no network calls at render time.

Output format is identical to tools/render_orion_voice.py so the player needs no change:
  episodes/<id>/audio/<beat.audio>  (e.g. orion-00.mp3) — 24 kHz / 128 kbps / mono / no ID3,
  loudness-normalised to -16 LUFS (EBU R128, TP -1.5 dB).

Engines (first available wins unless --engine is given):
  kokoro  Kokoro-82M (Apache-2.0) via kokoro-onnx  — default voice bm_george (grave British male)
  piper   Piper (MIT)             via piper-tts     — default voice en_GB-alan-medium

Usage (same interface as render_orion_voice.sh):
  python3 tools/render_local_voice.py episodes/14-drona-fall
  python3 tools/render_local_voice.py episodes/14-drona-fall --engine piper --voice en_US-ryan-high
  python3 tools/render_local_voice.py episodes/14-drona-fall --dry-run   # print TTS input only

One-time setup (box: already done under /home/box):
  python3 -m venv ~/kokoro-venv && ~/kokoro-venv/bin/pip install kokoro-onnx soundfile
  mkdir -p ~/tts-models/kokoro && cd ~/tts-models/kokoro
  curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
  curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
  # optional Piper: pip install piper-tts; voices from huggingface.co/rhasspy/piper-voices into ~/tts-models/piper/
Env overrides: LOCAL_TTS_MODELS (default ~/tts-models), LOCAL_TTS_PYTHON (used by the .sh wrapper).

Pronunciation: PRONOUNCE respells Sanskrit names in the TTS input ONLY — script.js
display text is never modified. Add per-episode entries as needed.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from dialogue_review import parse_beats  # noqa: E402

MODELS = Path(os.environ.get("LOCAL_TTS_MODELS", Path.home() / "tts-models"))
DEFAULTS = {"kokoro": "bm_george", "piper": "en_GB-alan-medium"}
SPEED = {"kokoro": 0.9, "piper": 1.1}  # kokoro: speed (<1 slower); piper: length_scale (>1 slower)

# TTS-input-only respellings (word-boundary, case-sensitive).
PRONOUNCE: dict[str, str] = {
    "Bhima": "Bheema",
    "Ashwatthama": "Ashwat-thaama",
    "Dhrishtadyumna": "Dhrishta-dyumna",
    "Kurukshetra": "Kuru-kshetra",
    "Ghatotkacha": "Ghatot-kacha",
    "guru": "gooroo",
    # Ep05 Yaksha Prashna (and shared Forest / Dharma names)
    "Yudhishthira": "Yoo-dish-thira",
    "Pandavas": "Paan-davas",
    "Pandava": "Paan-dava",
    "Yaksha": "Yak-sha",
    "yaksha": "yak-sha",
    "Nakula": "Na-kula",
    "Sahadeva": "Saha-deva",
    "Dharma": "Dhar-ma",
    # Ep06 The Kirata (Himalaya / Shiva gift)
    "Arjuna": "Ar-joona",
    "Himalaya": "Him-aa-laya",
    "Mahadeva": "Maha-deva",
    "kirata": "ki-rah-ta",
    "Kirata": "Ki-rah-ta",
    "Pashupatastra": "Pa-shu-pa-taastra",
    "Shiva": "Shee-va",
}


def tts_text(text: str) -> str:
    s = text.replace("\n", " ")
    s = s.replace("\u2019", "'").replace("\u2018", "'")
    s = s.replace("\u201c", '"').replace("\u201d", '"')
    s = re.sub(r"\s*[\u2014\u2013]\s*", ", ", s)  # dashes -> spoken pause
    s = re.sub(r",\s*([,.!?])", r"\1", s)
    for k, v in PRONOUNCE.items():
        s = re.sub(rf"\b{re.escape(k)}\b", v, s)
    return re.sub(r"\s+", " ", s).strip()


def spoken(ep_dir: Path) -> list[tuple[str, str]]:
    js = (ep_dir / "script.js").read_text(encoding="utf-8")
    out = []
    for b in parse_beats(js):
        audio = (b.get("audio") or "").strip()
        text = (b.get("text") or "").strip()
        if audio and text:
            out.append((audio, text))
    return out


def finish(src: Path, dest: Path) -> None:
    """Trim edge silence, pad, two-pass loudnorm to -16 LUFS, Orion fingerprint."""
    pre = (
        "silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05,"
        "areverse,silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.1,areverse,"
        "adelay=150,apad=pad_dur=0.25"
    )
    ln = "loudnorm=I=-16:TP=-1.5:LRA=11"
    probe = subprocess.run(
        ["ffmpeg", "-hide_banner", "-nostats", "-i", str(src),
         "-af", f"{pre},{ln}:print_format=json", "-f", "null", "-"],
        capture_output=True, text=True, check=True,
    ).stderr
    m = json.loads(probe[probe.rindex("{"):probe.rindex("}") + 1])
    ln2 = (
        f"{ln}:measured_I={m['input_i']}:measured_TP={m['input_tp']}"
        f":measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}"
        f":offset={m['target_offset']}:linear=true"
    )
    subprocess.run(
        [
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(src),
            "-af", f"{pre},{ln2}", "-ar", "24000", "-ac", "1",
            "-c:a", "libmp3lame", "-b:a", "128k",
            "-map_metadata", "-1", "-id3v2_version", "0", "-write_id3v1", "0",
            str(dest),
        ],
        check=True,
    )


class KokoroEngine:
    name = "kokoro"

    def __init__(self, voice: str):
        import soundfile  # noqa: F401
        from kokoro_onnx import Kokoro

        d = MODELS / "kokoro"
        self.k = Kokoro(str(d / "kokoro-v1.0.onnx"), str(d / "voices-v1.0.bin"))
        if voice not in self.k.get_voices():
            raise SystemExit(f"FAIL: kokoro voice {voice!r} not found")
        self.voice = voice
        self.lang = "en-gb" if voice.startswith("b") else "en-us"

    def render(self, text: str, wav: Path) -> None:
        import soundfile as sf

        samples, sr = self.k.create(text, voice=self.voice, speed=SPEED["kokoro"], lang=self.lang)
        sf.write(str(wav), samples, sr)


class PiperEngine:
    name = "piper"

    def __init__(self, voice: str):
        self.model = MODELS / "piper" / f"{voice}.onnx"
        if not self.model.is_file():
            raise SystemExit(f"FAIL: missing piper model {self.model}")
        exe = shutil.which("piper") or str(Path(sys.executable).parent / "piper")
        if not Path(exe).exists():
            raise SystemExit("FAIL: piper not installed (pip install piper-tts)")
        self.exe = exe
        self.voice = voice

    def render(self, text: str, wav: Path) -> None:
        subprocess.run(
            [self.exe, "-m", str(self.model), "-f", str(wav),
             "--length-scale", str(SPEED["piper"])],
            input=text.encode("utf-8"), check=True, capture_output=True,
        )


def make_engine(engine: str | None, voice: str | None):
    order = [engine] if engine else ["kokoro", "piper"]
    last = None
    for e in order:
        try:
            cls = KokoroEngine if e == "kokoro" else PiperEngine
            return cls(voice or DEFAULTS[e])
        except (ImportError, SystemExit) as err:
            last = err
            if engine:
                raise
    raise SystemExit(f"FAIL: no local TTS engine available ({last})")


def duration(p: Path) -> float:
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)],
        capture_output=True, text=True,
    ).stdout.strip()
    return float(out or 0)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("episode", help="episodes/<id>")
    ap.add_argument("--engine", choices=["kokoro", "piper"])
    ap.add_argument("--voice")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()

    ep = Path(a.episode)
    ep_dir = ep if ep.is_absolute() else ROOT / ep
    if not (ep_dir / "script.js").is_file():
        print(f"FAIL: missing {ep_dir}/script.js", file=sys.stderr)
        return 2
    pairs = spoken(ep_dir)
    if not pairs:
        print(f"FAIL: no spoken beats with audio in {ep_dir}/script.js", file=sys.stderr)
        return 1
    if a.dry_run:
        for audio, text in pairs:
            print(f"{audio}: {tts_text(text)}")
        return 0
    if shutil.which("ffmpeg") is None:
        print("FAIL: ffmpeg not found", file=sys.stderr)
        return 2

    eng = make_engine(a.engine, a.voice)
    audio_dir = ep_dir / "audio"
    audio_dir.mkdir(parents=True, exist_ok=True)
    print(f"voice: {eng.name}/{eng.voice}  (free local; 24 kHz / 128 kbps / -16 LUFS / no ID3)")
    with tempfile.TemporaryDirectory() as td:
        for audio, text in pairs:
            wav = Path(td) / (Path(audio).stem + ".wav")
            eng.render(tts_text(text), wav)
            dest = audio_dir / audio
            finish(wav, dest)
            print(f"render {audio}  {duration(dest):5.2f}s")
    print(f"wrote {len(pairs)} files under {audio_dir} (voice={eng.name}/{eng.voice})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
