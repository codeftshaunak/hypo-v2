import { AssetType } from "@/types/hygraph";
import { Flex, Heading, VisuallyHidden } from "@chakra-ui/react";
import Image from "next/image";
import LogoLink from "./link";

export interface LogoProps {
  href?: string;
  title?: string;
  logo?: AssetType;
  scrollToTop?: boolean;
}

export const Logo = (props: LogoProps) => {
  const { href, logo, title, scrollToTop } = props;

  const renderLogo = logo ? (
    <Image
      src={logo.url}
      alt={title || "Site Title"}
      height={32}
      width={logo.width}
      style={{ marginTop: "-4px" }}
    />
  ) : (
    <Heading as="h1" size="md">
      {title || "Site Title"}
    </Heading>
  );

  return (
    <Flex flexShrink="0" alignItems="flex-start">
      <LogoLink href={href} scrollToTop={scrollToTop}>
        {renderLogo}
        <VisuallyHidden>{title}</VisuallyHidden>
      </LogoLink>
    </Flex>
  );
};
