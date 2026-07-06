import Link from "next/link";
import { services, windowSpecialties } from "@/data/services";
import { serviceAreas } from "@/data/site";
import { MediaPlaceholder, VideoPlaceholder } from "@/app/components/MediaPlaceholder";
import HeroVideoBackground from "@/app/components/HeroVideoBackground";
import SectionLabel from "@/app/components/SectionLabel";
import ServiceCard from "@/app/components/ServiceCard";

const GOOGLE_REVIEW_URL = "https://g.page/r/Cavpt8wdrTT4EAE/review";

const trustBadges = [
  "Fully Insured",
  "5.0 Google Rating",
  "Streak-Free Guarantee",
  "Brisbane",
];

const stats = [
  { value: "5.0", label: "Average Google rating" },
  { value: "500+", label: "Homes cleaned" },
  { value: "100%", label: "Satisfaction guarantee" },
  { value: "5", label: "Specialist services" },
];

const whyAuswork = [
  {
    title: "Detail is the whole job",
    description:
      "Glass, frames, tracks, sills and flyscreens. We clean what others call \"extra\" as standard, every single visit.",
  },
  {
    title: "Insured & accountable",
    description:
      "Fully insured, fully trained crews, and a satisfaction guarantee that means we come back free if it's not perfect.",
  },
  {
    title: "Genuinely good people",
    description:
      "On time, tidy, friendly and a little bit fun. The kind of crew you're happy to find on the driveway every quarter.",
  },
  {
    title: "Pure-water finish",
    description:
      "Deionised water dries spot-free with no chemicals — better for your glass, your plants and the river.",
  },
  {
    title: "On time, every time",
    description:
      "We text when we're on the way and turn up in the window we promised. Your day doesn't revolve around us.",
  },
  {
    title: "Set & forget plans",
    description:
      "Recurring memberships keep the place shining year-round and save you up to $100 a clean. We just show up.",
  },
];

function GoogleStar() {
  return (
    <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero with video background */}
      <section className="relative min-h-[88vh] overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <HeroVideoBackground />
        <div className="relative mx-auto max-w-5xl">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm transition hover:bg-white/20"
          >
            <span className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <GoogleStar key={i} />
              ))}
            </span>
            <span className="text-sm font-medium text-white">5.0 stars on Google</span>
          </a>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
            Dirty windows?
            <br />
            Not on our watch.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90 drop-shadow-md sm:text-xl">
            Dirty windows don&apos;t stand a chance on our watch. Streak-free, spotless glass for
            Brisbane&apos;s finest homes — every pane done right and guaranteed.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-sky-700"
            >
              Get My Free Quote
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <SectionLabel>What to expect</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              The clean you&apos;ll actually notice.
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Watch how we work, and see exactly why your neighbours keep calling us back. No
              shortcuts, no streaks, no mess left behind.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Uniformed, professional crews who treat your home like theirs",
                "Pure-water poles reach three storeys without a single ladder mark",
                "Tracks, frames and flyscreens detailed — not just the glass",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/AboutUs"
              className="mt-8 inline-block text-sm font-semibold text-sky-600 hover:text-sky-700"
            >
              How We Work →
            </Link>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder label="Photo coming soon" />
            <div>
              <p className="mb-2 text-sm font-semibold text-zinc-500">Watch the crew in action</p>
              <VideoPlaceholder label="Video coming soon" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-zinc-200 bg-zinc-900">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-sky-400 sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialist services pills */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 px-4 sm:px-6">
          {windowSpecialties.map((s) => (
            <span
              key={s.slug}
              className="rounded-full border border-sky-200 bg-white px-5 py-2 text-sm font-medium text-sky-800 shadow-sm"
            >
              {s.title}
            </span>
          ))}
        </div>
      </section>

      {/* Core services */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <SectionLabel>Our core services</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Every kind of window, handled.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              Interior and exterior glass, tracks, screens and pool glass. Everything that makes your
              windows shine, handled by the same detail-obsessed team.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why streak-free matters */}
      <section className="border-t border-zinc-200 bg-sky-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-24">
          <SectionLabel>Why streak-free matters</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            We keep watch so you never have to.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Dirty windows do more than dull your view. Left unchecked, salt air, pollen and
            Brisbane&apos;s hard water bake mineral spots and grime into the glass that get harder to
            shift every month. That is exactly why streak-free cleaning matters, and why we keep
            watch over the details other cleaners skip.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Our pure-water system lifts build-up without harsh chemicals, protecting the glass,
            frames, seals and screens alike. Whether you book a one-off visit or a recurring cleaning
            plan, every clean is finished to the same spotless standard and backed by our guarantee.
            From riverfront homes in New Farm to bayside terraces in Wynnum, we keep windows shining
            across Greater Brisbane all year.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-block font-semibold text-sky-600 hover:text-sky-700"
          >
            Explore our full range of window services →
          </Link>
        </div>
      </section>

      {/* Why Auswork */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <SectionLabel>Why Auswork</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Tradies you&apos;ll actually
              <br className="hidden sm:block" /> be happy to have over.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyAuswork.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-sky-300 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <SectionLabel>Save big with</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Auswork Memberships
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              Stay spotless year-round and pocket the savings. Pick the rhythm that fits your home,
              and cancel anytime.
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Prices shown are savings per service vs one-off pricing.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              {
                name: "Quarterly",
                saving: "25% off",
                perks: ["Best value", "Priority scheduling", "Consistent shine"],
              },
              {
                name: "Bi-Annual",
                saving: "15% off",
                perks: ["Great savings", "Seasonal coverage", "Flexible dates"],
              },
              {
                name: "One-off",
                saving: "Standard",
                perks: ["No commitment", "Book when you need", "Same quality service"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="flex w-[300px] flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-500 hover:shadow-md"
              >
                <h3 className="text-center text-2xl font-bold uppercase tracking-wide text-sky-700">
                  {plan.name}
                </h3>
                <p className="mt-4 text-center text-4xl font-bold text-zinc-900">{plan.saving}</p>
                <p className="text-center text-xs uppercase tracking-wide text-zinc-500">
                  per cleaning
                </p>
                <ul className="mt-6 flex flex-1 flex-col items-center space-y-3 text-zinc-700">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <span className="text-sky-500">✓</span> {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 block w-full rounded-full bg-sky-600 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white hover:bg-sky-700"
                >
                  Get a quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <MediaPlaceholder label="Team photo coming soon" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Local · Owned &amp; operated
            </p>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              A window business built on the details.
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Auswork started with a simple idea: do the job properly and treat people well. Today
              we&apos;re a full window-cleaning crew trusted across Greater Brisbane, but the obsession
              with detail hasn&apos;t changed.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {["Friendly local crews", "Eco pure-water systems", "Satisfaction guarantee"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-800"
                  >
                    {tag}
                  </li>
                )
              )}
            </ul>
            <Link
              href="/AboutUs"
              className="mt-8 inline-block rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:py-24">
          <SectionLabel>Don&apos;t take our word for it</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Loved across Brisbane
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-white p-6"
              >
                <span className="text-sm font-medium text-zinc-400">Review coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:py-24">
          <SectionLabel>Proudly serving</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Across Brisbane, and a little beyond.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            From New Farm to Sandgate, Mount Gravatt to the Gold Coast. Find your area below for
            local pricing and availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2 text-sm font-medium text-zinc-700 shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-200 bg-sky-600">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <SectionLabel>
            <span className="text-sky-200">Let&apos;s do this</span>
          </SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Book your clean today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sky-100">
            We&apos;re so confident in our work that if you&apos;re not 100% happy, we&apos;ll
            re-clean it free. Sound fair? Get a no-obligation quote in under a minute.
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

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-zinc-500 sm:px-6">
          © {new Date().getFullYear()} Auswork. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
