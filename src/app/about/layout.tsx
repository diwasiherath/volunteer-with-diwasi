import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, vision, and core values of the DIWASI volunteer program in Sri Lanka.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
