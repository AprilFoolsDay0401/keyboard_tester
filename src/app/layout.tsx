import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://temperary.com"),
  title: "Keyboard Tester - Test Your Keyboard Online",
  description:
    "Instantly check if every key on your keyboard works. Free, fast, and easy keyboard tester.",
  keywords:
    "keyboard tester, online keyboard test, numpad test, free keyboard checker, typing test, 키보드 테스트, 키보드 검사",
  openGraph: {
    title: "Keyboard Tester - Test Your Keyboard Online",
    description:
      "Instantly check if every key on your keyboard works. Free, fast, and easy keyboard tester.",
    url: "https://temperary.com",
    siteName: "Keyboard Tester",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Keyboard Tester Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyboard Tester - Test Your Keyboard Online",
    description:
      "Instantly check if every key on your keyboard works. Free, fast, and easy keyboard tester.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
