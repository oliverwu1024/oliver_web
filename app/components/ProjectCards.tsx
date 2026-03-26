"use client";

import { useState } from "react";

interface Project {
  tag: string;
  title: string;
  description: string;
  details: string;
  techs: string[];
  status: string;
  gradient: string;
  icon: React.ReactNode;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    tag: "E-Commerce",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with product management, user authentication, shopping cart, and payment integration.",
    details:
      "Building a modern online storefront from scratch — featuring product catalog with search and filtering, user accounts with order history, a real-time shopping cart, Stripe checkout integration, and an admin dashboard for inventory management. Designed for scalability with a RESTful API backend.",
    techs: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    status: "Planned",
    gradient: "from-amber-500/20 via-yellow-500/20 to-orange-500/20",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Cart body */}
        <path d="M18 28 L12 18" stroke="rgba(251,191,36,0.6)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 28 L24 52 L62 52 L68 32 L22 32" stroke="rgba(251,191,36,0.6)" strokeWidth="2" strokeLinejoin="round" fill="rgba(251,191,36,0.08)" />
        {/* Items in cart */}
        <rect x="30" y="36" width="10" height="12" rx="2" fill="rgba(251,191,36,0.3)" />
        <rect x="44" y="36" width="10" height="12" rx="2" fill="rgba(251,191,36,0.25)" />
        <rect x="37" y="34" width="10" height="14" rx="2" fill="rgba(251,191,36,0.2)" />
        {/* Wheels */}
        <circle cx="30" cy="58" r="4" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" />
        <circle cx="56" cy="58" r="4" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" />
        {/* Price tag */}
        <circle cx="62" cy="22" r="8" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.5)" strokeWidth="1" />
        <text x="59" y="25" fontFamily="monospace" fontSize="9" fill="rgba(251,191,36,0.7)">$</text>
      </svg>
    ),
  },
  {
    tag: "Web Dev",
    title: "Personal Website (v2)",
    description:
      "The site you\u2019re looking at right now — a dark-themed, animated portfolio built with Next.js and Tailwind CSS.",
    details:
      "Features a custom SVG plane landing animation, particle backgrounds, terminal-style skills section, interactive project cards, and a contact form. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Deployed on Vercel.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    link: "https://oliverweb-delta.vercel.app/",
    github: "https://github.com/oliverwu1024/oliver_web",
    gradient: "from-violet-500/20 via-fuchsia-500/20 to-purple-500/20",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Monitor */}
        <rect x="10" y="10" width="60" height="44" rx="5" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" />
        {/* Screen glow */}
        <rect x="14" y="14" width="52" height="36" rx="3" fill="rgba(139,92,246,0.06)" />
        {/* Code on screen */}
        <rect x="18" y="20" width="20" height="2.5" rx="1" fill="rgba(139,92,246,0.5)" />
        <rect x="18" y="26" width="32" height="2" rx="1" fill="rgba(167,139,250,0.3)" />
        <rect x="18" y="31" width="26" height="2" rx="1" fill="rgba(167,139,250,0.25)" />
        <rect x="18" y="36" width="36" height="2" rx="1" fill="rgba(139,92,246,0.2)" />
        <rect x="18" y="41" width="18" height="2" rx="1" fill="rgba(167,139,250,0.3)" />
        {/* Stand */}
        <rect x="34" y="54" width="12" height="6" fill="rgba(139,92,246,0.2)" />
        <rect x="28" y="60" width="24" height="3" rx="1.5" fill="rgba(139,92,246,0.25)" />
        {/* Cursor */}
        <rect x="44" y="20" width="2" height="5" fill="rgba(167,139,250,0.7)" className="animate-pulse" />
      </svg>
    ),
  },
  {
    tag: "Data Viz",
    title: "Immigration & Economics Dashboard",
    description:
      "Interactive R Shiny dashboard exploring immigration patterns and economic indicators between Australia and the USA.",
    details:
      "Built with a Martini Glass narrative structure across 7 sections — animated bar races, scatterplots, radar charts, bubble charts, and correlation heatmaps. Investigates the AUSFTA's influence on bilateral migration, trade volume correlations, and differential economic impacts on populations in both countries.",
    techs: ["R", "Shiny", "ggplot2", "Plotly"],
    status: "Completed",
    link: "https://oliverwu1024.shinyapps.io/che-yu_wu_31977251_code/",
    github: "https://github.com/oliverwu1024/shiny_dashboard",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Bar chart */}
        <rect x="8" y="45" width="10" height="25" rx="2" fill="rgba(52,211,153,0.5)" />
        <rect x="22" y="30" width="10" height="40" rx="2" fill="rgba(52,211,153,0.6)" />
        <rect x="36" y="20" width="10" height="50" rx="2" fill="rgba(52,211,153,0.7)" />
        <rect x="50" y="35" width="10" height="35" rx="2" fill="rgba(52,211,153,0.6)" />
        <rect x="64" y="25" width="10" height="45" rx="2" fill="rgba(52,211,153,0.5)" />
        {/* Trend line */}
        <path d="M13 42 L27 28 L41 18 L55 32 L69 22" stroke="rgba(167,139,250,0.7)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Dots on trend */}
        <circle cx="13" cy="42" r="2.5" fill="rgba(167,139,250,0.8)" />
        <circle cx="27" cy="28" r="2.5" fill="rgba(167,139,250,0.8)" />
        <circle cx="41" cy="18" r="2.5" fill="rgba(167,139,250,0.8)" />
        <circle cx="55" cy="32" r="2.5" fill="rgba(167,139,250,0.8)" />
        <circle cx="69" cy="22" r="2.5" fill="rgba(167,139,250,0.8)" />
        {/* Baseline */}
        <line x1="5" y1="72" x2="78" y2="72" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    tag: "Research",
    title: "Master Thesis",
    description:
      "Combining Full Bayesian Inference with Prior-Fitted Networks for zero-shot time series forecasting.",
    details:
      "Investigated whether the Local and Global Trend (LGT) Bayesian exponential smoothing model can serve as a foundation for training Prior-Fitted Networks. Fitted LGT models to M3 competition datasets, generated synthetic time series, and trained a ForecastPFN transformer — evaluated against AutoETS, AutoARIMA, and Seasonal Naive baselines using MASE and sMAPE metrics.",
    techs: ["Python", "PyTorch", "Bayesian ML", "HPC"],
    status: "Completed",
    github: "https://github.com/oliverwu1024/my_master_thesis",
    gradient: "from-indigo-500/20 via-purple-500/20 to-blue-500/20",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Neural network nodes */}
        <circle cx="15" cy="20" r="4" fill="rgba(99,102,241,0.6)" />
        <circle cx="15" cy="40" r="4" fill="rgba(99,102,241,0.6)" />
        <circle cx="15" cy="60" r="4" fill="rgba(99,102,241,0.6)" />
        <circle cx="40" cy="25" r="4" fill="rgba(139,92,246,0.7)" />
        <circle cx="40" cy="45" r="4" fill="rgba(139,92,246,0.7)" />
        <circle cx="40" cy="65" r="4" fill="rgba(139,92,246,0.7)" />
        <circle cx="65" cy="30" r="4" fill="rgba(167,139,250,0.8)" />
        <circle cx="65" cy="50" r="4" fill="rgba(167,139,250,0.8)" />
        {/* Connections */}
        <line x1="19" y1="20" x2="36" y2="25" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <line x1="19" y1="20" x2="36" y2="45" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
        <line x1="19" y1="40" x2="36" y2="25" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
        <line x1="19" y1="40" x2="36" y2="45" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <line x1="19" y1="40" x2="36" y2="65" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
        <line x1="19" y1="60" x2="36" y2="45" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
        <line x1="19" y1="60" x2="36" y2="65" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <line x1="44" y1="25" x2="61" y2="30" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
        <line x1="44" y1="25" x2="61" y2="50" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
        <line x1="44" y1="45" x2="61" y2="30" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
        <line x1="44" y1="45" x2="61" y2="50" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
        <line x1="44" y1="65" x2="61" y2="50" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
        {/* Probability distribution curve */}
        <path d="M10 72 Q25 58 40 72 Q55 86 70 72" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    tag: "Web Dev",
    title: "Personal Website (v1)",
    description:
      "My first portfolio site — a responsive React SPA deployed on GitHub Pages.",
    details:
      "Built with React 19 and Vite 7, featuring multi-page navigation, smooth animations, and automatic deployment via GitHub Actions. This was the static predecessor to the current Next.js site you're looking at right now.",
    techs: ["React", "Vite", "CSS3", "GitHub Pages"],
    status: "Completed",
    link: "https://oliverwu1024.github.io/",
    github: "https://github.com/oliverwu1024/oliverwu1024.github.io",
    gradient: "from-orange-500/20 via-rose-500/20 to-pink-500/20",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Browser window */}
        <rect x="8" y="12" width="64" height="56" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        {/* Title bar */}
        <line x1="8" y1="24" x2="72" y2="24" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="16" cy="18" r="2" fill="rgba(239,68,68,0.6)" />
        <circle cx="23" cy="18" r="2" fill="rgba(234,179,8,0.6)" />
        <circle cx="30" cy="18" r="2" fill="rgba(34,197,94,0.6)" />
        {/* URL bar */}
        <rect x="36" y="15" width="30" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
        {/* Content lines */}
        <rect x="14" y="30" width="24" height="3" rx="1" fill="rgba(251,146,60,0.5)" />
        <rect x="14" y="37" width="52" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
        <rect x="14" y="43" width="44" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
        <rect x="14" y="49" width="48" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
        {/* Code bracket */}
        <text x="44" y="62" fontFamily="monospace" fontSize="14" fill="rgba(251,146,60,0.5)">&lt;/&gt;</text>
      </svg>
    ),
  },
];

export default function ProjectCards() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        const isOpen = expanded === project.title;
        return (
          <div
            key={project.title}
            className="card-hover group relative rounded-2xl bg-surface border border-white/5 overflow-hidden"
          >
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            {/* Preview visual */}
            <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
              <div className="w-28 h-28 opacity-80">
                {project.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {project.tag}
                </span>
                <span className={`flex items-center gap-1.5 text-xs ${
                  project.status === "Completed" ? "text-green-400" :
                  project.status === "In Progress" ? "text-yellow-400" :
                  "text-blue-400"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "Completed" ? "bg-green-400" :
                    project.status === "In Progress" ? "bg-yellow-400 status-dot" :
                    "bg-blue-400"
                  }`} />
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Expandable details */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
              >
                <p className="text-sm text-muted/80 leading-relaxed mb-4 border-t border-white/5 pt-4">
                  {project.details}
                </p>
              </div>

              {/* Tech + read more */}
              <div className="flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-lg bg-surface-2 text-muted border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-accent transition-colors whitespace-nowrap"
                    >
                      Visit ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-accent transition-colors whitespace-nowrap"
                    >
                      GitHub ↗
                    </a>
                  )}
                  <button
                    onClick={() => setExpanded(isOpen ? null : project.title)}
                    className="text-sm text-accent hover:text-accent-2 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {isOpen ? "Show less" : "Read more →"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
