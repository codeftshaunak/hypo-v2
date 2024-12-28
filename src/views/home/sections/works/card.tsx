import { MotionBox } from "@/components/common/motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectType } from "@/types/work";
import Image from "next/image";
import PreviewBtn from "./preview-btn";

type Props = {
  project: ProjectType;
};

const WorkCard = (props: Props) => {
  const { project } = props;
  const { description, reference, technologies, thumbnail, title } = project;

  return (
    <MotionBox
      initial="hide"
      whileHover={"show"}
      whileInView={"inview"}
      animate="hide"
      md={{ whileInView: "" }}
    >
      <Card className="relative overflow-hidden">
        <CardHeader className="relative aspect-video p-0">
          <Image
            alt={title}
            src={thumbnail.url}
            fill
            className="object-cover"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg line-clamp-1" title={title}>
            {title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>

        {reference && (
          <div className="absolute top-1.5 right-1.5">
            <PreviewBtn href={reference} />
          </div>
        )}
      </Card>
    </MotionBox>
  );
};

export default WorkCard;
