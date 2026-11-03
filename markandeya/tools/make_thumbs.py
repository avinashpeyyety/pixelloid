#!/usr/bin/env python3
"""Landing thumbnails from the episode poster (Mahabharata convention, 16:9 by design):
  stills/thumb.jpg (640x360), stills/thumb@2x.jpg (1280x720), stills/thumb@2x.webp (1280x720)
Center-crops poster.jpg (3:2) to 16:9.

  python3 tools/make_thumbs.py episodes/01-king-and-merchant
"""
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    ep = Path(sys.argv[1])
    ep = ep if ep.is_absolute() else ROOT / ep
    stills = ep / "stills"
    poster = stills / "poster.jpg"
    if not poster.exists():
        print(f"FAIL: missing {poster}")
        return 1
    im = Image.open(poster).convert("RGB")
    w, h = im.size
    th = round(w * 9 / 16)
    if th <= h:
        top = (h - th) // 2
        box = (0, top, w, top + th)
    else:
        tw = round(h * 16 / 9)
        left = (w - tw) // 2
        box = (left, 0, left + tw, h)
    crop = im.crop(box)
    big = crop.resize((1280, 720), Image.LANCZOS)
    big.save(stills / "thumb@2x.jpg", quality=86, optimize=True, progressive=True)
    big.save(stills / "thumb@2x.webp", quality=82, method=6)
    crop.resize((640, 360), Image.LANCZOS).save(stills / "thumb.jpg", quality=86, optimize=True, progressive=True)
    print(f"wrote thumb.jpg 640x360, thumb@2x.jpg + thumb@2x.webp 1280x720 from poster {w}x{h}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
