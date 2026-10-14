import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties in Noida & NCR | Noida Homes",
  description: "Find premium properties in top localities of Noida, Greater Noida, and Ghaziabad. Discover verified homes with great investment returns.",
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
