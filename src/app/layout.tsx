import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, TopBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
