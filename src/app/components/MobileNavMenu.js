"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SITE } from "@/data/site";

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

export default function MobileNavMenu({ links }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("scroll", close, { passive: true, capture: true });
    window.addEventListener("touchmove", close, { passive: true, capture: true });
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", close, { capture: true });
      window.removeEventListener("touchmove", close, { capture: true });
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div ref={menuRef} className="relative md:hidden">
      <button
        type="button"
        className="flex items-center justify-center rounded-lg border border-zinc-200 p-2 text-zinc-600 hover:bg-zinc-50"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav-menu"
          className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-zinc-200 bg-white py-2 shadow-xl"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-base font-medium text-zinc-700 hover:bg-sky-50 hover:text-sky-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-1 space-y-2 border-t border-zinc-100 px-4 py-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-sky-400 hover:text-sky-700"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon className="text-sky-600" />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="block rounded-full bg-sky-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-sky-600"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
