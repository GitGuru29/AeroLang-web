import Image from "next/image";
import Link from "next/link";
import { authorUrl, primaryNav, repoUrl, websiteRepoUrl } from "@/app/site-data";

export function SiteFooter() {
  return (
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
                Native Android language and tooling direction focused on serious runtime control, documentation,
                and a buildable ecosystem surface.
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
                  {primaryNav
                    .filter((item) => !item.external)
                    .slice(1, 5)
                    .map((item) => (
                      <Link key={item.label} href={item.href}>
                        {item.label}
                      </Link>
                    ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Project</p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                  <a href={repoUrl} target="_blank" rel="noreferrer">
                    AeroLang Demo Repo
                  </a>
                  <a href={websiteRepoUrl} target="_blank" rel="noreferrer">
                    Website Repo
                  </a>
                  <Link href="/roadmap">Roadmap</Link>
                  <Link href="/community">Community</Link>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Author</p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                  <span>Built by Siluna Dangalla</span>
                  <a href={authorUrl} target="_blank" rel="noreferrer">
                    silunadangalla.vercel.app
                  </a>
                  <span className="text-slate-500">Native Android Programming Language</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
