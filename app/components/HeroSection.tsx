export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 status-dot" />
          <span className="text-sm text-muted">Available for collaboration</span>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-in-up animation-delay-100 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Oliver</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Researcher & engineer working at the intersection of{" "}
          <span className="text-foreground font-medium">time series forecasting</span>,{" "}
          <span className="text-foreground font-medium">probabilistic models</span>, and{" "}
          <span className="text-foreground font-medium">high-performance computing</span>.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up animation-delay-300 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#research"
            className="group relative px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            <span className="relative z-10">View Research</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#stack"
            className="px-6 py-3 rounded-xl border border-white/10 text-sm font-medium text-muted hover:text-foreground hover:border-white/20 transition-all"
          >
            Tech Stack
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in animation-delay-800 absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
