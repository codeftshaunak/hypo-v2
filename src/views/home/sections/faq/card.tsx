import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { FAQType } from "@/types/faq";

type Props = {
  faq: FAQType;
};

const FAQCard = (props: Props) => {
  const { faq } = props;
  const { question, answer } = faq;
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <CardTitle className="text-base mb-3">{question}</CardTitle>
        <CardDescription className="text-base">{answer}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FAQCard;
