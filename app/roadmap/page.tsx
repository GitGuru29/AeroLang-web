import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { releaseHighlights, roadmapItems } from "@/app/site-data";

export const metadata: Metadata = {
  title: "Roadmap & Release Status",
  description: "AeroLang release framing, current milestone highlights, and planned roadmap items.",
};

export default function RoadmapPage() {
  const currentMilestone = roadmapItems.find((item) => item.status === "current");
  const futureMilestones = roadmapItems.filter((item) => item.status !== "current");

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

        <section className="section-shell pb-24 md:pb-32">
          <div className="glass-panel relative overflow-hidden rounded-[40px] px-6 py-8 md:px-10 md:py-10">
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(70,223,255,0.16),transparent_62%)]" />
            <div className="relative">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan">Roadmap Tree</p>
                <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] text-white md:text-5xl">
                  Project growth mapped like a branching system.
                </h2>
              </div>

              {currentMilestone ? (
                <div className="mx-auto mt-12 max-w-3xl">
                  <article className="glass-panel roadmap-root rounded-[32px] p-7 text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan">{currentMilestone.version}</p>
                    <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">
                      {currentMilestone.title}
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">{currentMilestone.body}</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      {releaseHighlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-emerald-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              ) : null}

              <div className="roadmap-tree relative mx-auto mt-12 max-w-6xl pb-4">
                <div className="roadmap-trunk hidden md:block" />
                <div className="grid gap-8">
                  {futureMilestones.map((item, index) => {
                    const alignLeft = index % 2 === 0;

                    return (
                      <div
                        key={item.version}
                        className={`roadmap-branch-row relative grid items-center gap-6 md:grid-cols-2 ${
                          alignLeft ? "" : "md:[&>article]:col-start-2"
                        }`}
                      >
                        <article
                          className={`glass-panel roadmap-branch-card rounded-[30px] p-6 ${
                            alignLeft ? "md:mr-12" : "md:ml-12"
                          }`}
                        >
                          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div>
                              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{item.version}</p>
                              <h3 className="mt-2 text-2xl font-medium text-white">{item.title}</h3>
                              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
                            </div>
                            <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan">
                              {item.status}
                            </span>
                          </div>
                        </article>
                        <div
                          aria-hidden="true"
                          className={`roadmap-branch hidden md:block ${alignLeft ? "roadmap-branch-left" : "roadmap-branch-right"}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
