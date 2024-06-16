import { Box } from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";
import { getFAQs } from "services/faq-service";
import { getFeatures } from "services/feature-service";
import { getMembers } from "services/member-service";
import { getProjects } from "services/project-service";
import { getReviews } from "services/review-service";
import { getServices } from "services/service-service";
import { getWebsite } from "services/website-service";
import { FAQType } from "types/faq";
import { FeatureType } from "types/feature";
import { ReviewType } from "types/review";
import { ServiceType } from "types/service";
import { MemberType } from "types/team";
import { WebsiteType } from "types/website";
import { ProjectType } from "types/work";
import { HomeView } from "views/home-view";

type Props = {
  website: WebsiteType;
  features: FeatureType[];
  services: ServiceType[];
  members: MemberType[];
  reviews: ReviewType[];
  projects: ProjectType[];
  faqs: FAQType[];
};

const Home: NextPage<Props> = (props) => {
  const { website, features, services, members, reviews, projects, faqs } =
    props;

  return (
    <Box>
      <SEO
        title={website.seo.title}
        description={website.seo.description}
        titleTemplate={website.title}
        canonical={website.seo.url}
        openGraph={{
          title: website.seo.openGraph.title,
          description: website.seo.openGraph.description,
          url: website.seo.openGraph.url,
          images:
            website.seo.openGraph?.images?.map((image) => ({
              url: image.url,
              width: image.width,
              height: image.height,
            })) || [],
          videos:
            website.seo.openGraph?.videos?.map((video) => ({
              url: video.url,
              width: video.width,
              height: video.height,
            })) || [],
        }}
      />
      <HomeView
        website={website}
        features={features}
        services={services}
        members={members}
        reviews={reviews}
        projects={projects}
        faqs={faqs}
      />
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const website = await getWebsite();
  const features = await getFeatures();
  const services = await getServices();
  const members = await getMembers();
  const projects = await getProjects();
  const reviews = await getReviews();
  const faqs = await getFAQs();

  return {
    props: {
      website: website.data || {},
      features: features.data || [],
      services: services.data || [],
      members: members.data || [],
      projects: projects.data || [],
      reviews: reviews.data || [],
      faqs: faqs.data || [],
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
