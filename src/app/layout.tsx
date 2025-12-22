import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import ClientBootstrap from "./components/ClientBootstrap";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://melanie-cyril.vercel.app";

export const metadata: Metadata = {
  title: "Melanie & Cyril – Wedding 06.06.2026",
  description: "Our wedding website in Mallorca – all information at a glance. We look forward to celebrating this special day with you.",
  keywords: ["wedding", "Mallorca", "celebration", "2026"],
  authors: [{ name: "Melanie & Cyril" }],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Melanie & Cyril – Wedding 06.06.2026",
    description: "Our wedding website in Mallorca – all information at a glance.",
    siteName: "Melanie & Cyril Wedding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melanie & Cyril – Wedding 06.06.2026",
    description: "Join us in Mallorca for our celebration",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#f5e9da",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={baseUrl} />
      </head>
      <body>
        <ClientBootstrap />
        {children}
      </body>
    </html>
  );
}
