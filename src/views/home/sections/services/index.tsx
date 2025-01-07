import { MotionBox } from "@/components/common/motion";
import { SectionContainer, SectionHeader } from "@/components/common/section";
import { ServiceType } from "@/types/service";
import { Variants } from "motion/react";
import ServiceCard from "./card";

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
  services: ServiceType[];
};

const ServicesSection = (props: Props) => {
  const { services, description, title } = props;
  return (
    <SectionContainer wrap id="services">
      <SectionHeader title={title} text={description} />
      <MotionBox
        variants={containerVariants}
        initial="hide"
        whileInView={"show"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5"
        viewport={{ once: true }}
      >
        {services.map((item) => (
          <MotionBox variants={childVariants} key={item.id}>
            <ServiceCard service={item} key={item.id} />
          </MotionBox>
        ))}
      </MotionBox>
    </SectionContainer>
  );
};

export default ServicesSection;
