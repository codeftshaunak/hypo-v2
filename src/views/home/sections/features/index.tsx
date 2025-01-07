import { MotionBox } from "@/components/common/motion";
import { SectionContainer, SectionHeader } from "@/components/common/section";
import { FeatureType } from "@/types/feature";
import { Variants } from "motion/react";
import FeatureCard from "./card";

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
  features: FeatureType[];
};

const FeaturesSection = (props: Props) => {
  const { description, title, features } = props;
  return (
    <SectionContainer wrap id="features">
      <SectionHeader title={title} text={description} centered />
      <MotionBox
        variants={containerVariants}
        initial="hide"
        whileInView={"show"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        viewport={{ once: true }}
      >
        {features.map((item, index) => (
          <MotionBox variants={childVariants} key={item.id}>
            <FeatureCard feature={item} index={index + 1} />
          </MotionBox>
        ))}
      </MotionBox>
    </SectionContainer>
  );
};

export default FeaturesSection;
