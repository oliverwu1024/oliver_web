import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Oliver",
  description:
    "Researcher & engineer specializing in time series forecasting, probabilistic ML, and high-performance computing.",
};

const stats = [
  { number: "4+", label: "Languages", detail: "Python, R, SQL, Rust" },
  { number: "HPC", label: "Infrastructure", detail: "SLURM clusters" },
  { number: "ML", label: "Focus Area", detail: "Time series & Bayesian" },
  { number: "Linux", label: "Environment", detail: "Pop!_OS daily driver" },
];

const tools = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "🐍", desc: "Primary language for ML & data" },
      { name: "R", icon: "📊", desc: "Statistical computing & viz" },
      { name: "SQL", icon: "🗄️", desc: "Data querying & management" },
      { name: "Rust", icon: "⚙️", desc: "Systems & performance-critical code" },
    ],
  },
  {
    category: "Tools & Environment",
    items: [
      { name: "Linux", icon: "🐧", desc: "Pop!_OS — daily driver" },
      { name: "VS Code", icon: "💻", desc: "Editor of choice" },
      { name: "Miniconda", icon: "📦", desc: "Environment management" },
      { name: "Git", icon: "🔀", desc: "Version control" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "SLURM", icon: "🖥️", desc: "HPC job scheduler" },
      { name: "HPC Clusters", icon: "🏗️", desc: "High-performance computing" },
      { name: "Docker", icon: "🐳", desc: "Containerized workflows" },
      { name: "SSH", icon: "🔑", desc: "Remote access & tunneling" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">
            About me
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Turning complex data into{" "}
            <span className="gradient-text">actionable insights</span>
          </h1>
          <div className="space-y-4 text-muted leading-relaxed text-lg">
            <p>
              I specialize in time series forecasting and data analysis, with a focus on
              building robust probabilistic models that work at scale. My workflow lives
              in Linux, powered by Python, R, and Rust.
            </p>
            <p>
              Currently, I&apos;m exploring the frontiers of Bayesian time series
              forecasting and benchmarking foundational models — pushing the boundaries
              of what&apos;s possible with modern ML architectures on HPC clusters.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-hover p-6 rounded-2xl bg-surface border border-white/5"
            >
              <div className="text-2xl font-bold gradient-text mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <div className="mb-16">
            <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Tools I work with{" "}
              <span className="gradient-text">daily</span>
            </h2>
          </div>

          <div className="space-y-12">
            {tools.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-mono text-muted tracking-wider uppercase mb-4 pl-1">
                  {group.category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="card-hover group p-5 rounded-2xl bg-surface border border-white/5"
                    >
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <div className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-muted">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
