import { Lexend } from "next/font/google";
import Link from "next/link";
import NavServicesDropdown from "./components/NavServicesDropdown";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Window Cleaning Sydney | Renew Exterior Cleaning",
  description:
    "Streak-free window cleaning for Sydney homes and businesses. Pure-water systems, tracks and screens included. Book a free quote today.",
};

function Nav() {
  return (
    <header className="z-40 bg-transparent px-10 pt-4 sm:px-12 sm:pt-6 md:sticky md:top-0">
      <nav
        className="flex min-w-0 w-full flex-col items-center justify-between gap-4 overflow-visible rounded-2xl border border-zinc-200 bg-white/80 px-6 py-5 shadow-lg shadow-zinc-200/50 backdrop-blur-md sm:flex-row sm:px-8 lg:px-20"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center text-sky-700 hover:text-sky-800"
          aria-label="Renew Exterior Cleaning home"
        >
          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Renew<span className="text-sky-500">.</span>
          </span>
        </Link>
        <ul className="flex min-w-0 w-full shrink flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg font-medium text-zinc-600 sm:w-auto sm:min-w-0 sm:flex-1 sm:justify-between sm:gap-0 sm:pl-8 md:pl-24 lg:pl-80">
          <li>
            <Link href="/" className="hover:text-sky-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/AboutUs" className="hover:text-sky-600">
              About Us
            </Link>
          </li>
          <NavServicesDropdown />
          <li>
            <Link href="/gallery" className="hover:text-sky-600">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-sky-600">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} relative min-h-screen antialiased bg-zinc-100 font-sans text-zinc-900`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
