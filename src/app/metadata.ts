import { getWebsite } from "@/services/website-service";
import { handleSEOData } from "@/utils/seo";
import { Metadata } from "next";

const metadata = async (): Promise<Metadata> => {
  const response = await getWebsite();
  const website = response?.data;

  if (!website) return {};

  return {
    ...handleSEOData(website?.seo, website?.openGraph),
    title: {
      default: website?.seo?.title || website.title,
      template: `%s | ${website?.seo?.title || website.title}`,
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
