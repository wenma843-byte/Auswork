import Link from "next/link";
import Image from "next/image";
import ReviewsSection from "@/app/components/ReviewsSection";
import SectionLabel from "@/app/components/SectionLabel";
import { pagePhotos } from "@/data/images";

export const metadata = {
  title: "Reviews | Auswork Brisbane",
  description: "See why Brisbane homeowners love Auswork window cleaning. 5-star rated service.",
};

export default function ReviewsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 opacity-45">
          <Image src={pagePhotos.ctaBackground} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionLabel>
            <span className="text-sky-300">5-star service</span>
          </SectionLabel>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Loved across Brisbane
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Real reviews from real Brisbane homeowners. See why neighbours keep calling us back.
          </p>
        </div>
      </section>

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
