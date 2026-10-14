import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties in Noida & NCR",
  description:
    "Find premium properties in top localities of Noida, Greater Noida, and Ghaziabad. Discover verified homes with great investment returns.",
  alternates: {
    canonical: "/location",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://noidahomes.com/location",
    siteName: "Noida Homes",
    title: "Properties in Noida & NCR | Noida Homes",
    description:
      "Find premium properties in top localities of Noida, Greater Noida, and Ghaziabad. Discover verified homes with great investment returns.",
    images: [
      {
        url: "/images/reallogoo1.webp",
        width: 800,
        height: 600,
        alt: "Locations Covered by Noida Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Properties in Noida & NCR | Noida Homes",
    description:
      "Find premium properties in top localities of Noida, Greater Noida, and Ghaziabad. Discover verified homes with great investment returns.",
  },
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
