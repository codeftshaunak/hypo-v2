import { LinkType } from "@/types/hygraph";
import { getLinkHref } from "@/utils/get-link-href";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  data: LinkType;
};

const SecondaryCTA = (props: Props) => {
  const { data } = props;
  return (
    <Link
      href={getLinkHref(data)}
      target={data?.newTab ? "_blank" : undefined}
      passHref
    >
      <Button size="lg" variant="outline">
        {data.title}
      </Button>
    </Link>
  );
};

export default SecondaryCTA;
