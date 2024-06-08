import { Section, SectionProps, SectionTitle } from "components/section";

import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TeamMember } from "types/team";
import TeamCard from "./team-card";

// ----------------------------------------------------------------------

type Props = {
  teams: TeamMember[];
  title: string;
  description: string;
} & Omit<SectionProps, "children">;

const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// ----------------------------------------------------------------------

export const TeamsSection = (props: Props) => {
  const { teams, title, description, ...rest } = props;

  return (
    <Section id="teams" {...rest}>
      <SectionTitle title={title} description={description} align="left" />

      <Carousel responsive={responsive} partialVisible>
        {teams.map((teamMember) => (
          <TeamCard member={teamMember} key={teamMember.firstName} />
        ))}
      </Carousel>
    </Section>
  );
};
