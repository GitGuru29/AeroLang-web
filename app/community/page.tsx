import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { communityLinks, issuesUrl, repoUrl } from "@/app/site-data";

export const metadata: Metadata = {
  title: "Community & Project Links",
  description: "AeroLang repositories, discussions, issues, and contributing entry points.",
};

export default function CommunityPage() {
  return (
    <>
      <main className="relative overflow-hidden">
        <SiteHeader />
        <section className="section-shell py-12 md:py-16">
          <span className="eyebrow">Community</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-white md:text-7xl">
            Project links, contribution paths, and discussion channels.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            The website now provides real destinations for repository browsing, issues, and ongoing discussion
            instead of generic placeholder links.
          </p>
        </section>

        <section className="section-shell grid gap-6 pb-24 md:grid-cols-2 md:pb-32">
          {communityLinks.map((link) => (
            <article key={link.label} className="glass-panel rounded-[32px] p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan">Link</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white">{link.label}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{link.description}</p>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/40"
              >
                Open Link
              </a>
            </article>
          ))}
        </section>

        <section className="section-shell pb-24 md:pb-32">
          <div className="glass-panel relative overflow-hidden rounded-[36px] px-6 py-14 text-center md:px-12">
            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />
            <div className="relative">
              <span className="eyebrow">Contributing</span>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Help shape the compiler, tooling, docs, and runtime direction.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Open issues, feature requests, and repo discussions are the cleanest way to participate while
                the ecosystem is still taking shape.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-slate-950"
                >
                  Star on GitHub
                </a>
                <a
                  href={issuesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
                >
                  Report an Issue
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
