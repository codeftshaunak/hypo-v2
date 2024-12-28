import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReviewType } from "@/types/review";
import { Variants } from "motion/react";

type Props = {
  review: ReviewType;
};

const variants: Variants = {
  show: { opacity: 1, translateY: 0 },
  hide: { opacity: 0, translateY: 100 },
};

const ReviewCard = (props: Props) => {
  const { review } = props;
  const { avatar, message, name, position } = review;
  return (
    <Card className="p-4 lg:p-5">
      <CardHeader className="flex flex-row gap-4 items-center space-y-0 p-0">
        <Avatar className="size-8 shrink-0">
          <AvatarFallback>name</AvatarFallback>
          <AvatarImage src={avatar.url} />
        </Avatar>
        <div>
          <CardTitle className="text-base">{name}</CardTitle>
          <CardDescription className="text-sm">{position}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0 mt-5">
        <p className="text-[15px]">{message}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
