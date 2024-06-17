import type { AppProps } from "next/app";

import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { header, footer, website } = pageProps;

  return (
    <SaasProvider theme={theme}>
      <AuthProvider>
        <Layout
          headerProps={{ ...header, website }}
          footerProps={{ ...footer, website }}
        >
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SaasProvider>
  );
}

export default MyApp;
