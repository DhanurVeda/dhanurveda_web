"""Export transparent iPhone renders of the app screens into public/screens.

Reuses the vector bezel and prepared screen assets from the app repo's
App Store tooling (../DhanurVeda/AppStore/tools/previews).

    python3 scripts/export-devices.py
"""
import subprocess
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PREVIEWS = ROOT.parent / "DhanurVeda" / "AppStore" / "tools" / "previews"
sys.path.insert(0, str(PREVIEWS))
import build  # noqa: E402

SCREENS = ["analysis", "dashboard", "performance", "scoremap", "feedback",
           "practice", "custom", "hand", "sideview", "history", "scoresheet"]
P = 600  # screen width in px; shown at ~300 CSS px, so 2x for retina
OUT = ROOT / "public" / "screens"
OUT.mkdir(parents=True, exist_ok=True)

w = round(build.frame_w(P) + P * 0.02)
h = round(P * build.ASPECT + 2 * P * (build.TI + build.BK))
for name in SCREENS:
    body = build.phone(name, P, P * 0.01, 0, shadow=False)
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
           f'{build.defs()}{body}</svg>')
    src = OUT / f"_{name}.svg"
    png = OUT / f"_{name}.png"
    src.write_text(svg)
    subprocess.run([build.CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                    "--force-device-scale-factor=1", f"--window-size={w},{h}",
                    "--default-background-color=00000000", f"--screenshot={png}", src.as_uri()],
                   check=True, capture_output=True)
    Image.open(png).save(OUT / f"{name}.webp", "WEBP", quality=88, method=6)
    src.unlink()
    png.unlink()
    print(f"public/screens/{name}.webp {w}x{h}")

Image.open(PREVIEWS / "assets" / "icon.png").resize((512, 512), Image.LANCZOS).save(ROOT / "public" / "icon.png")
