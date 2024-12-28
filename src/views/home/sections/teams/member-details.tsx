import { MotionDiv } from "@/components/common/motion";
import { getSocialIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MemberType } from "@/types/team";
import { Variants } from "motion/react";
import Link from "next/link";

const detailsVariants: Variants = {
  show: { opacity: 1, translateY: 0 },
  hide: { opacity: 0, translateY: 100 },
};

type Props = {
  member: MemberType;
};

const MemberDetails = (props: Props) => {
  const { member } = props;
  const { firstName, lastName, position, externalLinks } = member;
  return (
    <MotionDiv
      variants={detailsVariants}
      className="bg-background text-center py-4 px-4 rounded-md w-full select-text"
    >
      <h4 className="text-lg font-bold mb-0.5 select-text">
        {firstName} {lastName}
      </h4>
      <h5 className="text-sm text-muted-foreground">{position}</h5>

      <div className="mt-5 flex items-center gap-2 flex-wrap justify-center">
        {externalLinks.map((item, index) => {
          const Icon = getSocialIcon(item.icon);
          return (
            <Button
              key={index}
              asChild
              size="icon"
              className="size-8"
              variant={"outline"}
            >
              <Link
                href={item.url || item.path || "#"}
                target={item.newTab ? "_blank" : ""}
              >
                <Icon.icon />
              </Link>
            </Button>
          );
        })}
      </div>
    </MotionDiv>
  );
};

export default MemberDetails;
