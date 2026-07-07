import Link from "next/link";
import ReviewsSection from "@/app/components/ReviewsSection";
import PageHero from "@/app/components/PageHero";

export const metadata = {
  title: "Reviews | Auswork Brisbane",
  description: "See why Brisbane homeowners love Auswork window cleaning. 5-star rated service.",
};

export default function ReviewsPage() {
  return (
    <div>
      <PageHero
        variant="yellow"
        label="5-star service"
        title="Loved across Brisbane"
        description="Real reviews from real Brisbane homeowners. See why neighbours keep calling us back."
      />

      <ReviewsSection className="bg-white" />

      <section className="border-t border-zinc-200 bg-sky-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready for spotless windows?</h2>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50"
          >
            Get My Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
