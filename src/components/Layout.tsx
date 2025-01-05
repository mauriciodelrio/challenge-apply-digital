import { Inter } from "next/font/google";
import { Footer, TopBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  );
}
