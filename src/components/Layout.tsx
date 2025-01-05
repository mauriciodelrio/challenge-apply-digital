import { Footer, TopBar } from "@/components";
import Head from "next/head";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Apply Digital Test"/>
        <meta property="og:description" content="Frontend development test for Apply Digital"/>
      </Head>
      <TopBar />
      {children}
      <Footer />
    </>
  );
}
