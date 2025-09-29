import Image from "next/image";
import { AnimatedSection, AnimatedButton } from "@/components/animations";

const LINKTREE_URL = "https://linktr.ee/stanislavdaridai";
const BANDCAMP_URL = "https://daridai.bandcamp.com/album/lost-mark-ost";
const SOUNDCLOUD_URL = "https://soundcloud.com/daridai/tracks";
const FABLES_URL = "https://fables.monster";

export default function HomePage() {
  return (
    <div className="relative space-y-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-slate-600/10 blur-3xl" />
      </div>

      <AnimatedSection className="relative grid gap-12 rounded-3xl border border-slate-800/50 bg-slate-900/40 p-10 backdrop-blur-xl md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-14">
        <div className="space-y-8">
          <AnimatedSection delay={0.1} className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
              Welcome
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="space-y-6">
            <h1 className="bg-gradient-to-r from-slate-100 via-white to-slate-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
              Stanislav DariDai
            </h1>
            <p className="text-xl font-medium text-slate-300">
              Composer · Sound Designer · Guitarist
            </p>
            <p className="max-w-xl text-base leading-relaxed text-slate-300">
              I craft atmospheric music and immersive soundscapes for tabletop RPGs
              and other narrative-driven projects. I explore the boundaries of
              electronic music and listen to Aurora :)
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
            <AnimatedButton
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-100 to-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-slate-100/20"
            >
              Learn More
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </AnimatedButton>
            <AnimatedButton
              href={BANDCAMP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-slate-900/50 px-8 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/60 hover:text-white"
            >
              Bandcamp
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12 6.5" />
              </svg>
            </AnimatedButton>
            <AnimatedButton
              href={SOUNDCLOUD_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-slate-900/50 px-8 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/60 hover:text-white"
            >
              SoundCloud
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12 6.5" />
              </svg>
            </AnimatedButton>
            <AnimatedButton
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/30 px-8 py-3 text-sm font-semibold text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/50"
            >
              Contact
            </AnimatedButton>
          </AnimatedSection>
        </div>
        
        <AnimatedSection delay={0.4} className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl" />
          <div className="relative space-y-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                <div className="h-full w-full rounded-full bg-slate-900" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                Focus
              </h2>
            </div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3 group">
                <span className="text-lg transition-transform group-hover:scale-110">🎲</span>
                <span>Scores for tabletop RPGs and narrative media</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-lg transition-transform group-hover:scale-110">🎮</span>
                <span>Soundscapes for sci-fi, horror, and fantasy</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-lg transition-transform group-hover:scale-110">🎸</span>
                <span>Not focusing on a single genre</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </AnimatedSection>

      <AnimatedSection id="about" className="space-y-16">
        <div className="relative space-y-8">
          <AnimatedSection className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
                About
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-600 to-transparent" />
            </div>
            <h2 className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Biography
            </h2>
          </AnimatedSection>

          {/* Portrait and bio grid */}
          <div className="grid gap-12 md:grid-cols-[300px_1fr] items-start">
            <AnimatedSection delay={0.2} className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl transition-all duration-700 group-hover:blur-2xl group-hover:from-blue-500/30 group-hover:to-purple-500/30" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/60 p-2 backdrop-blur-sm">
                  <Image
                    src="/images/composer-portrait.svg"
                    alt="Stanislav DariDai"
                    width={280}
                    height={280}
                    className="h-auto w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full" />
                <p className="pl-8 text-base leading-relaxed text-slate-300">
                  I&apos;m Stanislav DariDai, a composer and sound designer who loves
                  turning stories into sound. At{" "}
                  <a 
                    className="relative inline-block text-slate-100 transition-colors hover:text-white group" 
                    href={FABLES_URL} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <span className="relative z-10">Fables Monster Studio</span>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
                  </a>{" "}
                  I&apos;m responsible for scoring our tabletop RPG adventures and designing the sonic world they inhabit.
                </p>
              </div>
              
              <p className="pl-8 text-base leading-relaxed text-slate-300">
                In my music, I combine layers of synthetic soundscapes, processed guitars, and retro synthesizers. I&apos;m developing as a musician, exploring new ways to reimagine familiar genres. I&apos;m inspired by artists from Skrillex and Lorn to Daughter and Aurora.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={0.4} className="group">
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 p-10 backdrop-blur-sm transition-all duration-500 hover:border-slate-600/60 hover:bg-slate-800/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                  Approach
                </h3>
              </div>
              <p className="text-base leading-relaxed text-slate-300">
                Every project begins with the story. I work closely with writers and
                designers to understand characters, themes and pacing, then translate
                that narrative into sound — whether it&apos;s a haunting motif for a
                space horror adventure or a serene theme for a fantasy exploration.
                My goal is to make the soundtrack feel like an additional character,
                deepening the emotional impact for players and listeners.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </AnimatedSection>

      <AnimatedSection className="space-y-12">
        <div className="space-y-6">
          <AnimatedSection className="flex items-center gap-4">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
              Works
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-600 to-transparent" />
          </AnimatedSection>
          <h2 className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Projects
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <AnimatedSection delay={0.2} className="group">
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-slate-600/60 hover:bg-slate-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    Fables Monster Projects
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  As the in-house composer for Fables Monster, I score our tabletop
                  RPGs. Recent work includes:
                </p>
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-800/50 bg-slate-900/60 p-4">
                    <h4 className="font-semibold text-slate-200">The Lost Mark</h4>
                    <p className="text-sm text-slate-400">
                      A sci-fi horror one-shot where eerie drones and unsettling textures underscore impossible choices in deep space.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800/50 bg-slate-900/60 p-4">
                    <h4 className="font-semibold text-slate-200">Holiday Audit: Kramp.exe</h4>
                    <p className="text-sm text-slate-400">
                      A festive horror adventure featuring glitchy bells and distorted synths to evoke a corrupted AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="group">
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-slate-600/60 hover:bg-slate-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-2">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    Music &amp; Collaborations
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  Outside of Fables Monster I share personal pieces and collaborations on Bandcamp and SoundCloud. These tracks explore ambient soundscapes, guitar improvisations and experimental sound design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <AnimatedButton
                    href={BANDCAMP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    Bandcamp
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </AnimatedButton>
                  <AnimatedButton
                    href={SOUNDCLOUD_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    SoundCloud
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </AnimatedButton>
                  <AnimatedButton
                    href={LINKTREE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    Linktree
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-10">
        <div className="space-y-6">
          <AnimatedSection className="flex items-center gap-4">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
              Services
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-600 to-transparent" />
          </AnimatedSection>
          <h2 className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            What I offer
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection delay={0.1} className="group">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-slate-600/60 hover:bg-slate-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300">Tabletop RPGs and video games</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="group">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-slate-600/60 hover:bg-slate-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-2">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300">Cinematic trailers and teasers</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="group">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-slate-600/60 hover:bg-slate-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v8.5l1.5 1.5A1 1 0 0120 15v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 01.5-.866L6 12.5V4a1 1 0 011-1h0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300">Audio logos and branding</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="group">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-slate-600/60 hover:bg-slate-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-2">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300">Consultation on integrating sound into narrative media</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.5} className="text-center">
          <div className="relative inline-block rounded-2xl border border-slate-700/50 bg-slate-900/60 px-8 py-4 backdrop-blur-sm">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg" />
            <p className="relative text-sm font-medium text-slate-300">
              Every commission is tailored to the story and emotions you want to evoke.
            </p>
          </div>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
}
