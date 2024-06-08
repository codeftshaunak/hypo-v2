import {
  FiBox,
  FiFlag,
  FiLock,
  FiSearch,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { ServiceItem } from "types/service";

export const servicesSection = {
  title: "Your Success, Our Services",
  description: `Discover a comprehensive suite of digital services designed to propel your business forward. From innovative web development to targeted digital marketing, our expert team is dedicated to creating customized solutions that drive results.`,
};

export const servicesList: ServiceItem[] = [
  {
    title: "Web Development",
    icon: FiBox,
    description:
      "Custom-built websites to enhance user experience and drive engagement.",
  },
  {
    title: "Digital Marketing",
    icon: FiLock,
    description:
      "Strategic campaigns to boost your online presence and attract your target audience.",
  },
  {
    title: "SEO Optimization",
    icon: FiSearch,
    description:
      "Optimize your website for search engines to increase visibility and traffic.",
  },
  {
    title: "Graphic Design",
    icon: FiUserPlus,
    description:
      "Visually stunning designs to effectively communicate your brand message.",
  },
  {
    title: "Content Creation",
    icon: FiFlag,
    description:
      "High-quality content tailored to engage and inform your audience.",
  },
  {
    title: "Social Media Management",
    icon: FiTrendingUp,
    description:
      "Comprehensive social media strategies to grow your brand and connect with customers.",
  },
];
