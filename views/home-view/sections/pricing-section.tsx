import { Text } from "@chakra-ui/react";

import { Pricing } from "components/pricing/pricing";

// ----------------------------------------------------------------------

type Props = {
  plans: any[];
  title: string;
  description: string;
};

export const PricingSection = (props: Props) => {
  const { description, plans, title } = props;

  return (
    <Pricing title={title} description={description} plans={plans}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};
