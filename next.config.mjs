/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
