import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anurag-portfolio.vercel.app"),
  title: "Anurag | Data Science & Full-Stack Developer",
  description:
    "Portfolio of Anurag — Data Science and full-stack developer building ML-driven products and premium web applications.",
  openGraph: {
    title: "Anurag | Data Science & Full-Stack Developer",
    description:
      "Portfolio of Anurag — Data Science and full-stack developer building ML-driven products and premium web applications.",
    url: "https://anurag-portfolio.vercel.app",
    siteName: "Anurag",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag | Data Science & Full-Stack Developer",
    description:
      "Portfolio of Anurag — Data Science and full-stack developer building ML-driven products and premium web applications.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}