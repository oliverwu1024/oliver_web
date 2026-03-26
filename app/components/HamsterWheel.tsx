"use client";

import { useState, useEffect } from "react";

export default function HamsterWheel() {
  const [running, setRunning] = useState(true);
  const [legPhase, setLegPhase] = useState(0);

  /* toggle running/resting */
  useEffect(() => {
    const id = setInterval(() => setRunning((p) => !p), 4000);
    return () => clearInterval(id);
  }, []);

  /* leg animation */
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setLegPhase((p) => (p + 1) % 4), 150);
    return () => clearInterval(id);
  }, [running]);

  return (
    <svg
      className="w-44 h-44 sm:w-56 sm:h-56 inline-block"
      viewBox="0 0 200 140"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      {/* ── Wheel ── */}
      <g
        style={{
          transformOrigin: "70px 70px",
          animation: running ? "hamster-wheel-spin 2s linear infinite" : "none",
        }}
      >
        {/* Outer ring */}
        <circle cx="70" cy="70" r="42" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
        {/* Inner ring */}
        <circle cx="70" cy="70" r="38" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Spokes */}
        <line x1="70" y1="28" x2="70" y2="112" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="28" y1="70" x2="112" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="40" y1="40" x2="100" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="100" y1="40" x2="40" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Rungs on wheel surface (12 rungs at 30° intervals) */}
        <line x1="108" y1="70" x2="112" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="103" y1="89" x2="106" y2="91" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="89" y1="103" x2="91" y2="106" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="108" x2="70" y2="112" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="51" y1="103" x2="49" y2="106" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="37" y1="89" x2="34" y2="91" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="32" y1="70" x2="28" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="37" y1="51" x2="34" y2="49" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="51" y1="37" x2="49" y2="34" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="70" y1="32" x2="70" y2="28" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="89" y1="37" x2="91" y2="34" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <line x1="103" y1="51" x2="106" y2="49" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      </g>
      {/* Hub */}
      <circle cx="70" cy="70" r="4" fill="rgba(167,139,250,0.6)" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />

      {/* ── Stand ── */}
      <line x1="45" y1="112" x2="70" y2="112" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="112" x2="95" y2="112" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      <line x1="45" y1="112" x2="38" y2="128" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
      <line x1="95" y1="112" x2="102" y2="128" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
      {/* Base feet */}
      <line x1="30" y1="128" x2="48" y2="128" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
      <line x1="94" y1="128" x2="112" y2="128" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />

      {/* ── Hamster (sitting on bottom of wheel inner surface) ── */}
      <g style={{ transform: running ? "translateY(-2px)" : "translateY(0px)", transition: "transform 0.3s ease" }}>
        {/* Body */}
        <ellipse cx="72" cy="95" rx="14" ry="10" fill="rgba(251,191,36,0.6)" stroke="rgba(251,191,36,0.4)" strokeWidth="1" />

        {/* Head */}
        <circle cx="84" cy="87" r="9" fill="rgba(251,191,36,0.65)" stroke="rgba(251,191,36,0.4)" strokeWidth="1" />

        {/* Ears */}
        <ellipse cx="79" cy="79" rx="3" ry="4" fill="rgba(251,191,36,0.5)" stroke="rgba(251,191,36,0.3)" strokeWidth="0.8" />
        <ellipse cx="87" cy="79" rx="3" ry="4" fill="rgba(251,191,36,0.5)" stroke="rgba(251,191,36,0.3)" strokeWidth="0.8" />
        {/* Inner ears */}
        <ellipse cx="79" cy="79.5" rx="1.5" ry="2" fill="rgba(251,146,60,0.4)" />
        <ellipse cx="87" cy="79.5" rx="1.5" ry="2" fill="rgba(251,146,60,0.4)" />

        {/* Eyes */}
        {running ? (
          <>
            <circle cx="82" cy="86" r="2" fill="rgba(30,30,30,0.9)" />
            <circle cx="89" cy="86" r="2" fill="rgba(30,30,30,0.9)" />
            <circle cx="81.5" cy="85" r="0.7" fill="rgba(255,255,255,0.6)" />
            <circle cx="88.5" cy="85" r="0.7" fill="rgba(255,255,255,0.6)" />
          </>
        ) : (
          <>
            {/* Sleepy eyes */}
            <line x1="80" y1="86" x2="84" y2="86" stroke="rgba(30,30,30,0.7)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="87" y1="86" x2="91" y2="86" stroke="rgba(30,30,30,0.7)" strokeWidth="1.5" strokeLinecap="round" />
          </>
        )}

        {/* Nose */}
        <circle cx="92" cy="88" r="1.5" fill="rgba(251,146,60,0.8)" />

        {/* Cheeks */}
        <circle cx="80" cy="90" r="2.5" fill="rgba(251,146,60,0.25)" />
        <circle cx="89" cy="90" r="2.5" fill="rgba(251,146,60,0.25)" />

        {/* Mouth */}
        {!running && (
          <path d="M88 91 Q90 93 92 91" stroke="rgba(251,146,60,0.5)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        )}

        {/* Tail */}
        <path d="M58 93 C52 89 50 95 54 97" stroke="rgba(251,191,36,0.5)" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* ── Legs (animated) ── */}
        {running ? (
          <>
            {/* Front legs */}
            <line
              x1="80" y1="101"
              x2={legPhase % 2 === 0 ? "84" : "78"}
              y2={legPhase % 2 === 0 ? "108" : "109"}
              stroke="rgba(251,191,36,0.6)" strokeWidth="2.5" strokeLinecap="round"
            />
            <line
              x1="76" y1="102"
              x2={legPhase % 2 === 0 ? "73" : "79"}
              y2={legPhase % 2 === 0 ? "109" : "108"}
              stroke="rgba(251,191,36,0.6)" strokeWidth="2.5" strokeLinecap="round"
            />
            {/* Back legs */}
            <line
              x1="66" y1="102"
              x2={legPhase < 2 ? "70" : "63"}
              y2={legPhase < 2 ? "109" : "108"}
              stroke="rgba(251,191,36,0.6)" strokeWidth="2.5" strokeLinecap="round"
            />
            <line
              x1="62" y1="101"
              x2={legPhase < 2 ? "58" : "65"}
              y2={legPhase < 2 ? "108" : "109"}
              stroke="rgba(251,191,36,0.6)" strokeWidth="2.5" strokeLinecap="round"
            />
          </>
        ) : (
          <>
            {/* Resting legs — tucked under */}
            <line x1="80" y1="101" x2="82" y2="107" stroke="rgba(251,191,36,0.5)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="76" y1="102" x2="76" y2="108" stroke="rgba(251,191,36,0.5)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="66" y1="102" x2="66" y2="108" stroke="rgba(251,191,36,0.5)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="62" y1="101" x2="60" y2="107" stroke="rgba(251,191,36,0.5)" strokeWidth="2.5" strokeLinecap="round" />
          </>
        )}
      </g>

      {/* ── Cable from wheel → bulb ── */}
      <path d="M112 70 C120 70 122 80 122 90" stroke="rgba(167,139,250,0.3)" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* ── Light bulb ── */}
      <g>
        {/* Bulb glass */}
        <circle cx="122" cy="102" r="10" fill={running ? "rgba(251,191,36,0.15)" : "rgba(255,255,255,0.03)"} stroke={running ? "rgba(251,191,36,0.6)" : "rgba(255,255,255,0.2)"} strokeWidth="1.5" style={{ transition: "all 0.5s ease" }} />
        {/* Bulb screw base */}
        <rect x="118" y="111" width="8" height="5" rx="1" fill="rgba(255,255,255,0.15)" stroke={running ? "rgba(251,191,36,0.4)" : "rgba(255,255,255,0.2)"} strokeWidth="1" />
        <line x1="118" y1="113" x2="126" y2="113" stroke={running ? "rgba(251,191,36,0.3)" : "rgba(255,255,255,0.1)"} strokeWidth="0.8" />
        {/* Filament */}
        <path d="M119 102 C120 98 121 104 122 100 C123 104 124 98 125 102" stroke={running ? "rgba(251,191,36,0.9)" : "rgba(255,255,255,0.15)"} strokeWidth="1.2" fill="none" strokeLinecap="round" style={{ transition: "stroke 0.5s ease" }} />
        {/* Glow when running */}
        {running && (
          <>
            <circle cx="122" cy="102" r="14" fill="rgba(251,191,36,0.08)" className="animate-pulse" />
            <circle cx="122" cy="102" r="8" fill="rgba(251,191,36,0.1)" />
            {/* Light rays */}
            <line x1="108" y1="102" x2="104" y2="102" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="136" y1="102" x2="140" y2="102" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="122" y1="88" x2="122" y2="84" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="113" y1="93" x2="110" y2="90" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="131" y1="93" x2="134" y2="90" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" strokeLinecap="round" />
          </>
        )}
      </g>

      {/* ── Cable from bulb → laptop ── */}
      <path d="M122 116 C122 122 130 126 140 126" stroke="rgba(167,139,250,0.3)" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* ── Laptop ── */}
      <g>
        {/* Laptop base */}
        <rect x="138" y="126" width="48" height="5" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        {/* Laptop screen */}
        <rect x="141" y="96" width="42" height="30" rx="3" fill="rgba(99,102,241,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        {/* Screen bezel top */}
        <circle cx="162" cy="99" r="1" fill="rgba(255,255,255,0.2)" />
        {/* Screen content */}
        {running ? (
          <>
            <rect x="147" y="103" width="16" height="2.5" rx="1" fill="rgba(99,102,241,0.5)" />
            <rect x="147" y="108" width="28" height="2" rx="1" fill="rgba(167,139,250,0.3)" />
            <rect x="147" y="113" width="22" height="2" rx="1" fill="rgba(99,102,241,0.25)" />
            <rect x="147" y="118" width="14" height="2" rx="1" fill="rgba(167,139,250,0.2)" />
          </>
        ) : (
          /* Screen off */
          <rect x="143" y="98" width="38" height="26" rx="2" fill="rgba(0,0,0,0.3)" />
        )}
      </g>

      {/* ── Zzz when resting ── */}
      {!running && (
        <g className="animate-pulse">
          <text x="96" y="74" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill="rgba(167,139,250,0.6)">z</text>
          <text x="102" y="66" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="rgba(167,139,250,0.4)">z</text>
          <text x="107" y="60" fontFamily="var(--font-geist-mono), monospace" fontSize="6" fill="rgba(167,139,250,0.3)">z</text>
        </g>
      )}
    </svg>
  );
}
