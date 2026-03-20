import type { Metadata } from "next";
import { CursorOrb } from "@/components/cursor-orb";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteUrl } from "@/app/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AeroLang - Native Performance Android Development",
    template: "%s | AeroLang",
  },
  description:
    "Experimental programming language focused on improving Android performance and reducing JVM overhead.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "AeroLang - Native Performance Android Development",
    description:
      "Experimental programming language focused on improving Android performance and reducing JVM overhead.",
    url: "https://aero-lang-web.vercel.app/",
    siteName: "AeroLang",
    images: [{ url: "/logo.png", width: 1068, height: 1078, alt: "AeroLang logo" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AeroLang - Native Performance Android Development",
    description:
      "Experimental programming language focused on improving Android performance and reducing JVM overhead.",
    images: ["/logo.png"],
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
