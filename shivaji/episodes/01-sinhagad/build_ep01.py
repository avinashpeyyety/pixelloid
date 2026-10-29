"""Shivaji Ep01 "Sinhagad" — v1 assembly (box-rendered, free/local only).
Per shot: whiteboard draw-on of line art (adaptive-threshold ink -> connected components,
each drawn along its own geodesic path from a seed, components ordered left->right/top->down),
shading fades in, selective color washes in, then Ken Burns. Sh-09 climb pan, Sh-11/12 duel shake.
Narration: audio/lineNN.wav from tts_ep01.py (Kokoro bm_george). Sh-09/11/12 motion is a local
placeholder that can later be swapped for Grok Imagine clips.
Usage: python3 build_ep01.py  -> out/shivaji_ep01_sinhagad_v1.mp4
"""
import subprocess, pathlib, numpy as np, cv2, soundfile as sf
from skimage.graph import MCP_Geometric
H = pathlib.Path(__file__).parent
W_, H_, FPS = 1280, 720, 24
PRE, POST, XF = 0.8, 1.6, 0.5          # narration pre-roll / tail pad / crossfade (s)
OUT = H/"render"; OUT.mkdir(exist_ok=True)
import glob
FONTFILE = (glob.glob("/usr/share/fonts/**/DejaVuSerif.ttf", recursive=True) + glob.glob("/System/Library/Fonts/Supplemental/Georgia.ttf"))[0]

def ease(x): x = np.clip(x, 0, 1); return x*x*(3-2*x)

def time_map(img):
    g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    ink = cv2.adaptiveThreshold(g, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY_INV, 15, 8) > 0
    ink = cv2.morphologyEx(ink.astype(np.uint8), cv2.MORPH_DILATE, np.ones((2,2),np.uint8)) > 0
    n, lab, st, cen = cv2.connectedComponentsWithStats(ink.astype(np.uint8), connectivity=8)
    cost = np.where(ink, 1.0, np.inf)
    seeds = []
    for c in range(1, n):
        ys, xs = np.nonzero(lab[st[c,1]:st[c,1]+st[c,3], st[c,0]:st[c,0]+st[c,2]] == c)
        k = np.argmin(xs + ys); seeds.append((ys[k]+st[c,1], xs[k]+st[c,0]))
    geo, _ = MCP_Geometric(cost, fully_connected=True).find_costs(seeds) if seeds else (np.zeros(g.shape),None)
    geo = np.where(np.isfinite(geo), geo, 0)
    t = np.ones(g.shape, np.float32)
    if n > 1:
        cx, cy = cen[1:,0], cen[1:,1]
        order = np.argsort(np.argsort(cx/W_ + 0.6*cy/H_ + np.random.default_rng(1).normal(0, .04, n-1)))
        start = order/(n-1) * 0.72
        area = st[1:, cv2.CC_STAT_AREA].astype(float)
        dur = 0.08 + 0.2*np.sqrt(area/area.max())
        gmax = np.zeros(n); np.maximum.at(gmax, lab[ink], geo[ink])
        L = lab[ink]
        t[ink] = start[L-1] + dur[L-1]*geo[ink]/np.maximum(gmax[L], 1)
    t[ink] = t[ink]/max(t[ink].max(), 1e-6)
    return ink, t

class Shot:
    def __init__(self, i, dur, motion):
        self.img = cv2.imread(str(H/f"stills/shot{i:02d}.png")); self.img = cv2.resize(self.img, (W_, H_))
        self.dur, self.motion, self.i = dur, motion, i
        self.ink, self.t = time_map(self.img)
        g = cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
        self.gray = cv2.cvtColor(g, cv2.COLOR_GRAY2BGR).astype(np.float32)
        self.col = self.img.astype(np.float32)
        light = g > np.percentile(g, 70)
        self.paper = np.median(self.img[light], axis=0).astype(np.float32) if light.any() else np.float32([235,243,248])
        if g.mean() < 110: self.paper = np.float32([235, 240, 244])   # night shots: reveal on paper, then night fades in
    def frame(self, tt):
        p = tt/self.dur
        r = ease(p/0.45)                         # draw-on progress
        drawn = (self.t <= r*1.02)[..., None]
        base = np.broadcast_to(self.paper, self.gray.shape)
        lines = np.where(drawn & self.ink[..., None], self.gray*0.85, base)
        shade = ease((p-0.30)/0.17)              # tonal shading fills behind the strokes
        f = lines*(1-shade) + self.gray*shade
        c = ease((p-0.45)/0.20)                  # selective color washes in
        f = f*(1-c) + self.col*c
        f = np.clip(f, 0, 255).astype(np.uint8)
        return self.camera(f, p, tt)
    def camera(self, f, p, tt):
        m = self.motion; k = ease(p)
        if m == "climb":
            z = 1.35; dy = (1-k)*(H_*(z-1)/2) - k*(H_*(z-1)/2)  # bottom -> top
            dx = 0
        elif m == "duel":
            z = 1.04 + 0.05*k + 0.012*np.sin(tt*2.3)
            dx = 3.0*np.sin(tt*17)*(p > .45) ; dy = 2.0*np.sin(tt*13+1)*(p > .45)
        else:
            z = 1.0 + 0.07*k; d = 1 if self.i % 2 else -1
            dx = d*20*(k-.5); dy = -8*(k-.5)
        M = cv2.getRotationMatrix2D((W_/2, H_/2), 0, z); M[0,2] += dx; M[1,2] += dy
        return cv2.warpAffine(f, M, (W_, H_), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT)

class Card:
    def __init__(self, text, sub, dur, paper=(232,241,247)):
        self.dur = dur; c = np.full((H_, W_, 3), paper, np.uint8)
        from PIL import Image, ImageDraw, ImageFont
        im = Image.fromarray(c); d = ImageDraw.Draw(im)
        for txt, y, sz in ((text, 270, 72), (sub, 395, 40)):
            fnt = ImageFont.truetype(FONTFILE, sz); w = d.textlength(txt, font=fnt)
            d.text(((W_-w)/2, y), txt, font=fnt, fill=(40,40,40))
        c = np.array(im)
        cv2.line(c, (440, 365), (840, 365), (40,110,230), 3, cv2.LINE_AA)   # saffron underline
        self.img = c; self.ink, self.t = time_map(c)
        self.paper = np.float32(paper)
    def frame(self, tt):
        r = ease(tt/(self.dur*0.6)); drawn = ((self.t <= r) & self.ink)[..., None]
        f = np.where(drawn, self.img, self.paper).astype(np.uint8)
        f = np.where(r >= 1, self.img, f)
        return f

def main():
    clips = [sf.read(next(p for p in (H/f"audio/line{i:02d}.wav", H/f"audio/line{i:02d}.mp3") if p.exists())) for i in range(1, 18)]
    sr = clips[0][1]
    motion = {9: "climb", 11: "duel", 12: "duel"}
    items = [Card("Shivaji · Episode 1 · Sinhagad", "a story of a lion-hearted friend", 5.0)]
    starts_audio = []
    for i, (a, _) in enumerate(clips, 1):
        items.append(Shot(i, PRE + len(a)/sr + POST, motion.get(i, "kb")))
    items.append(Card("Sinhagad — the Lion's Fort", "Shivaji · Episode 1 · The End", 6.0))
    # timeline with crossfades
    st, t0 = [], 0.0
    for it in items: st.append(t0); t0 += it.dur - XF
    total = t0 + XF
    nf = int(round(total*FPS))
    audio = np.zeros(int(total*sr)+sr)
    for k, (a, _) in enumerate(clips, 1):
        s = int((st[k] + PRE)*sr); audio[s:s+len(a)] += a
    audio *= 0.89/np.abs(audio).max()
    sf.write(OUT/"narration_mix.wav", audio[:int(total*sr)], sr)
    ff = subprocess.Popen(["ffmpeg","-y","-loglevel","error","-f","rawvideo","-pix_fmt","bgr24","-s",f"{W_}x{H_}","-r",str(FPS),"-i","-",
        "-i", str(OUT/"narration_mix.wav"),"-c:v","libx264","-preset","slow","-b:v","1500k","-maxrate","2000k","-bufsize","3000k","-pix_fmt","yuv420p","-c:a","aac","-b:a","128k",
        "-movflags","+faststart","-shortest", str(OUT/"shivaji_ep01_sinhagad_v1.mp4")], stdin=subprocess.PIPE)
    for n in range(nf):
        T = n/FPS; act = [(k, it) for k, it in enumerate(items) if st[k] <= T < st[k]+it.dur]
        fr = None
        for k, it in act:
            f = it.frame(T-st[k]).astype(np.float32)
            if fr is None: fr = f
            else: a = ease((T-st[k])/XF); fr = fr*(1-a) + f*a
        if fr is None: fr = items[-1].frame(items[-1].dur).astype(np.float32)
        ff.stdin.write(fr.astype(np.uint8).tobytes())
    ff.stdin.close(); ff.wait(); print("total", round(total,2), "frames", nf)

if __name__ == "__main__": main()
