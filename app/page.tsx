import Link from "next/link";
import { CodeWindow } from "@/components/code-window";
import { HeroSnippet } from "@/components/hero-snippet";
import { PlaygroundShell } from "@/components/playground-shell";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  docsSections,
  examples,
  homepageFeatureCards,
  installPrerequisites,
  installSteps,
  releaseHighlights,
  repoUrl,
  roadmapItems,
} from "@/app/site-data";

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
];

export default function Home() {
  return (
    <>
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

          <SiteHeader />

          <div className="section-shell relative z-10 py-14 md:py-16">
            <div className="grid min-h-[calc(100vh-110px)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <span className="eyebrow">Experimental Android-native language</span>
                <h1 className="mt-6 text-6xl font-medium tracking-[-0.06em] text-gradient sm:text-7xl md:text-8xl">
                  AeroLang
                </h1>
                <p className="mt-4 text-xl font-medium text-slate-100 md:text-3xl">
                  Native performance Android development with a Kotlin-inspired surface.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                  AeroLang is presented as a language and tooling direction for Android builders who want more
                  direct control. This site now routes into real docs, examples, roadmap content, and a clearer
                  installation story.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["Native-first", "Android APIs", "Compiler direction"].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">v0.1.0-alpha</span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-emerald-300">
                    Status: Active Build
                  </span>
                </div>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/docs"
                    className="rounded-full bg-cyan px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-[#7ce9ff]"
                  >
                    Read Docs
                  </Link>
                  <Link
                    href="/playground"
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan/30 hover:bg-cyan/10 hover:text-cyan"
                  >
                    Open Playground
                  </Link>
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-cyan/20 bg-cyan/10 px-6 py-3 text-center text-sm font-semibold text-cyan transition hover:border-cyan/40"
                  >
                    Start With GitHub
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <HeroSnippet />
                <div className="glass-panel grid gap-4 rounded-[28px] p-5 md:grid-cols-3">
                  {[
                    ["Docs live", "Syntax, modules, Android APIs"],
                    ["Examples live", "Starter, UI, and planned networking"],
                    ["Roadmap live", "Release milestones and project links"],
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

        <section className="section-shell py-24 md:py-32">
          <div className="mb-14">
            <span className="eyebrow">Capabilities</span>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              The site now explains the product instead of hinting at it.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homepageFeatureCards.map((feature, index) => (
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
        </section>

        <section className="section-shell py-24 md:py-32">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="glass-panel rounded-[32px] p-7">
              <span className="eyebrow">Docs Snapshot</span>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] text-white md:text-5xl">
                `/docs` now has concrete language content.
              </h2>
              <div className="mt-8 grid gap-4">
                {docsSections.map((section) => (
                  <div key={section.title} className="rounded-[24px] border border-white/10 bg-[#08111f] p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{section.eyebrow}</p>
                    <p className="mt-3 text-xl text-white">{section.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{section.body[0]}</p>
                  </div>
                ))}
              </div>
              <Link href="/docs" className="mt-8 inline-flex rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate-950">
                Open Documentation
              </Link>
            </div>

            <div className="glass-panel rounded-[32px] p-7">
              <span className="eyebrow">Install Flow</span>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] text-white md:text-5xl">
                Installation is now explicit.
              </h2>
              <div className="mt-8 grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-[#08111f] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Prerequisites</p>
                  <div className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {installPrerequisites.slice(0, 3).map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-[#08111f] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">First Run</p>
                  <div className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {installSteps.slice(0, 3).map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-24 md:py-32">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Examples Gallery</span>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Real example content, with planned items clearly marked.
              </h2>
            </div>
            <Link
              href="/examples"
              className="rounded-full border border-cyan/20 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/40"
            >
              Browse Examples
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {examples.map((example) => (
              <article
                key={example.slug}
                className="glass-panel card-glow rounded-[28px] p-6 transition duration-300 hover:-translate-y-1"
              >
                <span
                  className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                    example.status === "planned"
                      ? "border border-amber-400/20 bg-amber-400/10 text-amber-200"
                      : "border border-cyan/20 bg-cyan/10 text-cyan"
                  }`}
                >
                  {example.tag}
                </span>
                <h3 className="mt-5 text-2xl font-medium text-white">{example.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{example.summary}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">{example.status}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell py-24 md:py-32">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Code Example</span>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Developer tooling with a sharper content layer.
              </h2>
            </div>
          </div>
          <CodeWindow />
        </section>

        <section className="section-shell py-24 md:py-32">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">Playground</span>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                High-fidelity simulation, with clearer product messaging.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                The playground now persists editor state, supports snippet export, and can generate shareable
                URLs while still clearly communicating that the browser experience is a simulation layer.
              </p>
            </div>
            <Link
              href="/playground"
              className="rounded-full border border-cyan/20 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/40"
            >
              Open Full Playground
            </Link>
          </div>

          <PlaygroundShell compact />
        </section>

        <section className="section-shell py-24 md:py-32">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel rounded-[32px] p-7">
              <span className="eyebrow">Release Notes</span>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] text-white md:text-5xl">
                Current release framing is more concrete.
              </h2>
              <div className="mt-8 space-y-3 text-sm leading-7 text-slate-300">
                {releaseHighlights.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {roadmapItems.map((item) => (
                <div key={item.version} className="glass-panel rounded-[26px] p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{item.version}</p>
                      <h3 className="mt-2 text-xl font-medium text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                        item.status === "current"
                          ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                          : "border border-cyan/20 bg-cyan/10 text-cyan"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
              <Link
                href="/roadmap"
                className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan/30 hover:text-cyan"
              >
                View Full Roadmap
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
