import Link from "next/link";
import { services } from "@/data/services";
import SectionLabel from "@/app/components/SectionLabel";
import ServiceCard from "@/app/components/ServiceCard";
import HowItWorks from "@/app/components/HowItWorks";
import MembershipPlans from "@/app/components/MembershipPlans";
import ReviewsSection from "@/app/components/ReviewsSection";
import { MediaPlaceholder } from "@/app/components/MediaPlaceholder";

export const metadata = {
  title: "Services, Window, Track, Screen & Pool Glass Cleaning | Auswork",
  description:
    "Five specialist window-cleaning services across Greater Brisbane: interior, exterior, track, screen and pool glass cleaning.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 opacity-40">
          <MediaPlaceholder label="" aspect="aspect-auto h-full min-h-[420px] rounded-none border-0" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <nav className="mb-6 text-sm text-white/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Everything that makes your windows shine.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90 sm:text-xl">
            Five specialist window services, one detail-obsessed crew. From interior glass to pool
            fencing, we sweat every pane, track and screen.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-sky-600"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <SectionLabel>Our services</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Every kind of window, handled
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              Tap any service for the full details, what&apos;s included and local pricing.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <MembershipPlans />
      <ReviewsSection />

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-sky-600">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <SectionLabel>
            <span className="text-sky-200">Let&apos;s do this</span>
          </SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sky-100">
            Tell us about your place and we&apos;ll recommend the right clean, no pressure, no
            obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-bold text-sky-700 hover:bg-sky-50"
            >
              Get My Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
