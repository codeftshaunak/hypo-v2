"use client";

import { AssetType, LinkType } from "@/types/hygraph";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";
import React from "react";
import MobileNavButton from "./button";
import MobileNavContent from "./content";

type Props = {
  navLinks: LinkType[];
  logo?: AssetType;
  title?: string;
};

const MobileNav = (props: Props) => {
  const { navLinks, logo, title } = props;
  const mobileNav = useDisclosure();
  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <>
      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent
        navLinks={navLinks}
        isOpen={mobileNav.isOpen}
        onClose={mobileNav.onClose}
        logo={logo}
        title={title}
      />
    </>
  );
};

export default MobileNav;
