import { ServiceType } from "@/types/service";
import { SectionContainer, SectionHeader } from "../../common/section";
import ServiceCard from "./card";

type Props = {
  title?: string;
  description?: string;
  services: ServiceType[];
};

const ServicesSection = (props: Props) => {
  const { services, description, title } = props;
  return (
    <SectionContainer wrap>
      <SectionHeader title={title} text={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
        {services.map((item) => (
          <ServiceCard service={item} key={item.id} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;
