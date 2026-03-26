"use client";

import { useState, useEffect, useRef } from "react";

/* ── skill data ── */
interface Skill {
  name: string;
  desc: string;
}

interface Category {
  name: string;
  items: Skill[];
}

const categories: Category[] = [
  {
    name: "languages",
    items: [
      { name: "JavaScript", desc: "High-level scripting language powering interactive web experiences and server-side applications." },
      { name: "TypeScript", desc: "Typed superset of JavaScript that catches errors at compile time and scales to large codebases." },
      { name: "Python", desc: "Versatile, readable language widely used for data science, ML, automation, and backend services." },
      { name: "SQL", desc: "Standard language for querying, manipulating, and managing relational databases." },
      { name: "R", desc: "Statistical computing language built for data analysis, visualization, and reproducible research." },
      { name: "Rust (learning)", desc: "Systems language focused on memory safety and performance without a garbage collector." },
    ],
  },
  {
    name: "frontend",
    items: [
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapidly building custom designs directly in markup." },
      { name: "HTML / CSS", desc: "Hypertext Markup Language and Cascading Style Sheets, used for structuring and presenting content on the web." },
      { name: "React", desc: "Component-based JavaScript library for building dynamic, declarative user interfaces." },
      { name: "Next.js", desc: "React framework with server-side rendering, routing, and full-stack capabilities out of the box." },
    ],
  },
  {
    name: "backend",
    items: [
      { name: "Node.js", desc: "JavaScript runtime built on V8 for building fast, scalable network applications." },
      { name: "FastAPI", desc: "Modern Python web framework for building high-performance APIs with automatic OpenAPI docs." },
      { name: "REST APIs", desc: "Architectural style for designing networked applications using stateless HTTP requests." },
      { name: "PostgreSQL", desc: "Powerful open-source relational database known for reliability, extensibility, and SQL compliance." },
    ],
  },
  {
    name: "infra",
    items: [
      { name: "Linux", desc: "Open-source operating system powering servers, HPC clusters, and my daily development environment." },
      { name: "Git", desc: "Distributed version control system for tracking changes and collaborating on code." },
      { name: "HPC / SLURM", desc: "High-performance computing clusters managed with the SLURM workload scheduler for large-scale jobs." },
      { name: "Docker", desc: "Container platform for packaging applications with their dependencies into reproducible environments." },
      { name: "SSH / Networking", desc: "Secure remote access protocol used for managing servers, tunneling, and transferring data." },
    ],
  },
  {
    name: "data-ml",
    items: [
      { name: "Pandas / NumPy", desc: "Core Python libraries for data manipulation, numerical computing, and array operations." },
      { name: "Time Series", desc: "Forecasting and analysis of temporal data using statistical and deep learning methods." },
      { name: "PyTorch", desc: "Deep learning framework with dynamic computation graphs, widely used in research and production." },
      { name: "TensorFlow", desc: "End-to-end machine learning platform for building and deploying models at scale." },
      { name: "Scikit-learn", desc: "Python library providing simple and efficient tools for classical machine learning algorithms." },
      { name: "Bayesian ML", desc: "Probabilistic approach to machine learning that quantifies uncertainty in predictions." },
    ],
  },
];

/* ── main component ── */
export default function SkillsTerminal() {
  const [visible, setVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const termRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = termRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* close popup on outside click */
  useEffect(() => {
    if (!activeSkill) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-skill-popup]") && !target.closest("[data-skill-trigger]")) {
        setActiveSkill(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [activeSkill]);

  const total = categories.reduce((s, c) => s + c.items.length, 0);

  /* find description for active skill */
  const activeDesc = activeSkill
    ? categories.flatMap((c) => c.items).find((s) => s.name === activeSkill)?.desc
    : null;

  return (
    <div ref={termRef} className="w-full mx-auto">
      <div className="rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-accent/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-white/5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs font-mono text-muted">
            oliver@dev — skills —&nbsp;bash
          </span>
        </div>

        {/* Terminal body */}
        <div className="bg-[#0c0c14] p-5 sm:p-6 font-mono text-sm sm:text-base leading-relaxed">
          {/* Command */}
          <div className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
            <span className="text-green-400">$</span>{" "}
            <span className="text-foreground">tree ~/skills</span>
          </div>

          <br />

          {/* Grid of trees */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-10 transition-opacity duration-700 delay-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {categories.map((cat, ci) => (
              <div
                key={cat.name}
                className="transition-all duration-500"
                style={{
                  transitionDelay: visible ? `${400 + ci * 150}ms` : "0ms",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <div className="text-accent mb-1">{cat.name}/</div>
                {cat.items.map((item, ii) => {
                  const isLast = ii === cat.items.length - 1;
                  const branch = isLast ? "└── " : "├── ";
                  const isLearning = item.name.includes("(learning)");
                  const isActive = activeSkill === item.name;
                  return (
                    <div key={item.name} className="relative">
                      <button
                        data-skill-trigger
                        onClick={() => setActiveSkill(isActive ? null : item.name)}
                        className={`text-left w-full whitespace-nowrap hover:text-accent transition-colors cursor-pointer ${
                          isActive ? "text-accent" : isLearning ? "text-muted" : "text-foreground"
                        }`}
                      >
                        <span className="text-muted/50">{branch}</span>
                        {item.name}
                      </button>

                      {/* Floating popup */}
                      {isActive && activeDesc && (
                        <div
                          data-skill-popup
                          className="absolute z-50 left-0 bottom-full mb-2 w-64 p-3 rounded-lg bg-surface-2 border border-accent/30 shadow-xl shadow-accent/10 text-xs text-muted leading-relaxed animate-fade-in"
                        >
                          <div className="text-accent font-medium mb-1">{item.name}</div>
                          <div>{activeDesc}</div>
                          <div className="absolute left-4 -bottom-1.5 w-3 h-3 bg-surface-2 border-r border-b border-accent/30 rotate-45" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Summary */}
          <div
            className="mt-6 transition-opacity duration-500"
            style={{
              transitionDelay: visible ? `${400 + categories.length * 150 + 200}ms` : "0ms",
              opacity: visible ? 1 : 0,
            }}
          >
            <span className="text-green-400">
              {categories.length} directories, {total} skills
            </span>
          </div>

          {/* Cursor */}
          <div
            className="mt-2 transition-opacity duration-500"
            style={{
              transitionDelay: visible ? `${400 + categories.length * 150 + 400}ms` : "0ms",
              opacity: visible ? 1 : 0,
            }}
          >
            <span className="text-green-400">$</span>{" "}
            <span className="inline-block w-2.5 h-5 bg-accent/80 align-middle animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
