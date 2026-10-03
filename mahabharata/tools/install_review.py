#!/usr/bin/env python3
"""
GATE D — final install check.

Usage:
  python3 tools/install_review.py episodes/<id> --report

Checks:
  - Every beat plate key resolves to an on-disk still
  - Every spoken beat has a non-empty audio file
  - voice.voice_id matches config/narrator.json canonical_voice_id (bm_george)
  - Named Hindustani raga present in script.js music.raga

FAIL (exit 1) blocks ship. Writes logic-reviews/RR-gateD-install.md when --report.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
NARRATOR_CFG = ROOT / "config" / "narrator.json"


def load_narrator() -> dict:
    if not NARRATOR_CFG.exists():
        return {"canonical_voice_id": "bm_george", "provider": "local-kokoro"}
    return json.loads(NARRATOR_CFG.read_text(encoding="utf-8"))


def parse_script(script: str) -> dict:
    voice_id = None
    m = re.search(r"voice\s*:\s*\{([^}]*)\}", script, re.S)
    if m:
        vm = re.search(r'voice_id\s*:\s*"([^"]+)"', m.group(1))
        if vm:
            voice_id = vm.group(1)
    provider = None
    if m:
        pm = re.search(r'provider\s*:\s*"([^"]+)"', m.group(1))
        if pm:
            provider = pm.group(1)
    raga = None
    mm = re.search(r"music\s*:\s*\{([^}]*)\}", script, re.S)
    if mm:
        rm = re.search(r'raga\s*:\s*"([^"]+)"', mm.group(1))
        if rm:
            raga = rm.group(1)
    total = None
    tm = re.search(r"totalSec\s*:\s*(\d+)", script)
    if tm:
        total = int(tm.group(1))
    plates: dict[str, str] = {}
    pm = re.search(r"plates\s*:\s*\{([^}]*)\}", script, re.S)
    if pm:
        for k, v in re.findall(r'["\']?([\w-]+)["\']?\s*:\s*"([^"]+)"', pm.group(1)):
            plates[k] = v
    beats = []
    for block in re.finditer(r"\{([^{}]+)\}", script):
        body = block.group(1)
        if "plate:" not in body and "plate :" not in body:
            continue
        if not re.search(r"\bt\s*:", body):
            continue
        t_m = re.search(r"\bt\s*:\s*(\d+)", body)
        plate_m = re.search(r'plate\s*:\s*"([^"]+)"', body)
        audio_m = re.search(r'audio\s*:\s*"([^"]+)"', body)
        who_m = re.search(r'who\s*:\s*"([^"]*)"', body)
        text_m = re.search(r'text\s*:\s*"([^"]*)"', body)
        if not (t_m and plate_m):
            continue
        beats.append(
            {
                "t": int(t_m.group(1)),
                "plate": plate_m.group(1),
                "audio": audio_m.group(1) if audio_m else None,
                "who": who_m.group(1) if who_m else "",
                "text": text_m.group(1) if text_m else "",
            }
        )
    beats.sort(key=lambda b: b["t"])
    return {
        "voice_id": voice_id,
        "provider": provider,
        "raga": raga,
        "totalSec": total,
        "plates": plates,
        "beats": beats,
    }


def review(ep_dir: Path) -> tuple[bool, list[str], list[str], dict]:
    fails: list[str] = []
    warns: list[str] = []
    cfg = load_narrator()
    canonical = cfg.get("canonical_voice_id", "bm_george")
    script_path = ep_dir / "script.js"
    if not script_path.exists():
        return False, [f"missing {script_path}"], warns, {}
    data = parse_script(script_path.read_text(encoding="utf-8"))
    stills = ep_dir / "stills"
    audio_dir = ep_dir / "audio"

    if data["voice_id"] != canonical:
        fails.append(
            f"voice_id={data['voice_id']!r} != canonical {canonical!r} "
            f"(config/narrator.json). Pin bm_george for new/rewritten episodes."
        )
    if not data["raga"]:
        fails.append("music.raga missing — name a Hindustani raga in script.js")
    if not data["beats"]:
        fails.append("no beats parsed from script.js")

    for b in data["beats"]:
        key = b["plate"]
        fname = data["plates"].get(key, f"plate-{key}.jpg")
        path = stills / fname
        if not path.exists():
            fails.append(f"t={b['t']}: missing still {path.relative_to(ep_dir)}")
        spoken = bool((b.get("text") or "").strip()) or bool((b.get("who") or "").strip())
        if spoken:
            if not b.get("audio"):
                fails.append(f"t={b['t']}: spoken beat missing audio field")
            else:
                ap = audio_dir / b["audio"]
                if not ap.exists() or ap.stat().st_size < 1000:
                    fails.append(f"t={b['t']}: missing/empty audio {ap.relative_to(ep_dir)}")
        elif b.get("audio"):
            warns.append(f"t={b['t']}: silent hold has audio {b['audio']} (ok if intentional)")

    ok = not fails
    meta = {"canonical": canonical, **data, "cfg": cfg}
    return ok, fails, warns, meta


def write_report(ep_dir: Path, ok: bool, fails: list[str], warns: list[str], meta: dict) -> Path:
    out = ep_dir / "logic-reviews" / "RR-gateD-install.md"
    out.parent.mkdir(parents=True, exist_ok=True)
    now = datetime.now(ZoneInfo("America/Chicago")).strftime("%Y-%m-%d %H:%M %Z")
    status = "PASS" if ok else "FAIL"
    lines = [
        f"# Logic review — {ep_dir.name} — GATE D (install)",
        "",
        f"Status: **{status}**",
        f"Reviewer: install_review.py (box)",
        f"Time: {now}",
        "",
        "## Install checks",
        "",
        "| Check | Result |",
        "|-------|--------|",
        f"| Canonical narrator (`config/narrator.json`) | `{meta.get('canonical')}` |",
        f"| `voice.voice_id` | `{meta.get('voice_id')}` — {'**PASS**' if meta.get('voice_id') == meta.get('canonical') else '**FAIL**'} |",
        f"| `voice.provider` | `{meta.get('provider')}` |",
        f"| Named raga | `{meta.get('raga') or 'MISSING'}` — {'**PASS**' if meta.get('raga') else '**FAIL**'} |",
        f"| `totalSec` | {meta.get('totalSec')} |",
        f"| Beat plate files on disk | {'**PASS**' if ok or not any('missing still' in f for f in fails) else '**FAIL**'} |",
        f"| Spoken-beat audio on disk | {'**PASS**' if ok or not any('audio' in f for f in fails) else '**FAIL**'} |",
        "",
        "## Beat → plate → audio map",
        "",
        "| t | plate | still | audio | who | text |",
        "|---|-------|-------|-------|-----|------|",
    ]
    plates = meta.get("plates") or {}
    for b in meta.get("beats") or []:
        fname = plates.get(b["plate"], f"plate-{b['plate']}.jpg")
        lines.append(
            f"| {b['t']} | {b['plate']} | {fname} | {b.get('audio') or '—'} | "
            f"{b.get('who') or '—'} | {(b.get('text') or '')[:70]} |"
        )
    if fails:
        lines += ["", "## Failures", ""]
        for f in fails:
            lines.append(f"- {f}")
    if warns:
        lines += ["", "## Warnings", ""]
        for w in warns:
            lines.append(f"- {w}")
    lines += [
        "",
        "## Strict checks",
        "",
        f"- [{'x' if ok else ' '}] voice_id == canonical bm_george",
        f"- [{'x' if ok else ' '}] No missing plate file for a script beat key",
        f"- [{'x' if ok else ' '}] No missing audio for narration beats",
        f"- [{'x' if meta.get('raga') else ' '}] Named Hindustani raga in episode module",
        "",
        f"**GATE D install: {status}**",
        "",
    ]
    out.write_text("\n".join(lines), encoding="utf-8")
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("episode", type=Path, help="episodes/<id> path")
    ap.add_argument("--report", action="store_true")
    args = ap.parse_args()
    ep_dir = args.episode
    if not ep_dir.is_absolute():
        ep_dir = (Path.cwd() / ep_dir).resolve()
    ok, fails, warns, meta = review(ep_dir)
    if args.report:
        path = write_report(ep_dir, ok, fails, warns, meta)
        print(f"report: {path}")
    print("PASS" if ok else "FAIL")
    for f in fails:
        print(f"  FAIL: {f}")
    for w in warns:
        print(f"  WARN: {w}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
