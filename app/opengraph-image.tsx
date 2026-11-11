import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.brand} | ${site.descriptor}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#0f2a20",
          color: "white",
        }}
      >
        <div style={{ fontSize: 150, fontWeight: 700, color: "#5fd0a5" }}>{site.brand}</div>
        <div style={{ fontSize: 52, marginTop: 8 }}>{site.descriptor}</div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#b9d6c9" }}>
          Operations · Revenue Opportunities · Marketing
        </div>
      </div>
    ),
    size,
  );
}
