import { LinkType } from "types/hygraph";

export const getLinkHref = (link?: LinkType, key?: keyof LinkType): string => {
  if (!link) return "#";
  if (key && link?.[key]) return link[key] as string;

  if (link.url) return link.url;
  if (link.path) return link.path;

  return "#";
};
