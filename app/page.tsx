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
    <div className="relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto min-h-[260px] sm:min-h-[320px] flex flex-col items-center lg:items-end justify-center">
      <div className="relative w-full flex items-center justify-center lg:justify-end overflow-visible">
        <div className="plane-fly-land origin-center will-change-transform">
          <svg
            className="w-[300px] h-[156px] sm:w-[420px] sm:h-[218px] drop-shadow-[0_0_48px_rgba(99,102,241,0.3)]"
            viewBox="0 0 500 260"
            fill="none"
            aria-hidden
          >
            {/* Contrails */}
            <path d="M25 128 Q-10 125 -40 128" stroke="rgba(99,102,241,0.12)" strokeWidth="4" strokeLinecap="round" />
            <path d="M25 140 Q-15 142 -50 138" stroke="rgba(139,92,246,0.08)" strokeWidth="3" strokeLinecap="round" />

            {/* Tail vertical fin */}
            <path d="M62 108 L38 42 L88 42 L95 92" fill="#161628" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M55 62 L82 62" stroke="rgba(99,102,241,0.3)" strokeWidth="2" strokeLinecap="round" />

            {/* Tail stabilizers */}
            <path d="M50 118 L15 102 L18 116 L55 132" fill="#161628" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
            <path d="M50 148 L15 164 L18 150 L55 136" fill="#161628" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />

            {/* Wing shadow */}
            <ellipse cx="280" cy="232" rx="90" ry="8" fill="rgba(99,102,241,0.06)" />

            {/* Wing */}
            <path d="M210 175 L190 232 L370 232 L340 175Z" fill="#181830" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M220 195 L345 195" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />

            {/* Fuselage */}
            <path d="M55 102 C55 78 115 58 205 56 L405 60 C445 62 465 84 470 108 L470 156 C465 180 445 200 405 202 L205 206 C115 204 55 184 55 162Z" fill="#12121e" stroke="rgba(99,102,241,0.35)" strokeWidth="2" />

            {/* Fuselage belly highlight */}
            <path d="M72 168 C72 184 125 198 205 200 L405 197 C440 195 457 182 463 168" stroke="rgba(99,102,241,0.08)" strokeWidth="1" fill="none" />

            {/* Accent stripe */}
            <path d="M76 132 L460 132" stroke="rgba(99,102,241,0.22)" strokeWidth="3" strokeLinecap="round" />

            {/* Passenger windows */}
            <circle cx="355" cy="98" r="11" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
            <circle cx="310" cy="97" r="11" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
            <circle cx="265" cy="97" r="11" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
            <circle cx="220" cy="98" r="11" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
            <circle cx="175" cy="100" r="11" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />

            {/* Cockpit windshield */}
            <path d="M392 60 L445 63 C458 65 466 82 470 104 L470 132 L392 132Z" fill="rgba(99,102,241,0.18)" stroke="rgba(99,102,241,0.5)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M430 62 L436 132" stroke="rgba(99,102,241,0.25)" strokeWidth="1" />

            {/* Pilot — head */}
            <circle cx="425" cy="94" r="17" fill="rgba(167,139,250,0.45)" />
            {/* Helmet */}
            <path d="M408 88 C408 75 442 75 442 88" fill="rgba(99,102,241,0.5)" stroke="rgba(99,102,241,0.35)" strokeWidth="1" />
            {/* Aviator goggles strap */}
            <path d="M412 92 L438 92" stroke="rgba(167,139,250,0.6)" strokeWidth="6" strokeLinecap="round" />
            {/* Left goggle lens */}
            <circle cx="418" cy="92" r="6.5" fill="rgba(99,102,241,0.35)" stroke="rgba(167,139,250,0.75)" strokeWidth="1.5" />
            <circle cx="416" cy="90" r="2" fill="rgba(255,255,255,0.15)" />
            {/* Right goggle lens */}
            <circle cx="432" cy="92" r="6.5" fill="rgba(99,102,241,0.35)" stroke="rgba(167,139,250,0.75)" strokeWidth="1.5" />
            <circle cx="430" cy="90" r="2" fill="rgba(255,255,255,0.15)" />
            {/* Smile */}
            <path d="M418 104 Q425 109 432 104" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Body / shoulders */}
            <path d="M410 110 C410 106 440 106 440 110 L443 132 L407 132Z" fill="rgba(99,102,241,0.35)" />
            {/* Scarf flowing in the wind */}
            <path d="M410 110 C402 118 396 112 388 122 C382 130 374 124 366 132" stroke="rgba(139,92,246,0.4)" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Waving hand */}
            <path d="M440 108 L452 96 L455 84" stroke="rgba(167,139,250,0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="455" cy="80" r="5" fill="rgba(167,139,250,0.4)" />

            {/* Engine cowling */}
            <path d="M463 84 L486 90 L490 108 L490 156 L486 174 L463 180" fill="#0c0c18" stroke="rgba(99,102,241,0.4)" strokeWidth="2" strokeLinejoin="round" />

            {/* Propeller — motion-blurred disc */}
            <ellipse cx="494" cy="132" rx="5" ry="42" fill="rgba(167,139,250,0.18)" />
            <ellipse cx="494" cy="132" rx="3" ry="36" fill="rgba(167,139,250,0.1)" />
            {/* Hub */}
            <circle cx="494" cy="132" r="7" fill="rgba(99,102,241,0.5)" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <p className="welcome-aboard-reveal mt-6 text-right w-full font-mono text-sm sm:text-base tracking-wide text-accent uppercase">
        Welcome aboard
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="absolute inset-0 animate-fade-in animation-delay-2000 pointer-events-none">
          <TimeSeriesBackground />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20 lg:py-0">
          <div className="text-left max-w-2xl">
            <div className="animate-drop-in animation-delay-2800 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 status-dot" />
              <span className="text-sm text-muted">Available for collaboration</span>
            </div>

            <h1 className="animate-drop-in animation-delay-3000 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Oliver</span>
            </h1>

            <p className="animate-drop-in animation-delay-3200 text-lg sm:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
              Researcher & engineer working at the intersection of{" "}
              <span className="text-foreground font-medium">time series forecasting</span>,{" "}
              <span className="text-foreground font-medium">probabilistic models</span>, and{" "}
              <span className="text-foreground font-medium">high-performance computing</span>.
            </p>

            <div className="animate-drop-in animation-delay-3400 flex flex-wrap items-center justify-start gap-4">
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
        <div className="animate-fade-in animation-delay-3800 absolute bottom-12 left-6 sm:left-10 lg:left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="relative py-24 px-6 animate-fade-in animation-delay-4200">
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
