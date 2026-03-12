import Image from "next/image";
import { CodeWindow } from "@/components/code-window";
import { HeroSnippet } from "@/components/hero-snippet";
import { PlaygroundShell } from "@/components/playground-shell";

const heroStars = [
  { left: "8%", top: "16%", size: "h-1 w-1", delay: "0s", duration: "7s" },
  { left: "18%", top: "28%", size: "h-1.5 w-1.5", delay: "1.2s", duration: "9s" },
  { left: "27%", top: "10%", size: "h-1 w-1", delay: "2.4s", duration: "8s" },
  { left: "35%", top: "24%", size: "h-2 w-2", delay: "0.6s", duration: "10s" },
  { left: "42%", top: "14%", size: "h-1 w-1", delay: "1.8s", duration: "7.5s" },
  { left: "51%", top: "32%", size: "h-1.5 w-1.5", delay: "0.3s", duration: "8.5s" },
  { left: "59%", top: "18%", size: "h-1 w-1", delay: "2.1s", duration: "9.5s" },
  { left: "67%", top: "12%", size: "h-2 w-2", delay: "1.4s", duration: "11s" },
  { left: "74%", top: "26%", size: "h-1 w-1", delay: "0.9s", duration: "8.2s" },
  { left: "82%", top: "15%", size: "h-1.5 w-1.5", delay: "2.7s", duration: "10.5s" },
  { left: "88%", top: "30%", size: "h-1 w-1", delay: "1.1s", duration: "7.8s" },
  { left: "14%", top: "42%", size: "h-1 w-1", delay: "2.9s", duration: "9.2s" },
  { left: "24%", top: "48%", size: "h-1.5 w-1.5", delay: "0.5s", duration: "8.8s" },
  { left: "39%", top: "44%", size: "h-1 w-1", delay: "1.7s", duration: "10.2s" },
  { left: "48%", top: "52%", size: "h-2 w-2", delay: "2.2s", duration: "11.5s" },
  { left: "63%", top: "46%", size: "h-1 w-1", delay: "0.8s", duration: "8.7s" },
  { left: "71%", top: "54%", size: "h-1.5 w-1.5", delay: "2.5s", duration: "9.8s" },
  { left: "86%", top: "43%", size: "h-1 w-1", delay: "1.6s", duration: "7.4s" },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Docs", href: "#docs" },
  { label: "Examples", href: "#examples" },
  { label: "Playground", href: "#playground" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "GitHub", href: "https://github.com" },
];

const featureCards = [
  {
    title: "Native Android Focus",
    description:
      "Designed for Android-first systems work with direct access to platform internals and predictable deployment.",
  },
  {
    title: "Clean Language Syntax",
    description:
      "Readable primitives remove friction so low-level code stays comprehensible as the project grows.",
  },
  {
    title: "High Performance",
    description:
      "Tight runtime control, efficient tooling, and a native-first execution model keep apps fast.",
  },
  {
    title: "Future Ecosystem",
    description:
      "Compiler, package workflows, IDE support, and docs all fit into a coherent roadmap instead of fragmented tooling.",
  },
];

const examples = [
  { title: "Hello World", description: "Fastest path to the language surface.", tag: "core" },
  { title: "Android App Example", description: "Device-aware boot flow and runtime launch.", tag: "android" },
  { title: "UI Component Example", description: "Composable native UI primitives.", tag: "ui" },
  { title: "File Handling", description: "Straightforward access to the system layer.", tag: "io" },
  { title: "Networking Example", description: "Native client workflows and transport basics.", tag: "net" },
];

const ecosystem = [
  "Compiler",
  "CLI Tools",
  "Package Manager",
  "Standard Library",
  "Future IDE Support",
];

const roadmap = [
  { label: "Compiler progress", state: "Parser, lowering, native backend in active buildout", percent: "68%" },
  { label: "Standard library", state: "Core runtime utilities and Android bridge shaping up", percent: "52%" },
  { label: "Package manager", state: "Registry and dependency graph planned for next milestone", percent: "31%" },
  { label: "Playground", state: "Live demo UI shipping now, compiler-backed execution next", percent: "47%" },
  { label: "Docs expansion", state: "Syntax, installation, modules, and Android guides queued", percent: "39%" },
];

const installMethods = [
  {
    title: "Source Install",
    command: "git clone github.com/siluna/aerolang && cargo run -- build",
  },
  {
    title: "CLI Preview",
    command: "aero init app && aero run android",
  },
  {
    title: "Platform Support",
    command: "Android / arm64 / emulator / native toolchain",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="hero-mask absolute inset-0" />
        <div className="grid-overlay absolute inset-0 bg-hero-grid opacity-25" />
        <div className="noise absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="starfield-layer starfield-layer-far" />
          <div className="starfield-layer starfield-layer-mid" />
          {heroStars.map((star, index) => (
            <span
              key={`${star.left}-${star.top}-${index}`}
              className={`star-particle ${star.size}`}
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 top-24 mx-auto h-72 max-w-4xl rounded-full bg-cyan/10 blur-3xl animate-pulseSoft" />

        <header className="section-shell relative z-20 pt-6">
          <nav className="glass-panel flex items-center justify-between rounded-full px-5 py-4">
            <a href="#home" className="flex items-center gap-3 text-white">
              <Image
                src="/aerolang-logo.png"
                alt="AeroLang logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-semibold tracking-[0.12em]">AeroLang</span>
            </a>
            <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="transition hover:text-cyan"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#download"
              className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan transition hover:border-cyan/50 hover:bg-cyan/15"
            >
              Download
            </a>
          </nav>
        </header>

        <div id="home" className="section-shell relative z-10 py-14 md:py-16">
          <div className="grid min-h-[calc(100vh-110px)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <span className="eyebrow">Experimental Android-native language</span>
              <h1 className="mt-6 text-6xl font-medium tracking-[-0.06em] text-gradient sm:text-7xl md:text-8xl">
                AeroLang
              </h1>
              <p className="mt-4 text-xl font-medium text-slate-100 md:text-3xl">
                Native Android programming language for builders who want more control.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                Build Android applications closer to the metal with speed, simplicity, and full ecosystem
                control. AeroLang is positioned as a serious systems-facing language, not just a syntax demo.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Compile speed", "Native Android", "Experimental language"].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-cyan">4.2k stars</span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">v0.1.0-alpha</span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-emerald-300">
                  Status: Active Build
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#docs"
                  className="rounded-full bg-cyan px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-[#7ce9ff]"
                >
                  Get Started
                </a>
                <a
                  href="/playground"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan/30 hover:bg-cyan/10 hover:text-cyan"
                >
                  Open Playground
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <HeroSnippet />
              <div className="glass-panel grid gap-4 rounded-[28px] p-5 md:grid-cols-3">
                {[
                  ["Native-first", "Android runtime control"],
                  ["Tooling runway", "Compiler, CLI, packages"],
                  ["Docs + roadmap", "Signals a real ecosystem"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="section-shell py-24 md:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">Docs Preview</span>
            <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.05em] text-white md:text-6xl">
              Structured documentation makes AeroLang feel buildable, not speculative.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              AeroLang is a modern programming language focused on Android-native performance, developer
              productivity, and a clean ecosystem. The documentation surface should cover syntax basics,
              variables, functions, modules, Android integration, examples, and installation from day one.
            </p>
          </div>

          <div className="glass-panel rounded-[30px] p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Syntax Basics",
                "Variables",
                "Functions",
                "Modules",
                "Android Integration",
                "Installation",
              ].map((item) => (
                <div key={item} className="rounded-[22px] border border-white/10 bg-[#08111f] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Docs</p>
                  <p className="mt-3 text-lg text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="section-shell py-24 md:py-32">
        <div className="mb-14">
          <span className="eyebrow">Features</span>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Built for precise systems work.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature, index) => (
            <article
              key={feature.title}
              className="glass-panel card-glow rounded-[28px] p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                <span className="text-lg">{`0${index + 1}`}</span>
              </div>
              <h3 className="mt-6 text-2xl font-medium text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="mb-14 mt-20 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Examples Gallery</span>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Fast paths into the language surface.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {examples.map((example) => (
            <article
              key={example.title}
              className="glass-panel card-glow rounded-[28px] p-6 transition duration-300 hover:-translate-y-1"
            >
              <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan">
                {example.tag}
              </span>
              <h3 className="mt-5 text-2xl font-medium text-white">{example.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{example.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-24 md:py-32">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Code Example</span>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Developer tooling with a sharp surface area.
            </h2>
          </div>
        </div>
        <CodeWindow />
      </section>

      <section id="playground" className="section-shell py-24 md:py-32">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Playground Preview</span>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              The feature that makes AeroLang look like a real ecosystem.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Example loader, output console, compile diagnostics, and an editor surface that reads like the
              beginning of a serious language toolchain.
            </p>
          </div>
          <a
            href="/playground"
            className="rounded-full border border-cyan/20 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/40"
          >
            Open Full Playground
          </a>
        </div>

        <PlaygroundShell compact />
      </section>

      <section id="ecosystem" className="section-shell py-24 md:py-32">
        <div className="text-center">
          <span className="eyebrow">Ecosystem</span>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Everything needed to grow beyond a language release.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {ecosystem.map((item) => (
            <div
              key={item}
              className="glass-panel group rounded-[28px] p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mx-auto flex h-16 w-16 animate-float items-center justify-center rounded-full border border-cyan/20 bg-cyan/10 text-cyan">
                <span className="text-2xl">+</span>
              </div>
              <h3 className="mt-6 text-xl font-medium text-white">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Structured to feel cohesive from compiler internals to everyday workflow.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section-shell py-24 md:py-32">
        <div className="mb-12">
          <span className="eyebrow">Roadmap</span>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Trust comes from visible execution.
          </h2>
        </div>

        <div className="grid gap-5">
          {roadmap.map((item) => (
            <div key={item.label} className="glass-panel rounded-[26px] p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-medium text-white">{item.label}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.state}</p>
                </div>
                <div className="min-w-40">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Progress</span>
                    <span>{item.percent}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/8">
                    <div className="h-full rounded-full bg-[linear-gradient(90deg,#46dfff,#149cff)]" style={{ width: item.percent }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="download" className="section-shell py-24 md:py-32">
        <div className="mb-12">
          <span className="eyebrow">Download</span>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Make installation unambiguous.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {installMethods.map((item) => (
            <div key={item.title} className="glass-panel rounded-[28px] p-6">
              <p className="text-xl font-medium text-white">{item.title}</p>
              <code className="mt-5 block rounded-2xl border border-white/10 bg-[#08111f] p-4 font-mono text-sm leading-7 text-slate-300">
                {item.command}
              </code>
            </div>
          ))}
        </div>
      </section>

      <section id="community" className="section-shell py-24 md:py-32">
        <div className="glass-panel relative overflow-hidden rounded-[36px] px-6 py-14 text-center md:px-12">
          <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />
          <div className="relative">
            <span className="eyebrow">Community</span>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Help define the future of Android-native development.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Join the early AeroLang community to shape the compiler, tooling, docs, packages, and runtime
              direction. Built by Siluna Dangalla.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-slate-950"
              >
                Star on GitHub
              </a>
              <a
                href="#docs"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
              >
                Read Documentation
              </a>
              <a
                href="#roadmap"
                className="rounded-full border border-cyan/20 bg-cyan/10 px-6 py-3 text-sm font-semibold text-cyan"
              >
                View Roadmap
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell">
          <div className="glass-panel rounded-[32px] px-6 py-10 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/aerolang-logo.png"
                    alt="AeroLang logo"
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                  <p className="text-2xl font-medium text-white">AeroLang</p>
                </div>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                  Native Android Programming Language built for serious systems development, runtime control,
                  and a coherent future tooling ecosystem.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">v0.1.0-alpha</span>
                  <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-cyan">Experimental</span>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Product</p>
                  <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                    <a href="#docs">Docs</a>
                    <a href="/playground">Playground</a>
                    <a href="#examples">Examples</a>
                    <a href="#download">Download</a>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Project</p>
                  <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                    <a href="#roadmap">Roadmap</a>
                    <a href="#ecosystem">Ecosystem</a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href="#community">Community</a>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Author</p>
                  <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                    <span>Built by Siluna Dangalla</span>
                    <a href="https://silunadangalla.vercel.app/#/" target="_blank" rel="noreferrer">
                      silunadangalla.vercel.app
                    </a>
                    <span className="text-slate-500">Native Android Programming Language</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>Created by Siluna Dangalla</p>
              <p>AeroLang is shaping a serious developer-facing ecosystem.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
