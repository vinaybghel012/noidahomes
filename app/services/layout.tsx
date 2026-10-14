import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Services | Noida Homes",
  description: "Explore Noida Homes services including residential buying, commercial leasing, home loan support, and property valuation with zero hassle.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
