import { Grid, GridItem } from "@chakra-ui/react";
import { Section, SectionProps, SectionTitle } from "components/section";
import { FeatureItem } from "types/feature";
import { FeatureCard } from "./feature-card";

// ----------------------------------------------------------------------

type Props = {
  features: FeatureItem[];
  title: string;
  description: string;
} & Omit<SectionProps, "children">;

// ----------------------------------------------------------------------

export const FeaturesSection = (props: Props) => {
  const { features, title, description, ...rest } = props;

  return (
    <Section innerWidth={"container.lg"} id="features" {...rest}>
      <SectionTitle title={title} description={description} align="center" />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {features.map((feature, index) => (
          <GridItem key={index}>
            <FeatureCard feature={feature} index={index + 1} height={"full"} />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};
