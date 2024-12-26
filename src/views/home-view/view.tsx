"use client";

import { Box } from "@chakra-ui/react";

import { SEO } from "@/components/seo";
import { FAQType } from "@/types/faq";
import { FeatureType } from "@/types/feature";
import { ReviewType } from "@/types/review";
import { ServiceType } from "@/types/service";
import { MemberType } from "@/types/team";
import { WebsiteType } from "@/types/website";
import { ProjectType } from "@/types/work";
import ContactSection from "./sections/contact-section";
import { FaqSection } from "./sections/faq-section";
import { FeaturesSection } from "./sections/features-section";
import { HeroSection } from "./sections/hero-section";
import { ReviewsSection } from "./sections/reviews-sections";
import { ServicesSection } from "./sections/services-section";
import SupportInbox from "./sections/support-inbox";
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
      <SEO
        title={website.seo?.title}
        description={website.seo?.description}
        titleTemplate={website?.title}
        canonical={website.seo?.url}
        openGraph={{
          title: website.seo.openGraph?.title,
          description: website.seo.openGraph?.description,
          url: website.seo.openGraph?.url,
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

      <SupportInbox />
    </Box>
  );
};

export default HomeView;
