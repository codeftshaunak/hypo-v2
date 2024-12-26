import { AppLayout } from "@/layouts";
import { getWebsite } from "@/services/website-service";
import { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/calendly.css";
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
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
        <meta name="theme-color" content="#171A1D" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <AppLayout website={website || ({} as any)}>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
