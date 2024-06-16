import { Box } from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import { seoConfig } from "data/seo";
import type { NextPage } from "next";
import { getFeatures } from "services/feature-service";
import { getWebsite } from "services/website-service";
import { FeatureType } from "types/feature";
import { WebsiteType } from "types/website";
import { HomeView } from "views/home-view";

type Props = { website: WebsiteType; features: FeatureType[] };

const Home: NextPage<Props> = (props) => {
  const { website, features } = props;

  return (
    <Box>
      <SEO title={seoConfig.title} description={seoConfig.description} />
      <HomeView website={website} features={features} />
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const website = await getWebsite();
  const features = await getFeatures();

  return {
    props: {
      website: website.data || {},
      features: features.data || [],
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
