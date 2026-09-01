#!/usr/bin/env python3
"""Render episode beat lines to Orion-fingerprint MP3s (24 kHz / 128 kbps / mono / no ID3).

Prefer Grok TTS Orion when $XAI_API_KEY is set:
  POST https://api.x.ai/v1/tts  voice_id=orion  language=en
Fallback: macOS say -v Rishi (else Aman (English (India))) then ffmpeg.

Usage:
  python3 tools/render_orion_voice.py episodes/10-bhishma-fall
"""
from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
import tempfile
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from dialogue_review import parse_beats  # noqa: E402

TTS_URL = "https://api.x.ai/v1/tts"
VOICE_ID = "orion"


def spoken(ep_dir: Path) -> list[tuple[str, str]]:
    js = (ep_dir / "script.js").read_text(encoding="utf-8")
    out: list[tuple[str, str]] = []
    for b in parse_beats(js):
        audio = (b.get("audio") or "").strip()
        text = (b.get("text") or "").strip()
        if audio and text:
            out.append((audio, text.replace("\n", " ")))
    return out


def ffmpeg_fingerprint(src: Path, dest: Path) -> None:
    subprocess.run(
        [
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
            "-i", str(src),
            "-ar", "24000", "-ac", "1",
            "-c:a", "libmp3lame", "-b:a", "128k",
            "-map_metadata", "-1", "-id3v2_version", "0", "-write_id3v1", "0",
            str(dest),
        ],
        check=True,
    )


def render_orion(text: str, dest: Path, api_key: str) -> None:
    body = json.dumps(
        {"text": text, "voice_id": VOICE_ID, "language": "en"}
    ).encode("utf-8")
    req = urllib.request.Request(
        TTS_URL,
        data=body,
        method="POST",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=90) as resp:
            audio = resp.read()
    except urllib.error.HTTPError as e:
        err = e.read()[:400]
        raise SystemExit(f"FAIL: TTS HTTP {e.code} for {dest.name}") from None
    if len(audio) < 200:
        raise SystemExit(f"FAIL: TTS empty body for {dest.name}")
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tmp:
        tmp.write(audio)
        tmp_path = Path(tmp.name)
    try:
        ffmpeg_fingerprint(tmp_path, dest)
    finally:
        tmp_path.unlink(missing_ok=True)


def pick_say_voice() -> str:
    listing = subprocess.run(
        ["say", "-v", "?"], capture_output=True, text=True
    ).stdout
    names = {line.split()[0] for line in listing.splitlines() if line.strip()}
    if "Rishi" in names:
        return "Rishi"
    return "Aman (English (India))"


def render_say(text: str, dest: Path, voice: str) -> None:
    with tempfile.NamedTemporaryFile(suffix=".aiff", delete=False) as tmp:
        aiff = Path(tmp.name)
    try:
        subprocess.run(["say", "-v", voice, "-o", str(aiff), text], check=True)
        ffmpeg_fingerprint(aiff, dest)
    finally:
        aiff.unlink(missing_ok=True)


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: python3 tools/render_orion_voice.py episodes/<id>", file=sys.stderr)
        return 2
    ep = Path(sys.argv[1])
    ep_dir = ep if ep.is_absolute() else ROOT / ep
    if not (ep_dir / "script.js").is_file():
        print(f"FAIL: missing {ep_dir}/script.js", file=sys.stderr)
        return 2
    if shutil.which("ffmpeg") is None:
        print("FAIL: ffmpeg not found", file=sys.stderr)
        return 2
    pairs = spoken(ep_dir)
    if not pairs:
        print(f"FAIL: no spoken beats with audio in {ep_dir}/script.js", file=sys.stderr)
        return 1
    audio_dir = ep_dir / "audio"
    audio_dir.mkdir(parents=True, exist_ok=True)
    api_key = os.environ.get("XAI_API_KEY", "").strip()
    if api_key:
        print(f"voice: grok-tts/{VOICE_ID}  (24 kHz / 128 kbps / no ID3)")
        for audio, text in pairs:
            print(f"render {audio}")
            render_orion(text, audio_dir / audio, api_key)
        print(f"wrote {len(pairs)} files under {audio_dir} (voice={VOICE_ID})")
        return 0
    if shutil.which("say") is None:
        print("FAIL: no XAI_API_KEY and macOS say not found", file=sys.stderr)
        return 2
    voice = pick_say_voice()
    print(f"voice: say/{voice}  (24 kHz / 128 kbps / no ID3 — fallback)")
    for audio, text in pairs:
        print(f"render {audio}")
        render_say(text, audio_dir / audio, voice)
    print(f"wrote {len(pairs)} files under {audio_dir} (voice={voice})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
