"use client";

import Link from "next/link";
import { useServices } from "@/hooks/useServices";
import ServiceCard from "@/app/components/ServiceCard";

export default function AboutUs() {
  const services = useServices();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-sky-600">
          Who we are
        </p>
        <h1 className="mt-3 text-center text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          A window business built on the details.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600">
          Auswork offers professional window cleaning for homes and businesses across Brisbane. Every
          job includes streak-free glass, detailed tracks and frames, and a satisfaction guarantee.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-sky-600 px-6 py-3 text-sm font-medium text-white hover:bg-sky-700"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
