import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Alpha Media",
  description: "Pure Innit",
  icons: {
    icon: "/images/alphamedialogo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main className="bg-my-white">
          {children}
        </main>
      </body>
    </html>
  );
}
