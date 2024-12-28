import { getWebsite } from "@/services/website-service";
import { Metadata } from "next";

const metadata = async (): Promise<Metadata> => {
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
    icons: {
      icon: [
        { url: "/favicons/favicon-16x16.png", sizes: "16x16" },
        { url: "/favicons/favicon-32x32.png", sizes: "32x32" },
        { url: "/favicons/android-chrome-192x192.png", sizes: "192x192" },
        { url: "/favicons/android-chrome-512x512.png", sizes: "512x512" },
        { url: "/favicons/favicon.ico" },
      ],
      apple: "/favicons/apple-touch-icon.png",
    },
    manifest: "/favicons/manifest.json",
  };
};

export default metadata;
