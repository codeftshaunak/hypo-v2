import { SectionContainer, SectionHeader } from "@/components/common/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MemberType } from "@/types/team";
import TeamCard from "./card";

type Props = {
  title?: string;
  description?: string;
  teams: MemberType[];
};

const TeamsSection = (props: Props) => {
  const { teams, description, title } = props;
  return (
    <SectionContainer id="teams" wrap>
      <SectionHeader title={title} text={description} />
      <Carousel
        opts={{
          breakpoints: {
            "(min-width: 640px)": {
              slidesToScroll: 2,
            },
          },
        }}
      >
        <div className="flex items-center justify-end mb-2 gap-2 lg:hidden">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
        <CarouselContent>
          {teams.map((item, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
              <TeamCard member={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="max-lg:hidden" />
        <CarouselNext className="max-lg:hidden" />
      </Carousel>
    </SectionContainer>
  );
};

export default TeamsSection;
