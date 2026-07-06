import { MediaPlaceholder } from "@/app/components/MediaPlaceholder";

const PLACEHOLDER_COUNT = 8;

export const metadata = {
  title: "Gallery",
  description: "Before and after photos of our window cleaning work. See the difference we make.",
};

export default function GalleryPage() {
  return (
    <div>
      <section
        className="w-full px-4 py-16 sm:px-6 sm:py-24"
        aria-label="Gallery: before and after photos"
      >
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Before &amp; after
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            See the difference our window cleaning makes. Real results from real jobs.
          </p>
        </div>
        <div className="mx-auto mt-12 grid w-full max-w-4xl grid-cols-2 gap-4">
          {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
            <MediaPlaceholder key={i} label="Photo coming soon" aspect="aspect-square" />
          ))}
        </div>
      </section>
    </div>
  );
}
