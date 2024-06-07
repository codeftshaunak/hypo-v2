import { Heading } from "@chakra-ui/react";

import { Features } from "components/features";
import {
  FiBox,
  FiFlag,
  FiLock,
  FiSearch,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";

export const ServicesSection = () => {
  return (
    <Features
      id="services"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Your Success, Our Services
        </Heading>
      }
      description={
        <>
          Discover a comprehensive suite of digital services designed to propel
          your business forward. From innovative web development to targeted
          digital marketing, our expert team is dedicated to creating customized
          solutions that drive results.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Web Development",
          icon: FiBox,
          description:
            "Custom-built websites to enhance user experience and drive engagement.",
          variant: "left-icon",
        },
        {
          title: "Digital Marketing",
          icon: FiLock,
          description:
            "Strategic campaigns to boost your online presence and attract your target audience.",
          variant: "left-icon",
        },
        {
          title: "SEO Optimization",
          icon: FiSearch,
          description:
            "Optimize your website for search engines to increase visibility and traffic.",
          variant: "left-icon",
        },
        {
          title: "Graphic Design",
          icon: FiUserPlus,
          description:
            "Visually stunning designs to effectively communicate your brand message.",
          variant: "left-icon",
        },
        {
          title: "Content Creation",
          icon: FiFlag,
          description:
            "High-quality content tailored to engage and inform your audience.",
          variant: "left-icon",
        },
        {
          title: "Social Media Management",
          icon: FiTrendingUp,
          description:
            "Comprehensive social media strategies to grow your brand and connect with customers.",
          variant: "left-icon",
        },
      ]}
    />
  );
};
