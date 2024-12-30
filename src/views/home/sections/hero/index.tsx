import BgGradient from "@/components/common/bg-gradient";
import { FallInPlace } from "@/components/common/motion";
import { AssetType, LinkType } from "@/types/hygraph";
import Image from "next/image";
import PrimaryBtn from "./primary-btn";
import SecondaryBtn from "./secondary-btn";

type Props = {
  title: string;
  text: string;
  primaryLink: LinkType;
  secondaryLink: LinkType;
  image?: AssetType;
};

const HeroSection = (props: Props) => {
  const { title, text, primaryLink, secondaryLink, image } = props;
  return (
    <>
      <BgGradient />
      <div className="container grid grid-cols-1 lg:grid-cols-2 py-32 px-4 sm:px-8 md:px-20 xl:px-32 gap-2">
        <div className="flex flex-col justify-center">
          <FallInPlace
            element="h1"
            className="text-4xl sm:text-5xl font-extrabold mb-8 !leading-[1.25]"
          >
            {title}
          </FallInPlace>
          <FallInPlace
            element="p"
            className="text-lg sm:text-xl text-muted-foreground mb-6 leading-normal"
          >
            {text}
          </FallInPlace>

          <div className="flex items-center flex-wrap gap-4">
            {primaryLink && <PrimaryBtn {...primaryLink} />}
            {secondaryLink && <SecondaryBtn {...secondaryLink} />}
          </div>
        </div>
        <FallInPlace className="hidden lg:block">
          {image && (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              className="max-w-full xl:max-w-lg ml-auto"
              alt={title}
            />
          )}
        </FallInPlace>
      </div>
    </>
  );
};

export default HeroSection;
