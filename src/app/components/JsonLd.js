import { SITE } from "@/data/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: "Auswork Window Cleaning",
        description:
          "Professional window cleaning for Brisbane homes and businesses. Streak-free results, pure-water systems, tracks and screens included.",
        publisher: { "@id": `${SITE.url}/#business` },
        inLanguage: "en-AU",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#business`,
        name: "Auswork Window Cleaning",
        url: SITE.url,
        logo: `${SITE.url}/logo.png`,
        image: `${SITE.url}/logo.png`,
        telephone: SITE.phone,
        email: "info@ausworkwindowcleaning.com",
        areaServed: {
          "@type": "City",
          name: "Brisbane",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brisbane",
          addressRegion: "QLD",
          addressCountry: "AU",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE.rating,
          reviewCount: SITE.reviewCount.replace("+", ""),
        },
        sameAs: [SITE.googleReviewsUrl],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
