import Link from "next/link";
import TimeSeriesBackground from "./components/TimeSeriesBackground";
import HeroContent from "./components/HeroContent";

function PlaneWelcome() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto min-h-[280px] sm:min-h-[360px] flex flex-col items-center lg:items-end justify-start pt-8 lg:pt-12">
      <div className="relative w-full flex items-center justify-center lg:justify-end overflow-visible">
        <div className="plane-fly-land origin-center will-change-transform">
          <svg
            className="w-[260px] h-[200px] sm:w-[380px] sm:h-[293px] drop-shadow-[0_0_48px_rgba(99,102,241,0.35)]"
            viewBox="0 0 440 340"
            fill="none"
            aria-hidden
          >
            {/* ── Exhaust flames ── */}
            <path d="M75 195 C55 188 30 192 10 185" stroke="rgba(251,146,60,0.45)" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M75 205 C50 210 25 204 5 210" stroke="rgba(251,146,60,0.3)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M75 215 C58 222 38 216 22 224" stroke="rgba(239,68,68,0.25)" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* ── Tail vertical fin ── */}
            <path d="M95 140 L65 78 L115 78 L120 130" fill="#1a1a2e" stroke="rgba(99,102,241,0.45)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M80 96 L108 96" stroke="rgba(239,68,68,0.35)" strokeWidth="2.5" strokeLinecap="round" />

            {/* ── Tail stabilizers ── */}
            <path d="M82 175 L42 158 L46 172 L85 190" fill="#1a1a2e" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
            <path d="M82 225 L42 242 L46 228 L85 210" fill="#1a1a2e" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />

            {/* ── Wing + rockets ── */}
            <path d="M185 260 L165 312 L305 312 L275 260Z" fill="#181830" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M200 280 L290 280" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
            {/* Rockets */}
            <rect x="178" y="302" width="30" height="10" rx="5" fill="rgba(239,68,68,0.35)" stroke="rgba(239,68,68,0.25)" strokeWidth="1" />
            <rect x="262" y="302" width="30" height="10" rx="5" fill="rgba(239,68,68,0.35)" stroke="rgba(239,68,68,0.25)" strokeWidth="1" />
            <circle cx="178" cy="307" r="2.5" fill="rgba(251,146,60,0.5)" />
            <circle cx="262" cy="307" r="2.5" fill="rgba(251,146,60,0.5)" />

            {/* ── Fuselage (chunky barrel) ── */}
            <path d="M80 170 C80 142 130 118 210 114 L315 118 C360 122 380 145 385 172 L385 228 C380 255 360 276 315 280 L210 284 C130 280 80 258 80 230Z" fill="#12121e" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />

            {/* Fuselage belly */}
            <path d="M100 240 C100 256 140 272 210 276 L315 272 C350 269 370 256 377 240" stroke="rgba(99,102,241,0.08)" strokeWidth="1" fill="none" />

            {/* Accent stripe */}
            <path d="M100 200 L375 200" stroke="rgba(99,102,241,0.22)" strokeWidth="3" strokeLinecap="round" />

            {/* Name on fuselage */}
            <text
              x="190"
              y="230"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="22"
              fontWeight="600"
              letterSpacing="2"
              fill="rgba(99,102,241,0.45)"
            >
              Oliver Wu
            </text>

            {/* Rivets */}
            <circle cx="150" cy="168" r="2" fill="rgba(99,102,241,0.15)" />
            <circle cx="185" cy="164" r="2" fill="rgba(99,102,241,0.15)" />
            <circle cx="220" cy="162" r="2" fill="rgba(99,102,241,0.15)" />

            {/* ── Cockpit windshield ── */}
            <path d="M278 118 L352 122 C364 124 374 140 378 160 L378 200 L278 200Z" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.4)" strokeWidth="2" strokeLinejoin="round" />

            {/* Cockpit rim */}
            <path d="M244 114 L364 120" stroke="rgba(99,102,241,0.5)" strokeWidth="4" strokeLinecap="round" />

            {/* ── PILOT (Corki-style) ── */}

            {/* Body in cockpit */}
            <path d="M286 126 C286 120 342 120 342 126 L346 168 L282 168Z" fill="rgba(99,102,241,0.3)" />
            {/* Jacket collar */}
            <path d="M284 126 C284 122 344 122 344 126" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />

            {/* Head — big chibi head */}
            <circle cx="314" cy="82" r="34" fill="rgba(167,139,250,0.35)" />

            {/* Helmet */}
            <path d="M282 72 C282 48 346 48 346 72" fill="rgba(99,102,241,0.45)" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
            <path d="M280 74 L348 74" stroke="rgba(99,102,241,0.4)" strokeWidth="3" strokeLinecap="round" />

            {/* BIG aviator goggles */}
            <ellipse cx="298" cy="78" rx="16" ry="12" fill="rgba(99,102,241,0.3)" stroke="rgba(167,139,250,0.7)" strokeWidth="2" />
            <ellipse cx="330" cy="78" rx="16" ry="12" fill="rgba(99,102,241,0.3)" stroke="rgba(167,139,250,0.7)" strokeWidth="2" />
            {/* Bridge */}
            <path d="M314 78 L316 78" stroke="rgba(167,139,250,0.5)" strokeWidth="4" strokeLinecap="round" />
            {/* Goggle reflections */}
            <ellipse cx="292" cy="74" rx="5" ry="3.5" fill="rgba(255,255,255,0.12)" />
            <ellipse cx="324" cy="74" rx="5" ry="3.5" fill="rgba(255,255,255,0.12)" />

            {/* ── BIG BUSHY MUSTACHE ── */}
            <path d="M296 96 C290 104 282 100 274 106" stroke="rgba(167,139,250,0.55)" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M332 96 C338 104 346 100 354 106" stroke="rgba(167,139,250,0.55)" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M298 98 C306 104 312 105 314 103 C316 105 322 104 330 98" fill="rgba(167,139,250,0.4)" />

            {/* Grin under mustache */}
            <path d="M306 107 Q314 113 322 107" stroke="rgba(167,139,250,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Waving hand */}
            <path d="M344 122 L360 106 L365 88" stroke="rgba(167,139,250,0.5)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="365" cy="84" r="7" fill="rgba(167,139,250,0.4)" />
            {/* Open palm fingers */}
            <path d="M361 78 L362 72 M365 77 L367 71 M369 79 L372 74" stroke="rgba(167,139,250,0.3)" strokeWidth="1.5" strokeLinecap="round" />

            {/* Red scarf flowing in wind */}
            <path d="M286 126 C274 140 266 132 254 146 C244 158 234 148 222 160" stroke="rgba(239,68,68,0.4)" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M286 132 C276 144 270 136 262 148" stroke="rgba(239,68,68,0.3)" strokeWidth="3.5" fill="none" strokeLinecap="round" />

            {/* ── Engine cowling ── */}
            <path d="M378 152 L404 160 L408 178 L408 222 L404 240 L378 248" fill="#0c0c18" stroke="rgba(99,102,241,0.45)" strokeWidth="2" strokeLinejoin="round" />
            {/* Engine grille */}
            <path d="M384 174 L400 177 M384 200 L400 200 M384 226 L400 223" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" strokeLinecap="round" />

            {/* ── Propeller (motion blur disc) ── */}
            <ellipse cx="412" cy="200" rx="6" ry="58" fill="rgba(167,139,250,0.18)" />
            <ellipse cx="412" cy="200" rx="4" ry="48" fill="rgba(167,139,250,0.1)" />
            {/* Hub */}
            <circle cx="412" cy="200" r="10" fill="rgba(99,102,241,0.5)" stroke="rgba(99,102,241,0.35)" strokeWidth="2" />
            <circle cx="412" cy="200" r="3.5" fill="rgba(167,139,250,0.4)" />
          </svg>
        </div>
      </div>
      <div className="welcome-aboard-reveal mt-8 w-full max-w-[380px] ml-auto">
        <p className="font-mono text-2xl sm:text-3xl tracking-wide text-accent uppercase font-bold text-right">
          Welcome aboard
        </p>
        <div className="flex flex-col items-start gap-3 mt-6">
          <a href="#about" className="text-lg sm:text-xl text-muted hover:text-foreground transition-colors">
            <span className="text-accent/50 font-mono text-sm mr-2">1.</span>About
          </a>
          <a href="#projects" className="text-lg sm:text-xl text-muted hover:text-foreground transition-colors">
            <span className="text-accent/50 font-mono text-sm mr-2">2.</span>Projects
          </a>
          <a href="#skills" className="text-lg sm:text-xl text-muted hover:text-foreground transition-colors">
            <span className="text-accent/50 font-mono text-sm mr-2">3.</span>Skills
          </a>
          <a href="#resume" className="text-lg sm:text-xl text-muted hover:text-foreground transition-colors">
            <span className="text-accent/50 font-mono text-sm mr-2">4.</span>Resume
          </a>
          <a href="#contact" className="text-lg sm:text-xl text-muted hover:text-foreground transition-colors">
            <span className="text-accent/50 font-mono text-sm mr-2">5.</span>Contact
          </a>
          <a href="#blog" className="text-lg sm:text-xl text-muted hover:text-foreground transition-colors">
            <span className="text-accent/50 font-mono text-sm mr-2">6.</span>Blog
          </a>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
          <span className="text-xs text-muted uppercase tracking-widest font-mono">Scroll down or press a section</span>
        </div>
      </div>
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
          <HeroContent />

          <PlaneWelcome />
        </div>

      </section>

      {/* 1. About */}
      <section id="about" className="relative min-h-screen flex items-center px-6 bg-surface">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">01</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Coming soon.
          </p>
        </div>
      </section>

      {/* 2. Projects */}
      <section id="projects" className="relative min-h-screen flex items-center px-6 bg-background">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">02</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Coming soon.
          </p>
        </div>
      </section>

      {/* 3. Skills */}
      <section id="skills" className="relative min-h-screen flex items-center px-6 bg-surface">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">03</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Coming soon.
          </p>
        </div>
      </section>

      {/* 4. Resume */}
      <section id="resume" className="relative min-h-screen flex items-center px-6 bg-background">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">04</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Coming soon.
          </p>
        </div>
      </section>

      {/* 5. Contact */}
      <section id="contact" className="relative min-h-screen flex items-center px-6 bg-surface">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">05</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Coming soon.
          </p>
        </div>
      </section>

      {/* 6. Blog */}
      <section id="blog" className="relative min-h-screen flex items-center px-6 bg-background">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">06</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
