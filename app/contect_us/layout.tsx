import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Noida Homes experts. Call +91 98103 23414 or visit our office at Gaur City Center, Greater Noida for property consultation.",
  alternates: {
    canonical: "/contect_us",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://noidahomes.com/contect_us",
    siteName: "Noida Homes",
    title: "Contact Us | Noida Homes Real Estate",
    description:
      "Get in touch with Noida Homes experts. Call +91 98103 23414 or visit our office at Gaur City Center, Greater Noida for property consultation.",
    images: [
      {
        url: "/images/reallogoo1.webp",
        width: 800,
        height: 600,
        alt: "Contact Noida Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Noida Homes Real Estate",
    description:
      "Get in touch with Noida Homes experts. Call +91 98103 23414 or visit our office at Gaur City Center, Greater Noida for property consultation.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
