import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import LocalBusinessSchema from "@/app/components/SEO/LocalBusinessSchema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gardenrouteepoxyflooring.co.za"),

  title: {
    default:
      "Garden Route Epoxy Flooring | Premium Epoxy & Stone Carpet Flooring",
    template: "%s | Garden Route Epoxy Flooring",
  },

  description:
    "Premium epoxy and stone carpet flooring specialists serving the Garden Route. Residential, commercial and industrial flooring solutions built to last.",

  keywords: [
    "Epoxy Flooring",
    "Stone Carpet Flooring",
    "Garage Flooring",
    "Industrial Flooring",
    "Commercial Flooring",
    "Residential Flooring",
    "Epoxy Floors George",
    "Epoxy Floors Mossel Bay",
    "Epoxy Floors Hartenbos",
    "Garden Route Epoxy Flooring",
    "Metallic Epoxy",
    "Flake Flooring",
  ],

  authors: [
    {
      name: "Garden Route Epoxy Flooring",
    },
  ],

  creator: "Garden Route Epoxy Flooring",

  publisher: "Garden Route Epoxy Flooring",

  applicationName: "Garden Route Epoxy Flooring",

  category: "Construction",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://gardenrouteepoxyflooring.co.za",
    siteName: "Garden Route Epoxy Flooring",
    title: "Premium Epoxy & Stone Carpet Flooring",
    description:
      "Premium epoxy and stone carpet flooring throughout the Garden Route.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Garden Route Epoxy Flooring",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Garden Route Epoxy Flooring",
    description:
      "Premium epoxy and stone carpet flooring throughout the Garden Route.",
    images: ["/twitter-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <LocalBusinessSchema />

        <Navbar />

        {children}

        <Footer />

        <FloatingWhatsApp />

      </body>

    </html>
  );
}