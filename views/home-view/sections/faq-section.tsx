import { Faq } from "components/faq";

type Props = {
  faqs: any[];
  title?: string;
  description?: string;
};

export const FaqSection = (props: Props) => {
  const { description, faqs, title } = props;

  return <Faq title={title} description={description} items={faqs} />;
};
