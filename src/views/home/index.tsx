import { WebsiteType } from "@/types/website";
import HeroSection from "./sections/hero";

type Props = {
  website: WebsiteType;
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
    </>
  );
};

export default HomeView;
