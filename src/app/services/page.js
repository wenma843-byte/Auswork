import Link from "next/link";
import { services } from "@/data/services";
import { serviceImages } from "@/data/images";
import SectionLabel from "@/app/components/SectionLabel";
import PageHero from "@/app/components/PageHero";
import ServiceCard from "@/app/components/ServiceCard";
import HowItWorks from "@/app/components/HowItWorks";
import MembershipPlans from "@/app/components/MembershipPlans";
import ReviewsSection from "@/app/components/ReviewsSection";

export const metadata = {
  title: "Services, Window, Track, Screen & Pool Glass Cleaning | Auswork",
  description:
    "Five specialist window-cleaning services across Greater Brisbane: interior, exterior, track, screen and pool glass cleaning.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        variant="blue"
        breadcrumb={
          <>
            <Link href="/" className="hover:opacity-100">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Services</span>
          </>
        }
        title="Professional window cleaning across Brisbane."
        description="Interior and exterior glass, tracks, screens and pool fencing — five specialist services, one detail-obsessed crew that sweats every pane."
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-sky-700 shadow-lg transition hover:bg-sky-50"
        >
          Get a Free Quote
        </Link>
      </PageHero>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <SectionLabel>Our services</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Five services. Every detail covered.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              Tap a service below to see what&apos;s included, how we work, and get a quote for your
              home or business in Greater Brisbane.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                image={serviceImages[service.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <MembershipPlans />
      <ReviewsSection />

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
