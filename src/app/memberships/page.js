import Link from "next/link";
import MembershipPlans from "@/app/components/MembershipPlans";
import PageHero from "@/app/components/PageHero";

export const metadata = {
  title: "Memberships | Auswork Brisbane",
  description:
    "Save up to $100 a clean with Auswork recurring window cleaning memberships across Greater Brisbane.",
};

export default function MembershipsPage() {
  return (
    <div>
      <PageHero
        variant="blue"
        label="Save year-round"
        title="Auswork Memberships"
        description="Stay spotless year-round and pocket the savings. Pick the rhythm that fits your home, and cancel anytime."
      />

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
