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
  };
};

export default metadata;
