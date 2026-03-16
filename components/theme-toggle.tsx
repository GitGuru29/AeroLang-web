"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const storageKey = "aerolang-theme";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const nextTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;

    applyTheme(nextTheme);
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  function handleToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle color mode"}
      onClick={handleToggle}
      className="theme-toggle"
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === "dark" ? "☀" : "☾"}
      </span>
      <span className="theme-toggle-label">{mounted ? `${theme === "dark" ? "Light" : "Dark"} mode` : "Theme"}</span>
    </button>
  );
}
