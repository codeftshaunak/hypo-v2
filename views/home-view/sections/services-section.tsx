import { Heading } from "@chakra-ui/react";

import { Features } from "components/features";
import { ServiceItem } from "types/service";

type Props = {
  services: ServiceItem[];
  title?: string;
  description?: string;
};

export const ServicesSection = (props: Props) => {
  const { services, title, description } = props;

  return (
    <Features
      id="services"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          {title}
        </Heading>
      }
      description={<>{description}</>}
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={services.map((s) => ({ ...s, variant: "left-icon" }))}
    />
  );
};
