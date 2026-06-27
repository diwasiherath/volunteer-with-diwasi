import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Administrative dashboard for managing reviews and sheet settings for DIWASI volunteer initiative.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
