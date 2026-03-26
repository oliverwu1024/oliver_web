import Link from "next/link";
import Image from "next/image";
import TimeSeriesBackground from "./components/TimeSeriesBackground";
import HeroContent from "./components/HeroContent";
import NavList from "./components/NavList";
import ContactForm from "./components/ContactForm";
import Particles from "./components/Particles";
import SalutingRobot from "./components/SalutingRobot";
import SkillsTerminal from "./components/SkillsTerminal";
import ProjectCards from "./components/ProjectCards";
import HamsterWheel from "./components/HamsterWheel";
import TuxPenguin from "./components/TuxPenguin";

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
            {/* ── Exhaust flames (animated) ── */}
            <path className="flame-flicker" d="M75 195 C55 188 30 192 10 185" stroke="rgba(251,146,60,0.45)" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path className="flame-flicker-2" d="M75 205 C50 210 25 204 5 210" stroke="rgba(251,146,60,0.3)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path className="flame-flicker-3" d="M75 215 C58 222 38 216 22 224" stroke="rgba(239,68,68,0.25)" strokeWidth="3" strokeLinecap="round" fill="none" />

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

            {/* Red scarf flowing in wind (animated) */}
            <path className="scarf-wave" d="M286 126 C274 140 266 132 254 146 C244 158 234 148 222 160" stroke="rgba(239,68,68,0.4)" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path className="scarf-wave-2" d="M286 132 C276 144 270 136 262 148" stroke="rgba(239,68,68,0.3)" strokeWidth="3.5" fill="none" strokeLinecap="round" />

            {/* ── Engine cowling ── */}
            <path d="M378 152 L404 160 L408 178 L408 222 L404 240 L378 248" fill="#0c0c18" stroke="rgba(99,102,241,0.45)" strokeWidth="2" strokeLinejoin="round" />
            {/* Engine grille */}
            <path d="M384 174 L400 177 M384 200 L400 200 M384 226 L400 223" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" strokeLinecap="round" />

            {/* ── Propeller (spinning) ── */}
            <g className="prop-spin">
              <ellipse cx="412" cy="200" rx="6" ry="58" fill="rgba(167,139,250,0.18)" />
              <ellipse cx="412" cy="200" rx="4" ry="48" fill="rgba(167,139,250,0.1)" />
            </g>
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
        <NavList />
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
      <section id="about" className="relative min-h-screen flex items-center px-6 bg-surface section-particles">
        <Particles />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">01</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 flex items-center gap-4">
            About <span className="gradient-text">Me</span>
            <SalutingRobot />
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-10">
            {/* Left — description */}
            <div>
              <p className="text-lg sm:text-xl text-muted leading-relaxed mb-6">
                I build across the entire spectrum — from <span className="text-foreground font-medium">pixel-perfect interfaces</span> to <span className="text-foreground font-medium">scalable backend systems</span> to <span className="text-foreground font-medium">data pipelines</span> that power real decisions. I enjoy owning problems end to end and shipping things that people actually use.
              </p>
              <p className="text-lg sm:text-xl text-muted leading-relaxed mb-6">
                What sets me apart is that I don&apos;t just write code — I think about <span className="text-foreground font-medium">architecture</span>, <span className="text-foreground font-medium">user experience</span>, and <span className="text-foreground font-medium">business impact</span>. Whether it&apos;s training a model or designing an API, I care about doing it right.
              </p>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                Outside of work, you&apos;ll find me at the gym, gaming, or going down rabbit holes on emerging tech. Always learning, always building.
              </p>
            </div>

            {/* Right — video */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-accent/10 h-[350px] sm:h-[420px] max-w-md ml-auto">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/about-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>

        {/* Marquee at bottom of About */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4">
          <div className="marquee-track whitespace-nowrap">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="text-6xl sm:text-8xl font-bold uppercase tracking-wider text-white/[0.04] mx-8 inline-block select-none"
              >
                Oliver Wu
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Projects */}
      <section id="projects" className="relative min-h-screen flex items-center px-6 bg-background section-particles">
        <Particles />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">02</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12 flex items-center gap-4">
            <span className="gradient-text">Projects</span>
            <HamsterWheel />
          </h2>
          <ProjectCards />
        </div>
      </section>

      {/* 3. Skills */}
      <section id="skills" className="relative min-h-screen flex items-center px-6 bg-surface section-particles">
        <Particles />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-7xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block">03</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12 flex items-center gap-4">
            <span className="gradient-text">Skills</span>
            <TuxPenguin />
          </h2>
          <SkillsTerminal />
        </div>
      </section>

      {/* 4. Resume */}
      <section id="resume" className="relative min-h-screen flex items-center px-6 bg-background section-particles">
        <Particles />
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
      <section id="contact" className="relative min-h-screen flex items-center px-6 bg-surface section-particles">
        <Particles />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-6xl mx-auto w-full py-24">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-4 block text-center">05</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16 text-center">
            <span className="gradient-text">Contact</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — photo + contact boxes */}
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-3 border-accent/30 shadow-xl shadow-accent/15 mb-10">
                <Image
                  src="/oliver-photo.jpg"
                  alt="Oliver Wu"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <a href="https://www.linkedin.com/in/oliver-wu-aa40a7215" target="_blank" rel="noopener noreferrer" className="card-hover p-4 rounded-xl bg-background border border-white/5 flex flex-col items-center gap-2 text-center">
                  <svg className="w-8 h-8 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  <span className="text-xs text-muted">Let&apos;s connect</span>
                  <span className="text-[10px] text-muted/60 break-all">oliver-wu-aa40a7215</span>
                </a>
                <a href="https://github.com/oliverwu1024" target="_blank" rel="noopener noreferrer" className="card-hover p-4 rounded-xl bg-background border border-white/5 flex flex-col items-center gap-2 text-center">
                  <svg className="w-8 h-8 text-[#e8e8ed]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                  <span className="text-xs text-muted">Check my code</span>
                  <span className="text-[10px] text-muted/60">oliverwu1024</span>
                </a>
                <a href="mailto:oliverwu1024@gmail.com" className="card-hover p-4 rounded-xl bg-background border border-white/5 flex flex-col items-center gap-2 text-center">
                  <svg className="w-8 h-8 text-[#EA4335]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  <span className="text-xs text-muted">Drop me a line</span>
                  <span className="text-[10px] text-muted/60 break-all">oliverwu1024@gmail.com</span>
                </a>
                <a href="tel:+61452324365" className="card-hover p-4 rounded-xl bg-background border border-white/5 flex flex-col items-center gap-2 text-center">
                  <svg className="w-8 h-8 text-[#34D399]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                  <span className="text-xs text-muted">Give me a call</span>
                  <span className="text-[10px] text-muted/60">+61 452 324 365</span>
                </a>
              </div>
            </div>

            {/* Right — contact form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 6. Blog */}
      <section id="blog" className="relative min-h-screen flex items-center px-6 bg-background section-particles">
        <Particles />
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
