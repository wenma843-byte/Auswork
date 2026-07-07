import Link from "next/link";
import Image from "next/image";
import MembershipPlans from "@/app/components/MembershipPlans";
import SectionLabel from "@/app/components/SectionLabel";
import { pagePhotos } from "@/data/images";

export const metadata = {
  title: "Memberships | Auswork Brisbane",
  description:
    "Save up to $100 a clean with Auswork recurring window cleaning memberships across Greater Brisbane.",
};

export default function MembershipsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 opacity-45">
          <Image src={pagePhotos.expectPhoto} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionLabel>
            <span className="text-sky-300">Save year-round</span>
          </SectionLabel>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Auswork Memberships
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Stay spotless year-round and pocket the savings. Pick the rhythm that fits your home,
            and cancel anytime.
          </p>
        </div>
      </section>

      <MembershipPlans showDetailsLink={false} />

      <section className="border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-zinc-600">
            Prices shown are savings per service vs one-off pricing. Every membership includes
            priority scheduling and the same streak-free guarantee.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Get Your Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
