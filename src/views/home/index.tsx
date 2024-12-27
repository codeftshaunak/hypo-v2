import { FeatureType } from "@/types/feature";
import { ServiceType } from "@/types/service";
import { WebsiteType } from "@/types/website";
import FeaturesSection from "./sections/features";
import HeroSection from "./sections/hero";
import ServicesSection from "./sections/services";

type Props = {
  website: WebsiteType;
  features: FeatureType[];
  services: ServiceType[];
};

const HomeView = (props: Props) => {
  const { website, features, services } = props;
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
    </>
  );
};

export default HomeView;
