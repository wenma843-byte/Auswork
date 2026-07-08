import Link from "next/link";
import SectionLabel from "./SectionLabel";
import { membershipPlans } from "@/data/content";

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function MembershipPlans({ showDetailsLink = true, className = "bg-white" }) {
  return (
    <section className={`border-t border-zinc-200 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <SectionLabel>Save year-round</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Auswork Memberships
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Stay spotless year-round and pocket the savings. Pick the rhythm that fits your home,
            and cancel anytime.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-500">
            Prices shown are savings per service vs one-off pricing.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {membershipPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex w-[300px] flex-col rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                plan.featured
                  ? "border-sky-500 bg-sky-50 ring-2 ring-sky-500"
                  : "border-zinc-200 bg-white hover:border-sky-300"
              }`}
            >
              <h3 className="text-center text-2xl font-bold uppercase tracking-wide text-sky-700">
                {plan.name}
              </h3>
              <p className="mt-4 text-center text-4xl font-bold text-zinc-900">{plan.saving}</p>
              <p className="text-center text-xs uppercase tracking-wide text-zinc-500">
                per cleaning
              </p>
              <ul className="mt-6 flex flex-1 flex-col space-y-3 text-sm text-zinc-700">
                {plan.perks.map((perk) => (
                  <li key={perk.label} className="flex items-center gap-2">
                    {perk.included ? <CheckIcon /> : <XIcon />}
                    <span className={perk.included ? "" : "text-zinc-400"}>{perk.label}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold uppercase tracking-wide text-white ${
                  plan.featured ? "bg-sky-600 hover:bg-sky-700" : "bg-sky-500 hover:bg-sky-600"
                }`}
              >
                Get Your Quote
              </Link>
            </div>
          ))}
        </div>
        {showDetailsLink && (
          <p className="mt-8 text-center">
            <Link href="/memberships" className="font-semibold text-sky-600 hover:text-sky-700">
              See full plan details →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
