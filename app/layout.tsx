import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import GlowOrbs from "./components/GlowOrbs";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://oliverweb-delta.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Oliver Wu — Software Developer",
    template: "%s — Oliver Wu",
  },
  description:
    "Personal website of Oliver Wu. Software development, data science, and machine learning.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Oliver Wu",
    title: "Oliver Wu — Software Developer",
    description:
      "Software developer specializing in full-stack applications, data science, and machine learning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Wu — Software Developer",
    description:
      "Software developer specializing in full-stack applications, data science, and machine learning.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-overlay grid-pattern">
        <GlowOrbs />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
