"use client";

/**
 * Full-bleed autoplay hero background, matching dirtyshine.com.au hero video pattern.
 * Place your file at public/video/hero.mp4 (optional poster at public/video/hero-poster.jpg).
 */
export default function HeroVideoBackground({
  src = "/video/hero.mp4",
  poster = "/video/hero-poster.jpg",
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
