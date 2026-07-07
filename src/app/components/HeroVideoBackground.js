"use client";

import { pagePhotos } from "@/data/images";

/**
 * Full-bleed autoplay hero background.
 * Video: public/video/hero.mp4 (stock footage, no branded logos).
 */
export default function HeroVideoBackground({
  src = "/video/hero.mp4",
  poster = pagePhotos.heroPoster.src,
}) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
    </div>
  );
}
