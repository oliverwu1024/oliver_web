import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #14141f 100%)",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 800,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-4px",
          }}
        >
          OW
        </div>
      </div>
    ),
    { ...size }
  );
}
