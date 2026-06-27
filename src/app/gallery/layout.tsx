import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Photo Gallery",
  description: "Explore real moments and snapshots shared by our volunteers from the schools, paddy fields, and communities in Sri Lanka.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
