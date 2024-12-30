import { FallInPlace } from "@/components/common/motion";
import { SectionContainer } from "@/components/common/section";

type Props = {
  html: string;
};

const ContentsSection = (props: Props) => {
  const { html } = props;
  return (
    <SectionContainer className="pt-0 lg:pt-5" wrap>
      <FallInPlace
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose dark:prose-invert !max-w-none"
      />
    </SectionContainer>
  );
};

export default ContentsSection;
