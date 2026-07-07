import Image from "next/image";
import Link from "next/link";
import ausworkLogo from "@/auswork_Logo.png";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/memberships", label: "Memberships" },
  { href: "/reviews", label: "Reviews" },
];

function HomeIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6 10v9h12v-9" />
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="z-40 bg-transparent px-4 pt-4 sm:px-8 sm:pt-6 md:sticky md:top-0">
      <nav
        className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white/85 px-4 py-4 shadow-lg shadow-zinc-200/50 backdrop-blur-md sm:px-6 sm:py-5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group/logo flex shrink-0 items-center gap-3 text-sky-700"
          aria-label="Auswork home"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 shadow-sm transition duration-200 ease-out group-hover/logo:scale-105 group-hover/logo:bg-sky-100 group-hover/logo:text-sky-700 group-hover/logo:shadow-md group-active/logo:scale-95 sm:h-14 sm:w-14">
            <HomeIcon className="h-6 w-6 transition duration-200 group-hover/logo:scale-110 sm:h-7 sm:w-7" />
          </span>
          <Image
            src={ausworkLogo}
            alt="Auswork"
            className="h-[4.5rem] w-auto object-contain transition duration-200 group-hover/logo:opacity-90 sm:h-20"
            priority
          />
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-x-5 text-sm font-medium text-zinc-600 md:flex lg:gap-x-8 lg:text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="whitespace-nowrap hover:text-sky-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
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
                  className="block px-4 py-2.5 text-sm text-zinc-700 hover:bg-sky-50 hover:text-sky-700"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-1 border-t border-zinc-100 px-4 py-3">
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
