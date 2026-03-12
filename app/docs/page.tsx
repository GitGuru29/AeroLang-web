import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { docsSections, installPrerequisites, installSteps, repoUrl, supportMatrix } from "@/app/site-data";

export const metadata: Metadata = {
  title: "Documentation - Syntax & APIs",
  description: "AeroLang documentation covering language goals, syntax, modules, Android APIs, and installation flow.",
};

export default function DocsPage() {
  return (
    <>
      <main className="relative overflow-hidden">
        <SiteHeader />
        <section className="section-shell py-12 md:py-16">
          <span className="eyebrow">Documentation</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-white md:text-7xl">
            Syntax, Android APIs, and installation in one place.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This page converts the original placeholder docs area into a real documentation surface. Claims are
            framed as current direction unless they are demonstrably shipping today.
          </p>
        </section>

        <section className="section-shell grid gap-6 pb-24 md:pb-32">
          {docsSections.map((section) => (
            <article key={section.title} className="glass-panel rounded-[32px] p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan">{section.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">{section.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {section.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-[22px] border border-white/10 bg-[#08111f] p-4 text-sm leading-7 text-slate-300">
                    {bullet}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="section-shell grid gap-6 pb-24 md:grid-cols-[0.9fr_1.1fr] md:pb-32">
          <div className="glass-panel rounded-[32px] p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan">Prerequisites</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white">Setup requirements</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {installPrerequisites.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-[32px] p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan">First Project</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white">Recommended setup sequence</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {installSteps.map((item, index) => (
                <p key={item}>
                  {index + 1}. {item}
                </p>
              ))}
            </div>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Open AeroLang Demo Repo
            </a>
          </div>
        </section>

        <section className="section-shell pb-24 md:pb-32">
          <div className="glass-panel rounded-[32px] p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan">Platform Matrix</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white">Support levels</h2>
            <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10">
              <div className="grid grid-cols-3 bg-white/[0.04] px-5 py-4 text-xs uppercase tracking-[0.22em] text-slate-500">
                <p>Platform</p>
                <p>Support</p>
                <p>Notes</p>
              </div>
              {supportMatrix.map((item) => (
                <div key={item.platform} className="grid grid-cols-3 border-t border-white/10 px-5 py-4 text-sm text-slate-300">
                  <p>{item.platform}</p>
                  <p>{item.support}</p>
                  <p>{item.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
