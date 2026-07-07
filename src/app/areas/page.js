import Link from "next/link";
import Image from "next/image";
import { areas } from "@/data/areas";
import { pagePhotos } from "@/data/images";
import SectionLabel from "@/app/components/SectionLabel";

export const metadata = {
  title: "Service Areas | Auswork Brisbane",
  description:
    "Window cleaning across Greater Brisbane — Inner Brisbane, Northside, Southside, Bayside, Western Suburbs and the Gold Coast.",
};

export default function AreasPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 opacity-45">
          <Image src={pagePhotos.servicesHero} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionLabel>
            <span className="text-sky-300">Proudly serving</span>
          </SectionLabel>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Across Brisbane, and a little beyond.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            From New Farm to Sandgate, Mount Gravatt to the Gold Coast. Find your area below for
            local pricing and availability.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {areas.map((area) => (
            <article
              key={area.slug}
              id={area.slug}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-zinc-900">{area.name}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
                  >
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
