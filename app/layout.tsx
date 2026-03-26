import type { Metadata } from "next";
import { CursorOrb } from "@/components/cursor-orb";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteUrl } from "@/app/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AEROLANG™ - Native Performance Android Development",
    template: "%s | AEROLANG™",
  },
  description:
    "Experimental programming language focused on improving Android performance and reducing JVM overhead.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "AEROLANG™ - Native Performance Android Development",
    description:
      "Experimental programming language focused on improving Android performance and reducing JVM overhead.",
    url: "https://aero-lang-web.vercel.app/",
    siteName: "AEROLANG™",
    images: [{ url: "https://aero-lang-web.vercel.app/preview.png", width: 1200, height: 630, alt: "AEROLANG™ social preview" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEROLANG™ - Native Performance Android Development",
    description:
      "Experimental programming language focused on improving Android performance and reducing JVM overhead.",
    images: ["https://aero-lang-web.vercel.app/preview.png"],
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
        {/* Explicit OG meta tags — present in static HTML for crawlers like LinkedIn */}
        <meta property="og:title" content="AEROLANG™ - Native Performance Android Development" />
        <meta property="og:description" content="Experimental programming language focused on improving Android performance and reducing JVM overhead." />
        <meta property="og:image" content="https://aero-lang-web.vercel.app/preview.png" />
        <meta property="og:url" content="https://aero-lang-web.vercel.app/" />
        <meta property="og:type" content="website" />
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
