import { MotionBox } from "@/components/common/motion";
import { Button } from "@/components/ui/button";
import { LucideExternalLink } from "lucide-react";
import { Variants } from "motion/react";
import Link from "next/link";

// ----------------------------------------------------------------------

const variants: Variants = {
  show: {
    translateY: 0,
    opacity: 1,
  },
  hide: {
    translateY: -100,
    opacity: 0,
  },
  inview: {
    translateY: 0,
    opacity: 1,
  },
};

// ----------------------------------------------------------------------

type Props = { href: string };

const PreviewBtn = (props: Props) => {
  const { href } = props;
  return (
    <MotionBox
      variants={variants}
      layout
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
    >
      <Button
        title="Preview"
        size={"icon"}
        asChild
        variant={"secondary"}
        className="size-8"
      >
        <Link href={href} target="_blank">
          <LucideExternalLink />
        </Link>
      </Button>
    </MotionBox>
  );
};

export default PreviewBtn;
