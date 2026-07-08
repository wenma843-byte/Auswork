import Link from "next/link";
import { areas } from "@/data/areas";
import PageHero from "@/app/components/PageHero";

function LocationPin({ className = "h-5 w-5" }) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export const metadata = {
  title: "Service Areas | Auswork Brisbane",
  description:
    "Window cleaning across Greater Brisbane — Inner Brisbane, Northside, Southside, Bayside and Western Suburbs.",
};

export default function AreasPage() {
  return (
    <div>
      <PageHero
        variant="yellow"
        label="Proudly serving"
        title="Across Brisbane, and a little beyond."
        description="From New Farm to Sandgate and Mount Gravatt. Find your area below for local pricing and availability."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {areas.map((area) => (
            <article
              key={area.slug}
              id={area.slug}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm"
            >
              <h2 className="text-xl font-bold text-zinc-900">{area.name}</h2>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {area.suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
                  >
                    <LocationPin className="h-3.5 w-3.5 text-[var(--auswork-yellow)]" />
                    {suburb}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
          <iframe
            title="Auswork service area map — Brisbane"
            src="https://maps.google.com/maps?q=Brisbane%20QLD&z=10&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-zinc-600">Not sure if we cover your suburb?</p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
