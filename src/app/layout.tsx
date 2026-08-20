import type { Metadata, Viewport } from "next";
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
    default: "Volunteer Work in Sri Lanka",
    template: "%s | Volunteer Work in Sri Lanka",
  },
  description:
    "Join meaningful and sustainable volunteer work in Sri Lanka. Support local schools, paddy farming, and community development.",
  keywords: [
    "volunteer work in Sri Lanka",
    "volunteer Sri Lanka",
    "volunteer programs Sri Lanka",
    "NGO Sri Lanka",
    "teach English Sri Lanka",
    "volunteer work in sri lanka",
    "ethical volunteering Sri Lanka",
  ],
  authors: [{ name: "Volunteer Work in Sri Lanka Initiative" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Volunteer Work in Sri Lanka",
    description: "Join ethical and sustainable volunteer work programs in Sri Lanka.",
    url: "https://volunteerworkinsrilanka.com",
    siteName: "Volunteer Work in Sri Lanka",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Lets fixed/sticky UI reach behind the Dynamic Island and home indicator
  // so we can pad it correctly with safe-area-inset-* instead of leaving a gap.
  viewportFit: "cover",
  themeColor: "#008080",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Volunteer Work in Sri Lanka",
  url: "https://volunteerworkinsrilanka.com",
  areaServed: "Sri Lanka",
  description: "Join ethical volunteering and volunteer work programs in Sri Lanka. Support public schools, paddy fields, and local bakery development.",
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
