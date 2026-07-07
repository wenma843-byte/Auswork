import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      {
        source: "/AboutUs",
        destination: "/#who-we-are",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#who-we-are",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
