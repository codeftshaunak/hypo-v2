import { AssetType, OpenGraphType, SEOType } from "./hygraph";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  slug: string;
  reference: null | string;
  thumbnail: AssetType;
  content: {
    html: string;
  };
  seo?: SEOType;
  openGraph: OpenGraphType;
};
