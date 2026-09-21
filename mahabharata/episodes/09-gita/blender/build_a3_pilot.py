"""Ep 09 Gita — A3 one-beat 3D pilot (GATE C counsel → Blender → renders).

Minimal set: dusty Kurukshetra ground + warm golden-hour light + ONE hero plane
textured with the GATE C Imagine panel (plate-counsel.jpg). No sculpted faces.

Live player stays on stills/ — do not touch script.js stillsDir/plates.
Air production path: MacBook Air Blender CLI (see README). Box Blender OK for
proxy when Air unreachable.
"""
from __future__ import annotations

import json
import math
from pathlib import Path

import bpy

EP = Path(__file__).resolve().parents[1]
STILLS = EP / "stills"
RENDERS = EP / "renders"
BLEND = Path(__file__).resolve().parent / "ep09_a3_pilot.blend"
MAP_PATH = EP / "blender" / "blender-map.json"

# A3 pilot — single beat lock
BEAT = {
    "t": 35,
    "plate": "counsel",
    "file": "plate-counsel.jpg",
    "camera": "counsel_medium",
    "use": "hero_plane",
    "focus": "Krishna counsel — Arjuna grief; Imagine faces stay on JPEG",
}

PANEL = STILLS / BEAT["file"]
OUT_PNG = RENDERS / f"beat-{BEAT['t']:02d}-{BEAT['plate']}.png"

RENDERS.mkdir(parents=True, exist_ok=True)

if not PANEL.exists():
    raise FileNotFoundError(f"GATE C panel missing (read-only texture): {PANEL}")

# ---------------------------------------------------------------------------
# Scene reset + render settings (1536×1024 GATE C bar)
# ---------------------------------------------------------------------------
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
engines = {e.identifier for e in bpy.types.RenderSettings.bl_rna.properties["engine"].enum_items}
if "BLENDER_EEVEE_NEXT" in engines:
    scene.render.engine = "BLENDER_EEVEE_NEXT"
elif "BLENDER_EEVEE" in engines:
    scene.render.engine = "BLENDER_EEVEE"
else:
    scene.render.engine = "EEVEE"
scene.render.resolution_x = 1536
scene.render.resolution_y = 1024
scene.render.resolution_percentage = 100
scene.render.image_settings.file_format = "PNG"
scene.render.film_transparent = False
scene.render.filepath = str(OUT_PNG)

eevee = getattr(scene, "eevee", None)
if eevee is not None:
    for attr, val in (
        ("taa_render_samples", 64),
        ("use_gtao", True),
        ("use_bloom", True),
    ):
        if hasattr(eevee, attr):
            try:
                setattr(eevee, attr, val)
            except Exception:
                pass

# ---------------------------------------------------------------------------
# World + warm light
# ---------------------------------------------------------------------------
world = bpy.data.worlds.new("KurukshetraHour")
scene.world = world
world.use_nodes = True
nt = world.node_tree
nt.nodes.clear()
out = nt.nodes.new("ShaderNodeOutputWorld")
bg = nt.nodes.new("ShaderNodeBackground")
bg.inputs[0].default_value = (0.72, 0.48, 0.22, 1.0)
bg.inputs[1].default_value = 0.55
nt.links.new(bg.outputs["Background"], out.inputs["Surface"])

bpy.ops.object.light_add(type="SUN", location=(8, -10, 14))
sun = bpy.context.active_object
sun.name = "Sun_GoldenHour"
sun.data.energy = 3.2
sun.data.color = (1.0, 0.88, 0.62)
sun.rotation_euler = (math.radians(48), math.radians(8), math.radians(35))
if hasattr(sun.data, "angle"):
    sun.data.angle = math.radians(4.5)

bpy.ops.object.light_add(type="AREA", location=(-6, 4, 5))
fill = bpy.context.active_object
fill.name = "Fill_Warm"
fill.data.energy = 120
fill.data.color = (1.0, 0.75, 0.45)
fill.data.size = 8
fill.rotation_euler = (math.radians(70), 0, math.radians(-40))

# ---------------------------------------------------------------------------
# Ground
# ---------------------------------------------------------------------------
bpy.ops.mesh.primitive_plane_add(size=40, location=(0, 0, 0))
ground = bpy.context.active_object
ground.name = "Ground_Dust"
mat_g = bpy.data.materials.new("DustKurukshetra")
mat_g.use_nodes = True
bsdf_g = mat_g.node_tree.nodes["Principled BSDF"]
bsdf_g.inputs["Base Color"].default_value = (0.38, 0.28, 0.16, 1)
if "Roughness" in bsdf_g.inputs:
    bsdf_g.inputs["Roughness"].default_value = 0.92
ground.data.materials.append(mat_g)

# Soft far haze
bpy.ops.mesh.primitive_plane_add(size=50, location=(0, 18, 3.5))
haze = bpy.context.active_object
haze.name = "Haze_Backdrop"
haze.rotation_euler = (math.radians(88), 0, 0)
mat_h = bpy.data.materials.new("HazeGold")
mat_h.use_nodes = True
bh = mat_h.node_tree.nodes["Principled BSDF"]
bh.inputs["Base Color"].default_value = (0.65, 0.42, 0.18, 1)
if "Emission Color" in bh.inputs:
    bh.inputs["Emission Color"].default_value = (0.7, 0.45, 0.2, 1)
if "Emission Strength" in bh.inputs:
    bh.inputs["Emission Strength"].default_value = 0.25
haze.data.materials.append(mat_h)

# ---------------------------------------------------------------------------
# Hero plane — GATE C Imagine JPEG as texture (NOT sculpted face)
# ---------------------------------------------------------------------------

def make_panel_material(name: str, path: Path):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()
    out_n = nodes.new("ShaderNodeOutputMaterial")
    tex = nodes.new("ShaderNodeTexImage")
    tex.image = bpy.data.images.load(str(path))
    tex.image.colorspace_settings.name = "sRGB"
    emit = nodes.new("ShaderNodeEmission")
    emit.inputs["Strength"].default_value = 1.05
    links.new(tex.outputs["Color"], emit.inputs["Color"])
    bsdf = nodes.new("ShaderNodeBsdfPrincipled")
    links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
    if "Emission Color" in bsdf.inputs:
        links.new(tex.outputs["Color"], bsdf.inputs["Emission Color"])
    if "Emission Strength" in bsdf.inputs:
        bsdf.inputs["Emission Strength"].default_value = 0.85
    if "Roughness" in bsdf.inputs:
        bsdf.inputs["Roughness"].default_value = 0.55
    mix = nodes.new("ShaderNodeMixShader")
    mix.inputs["Fac"].default_value = 0.35
    links.new(emit.outputs["Emission"], mix.inputs[1])
    links.new(bsdf.outputs["BSDF"], mix.inputs[2])
    links.new(mix.outputs["Shader"], out_n.inputs["Surface"])
    return mat


# 3:2 landscape hero board (matches GATE C 1536×1024)
HERO_W, HERO_H = 4.8, 3.2
bpy.ops.mesh.primitive_plane_add(size=1, location=(0, 0.6, HERO_H / 2))
hero = bpy.context.active_object
hero.name = "HeroPlane_Counsel"
hero.scale = (HERO_W, HERO_H, 1)
# Face camera-ish (+Y toward viewer coming from -Y)
hero.rotation_euler = (math.radians(90), 0, 0)
bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
hero.data.materials.append(make_panel_material("Counsel_GATE_C", PANEL))

# Simple chariot-block base under the board (geometry only — no faces)
bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0.2, 0.35))
base = bpy.context.active_object
base.name = "ChariotBase_Proxy"
base.scale = (2.2, 1.1, 0.35)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
mat_wood = bpy.data.materials.new("ChariotWood")
mat_wood.use_nodes = True
bw = mat_wood.node_tree.nodes["Principled BSDF"]
bw.inputs["Base Color"].default_value = (0.28, 0.16, 0.08, 1)
if "Roughness" in bw.inputs:
    bw.inputs["Roughness"].default_value = 0.8
base.data.materials.append(mat_wood)

# ---------------------------------------------------------------------------
# Camera — medium three-quarter on counsel board
# ---------------------------------------------------------------------------
bpy.ops.object.camera_add(location=(3.8, -6.2, 2.4))
cam = bpy.context.active_object
cam.name = BEAT["camera"]
cam.data.lens = 50
cam.rotation_euler = (math.radians(78), 0, math.radians(28))
# Aim at hero center
track = cam.constraints.new(type="TRACK_TO")
track.target = hero
track.track_axis = "TRACK_NEGATIVE_Z"
track.up_axis = "UP_Y"
scene.camera = cam

# Optional map write (one beat)
map_doc = {
    "episode_id": "09",
    "slug": "gita",
    "pipeline": "A3-pilot: imagine-key-panel + blender-3d (ONE beat)",
    "stills_dir": "episodes/09-gita/stills/",
    "blender_dir": "episodes/09-gita/blender/",
    "renders_dir": "episodes/09-gita/renders/",
    "gate_c": "PASS (stills_review 1536×1024 3:2)",
    "scene": {
        "units": "meters",
        "ground": "dusty Kurukshetra plane",
        "notes": "Imagine panel is locked key art on hero plane. Geometry + camera provide set. Do not invent faces in Blender.",
    },
    "beats": [BEAT],
}
MAP_PATH.write_text(json.dumps(map_doc, indent=2) + "\n")

# ---------------------------------------------------------------------------
# Save + render ONE proxy
# ---------------------------------------------------------------------------
bpy.ops.wm.save_as_mainfile(filepath=str(BLEND))
bpy.ops.render.render(write_still=True)
print(f"A3 pilot wrote {OUT_PNG}")
print(f"blend {BLEND}")
