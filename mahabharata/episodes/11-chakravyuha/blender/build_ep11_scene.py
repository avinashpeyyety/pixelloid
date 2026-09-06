"""Build Ep 11 Chakravyuha Blender scene: Imagine panels on hero planes + cameras."""
import json
import math
from pathlib import Path

import bpy

EP = Path(__file__).resolve().parents[1]
STILLS = EP / "stills"
RENDERS = EP / "renders"
BLEND = Path(__file__).resolve().parent / "ep11_chakravyuha.blend"
MAP = json.loads((EP / "blender-map.json").read_text())

RENDERS.mkdir(parents=True, exist_ok=True)

# reset
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.engine = "BLENDER_EEVEE_NEXT" if "BLENDER_EEVEE_NEXT" in bpy.types.RenderSettings.bl_rna.properties["engine"].enum_items.keys() else "BLENDER_EEVEE"
scene.render.resolution_x = 1536
scene.render.resolution_y = 1024
scene.render.image_settings.file_format = "PNG"
scene.render.film_transparent = False

# world
world = bpy.data.worlds.new("Kurukshetra")
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes["Background"]
bg.inputs[0].default_value = (0.12, 0.10, 0.08, 1)
bg.inputs[1].default_value = 0.6

# ground
bpy.ops.mesh.primitive_plane_add(size=40, location=(0, 0, 0))
ground = bpy.context.active_object
ground.name = "Ground"
mat_g = bpy.data.materials.new("Dust")
mat_g.use_nodes = True
mat_g.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = (0.35, 0.28, 0.18, 1)
ground.data.materials.append(mat_g)

# vyuha rings
for i, radius in enumerate((4.0, 6.5, 9.0, 11.5), start=1):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=radius, minor_radius=0.08, location=(0, 0, 0.05 * i)
    )
    ring = bpy.context.active_object
    ring.name = f"VyuhaRing{i}"
    mat_r = bpy.data.materials.new(f"RingMat{i}")
    mat_r.use_nodes = True
    mat_r.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = (
        0.75,
        0.55,
        0.2,
        1,
    )
    mat_r.node_tree.nodes["Principled BSDF"].inputs["Emission Color"].default_value = (
        0.9,
        0.7,
        0.25,
        1,
    )
    try:
        mat_r.node_tree.nodes["Principled BSDF"].inputs["Emission Strength"].default_value = 0.3
    except KeyError:
        pass
    ring.data.materials.append(mat_r)

# light
bpy.ops.object.light_add(type="SUN", location=(5, -8, 12))
sun = bpy.context.active_object
sun.data.energy = 3.0
sun.rotation_euler = (math.radians(45), math.radians(15), math.radians(30))

# cameras + planes from map
aspect = 1.5
plane_h = 2.4
plane_w = plane_h * aspect

cam_presets = {
    "establishing_high": ((0, -18, 10), (math.radians(60), 0, 0)),
    "overhead_wheel": ((0, 0, 16), (0, 0, 0)),
    "medium_pandava": ((0, -6, 1.6), (math.radians(85), 0, 0)),
    "chase_into_rings": ((2, -10, 2.2), (math.radians(80), 0, math.radians(10))),
    "rim_gate": ((8, -4, 2.0), (math.radians(88), 0, math.radians(-35))),
    "inside_orbit": ((-3, -5, 2.4), (math.radians(82), 0, math.radians(25))),
    "close_last_weapon": ((0, -3.5, 1.5), (math.radians(90), 0, 0)),
    "fall_wide": ((0, -9, 3.5), (math.radians(75), 0, 0)),
    "dusk_vow": ((-2, -12, 2.8), (math.radians(78), 0, math.radians(8))),
}


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
    links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
    links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat


for idx, beat in enumerate(MAP["beats"]):
    plate = beat["plate"]
    img_path = STILLS / beat["file"]
    if not img_path.exists():
        print("MISSING", img_path)
        continue

    # hero plane facing -Y (toward default cameras)
    bpy.ops.mesh.primitive_plane_add(size=1, location=(0, 0, plane_h / 2 + 0.1))
    plane = bpy.context.active_object
    plane.name = f"Panel_{plate}"
    plane.scale = (plane_w / 2, 1, plane_h / 2)
    # rotate to stand vertical facing -Y
    plane.rotation_euler = (math.radians(90), 0, 0)
    # slight radial offset so planes don't z-fight
    angle = (idx / max(len(MAP["beats"]), 1)) * math.tau
    plane.location = (math.sin(angle) * 1.2, -0.5, plane_h / 2 + 0.05)
    mat = make_image_material(f"Mat_{plate}", img_path)
    plane.data.materials.append(mat)

    cam_key = beat["camera"]
    loc, rot = cam_presets.get(cam_key, cam_presets["medium_pandava"])
    bpy.ops.object.camera_add(location=loc, rotation=rot)
    cam = bpy.context.active_object
    cam.name = f"Cam_{plate}"
    if cam_key == "overhead_wheel":
        cam.rotation_euler = (0, 0, 0)
        # look down
        cam.rotation_euler = (0, 0, 0)
        bpy.ops.object.empty_add(type="PLAIN_AXES", location=(0, 0, 0))
        target = bpy.context.active_object
        target.name = f"Look_{plate}"
        track = cam.constraints.new(type="TRACK_TO")
        track.target = target
        track.track_axis = "TRACK_NEGATIVE_Z"
        track.up_axis = "UP_Y"

# save blend
bpy.ops.wm.save_as_mainfile(filepath=str(BLEND))
print("Saved", BLEND)

# render each beat camera
for beat in MAP["beats"]:
    plate = beat["plate"]
    cam = bpy.data.objects.get(f"Cam_{plate}")
    if not cam:
        continue
    scene.camera = cam
    out = RENDERS / f"beat-{int(beat['t']):02d}-{plate}.png"
    scene.render.filepath = str(out)
    bpy.ops.render.render(write_still=True)
    print("Rendered", out)

print("DONE ep11 blender build")
