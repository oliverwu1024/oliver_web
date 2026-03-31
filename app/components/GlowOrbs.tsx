"use client";

import { useTheme } from "./ThemeProvider";

export default function GlowOrbs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="glow-orb"
        style={{
          width: "600px",
          height: "600px",
          background: isDark
            ? "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)"
            : "radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)",
          top: "-10%",
          right: "-10%",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "500px",
          height: "500px",
          background: isDark
            ? "radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)",
          bottom: "10%",
          left: "-10%",
          animationDelay: "2s",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "300px",
          height: "300px",
          background: isDark
            ? "radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)"
            : "radial-gradient(circle, rgba(37,99,235,0.05), transparent 70%)",
          top: "50%",
          left: "50%",
          animationDelay: "1s",
        }}
      />
    </div>
  );
}
