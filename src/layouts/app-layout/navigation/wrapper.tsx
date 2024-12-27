"use client";

import siteConfig from "@/data/config";
import { useScrollSpy } from "@/hooks/use-scrollspy";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const isBrowser = typeof window !== "undefined";

type WrapperProps = {
  children: (props: {
    activeId: string;
    pathname: string;
    mobileNav: ReturnType<typeof useDisclosure>;
    mobileNavBtnRef: React.MutableRefObject<HTMLButtonElement | undefined>;
  }) => React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const mobileNav = useDisclosure();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    { threshold: 0.75 }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  if (!isBrowser) {
    <>{children({} as any)}</>;
  }

  return (
    <>
      {children({
        activeId: activeId as string,
        pathname,
        mobileNav,
        mobileNavBtnRef,
      })}
    </>
  );
};

export default Wrapper;
