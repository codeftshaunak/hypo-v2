import { MotionDiv } from "@/components/common/motion";
import { MemberType } from "@/types/team";
import Image from "next/image";
import MemberDetails from "./member-details";

type Props = {
  member: MemberType;
};

const TeamCard = (props: Props) => {
  const { member } = props;
  return (
    <MotionDiv
      initial="hide"
      whileHover={"show"}
      whileInView={"show"}
      lg={{
        whileInView: "hide",
      }}
      className="relative w-full aspect-[0.75/1] rounded-lg overflow-hidden select-none"
      animate="hide"
    >
      <Image
        src={member.avatar.url}
        alt={`${member.firstName} ${member.lastName} Image`}
        fill
        className="object-cover -z-[1]"
      />
      <div className="absolute bottom-5 left-1/2 w-4/5 -translate-x-1/2">
        <MemberDetails member={member} />
      </div>
    </MotionDiv>
  );
};

export default TeamCard;
