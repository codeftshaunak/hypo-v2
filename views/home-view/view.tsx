import { Box } from "@chakra-ui/react";
import { featuresList } from "data/features";
import { servicesList } from "data/services";
import { teamsList } from "data/teams";
import { reviewsList } from "data/testimonials";
import { worksList } from "data/works";
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
      <HeroSection />

      <FeaturesSection features={featuresList} />

      <ServicesSection services={servicesList} />

      <TeamsSection teams={teamsList} />

      <WorksSection works={worksList} />

      <ReviewsSection reviews={reviewsList} />

      <PricingSection />

      <FaqSection />
    </Box>
  );
};

export default HomeView;
