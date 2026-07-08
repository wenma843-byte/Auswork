import Image from "next/image";
import Link from "next/link";
import ausworkLogo from "@/auswork_Logo.png";
import { SITE } from "@/data/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/memberships", label: "Memberships" },
  { href: "/reviews", label: "Reviews" },
];

function PhoneIcon({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-4 pt-4 sm:px-8 sm:pt-6">
      <nav
        className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white/85 px-4 py-4 shadow-lg shadow-zinc-200/50 backdrop-blur-md sm:px-6 sm:py-5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group/logo shrink-0"
          aria-label="Auswork home"
        >
          <Image
            src={ausworkLogo}
            alt="Auswork"
            className="h-[4.5rem] w-auto object-contain transition duration-200 group-hover/logo:opacity-90 sm:h-20"
            priority
          />
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-x-6 text-base font-semibold text-zinc-700 md:flex lg:gap-x-10 lg:text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="whitespace-nowrap hover:text-sky-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-sky-400 hover:text-sky-700 sm:inline-flex"
          >
            <PhoneIcon className="text-sky-600" />
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="hidden rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 sm:inline-block"
          >
            Get a Quote
          </Link>
          <details className="relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg border border-zinc-200 p-2 text-zinc-600 hover:bg-zinc-50 [&::-webkit-details-marker]:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-zinc-200 bg-white py-2 shadow-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-zinc-700 hover:bg-sky-50 hover:text-sky-700"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-1 border-t border-zinc-100 px-4 py-3 space-y-2">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-sky-400 hover:text-sky-700"
                >
                  <PhoneIcon className="text-sky-600" />
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="block rounded-full bg-sky-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-sky-600"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
