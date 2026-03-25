"use client";

import { useState, useEffect } from "react";

export default function SalutingRobot() {
  const [atAttention, setAtAttention] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setAtAttention((prev) => !prev), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <svg className="w-24 h-24 sm:w-32 sm:h-32 inline-block" viewBox="0 0 140 160" fill="none">
      {/* ── Legs ── */}
      {/* At ease: legs slightly apart. Attention: legs together */}
      <path
        d={atAttention ? "M62 108 L61 118 L60 128" : "M58 108 L54 118 L50 128"}
        stroke="rgba(255,255,255,0.7)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        style={{ transition: "d 0.4s ease" }}
      />
      <rect
        x={atAttention ? 54 : 42} y="126" width="14" height="6" rx="3" fill="rgba(255,255,255,0.5)"
        style={{ transition: "x 0.4s ease" }}
      />
      <path
        d={atAttention ? "M68 108 L69 118 L70 128" : "M72 108 L76 118 L80 128"}
        stroke="rgba(255,255,255,0.7)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        style={{ transition: "d 0.4s ease" }}
      />
      <rect
        x={atAttention ? 64 : 74} y="126" width="14" height="6" rx="3" fill="rgba(255,255,255,0.5)"
        style={{ transition: "x 0.4s ease" }}
      />

      {/* ── Torso ── */}
      <path d="M45 62 L42 108 L88 108 L85 62Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M50 66 L65 62 L80 66 L78 88 L52 88Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Chest light */}
      <circle cx="65" cy="76" r="6" fill="rgba(99,102,241,0.2)" stroke="rgba(167,139,250,0.8)" strokeWidth="1.5" />
      <circle cx="65" cy="76" r="3" fill="rgba(167,139,250,0.7)" />
      <circle cx="65" cy="76" r="1.2" fill="rgba(255,255,255,0.6)" />
      {/* Belt */}
      <rect x="44" y="100" width="42" height="5" rx="2" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
      <rect x="62" y="99" width="6" height="7" rx="1.5" fill="rgba(167,139,250,0.6)" />

      {/* ── Shoulder joints ── */}
      <circle cx="42" cy="62" r="6" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      <circle cx="88" cy="62" r="6" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />

      {/* ── Left arm (viewer right) — always straight down ── */}
      <path d="M94 62 L98 78 L96 94" stroke="rgba(255,255,255,0.7)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="98" cy="78" r="3" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
      <rect x="92" y="93" width="8" height="9" rx="3" fill="rgba(255,255,255,0.45)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />

      {/* ── Right arm (viewer left) — switches between down and salute ── */}
      <path
        d={atAttention ? "M36 62 L28 48 L42 28" : "M36 62 L32 78 L34 94"}
        stroke="rgba(255,255,255,0.7)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        style={{ transition: "d 0.4s ease" }}
      />
      {/* Elbow */}
      <circle
        cx={atAttention ? 28 : 32}
        cy={atAttention ? 48 : 78}
        r="3" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.5)" strokeWidth="1"
        style={{ transition: "cx 0.4s ease, cy 0.4s ease" }}
      />
      {/* Hand */}
      {atAttention ? (
        <rect x="38" y="22" width="14" height="6" rx="2" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
      ) : (
        <rect x="30" y="93" width="8" height="9" rx="3" fill="rgba(255,255,255,0.45)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
      )}

      {/* ── Neck ── */}
      <rect x="58" y="50" width="14" height="10" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />

      {/* ── Head ── */}
      <rect x="44" y="16" width="42" height="36" rx="10" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
      <path d="M48 18 Q65 6 82 18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      {/* Visor */}
      <rect x="48" y="26" width="34" height="14" rx="5" fill="rgba(99,102,241,0.15)" stroke="rgba(167,139,250,0.7)" strokeWidth="1.5" />
      {/* Eyes */}
      <circle
        cx="57" cy="33"
        r={atAttention ? 5 : 4}
        fill="rgba(167,139,250,0.8)"
        style={{ transition: "r 0.4s ease" }}
      />
      <circle
        cx="73" cy="33"
        r={atAttention ? 5 : 4}
        fill="rgba(167,139,250,0.8)"
        style={{ transition: "r 0.4s ease" }}
      />
      <circle cx="56" cy="31.5" r="1.5" fill="rgba(255,255,255,0.5)" />
      <circle cx="72" cy="31.5" r="1.5" fill="rgba(255,255,255,0.5)" />
      {/* Mouth grille */}
      <line x1="56" y1="44" x2="74" y2="44" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <line x1="56" y1="47" x2="74" y2="47" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

      {/* ── Antenna ── */}
      <line x1="65" y1="16" x2="65" y2="6" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      <circle
        cx="65" cy="4" r="3"
        fill={atAttention ? "rgba(167,139,250,1)" : "rgba(167,139,250,0.6)"}
        style={{ transition: "fill 0.4s ease" }}
      />
      <circle cx="65" cy="4" r="1.2" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}
