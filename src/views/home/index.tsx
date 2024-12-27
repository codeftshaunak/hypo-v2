import { FeatureType } from "@/types/feature";
import { WebsiteType } from "@/types/website";
import FeaturesSection from "./sections/features";
import HeroSection from "./sections/hero";

type Props = {
  website: WebsiteType;
  features: FeatureType[];
};

const HomeView = (props: Props) => {
  const { website, features } = props;
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
    </>
  );
};

export default HomeView;
