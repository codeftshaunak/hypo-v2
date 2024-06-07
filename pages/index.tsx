import { Box } from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import { seoConfig } from "data/seo";
import type { NextPage } from "next";

import HomeView from "views/home-view/view";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO title={seoConfig.title} description={seoConfig.description} />
      <HomeView />
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: false,
      },
    },
  };
}
