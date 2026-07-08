"use client";

import SectionLabel from "./SectionLabel";
import { reviews } from "@/data/content";

function StarRow({ count }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-label={`${count} stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="flex w-[min(340px,85vw)] shrink-0 flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <StarRow count={review.stars} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-3 border-t border-zinc-100 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-zinc-900">{review.name}</p>
          <p className="text-xs text-zinc-500">{review.area} · Verified</p>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsSection({ className = "bg-zinc-50" }) {
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className={`border-t border-zinc-200 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <SectionLabel>5-star service</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Loved across Brisbane
          </h2>
        </div>

        <div className="reviews-marquee mt-10" aria-label="Customer reviews carousel">
          <div className="reviews-marquee-track py-2">
            {marqueeReviews.map((review, index) => (
              <ReviewCard key={`${review.name}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
