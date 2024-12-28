import { FallInPlace } from "@/components/common/motion";
import { Button } from "@/components/ui/button";
import { LinkType } from "@/types/hygraph";
import Link from "next/link";

type Props = LinkType;

const SecondaryBtn = (props: Props) => {
  const { title, url, path, newTab, text } = props;
  return (
    <FallInPlace>
      <Button asChild size={"xl"} variant={"outline"}>
        <Link
          href={url || path || "#"}
          target={newTab ? "_blank" : undefined}
          title={title}
        >
          {text || title}
        </Link>
      </Button>
    </FallInPlace>
  );
};

export default SecondaryBtn;
