import { chakra, SimpleGrid } from "@chakra-ui/react";
import { Section, SectionProps, SectionTitle } from "components/section";
import { FAQType } from "types/faq";

interface FaqProps extends Omit<SectionProps, "title" | "children"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  items: FAQType[];
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = "Frequently asked questions",
    description,
    items = [],
  } = props;
  return (
    <Section id="faq">
      <SectionTitle title={title} description={description} />

      <SimpleGrid columns={[1, null, 2]} spacingY={10} spacingX="20">
        {items?.map(({ question, answer }, i) => {
          return <FaqItem key={i} question={question} answer={answer} />;
        })}
      </SimpleGrid>
    </Section>
  );
};

export interface FaqItemProps {
  question: React.ReactNode;
  answer: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <chakra.dl>
      <chakra.dt fontWeight="semibold" mb="2">
        {question}
      </chakra.dt>
      <chakra.dd color="muted">{answer}</chakra.dd>
    </chakra.dl>
  );
};
