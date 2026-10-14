import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Noida Homes Real Estate",
  description: "Get in touch with Noida Homes experts. Call +91 98103 23414 or visit our office at Gaur City Center, Greater Noida for property consultation.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
