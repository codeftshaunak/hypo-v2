import { OpenGraphType, SEOType } from "@/types/hygraph";
import { Metadata } from "next";

export const handleSEOData = (
  seo?: Partial<SEOType>,
  openGraph?: Partial<OpenGraphType>
): Metadata => ({
  title: seo?.title,
  description: seo?.description,
  keywords: seo?.keywords,
  openGraph: {
    title: openGraph?.title,
    description: openGraph?.description,
    url: openGraph?.url,
    images:
      openGraph?.images?.map((image) => ({
        url: image.url,
        width: image.width,
        height: image.height,
      })) || [],
    videos:
      openGraph?.videos?.map((video) => ({
        url: video.url,
        width: video.width,
        height: video.height,
      })) || [],
  },
});
