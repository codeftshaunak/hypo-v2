import { Box } from "@chakra-ui/react";

import {
  faqsList,
  heroSection,
  plansList,
  reviewsList,
  servicesList,
  teamsList,
  worksList,
} from "data/home";

import { FeatureType } from "types/feature";
import { WebsiteType } from "types/website";
import { FaqSection } from "./sections/faq-section";
import { FeaturesSection } from "./sections/features-section";
import { HeroSection } from "./sections/hero-section";
import { PricingSection } from "./sections/pricing-section";
import { ReviewsSection } from "./sections/reviews-sections";
import { ServicesSection } from "./sections/services-section";
import { TeamsSection } from "./sections/teams-section/index";
import { WorksSection } from "./sections/works-section";

type Props = {
  website: WebsiteType;
  features: FeatureType[];
};

const HomeView = (props: Props) => {
  const { website, features } = props;

  return (
    <Box>
      <HeroSection
        title={website?.heroSection?.title}
        description={website?.heroSection?.description}
        imageRatio={heroSection.imageRatio}
        imageUrl={heroSection.imageUrl}
        primaryLink={website?.primaryLink}
        secondaryLink={website?.secondaryLink}
      />

      <FeaturesSection
        title={website?.featuresSection?.title}
        description={website?.featuresSection?.description}
        features={features}
      />

      <ServicesSection
        title={website?.servicesSection?.title}
        description={website?.servicesSection?.description}
        services={servicesList}
      />

      <TeamsSection
        title={website?.teamsSection?.title}
        description={website?.teamsSection?.description}
        teams={teamsList}
      />

      <WorksSection
        title={website?.worksSection?.title}
        description={website?.worksSection?.description}
        works={worksList}
      />

      <ReviewsSection
        title={website?.reviewsSection?.title}
        description={website?.reviewsSection?.description}
        reviews={reviewsList}
      />

      <PricingSection
        title={website?.pricingSection?.title}
        description={website?.pricingSection?.description}
        plans={plansList}
      />

      <FaqSection
        title={website?.faqSection?.title}
        description={website?.faqSection?.description}
        faqs={faqsList}
      />
    </Box>
  );
};

export default HomeView;
