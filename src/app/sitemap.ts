import { APP_URL } from "@/config/env";
import { getProjects } from "@/services/project-service";
import type { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const works = await getProjects();

  const worksSitemap: MetadataRoute.Sitemap =
    works.data?.map((item) => ({
      url: `${APP_URL}/works/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })) || [];

  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...worksSitemap,
  ];
};

export default sitemap;
