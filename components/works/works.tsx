import { Section, SectionProps, SectionTitle } from "components/section";
import works from "data/works";

import { Grid, GridItem } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import Work from "./work";

// ----------------------------------------------------------------------

type Props = {
  title: string;
  description: string;
} & Omit<SectionProps, "children">;

// ----------------------------------------------------------------------

const Works = (props: Props) => {
  const { title, description, ...rest } = props;

  return (
    <Section {...rest}>
      <SectionTitle title={title} description={description} align="left" />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {works.map((work, index) => (
          <GridItem key={work.title}>
            <Work project={work} index={index} />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default Works;
