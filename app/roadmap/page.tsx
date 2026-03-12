import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { releaseHighlights, roadmapItems } from "@/app/site-data";

export const metadata: Metadata = {
  title: "Roadmap & Release Status",
  description: "AeroLang release framing, current milestone highlights, and planned roadmap items.",
};

export default function RoadmapPage() {
  return (
    <>
      <main className="relative overflow-hidden">
        <SiteHeader />
        <section className="section-shell py-12 md:py-16">
          <span className="eyebrow">Roadmap</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-white md:text-7xl">
            Visible execution beats vague promises.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This page separates the current release baseline from future milestones so visitors can see what is
            present now and what is still planned.
          </p>
        </section>

        <section className="section-shell grid gap-6 pb-24 md:grid-cols-[0.9fr_1.1fr] md:pb-32">
          <div className="glass-panel rounded-[32px] p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan">Recent Release</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white">v0.1.0-alpha</h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
              {releaseHighlights.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {roadmapItems.map((item) => (
              <article key={item.version} className="glass-panel rounded-[28px] p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{item.version}</p>
                    <h2 className="mt-2 text-2xl font-medium text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
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
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
