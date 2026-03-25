export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Let&apos;s{" "}
          <span className="gradient-text">collaborate</span>
        </h2>
        <p className="text-muted leading-relaxed mb-10 max-w-xl mx-auto">
          Interested in time series forecasting, probabilistic ML, or HPC workflows?
          I&apos;m always open to discussing research, collaboration opportunities, or
          interesting problems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@oliver.dev"
            className="group relative px-8 py-3.5 rounded-xl bg-accent text-white font-medium text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            <span className="relative z-10">Send an Email</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://github.com/oliverwu1024"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl border border-white/10 text-sm font-medium text-muted hover:text-foreground hover:border-white/20 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
