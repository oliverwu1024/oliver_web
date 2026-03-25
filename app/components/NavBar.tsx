"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
        <Link
          href="/"
          className="text-lg font-bold tracking-tight gradient-text"
        >
          Home
        </Link>
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
    </nav>
  );
}
