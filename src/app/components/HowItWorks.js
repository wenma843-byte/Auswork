import SectionLabel from "./SectionLabel";
import { howItWorksSteps } from "@/data/content";

export default function HowItWorks({ className = "bg-zinc-50" }) {
  return (
    <section className={`border-t border-zinc-200 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Four steps to spotless
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="text-3xl font-extrabold text-sky-500">{item.step}</p>
              <h3 className="mt-4 text-lg font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
