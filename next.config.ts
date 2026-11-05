import type { NextConfig } from "next";

/**
 * Preview-деплои Vercel не должны попадать в индекс: иначе копии страниц
 * конкурируют с основным доменом. На проде (VERCEL_ENV=production) заголовок
 * не ставим.
 */
const isPreview =
  process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== "production";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.metal.kg" }],
        destination: "https://metal.kg/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    const headers = [
      {
        source: "/:path*",
        headers: isPreview
          ? [...securityHeaders, { key: "X-Robots-Tag", value: "noindex, nofollow" }]
          : securityHeaders,
      },
      {
        // Фото товаров меняются редко; сутки кэша + фоновое обновление, чтобы
        // замена файла с тем же именем подхватывалась без «жёсткого» сброса.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=86400",
          },
        ],
      },
    ];
    return headers;
  },
};

export default nextConfig;
