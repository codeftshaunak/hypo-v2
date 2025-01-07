import { MotionBox } from "@/components/common/motion";
import { SectionContainer, SectionHeader } from "@/components/common/section";
import { PlanType } from "@/types/plan";
import { Variants } from "motion/react";
import TeamCard from "./card";

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
  plans: PlanType[];
};

const PlanSection = (props: Props) => {
  const { plans, description, title } = props;
  return (
    <SectionContainer id="pricing" wrap>
      <SectionHeader title={title} text={description} />
      <MotionBox
        variants={containerVariants}
        initial="hide"
        whileInView={"show"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 group"
        viewport={{ once: true }}
      >
        {plans.map((plan) => (
          <MotionBox variants={childVariants} key={plan.id}>
            <TeamCard plan={plan} />
          </MotionBox>
        ))}
      </MotionBox>
    </SectionContainer>
  );
};

export default PlanSection;
