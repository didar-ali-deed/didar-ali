import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Didar Ali — Junior Data Scientist and AI-ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "76px", background: "#0b1020", color: "#f3f5fb", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#858cff", fontSize: 28, letterSpacing: 4 }}>DA <span style={{ color: "#9ba7bb", letterSpacing: 1 }}>PORTFOLIO / 2025</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -4 }}>Didar Ali</div>
          <div style={{ fontSize: 32, color: "#b9c3ff" }}>Junior Data Scientist · Machine Learning · Data Analytics</div>
        </div>
        <div style={{ fontSize: 24, color: "#9ba7bb" }}>Building practical intelligence from data, one thoughtful pipeline at a time.</div>
      </div>
    ),
    { ...size },
  );
}
