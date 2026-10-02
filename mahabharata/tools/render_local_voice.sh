#!/usr/bin/env bash
# Render episode beat lines with a FREE LOCAL neural TTS (Kokoro-82M, else Piper) to
# Orion-fingerprint MP3s (24 kHz / 128 kbps / mono / no ID3, -16 LUFS). No network, no paid API.
# Default voice pipeline since 2026-09-29 (Avinash: SuperGrok-only, never api.x.ai / Orion API).
# Usage: tools/render_local_voice.sh episodes/14-drona-fall [--engine kokoro|piper] [--voice ID] [--dry-run]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PY="${LOCAL_TTS_PYTHON:-}"
if [ -z "$PY" ]; then
  if [ -x "$HOME/kokoro-venv/bin/python" ]; then PY="$HOME/kokoro-venv/bin/python"; else PY=python3; fi
fi
exec "$PY" "$ROOT/tools/render_local_voice.py" "$@"
