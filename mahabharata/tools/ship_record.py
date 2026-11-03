#!/usr/bin/env python3
"""Write an episode's ship record + NEXT / SPRINT_PLAN / HISTORY bookkeeping from its gate reports.

Run it while the merge into main is staged (`git merge --no-ff --no-commit <branch>`),
then `git add -A && git commit`: the record rides in the merge commit, so a run that
times out after merging can no longer leave the docs stale (the 2026-10-19 and
2026-11-02 failure mode). It reads only files in the repo; no network, no renders.

Usage:
  python3 tools/ship_record.py episodes/25-foo --branch studio/ep25-foo \
      --next "Ep 26 (…one-line plan…)" [--date 2026-11-09] [--dry-run]

Refuses (exit 1) unless RR-gateD-dialogue, RR-gateB-bible, RR-gateC-visual and
RR-gateD-install all say Status: PASS. Writes:
  episodes/<id>/logic-reviews/RR-ship.md          (skips if present unless --force)
  docs/SPRINT_PLAN.md   Track B row for the episode (+ "Next" row) and the weekly tally line
  NEXT.md               block between <!-- ship:now:start --> / <!-- ship:now:end -->
  docs/HISTORY.md       one Done line under <!-- history:top -->
Idempotent: re-running with the same inputs produces the same files.
"""
from __future__ import annotations

import argparse
import datetime as dt
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GATES = [
    ("D dialogue", "RR-gateD-dialogue.md", "dialogue_review.py"),
    ("A/B bible", "RR-gateB-bible.md", "logic_review.py plate-bible.json"),
    ("C stills + visual", "RR-gateC-visual.md", "stills_review.py --require + visual eye-check"),
    ("D install", "RR-gateD-install.md", "install_review.py"),
]
LIVE = "https://avinashpeyyety.github.io/pixelloid/mahabharata"
CADENCE = "1 episode/week, Mondays 11:47 AM CT"


def field(js: str, key: str) -> str | None:
    m = re.search(rf'\b{key}\s*:\s*"([^"]*)"', js)
    return m.group(1) if m else None


def episode_info(ep_dir: Path) -> dict:
    js = (ep_dir / "script.js").read_text(encoding="utf-8")
    total = re.search(r"\btotalSec\s*:\s*(\d+)", js)
    return {
        "dir": ep_dir.name,
        "num": field(js, "id") or ep_dir.name.split("-")[0],
        "title": field(js, "title") or ep_dir.name,
        "subtitle": field(js, "subtitle") or "",
        "voice": field(js, "voice_id") or "?",
        "raga": field(js, "raga") or "?",
        "total": total.group(1) if total else "?",
    }


def gate_status(report: Path) -> str:
    if not report.exists():
        return "MISSING"
    m = re.search(r"^Status:\s*\**\s*([A-Z]+)", report.read_text(encoding="utf-8"), re.M)
    return m.group(1) if m else "UNKNOWN"


def week_bounds(d: dt.date) -> tuple[dt.date, dt.date]:
    mon = d - dt.timedelta(days=d.weekday())
    return mon, mon + dt.timedelta(days=6)


def git(*args: str) -> str:
    try:
        return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True, check=True).stdout.strip()
    except (subprocess.CalledProcessError, FileNotFoundError):
        return ""


def ship_md(info: dict, gates: list[tuple[str, str, str, str]], date: dt.date, branch: str, head: str, nxt: str) -> str:
    rows = "\n".join(f"| {g} | `{f}` / `{tool}` | **{st}** |" for g, f, tool, st in gates)
    return f"""# Ship record — Ep {info['num']} *{info['title']}*

**Title:** {info['title']}{' — ' + info['subtitle'] if info['subtitle'] else ''}
**Ship date:** {date.isoformat()} CT
**Branch:** `{branch}` → no-ff merge into `main` (this record is part of the merge commit; branch head `{head or 'n/a'}`)
**Track:** B (Ep 15+ factory)

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
{rows}

Narrator `{info['voice']}` (Orion-only rule, `config/narrator.json`); raga `{info['raga']}`; totalSec {info['total']}.
3D steps 7–9 (Blender) not part of the routine — plate-only cinematic episode.
Details (regenerations, accepted deviations, watermark check) are in `RR-gateC-visual.md`.

## Publish

- Single push of `main` → `Deploy to GitHub Pages` (one deploy)
- Live: {LIVE}/play.html?ep={int(info['num']) if info['num'].isdigit() else info['num']}
- Hub: {LIVE}/

## Notes

- Week of {week_bounds(date)[0].isoformat()}: see `docs/SPRINT_PLAN.md` weekly tally. Cadence {CADENCE}.
- Next: {nxt or '(not set)'}
"""


def replace_block(text: str, start: str, end: str, body: str) -> str:
    pat = re.compile(re.escape(start) + r".*?" + re.escape(end), re.S)
    block = f"{start}\n{body.rstrip()}\n{end}"
    if pat.search(text):
        return pat.sub(lambda _m: block, text, count=1)
    raise SystemExit(f"FAIL: markers {start} / {end} not found")


def update_sprint_plan(text: str, info: dict, date: dt.date, nxt: str, shipped_this_week: list[str]) -> str:
    n = int(info["num"])
    row = (f"| {n} | *{info['title']}* (`{info['dir']}`) | `studio/ep{n}-{info['dir'].split('-', 1)[1]}` → `main` | "
           f"**SHIPPED** {date.isoformat()} (GATE A/B/C/D PASS; {info['voice']}; Raga {info['raga']}; ship_record.py) |")
    lines = text.splitlines()
    rx = re.compile(rf"^\|\s*{n}\s*\|")
    idx = next((i for i, l in enumerate(lines) if rx.match(l)), None)
    if idx is None:
        prev = next((i for i in range(len(lines) - 1, -1, -1) if re.match(rf"^\|\s*{n - 1}\s*\|", lines[i])), None)
        if prev is None:
            raise SystemExit("FAIL: cannot find Track B row to update in SPRINT_PLAN.md")
        idx = prev + 1
        lines.insert(idx, row)
    else:
        lines[idx] = row
    if nxt:
        nrx = re.compile(rf"^\|\s*{n + 1}\s*\|")
        nrow = f"| {n + 1} | {nxt} (planned) | — | **Next** |"
        j = next((i for i, l in enumerate(lines) if nrx.match(l)), None)
        if j is None:
            lines.insert(idx + 1, nrow)
        elif "SHIPPED" not in lines[j]:
            lines[j] = nrow
    text = "\n".join(lines) + "\n"
    mon, sun = week_bounds(date)
    tally = (f"- ISO week {mon.isoformat()} → {sun.isoformat()} (Mon–Sun CT): shipped "
             f"{', '.join(shipped_this_week)} — **{len(shipped_this_week)}** (cadence {CADENCE}).")
    trx = re.compile(rf"^- ISO week {mon.isoformat()} .*$", re.M)
    if trx.search(text):
        text = trx.sub(lambda _m: tally, text, count=1)
    else:
        text = text.rstrip("\n") + "\n" + tally + "\n"
    return text


def shipped_in_week(text: str, date: dt.date, this_ep: str) -> list[str]:
    """Episodes already tallied for date's ISO week, plus this one (dedup, order kept)."""
    mon, _ = week_bounds(date)
    m = re.search(rf"^- ISO week {mon.isoformat()} .*?shipped (.*?) — \*\*\d+\*\*", text, re.M)
    prior = [s.strip() for s in m.group(1).split("), ")] if m else []
    prior = [p if p.endswith(")") else p + ")" for p in prior if p]
    out = [p for p in prior if not p.startswith(this_ep.split(" (")[0] + " ")]
    out.append(this_ep)
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description="Write RR-ship.md + NEXT/SPRINT_PLAN/HISTORY from gate reports")
    ap.add_argument("episode", type=Path)
    ap.add_argument("--branch", default="")
    ap.add_argument("--next", default="", help="one-line plan for the next episode")
    ap.add_argument("--date", default="", help="ship date YYYY-MM-DD (default: today, box clock CT)")
    ap.add_argument("--force", action="store_true", help="overwrite an existing RR-ship.md")
    ap.add_argument("--dry-run", action="store_true", help="print what would change, write nothing")
    ap.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    args = ap.parse_args()
    root = args.root.resolve()
    ep_dir = args.episode if args.episode.is_absolute() else (root / args.episode)
    if not ep_dir.is_dir():
        ep_dir = root / "episodes" / args.episode.name
    if not (ep_dir / "script.js").exists():
        print(f"FAIL: missing {ep_dir}/script.js", file=sys.stderr)
        return 2
    info = episode_info(ep_dir)
    date = dt.date.fromisoformat(args.date) if args.date else dt.date.today()
    rr = ep_dir / "logic-reviews"
    gates = [(g, f, tool, gate_status(rr / f)) for g, f, tool in GATES]
    bad = [(g, st) for g, _, _, st in gates if st != "PASS"]
    if bad:
        print("FAIL: gates not PASS — refusing to write a ship record")
        for g, st in bad:
            print(f"  - {g}: {st}")
        return 1
    branch = (args.branch or f"studio/ep{info['num']}-{info['dir'].split('-', 1)[1]}").removeprefix("origin/")
    head = git("rev-parse", "--short", args.branch) if args.branch else ""

    ep_label = f"Ep {int(info['num'])} (*{info['title']}*, {date.strftime('%m-%d')})"
    sp_path = root / "docs" / "SPRINT_PLAN.md"
    next_path = root / "NEXT.md"
    hist_path = root / "docs" / "HISTORY.md"
    sp = sp_path.read_text(encoding="utf-8")
    week = shipped_in_week(sp, date, ep_label)
    new_sp = update_sprint_plan(sp, info, date, args.next, week)
    mon, sun = week_bounds(date)
    now_body = (
        f"- Last ship: **Ep {int(info['num'])} *{info['title']}*** {date.isoformat()} "
        f"(`episodes/{info['dir']}/logic-reviews/RR-ship.md`). Week of {mon.isoformat()}: {len(week)} shipped.\n"
        f"- [ ] **Track B next:** {args.next or '(set with ship_record.py --next)'} — next sprint Monday "
        f"{(mon + dt.timedelta(days=7)).isoformat()} 11:47 AM CT."
    )
    new_next = replace_block(next_path.read_text(encoding="utf-8"), "<!-- ship:now:start -->", "<!-- ship:now:end -->", now_body)
    hist = hist_path.read_text(encoding="utf-8")
    hline = (f"- [x] **Ep {int(info['num'])} *{info['title']}*** (Track B; GATE A/B/C/D PASS; {info['voice']}; "
             f"Raga {info['raga']}; ship {date.isoformat()}; `{info['dir']}/logic-reviews/RR-ship.md`)")
    if hline.split(" (Track B")[0] not in hist:
        hist = hist.replace("<!-- history:top -->", "<!-- history:top -->\n" + hline, 1)
    ship_path = rr / "RR-ship.md"
    writes: list[tuple[Path, str]] = [(sp_path, new_sp), (next_path, new_next), (hist_path, hist)]
    if ship_path.exists() and not args.force:
        print(f"keep existing {ship_path.relative_to(root)} (pass --force to rewrite)")
    else:
        writes.append((ship_path, ship_md(info, gates, date, branch, head, args.next)))
    for path, content in writes:
        old = path.read_text(encoding="utf-8") if path.exists() else ""
        if old == content:
            continue
        print(f"{'would write' if args.dry_run else 'write'}: {path.relative_to(root)}")
        if not args.dry_run:
            path.write_text(content, encoding="utf-8")
    print("OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
