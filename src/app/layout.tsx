import ContactModal from "@/components/modals/contact";
import MeetingModal from "@/components/modals/meeting";
import { Toaster } from "@/components/ui/sonner";
import AppLayout from "@/layouts/app-layout";
import { getWebsite } from "@/services/website-service";
import "@/styles/index.css";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/utils/schema-org";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import { inter } from "./fonts";
import metadata from "./metadata";

export const generateMetadata = metadata;

type Props = { children: React.ReactNode };

const RootLayout = async (props: Props) => {
  const { children } = props;
  const response = await getWebsite();
  const website = response?.data;

  if (!website) throw new Error("Website not found");

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema(website)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema(website)),
          }}
        />
        <ThemeProvider attribute={"class"} defaultTheme="light">
          <AppLayout website={website}>{children}</AppLayout>
          <Suspense>
            <ContactModal />
            <MeetingModal />
          </Suspense>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
