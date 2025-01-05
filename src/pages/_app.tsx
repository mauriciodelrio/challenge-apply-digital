import "../app/globals.css";
import { Layout } from "@/components";

export default function App({ Component, pageProps }: any) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}