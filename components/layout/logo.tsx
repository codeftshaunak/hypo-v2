import { Box, Flex, Heading, VisuallyHidden } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import * as React from "react";

export interface LogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

import siteConfig from "data/config";

export const Logo = ({ href = "/", onClick }: LogoProps) => {
  let logo;
  if (siteConfig.logo) {
    logo = <Box as={siteConfig.logo} height="32px" mt="-4px" />;
  } else {
    logo = (
      <Heading as="h1" size="md">
        {siteConfig.title}
      </Heading>
    );
  }

  return (
    <Flex flexShrink="0" alignItems="flex-start">
      <Link href={href} display="flex" borderRadius="sm" onClick={onClick}>
        {logo}
        <VisuallyHidden>{siteConfig.title}</VisuallyHidden>
      </Link>
    </Flex>
  );
};
