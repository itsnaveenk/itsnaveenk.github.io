import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} / Backend Engineer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.tagline,
  keywords: [
    "Naveen Kumar",
    "Backend Engineer",
    "Software Engineer",
    "Distributed Systems",
    "Spring Boot",
    "Apache Kafka",
    "Elasticsearch",
    "AWS",
    "Java",
    "Microservices",
    "AI Search",
    "RAG",
    "Vector Search",
    "Adda247",
    "Platform Engineering",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsnaveenk.github.io"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsnaveenk.github.io",
    title: `${personalInfo.name} / Backend Engineer`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} / Backend Engineer`,
    description: personalInfo.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Tell the Dark Reader extension to leave this page alone — it's already dark */}
        <meta name="darkreader-lock" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="font-sans bg-background text-foreground overflow-x-hidden grain">
        {children}
      </body>
    </html>
  );
}
