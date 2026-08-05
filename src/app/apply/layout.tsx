import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer Application",
  description: "Apply now to join the DIWASI volunteer program in Sri Lanka. Choose your project tracks and lodging package.",
  alternates: {
    canonical: "/apply",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
