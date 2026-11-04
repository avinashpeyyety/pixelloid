#!/usr/bin/env python3
"""Shivaji — ORION-ONLY narration renderer (adapted from markandeya/tools/render_orion_voice.py).

Reads numbered narration lines ("N. text") from episodes/<id>/script.md and writes
episodes/<id>/audio/lineNN.mp3 (24 kHz / mono / 128 kbps / no ID3) using xAI Grok TTS voice "orion":
  POST https://api.x.ai/v1/tts  {"text", "voice_id": "orion", "language": "en"}

Hard rules (Avinash, 2026-11-02): Orion ONLY, NO fallback (no Kokoro/bm_george, say, browser, default).
Any error -> exit 1 with "BLOCKED: awaiting Orion — <reason>" (record it in NEXT.md). xAI credits are
authorized for Orion narration only. Existing clips are kept unless --force. Never re-voice a shipped
episode without approval (Ep01 remaster is queued, not done).

Usage:
  python3 tools/render_orion_voice.py episodes/02-escape-from-agra [--only line03.mp3] [--force] [--dry-run]
  python3 tools/render_orion_voice.py --probe /tmp/orion_probe.mp3     # one short line, ~40 chars
"""
from __future__ import annotations
import argparse, json, os, re, shutil, subprocess, sys, tempfile, urllib.error, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TTS_URL, VOICE_ID = "https://api.x.ai/v1/tts", "orion"
PROBE_TEXT = "Namaste. This is the story of Shivaji Maharaj."

class OrionBlocked(Exception):
    pass

def load_pronounce() -> dict[str, str]:
    p = ROOT / "config" / "pronounce.json"
    d = json.loads(p.read_text(encoding="utf-8")) if p.exists() else {}
    return {k: v for k, v in d.items() if not k.startswith("_")}

def apply_pronounce(text: str, table: dict[str, str]) -> str:
    for k in sorted(table, key=len, reverse=True):
        text = re.sub(rf"(?<![\w-]){re.escape(k)}(?![\w-])", table[k], text)
    return (text.replace("\u2018", "'").replace("\u2019", "'").replace("\u201c", '"')
                .replace("\u201d", '"').replace("\u2026", "...").replace("\u2014", ", "))

def lines(ep: Path) -> list[tuple[str, str]]:
    out = []
    for l in (ep / "script.md").read_text(encoding="utf-8").splitlines():
        m = re.match(r"^(\d+)\. (.+)$", l.strip())
        if m:
            out.append((f"line{int(m.group(1)):02d}.mp3", m.group(2).strip()))
    return out

def render(text: str, dest: Path, key: str) -> None:
    body = json.dumps({"text": text, "voice_id": VOICE_ID, "language": "en"}).encode()
    req = urllib.request.Request(TTS_URL, data=body, method="POST", headers={
        "Authorization": f"Bearer {key}", "Content-Type": "application/json", "User-Agent": "pixelloid-shivaji/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            ctype, audio = r.headers.get("Content-Type", ""), r.read()
    except urllib.error.HTTPError as e:
        raise OrionBlocked(f"HTTP {e.code} for {dest.name}: {e.read()[:400].decode('utf-8','replace')}") from None
    except Exception as e:
        raise OrionBlocked(f"{type(e).__name__} for {dest.name}: {e}") from None
    if len(audio) < 200 or "json" in ctype:
        raise OrionBlocked(f"unexpected TTS body for {dest.name} ({ctype}, {len(audio)} bytes)")
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as t:
        t.write(audio); tp = Path(t.name)
    try:
        subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(tp), "-ar", "24000", "-ac", "1",
                        "-c:a", "libmp3lame", "-b:a", "128k", "-map_metadata", "-1", "-id3v2_version", "0",
                        "-write_id3v1", "0", str(dest)], check=True)
    finally:
        tp.unlink(missing_ok=True)

def dur(p: Path) -> float:
    return float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)],
                                capture_output=True, text=True, check=True).stdout.strip())

def main() -> int:
    ap = argparse.ArgumentParser(description="Orion-only narration (no fallback)")
    ap.add_argument("episode", nargs="?", type=Path)
    ap.add_argument("--only", action="append", default=[])
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--probe", type=Path, help="render one short probe line to this path and exit")
    a = ap.parse_args()
    if shutil.which("ffmpeg") is None:
        print("FAIL: ffmpeg not found", file=sys.stderr); return 2
    table = load_pronounce()
    if a.probe is None:
        ep = a.episode if a.episode.is_absolute() else ROOT / a.episode
        pairs = [p for p in lines(ep) if not a.only or p[0] in a.only]
        if not pairs:
            print("FAIL: no numbered narration lines", file=sys.stderr); return 1
        chars = sum(len(apply_pronounce(t, table)) for _, t in pairs)
        if a.dry_run:
            for n, t in pairs: print(f"{n}\t{apply_pronounce(t, table)}")
            print(f"# {len(pairs)} clips, {chars} TTS chars"); return 0
    key = os.environ.get("XAI_API_KEY", "").strip()
    if not key:
        print("BLOCKED: awaiting Orion — XAI_API_KEY is not set (no fallback voice by policy)", file=sys.stderr); return 1
    print(f"voice: grok-tts/{VOICE_ID} only — no fallback")
    try:
        if a.probe is not None:
            render(PROBE_TEXT, a.probe, key); print(f"probe ok {a.probe} {dur(a.probe):.2f}s"); return 0
        (ep / "audio").mkdir(parents=True, exist_ok=True); total = 0.0
        for n, t in pairs:
            d = ep / "audio" / n
            if d.exists() and not a.force:
                total += dur(d); print(f"keep   {n}"); continue
            render(apply_pronounce(t, table), d, key); s = dur(d); total += s
            print(f"render {n}  {s:5.2f}s  {len(t.split())} words")
    except OrionBlocked as e:
        print(f"BLOCKED: awaiting Orion — {e}", file=sys.stderr); return 1
    print(f"done: {len(pairs)} clips, {total:.2f}s total, ~{chars} chars, voice={VOICE_ID}"); return 0

if __name__ == "__main__":
    sys.exit(main())
