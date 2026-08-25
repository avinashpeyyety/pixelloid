#!/usr/bin/env python3
"""
GATE C canvas check — stills and locks must meet the Ep 10 bar.

Usage:
  python3 tools/stills_review.py episodes/10-bhishma-fall
  python3 tools/stills_review.py episodes/11-foo --require

Ep 01–09 are grandfathered (exit 0 with LEGACY) unless --require.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

CANVAS_MIN_W = 1536
CANVAS_MIN_H = 1024
ASPECT_TARGET = 3 / 2
ASPECT_TOL = 0.08
LEGACY_EP_MAX = 9
FORBIDDEN = {(1280, 720), (1920, 1080), (720, 1280)}


def jpeg_wh(path: Path) -> tuple[int, int]:
    data = path.read_bytes()
    if data[:2] != b"\xff\xd8":
        raise ValueError(f"not a JPEG: {path}")
    i = 2
    n = len(data)
    while i + 3 < n:
        if data[i] != 0xFF:
            i += 1
            continue
        while i < n and data[i] == 0xFF:
            i += 1
        if i >= n:
            break
        marker = data[i]
        i += 1
        if marker in (0xD8, 0xD9, 0x01) or 0xD0 <= marker <= 0xD7:
            continue
        if i + 2 > n:
            break
        seglen = int.from_bytes(data[i : i + 2], "big")
        if marker in (
            0xC0,
            0xC1,
            0xC2,
            0xC3,
            0xC5,
            0xC6,
            0xC7,
            0xC9,
            0xCA,
            0xCB,
            0xCD,
            0xCE,
            0xCF,
        ):
            if i + 7 > n:
                break
            h = int.from_bytes(data[i + 3 : i + 5], "big")
            w = int.from_bytes(data[i + 5 : i + 7], "big")
            return w, h
        i += seglen
    raise ValueError(f"no SOF in JPEG: {path}")


def episode_num_from_dir(ep_dir: Path) -> int:
    bible = ep_dir / "plate-bible.json"
    if bible.exists():
        data = json.loads(bible.read_text(encoding="utf-8"))
        raw = str(data.get("episode_id") or "")
        digits = "".join(ch for ch in raw if ch.isdigit())
        if digits:
            return int(digits)
    name = ep_dir.name
    digits = "".join(ch for ch in name.split("-", 1)[0] if ch.isdigit())
    return int(digits) if digits else 0


def iter_stills(ep_dir: Path) -> list[Path]:
    stills = ep_dir / "stills"
    if not stills.is_dir():
        return []
    files: list[Path] = []
    for p in sorted(stills.rglob("*")):
        if p.suffix.lower() in {".jpg", ".jpeg"} and p.is_file():
            files.append(p)
    return files


def ok_size(w: int, h: int) -> list[str]:
    fails: list[str] = []
    if (w, h) in FORBIDDEN:
        fails.append(f"{w}×{h} is a forbidden cinematic banner — regenerate at 3:2 ≥{CANVAS_MIN_W}×{CANVAS_MIN_H}")
    if w < CANVAS_MIN_W or h < CANVAS_MIN_H:
        fails.append(f"{w}×{h} is below the Ep 10 bar ({CANVAS_MIN_W}×{CANVAS_MIN_H})")
    if h:
        ratio = w / h
        if abs(ratio - ASPECT_TARGET) > ASPECT_TOL:
            fails.append(f"{w}×{h} aspect {ratio:.3f} is not ~3:2 (do not ship 16:9)")
    return fails


def review(ep_dir: Path) -> tuple[bool, list[str], int]:
    files = iter_stills(ep_dir)
    fails: list[str] = []
    if not files:
        fails.append(f"no JPEG stills under {ep_dir}/stills")
        return False, fails, 0
    for f in files:
        rel = f.relative_to(ROOT) if ROOT in f.parents else f
        try:
            w, h = jpeg_wh(f)
        except ValueError as e:
            fails.append(str(e))
            continue
        for reason in ok_size(w, h):
            fails.append(f"{rel}: {reason}")
    return len(fails) == 0, fails, len(files)


def main() -> int:
    ap = argparse.ArgumentParser(description="GATE C stills canvas review")
    ap.add_argument("episode", type=Path, help="episodes/<id> directory")
    ap.add_argument(
        "--require",
        action="store_true",
        help="enforce the Ep 10 bar even on grandfathered 01–09",
    )
    args = ap.parse_args()
    ep_dir = args.episode if args.episode.is_absolute() else ROOT / args.episode
    if not ep_dir.is_dir():
        print(f"FAIL: missing {ep_dir}", file=sys.stderr)
        return 2
    n = episode_num_from_dir(ep_dir)
    if 0 < n <= LEGACY_EP_MAX and not args.require:
        files = iter_stills(ep_dir)
        print(f"LEGACY  Ep {n:02d}  {ep_dir.name}  ({len(files)} jpegs) — 720p grandfathered")
        print("  (pass --require to score against the Ep 10 canvas bar)")
        return 0
    ok, fails, count = review(ep_dir)
    print("PASS" if ok else "FAIL")
    print(f"  {count} jpegs  bar {CANVAS_MIN_W}×{CANVAS_MIN_H} 3:2")
    for f in fails:
        print(f"  - {f}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
