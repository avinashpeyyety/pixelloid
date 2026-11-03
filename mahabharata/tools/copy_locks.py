#!/usr/bin/env python3
"""Copy canonical locks into a new episode's stills/_locks/ and byte-verify them.

Replaces the hand copy + `cmp` step. Sources come from config/locks.json; existing
episode paths are untouched (every episode still keeps its own _locks/ copy).

Usage:
  python3 tools/copy_locks.py 25-foo krishna yudhishthira bhishma
  python3 tools/copy_locks.py 25-foo kuru-master:kuru25-master.jpg   # rename on copy
  python3 tools/copy_locks.py 25-foo --verify                        # re-check all known copies
  python3 tools/copy_locks.py 25-foo krishna --dry-run
  python3 tools/copy_locks.py --print-sparse                         # episode dirs the registry needs (sparse clone)

Exit 1 if a source is missing, a destination differs (without --force), or verify fails.
"""
from __future__ import annotations

import argparse
import filecmp
import json
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "config" / "locks.json"


def load_registry(path: Path = REGISTRY) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))["locks"]


def plan(ep_id: str, specs: list[str], reg: dict, root: Path = ROOT) -> list[tuple[Path, Path]]:
    out: list[tuple[Path, Path]] = []
    for spec in specs:
        name, _, dest_name = spec.partition(":")
        if name not in reg:
            raise SystemExit(f"FAIL: unknown lock '{name}' (known: {', '.join(sorted(reg))})")
        ent = reg[name]
        src = root / "episodes" / ent["source"] / "stills" / "_locks" / ent["file"]
        dest = root / "episodes" / ep_id / "stills" / "_locks" / (dest_name or ent["file"])
        out.append((src, dest))
    return out


def run(pairs: list[tuple[Path, Path]], dry: bool = False, force: bool = False) -> list[str]:
    errors: list[str] = []
    for src, dest in pairs:
        if not src.exists():
            errors.append(f"missing source {src} (sparse clone? add its episode to the checkout)")
            continue
        if dest.exists():
            if filecmp.cmp(src, dest, shallow=False):
                print(f"  ok (already identical): {dest.name}")
                continue
            if not force:
                errors.append(f"{dest} exists and differs from {src} (pass --force)")
                continue
        print(f"  {'would copy' if dry else 'copy'}: {src.relative_to(src.parents[3])} -> {dest.name}")
        if dry:
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        if not filecmp.cmp(src, dest, shallow=False):
            errors.append(f"verify failed after copy: {dest}")
    return errors


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("episode", nargs="?")
    ap.add_argument("--print-sparse", action="store_true", help="print mahabharata/episodes/<src> paths for git sparse-checkout add")
    ap.add_argument("locks", nargs="*", help="registry names, optionally name:dest-file.jpg")
    ap.add_argument("--verify", action="store_true", help="check every registry lock present in the episode is byte-identical to its source")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()
    reg = load_registry()
    if args.print_sparse:
        for src in sorted({e["source"] for e in reg.values()}):
            print(f"mahabharata/episodes/{src}")
        return 0
    if not args.episode:
        ap.error("episode is required")
    ep_id = args.episode.strip().rstrip("/").split("/")[-1]
    if not (ROOT / "episodes" / ep_id).is_dir():
        print(f"FAIL: missing episodes/{ep_id}", file=sys.stderr)
        return 2
    if args.verify:
        errors = []
        for name, ent in reg.items():
            dest = ROOT / "episodes" / ep_id / "stills" / "_locks" / ent["file"]
            src = ROOT / "episodes" / ent["source"] / "stills" / "_locks" / ent["file"]
            if dest.exists() and src.exists() and ent["source"] != ep_id:
                same = filecmp.cmp(src, dest, shallow=False)
                print(f"  {'ok' if same else 'DIFF'}: {ent['file']} vs {ent['source']}")
                if not same:
                    errors.append(f"{dest.name} differs from {ent['source']}")
    else:
        if not args.locks:
            ap.error("name at least one lock, or pass --verify")
        errors = run(plan(ep_id, args.locks, reg), dry=args.dry_run, force=args.force)
    if errors:
        print("FAIL")
        for e in errors:
            print(f"  - {e}")
        return 1
    print("OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
