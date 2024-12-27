"use client";

import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean;
  href?: string;
  id?: string;
  path?: string;
  url?: string;
  activeId?: string;
}

export const NavLink = forwardRef<NavLinkProps, "a">((props, ref) => {
  const { href, type, isActive, path, url, activeId, ...rest } = props;
  const pathname = usePathname();

  return (
    <Button
      as={Link}
      href={href}
      ref={ref}
      variant="nav-link"
      lineHeight="2rem"
      isActive={
        !!(
          (path && `#${activeId}` === path) ||
          (url && !!pathname.match(new RegExp(url)))
        )
      }
      fontWeight="medium"
      {...rest}
    />
  );
});

NavLink.displayName = "NavLink";
