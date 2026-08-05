import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer Reviews & Testimonials",
  description: "Read reviews, testimonials, and feedback from past volunteers who participated in the DIWASI programs in Sri Lanka.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
