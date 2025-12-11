import type { Metadata } from "next";
import { Poppins, Inter, VT323 } from "next/font/google";
import "./globals.css";

const display = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// Pixel font for small accents (use sparingly)
const pixel = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: {
    default: "Asmara Vianti El Gracia — Portfolio",
    template: "%s — Asmara Vianti El Gracia",
  },
  description:
    "ML + biomedical signal processing and full‑stack development with a cozy touch.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Asmara Vianti El Gracia — Portfolio",
    description:
      "ML + biomedical signal processing and full‑stack development with a cozy touch.",
    type: "website",
    url: "https://example.com",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${pixel.variable} antialiased`}>
        <div className="min-h-dvh flex flex-col">
          <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b border-[--color-border] scallop">
            <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
              <a href="/" className="font-[family:var(--font-display)] text-base/none">
                <span className="px-3 py-1 rounded-[12px] border border-[--color-border] bg-[--color-card] shadow-sm">AVG</span>
              </a>
              <div className="flex items-center gap-2">
                <a className="pill px-3 py-1 text-sm hover:shadow-md transition-shadow" href="/work">Work</a>
                <a className="pill px-3 py-1 text-sm hover:shadow-md transition-shadow" href="/research">Research</a>
                <a className="pill px-3 py-1 text-sm hover:shadow-md transition-shadow" href="/playground">Playground</a>
                <a className="pill px-3 py-1 text-sm hover:shadow-md transition-shadow" href="/notes">Notes</a>
                <a className="pill px-3 py-1 text-sm hover:shadow-md transition-shadow" href="/about">About</a>
                <a className="pill px-3 py-1 text-sm hover:shadow-md transition-shadow" href="/contact">Contact</a>
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[--color-border] mt-12">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[--color-muted] flex items-center justify-between">
              <span>© {new Date().getFullYear()} Asmara Vianti El Gracia</span>
              <div className="flex gap-4">
                <a href="/cv" className="hover:underline">CV</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
