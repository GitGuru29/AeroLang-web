"use client";

import { useEffect, useMemo, useState } from "react";

const exampleSnippets = {
  hello: `module main

fun main() {
    print("Hello AeroLang")
}`,
  variables: `module main

fun main() {
    let version = "0.1.0-alpha"
    let target = "android-arm64"

    print(version)
    print(target)
}`,
  functions: `module main

fun add(a: Int, b: Int) -> Int {
    return a + b
}

fun main() {
    print(add(7, 5))
}`,
  android: `module app

fun main() {
    let device = Android.current()
    let engine = Aero.init(device)

    engine.launch {
        print("Booting on " + device.model)
    }
}`,
} as const;

type ExampleKey = keyof typeof exampleSnippets;
type Status = "Compiler Ready" | "Running..." | "Execution Complete";
type Panel = "errors" | "tokens" | "ast" | "compile";

const exampleMeta: Array<{ key: ExampleKey; label: string }> = [
  { key: "hello", label: "Hello World" },
  { key: "variables", label: "Variables" },
  { key: "functions", label: "Functions" },
  { key: "android", label: "Android Demo" },
];

export function PlaygroundShell({ compact = false }: { compact?: boolean }) {
  const [selectedExample, setSelectedExample] = useState<ExampleKey>("android");
  const [code, setCode] = useState<string>(exampleSnippets.android);
  const [status, setStatus] = useState<Status>("Compiler Ready");
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");
  const [output, setOutput] = useState<string[]>([
    "[compiler] AeroLang compiler ready",
    "[runtime] Waiting for execution",
  ]);
  const [activePanel, setActivePanel] = useState<Panel>("compile");

  useEffect(() => {
    const hash = window.location.hash;
    const encoded = hash.startsWith("#code=") ? hash.slice(6) : "";

    if (!encoded) {
      const storedCode = window.localStorage.getItem("aerolang-playground-code");
      const storedExample = window.localStorage.getItem("aerolang-playground-example") as ExampleKey | null;

      if (storedCode) {
        setCode(storedCode);
      }

      if (storedExample && storedExample in exampleSnippets) {
        setSelectedExample(storedExample);
      }

      return;
    }

    try {
      const decoded = window.atob(encoded);

      if (decoded.trim().length > 0) {
        setCode(decoded);
        setSelectedExample("hello");
        setOutput(["[share] Loaded code from URL", "[runtime] Waiting for execution"]);
      }
    } catch {
      setOutput(["[share] Failed to decode shared URL", "[runtime] Waiting for execution"]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("aerolang-playground-code", code);
    window.localStorage.setItem("aerolang-playground-example", selectedExample);
  }, [code, selectedExample]);

  function handleLoadExample(key: ExampleKey) {
    setSelectedExample(key);
    setCode(exampleSnippets[key]);
    setStatus("Compiler Ready");
    setOutput([
      `[compiler] Loaded example: ${key}`,
      "[runtime] Waiting for execution",
    ]);
  }

  function handleRun() {
    setStatus("Running...");

    const lines = code.split("\n");
    const hasPrint = code.includes("print(");
    const hasAndroid = code.includes("Android.current()");
    const tokenCount = code
      .replace(/[^\w]+/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    window.setTimeout(() => {
      setStatus("Execution Complete");
      setOutput([
        "[compiler] Build target: android-arm64",
        `[compiler] Lines analyzed: ${lines.length}`,
        `[compiler] Tokens emitted: ${tokenCount}`,
        hasAndroid ? "[runtime] Android bridge initialized" : "[runtime] Standard runtime initialized",
        hasPrint ? '[stdout] "Hello AeroLang"' : "[stdout] Execution finished",
      ]);
    }, 640);
  }

  function handleClear() {
    setCode("");
    setStatus("Compiler Ready");
    setOutput([
      "[compiler] Editor cleared",
      "[runtime] Waiting for execution",
    ]);
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setOutput((current) => ["[clipboard] Source copied", ...current].slice(0, 6));
  }

  async function handleShare() {
    const shareUrl = `${window.location.origin}${window.location.pathname}#code=${window.btoa(code)}`;
    await navigator.clipboard.writeText(shareUrl);
    window.history.replaceState(null, "", `#code=${window.btoa(code)}`);
    setShareState("copied");
    setOutput((current) => ["[share] Share URL copied", ...current].slice(0, 6));
    window.setTimeout(() => setShareState("idle"), 1400);
  }

  function handleExport() {
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = `${selectedExample}.aero`;
    anchor.click();
    URL.revokeObjectURL(url);
    setOutput((current) => ["[export] Downloaded .aero file", ...current].slice(0, 6));
  }

  const diagnostics = useMemo(() => {
    const lines = code.split("\n");
    const tokenCount = code
      .replace(/[^\w]+/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    return {
      errors: code.trim().length === 0 ? ["editor is empty"] : ["no syntax errors detected"],
      tokens: [`${tokenCount} tokens`, `${lines.length} lines`, `${selectedExample} example loaded`],
      ast: ["Module(main)", "Function(main)", "Call(print)"],
      compile: [status, "target android-arm64", "optimizer: release-safe"],
    };
  }, [code, selectedExample, status]);

  return (
    <div className="glass-panel overflow-hidden rounded-[32px] border border-white/12 bg-[#06101d]/80 shadow-glow">
      <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan">AeroLang Playground</p>
          <p className="mt-2 text-sm text-slate-400">Serious editor workflow with compiler logs and runtime output.</p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-500">
            Simulated runtime in-browser. Use the VS Code workflow for compiler-backed APK generation.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleRun}
            className="rounded-full bg-cyan px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#7ce9ff]"
          >
            Run
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan/30"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan transition hover:border-cyan/40"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan/30"
          >
            {shareState === "copied" ? "URL Copied" : "Share"}
          </button>
          <button
            type="button"
            onClick={handleExport}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan/30"
          >
            Export .aero
          </button>
        </div>
      </div>

      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex flex-wrap gap-2">
          {exampleMeta.map((example) => (
            <button
              key={example.key}
              type="button"
              onClick={() => handleLoadExample(example.key)}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                selectedExample === example.key
                  ? "bg-cyan/10 text-cyan"
                  : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan/20"
              }`}
            >
              {example.label}
            </button>
          ))}
          <span className="ml-auto rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-emerald-300">
            {status}
          </span>
        </div>
      </div>

      <div className={`grid ${compact ? "xl:grid-cols-[1.2fr_0.8fr]" : "xl:grid-cols-[1.35fr_0.65fr]"}`}>
        <div className="border-b border-white/10 xl:border-b-0 xl:border-r xl:border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-xs uppercase tracking-[0.25em] text-slate-500">
            <span>{selectedExample}.aero</span>
            <span>Editor</span>
          </div>
          <div className="bg-[linear-gradient(180deg,rgba(20,156,255,0.06),transparent_24%)] p-4">
            <textarea
              value={code}
              onChange={(event) => setCode(event.target.value)}
              spellCheck={false}
              className={`min-h-[300px] w-full resize-none rounded-[24px] border border-white/10 bg-[#040b14] p-5 font-mono text-sm leading-7 text-slate-200 outline-none transition focus:border-cyan/30 ${
                compact ? "xl:min-h-[260px]" : "xl:min-h-[420px]"
              }`}
            />
          </div>
        </div>

        <div className="grid">
          <div className="border-b border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-xs uppercase tracking-[0.25em] text-slate-500">
              <span>Output</span>
              <span>Terminal</span>
            </div>
            <div className={`space-y-3 bg-[#030811] p-5 font-mono text-sm text-slate-300 ${compact ? "min-h-[220px]" : "min-h-[280px]"}`}>
              {output.map((line, index) => (
                <div key={`${index}-${line}`}>{line}</div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 border-b border-white/10 px-5 py-3">
              {(["compile", "tokens", "ast", "errors"] as Panel[]).map((panel) => (
                <button
                  key={panel}
                  type="button"
                  onClick={() => setActivePanel(panel)}
                  className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] transition ${
                    activePanel === panel ? "bg-cyan/10 text-cyan" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {panel}
                </button>
              ))}
            </div>
            <div className="space-y-2 bg-[#040a12] px-5 py-4 font-mono text-xs text-slate-400">
              {diagnostics[activePanel].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
