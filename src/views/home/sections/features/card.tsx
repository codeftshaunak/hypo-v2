import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FeatureType } from "@/types/feature";
import { alpha } from "@/utils/color";
import { prefixZero } from "@/utils/number";
import Image from "next/image";

type Props = {
  feature: FeatureType;
  index: number;
};

const FeatureCard = (props: Props) => {
  const { feature, index } = props;
  const { description, themeColor, thumbnail, title } = feature;
  return (
    <Card
      style={{
        borderColor: themeColor.hex,
        backgroundColor: alpha(themeColor.hex, 0.25),
      }}
      className="flex flex-col h-full"
    >
      <CardHeader>
        <span
          className="inline-flex items-center justify-center rounded-full size-10 border"
          style={{ borderColor: themeColor.hex }}
        >
          {prefixZero(index)}
        </span>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-4 leading-snug">{title}</CardTitle>
        <CardDescription className="text-foreground leading-normal mb-10">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Image
          src={thumbnail.url}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={title}
          className="max-w-56 w-full mx-auto"
        />
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
