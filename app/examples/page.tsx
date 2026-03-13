import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { examples, examplesRepoUrl } from "@/app/site-data";

export const metadata: Metadata = {
  title: "Gallery - Real World Code Samples",
  description: "AeroLang example gallery with starter code, UI examples, and clearly marked planned items.",
};

export default function ExamplesPage() {
  return (
    <>
      <main className="relative overflow-hidden">
        <SiteHeader />
        <section className="section-shell py-12 md:py-16">
          <span className="eyebrow">Examples</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-white md:text-7xl">
            Real-world snippets, not just card titles.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            The gallery now includes concrete AeroLang examples and clearly labels roadmap-only material so the
            site does not blur available features with planned ones.
          </p>
          <div className="mt-8">
            <a
              href={examplesRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/40"
            >
              View Sample Apps Repo
            </a>
          </div>
        </section>

        <section className="section-shell grid gap-6 pb-24 md:pb-32">
          {examples.map((example) => (
            <article key={example.slug} className="glass-panel rounded-[32px] p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                      example.status === "planned"
                        ? "border border-amber-400/20 bg-amber-400/10 text-amber-200"
                        : "border border-cyan/20 bg-cyan/10 text-cyan"
                    }`}
                  >
                    {example.tag}
                  </span>
                  <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">{example.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{example.summary}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                    example.status === "planned"
                      ? "border border-amber-400/20 bg-amber-400/10 text-amber-200"
                      : "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                  }`}
                >
                  {example.status}
                </span>
              </div>
              <pre className="mt-8 overflow-x-auto rounded-[24px] border border-white/10 bg-[#08111f] p-5 font-mono text-sm leading-7 text-slate-200">
                <code>{example.code}</code>
              </pre>
              <p className="mt-6 text-sm leading-7 text-slate-300">{example.explanation}</p>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
