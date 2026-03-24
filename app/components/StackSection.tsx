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

export default function StackSection() {
  return (
    <section id="stack" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
    </section>
  );
}
