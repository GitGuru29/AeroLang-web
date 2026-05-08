"use client";

import { useEffect, useMemo, useState } from "react";

const snippets = [
  {
    tab: "main.aero",
    label: "Activity entry",
    lines: [
      { text: "activity", className: "text-cyan" },
      { text: " SensorApp", className: "text-white" },
      { text: " {\n    var", className: "text-cyan" },
      { text: " sensors: ", className: "text-white" },
      { text: "SensorManager", className: "text-sky-300" },
      { text: "\n\n    fun", className: "text-cyan" },
      { text: " onCreate", className: "text-white" },
      { text: "() {\n        sensors = ", className: "text-slate-300" },
      { text: "SensorManager()", className: "text-sky-300" },
      { text: "\n        showToast(", className: "text-slate-300" },
      { text: '"Ready"', className: "text-emerald-300" },
      { text: ")\n    }\n}", className: "text-slate-300" },
    ],
  },
  {
    tab: "ui.aero",
    label: "Native UI",
    lines: [
      { text: "fun", className: "text-cyan" },
      { text: " setupUI", className: "text-white" },
      { text: "() {\n    val", className: "text-cyan" },
      { text: " layout = ", className: "text-white" },
      { text: "LinearLayout(Orientation::VERTICAL)", className: "text-sky-300" },
      { text: "\n    layout.addView(", className: "text-slate-300" },
      { text: "TextView(", className: "text-sky-300" },
      { text: '"AeroLang"', className: "text-emerald-300" },
      { text: ")", className: "text-sky-300" },
      { text: ")\n    setContentView(layout)\n}", className: "text-slate-300" },
    ],
  },
  {
    tab: "build.aero",
    label: "Build graph",
    lines: [
      { text: "target", className: "text-cyan" },
      { text: " android-arm64", className: "text-sky-300" },
      { text: "\n", className: "text-slate-300" },
      { text: "optimize", className: "text-cyan" },
      { text: " release-safe", className: "text-white" },
      { text: "\n", className: "text-slate-300" },
      { text: "source", className: "text-cyan" },
      { text: ' "examples/HelloWorld.aero"', className: "text-emerald-300" },
      { text: "\n", className: "text-slate-300" },
      { text: "emit", className: "text-cyan" },
      { text: " native-apk", className: "text-white" },
    ],
  },
];

const typingIntervalMs = 32;
const snippetCycleMs = 5200;

export function HeroSnippet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);

  const activeSnippet = snippets[activeIndex];
  const fullText = useMemo(
    () => activeSnippet.lines.map((segment) => segment.text).join(""),
    [activeSnippet],
  );

  useEffect(() => {
    setVisibleChars(0);
  }, [activeIndex]);

  useEffect(() => {
    if (visibleChars >= fullText.length) {
      const timeout = window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % snippets.length);
      }, snippetCycleMs);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setVisibleChars((count) => count + 1);
    }, typingIntervalMs);

    return () => window.clearTimeout(timeout);
  }, [fullText.length, visibleChars]);

  let remainingChars = visibleChars;

  return (
    <div className="glass-panel overflow-hidden rounded-[30px] border border-white/12 bg-[#06101d]/80 shadow-glow">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex gap-2 text-xs uppercase tracking-[0.25em] text-slate-500">
            {snippets.map((snippet, index) => (
              <button
                key={snippet.tab}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-2 py-1 transition ${index === activeIndex ? "bg-cyan/10 text-cyan" : "text-slate-500 hover:text-slate-300"
                  }`}
              >
                {snippet.tab}
              </button>
            ))}
          </div>
        </div>
        <span className="text-xs uppercase tracking-[0.25em] text-slate-500">{activeSnippet.label}</span>
      </div>
      <div className="grid gap-0 bg-[linear-gradient(180deg,rgba(20,156,255,0.08),transparent_24%)] px-4 py-5 md:px-6">
        <div className="grid grid-cols-[32px_1fr] gap-3 font-mono text-sm md:text-[15px]">
          <span className="select-none text-right text-slate-600">1</span>
          <code className="whitespace-pre-wrap">
            {activeSnippet.lines.map((segment, index) => {
              const chunk = segment.text.slice(0, Math.max(0, remainingChars));
              remainingChars -= chunk.length;

              return chunk ? (
                <span key={`${activeSnippet.tab}-${index}`} className={segment.className}>
                  {chunk}
                </span>
              ) : null;
            })}
            <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-cyan align-middle" />
          </code>
        </div>
      </div>
    </div>
  );
}
