import { Text } from "@chakra-ui/react";

import { Pricing } from "components/pricing/pricing";

import pricing from "data/pricing";

export const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};
