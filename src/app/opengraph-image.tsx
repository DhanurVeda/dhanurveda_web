import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The share card renderer can't decode WebP, so it uses the PNG icon and type
// rather than the device renders.
export default async function Image() {
  const icon = await readFile(join(process.cwd(), "public/icon.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background:
            "radial-gradient(70% 90% at 85% 0%, rgba(80,140,255,0.28), transparent 70%), radial-gradient(50% 70% at 10% 110%, rgba(70,220,110,0.18), transparent 70%), #040d19",
          color: "#f3f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <img src={iconSrc} width={120} height={120} style={{ borderRadius: 28 }} alt="" />
        <div style={{ marginTop: 48, fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
          {site.name}
        </div>
        <div style={{ marginTop: 20, fontSize: 40, color: "#5ef08a", letterSpacing: -1 }}>
          {site.tagline}
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#aeb8c8", maxWidth: 820, lineHeight: 1.4 }}>
          Posture analysis, arrow scoring and progress tracking for archers on iPhone.
        </div>
      </div>
    ),
    size,
  );
}
