#!/usr/bin/env bash
# RETIRED 2026-09-29 (Avinash: SuperGrok consumer subscription only — never call api.x.ai /
# Grok TTS Orion or any paid API). This wrapper now forwards to the free local TTS renderer,
# which writes the same orion-NN.mp3 files/format. render_orion_voice.py is kept for history only.
# Usage: tools/render_orion_voice.sh episodes/<id>
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
echo "render_orion_voice.sh: Orion API retired — using tools/render_local_voice.sh" >&2
exec "$ROOT/tools/render_local_voice.sh" "$@"
