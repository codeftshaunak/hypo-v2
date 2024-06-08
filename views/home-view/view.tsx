import { Box } from "@chakra-ui/react";

import {
  faqSection,
  faqsList,
  featuresList,
  featuresSection,
  heroSection,
  plansList,
  pricingSection,
  reviewsList,
  reviewsSection,
  servicesList,
  servicesSection,
  teamsList,
  teamsSection,
  worksList,
  worksSection,
} from "data/home";

import { FaqSection } from "./sections/faq-section";
import { FeaturesSection } from "./sections/features-section";
import { HeroSection } from "./sections/hero-section";
import { PricingSection } from "./sections/pricing-section";
import { ReviewsSection } from "./sections/reviews-sections";
import { ServicesSection } from "./sections/services-section";
import { TeamsSection } from "./sections/teams-section/index";
import { WorksSection } from "./sections/works-section";

type Props = {};

const HomeView = (props: Props) => {
  return (
    <Box>
      <HeroSection
        title={heroSection.title}
        description={heroSection.description}
        imageRatio={heroSection.imageRatio}
        imageUrl={heroSection.imageUrl}
        primaryLink={heroSection.primaryLink}
        secondaryLink={heroSection.secondaryLink}
      />

      <FeaturesSection
        title={featuresSection.title}
        description={featuresSection.description}
        features={featuresList}
      />

      <ServicesSection
        title={servicesSection.title}
        description={servicesSection.description}
        services={servicesList}
      />

      <TeamsSection
        title={teamsSection.title}
        description={teamsSection.description}
        teams={teamsList}
      />

      <WorksSection
        title={worksSection.title}
        description={worksSection.description}
        works={worksList}
      />

      <ReviewsSection
        title={reviewsSection.title}
        description={reviewsSection.description}
        reviews={reviewsList}
      />

      <PricingSection
        title={pricingSection.title}
        description={pricingSection.description}
        plans={plansList}
      />

      <FaqSection
        title={faqSection.title}
        description={faqSection.description}
        faqs={faqsList}
      />
    </Box>
  );
};

export default HomeView;
