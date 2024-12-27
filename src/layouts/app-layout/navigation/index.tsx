"use client";

import { HStack } from "@chakra-ui/react";
import * as React from "react";

import MobileNav from "../mobile-nav";

import { AssetType, LinkType } from "@/types/hygraph";
import { getLinkHref } from "@/utils/get-link-href";
import ThemeToggle from "../theme-toggle";
import { NavLink } from "./link";

type Props = {
  navLinks: LinkType[];
  logo?: AssetType;
  title?: string;
};

const Navigation: React.FC<Props> = (props) => {
  const { navLinks } = props;

  return (
    <HStack spacing="2" flexShrink={0}>
      {Array.isArray(navLinks) &&
        navLinks.map((link, i) => {
          return (
            <NavLink
              display={["none", null, "block"]}
              href={getLinkHref(link)}
              key={i}
              activeId={undefined}
              path={link?.path}
              url={link?.url}
              target={link?.newTab ? "_blank" : undefined}
            >
              {link.title}
            </NavLink>
          );
        })}

      <ThemeToggle />

      <MobileNav {...props} />
    </HStack>
  );
};

export default Navigation;
