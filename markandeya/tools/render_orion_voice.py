#!/usr/bin/env python3
"""Markandeya Purana — ORION-ONLY narration renderer.

Renders every spoken beat in episodes/<id>/script.js to audio/<beat.audio>
(24 kHz / mono / 128 kbps MP3 / no ID3) with xAI Grok TTS voice "orion":

  POST https://api.x.ai/v1/tts  {"text", "voice_id": "orion", "language": "en"}

Hard rules (Avinash, 2026-11-02):
  * Orion ONLY. There is NO fallback — no Kokoro/bm_george, no macOS say, no
    browser speech, no default voice. Any error stops the run (exit 1) and prints
    the exact error so it can be recorded as "BLOCKED: awaiting Orion" in NEXT.md.
  * xAI API credits are authorized for Orion narration only (never images).
  * PRONOUNCE (config/pronounce.json) is applied to the TTS input only; captions
    in script.js keep their normal spelling.
  * Never re-voice a shipped episode without approval (use --only to render
    specific clips; existing files are kept unless --force).

Usage:
  python3 tools/render_orion_voice.py episodes/01-king-and-merchant [--only orion-03.mp3] [--force] [--dry-run]
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
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from dialogue_review import parse_beats  # noqa: E402

TTS_URL = "https://api.x.ai/v1/tts"
VOICE_ID = "orion"


def load_pronounce() -> dict[str, str]:
    p = ROOT / "config" / "pronounce.json"
    if not p.exists():
        return {}
    data = json.loads(p.read_text(encoding="utf-8"))
    return {k: v for k, v in data.items() if not k.startswith("_")}


def apply_pronounce(text: str, table: dict[str, str]) -> str:
    for k in sorted(table, key=len, reverse=True):
        text = re.sub(rf"(?<![\w-]){re.escape(k)}(?![\w-])", table[k], text)
    # curly quotes / ellipsis → plain for the TTS input
    return (
        text.replace("\u2018", "'").replace("\u2019", "'")
        .replace("\u201c", '"').replace("\u201d", '"').replace("\u2026", "...")
    )


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
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(src),
            "-ar", "24000", "-ac", "1", "-c:a", "libmp3lame", "-b:a", "128k",
            "-map_metadata", "-1", "-id3v2_version", "0", "-write_id3v1", "0",
            str(dest),
        ],
        check=True,
    )


class OrionBlocked(Exception):
    pass


def render_orion(text: str, dest: Path, api_key: str) -> None:
    body = json.dumps({"text": text, "voice_id": VOICE_ID, "language": "en"}).encode("utf-8")
    req = urllib.request.Request(
        TTS_URL, data=body, method="POST",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "User-Agent": "pixelloid-markandeya/1.0",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            ctype = resp.headers.get("Content-Type", "")
            audio = resp.read()
    except urllib.error.HTTPError as e:
        detail = e.read()[:500].decode("utf-8", "replace")
        raise OrionBlocked(f"HTTP {e.code} from {TTS_URL} for {dest.name}: {detail}") from None
    except Exception as e:  # network, timeout
        raise OrionBlocked(f"{type(e).__name__} calling {TTS_URL} for {dest.name}: {e}") from None
    if len(audio) < 200 or "json" in ctype:
        raise OrionBlocked(f"unexpected TTS body for {dest.name} ({ctype}, {len(audio)} bytes): {audio[:300]!r}")
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tmp:
        tmp.write(audio)
        tmp_path = Path(tmp.name)
    try:
        ffmpeg_fingerprint(tmp_path, dest)
    finally:
        tmp_path.unlink(missing_ok=True)


def duration(p: Path) -> float:
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)],
        capture_output=True, text=True, check=True,
    ).stdout.strip()
    return float(out)


def main() -> int:
    ap = argparse.ArgumentParser(description="Orion-only narration renderer (no fallback)")
    ap.add_argument("episode", type=Path)
    ap.add_argument("--only", action="append", default=[], help="render only this audio filename (repeatable)")
    ap.add_argument("--force", action="store_true", help="overwrite existing clips")
    ap.add_argument("--dry-run", action="store_true", help="print TTS inputs, call nothing")
    args = ap.parse_args()
    ep_dir = args.episode if args.episode.is_absolute() else ROOT / args.episode
    if not (ep_dir / "script.js").is_file():
        print(f"FAIL: missing {ep_dir}/script.js", file=sys.stderr)
        return 2
    if shutil.which("ffmpeg") is None:
        print("FAIL: ffmpeg not found", file=sys.stderr)
        return 2
    pairs = spoken(ep_dir)
    if args.only:
        pairs = [p for p in pairs if p[0] in set(args.only)]
    if not pairs:
        print("FAIL: no spoken beats to render", file=sys.stderr)
        return 1
    table = load_pronounce()
    audio_dir = ep_dir / "audio"
    audio_dir.mkdir(parents=True, exist_ok=True)
    if args.dry_run:
        for audio, text in pairs:
            print(f"{audio}\t{apply_pronounce(text, table)}")
        return 0
    api_key = os.environ.get("XAI_API_KEY", "").strip()
    if not api_key:
        print("BLOCKED: awaiting Orion — XAI_API_KEY is not set (no fallback voice by policy)", file=sys.stderr)
        return 1
    print(f"voice: grok-tts/{VOICE_ID} only (24 kHz / 128 kbps / mono / no ID3) — no fallback")
    total = 0.0
    for audio, text in pairs:
        dest = audio_dir / audio
        if dest.exists() and not args.force:
            d = duration(dest)
            total += d
            print(f"keep   {audio}  {d:5.2f}s  (exists; --force to re-render)")
            continue
        try:
            render_orion(apply_pronounce(text, table), dest, api_key)
        except OrionBlocked as e:
            print(f"BLOCKED: awaiting Orion — {e}", file=sys.stderr)
            return 1
        d = duration(dest)
        total += d
        print(f"render {audio}  {d:5.2f}s  {len(text.split())} words")
    print(f"done: {len(pairs)} clips, {total:.2f}s total, voice={VOICE_ID}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
