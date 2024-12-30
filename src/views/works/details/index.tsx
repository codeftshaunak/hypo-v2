import { ProjectType } from "@/types/work";
import ContentsSection from "./sections/contents";
import HeroSection from "./sections/hero";
import PromotionSection from "./sections/promotion";

type Props = {
  data: ProjectType;
};

const WorkDetailsView = (props: Props) => {
  const { data } = props;
  const { title, description, thumbnail, reference } = data;
  return (
    <>
      <HeroSection
        title={title}
        text={description}
        image={thumbnail}
        reference={reference}
      />
      {data.content?.html && <ContentsSection html={data.content.html} />}
      <PromotionSection />
    </>
  );
};

export default WorkDetailsView;
