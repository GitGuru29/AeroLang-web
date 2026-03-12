import type { Metadata } from "next";
import { PlaygroundShell } from "@/components/playground-shell";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Playground",
  description: "AeroLang playground with persistent editor state, shareable URLs, and clear simulated-runtime messaging.",
};

export default function PlaygroundPage() {
  return (
    <>
      <main>
        <SiteHeader />
        <section className="section-shell py-10 md:py-16">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">Playground</span>
              <h1 className="mt-6 text-5xl font-medium tracking-[-0.06em] text-white md:text-7xl">
                AeroLab for fast language exploration.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Prototype AeroLang syntax, inspect compile diagnostics, and switch between curated examples in
                a serious editor interface built for language tooling demos.
              </p>
            </div>
            <div className="glass-panel rounded-[28px] px-5 py-4 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan">Status</p>
              <p className="mt-2">Simulation Layer</p>
              <p className="mt-1 text-slate-500">Use the VS Code workflow for full compiler features</p>
            </div>
          </div>

          <PlaygroundShell />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
