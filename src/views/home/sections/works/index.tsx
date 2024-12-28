import { ProjectType } from "@/types/work";
import { SectionContainer, SectionHeader } from "../../common/section";
import WorkCard from "./card";

type Props = {
  title?: string;
  description?: string;
  projects: ProjectType[];
};

const WorksSection = (props: Props) => {
  const { projects, description, title } = props;
  return (
    <SectionContainer wrap id="works">
      <SectionHeader title={title} text={description} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((item) => (
          <WorkCard project={item} key={item.id} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default WorksSection;
