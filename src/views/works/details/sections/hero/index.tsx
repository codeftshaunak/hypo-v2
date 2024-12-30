import BgGradient from "@/components/common/bg-gradient";
import Breadcrumbs from "@/components/common/breadcrumbs";
import { FallInPlace } from "@/components/common/motion";
import { Button } from "@/components/ui/button";
import { AssetType } from "@/types/hygraph";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  text: string;
  reference?: string | null;
  image?: AssetType;
};

const HeroSection = (props: Props) => {
  const { title, text, image, reference } = props;
  return (
    <>
      <BgGradient />
      <div className="container grid grid-cols-1 lg:grid-cols-2 max-lg:pb-20 py-32 px-4 sm:px-8 md:px-20 xl:px-32 gap-2 gap-y-10">
        <div className="flex flex-col justify-center">
          <FallInPlace className="mb-4">
            <Breadcrumbs
              items={[
                { title: "Home", href: "/" },
                { title: "Works", href: "/#works" },
                { title: "Details" },
              ]}
            />
          </FallInPlace>
          <FallInPlace
            element="h1"
            className="text-3xl sm:text-4xl font-extrabold mb-2 sm:mb-3 !leading-[1.25]"
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
            {reference && (
              <FallInPlace>
                <Button size={"xl"} variant={"outline"} asChild>
                  <Link href={reference} target="_blank">
                    Visit Now
                  </Link>
                </Button>
              </FallInPlace>
            )}
          </div>
        </div>
        <FallInPlace className="max-lg:row-start-1">
          {image && (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              className="max-w-full xl:max-w-lg ml-auto aspect-video rounded-lg"
              alt={title}
            />
          )}
        </FallInPlace>
      </div>
    </>
  );
};

export default HeroSection;
