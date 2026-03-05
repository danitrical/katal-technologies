import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Katal — We Turn Ideas Into Powerful Software Solutions",
  description:
    "Katal is a software services company building web, mobile, and cloud solutions for startups, SMEs, and enterprises.",
  keywords: ["software development", "web development", "mobile apps", "cloud", "DevOps", "AI"],
  openGraph: {
    title: "Katal — Software Services",
    description: "We turn ideas into powerful software solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
