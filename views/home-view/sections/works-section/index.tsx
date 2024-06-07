import { Section, SectionProps, SectionTitle } from "components/section";

import { Grid, GridItem } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import { WorkItem } from "types/work";
import Work from "./work-card";

// ----------------------------------------------------------------------

type Props = {
  works: WorkItem[];
} & Omit<SectionProps, "children">;

// ----------------------------------------------------------------------

export const WorksSection = (props: Props) => {
  const { works, ...rest } = props;

  return (
    <Section id="works" {...rest}>
      <SectionTitle
        title="Showcase of Excellence"
        description="Discover the standout projects that exemplify our commitment to quality and innovation. See how we've helped businesses transform and succeed."
        align="left"
      />

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
