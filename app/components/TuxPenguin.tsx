"use client";

import { useState, useEffect } from "react";

export default function TuxPenguin() {
  const [phase, setPhase] = useState<"typing" | "thumbsup">("typing");
  const [blink, setBlink] = useState(false);
  const [keyPress, setKeyPress] = useState(false);

  /* alternate between typing and thumbs up */
  useEffect(() => {
    const id = setInterval(() => {
      setPhase((p) => (p === "typing" ? "thumbsup" : "typing"));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  /* blink */
  useEffect(() => {
    const id = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  /* key tap animation during typing phase */
  useEffect(() => {
    if (phase !== "typing") return;
    const id = setInterval(() => {
      setKeyPress((p) => !p);
    }, 300);
    return () => clearInterval(id);
  }, [phase]);

  const isTyping = phase === "typing";

  return (
    <svg
      className="w-28 h-28 sm:w-36 sm:h-36 inline-block"
      viewBox="0 0 180 160"
      fill="none"
    >
      {/* ── Desk ── */}
      <rect x="8" y="118" width="164" height="6" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

      {/* ── Monitor ── */}
      {/* Stand */}
      <rect x="28" y="112" width="4" height="8" fill="rgba(255,255,255,0.2)" />
      {/* Screen */}
      <rect x="10" y="72" width="50" height="40" rx="4" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
      {/* Screen content - code lines */}
      <line x1="16" y1="82" x2="36" y2="82" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="88" x2="42" y2="88" stroke="rgba(167,139,250,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="94" x2="32" y2="94" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="100" x2="48" y2="100" stroke="rgba(167,139,250,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Blinking cursor on screen */}
      {isTyping && (
        <rect x="34" y="93" width="2" height="4" fill="rgba(167,139,250,0.8)" className="animate-pulse" />
      )}
      {/* Checkmark on screen when thumbs up */}
      {!isTyping && (
        <path d="M26 90 L32 96 L44 82" stroke="rgba(34,197,94,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      )}

      {/* ── Keyboard ── */}
      <rect x="14" y="114" width="36" height="4" rx="1.5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      {/* Key highlights */}
      <rect x="17" y="114.5" width="4" height="2.5" rx="0.5" fill={keyPress && isTyping ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.1)"} style={{ transition: "fill 0.15s" }} />
      <rect x="23" y="114.5" width="4" height="2.5" rx="0.5" fill={!keyPress && isTyping ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.1)"} style={{ transition: "fill 0.15s" }} />
      <rect x="29" y="114.5" width="4" height="2.5" rx="0.5" fill={keyPress && isTyping ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.1)"} style={{ transition: "fill 0.15s" }} />
      <rect x="35" y="114.5" width="4" height="2.5" rx="0.5" fill={!keyPress && isTyping ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.1)"} style={{ transition: "fill 0.15s" }} />

      {/* ── Penguin body ── */}
      <ellipse cx="110" cy="95" rx="30" ry="32" fill="#1a1a2e" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />

      {/* Belly */}
      <ellipse cx="110" cy="98" rx="18" ry="22" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

      {/* ── Head ── */}
      <circle cx="110" cy="52" r="24" fill="#1a1a2e" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />

      {/* Face patch */}
      <ellipse cx="110" cy="55" rx="15" ry="14" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />

      {/* Eyes */}
      {blink ? (
        <>
          <line x1="100" y1="50" x2="107" y2="50" stroke="rgba(167,139,250,0.9)" strokeWidth="2" strokeLinecap="round" />
          <line x1="113" y1="50" x2="120" y2="50" stroke="rgba(167,139,250,0.9)" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="102" cy="50" r="4" fill="rgba(167,139,250,0.9)" />
          <circle cx="118" cy="50" r="4" fill="rgba(167,139,250,0.9)" />
          <circle cx="100.5" cy="48.5" r="1.2" fill="rgba(255,255,255,0.6)" />
          <circle cx="116.5" cy="48.5" r="1.2" fill="rgba(255,255,255,0.6)" />
        </>
      )}

      {/* Beak */}
      <path d="M105 58 L110 65 L115 58Z" fill="rgba(251,146,60,0.8)" stroke="rgba(251,146,60,0.6)" strokeWidth="1" strokeLinejoin="round" />

      {/* Happy mouth when thumbs up */}
      {!isTyping && (
        <path d="M105 63 Q110 68 115 63" stroke="rgba(251,146,60,0.6)" strokeWidth="1" fill="none" strokeLinecap="round" />
      )}

      {/* ── Left wing (typing / resting) ── */}
      <path
        d={isTyping
          ? "M80 80 C72 90 60 105 52 114"
          : "M80 80 C74 92 72 104 78 116"
        }
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        style={{ transition: "d 0.5s ease" }}
      />
      {/* Left hand */}
      {isTyping ? (
        <circle cx="52" cy="114" r="4" fill="#1a1a2e" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      ) : (
        <circle cx="78" cy="116" r="4" fill="#1a1a2e" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      )}

      {/* ── Right arm (typing / thumbs up) ── */}
      <path
        d={isTyping
          ? "M140 80 C146 90 148 105 142 114"
          : "M140 76 C150 68 154 56 152 46"
        }
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        style={{ transition: "d 0.5s ease" }}
      />

      {isTyping ? (
        <circle cx="142" cy="114" r="4" fill="#1a1a2e" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      ) : (
        <g transform="translate(140, 30)">
          {/* Side-view fist — four stacked curled fingers */}
          <rect x="0" y="10" width="20" height="7" rx="3.5" fill="rgba(251,146,60,0.75)" stroke="rgba(251,146,60,0.5)" strokeWidth="0.8" />
          <rect x="0" y="16" width="20" height="7" rx="3.5" fill="rgba(251,146,60,0.7)" stroke="rgba(251,146,60,0.5)" strokeWidth="0.8" />
          <rect x="0" y="22" width="19" height="7" rx="3.5" fill="rgba(251,146,60,0.65)" stroke="rgba(251,146,60,0.5)" strokeWidth="0.8" />
          <rect x="1" y="28" width="17" height="6" rx="3" fill="rgba(251,146,60,0.6)" stroke="rgba(251,146,60,0.5)" strokeWidth="0.8" />
          {/* Thumb — wide, going UP from left side of fist */}
          <rect x="-2" y="-8" width="10" height="20" rx="5" fill="rgba(251,146,60,0.85)" stroke="rgba(251,146,60,0.6)" strokeWidth="1" />
          {/* Thumb nail */}
          <ellipse cx="3" cy="-4" rx="3.5" ry="2" fill="rgba(255,255,255,0.12)" />
        </g>
      )}

      {/* ── Feet ── */}
      <ellipse cx="98" cy="126" rx="10" ry="4" fill="rgba(251,146,60,0.7)" stroke="rgba(251,146,60,0.5)" strokeWidth="1" />
      <ellipse cx="122" cy="126" rx="10" ry="4" fill="rgba(251,146,60,0.7)" stroke="rgba(251,146,60,0.5)" strokeWidth="1" />

      {/* ── Bow tie ── */}
      <path d="M103 74 L110 78 L117 74 L110 82Z" fill="rgba(167,139,250,0.6)" stroke="rgba(167,139,250,0.8)" strokeWidth="1" strokeLinejoin="round" />
      <circle cx="110" cy="78" r="1.5" fill="rgba(167,139,250,0.9)" />
    </svg>
  );
}
