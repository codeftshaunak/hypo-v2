import { SEOType } from "@/types/hygraph";
import { Metadata } from "next";

export const handleSEOData = (seo?: Partial<SEOType>): Metadata => ({
  title: seo?.title,
  description: seo?.description,
  keywords: seo?.keywords,
  openGraph: {
    title: seo?.openGraph?.title,
    description: seo?.openGraph?.description,
    url: seo?.url,
    images:
      seo?.openGraph?.images?.map((image) => ({
        url: image.url,
        width: image.width,
        height: image.height,
      })) || [],
    videos:
      seo?.openGraph?.videos?.map((video) => ({
        url: video.url,
        width: video.width,
        height: video.height,
      })) || [],
  },
});
