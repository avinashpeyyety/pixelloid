"""Shivaji Ep01 renderer: stroke-order draw-on reveal -> selective color wash -> Ken Burns hold.
Free/local only (numpy, OpenCV, scikit-image, ffmpeg). Usage: python render_ep.py <ep_dir> [shot ...]
ep_dir needs stills/shotNN.png, audio/lineNN.wav, optional motion/shNN_raw.mp4."""
import sys, os, subprocess, json, numpy as np, cv2, soundfile as sf
from scipy import ndimage
from skimage.graph import MCP_Geometric
W, H, FPS = 1280, 720, 24
PAPER = np.array([0xDF, 0xEE, 0xF4], np.float32)  # BGR of #F4EEDF
LEAD, TAIL = 1.0, 0.8           # silence before / after narration in each shot
MOTION = {9: dict(reveal=3.5), 12: dict(reveal=2.5, min_dur=9.0)}
EP = sys.argv[1]
rng = np.random.default_rng(7)
GRAIN = (rng.normal(0, 3.0, (H, W, 1))).astype(np.float32)

def stroke_times(img):
    """Per-pixel reveal time in [0,1] for dark line pixels (inf elsewhere)."""
    g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    loc = cv2.GaussianBlur(g, (0, 0), 6)
    line = ((g.astype(int) < loc.astype(int) - 12) | (g < 70)).astype(np.uint8)
    line = cv2.morphologyEx(line, cv2.MORPH_OPEN, np.ones((2, 2), np.uint8))
    n, lab, stats, cent = cv2.connectedComponentsWithStats(line, connectivity=8)
    sizes = stats[1:, cv2.CC_STAT_AREA].astype(float)
    # order: big structural strokes first, then smaller details sweeping top-left -> bottom-right
    big = sizes >= np.percentile(sizes, 97) if len(sizes) > 30 else np.ones_like(sizes, bool)
    pos = (cent[1:, 0] / W + cent[1:, 1] / H) / 2
    key = np.where(big, -1 + pos * 0.5, pos)
    order = np.argsort(key)
    tot = sizes.sum()
    start = np.zeros(n); length = np.zeros(n); acc = 0.0
    for i in order:
        f = sizes[i] / tot
        start[i + 1] = acc * 0.82
        length[i + 1] = max(f * 1.6, 0.06)
        acc += f
    seeds = []
    for i in range(1, n):  # seed = topmost-left pixel of each stroke
        y0, x0 = stats[i, cv2.CC_STAT_TOP], stats[i, cv2.CC_STAT_LEFT]
        ys, xs = np.nonzero(lab[y0:y0 + stats[i, 3], x0:x0 + stats[i, 2]] == i)
        k = np.argmin(ys * 4 + xs); seeds.append((y0 + ys[k], x0 + xs[k]))
    cost = np.where(line > 0, 1.0, 1e6)
    dist, _ = MCP_Geometric(cost).find_costs(seeds)
    dist[line == 0] = 0
    dmax = ndimage.maximum(dist, lab, np.arange(n)); dmax[dmax == 0] = 1
    t = start[lab] + length[lab] * dist / dmax[lab]
    t = t / max(t[line > 0].max(), 1e-6)
    t[line == 0] = np.inf
    return t.astype(np.float32)

def smooth(x): x = np.clip(x, 0, 1); return x * x * (3 - 2 * x)

def kenburns(fr, u, seed):
    z = 1.0 + 0.06 * u
    dx, dy = [(0.02, -0.01), (-0.02, 0.0), (0.0, -0.015), (0.015, 0.01)][seed % 4]
    M = np.float32([[z, 0, (1 - z) * W / 2 + dx * W * u], [0, z, (1 - z) * H / 2 + dy * H * u]])
    return cv2.warpAffine(fr, M, (W, H), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT)

def enc(path):
    return subprocess.Popen(['ffmpeg', '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'bgr24', '-s', f'{W}x{H}', '-r', str(FPS),
        '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', path], stdin=subprocess.PIPE)

def render_shot(s):
    img = cv2.resize(cv2.imread(f'{EP}/stills/shot{s:02d}.png'), (W, H), interpolation=cv2.INTER_AREA)
    a, sr = sf.read(f'{EP}/audio/line{s:02d}.wav')
    dur = LEAD + len(a) / sr + TAIL
    mo = MOTION.get(s) if os.path.exists(f'{EP}/motion/sh{s:02d}_raw.mp4') else None
    if mo: dur = max(dur, mo.get('min_dur', 0))
    rev = mo['reveal'] if mo else float(np.clip(dur * 0.38, 3.0, 5.0))
    col0, col1 = rev + 0.2, rev + 1.9
    t = stroke_times(img)
    imgf = img.astype(np.float32)
    gray = cv2.cvtColor(cv2.cvtColor(img, cv2.COLOR_BGR2GRAY), cv2.COLOR_GRAY2BGR).astype(np.float32)
    # sepia-toned graphite for the uncoloured stage
    sep = gray * np.array([0.93, 0.97, 1.0], np.float32)
    paper = np.clip(PAPER + GRAIN, 0, 255)
    clip = None
    if mo:
        cap = cv2.VideoCapture(f'{EP}/motion/sh{s:02d}_raw.mp4'); clip = []
        while True:
            ok, f = cap.read()
            if not ok: break
            clip.append(cv2.resize(f, (W, H)))
    nfr = int(round(dur * FPS)); p = enc(f'/tmp/shiv_sh{s:02d}.mp4')
    for k in range(nfr):
        tt = k / FPS
        if mo and tt >= rev:
            ci = min(int((tt - rev) * FPS), len(clip) - 1)
            fr = clip[ci].astype(np.float32)
            if tt < rev + 0.4:  # cross-fade from revealed sketch into the motion clip
                w = (tt - rev) / 0.4; fr = sep * (1 - w) + fr * w
            hold_u = max(0.0, tt - rev - len(clip) / FPS) / max(dur - rev, 1)
            fr = kenburns(fr, hold_u, s) if hold_u > 0 else fr
        else:
            pr = tt / rev
            m = (t <= pr * 1.02).astype(np.float32)
            m = cv2.GaussianBlur(m, (3, 3), 0)[..., None]
            shade = smooth((pr - 0.55) / 0.45)  # tonal shading/hatching settles in after the lines
            base = paper * (1 - shade) + sep * shade
            fr = base * (1 - m) + sep * m
            cw = smooth((tt - col0) / (col1 - col0))
            if cw > 0: fr = fr * (1 - cw) + imgf * cw
            fr = kenburns(fr, smooth(tt / dur), s)
        p.stdin.write(np.clip(fr, 0, 255).astype(np.uint8).tobytes())
    p.stdin.close(); p.wait()
    return dur

if __name__ == '__main__':
    shots = [int(x) for x in sys.argv[2:]] or list(range(1, 18))
    durs = {s: render_shot(s) for s in shots}
    print(json.dumps(durs))
    json.dump(durs, open(f'/tmp/shiv_durs_{"_".join(map(str,shots))}.json', 'w'))
