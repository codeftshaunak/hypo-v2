import { getProject } from "@/services/project-service";
import { handleSEOData } from "@/utils/seo";
import { Metadata } from "next";
import { Props } from "./page";

const metadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const slug = (await params).slug;
  const response = await getProject(slug);
  const project = response?.data;

  if (!project) return {};

  return {
    ...handleSEOData({
      title: project.title,
      description: project.description,
      ...project?.seo,
    }),
  };
};

export default metadata;
