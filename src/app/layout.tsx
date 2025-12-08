import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melanie & Cyril – Hochzeit 06.06.2026",
  description: "Unsere Hochzeitswebsite in Mallorca – alle Infos auf einen Blick.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
