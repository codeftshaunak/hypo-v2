import { AssetType } from "./hygraph";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  slug: string;
  technologies: string[];
  reference: null | string;
  thumbnail: AssetType;
};
