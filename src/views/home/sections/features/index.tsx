import { FeatureType } from "@/types/feature";
import { SectionContainer, SectionHeader } from "../../common/section";
import FeatureCard from "./card";

type Props = {
  title?: string;
  description?: string;
  features: FeatureType[];
};

const FeaturesSection = (props: Props) => {
  const { description, title, features } = props;
  return (
    <SectionContainer className="max-w-6xl w-full">
      <SectionHeader title={title} text={description} centered />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <FeatureCard key={item.id} feature={item} index={index + 1} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
