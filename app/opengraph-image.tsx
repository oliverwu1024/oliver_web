import { ImageResponse } from "next/og";

export const alt = "Oliver Wu — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #14141f 50%, #1e1e2e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-2px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "16px",
          }}
        >
          Oliver Wu
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#e8e8ed",
            marginBottom: "24px",
          }}
        >
          Software Developer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: "#71717a",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Full-stack development, data science, and machine learning.
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #6366f1, #8b5cf6, transparent)",
          }}
        />

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "80px",
            fontSize: 18,
            color: "#6366f1",
            fontFamily: "monospace",
          }}
        >
          oliverweb-delta.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
