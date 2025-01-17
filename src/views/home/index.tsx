import { FAQType } from "@/types/faq";
import { FeatureType } from "@/types/feature";
import { PlanType } from "@/types/plan";
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
  plans: PlanType[];
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
      {props.plans?.length > 0 ? (
        <PlanSection
          title={website.plansSection.title}
          description={website.plansSection.description}
          plans={props.plans}
        />
      ) : null}
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
