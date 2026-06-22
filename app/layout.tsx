import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Konfigurujemy czcionkę i przypisujemy ją do zmiennej CSS
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wealth Dashboard",
  description: "A high-performance wealth tracking dashboard & portfolio simulator using Next.js, TypeScript, and clean engineering standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
