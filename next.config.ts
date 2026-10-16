import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
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
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/rera-guidelines",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contect_us",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contect_us",
        permanent: true,
      },
      {
        source: "/schedule-call",
        destination: "/contect_us",
        permanent: true,
      },
      {
        source: "/area-consultation",
        destination: "/contect_us",
        permanent: true,
      },
      {
        source: "/properties",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/properties/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/all-categories",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/categories/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/property-guide",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/buying-guide",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/loan-process",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/legal-docs",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/all-locations",
        destination: "/location",
        permanent: true,
      },
      {
        source: "/locations/:path*",
        destination: "/location",
        permanent: true,
      },
      {
        source: "/compare-localities",
        destination: "/location",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
