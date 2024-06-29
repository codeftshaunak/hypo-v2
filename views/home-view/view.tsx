import { Box } from "@chakra-ui/react";

import MessengerCustomerChat from "react-messenger-customer-chat";
import { FAQType } from "types/faq";
import { FeatureType } from "types/feature";
import { ReviewType } from "types/review";
import { ServiceType } from "types/service";
import { MemberType } from "types/team";
import { WebsiteType } from "types/website";
import { ProjectType } from "types/work";
import ContactSection from "./sections/contact-section";
import { FaqSection } from "./sections/faq-section";
import { FeaturesSection } from "./sections/features-section";
import { HeroSection } from "./sections/hero-section";
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
  projects: ProjectType[];
  faqs: FAQType[];
};

const HomeView = (props: Props) => {
  const { website, features, services, members, reviews, projects, faqs } =
    props;

  return (
    <Box>
      <HeroSection
        title={website?.heroSection?.title}
        description={website?.heroSection?.description}
        imageRatio={website.heroImage.width / website.heroImage.height}
        imageUrl={website.heroImage.url}
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
        projects={projects}
      />

      <ReviewsSection
        title={website?.reviewsSection?.title}
        description={website?.reviewsSection?.description}
        reviews={reviews}
      />

      {/* <PricingSection
        title={website?.pricingSection?.title}
        description={website?.pricingSection?.description}
        plans={plansList}
      /> */}

      <FaqSection
        title={website?.faqSection?.title}
        description={website?.faqSection?.description}
        faqs={faqs}
      />

      <ContactSection />

      {window !== undefined && (
        <MessengerCustomerChat
          pageId={process.env.NEXT_PUBLIC_FB_APP_ID}
          appId={process.env.NEXT_PUBLIC_FB_PAGE_ID}
          // htmlRef="<REF_STRING>"
        />
      )}
    </Box>
  );
};

export default HomeView;
