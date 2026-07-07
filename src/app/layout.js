import { Lexend } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Window Cleaning Brisbane | Auswork",
  description:
    "Streak-free window cleaning for Brisbane homes and businesses. Pure-water systems, tracks and screens included. Book a free quote today.",
};

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
