import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://volunteerworkinsrilanka.com"),
  title: {
    default: "Volunteer Sri Lanka With Diwasi",
    template: "%s | Volunteer Sri Lanka",
  },
  description:
    "Complete your volunteer application for the Diwasi program in Sri Lanka",
  keywords: [
    "volunteer Sri Lanka",
    "volunteer programs Sri Lanka",
    "NGO Sri Lanka",
    "teach English Sri Lanka",
  ],
  authors: [{ name: "Diwasi Initiative" }],
  openGraph: {
    title: "Volunteer Sri Lanka",
    description: "Join ethical volunteering programs in Sri Lanka",
    url: "https://volunteerworkinsrilanka.com",
    siteName: "Volunteer Sri Lanka",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Volunteer Work in Sri Lanka",
  url: "https://volunteerworkinsrilanka.com",
  areaServed: "Sri Lanka",
  description: "Volunteer tourism programs in Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
