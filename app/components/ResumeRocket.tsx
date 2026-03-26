"use client";

import { useState, useEffect } from "react";

export default function ResumeRocket() {
  const [launched, setLaunched] = useState(false);
  const [flame, setFlame] = useState(false);

  /* alternate between landed and launched */
  useEffect(() => {
    const id = setInterval(() => setLaunched((p) => !p), 3500);
    return () => clearInterval(id);
  }, []);

  /* flame flicker */
  useEffect(() => {
    if (!launched) return;
    const id = setInterval(() => setFlame((p) => !p), 150);
    return () => clearInterval(id);
  }, [launched]);

  return (
    <svg
      className="w-28 h-28 sm:w-36 sm:h-36 inline-block"
      viewBox="0 0 120 140"
      fill="none"
    >
      {/* ── Resume / Document ── */}
      {/* Paper shadow */}
      <rect x="18" y="72" width="54" height="66" rx="4" fill="rgba(0,0,0,0.2)" />
      {/* Paper */}
      <rect x="15" y="70" width="54" height="66" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      {/* Paper fold corner */}
      <path d="M57 70 L69 70 L69 82" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Header line */}
      <rect x="22" y="78" width="24" height="3" rx="1" fill="rgba(99,102,241,0.5)" />
      {/* Text lines */}
      <rect x="22" y="86" width="38" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="22" y="92" width="34" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
      <rect x="22" y="98" width="40" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
      <rect x="22" y="104" width="28" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
      <rect x="22" y="110" width="36" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
      {/* Divider */}
      <line x1="22" y1="117" x2="60" y2="117" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
      {/* Bottom lines */}
      <rect x="22" y="121" width="32" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="22" y="127" width="26" height="2" rx="1" fill="rgba(255,255,255,0.06)" />

      {/* ── Rocket ── */}
      <g
        style={{
          transform: launched ? "translateY(-35px)" : "translateY(0px)",
          transition: "transform 1s ease-in-out",
        }}
      >
        {/* Exhaust flames (only when launched) */}
        {launched && (
          <>
            <path
              d={flame
                ? "M78 115 C76 122 80 128 78 135"
                : "M78 115 C80 122 76 128 78 133"
              }
              stroke="rgba(251,146,60,0.7)" strokeWidth="4" strokeLinecap="round" fill="none"
            />
            <path
              d={flame
                ? "M82 115 C84 120 80 125 82 130"
                : "M82 115 C80 120 84 125 82 128"
              }
              stroke="rgba(239,68,68,0.5)" strokeWidth="3" strokeLinecap="round" fill="none"
            />
            <path
              d={flame
                ? "M74 115 C72 120 76 124 74 128"
                : "M74 115 C76 120 72 124 74 126"
              }
              stroke="rgba(251,191,36,0.5)" strokeWidth="2" strokeLinecap="round" fill="none"
            />
          </>
        )}

        {/* Rocket body */}
        <path
          d="M78 55 C72 55 66 68 66 85 L66 110 L90 110 L90 85 C90 68 84 55 78 55Z"
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />

        {/* Nose cone */}
        <path
          d="M78 42 C74 48 70 55 66 65 L90 65 C86 55 82 48 78 42Z"
          fill="rgba(99,102,241,0.3)"
          stroke="rgba(99,102,241,0.6)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Accent stripe */}
        <rect x="68" y="80" width="20" height="4" rx="1" fill="rgba(239,68,68,0.35)" />

        {/* Window */}
        <circle cx="78" cy="72" r="6" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" />
        <circle cx="78" cy="72" r="3.5" fill="rgba(99,102,241,0.25)" />
        {/* Window reflection */}
        <circle cx="76.5" cy="70.5" r="1.5" fill="rgba(255,255,255,0.15)" />

        {/* Left fin */}
        <path
          d="M66 100 L56 112 L56 116 L66 110Z"
          fill="rgba(99,102,241,0.25)"
          stroke="rgba(99,102,241,0.5)"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Right fin */}
        <path
          d="M90 100 L100 112 L100 116 L90 110Z"
          fill="rgba(99,102,241,0.25)"
          stroke="rgba(99,102,241,0.5)"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Nozzle */}
        <rect x="72" y="110" width="12" height="5" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      </g>

      {/* ── Launch smoke (only when launched) ── */}
      {launched && (
        <>
          <circle cx="42" cy="105" r="6" fill="rgba(255,255,255,0.06)" className="animate-pulse" />
          <circle cx="52" cy="110" r="8" fill="rgba(255,255,255,0.04)" className="animate-pulse" />
          <circle cx="36" cy="112" r="5" fill="rgba(255,255,255,0.05)" className="animate-pulse" />
        </>
      )}

      {/* ── Stars (visible when launched) ── */}
      {launched && (
        <>
          <circle cx="20" cy="20" r="1.5" fill="rgba(167,139,250,0.6)" className="animate-pulse" />
          <circle cx="95" cy="15" r="1" fill="rgba(167,139,250,0.5)" className="animate-pulse" />
          <circle cx="50" cy="10" r="1.2" fill="rgba(251,191,36,0.5)" className="animate-pulse" />
          <circle cx="105" cy="35" r="1" fill="rgba(167,139,250,0.4)" className="animate-pulse" />
        </>
      )}
    </svg>
  );
}
