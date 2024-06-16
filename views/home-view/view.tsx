import { Box } from "@chakra-ui/react";

import { faqsList, heroSection, plansList, worksList } from "data/home";

import { FeatureType } from "types/feature";
import { ReviewType } from "types/review";
import { ServiceType } from "types/service";
import { MemberType } from "types/team";
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
  services: ServiceType[];
  members: MemberType[];
  reviews: ReviewType[];
};

const HomeView = (props: Props) => {
  const { website, features, services, members, reviews } = props;

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
        services={services}
      />

      <TeamsSection
        title={website?.teamsSection?.title}
        description={website?.teamsSection?.description}
        teams={members}
      />

      <WorksSection
        title={website?.worksSection?.title}
        description={website?.worksSection?.description}
        works={worksList}
      />

      <ReviewsSection
        title={website?.reviewsSection?.title}
        description={website?.reviewsSection?.description}
        reviews={reviews}
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
