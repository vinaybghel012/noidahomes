import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Services",
  description:
    "Explore Noida Homes services including residential buying, commercial leasing, home loan support, and property valuation with zero hassle.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://noidahomes.com/services",
    siteName: "Noida Homes",
    title: "Real Estate Services | Noida Homes",
    description:
      "Explore Noida Homes services including residential buying, commercial leasing, home loan support, and property valuation with zero hassle.",
    images: [
      {
        url: "/images/reallogoo1.webp",
        width: 800,
        height: 600,
        alt: "Noida Homes Real Estate Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Services | Noida Homes",
    description:
      "Explore Noida Homes services including residential buying, commercial leasing, home loan support, and property valuation with zero hassle.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
