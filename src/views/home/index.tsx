import { FAQType } from "@/types/faq";
import { FeatureType } from "@/types/feature";
import { ReviewType } from "@/types/review";
import { ServiceType } from "@/types/service";
import { MemberType } from "@/types/team";
import { WebsiteType } from "@/types/website";
import { ProjectType } from "@/types/work";
import "react-multi-carousel/lib/styles.css";
import FAQSection from "./sections/faq";
import FeaturesSection from "./sections/features";
import HeroSection from "./sections/hero";
import PlanSection from "./sections/pricing";
import ReviewsSection from "./sections/reviews";
import ServicesSection from "./sections/services";
import TeamsSection from "./sections/teams";
import WorksSection from "./sections/works";

type Props = {
  website: WebsiteType;
  features: FeatureType[];
  services: ServiceType[];
  members: MemberType[];
  projects: ProjectType[];
  reviews: ReviewType[];
  faqs: FAQType[];
};

const HomeView = (props: Props) => {
  const { website } = props;
  return (
    <>
      <HeroSection
        title={website.heroSection.title || ""}
        text={website.heroSection.description || ""}
        primaryLink={website.primaryLink}
        secondaryLink={website.secondaryLink}
        image={website.heroImage}
      />
      <FeaturesSection
        features={props.features}
        description={website.featuresSection.description}
        title={website.featuresSection.title}
      />
      <ServicesSection
        services={props.services}
        description={website.servicesSection.description}
        title={website.servicesSection.title}
      />
      <PlanSection
        title="Flexible Plans for Every Need"
        description="Transparent pricing, no hidden fees—choose what fits you best."
        plans={[
          {
            id: "1",
            name: "Basic",
            description: "For individuals and small teams",
            price: 9,
            featured: false,
            features: ["Up to 5 projects", "Basic analytics", "24/7 support"],
          },
          {
            id: "2",
            name: "Pro",
            description: "For growing businesses",
            price: 29,
            featured: true,
            features: [
              "Unlimited projects",
              "Advanced analytics",
              "Priority support",
              "Custom integrations",
            ],
          },
          {
            id: "3",
            name: "Enterprise",
            description: "For large organizations",
            price: 99,
            featured: false,
            features: [
              "Unlimited everything",
              "Advanced security",
              "Dedicated account manager",
              "Custom solutions",
            ],
          },
        ]}
      />
      <TeamsSection
        teams={props.members}
        description={website.teamsSection.description}
        title={website.teamsSection.title}
      />
      <WorksSection
        projects={props.projects}
        description={website.worksSection.description}
        title={website.worksSection.title}
      />
      <ReviewsSection
        reviews={props.reviews}
        description={website.reviewsSection.description}
        title={website.reviewsSection.title}
      />
      <FAQSection
        faqs={props.faqs}
        description={website.faqSection.description}
        title={website.faqSection.title}
      />
    </>
  );
};

export default HomeView;
