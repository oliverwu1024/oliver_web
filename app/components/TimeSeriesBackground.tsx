"use client";

import { useEffect, useRef } from "react";

export default function TimeSeriesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Generate a time series value using layered sine waves + noise
    const generateY = (x: number, t: number, seed: number) => {
      const h = window.innerHeight;
      const base = h * 0.5;
      const v =
        Math.sin((x + t) * 0.003 + seed) * h * 0.08 +
        Math.sin((x + t) * 0.007 + seed * 2) * h * 0.05 +
        Math.sin((x + t) * 0.015 + seed * 0.5) * h * 0.03 +
        Math.sin((x + t) * 0.04 + seed * 3) * h * 0.015 +
        // Sharp spikes — occasional jumps like real time series
        Math.sin((x + t) * 0.002 + seed * 1.7) *
          Math.sin((x + t) * 0.023 + seed) *
          h *
          0.06;
      return base + v;
    };

    const lines = [
      { seed: 0, speed: 0.8, color: "99, 102, 241", opacity: 0.15, width: 1.5 }, // accent indigo
      { seed: 5, speed: 0.5, color: "139, 92, 246", opacity: 0.1, width: 1 },    // accent-2 purple
      { seed: 12, speed: 1.1, color: "167, 139, 250", opacity: 0.07, width: 0.8 }, // lighter purple
    ];

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      for (const line of lines) {
        const t = time * line.speed;

        // Draw the line
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${line.color}, ${line.opacity})`;
        ctx.lineWidth = line.width;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        const step = 3;
        for (let x = 0; x <= w; x += step) {
          const y = generateY(x, t, line.seed);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Draw a faint glow fill below the line
        ctx.beginPath();
        for (let x = 0; x <= w; x += step) {
          const y = generateY(x, t, line.seed);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, h * 0.35, 0, h * 0.7);
        gradient.addColorStop(0, `rgba(${line.color}, ${line.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${line.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw faint grid lines like a chart
      ctx.strokeStyle = "rgba(99, 102, 241, 0.03)";
      ctx.lineWidth = 0.5;
      const gridSpacingY = h / 8;
      for (let y = gridSpacingY; y < h; y += gridSpacingY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      time += 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
