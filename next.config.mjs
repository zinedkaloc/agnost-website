/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: { unoptimized: true },
}

export default nextConfig
