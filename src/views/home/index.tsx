import { FeatureType } from "@/types/feature";
import { ServiceType } from "@/types/service";
import { MemberType } from "@/types/team";
import { WebsiteType } from "@/types/website";
import "react-multi-carousel/lib/styles.css";
import FeaturesSection from "./sections/features";
import HeroSection from "./sections/hero";
import ServicesSection from "./sections/services";
import TeamsSection from "./sections/teams";

type Props = {
  website: WebsiteType;
  features: FeatureType[];
  services: ServiceType[];
  members: MemberType[];
};

const HomeView = (props: Props) => {
  const { website, features, services, members } = props;
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
        features={features}
        description={website.featuresSection.description}
        title={website.featuresSection.title}
      />
      <ServicesSection
        services={services}
        description={website.servicesSection.description}
        title={website.servicesSection.title}
      />
      <TeamsSection
        teams={members}
        description={website.teamsSection.description}
        title={website.teamsSection.title}
      />
    </>
  );
};

export default HomeView;
