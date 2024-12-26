import { Layout } from "@/components/layout";
import { getWebsite } from "@/services/website-service";
import { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/calendly.css";
import Html from "./html";
import { Providers } from "./providers";

export async function generateMetadata(): Promise<Metadata> {
  const response = await getWebsite();
  const website = response?.data;

  if (!website) return {};

  return {
    title: website.seo?.title,
    description: website.seo?.description,
    openGraph: {
      title: website.seo.openGraph?.title,
      description: website.seo.openGraph?.description,
      url: website.seo?.url,
      images:
        website.seo.openGraph?.images?.map((image) => ({
          url: image.url,
          width: image.width,
          height: image.height,
        })) || [],
      videos:
        website.seo.openGraph?.videos?.map((video) => ({
          url: video.url,
          width: video.width,
          height: video.height,
        })) || [],
    },
  };
}

type Props = { children: ReactNode };

const RootLayout = async (props: Props) => {
  const { children } = props;
  const response = await getWebsite();
  const website = response?.data;

  return (
    <Html>
      <Providers>
        <Layout website={website || ({} as any)}>{children}</Layout>
      </Providers>
    </Html>
  );
};

export default RootLayout;
