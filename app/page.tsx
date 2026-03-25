import Link from "next/link";
import TimeSeriesBackground from "./components/TimeSeriesBackground";

const highlights = [
  {
    title: "About Me",
    description:
      "Researcher & engineer specializing in time series forecasting, probabilistic models, and HPC.",
    href: "/about",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "Projects",
    description:
      "Bayesian time series, prior-data fitted networks, and benchmark evaluations on HPC clusters.",
    href: "/projects",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Blog",
    description:
      "Thoughts on ML research, engineering workflows, and lessons learned along the way.",
    href: "/blog",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Contact",
    description:
      "Interested in collaboration or have a question? Let's connect.",
    href: "/contact",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

function PlaneWelcome() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto min-h-[200px] sm:min-h-[240px] flex flex-col items-center lg:items-end justify-center">
      <div className="relative w-full h-36 sm:h-44 flex items-end justify-center lg:justify-end overflow-visible">
        <div className="plane-fly-land absolute bottom-8 sm:bottom-10 right-[12%] sm:right-[18%] lg:right-[8%] origin-center will-change-transform">
          <svg
            className="w-20 h-20 sm:w-28 sm:h-28 text-accent drop-shadow-[0_0_24px_rgba(99,102,241,0.35)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.25}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.126A59.769 59.769 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.874L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
      <p className="welcome-aboard-reveal mt-4 text-right w-full font-mono text-sm sm:text-base tracking-wide text-accent uppercase">
        Welcome aboard
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <TimeSeriesBackground />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20 lg:py-0">
          <div className="text-left max-w-2xl">
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 status-dot" />
              <span className="text-sm text-muted">Available for collaboration</span>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Oliver</span>
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
              Researcher & engineer working at the intersection of{" "}
              <span className="text-foreground font-medium">time series forecasting</span>,{" "}
              <span className="text-foreground font-medium">probabilistic models</span>, and{" "}
              <span className="text-foreground font-medium">high-performance computing</span>.
            </p>

            <div className="animate-fade-in-up animation-delay-300 flex flex-wrap items-center justify-start gap-4">
              <Link
                href="/projects"
                className="group relative px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-xl border border-white/10 text-sm font-medium text-muted hover:text-foreground hover:border-white/20 transition-all"
              >
                About Me
              </Link>
            </div>
          </div>

          <PlaneWelcome />
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in animation-delay-800 absolute bottom-12 left-6 sm:left-10 lg:left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">
              Explore
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What I&apos;m{" "}
              <span className="gradient-text">working on</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-hover group p-6 rounded-2xl bg-surface border border-white/5 block"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
