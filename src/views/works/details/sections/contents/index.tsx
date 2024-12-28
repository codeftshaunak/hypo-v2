import { FallInPlace } from "@/components/common/motion";
import { SectionContainer } from "@/views/home/common/section";
import { dummy } from "./dummy";

type Props = {};

const ContentsSection = (props: Props) => {
  return (
    <SectionContainer className="pt-0 lg:pt-5" wrap>
      <FallInPlace
        dangerouslySetInnerHTML={{ __html: dummy }}
        className="prose dark:prose-invert !max-w-none"
      />
    </SectionContainer>
  );
};

export default ContentsSection;
