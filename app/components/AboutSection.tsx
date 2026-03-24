export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">
              About me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Turning complex data into{" "}
              <span className="gradient-text">actionable insights</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
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

          {/* Right: stats / highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "4+", label: "Languages", detail: "Python, R, SQL, Rust" },
              { number: "HPC", label: "Infrastructure", detail: "SLURM clusters" },
              { number: "ML", label: "Focus Area", detail: "Time series & Bayesian" },
              { number: "Linux", label: "Environment", detail: "Pop!_OS daily driver" },
            ].map((stat) => (
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
        </div>
      </div>
    </section>
  );
}
