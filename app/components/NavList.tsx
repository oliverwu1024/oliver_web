"use client";

import { useState, useEffect } from "react";

const items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
  { href: "#blog", label: "Blog" },
];

export default function NavList() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-start gap-3 mt-6">
      {items.map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          className={`text-lg sm:text-xl transition-colors duration-500 ${
            i === active
              ? "text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          <span className={`font-mono text-sm mr-2 transition-colors duration-500 ${
            i === active ? "text-accent" : "text-accent/50"
          }`}>
            {i + 1}.
          </span>
          {item.label}
        </a>
      ))}
    </div>
  );
}
