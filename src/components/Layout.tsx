import { Inter } from "next/font/google";
import { Footer, TopBar } from "@/components";

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
