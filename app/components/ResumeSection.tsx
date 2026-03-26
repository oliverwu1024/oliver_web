"use client";

import { useState } from "react";

/* ── Data ── */

const education = [
  {
    degree: "Master of Data Science",
    school: "Monash University",
    period: "Feb 2024 — Dec 2025",
    gpa: "HD 80.9 | Thesis: 91",
    details: [
      "Thesis: Combining Full Bayesian Inference with Prior-Fitted Networks for Time Series Forecasting",
      "Supervisors: Dr. Angus Dempster, Dr. Christoph Bergmeir, Prof. Daniel Schmidt",
      "Focus: ML, Deep Learning, Probabilistic Modelling, Data Engineering, Statistical Methods",
    ],
  },
  {
    degree: "Bachelor of Commerce (Finance)",
    school: "University of Melbourne",
    period: "Aug 2020 — Dec 2023",
    details: [
      "Quantitative coursework: Linear Algebra, Calculus, Econometrics, Probability, Statistics, Time Series Analysis",
    ],
  },
];

const qualifications = [
  { name: "TOEFL", score: "5.5 / 6.0", year: "2026" },
  { name: "PTE Academic", score: "90 / 90", year: "2025" },
  { name: "TOEFL", score: "104 / 120", year: "2019" },
  { name: "IELTS", score: "7.0 / 9", year: "2019" },
];

const experience = [
  {
    title: "Research Assistant",
    company: "Monash Temporal Analytics Lab",
    period: "Jan 2025 — Present",
    points: [
      "Participating in weekly research group meetings on time-series and machine learning.",
      "Collaborating with researchers to share feedback and explore interdisciplinary applications.",
    ],
  },
  {
    title: "Project Intern",
    company: "Monash University & University of Warwick",
    period: "Jul 2025 — Aug 2025",
    points: [
      "Performed data-driven analysis on fibre-optic infrastructure to inform U.S. market strategy.",
      "Delivered reports surfacing trends and actionable opportunities for stakeholders.",
    ],
  },
  {
    title: "Space Utilisation Auditor",
    company: "Monash University",
    period: "Mar 2024 — Oct 2025",
    points: [
      "Gathered and structured space-usage data to guide classroom planning and scheduling.",
      "Translated findings into practical, decision-ready insights for stakeholders.",
    ],
  },
  {
    title: "Research Operations Intern",
    company: "BCSDA",
    period: "Dec 2022 — Mar 2023",
    points: [
      "Prepared research reports and briefing documents on sustainability and industry developments.",
      "Collected and analysed news and policy data to support ongoing research initiatives.",
    ],
  },
];

const volunteer = [
  {
    title: "Peer Mentor",
    company: "Monash University",
    period: "Feb 2025 — Jun 2025",
    points: [
      "Led weekly mentoring sessions guiding first-year students.",
      "Hosted social and networking events to strengthen peer connections.",
    ],
  },
  {
    title: "Student Ambassador",
    company: "Monash English Connect",
    period: "Aug 2024 — Jun 2025",
    points: [
      "Hosted outreach programs promoting intercultural engagement and inclusion.",
      "Facilitated language exchange activities for cross-cultural understanding.",
    ],
  },
];

/* ── Components ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent inline-block" />
      {children}
    </h3>
  );
}

function TimelineEntry({
  title,
  subtitle,
  period,
  badge,
  points,
  defaultOpen = false,
}: {
  title: string;
  subtitle: string;
  period: string;
  badge?: string;
  points?: string[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const hasPoints = points && points.length > 0;

  return (
    <div className="relative pl-6 pb-6 border-l border-white/10 last:pb-0">
      <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-surface-2 border-2 border-accent/60 -translate-x-[5.5px]" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
        <button
          onClick={() => hasPoints && setOpen(!open)}
          className={`text-sm font-semibold text-foreground text-left ${hasPoints ? "hover:text-accent transition-colors cursor-pointer" : ""}`}
        >
          {title}
        </button>
        <span className="text-xs font-mono text-muted">{period}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-muted">{subtitle}</span>
        {badge && (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
            {badge}
          </span>
        )}
      </div>
      {hasPoints && (
        <div
          className="overflow-hidden transition-all duration-400 ease-in-out"
          style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}
        >
          <ul className="mt-2 space-y-1">
            {points.map((p, i) => (
              <li key={i} className="text-xs text-muted/80 leading-relaxed flex gap-2">
                <span className="text-accent/50 mt-0.5">&#8250;</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Main ── */

export default function ResumeSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
      {/* ── Left column: Education + Qualifications ── */}
      <div>
        <SectionTitle>Education</SectionTitle>
        <div className="mb-10">
          {education.map((ed) => (
            <TimelineEntry
              key={ed.degree}
              title={ed.degree}
              subtitle={ed.school}
              period={ed.period}
              badge={ed.gpa}
              points={ed.details}
              defaultOpen
            />
          ))}
        </div>

        <SectionTitle>Qualifications</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {qualifications.map((q) => (
            <div
              key={q.name}
              className="card-hover p-4 rounded-xl bg-surface border border-white/5 text-center"
            >
              <div className="text-sm font-bold gradient-text mb-1">{q.score}</div>
              <div className="text-xs font-medium text-foreground">{q.name}</div>
              <div className="text-[10px] text-muted">{q.year}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right column: Experience + Volunteer ── */}
      <div>
        <SectionTitle>Experience</SectionTitle>
        <div className="mb-10">
          {experience.map((exp) => (
            <TimelineEntry
              key={exp.title + exp.company}
              title={exp.title}
              subtitle={exp.company}
              period={exp.period}
              points={exp.points}
            />
          ))}
        </div>

        <SectionTitle>Volunteer</SectionTitle>
        <div>
          {volunteer.map((vol) => (
            <TimelineEntry
              key={vol.title + vol.company}
              title={vol.title}
              subtitle={vol.company}
              period={vol.period}
              points={vol.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
