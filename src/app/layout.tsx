import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import GoogleConsent from "../components/GoogleConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keyboardtest.pro"),
  title: "Keyboard Test - Test Your Keyboard Online",
  description:
    "Test your keyboard online. Check if your keyboard is working properly. Test all keys, including special keys and key combinations.",
  keywords:
    "keyboard tester, online keyboard test, numpad test, free keyboard checker, typing test, 키보드 테스트, 키보드 검사",
  openGraph: {
    title: "Keyboard Test - Test Your Keyboard Online",
    description:
      "Test your keyboard online. Check if your keyboard is working properly. Test all keys, including special keys and key combinations.",
    url: "https://keyboardtest.pro",
    siteName: "Keyboard Test",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Keyboard Test Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyboard Test - Test Your Keyboard Online",
    description:
      "Test your keyboard online. Check if your keyboard is working properly. Test all keys, including special keys and key combinations.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1884792243517562"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <GoogleConsent />
      </body>
    </html>
  );
}
