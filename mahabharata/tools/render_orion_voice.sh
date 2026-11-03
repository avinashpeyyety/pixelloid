#!/usr/bin/env bash
# Canonical narrator (Orion-only rule, Avinash 2026-11-02): Grok TTS orion via xAI API.
# Usage: tools/render_orion_voice.sh episodes/<id> [--dry-run]
# Refuses to overwrite existing clips (never re-synthesize an existing episode).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
exec python3 "$ROOT/tools/render_orion_voice.py" "$@"
