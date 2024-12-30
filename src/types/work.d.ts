import { AssetType } from "./hygraph";

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
};
