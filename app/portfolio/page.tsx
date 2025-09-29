import type { Metadata } from "next";
import Link from "next/link";
import { portfolioItems } from "@/lib/data";
import { PortfolioCard } from "@/components/portfolio-card";

const LINKTREE_URL = "https://linktr.ee/stanislavdaridai";
const BANDCAMP_URL = "https://daridai.bandcamp.com/album/lost-mark-ost";
const SOUNDCLOUD_URL = "https://soundcloud.com/daridai/tracks";
const ITCH_URL = "https://itch.io/profile/zajigalka";
const FABLES_URL = "https://fables.monster";

export const metadata: Metadata = {
  title: "Works — Stanislav DariDai",
  description:
    "Selected projects and personal releases by composer Stanislav DariDai, featuring tabletop RPG scores and ambient collaborations.",
};

const fablesItems = portfolioItems.filter(
  (item) => item.collection === "fables-monster",
);
const personalItems = portfolioItems.filter(
  (item) => item.collection === "personal",
);

export default function PortfolioPage() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
          Works
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Soundtracks &amp; soundscapes
        </h1>
        <p className="max-w-2xl text-base text-slate-300">
          A glimpse into the narrative-driven worlds I score — from in-house
          tabletop RPG adventures at Fables Monster Studio to personal ambient
          releases and collaborations. I&apos;m currently remastering older works,
          so expect fresh selections soon.
        </p>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
            Fables Monster projects
          </h2>
          <p className="text-sm text-slate-300">
            In-house compositions for tabletop RPG one-shots and campaigns,
            designed hand-in-hand with our narrative team.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {fablesItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
        <p className="text-xs text-slate-500">
          Want to learn more about the studio? Visit{" "}
          <a
            className="text-slate-200 underline decoration-slate-500/40 underline-offset-4 transition hover:decoration-slate-200"
            href={FABLES_URL}
            target="_blank"
            rel="noreferrer"
          >
            fables.monster ↗
          </a>{" "}
          or explore narrative experiments on{" "}
          <a
            className="text-slate-200 underline decoration-slate-500/40 underline-offset-4 transition hover:decoration-slate-200"
            href={ITCH_URL}
            target="_blank"
            rel="noreferrer"
          >
            itch.io ↗
          </a>
          .
        </p>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
            Music &amp; collaborations
          </h2>
          <p className="text-sm text-slate-300">
            Atmospheric guitar explorations, ambient textures and experimental
            sound design shared with collaborators.
          </p>
        </header>
        <div className="space-y-3">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/50 p-2 backdrop-blur-sm">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent" />
            <iframe
              title="Lost Mark OST playlist on SoundCloud"
              width="100%"
              height="420"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              className="h-[300px] w-full rounded-2xl border border-slate-800/60 bg-black md:h-[420px]"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2052954915&color=%231b1516&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          </div>
          <p className="text-xs text-slate-400">
            Featuring <a className="text-slate-200 underline decoration-slate-500/40 underline-offset-4 transition hover:decoration-slate-200" href="https://soundcloud.com/daridai" target="_blank" rel="noreferrer">Dari Dai</a>
            {" "}
            ·
            {" "}
            <a className="text-slate-200 underline decoration-slate-500/40 underline-offset-4 transition hover:decoration-slate-200" href="https://soundcloud.com/daridai/sets/lost-mark-ost" target="_blank" rel="noreferrer">Lost Mark OST</a>
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {personalItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <a
            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-slate-200"
            href={BANDCAMP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Bandcamp album
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
            href={SOUNDCLOUD_URL}
            target="_blank"
            rel="noreferrer"
          >
            SoundCloud playlist
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
            href={LINKTREE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Linktree hub
          </a>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
            href="/contact"
          >
            Start a collaboration
          </Link>
        </div>
      </section>
    </div>
  );
}
