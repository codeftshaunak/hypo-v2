import { Grid, GridItem } from "@chakra-ui/react";
import { Section, SectionProps, SectionTitle } from "components/section";
import { FeatureCard } from "./feature-card";

// ----------------------------------------------------------------------

type Props = {} & Omit<SectionProps, "children">;

const data = [
  {
    title: "Custom Software Solution",
    text: "With SEOMY, you get everything you need for a fast website",
    link: "#",
    img: "/static/pages/home/feature-1.jpg",
    color: "#A1C081",
  },
  {
    title: "Business technology solution",
    text: "With SEOMY, you get everything you need for a fast website",
    link: "#",
    img: "/static/pages/home/feature-2.jpg",
    color: "#FFBD4D",
  },
  {
    title: "Idea generate & <br/>solution",
    text: "With SEOMY, you get everything you need for a fast website",
    link: "#",
    img: "/static/pages/home/feature-3.jpg",
    color: "#FF4B1B",
  },
];

// ----------------------------------------------------------------------

export const FeaturesSection = (props: Props) => {
  const { ...rest } = props;

  return (
    <Section innerWidth={"container.lg"} id="features" {...rest}>
      <SectionTitle
        title={"What makes different"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellendus!"
        }
        align="center"
      />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {data.map((feature, index) => (
          <GridItem key={index}>
            <FeatureCard feature={feature} index={index + 1} height={"full"} />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};
