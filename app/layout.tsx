import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subhajit Chowhan | Full Stack Developer",
  description:
    "Explore Subhajit Chowhan's portfolio showcasing modern web applications, engineering insights, and ways to collaborate on high-impact products.",
  keywords: [
    "Subhajit Chowhan",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ],
  openGraph: {
    title: "Subhajit Chowhan — Portfolio",
    description:
      "Browse Subhajit's featured work, learn about his expertise across the stack, and get in touch for collaborations.",
    url: "https://my-portfolio-site-rose.vercel.app/",
    type: "website",
    siteName: "Subhajit's Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dw0oxkg7k/image/upload/v1764242457/Screenshot_2025-11-27_at_16-50-19_Subhajit_s_Portfolio_j4cmiw.png",
        alt: "Preview of Subhajit Chowhan's portfolio homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhajit Chowhan | Full Stack Developer",
    description:
      "Modern portfolio featuring Subhajit's end-to-end product builds, UI experiments, and ways to connect.",
    images: [
      "https://res.cloudinary.com/dw0oxkg7k/image/upload/v1764242457/Screenshot_2025-11-27_at_16-50-19_Subhajit_s_Portfolio_j4cmiw.png",
    ],
    site: "@SubhajitChowhan_portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://my-portfolio-site-rose.vercel.app"),
};

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
