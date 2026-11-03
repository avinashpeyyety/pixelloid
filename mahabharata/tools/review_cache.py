#!/usr/bin/env python3
"""Input-hash cache for GATE A/B (logic_review) and GATE D-dialogue (dialogue_review).

Opt-in via --skip-if-unchanged on either tool. A cached PASS is reused only when the
sha256 of every input file (episode script.js + plate-bible.json + the review tool
itself + this module) matches the last recorded PASS. Any change, or no prior PASS,
runs the full review exactly as before. FAILs are never cached.

Cache file: episodes/<id>/logic-reviews/.review-cache.json (safe to delete).
"""
from __future__ import annotations

import hashlib
import json
from pathlib import Path

CACHE_NAME = ".review-cache.json"


def _sha(p: Path) -> str:
    return hashlib.sha256(p.read_bytes()).hexdigest() if p.exists() else "missing"


def input_hash(ep_dir: Path, tool_file: Path) -> str:
    h = hashlib.sha256()
    for p in (ep_dir / "script.js", ep_dir / "plate-bible.json", tool_file, Path(__file__)):
        h.update(p.name.encode() + b"\0" + _sha(p).encode() + b"\n")
    return h.hexdigest()


def _cache_path(ep_dir: Path) -> Path:
    return ep_dir / "logic-reviews" / CACHE_NAME


def _load(ep_dir: Path) -> dict:
    p = _cache_path(ep_dir)
    try:
        return json.loads(p.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return {}


def cached_pass(ep_dir: Path, gate: str, tool_file: Path) -> bool:
    return _load(ep_dir).get(gate) == input_hash(ep_dir, tool_file)


def record(ep_dir: Path, gate: str, tool_file: Path, ok: bool) -> None:
    data = _load(ep_dir)
    if ok:
        data[gate] = input_hash(ep_dir, tool_file)
    else:
        data.pop(gate, None)
    p = _cache_path(ep_dir)
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(data, indent=1, sort_keys=True) + "\n", encoding="utf-8")
