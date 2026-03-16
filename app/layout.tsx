import type { Metadata } from "next";
import { CursorOrb } from "@/components/cursor-orb";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteUrl } from "@/app/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AeroLang | Native Performance Android Development",
    template: "%s | AeroLang",
  },
  description: "AeroLang is an Android-native language direction with docs, examples, roadmap pages, and a high-fidelity playground.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "AeroLang | Native Performance Android Development",
    description:
      "Build Android applications with a Kotlin-inspired language direction focused on native execution, Android APIs, and compiler-backed tooling.",
    url: siteUrl,
    siteName: "AeroLang",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "AeroLang icon" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AeroLang | Native Performance Android Development",
    description:
      "Docs, examples, roadmap details, and a playground for the AeroLang Android-native language direction.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var storageKey = "aerolang-theme";
                var storedTheme = localStorage.getItem(storageKey);
                var systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
                var theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;
                document.documentElement.classList.toggle("light", theme === "light");
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.style.colorScheme = theme;
              })();
            `,
          }}
        />
      </head>
      <body>
        <CursorOrb />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
