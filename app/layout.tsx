import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stanislav DariDai — Composer & Sound Designer",
  description:
    "Atmospheric music and immersive soundscapes for tabletop RPGs and narrative projects by Stanislav DariDai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
              <Link
                href="/"
                className="text-lg font-semibold tracking-wide text-slate-100 transition hover:text-slate-300"
              >
                Stanislav DariDai
              </Link>
              <nav className="flex items-center gap-6 text-sm text-slate-300">
                <Link className="transition hover:text-slate-100" href="/portfolio">
                  Works
                </Link>
                <Link className="transition hover:text-slate-100" href="/pricing">
                  Services
                </Link>
                <Link className="transition hover:text-slate-100" href="/contact">
                  Contact
                </Link>
                <a
                  className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-950 transition hover:bg-slate-200 sm:inline-flex"
                  href="https://linktr.ee/daridai"
                  target="_blank"
                  rel="noreferrer"
                >
                  Listen
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
              {children}
            </div>
          </main>

          <footer className="border-t border-slate-800">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>© {year} Stanislav DariDai. All rights reserved.</p>
              <a
                className="inline-flex items-center gap-2 transition hover:text-slate-200"
                href="https://linktr.ee/daridai"
                target="_blank"
                rel="noreferrer"
              >
                Explore more music ↗
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
