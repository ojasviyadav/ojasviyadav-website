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
  title: "Ojasvi Yadav — AI Engineer",
  description:
    "Personal website of Ojasvi Yadav. AI Engineer building intelligent systems.",
  openGraph: {
    title: "Ojasvi Yadav — AI Engineer",
    description:
      "Personal website of Ojasvi Yadav. AI Engineer building intelligent systems.",
    url: "https://ojasviyadav.com",
    siteName: "Ojasvi Yadav",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojasvi Yadav — AI Engineer",
    description:
      "Personal website of Ojasvi Yadav. AI Engineer building intelligent systems.",
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
