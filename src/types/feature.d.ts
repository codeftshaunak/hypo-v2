import { AssetType, ColorType } from "./hygraph";

export type FeatureType = {
  id: string;
  title: string;
  description: string;
  thumbnail: AssetType;
  themeColor: ColorType;
};
