import { AssetType } from "./hygraph";

export type ReviewType = {
  name: string;
  position: string;
  message: string;
  avatar: AssetType;
};
