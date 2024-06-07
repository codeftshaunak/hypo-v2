import { Box } from "@chakra-ui/react";
import { FaqSection } from "./sections/faq-section";
import { FeaturesSection } from "./sections/features-section";
import { HeroSection } from "./sections/hero-section";
import { PricingSection } from "./sections/pricing-section";
import { ReviewsSection } from "./sections/reviews-sections";
import { ServicesSection } from "./sections/services-section";
import { TeamsSection } from "./sections/teams-section";
import { WorksSection } from "./sections/works-section";

type Props = {};

const HomeView = (props: Props) => {
  return (
    <Box>
      <HeroSection />

      <FeaturesSection />

      <ServicesSection />

      <TeamsSection />

      <WorksSection />

      <ReviewsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  );
};

export default HomeView;
