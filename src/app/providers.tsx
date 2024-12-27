"use client";

import TawkChat from "@/components/common/tawk-chat";
import theme from "@/theme";
import { ColorModeScript } from "@chakra-ui/system";
import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import dynamic from "next/dynamic";

const CalendlyProvider = dynamic(
  () => import("contexts/calendly").then((v) => v.CalendlyProvider),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SaasProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: "top-right", size: "sm" } }}
      >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CalendlyProvider>
          <AuthProvider>{children}</AuthProvider>
        </CalendlyProvider>
      </SaasProvider>
      <TawkChat />
    </>
  );
}
