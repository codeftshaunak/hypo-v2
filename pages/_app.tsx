import type { AppProps } from "next/app";

import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

import dynamic from "next/dynamic";
import "../styles/calendly.css";
import theme from "../theme";

const CalendlyProvider = dynamic(
  () => import("contexts/calendly").then((v) => v.CalendlyProvider),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  const { header, footer, website } = pageProps;

  return (
    <SaasProvider
      theme={theme}
      toastOptions={{ defaultOptions: { position: "top-right", size: "sm" } }}
    >
      <CalendlyProvider>
        <AuthProvider>
          <Layout
            headerProps={{ ...header, website }}
            footerProps={{ ...footer, website }}
          >
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </CalendlyProvider>
    </SaasProvider>
  );
}

export default MyApp;
