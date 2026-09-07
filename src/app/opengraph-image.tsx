import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anurag — Data Science & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0c",
          color: "#ededf0",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8a8a92",
            marginBottom: 24,
          }}
        >
          Data Science &amp; Full-Stack Developer
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, color: "#ededf0" }}>
          Anurag
        </div>
        <div
          style={{
            marginTop: 28,
            width: 120,
            height: 4,
            background: "#6d5ef7",
            borderRadius: 999,
          }}
        />
      </div>
    ),
    { ...size }
  );
}