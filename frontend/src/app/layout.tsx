import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
        className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
