"""Ep 11 Chakravyuha — cinematic Blender v3 (dressed set + cameras).

NOT full-bleed billboards of Imagine stills. Real Kurukshetra ground, dressed
vyuha rings (army proxies), hero cards from stills/_locks/, cinematic cameras
per blender-map.json beat keys.

Live player stays on stills/ — do not touch script.js stillsDir/plates.
v2 full-bleed tool remains: build_ep11_scene.py
"""
from __future__ import annotations

import json
import math
import random
from pathlib import Path

import bpy
from mathutils import Euler, Vector

EP = Path(__file__).resolve().parents[1]
LOCKS = EP / "stills" / "_locks"
RENDERS = EP / "renders"
BLEND = Path(__file__).resolve().parent / "ep11_chakravyuha.blend"
MAP = json.loads((EP / "blender-map.json").read_text())

RENDERS.mkdir(parents=True, exist_ok=True)
rng = random.Random(11)

# ---------------------------------------------------------------------------
# Scene reset + render settings
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
scene.render.filepath = str(RENDERS / "beat_")

# Eevee soft looks
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
# World + sun — cream / saffron / gold hour
# ---------------------------------------------------------------------------
world = bpy.data.worlds.new("KurukshetraHour")
scene.world = world
world.use_nodes = True
nt = world.node_tree
nt.nodes.clear()
out = nt.nodes.new("ShaderNodeOutputWorld")
bg = nt.nodes.new("ShaderNodeBackground")
bg.inputs[0].default_value = (0.72, 0.48, 0.22, 1.0)  # warm saffron sky
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

# fill / rim
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
bpy.ops.mesh.primitive_plane_add(size=80, location=(0, 0, 0))
ground = bpy.context.active_object
ground.name = "Ground_Dust"
mat_g = bpy.data.materials.new("DustKurukshetra")
mat_g.use_nodes = True
bsdf_g = mat_g.node_tree.nodes["Principled BSDF"]
bsdf_g.inputs["Base Color"].default_value = (0.38, 0.28, 0.16, 1)
if "Roughness" in bsdf_g.inputs:
    bsdf_g.inputs["Roughness"].default_value = 0.92
ground.data.materials.append(mat_g)

# subtle haze plane (far)
bpy.ops.mesh.primitive_plane_add(size=90, location=(0, 28, 4))
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
# Materials helpers
# ---------------------------------------------------------------------------

def mat_color(name: str, rgba, rough=0.7, emit=0.0, emit_color=None):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = rgba
    if "Roughness" in b.inputs:
        b.inputs["Roughness"].default_value = rough
    if emit > 0:
        ec = emit_color or rgba
        if "Emission Color" in b.inputs:
            b.inputs["Emission Color"].default_value = ec
        if "Emission Strength" in b.inputs:
            b.inputs["Emission Strength"].default_value = emit
    return m


def make_lock_card_material(name: str, path: Path):
    """Emission-driven hero card — lock JPEG only, no invented faces."""
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
    # slight mix with principled for soft shadow catch — keep emission dominant
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


MAT_SAFFRON = mat_color("SaffronBanner", (0.85, 0.45, 0.08, 1), rough=0.55, emit=0.15, emit_color=(0.9, 0.5, 0.1, 1))
MAT_ARMOR = mat_color("ArmyArmor", (0.35, 0.28, 0.18, 1), rough=0.65)
MAT_STEEL = mat_color("ChariotSteel", (0.25, 0.22, 0.2, 1), rough=0.4)
MAT_WOOD = mat_color("ChariotWood", (0.28, 0.16, 0.08, 1), rough=0.8)
MAT_RING = mat_color("RingGuide", (0.7, 0.5, 0.18, 1), rough=0.5, emit=0.2, emit_color=(0.85, 0.6, 0.2, 1))
MAT_WHEEL = mat_color("WheelProp", (0.22, 0.14, 0.07, 1), rough=0.75)
MAT_BOW = mat_color("BrokenBow", (0.18, 0.1, 0.05, 1), rough=0.85)

# ---------------------------------------------------------------------------
# Dressed Chakravyuha rings
# ---------------------------------------------------------------------------
RING_RADII = (3.5, 5.5, 7.8, 10.2, 12.8)
army_collection = bpy.data.collections.new("ArmyProxies")
scene.collection.children.link(army_collection)
ring_guides = []


def link_to_army(obj):
    # unlink from scene collection, link to army
    for c in obj.users_collection:
        c.objects.unlink(obj)
    army_collection.objects.link(obj)


for i, radius in enumerate(RING_RADII, start=1):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=radius, minor_radius=0.06, location=(0, 0, 0.04 * i)
    )
    ring = bpy.context.active_object
    ring.name = f"VyuhaGuide{i}"
    ring.data.materials.append(MAT_RING)
    ring_guides.append(ring)
    link_to_army(ring)

    # troop count scales with circumference
    n_troops = 18 + i * 8
    for k in range(n_troops):
        ang = (2 * math.pi * k / n_troops) + rng.uniform(-0.03, 0.03)
        x = radius * math.cos(ang)
        y = radius * math.sin(ang)
        kind = rng.random()
        if kind < 0.55:
            # foot soldier cube
            bpy.ops.mesh.primitive_cube_add(
                size=0.28 + rng.uniform(-0.04, 0.06),
                location=(x, y, 0.18),
            )
            unit = bpy.context.active_object
            unit.name = f"Troop_R{i}_{k}"
            unit.rotation_euler = (0, 0, ang + math.pi / 2)
            unit.scale.z = 1.4 + rng.uniform(0, 0.4)
            unit.data.materials.append(MAT_ARMOR)
        elif kind < 0.78:
            # saffron banner cone + thin pole
            bpy.ops.mesh.primitive_cone_add(
                radius1=0.12, depth=0.55, location=(x, y, 0.55)
            )
            unit = bpy.context.active_object
            unit.name = f"Banner_R{i}_{k}"
            unit.rotation_euler = (0, 0, ang)
            unit.data.materials.append(MAT_SAFFRON)
            bpy.ops.mesh.primitive_cylinder_add(
                radius=0.03, depth=0.9, location=(x, y, 0.35)
            )
            pole = bpy.context.active_object
            pole.name = f"Pole_R{i}_{k}"
            pole.data.materials.append(MAT_WOOD)
            link_to_army(pole)
        else:
            # chariot-ish box
            bpy.ops.mesh.primitive_cube_add(size=0.45, location=(x, y, 0.28))
            unit = bpy.context.active_object
            unit.name = f"Chariot_R{i}_{k}"
            unit.scale = (1.3, 0.7, 0.55)
            unit.rotation_euler = (0, 0, ang + math.pi / 2)
            unit.data.materials.append(MAT_STEEL)
        link_to_army(unit)

# ---------------------------------------------------------------------------
# Hero cards (vertical planes) from stills/_locks/
# ---------------------------------------------------------------------------
CARD_H = 2.4
CARD_W = 1.6


def make_hero_card(name: str, lock_file: str, location, facing_yaw_deg: float):
    path = LOCKS / lock_file
    if not path.exists():
        raise FileNotFoundError(path)
    bpy.ops.mesh.primitive_plane_add(size=2, location=(0, 0, 0))
    card = bpy.context.active_object
    card.name = name
    # default plane XY → stand in XZ facing -Y then yaw
    card.rotation_euler = (math.radians(90), 0, math.radians(facing_yaw_deg))
    card.scale = (CARD_W / 2.0, CARD_H / 2.0, 1.0)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    card.location = Vector(location)
    card.rotation_euler = (math.radians(90), 0, math.radians(facing_yaw_deg))
    mat = make_lock_card_material(f"Mat_{name}", path)
    card.data.materials.clear()
    card.data.materials.append(mat)
    # thin pedestal
    bpy.ops.mesh.primitive_cube_add(
        size=1.0,
        location=(location[0], location[1], 0.05),
    )
    ped = bpy.context.active_object
    ped.name = f"{name}_Pedestal"
    ped.scale = (CARD_W * 0.55, 0.25, 0.08)
    ped.data.materials.append(MAT_WOOD)
    return card, ped


heroes = {}
# Drona — command overlook north of field
heroes["drona"], _ = make_hero_card("Hero_Drona", "drona.jpg", (0.0, 16.5, CARD_H / 2), 180)
# Abhimanyu positions for different beats
heroes["abhi_counsel"], _ = make_hero_card("Hero_Abhi_Counsel", "abhimanyu.jpg", (-4.5, 2.5, CARD_H / 2), 35)
heroes["abhi_enter"], _ = make_hero_card("Hero_Abhi_Enter", "abhimanyu.jpg", (11.5, -1.5, CARD_H / 2), -90)
heroes["abhi_storm"], _ = make_hero_card("Hero_Abhi_Storm", "abhimanyu.jpg", (1.2, 0.8, CARD_H / 2), 25)
heroes["abhi_wheel"], _ = make_hero_card("Hero_Abhi_Wheel", "abhimanyu.jpg", (0.3, -0.5, CARD_H / 2), 15)
heroes["abhi_dusk"], _ = make_hero_card("Hero_Abhi_Dusk", "abhimanyu.jpg", (0.0, 0.2, 0.55), 0)  # fallen low
heroes["abhi_dusk"].scale = (1.0, 0.55, 1.0)  # foreshortened fall
heroes["abhi_dusk"].rotation_euler = (math.radians(75), math.radians(12), math.radians(20))
# Jayadratha at outer rim gate (east)
heroes["jayadratha"], _ = make_hero_card("Hero_Jayadratha", "jayadratha.jpg", (13.5, 0.5, CARD_H / 2), -90)
# Arjuna + Krishna side by side on chariot base (dusk vow)
heroes["arjuna"], _ = make_hero_card("Hero_Arjuna", "arjuna.jpg", (-2.0, -14.0, CARD_H / 2), 0)
heroes["krishna"], _ = make_hero_card("Hero_Krishna", "krishna.jpg", (0.2, -14.0, CARD_H / 2), 0)
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(-0.9, -14.5, 0.35))
chariot_base = bpy.context.active_object
chariot_base.name = "ChariotBase_Vow"
chariot_base.scale = (3.2, 1.6, 0.45)
chariot_base.data.materials.append(MAT_WOOD)
# chariot wheels under base
for wx in (-2.2, 0.4):
    bpy.ops.mesh.primitive_cylinder_add(radius=0.55, depth=0.18, location=(wx, -14.9, 0.55))
    wh = bpy.context.active_object
    wh.name = f"VowWheel_{wx}"
    wh.rotation_euler = (math.radians(90), 0, 0)
    wh.data.materials.append(MAT_WHEEL)

# ---------------------------------------------------------------------------
# Props — chariot wheel + broken bow near Abhimanyu wheel beat
# ---------------------------------------------------------------------------
bpy.ops.mesh.primitive_torus_add(
    major_radius=0.85, minor_radius=0.08, location=(1.4, -0.2, 0.9)
)
wheel_prop = bpy.context.active_object
wheel_prop.name = "Prop_ChariotWheel"
wheel_prop.rotation_euler = (math.radians(78), math.radians(12), math.radians(25))
wheel_prop.data.materials.append(MAT_WHEEL)

# spokes (simple cylinders)
for si in range(6):
    ang = si * math.pi / 3
    bpy.ops.mesh.primitive_cylinder_add(
        radius=0.035, depth=1.5, location=(1.4, -0.2, 0.9)
    )
    sp = bpy.context.active_object
    sp.name = f"Prop_Spoke_{si}"
    sp.rotation_euler = (math.radians(78), math.radians(12), math.radians(25) + ang)
    sp.data.materials.append(MAT_WOOD)

bpy.ops.mesh.primitive_cylinder_add(
    radius=0.04, depth=1.6, location=(-0.6, -1.0, 0.12)
)
bow = bpy.context.active_object
bow.name = "Prop_BrokenBow"
bow.rotation_euler = (math.radians(90), math.radians(20), math.radians(55))
bow.scale = (1.0, 1.0, 0.55)
bow.data.materials.append(MAT_BOW)

# ---------------------------------------------------------------------------
# Cameras — cinematic, keyed to blender-map.json
# ---------------------------------------------------------------------------

def add_camera(name: str, location, look_at, lens=35, clip_end=200):
    bpy.ops.object.camera_add(location=location)
    cam = bpy.context.active_object
    cam.name = name
    cam.data.type = "PERSP"
    cam.data.lens = lens
    cam.data.clip_end = clip_end
    cam.data.sensor_fit = "HORIZONTAL"
    # empty target
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=look_at)
    target = bpy.context.active_object
    target.name = f"Look_{name}"
    cam.constraints.clear()
    track = cam.constraints.new(type="TRACK_TO")
    track.target = target
    track.track_axis = "TRACK_NEGATIVE_Z"
    track.up_axis = "UP_Y"
    return cam


cameras = {}
# establishing_high — Drona overlook + field of rings
cameras["establishing_high"] = add_camera(
    "Cam_establishing_high",
    location=(6.0, 8.0, 9.5),
    look_at=(0.0, 10.0, 1.5),
    lens=28,
)
# overhead_wheel — concentric army rings
cameras["overhead_wheel"] = add_camera(
    "Cam_overhead_wheel",
    location=(0.5, -1.0, 22.0),
    look_at=(0.0, 0.0, 0.0),
    lens=32,
)
# medium_pandava — Abhimanyu counsel vow
cameras["medium_pandava"] = add_camera(
    "Cam_medium_pandava",
    location=(-1.5, -1.0, 2.2),
    look_at=(-4.3, 2.4, 1.4),
    lens=50,
)
# chase_into_rings — Abhimanyu entering from outside
cameras["chase_into_rings"] = add_camera(
    "Cam_chase_into_rings",
    location=(17.5, -4.5, 3.2),
    look_at=(10.5, -1.2, 1.3),
    lens=35,
)
# rim_gate — Jayadratha at outer rim
cameras["rim_gate"] = add_camera(
    "Cam_rim_gate",
    location=(18.5, 3.5, 2.8),
    look_at=(13.2, 0.6, 1.4),
    lens=45,
)
# inside_orbit — Abhimanyu storm inside rings
cameras["inside_orbit"] = add_camera(
    "Cam_inside_orbit",
    location=(5.5, -3.5, 2.5),
    look_at=(1.0, 0.7, 1.3),
    lens=40,
)
# close_last_weapon — Abhimanyu + wheel
cameras["close_last_weapon"] = add_camera(
    "Cam_close_last_weapon",
    location=(3.8, -2.8, 1.9),
    look_at=(0.8, -0.3, 1.1),
    lens=55,
)
# fall_wide — fallen Abhimanyu, day darkens
cameras["fall_wide"] = add_camera(
    "Cam_fall_wide",
    location=(4.5, -5.5, 3.5),
    look_at=(0.2, 0.0, 0.7),
    lens=32,
)
# dusk_vow — Arjuna + Krishna on chariot
cameras["dusk_vow"] = add_camera(
    "Cam_dusk_vow",
    location=(-0.9, -20.5, 2.6),
    look_at=(-0.9, -14.0, 1.4),
    lens=45,
)

# ---------------------------------------------------------------------------
# Per-beat visibility + props
# ---------------------------------------------------------------------------
# Which heroes visible per camera key
BEAT_HEROES = {
    "establishing_high": ["drona"],
    "overhead_wheel": [],  # rings only — readable mandala
    "medium_pandava": ["abhi_counsel"],
    "chase_into_rings": ["abhi_enter"],
    "rim_gate": ["jayadratha"],
    "inside_orbit": ["abhi_storm"],
    "close_last_weapon": ["abhi_wheel"],
    "fall_wide": ["abhi_dusk"],
    "dusk_vow": ["arjuna", "krishna"],
}

ALL_HERO_KEYS = list(heroes.keys())
WHEEL_PROPS = [wheel_prop, bow] + [
    o for o in bpy.data.objects if o.name.startswith("Prop_Spoke_")
]
VOW_EXTRAS = [chariot_base] + [
    o for o in bpy.data.objects if o.name.startswith("VowWheel_")
]


def set_beat_visibility(camera_key: str):
    show = set(BEAT_HEROES.get(camera_key, []))
    for key, obj in heroes.items():
        vis = key in show
        obj.hide_render = not vis
        obj.hide_viewport = not vis
        ped = bpy.data.objects.get(f"{obj.name}_Pedestal")
        if ped:
            ped.hide_render = not vis
            ped.hide_viewport = not vis
    # wheel props only on close_last_weapon (and faintly fall)
    for p in WHEEL_PROPS:
        on = camera_key in ("close_last_weapon", "fall_wide")
        p.hide_render = not on
        p.hide_viewport = not on
    for p in VOW_EXTRAS:
        on = camera_key == "dusk_vow"
        p.hide_render = not on
        p.hide_viewport = not on
    # army always on except maybe dusk_vow far — keep on for establishing/overhead/etc.
    army_on = camera_key != "dusk_vow"
    for obj in army_collection.objects:
        obj.hide_render = not army_on
        # keep guides subtle always when army on
    # haze always
    haze.hide_render = False
    ground.hide_render = False


# ---------------------------------------------------------------------------
# Save blend, then render all beats
# ---------------------------------------------------------------------------
# show everything for the saved edit-friendly state first
for key in ALL_HERO_KEYS:
    heroes[key].hide_render = False
    heroes[key].hide_viewport = False
bpy.ops.wm.save_as_mainfile(filepath=str(BLEND))
print("Saved", BLEND)

sizes = []
for beat in MAP["beats"]:
    cam_key = beat["camera"]
    plate = beat["plate"]
    t = int(beat["t"])
    cam = cameras.get(cam_key)
    if cam is None:
        print("MISSING CAMERA", cam_key)
        continue
    set_beat_visibility(cam_key)
    scene.camera = cam
    out = RENDERS / f"beat-{t:02d}-{plate}.png"
    scene.render.filepath = str(out)
    print(f"Rendering {out.name} cam={cam_key} heroes={BEAT_HEROES.get(cam_key)}")
    bpy.ops.render.render(write_still=True)
    sz = out.stat().st_size if out.exists() else 0
    sizes.append((out.name, sz))
    print(f"  -> {sz} bytes")

# restore all heroes visible in blend for editing
for key in ALL_HERO_KEYS:
    heroes[key].hide_render = False
    heroes[key].hide_viewport = False
    ped = bpy.data.objects.get(f"{heroes[key].name}_Pedestal")
    if ped:
        ped.hide_render = False
        ped.hide_viewport = False
for p in WHEEL_PROPS + VOW_EXTRAS:
    p.hide_render = False
    p.hide_viewport = False
for obj in army_collection.objects:
    obj.hide_render = False

bpy.ops.wm.save_as_mainfile(filepath=str(BLEND))

print("--- file sizes ---")
for name, sz in sizes:
    print(f"{name}: {sz}")
print("DONE ep11 blender cinematic v3 — dressed set + cameras")
