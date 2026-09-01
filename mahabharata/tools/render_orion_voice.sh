#!/usr/bin/env bash
# Render episode beat lines to Orion-fingerprint MP3s (24 kHz / 128 kbps / mono / no ID3).
# Prefers Grok TTS Orion when $XAI_API_KEY is set; else macOS say.
# Usage: tools/render_orion_voice.sh episodes/10-bhishma-fall
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
exec python3 "$ROOT/tools/render_orion_voice.py" "${1:-}"
