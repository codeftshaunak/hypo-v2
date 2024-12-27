import { Button } from "@/components/ui/button";
import { LinkType } from "@/types/hygraph";
import Link from "next/link";

type Props = LinkType;

const SecondaryBtn = (props: Props) => {
  const { title, url, path, newTab } = props;
  return (
    <Button asChild size={"xl"} variant={"outline"}>
      <Link href={url || path || "#"} target={newTab ? "_blank" : undefined}>
        {title}
      </Link>
    </Button>
  );
};

export default SecondaryBtn;
