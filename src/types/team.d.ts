import { AssetType, LinkType } from "./hygraph";

export type MemberType = {
  firstName: string;
  lastName: string;
  position: string;
  avatar: AssetType;
  externalLinks: LinkType[];
};
