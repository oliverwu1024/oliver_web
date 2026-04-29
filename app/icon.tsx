import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-1px",
          }}
        >
          OW
        </div>
      </div>
    ),
    { ...size }
  );
}
