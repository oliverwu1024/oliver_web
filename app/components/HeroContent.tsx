"use client";

import { useState, useEffect } from "react";

interface Segment {
  text: string;
  className?: string;
}

function TypewriterText({
  segments,
  startDelay,
  speed,
  skip = false,
  className,
}: {
  segments: Segment[];
  startDelay: number;
  speed: number;
  skip?: boolean;
  className?: string;
}) {
  const totalLen = segments.reduce((s, seg) => s + seg.text.length, 0);
  const [count, setCount] = useState(skip ? totalLen : 0);
  const [started, setStarted] = useState(skip);
  const done = count >= totalLen;

  useEffect(() => {
    if (skip) return;
    const id = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(id);
  }, [startDelay, skip]);

  useEffect(() => {
    if (skip || !started || done) return;
    const id = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [started, count, done, speed, skip]);

  let remaining = count;
  const rendered = segments.map((seg, i) => {
    if (remaining <= 0) return null;
    const chars = Math.min(remaining, seg.text.length);
    remaining -= chars;
    return (
      <span key={i} className={seg.className}>
        {seg.text.slice(0, chars)}
      </span>
    );
  });

  return (
    <span className={className}>
      {rendered}
      {started && !done && (
        <span className="inline-block w-[2px] h-[0.85em] bg-accent ml-0.5 align-baseline animate-[cursor-blink_0.8s_steps(1)_infinite]" />
      )}
    </span>
  );
}

/* ── timing constants (plane animation = 5s in CSS) ── */
const PLANE_LAND = 5000;

const headingSegments: Segment[] = [
  { text: "Hi!!! I'm " },
  { text: "Oliver", className: "gradient-text" },
];
const headingSpeed = 50; // ms per char
const headingChars = headingSegments.reduce((s, seg) => s + seg.text.length, 0);
const headingDuration = headingChars * headingSpeed;

const descSegments: Segment[] = [
  { text: "A passionate " },
  { text: "software developer", className: "text-foreground font-medium" },
  { text: " who thrives on turning complex problems into elegant solutions. From crafting " },
  { text: "full-stack applications", className: "text-foreground font-medium" },
  { text: " to exploring the frontiers of " },
  { text: "data science", className: "text-foreground font-medium" },
  { text: " and " },
  { text: "machine learning", className: "text-foreground font-medium" },
  { text: ", I believe great code can push the world forward." },
];
const descSpeed = 12;
const descChars = descSegments.reduce((s, seg) => s + seg.text.length, 0);
const descDuration = descChars * descSpeed;

const pillDelay = PLANE_LAND + 200;
const headingDelay = PLANE_LAND + 400;
const descDelay = headingDelay + headingDuration + 200;
export default function HeroContent() {
  const [skipIntro, setSkipIntro] = useState(false);
  const [showPill, setShowPill] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      setSkipIntro(true);
      setShowPill(true);
      return;
    }
    const t1 = setTimeout(() => setShowPill(true), pillDelay);
    return () => clearTimeout(t1);
  }, []);

  return (
    <div className="text-left max-w-2xl">
      {/* Status pill */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/5 mb-8 transition-opacity duration-500 ${
          showPill ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-green-500 status-dot" />
        <span className="text-sm text-muted">Available for collaboration</span>
      </div>

      {/* Heading — typewriter */}
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6 min-h-[1.1em]">
        <TypewriterText
          segments={headingSegments}
          startDelay={headingDelay}
          speed={headingSpeed}
          skip={skipIntro}
        />
      </h1>

      {/* Description — typewriter */}
      <p className="text-lg sm:text-xl text-muted max-w-2xl mb-10 leading-relaxed min-h-[3.5em]">
        <TypewriterText
          segments={descSegments}
          startDelay={descDelay}
          speed={descSpeed}
          skip={skipIntro}
        />
      </p>

    </div>
  );
}
