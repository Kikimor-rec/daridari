import Image from "next/image";
import { AnimatedCard, AnimatedButton } from "./animations";
import type { PortfolioItem } from "@/lib/data";

type PortfolioCardProps = {
  item: PortfolioItem;
};

const COLLECTION_LABELS: Record<PortfolioItem["collection"], string> = {
  "fables-monster": "Fables Monster",
  personal: "Personal release",
};

const PROJECT_IMAGES: Record<string, string> = {
  "lost-mark": "/images/lost-mark.svg",
  "holiday-audit-kramp": "/images/holiday-audit.svg",
  "aurora-drift": "/images/aurora-drift.svg",
  "echoes-of-the-rift": "/images/echoes-rift.svg",
};

export function PortfolioCard({ item }: PortfolioCardProps) {
  const badgeLabel = COLLECTION_LABELS[item.collection] ?? "Portfolio";
  const hasMedia = item.mediaUrl && item.mediaUrl !== "#";
  const actionText = item.actionLabel ?? "Listen";
  const imageUrl = PROJECT_IMAGES[item.id] || "/images/aurora-drift.svg";

  return (
    <AnimatedCard className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:border-slate-600 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-slate-900/20">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-200">
          <span className="rounded-full bg-slate-950/60 px-3 py-1 backdrop-blur-sm">
            {badgeLabel}
          </span>
          {item.year ? (
            <span className="rounded-full bg-slate-950/60 px-3 py-1 backdrop-blur-sm">
              {item.year}
            </span>
          ) : null}
        </div>
      </div>
      
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-100 transition-colors group-hover:text-white">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-300">
            {item.description}
          </p>
        </div>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-slate-700 px-3 py-1 uppercase tracking-[0.25em] transition-colors group-hover:border-slate-600">
              {item.category}
            </span>
            {item.client ? <span>Client: {item.client}</span> : null}
          </div>
          
          {hasMedia ? (
            <AnimatedButton
              href={item.mediaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-slate-100 to-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:from-white hover:to-slate-100 hover:shadow-lg hover:shadow-slate-100/20"
            >
              {actionText}
              <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </AnimatedButton>
          ) : null}
        </div>
      </div>
    </AnimatedCard>
  );
}
