import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Noida Homes, your trusted real estate partner with over 10 years of experience delivering verified properties across Noida & NCR.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://noidahomes.com/about-us",
    siteName: "Noida Homes",
    title: "About Us | Noida Homes Real Estate",
    description:
      "Learn about Noida Homes, your trusted real estate partner with over 10 years of experience delivering verified properties across Noida & NCR.",
    images: [
      {
        url: "/images/reallogoo1.webp",
        width: 800,
        height: 600,
        alt: "About Noida Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Noida Homes Real Estate",
    description:
      "Learn about Noida Homes, your trusted real estate partner with over 10 years of experience delivering verified properties across Noida & NCR.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
