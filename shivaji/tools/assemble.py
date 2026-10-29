"""Title/end cards + narration placement + synthesized tanpura bed + soft drum, then concat to final mp4."""
import subprocess, json, sys, numpy as np, soundfile as sf
from PIL import Image, ImageDraw, ImageFont
EP, OUT = sys.argv[1], sys.argv[2]
W, H, FPS, SR = 1280, 720, 24, 48000
LEAD = 1.0
SERIF = '/usr/share/fonts/truetype/sand-box/google/Cormorant Garamond/CormorantGaramond-VariableFont_wght.ttf'
def probe(p): return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',p]))
def card(path, lines, secs):
    im = Image.new('RGB', (W, H), '#F4EEDF'); d = ImageDraw.Draw(im)
    y = H/2 - sum(sz for _, sz, _ in lines)*0.7
    for txt, sz, colr in lines:
        f = ImageFont.truetype(SERIF, sz); f.set_variation_by_axes([600])
        w = d.textlength(txt, font=f); d.text(((W-w)/2, y), txt, font=f, fill=colr); y += sz*1.45
    d.line([(W/2-120, H-150), (W/2+120, H-150)], fill='#6B4F3A', width=2)
    im.save('/tmp/card.png')
    subprocess.run(['ffmpeg','-v','error','-y','-loop','1','-i','/tmp/card.png','-t',str(secs),'-r',str(FPS),
        '-vf',f'fade=in:0:{FPS},fade=out:st={secs-0.8}:d=0.8,format=yuv420p','-c:v','libx264','-crf','20',path], check=True)
card('/tmp/shiv_title.mp4', [('Shivaji', 92, '#3A3631'), ('Ep 01 — Sinhagad', 54, '#6B4F3A'), ('The Lion\u2019s Fort', 34, '#9A8C74')], 4.5)
card('/tmp/shiv_end.mp4', [('\u201cGad aala, pan Sinha gela\u201d', 50, '#6B4F3A'), ('We won the fort, but we lost the lion.', 34, '#3A3631'),
     ('Shivaji \u00b7 a Pixelloid sketch story', 28, '#9A8C74'), ('Some parts are legend, told as legend.', 24, '#9A8C74')], 6.0)
segs = ['/tmp/shiv_title.mp4'] + [f'/tmp/shiv_sh{s:02d}.mp4' for s in range(1, 18)] + ['/tmp/shiv_end.mp4']
durs = [probe(p) for p in segs]; starts = np.cumsum([0] + durs[:-1]); total = sum(durs)
N = int(total * SR) + SR
voice = np.zeros(N)
import scipy.signal as ss
for s in range(1, 18):
    a, sr = sf.read(f'{EP}/audio/line{s:02d}.wav'); a = ss.resample_poly(a, SR, sr)
    i = int((starts[s] + LEAD) * SR); voice[i:i+len(a)] += a * 0.95
# tanpura-like drone in D: Pa, Sa', Sa', Sa plucks, rich harmonics, slow decay
t = np.arange(int(2.4*SR))/SR
def pluck(f):
    h = sum((0.6**k) * np.sin(2*np.pi*f*(k+1)*t*(1+0.0007*k)) for k in range(8))
    return h * np.exp(-t*1.1) * (1-np.exp(-t*40))
notes = [pluck(110.0), pluck(146.83*2/2*2/2*1.0*2/2), pluck(146.83), pluck(73.42)]
bed = np.zeros(N + 3*SR); i = 0; k = 0
while i < N:
    n = notes[k % 4]; bed[i:i+len(n)] += n; i += int(0.6*SR); k += 1
bed = bed[:N]; bed /= np.abs(bed).max()
b, a_ = ss.butter(2, 1800/(SR/2)); bed = ss.lfilter(b, a_, bed)
env = np.ones(N); fade = 3*SR; env[:fade] = np.linspace(0,1,fade); env[N-SR-fade:N-SR] = np.linspace(1,0,fade); env[N-SR:] = 0
# duck under narration
vabs = ss.lfilter([1], [1, -0.9995], np.abs(voice)) ; vabs /= vabs.max()+1e-9
bed = bed * env * 0.07 * (1 - 0.45*np.clip(vabs*6, 0, 1))
# soft dhol thumps under Sh-10 (drums beat)
tt = np.arange(int(0.5*SR))/SR; thump = np.sin(2*np.pi*(70*np.exp(-tt*6)+45)*tt)*np.exp(-tt*9)
for j in range(10):
    i = int((starts[10] + 0.5 + j*0.75) * SR); bed[i:i+len(thump)] += thump * 0.12
mix = voice + bed; mix /= max(1.0, np.abs(mix).max()/0.95)
sf.write('/tmp/shiv_mix.wav', np.stack([mix, mix], 1), SR)
open('/tmp/shiv_concat.txt','w').write(''.join(f"file '{p}'\n" for p in segs))
subprocess.run(['ffmpeg','-v','error','-y','-f','concat','-safe','0','-i','/tmp/shiv_concat.txt','-i','/tmp/shiv_mix.wav',
    '-map','0:v','-map','1:a','-c:v','libx264','-preset','slow','-crf','23','-pix_fmt','yuv420p','-r',str(FPS),
    '-c:a','aac','-b:a','128k','-shortest','-movflags','+faststart',OUT], check=True)
print(json.dumps({'total': total, 'starts': list(map(float, starts))}))
