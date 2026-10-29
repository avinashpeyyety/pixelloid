# Kokoro TTS narration: one WAV per script line (bm_george, gentle pace)
import re, sys, soundfile as sf, numpy as np
from kokoro import KPipeline
script, out = sys.argv[1], sys.argv[2]
lines = [m.group(2) for m in (re.match(r'^(\d+)\. (.*)$', l) for l in open(script)) if m]
assert len(lines) == 17, len(lines)
p = KPipeline(lang_code='b')
for i, t in enumerate(lines, 1):
    t = t.replace('—', ', ').replace('Gad aala, pan Sinha gela', 'Gud aala, pun Sinha gayla')
    audio = np.concatenate([a.numpy() if hasattr(a,'numpy') else a for _,_,a in p(t, voice='bm_george', speed=0.9)])
    sf.write(f'{out}/line{i:02d}.wav', audio, 24000)
    print(i, round(len(audio)/24000, 2))
