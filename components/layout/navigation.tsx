import { HStack } from "@chakra-ui/react";
import * as React from "react";

import { useRouter } from "next/router";

import siteConfig from "data/config";

import { NavLink } from "components/nav-link";

import { useScrollSpy } from "hooks/use-scrollspy";

import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";
import { MobileNavButton, MobileNavContent } from "components/mobile-nav";

import { LinkType } from "types/hygraph";
import { getLinkHref } from "utils/get-link-href";
import ThemeToggle from "./theme-toggle";

type Props = {
  navLinks: LinkType[];
};

const Navigation: React.FC<Props> = (props) => {
  const { navLinks } = props;

  const mobileNav = useDisclosure();
  const router = useRouter();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <HStack spacing="2" flexShrink={0}>
      {Array.isArray(navLinks) &&
        navLinks.map((link, i) => {
          return (
            <NavLink
              display={["none", null, "block"]}
              href={getLinkHref(link)}
              key={i}
              isActive={
                !!(
                  (link?.path && `#${activeId}` === link.path) ||
                  (link?.url && !!router.asPath.match(new RegExp(link.url)))
                )
              }
              target={link?.newTab ? "_blank" : undefined}
            >
              {link.title}
            </NavLink>
          );
        })}

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent
        navLinks={navLinks}
        isOpen={mobileNav.isOpen}
        onClose={mobileNav.onClose}
      />
    </HStack>
  );
};

export default Navigation;
