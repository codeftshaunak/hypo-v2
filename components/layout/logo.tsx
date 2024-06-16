import { Flex, Heading, VisuallyHidden } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import * as React from "react";

export interface LogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  title?: string;
  logo?: AssetType;
}

import Image from "next/image";
import { AssetType } from "types/hygraph";

export const Logo = (props: LogoProps) => {
  const { href, logo, onClick, title } = props;

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
      <Link href={href} display="flex" borderRadius="sm" onClick={onClick}>
        {renderLogo}
        <VisuallyHidden>{title}</VisuallyHidden>
      </Link>
    </Flex>
  );
};
