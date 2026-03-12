"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/app/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="section-shell relative z-30 pt-6">
      <nav className="glass-panel rounded-full px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-white">
            <Image
              src="/aerolang-logo.png"
              alt="AeroLang logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-semibold tracking-[0.12em]">AeroLang</span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            {primaryNav.map((item) => {
              const active = !item.external && pathname === item.href;

              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:text-cyan"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm transition ${
                    active ? "bg-cyan/10 text-cyan shadow-[0_0_24px_rgba(70,223,255,0.14)]" : "text-slate-300 hover:text-cyan"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan/30 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-5 bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 md:hidden ${
            menuOpen ? "mt-4 max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[28px] border border-white/10 bg-[#08111f]/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col gap-2">
              {primaryNav.map((item) => {
                const active = !item.external && pathname === item.href;

                return item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-cyan/10 hover:text-cyan"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      active ? "bg-cyan/10 text-cyan" : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
