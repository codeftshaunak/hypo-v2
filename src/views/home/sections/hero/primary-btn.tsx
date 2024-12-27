import { Button } from "@/components/ui/button";
import { LinkType } from "@/types/hygraph";
import { LucideArrowRight } from "lucide-react";

type Props = LinkType;

const PrimaryBtn = (props: Props) => {
  const { title } = props;
  return (
    <Button size={"xl"} className="group">
      {title}{" "}
      <LucideArrowRight className="group-hover:translate-x-2 duration-200" />
    </Button>
  );
};

export default PrimaryBtn;
