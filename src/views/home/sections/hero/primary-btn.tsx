import { FallInPlace } from "@/components/common/motion";
import { Button } from "@/components/ui/button";
import { LinkType } from "@/types/hygraph";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";

type Props = LinkType;

const PrimaryBtn = (props: Props) => {
  const { title, url, path, newTab, text } = props;
  return (
    <FallInPlace>
      <Button asChild size={"xl"} className="group">
        <Link
          href={url || path || "#"}
          target={newTab ? "_blank" : undefined}
          title={title}
        >
          {text || title}{" "}
          <LucideArrowRight className="group-hover:translate-x-2 duration-200" />
        </Link>
      </Button>
    </FallInPlace>
  );
};

export default PrimaryBtn;
