import { getProjects } from "@/services/project-service";

export const getProjectsSlug = async () => {
  const response = await getProjects();
  const projects = response.data;

  if (!projects) return [];

  return projects.map((item) => ({
    slug: item.slug,
  }));
};
