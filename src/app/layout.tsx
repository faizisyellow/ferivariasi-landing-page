import type { Metadata } from "next";
import { Karla, Inter } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Feri variasi kaca film",
  description: "Melayani pemasangan kaca film",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${karla.variable} antialiased`}>{children}</body>
    </html>
  );
}
