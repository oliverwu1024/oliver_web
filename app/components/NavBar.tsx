"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const sections = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
  { href: "#blog", label: "Blog" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close menu on scroll */
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="flex flex-col gap-1.5 cursor-pointer group"
            aria-label="Menu"
          >
            <span
              className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                menuOpen
                  ? "bg-accent rotate-45 translate-y-[4px]"
                  : "bg-foreground/70 group-hover:bg-accent"
              }`}
            />
            <span
              className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : "bg-foreground/70 group-hover:bg-accent"
              }`}
            />
            <span
              className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                menuOpen
                  ? "bg-accent -rotate-45 -translate-y-[4px]"
                  : "bg-foreground/70 group-hover:bg-accent"
              }`}
            />
          </button>
          <Link
            href="/"
            className="text-lg font-bold tracking-tight gradient-text"
          >
            Home
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/oliverwu1024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-widest uppercase gradient-text hover:opacity-80 transition-opacity"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/oliver-wu-aa40a7215"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-widest uppercase gradient-text hover:opacity-80 transition-opacity"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Dropdown menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 pb-4 bg-background/90 backdrop-blur-xl border-b border-white/5">
          <div className="flex flex-col gap-1">
            {sections.map((s, i) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-surface transition-colors group"
              >
                <span className="text-xs font-mono text-accent/60 w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
