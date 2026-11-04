#!/usr/bin/env python3
"""Shivaji keyframe contact sheet (same layout as Ep01 contact_sheet.jpg: 4 columns, 480x270 tiles,
10 px gaps, 'Sh-NN' label strip above each tile, paper background #F4EEDF).

Ep01's sheet was built ad hoc (no script was committed); this reproduces it.
Usage:
  python3 shivaji/tools/contact_sheet.py <dir with shotNN.png, or an episode dir with stills/> [out.jpg]
  e.g. python3 shivaji/tools/contact_sheet.py /workspace/shivaji-ep02-keyframes
       -> /workspace/shivaji-ep02-keyframes/contact_sheet.jpg
Optional: --chars adds a row of chars/*.png lock sheets at the end.
"""
import sys, glob, pathlib
from PIL import Image, ImageDraw, ImageFont

COLS, TW, TH, GAP, LAB = 4, 480, 270, 10, 22
PAPER = (244, 238, 223); INK = (58, 54, 49)

def font():
    for f in glob.glob("/usr/share/fonts/**/DejaVuSans-Bold.ttf", recursive=True) + \
             ["/System/Library/Fonts/Supplemental/Arial Bold.ttf"]:
        try: return ImageFont.truetype(f, 15)
        except OSError: pass
    return ImageFont.load_default()

def main(argv):
    args = [a for a in argv if not a.startswith("--")]
    d = pathlib.Path(args[0]); out = pathlib.Path(args[1]) if len(args) > 1 else d / "contact_sheet.jpg"
    src = d / "stills" if not list(d.glob("shot[0-9][0-9].png")) and (d / "stills").is_dir() else d
    tiles = [(f"Sh-{p.stem[4:]}", p) for p in sorted(src.glob("shot[0-9][0-9].png"))]
    if "--chars" in argv:
        tiles += [(p.stem, p) for p in sorted((d / "chars").glob("*.png"))]
    if not tiles:
        sys.exit(f"no shotNN.png in {d}")
    rows = (len(tiles) + COLS - 1) // COLS
    W = COLS * TW + (COLS + 1) * GAP; H = rows * (TH + LAB) + GAP * 2
    sheet = Image.new("RGB", (W, H), PAPER); dr = ImageDraw.Draw(sheet); fn = font()
    for k, (label, p) in enumerate(tiles):
        r, c = divmod(k, COLS)
        x = GAP + c * (TW + GAP); y = GAP + r * (TH + LAB)
        im = Image.open(p).convert("RGB"); im.thumbnail((TW, TH))
        dr.text((x, y + 2), label, fill=INK, font=fn)
        sheet.paste(im, (x + (TW - im.width) // 2, y + LAB + (TH - im.height) // 2))
    sheet.save(out, quality=88); print(out, sheet.size, len(tiles), "tiles")

if __name__ == "__main__":
    main(sys.argv[1:])
