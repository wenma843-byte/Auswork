import { Lexend } from "next/font/google";
import Nav from "./components/Nav";
import JsonLd from "./components/JsonLd";
import { SITE } from "@/data/site";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Window Cleaning Brisbane | Auswork",
    template: "%s | Auswork Window Cleaning",
  },
  description:
    "Streak-free window cleaning for Brisbane homes and businesses. Pure-water systems, tracks and screens included. Book a free quote today.",
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE.url,
    siteName: "Auswork Window Cleaning",
    title: "Window Cleaning Brisbane | Auswork",
    description:
      "Streak-free window cleaning for Brisbane homes and businesses. Pure-water systems, tracks and screens included.",
    images: [{ url: "/logo.png", width: 855, height: 413, alt: "Auswork Window Cleaning" }],
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} relative min-h-screen antialiased bg-zinc-100 font-sans text-zinc-900`}>
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
