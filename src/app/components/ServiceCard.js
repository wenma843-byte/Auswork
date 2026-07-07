import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service, image }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 shadow-md transition hover:shadow-xl"
    >
      {image ? (
        <Image
          src={image}
          alt={service.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-zinc-400">
          Photo coming soon
        </span>
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition duration-300 group-hover:from-black/90 group-hover:via-black/50" />
      <span className="absolute bottom-0 left-0 right-0 p-6">
        <span className="flex items-start justify-between gap-3">
          <span className="block text-xl font-bold text-white">{service.name}</span>
          <span
            className="text-white/80 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
            aria-hidden
          >
            →
          </span>
        </span>
        <span className="mt-2 block max-h-0 overflow-hidden text-sm leading-relaxed text-white/95 opacity-0 transition-all duration-300 ease-out group-hover:max-h-24 group-hover:opacity-100">
          {service.blurb}
        </span>
      </span>
    </Link>
  );
}

export function PageHeroImage({ image, alt = "" }) {
  return (
    <div className="absolute inset-0">
      <Image src={image} alt={alt} fill className="object-cover" priority sizes="100vw" />
    </div>
  );
}
