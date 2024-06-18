import { Section, SectionProps, SectionTitle } from "components/section";

import { Grid, GridItem } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import { ProjectType } from "types/work";
import Work from "./work-card";

// ----------------------------------------------------------------------

type Props = {
  projects: ProjectType[];
  title?: string;
  description?: string;
} & Omit<SectionProps, "children">;

// ----------------------------------------------------------------------

export const WorksSection = (props: Props) => {
  const { projects, title, description, ...rest } = props;

  return (
    <Section id="works" {...rest}>
      <SectionTitle title={title} description={description} align="left" />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {[...projects].map((work, index) => (
          <GridItem key={`${work.id}-${index}`}>
            <Work project={work} index={index} />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};
