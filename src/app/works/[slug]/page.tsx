import { getProject } from "@/services/project-service";
import WorkDetailsView from "@/views/works/details";
import { notFound } from "next/navigation";
import { getProjectsSlug } from "./loader";

type Props = {
  params: Promise<{ slug: string }>;
};

const WorkDetails = async (props: Props) => {
  const { params } = props;
  const slug = (await params).slug;
  const response = await getProject(slug);
  const project = response?.data;

  if (!project) notFound();

  return <WorkDetailsView data={project} />;
};

export default WorkDetails;

export const generateStaticParams = getProjectsSlug;
