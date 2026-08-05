import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Volunteer Stories",
  description: "Read updates, travel guides, and inspiring field stories from our volunteers and project coordinators in Sri Lanka.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
