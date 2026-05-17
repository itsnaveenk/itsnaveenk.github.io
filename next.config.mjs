/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio"; // <-- repo name on GitHub. Used for base path on Pages.
const useBasePath = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath: useBasePath ? `/${repo}` : "",
  assetPrefix: useBasePath ? `/${repo}/` : "",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
