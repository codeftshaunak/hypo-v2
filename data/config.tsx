import { Link } from "@saas-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

type LinkType = {
  id: string;
  label: string;
  href?: string;
};

const siteConfig = {
  logo: undefined,
  title: "HypoMatrix",
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "services",
        label: "Services",
      },
      {
        id: "teams",
        label: "Teams",
      },
      {
        id: "works",
        label: "Works",
      },
      {
        id: "reviews",
        label: "Reviews",
      },
      // {
      //   label: "Login",
      //   href: "/login",
      // },
      // {
      //   label: "Sign Up",
      //   href: "/signup",
      //   variant: "primary",
      // },
    ] as LinkType[],
  },
  footer: {
    copyright: (
      <>
        Built by <Link href="https://hypomatrix.com/">HypoMatrix</Link>
      </>
    ),
    links: [
      {
        href: "mailto:hypomatrix@gmail.com",
        label: "Contact",
      },
      {
        href: "https://twitter.com/hypomatrix",
        label: <FaTwitter size="14" />,
      },
      {
        href: "https://github.com/hypomatrix",
        label: <FaGithub size="14" />,
      },
    ],
    description:
      "Empower your business with HypoMatrix's creative and technical expertise. We deliver customized digital solutions for enhanced growth and visibility.",
  },
  signup: {
    title: "Start building with Saas UI",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow WAI-ARIA standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with theme support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate and fully typed, build your product at speed.",
      },
    ],
  },
};

export default siteConfig;
