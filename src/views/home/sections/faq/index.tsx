import { FAQType } from "@/types/faq";
import { SectionContainer, SectionHeader } from "../../common/section";
import FAQCard from "./card";

type Props = {
  title?: string;
  description?: string;
  faqs: FAQType[];
};

const FAQSection = (props: Props) => {
  const { description, title, faqs } = props;
  return (
    <SectionContainer wrap id="faq">
      <SectionHeader title={title} text={description} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-16">
        {faqs.map((item) => (
          <FAQCard key={item.id} faq={item} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FAQSection;
