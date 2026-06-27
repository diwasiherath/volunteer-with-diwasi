import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Volunteer Tracks & Projects",
  description: "Discover our diverse volunteer programs in Sri Lanka, including school development, traditional paddy farming, and bakery initiatives.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
