import { MotionBox } from "@/components/common/motion";
import { SectionContainer, SectionHeader } from "@/components/common/section";
import { ProjectType } from "@/types/work";
import { Variants } from "motion/react";
import WorkCard from "./card";

// ----------------------------------------------------------------------

const containerVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  hide: {},
};

const childVariants: Variants = {
  show: { opacity: 1, translateY: 0 },
  hide: { opacity: 0, translateY: 100 },
};

// ----------------------------------------------------------------------

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
      <MotionBox
        variants={containerVariants}
        initial="hide"
        whileInView={"show"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        viewport={{ once: true }}
      >
        {projects.map((item) => (
          <MotionBox variants={childVariants} key={item.id}>
            <WorkCard project={item} key={item.id} />
          </MotionBox>
        ))}
      </MotionBox>
    </SectionContainer>
  );
};

export default WorksSection;
