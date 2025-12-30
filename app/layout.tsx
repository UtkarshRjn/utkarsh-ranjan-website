import type { Metadata } from "next";
import { Lora, Spectral } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Utkarsh Ranjan",
    template: "%s | Utkarsh Ranjan",
  },
  description: "Personal blog and writings by Utkarsh Ranjan",
  openGraph: {
    title: "Utkarsh Ranjan",
    description: "Personal blog and writings by Utkarsh Ranjan",
    url: "https://utkarsh-ranjan.com",
    siteName: "Utkarsh Ranjan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Ranjan",
    description: "Personal blog and writings by Utkarsh Ranjan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.variable} ${spectral.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
