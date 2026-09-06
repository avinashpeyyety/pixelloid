"""Build Ep 11 Chakravyuha Blender proxies: one Imagine panel per camera, full-bleed.

Rules (player-plate gate):
- Only the active beat's panel is visible when rendering.
- Camera frames that panel to fill the 1536×1024 (3:2) canvas.
- Soft warm world — no grey void if a hairline edge peeks.
- Rings exist in the .blend for future motion work but stay hidden during plate renders
  (they previously stole the frame). Toggle SHOW_RINGS_IN_RENDERS for experiments.
"""
import json
import math
from pathlib import Path

import bpy
from mathutils import Vector

EP = Path(__file__).resolve().parents[1]
STILLS = EP / "stills"
RENDERS = EP / "renders"
BLEND = Path(__file__).resolve().parent / "ep11_chakravyuha.blend"
MAP = json.loads((EP / "blender-map.json").read_text())

SHOW_RINGS_IN_RENDERS = False  # keep false until dressed set actually helps the beat

RENDERS.mkdir(parents=True, exist_ok=True)

# --- scene reset ---
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
engines = {e.identifier for e in bpy.types.RenderSettings.bl_rna.properties["engine"].enum_items}
scene.render.engine = "BLENDER_EEVEE_NEXT" if "BLENDER_EEVEE_NEXT" in engines else "BLENDER_EEVEE"
scene.render.resolution_x = 1536
scene.render.resolution_y = 1024
scene.render.resolution_percentage = 100
scene.render.image_settings.file_format = "PNG"
scene.render.film_transparent = False
scene.render.filepath = str(RENDERS / "beat_")

# warm Kurukshetra hour world (matches cream–saffron GATE C)
world = bpy.data.worlds.new("Kurukshetra")
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes["Background"]
bg.inputs[0].default_value = (0.55, 0.38, 0.18, 1)
bg.inputs[1].default_value = 0.85

# ground (offline set dressing)
bpy.ops.mesh.primitive_plane_add(size=40, location=(0, 0, 0))
ground = bpy.context.active_object
ground.name = "Ground"
ground.hide_render = True  # hide for full-bleed plate proxies
mat_g = bpy.data.materials.new("Dust")
mat_g.use_nodes = True
mat_g.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = (0.42, 0.32, 0.20, 1)
ground.data.materials.append(mat_g)

# vyuha rings — present in blend, hidden in plate renders by default
rings = []
for i, radius in enumerate((4.0, 6.5, 9.0, 11.5), start=1):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=radius, minor_radius=0.08, location=(0, 0, 0.05 * i)
    )
    ring = bpy.context.active_object
    ring.name = f"VyuhaRing{i}"
    ring.hide_render = not SHOW_RINGS_IN_RENDERS
    ring.hide_viewport = False
    mat_r = bpy.data.materials.new(f"RingMat{i}")
    mat_r.use_nodes = True
    bsdf = mat_r.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (0.75, 0.55, 0.2, 1)
    bsdf.inputs["Emission Color"].default_value = (0.9, 0.7, 0.25, 1)
    if "Emission Strength" in bsdf.inputs:
        bsdf.inputs["Emission Strength"].default_value = 0.35
    ring.data.materials.append(mat_r)
    rings.append(ring)

# soft sun (low influence once panels fill frame)
bpy.ops.object.light_add(type="SUN", location=(4, -6, 10))
sun = bpy.context.active_object
sun.name = "Sun"
sun.data.energy = 1.2
sun.rotation_euler = (math.radians(50), math.radians(10), math.radians(25))

# panel geometry: default Blender plane is 2×2 in XY; we stand it in XZ facing -Y
PANEL_H = 2.0  # world units (height of default plane after rot)
PANEL_W = PANEL_H * (1536 / 1024)  # 3:2


def make_image_material(name: str, path: Path):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()
    out = nodes.new("ShaderNodeOutputMaterial")
    bsdf = nodes.new("ShaderNodeBsdfPrincipled")
    tex = nodes.new("ShaderNodeTexImage")
    tex.image = bpy.data.images.load(str(path))
    tex.image.colorspace_settings.name = "sRGB"
    # unlit-ish: emission carries the painting so lighting doesn't wash cast
    emit = nodes.new("ShaderNodeEmission")
    emit.inputs["Strength"].default_value = 1.0
    links.new(tex.outputs["Color"], emit.inputs["Color"])
    links.new(emit.outputs["Emission"], out.inputs["Surface"])
    return mat


def frame_camera_to_plane(cam, plane, margin=1.002):
    """Place camera on -Y looking at plane center so plane fills 3:2 sensor."""
    # plane stands in XZ at y=0, center at (0,0,PANEL_H/2) after we set location
    # Default camera sensor fit: AUTO; use vertical FOV vs plane height.
    cam.data.type = "PERSP"
    cam.data.lens_unit = "FOV"
    # Use sensor fit HORIZONTAL for width-critical 3:2
    cam.data.sensor_fit = "HORIZONTAL"
    # Distance so plane width fills view with tiny margin
    # fov_x from sensor: easier with ortho
    cam.data.type = "ORTHO"
    cam.data.ortho_scale = PANEL_W * margin
    # camera looks down -Z in local; we want look toward +Y world (at plane facing -Y)
    # Plane at y=0 facing -Y; camera at y=-dist, rotation (90°, 0, 0) looks along +Y? 
    # Blender cam looks down local -Z. rotation_euler (90,0,0) → -Z world is -Y... 
    # Actually: default cam at (0,-d,z) with rot (90,0,0): local -Z points to +Y? 
    # Standard: rot X=90° points camera along -Y if at +Y... let's set explicitly.
    center = Vector((0.0, 0.0, PANEL_H / 2.0))
    dist = 4.0
    cam.location = (center.x, center.y - dist, center.z)
    # track to empty at center
    bpy.ops.object.empty_add(type="PLAIN_AXES", location=center)
    target = bpy.context.active_object
    target.name = f"Look_{plane.name}"
    # clear old constraints
    cam.constraints.clear()
    track = cam.constraints.new(type="TRACK_TO")
    track.target = target
    track.track_axis = "TRACK_NEGATIVE_Z"
    track.up_axis = "UP_Y"
    return target


panels = []
cameras = []

for beat in MAP["beats"]:
    plate = beat["plate"]
    img_path = STILLS / beat["file"]
    if not img_path.exists():
        print("MISSING", img_path)
        continue

    bpy.ops.mesh.primitive_plane_add(size=2, location=(0, 0, PANEL_H / 2))
    plane = bpy.context.active_object
    plane.name = f"Panel_{plate}"
    # stand vertical facing -Y (toward camera)
    plane.rotation_euler = (math.radians(90), 0, 0)
    # default plane size=2 → 2×2; scale X for width (after rot, local X stays X, local Y was Z...)
    # After rot X=90: plane spans X and -Y originally... size=2 plane in XY, rot X90 → spans X and Z.
    # Scale: (PANEL_W/2, 1, 1) on default size-2 → width PANEL_W, height 2 = PANEL_H.
    plane.scale = (PANEL_W / 2.0, 1.0, 1.0)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    plane.location = (0.0, 0.0, PANEL_H / 2.0)
    plane.rotation_euler = (math.radians(90), 0, 0)

    mat = make_image_material(f"Mat_{plate}", img_path)
    if plane.data.materials:
        plane.data.materials[0] = mat
    else:
        plane.data.materials.append(mat)

    plane.hide_render = True  # only active beat shown at render time
    panels.append((plate, plane, beat))

    bpy.ops.object.camera_add()
    cam = bpy.context.active_object
    cam.name = f"Cam_{plate}"
    frame_camera_to_plane(cam, plane)
    cameras.append((plate, cam))

# save blend with all panels present (siblings toggled at render)
bpy.ops.wm.save_as_mainfile(filepath=str(BLEND))
print("Saved", BLEND)

# render each beat: only that panel visible
for plate, plane, beat in panels:
    for p_name, p_obj, _ in panels:
        p_obj.hide_render = p_name != plate
    ground.hide_render = True
    for ring in rings:
        ring.hide_render = not SHOW_RINGS_IN_RENDERS

    cam = bpy.data.objects.get(f"Cam_{plate}")
    scene.camera = cam
    out = RENDERS / f"beat-{int(beat['t']):02d}-{plate}.png"
    scene.render.filepath = str(out)
    bpy.ops.render.render(write_still=True)
    print("Rendered", out, "<-", beat["file"])

# leave all panels visible in the saved blend for editing
for _, p_obj, _ in panels:
    p_obj.hide_render = False
    p_obj.hide_viewport = False
bpy.ops.wm.save_as_mainfile(filepath=str(BLEND))
print("DONE ep11 blender build v2 — full-bleed one-panel proxies")
