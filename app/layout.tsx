import type { Metadata } from "next";
import { CursorOrb } from "@/components/cursor-orb";
import "./globals.css";

export const metadata: Metadata = {
  title: "AeroLang",
  description: "The native Android programming language.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorOrb />
        {children}
      </body>
    </html>
  );
}
