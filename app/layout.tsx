import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subhajit's Portfolio",
  description: "A collection of my work and projects as a web developer.",
  keywords: [
    "Subhajit Chowhan",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ],
  icons: {
    icon: "/favicon.ico"

  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
