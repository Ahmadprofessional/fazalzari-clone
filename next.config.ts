import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "font-src 'self' fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "frame-src maps.google.com *.google.com",
      "connect-src 'self' wa.me *.wa.me",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  compress: true,

  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
