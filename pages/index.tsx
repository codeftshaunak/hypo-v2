import { Box } from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";

import HomeView from "views/home-view/view";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="HypoMatrix - Your Digital Agency"
        description="Hypomatrix web design and development agency. Best website development agency in the world. Web development and software development project develop by great developer with morder technology react.js next.js node.js python mongodb express.js."
      />
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
