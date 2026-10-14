import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FloatingContact from "./components/FloatingContact";
import JsonLd from "./components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noidahomes.com"),
  title: {
    default: "Noida Homes | Properties in Noida & Greater Noida",
    template: "%s | Noida Homes",
  },
  description:
    "Explore verified residential & commercial properties in Noida and Greater Noida. Get expert guidance and best market deals with Noida Homes.",
  keywords: [
    "Noida real estate",
    "properties in Noida",
    "flats in Greater Noida",
    "apartments in Noida Expressway",
    "commercial shops Noida",
    "RERA verified projects Noida",
    "Noida Homes",
    "real estate consultants Noida",
  ],
  authors: [{ name: "Noida Homes", url: "https://noidahomes.com" }],
  creator: "Noida Homes",
  publisher: "Noida Homes",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://noidahomes.com",
    siteName: "Noida Homes",
    title: "Noida Homes | Properties in Noida & Greater Noida",
    description:
      "Explore verified residential & commercial properties in Noida and Greater Noida. Get expert guidance and best market deals with Noida Homes.",
    images: [
      {
        url: "/images/reallogoo1.webp",
        width: 800,
        height: 600,
        alt: "Noida Homes - Real Estate Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noida Homes | Properties in Noida & Greater Noida",
    description:
      "Explore verified residential & commercial properties in Noida and Greater Noida. Get expert guidance and best market deals with Noida Homes.",
    images: ["/images/reallogoo1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Navbar />
        {children}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
