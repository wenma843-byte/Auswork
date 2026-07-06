import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex aspect-[16/10] overflow-hidden rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-100 shadow-sm transition hover:border-sky-300 hover:shadow-md"
    >
      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-zinc-400">
        Photo coming soon
      </span>
      <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <span className="absolute bottom-0 left-0 right-0 p-6">
        <span className="flex items-start justify-between gap-3">
          <span className="block text-xl font-bold text-white">{service.name}</span>
          <span className="text-white/80 transition group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
        <span className="mt-2 block text-sm text-white/85">{service.blurb}</span>
      </span>
    </Link>
  );
}
