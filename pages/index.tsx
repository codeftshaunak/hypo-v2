import { Box } from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import { seoConfig } from "data/seo";
import type { NextPage } from "next";
import { getFeatures } from "services/feature-service";
import { getServices } from "services/service-service";
import { getWebsite } from "services/website-service";
import { FeatureType } from "types/feature";
import { ServiceType } from "types/service";
import { WebsiteType } from "types/website";
import { HomeView } from "views/home-view";

type Props = {
  website: WebsiteType;
  features: FeatureType[];
  services: ServiceType[];
};

const Home: NextPage<Props> = (props) => {
  const { website, features, services } = props;

  return (
    <Box>
      <SEO title={seoConfig.title} description={seoConfig.description} />
      <HomeView website={website} features={features} services={services} />
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const website = await getWebsite();
  const features = await getFeatures();
  const services = await getServices();

  return {
    props: {
      website: website.data || {},
      features: features.data || [],
      services: services.data || [],
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
