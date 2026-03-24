import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Oliver",
  description:
    "Research projects in Bayesian time series forecasting, prior-data fitted networks, and ML benchmarking.",
};

const projects = [
  {
    tag: "Active Research",
    title: "LSGT-PFN",
    description:
      "Exploring Bayesian time series and Probabilistic Forecasting utilizing Prior-Data Fitted Networks. Pushing the boundaries of how we model uncertainty in temporal data.",
    techs: ["Python", "PyTorch", "Bayesian ML", "HPC"],
    status: "In Progress",
  },
  {
    tag: "Benchmarking",
    title: "GIFT-Eval Benchmark",
    description:
      "Running foundational models and formatting datasets for the GIFT-Eval benchmark. Systematically evaluating model performance across diverse time series tasks.",
    techs: ["Python", "R", "SLURM", "Data Engineering"],
    status: "In Progress",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">
            Projects
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Current work &{" "}
            <span className="gradient-text">explorations</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Research projects focused on advancing time series forecasting and
            evaluating modern ML architectures at scale.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover group relative p-8 rounded-2xl bg-surface border border-white/5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {project.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 status-dot" />
                  {project.status}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h2>

              <p className="text-sm text-muted leading-relaxed mb-6">
                {project.description}
              </p>

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
