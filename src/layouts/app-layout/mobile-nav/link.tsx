"use client";

import { LinkProps, useColorModeValue } from "@chakra-ui/react";
import { Link as UiLink } from "@saas-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavLinkProps extends LinkProps {
  label: string;
  href?: string;
  isActive?: boolean;
}

const MobileNavLink = (props: NavLinkProps) => {
  const { href, children, isActive, ...rest } = props;
  const pathname = usePathname();
  const bgActiveHoverColor = useColorModeValue("gray.100", "whiteAlpha.100");

  const [, group] = href?.split("/") || [];
  const active = isActive ?? pathname.includes(group);

  return (
    <UiLink
      href={href}
      as={Link}
      display="inline-flex"
      flex="1"
      minH="40px"
      px="8"
      py="3"
      transition="0.2s all"
      fontWeight={active ? "semibold" : "medium"}
      borderColor={active ? "purple.400" : undefined}
      borderBottomWidth="1px"
      color={active ? "white" : undefined}
      _hover={{
        bg: active ? "purple.500" : bgActiveHoverColor,
      }}
      {...rest}
    >
      {children}
    </UiLink>
  );
};

export default MobileNavLink;
