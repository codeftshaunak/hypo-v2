import { Layout } from "@/components/layout";
import type { ReactNode } from "react";
import "../styles/calendly.css";
import Html from "./html";
import { Providers } from "./providers";

export const metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({
  children,
  pageProps,
}: {
  children: ReactNode;
  pageProps: any; // Optional if you need to manage pageProps
}) {
  const { header, footer, website } = pageProps || {};

  return (
    <Html>
      <Providers>
        <Layout
          headerProps={{ ...header, website }}
          footerProps={{ ...footer, website }}
        >
          {children}
        </Layout>
      </Providers>
    </Html>
  );
}
