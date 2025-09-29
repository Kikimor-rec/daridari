'use client';

import { useState } from "react";
import type { ContactRequest } from "@/lib/data";

const projectTypes = [
  "Tabletop RPG",
  "Video game",
  "Trailer / teaser",
  "Audio branding",
  "Consulting",
  "Collaboration / experience exchange",
  "Other",
];

const LINKTREE_URL = "https://linktr.ee/stanislavdaridai";
const BANDCAMP_URL = "https://daridai.bandcamp.com/album/lost-mark-ost";
const SOUNDCLOUD_URL = "https://soundcloud.com/daridai/tracks";
const ITCH_URL = "https://itch.io/profile/zajigalka";
const FABLES_URL = "https://fables.monster";
const DISCORD_HANDLE = "daridaridai";
const DIRECT_EMAILS = [
  "tayistrebitel@mail.ru",
  "tayistrebite10@gmail.ru",
];

const initialForm: ContactRequest = {
  name: "",
  email: "",
  projectType: projectTypes[0],
  budget: "",
  message: "",
};

type RequestStatus = "idle" | "loading" | "success" | "error";

type FeedbackState = { status: RequestStatus; error?: string };

export default function ContactPage() {
  const [form, setForm] = useState<ContactRequest>(initialForm);
  const [feedback, setFeedback] = useState<FeedbackState>({ status: "idle" });
  const [discordCopied, setDiscordCopied] = useState(false);

  const updateField = <K extends keyof ContactRequest>(key: K, value: ContactRequest[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.projectType.trim() || !form.message.trim()) {
      setFeedback({ status: "error", error: "Please fill in all required fields." });
      return;
    }

    setFeedback({ status: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Unable to send request right now.");
      }

      setFeedback({ status: "success" });
      setForm(initialForm);
    } catch (error) {
      setFeedback({
        status: "error",
        error: error instanceof Error ? error.message : "Unexpected error occurred.",
      });
    }
  };

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_HANDLE);
      setDiscordCopied(true);
      setTimeout(() => setDiscordCopied(false), 1500);
    } catch (error) {
      console.error("discord-copy-error", error);
      setDiscordCopied(false);
    }
  };

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Tell me about your world
        </h1>
        <p className="max-w-2xl text-base text-slate-300">
          Share a few details about your story, timeline, and sonic goals. I typically respond within two business days via email or Discord with next steps and a tailored collaboration plan.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-200">
              <span>Name *</span>
              <input
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-400/40"
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-200">
              <span>Email *</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-400/40"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-200">
            <span>Project type *</span>
            <select
              value={form.projectType}
              onChange={(event) => updateField("projectType", event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-400/40"
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm text-slate-200">
            <span>Budget (optional)</span>
            <input
              value={form.budget ?? ""}
              onChange={(event) => updateField("budget", event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-400/40"
              placeholder="Estimated range or leave blank"
            />
          </label>

          <label className="space-y-2 text-sm text-slate-200">
            <span>Project overview *</span>
            <textarea
              required
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="h-36 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-400/40"
              placeholder="Tell me about the narrative, timeline, and what you hope the music will achieve."
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">By submitting, you agree to be contacted about your project. Your details remain private.</p>
            <button
              type="submit"
              disabled={feedback.status === "loading"}
              className="inline-flex items-center justify-center rounded-full bg-slate-100 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {feedback.status === "loading" ? "Sending…" : "Send request"}
            </button>
          </div>

          {feedback.status === "success" ? (
            <p className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              Thank you! I&apos;ll reply from tayistrebitel@mail.ru / tayistrebite10@gmail.ru or reach out on Discord soon.
            </p>
          ) : null}

          {feedback.status === "error" ? (
            <p className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {feedback.error ?? "Something went wrong. Please try again."}
            </p>
          ) : null}
        </form>

        <aside className="space-y-8 rounded-3xl border border-slate-800 bg-slate-900/30 p-8 text-sm text-slate-300">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-100">Direct channels</h2>
            <ul className="space-y-2">
              {DIRECT_EMAILS.map((email) => (
                <li key={email}>
                  <a
                    className="transition hover:text-white"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex flex-wrap items-center gap-2">
                <span>Discord:</span>
                <code className="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-200">
                  {DISCORD_HANDLE}
                </code>
                <button
                  type="button"
                  onClick={handleCopyDiscord}
                  className="rounded-full border border-slate-600 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-slate-400 hover:text-white"
                >
                  {discordCopied ? "Copied" : "Copy"}
                </button>
              </li>
              <li>
                <a
                  className="transition hover:text-white"
                  href={BANDCAMP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Bandcamp ↗
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white"
                  href={SOUNDCLOUD_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  SoundCloud ↗
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white"
                  href={LINKTREE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Linktree ↗
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white"
                  href={ITCH_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  itch.io ↗
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white"
                  href={FABLES_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Fables Monster Studio ↗
                </a>
              </li>
            </ul>
            <p className="text-xs text-slate-500">
              Form submissions forward to both email addresses above. Feel free to ping me on Discord for quick syncs.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-100">Project checklist</h2>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>– Narrative summary and key characters</li>
              <li>– Desired tone / references</li>
              <li>– Timeline and delivery milestones</li>
              <li>– Technical requirements (formats, stems, implementation)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-100">Availability</h2>
            <p>
              Booking windows open 4–6 weeks in advance. Let me know if you have
              a specific launch date or event and I&apos;ll tailor the schedule.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
