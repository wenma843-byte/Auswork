import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getOtherServices } from "@/data/services";
import { serviceFaqs } from "@/data/content";
import SectionLabel from "@/app/components/SectionLabel";
import ServiceCard from "@/app/components/ServiceCard";
import HowItWorks from "@/app/components/HowItWorks";
import ReviewsSection from "@/app/components/ReviewsSection";
import { MediaPlaceholder } from "@/app/components/MediaPlaceholder";

export async function generateStaticParams() {
  const { services } = await import("@/data/services");
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | Auswork" };
  return {
    title: `${service.name}, Auswork Brisbane`,
    description: `${service.blurb} ${service.name} across Greater Brisbane. Fully insured, streak-free guaranteed.`,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = getOtherServices(slug).slice(0, 4);

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
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.name}</span>
          </nav>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            {service.tagline} {service.blurb}
          </p>
          <div className="mt-8">
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-sky-600"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="relative">
            <MediaPlaceholder label="Photo coming soon" />
            <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <div>
                <p className="text-xl font-bold text-zinc-900">100%</p>
                <p className="text-xs text-zinc-500">Satisfaction guarantee</p>
              </div>
            </div>
          </div>
          <div>
            <SectionLabel>{service.short}</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {service.tagline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">{service.intro}</p>
            <div className="mt-6 rounded-xl border-l-4 border-sky-500 bg-sky-50 px-5 py-4">
              <p className="font-semibold text-zinc-800">
                <span className="text-sky-700">The result — </span>
                {service.result}
              </p>
            </div>
            <Link
              href={`/contact?service=${service.slug}`}
              className="mt-6 inline-block rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionLabel>What&apos;s included</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Every job, done properly
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            No shortcuts and no surprise extras — here&apos;s exactly what you get with our{" "}
            {service.short.toLowerCase()} service.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-medium text-zinc-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks className="bg-white" />

      {/* Other services */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <SectionLabel>Our services</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              More ways we make it shine
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              One detail-obsessed crew, bundle services and save.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {otherServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection className="bg-white" />

      {/* FAQ */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <SectionLabel>Good to know</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {service.short} questions, answered
            </h2>
          </div>
          <dl className="mt-10 space-y-4">
            {serviceFaqs.map((faq) => (
              <div key={faq.question(service.short)} className="rounded-xl border border-zinc-200 bg-white p-5">
                <dt className="font-semibold text-zinc-900">{faq.question(service.short)}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-zinc-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-sky-600">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <SectionLabel>
            <span className="text-sky-200">Let&apos;s do this</span>
          </SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{service.ctaHeading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sky-100">
            Get a no-obligation quote in under a minute, or call and chat with a real human.
          </p>
          <div className="mt-8">
            <Link
              href={`/contact?service=${service.slug}`}
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
