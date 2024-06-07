import { Heading } from "@chakra-ui/react";

import { Features } from "components/features";
import { ServiceItem } from "types/service";

type Props = {
  services: ServiceItem[];
};

export const ServicesSection = (props: Props) => {
  const { services } = props;

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
          Your Success, Our Services
        </Heading>
      }
      description={
        <>
          Discover a comprehensive suite of digital services designed to propel
          your business forward. From innovative web development to targeted
          digital marketing, our expert team is dedicated to creating customized
          solutions that drive results.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={services.map((s) => ({ ...s, variant: "left-icon" }))}
    />
  );
};
