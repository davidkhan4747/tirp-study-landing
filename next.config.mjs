/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Отключаем автоматический CORS прокси
  async rewrites() {
    return []
  },
  // Добавляем заголовки для CORS
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
  // Отключаем минификацию для повышения стабильности
  swcMinify: false,
  // Статические ассеты всегда доступны
  assetPrefix: '',
}

export default nextConfig
