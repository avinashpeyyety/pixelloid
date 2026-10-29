"""Ep01 narration: Kokoro-82M (kokoro-onnx) bm_george, one clip per script line, with phonetic respellings."""
import re, sys, pathlib, soundfile as sf, numpy as np
from kokoro_onnx import Kokoro
HERE = pathlib.Path(__file__).parent
M = pathlib.Path.home()/"tts-models/kokoro"
LINES = [
"Long ago, in the green Sahyadri mountains of Maharashtra, stood a tall fort called Kondhana. Its cliffs were so steep that even the clouds seemed to stop and rest there.",
"Kondhana had once belonged to Shivaji Maharaj. But after a hard treaty, in the year 1665, he had to give it to the Mughal empire.",
"The story goes that his mother, Jijabai, looked at the fort each morning and said softly, \"That fort is the gate to our home. One day, it must fly our flag again.\"",
"Shivaji Maharaj called for his oldest friend, Tanaji Malusare, a brave and cheerful warrior.",
"That day, Tanaji was preparing for his own son's wedding. But when he heard the call, he smiled and said, \"First the fort, then the wedding.\"",
"Kondhana was guarded by Udaybhan Rathod, a strong and skilled commander. The gates were shut tight. There was only one way in: up the steepest cliff, in the dark.",
"On a cold February night in 1670, under a thin moon, Tanaji, his brother Suryaji, and a band of Mavla soldiers crept silently to the foot of the mountain.",
"Now, here is a legend people love to tell. They say Tanaji had a pet monitor lizard, a ghorpad, named Yashwanti. A rope was tied to her, and she climbed the rock and held on tight, so the soldiers could follow.",
"Whether it was a lizard, or ropes and very strong hands, one thing is true: the Mavlas climbed that cliff in the night, one by one, without a sound.",
"At the top, the guards woke up. Torches flared. Drums beat. Swords flashed in the moonlight.",
"Tanaji faced Udaybhan himself. The two great warriors fought long and hard, shield against shield, sword against sword.",
"In that fight, brave Tanaji fell, and did not rise again.",
"For a moment, the Mavlas stopped. Then Suryaji raised his voice: \"Our brother gave everything for this fort. Will we turn back now?\" And they fought on, until Kondhana was theirs.",
"As the sun rose, the saffron flag, the Bhagwa, waved once more above the fort.",
"When the news reached Shivaji Maharaj, he was happy for the fort, but his heart was heavy for his friend. He said: \"Gad aala, pan Sinha gela.\" \"We won the fort, but we lost the lion.\"",
"And so, to honour Tanaji, Kondhana was given a new name: Sinhagad, the Lion's Fort.",
"Today, children still climb Sinhagad, feel the wind on the cliffs, and remember a lion-hearted friend who kept his promise.",
]
SAY = [  # phonetic respellings for English espeak
 (r"Gad aala, pan Sinha gela", "Gudd aah-laa, pun Sin-ha gay-laa"),
 (r"Sinhagad", "Sin-ha-gudd"), (r"Kondhana", "Kond-haa-naa"), (r"Malusare", "Maa-loo-sa-ray"),
 (r"Tanaji", "Taa-naa-jee"), (r"Udaybhan", "Oo-dye-bhaan"), (r"Suryaji", "Soor-yaa-jee"),
 (r"Jijabai", "Jee-jaa-bye"), (r"Shivaji", "Shee-vaa-jee"), (r"Maharaj", "Ma-haa-raaj"),
 (r"Mavlas", "Maav-laas"), (r"Mavla", "Maav-laa"), (r"ghorpad", "ghor-pudd"), (r"Yashwanti", "Yash-wun-tee"),
 (r"Bhagwa", "Bhug-waa"), (r"Rathod", "Raa-thore"), (r"Sahyadri", "Sa-hyaa-dree"),
 (r"1665", "sixteen sixty-five"), (r"1670", "sixteen seventy"),
]
def say(t):
    for a, b in SAY: t = re.sub(a, b, t)
    return t
if __name__ == "__main__":
    k = Kokoro(str(M/"kokoro-v1.0.onnx"), str(M/"voices-v1.0.bin"))
    out = HERE/"audio"; out.mkdir(exist_ok=True)
    for i, line in enumerate(LINES, 1):
        a, sr = k.create(say(line), voice="bm_george", speed=0.9, lang="en-gb")
        sf.write(out/f"line{i:02d}.wav", a, sr); print(i, round(len(a)/sr, 2))
