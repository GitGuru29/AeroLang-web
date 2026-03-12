"use client";

import { useState } from "react";

const code = `module main

fun main() {
    let device = Android.current()
    let engine = Aero.init(device)

    engine.launch {
        print("Hello AeroLang")
    }
}`;

const lines = [
  [{ text: "module", className: "text-cyan" }, { text: " main", className: "text-white" }],
  [],
  [
    { text: "fun", className: "text-cyan" },
    { text: " main", className: "text-white" },
    { text: "() {", className: "text-slate-300" },
  ],
  [
    { text: "    let", className: "text-cyan" },
    { text: " device", className: "text-white" },
    { text: " = ", className: "text-slate-400" },
    { text: "Android.current()", className: "text-sky-300" },
  ],
  [
    { text: "    let", className: "text-cyan" },
    { text: " engine", className: "text-white" },
    { text: " = ", className: "text-slate-400" },
    { text: "Aero.init(device)", className: "text-sky-300" },
  ],
  [],
  [
    { text: "    engine.launch", className: "text-white" },
    { text: " {", className: "text-slate-300" },
  ],
  [
    { text: '        print("Hello AeroLang")', className: "text-emerald-300" },
  ],
  [{ text: "    }", className: "text-slate-300" }],
  [{ text: "}", className: "text-slate-300" }],
];

export function CodeWindow() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="glass-panel overflow-hidden rounded-[28px] border border-white/12 bg-[#06101d]/80 shadow-glow">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-sm text-slate-400">main.aero</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan transition hover:border-cyan/40 hover:bg-cyan/15"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="grid gap-0 bg-[linear-gradient(180deg,rgba(20,156,255,0.08),transparent_24%)] px-4 py-5 md:px-6">
        {lines.map((line, index) => (
          <div key={index} className="grid grid-cols-[36px_1fr] gap-3 py-1 font-mono text-sm md:text-[15px]">
            <span className="select-none text-right text-slate-600">{index + 1}</span>
            <code className="whitespace-pre-wrap">
              {line.map((segment) => (
                <span key={`${index}-${segment.text}`} className={segment.className}>
                  {segment.text}
                </span>
              ))}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
