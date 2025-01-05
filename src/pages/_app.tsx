import type { Metadata } from "next";
import "../app/globals.css";
import { Layout } from "@/components";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};


const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: any) {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}