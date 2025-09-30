import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AugmentOS - Enterprise AI Browser | Privacy-First Chrome Alternative",
  description: "AugmentOS is the enterprise-grade AI-powered browser that transforms your workflow with intelligent automation. Privacy-first Chrome alternative built for the AI era.",
  openGraph: {
    title: "AugmentOS - Enterprise AI Browser | Privacy-First Chrome Alternative",
    description: "AugmentOS is the enterprise-grade AI-powered browser that transforms your workflow with intelligent automation. Privacy-first Chrome alternative built for the AI era.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AugmentOS - Enterprise AI Browser | Privacy-First Chrome Alternative",
    description: "AugmentOS is the enterprise-grade AI-powered browser that transforms your workflow with intelligent automation. Privacy-first Chrome alternative built for the AI era.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
