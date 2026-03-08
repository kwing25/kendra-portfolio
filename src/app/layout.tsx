import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  title: "Kendra Wing - Full Stack Developer",
  description:
    "Portfolio website for Kendra Wing, showcasing projects and skills in full stack development.",
  keywords: [
    "Kendra Wing",
    "Full Stack Developer",
    "Portfolio",
    "Projects",
    "Skills",
    "Web Development",
    "Software Engineer",
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
  ],
  authors: [
    {
      name: "Kendra Wing",
      url: "https://www.linkedin.com/in/kendrawing/",
    },
  ],
  openGraph: {
    title: "Kendra Wing - Full Stack Developer",
    description:
      "Portfolio website for Kendra Wing, showcasing projects and skills in full stack development.",
    url: "https://kendrawing.dev",
    siteName: "Kendra Wing Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/78707448?v=4",
        width: 1200,
        height: 630,
        alt: "Kendra Wing Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
