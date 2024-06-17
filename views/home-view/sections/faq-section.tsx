import { Faq } from "components/faq";
import { FAQType } from "types/faq";

type Props = {
  faqs: FAQType[];
  title?: string;
  description?: string;
};

export const FaqSection = (props: Props) => {
  const { description, faqs, title } = props;

  return <Faq title={title} description={description} items={faqs} />;
};
