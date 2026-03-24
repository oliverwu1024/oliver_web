"use client";

import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight gradient-text"
        >
          oliver.
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#stack"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Stack
          </a>
          <a
            href="#research"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Research
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
