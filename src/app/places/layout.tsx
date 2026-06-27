import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Places to Visit in Sri Lanka",
  description: "Browse our weekend excursion travel guide for volunteers in Sri Lanka, featuring Galle Fort, Sigiriya, and more.",
};

export default function PlacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
