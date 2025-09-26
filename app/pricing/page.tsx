import type { Metadata } from "next";
import Link from "next/link";
import { pricingPackages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Pricing — Stanislav DariDai",
  description:
    "Service tiers and bespoke scoring options from composer Stanislav DariDai for tabletop RPGs and narrative media.",
};

export default function PricingPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
          Services
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Tailored scores for every story
        </h1>
        <p className="max-w-2xl text-base text-slate-300">
          Every commission is built around your narrative and production needs. The
          tiers below outline starting points; final estimates depend on scope,
          complexity, and deliverables.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {pricingPackages.map((pkg) => (
          <article
            key={pkg.id}
            className="flex h-full flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-100">
                {pkg.name}
              </h2>
              <p className="text-base font-medium text-slate-200">
                {pkg.price}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {pkg.deliveryTime}
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-slate-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {pkg.note ? (
              <p className="text-xs text-slate-400">{pkg.note}</p>
            ) : null}
            <div className="mt-auto flex gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Request a quote
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
        <h2 className="text-xl font-semibold text-slate-100">
          Looking for something different?
        </h2>
        <p className="text-sm text-slate-300">
          I also collaborate on sound logos, implementation consulting, and
          long-form ambient soundscapes. Share your brief and we&apos;ll map out the
          audio journey together.
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
