"use client";

import { Link } from "@saas-ui/react";
import { ReactNode } from "react";

type Props = { href?: string; children: ReactNode; scrollToTop?: boolean };

const LogoLink = (props: Props) => {
  const { href, children, scrollToTop } = props;
  return (
    <Link
      href={href}
      display="flex"
      borderRadius="sm"
      onClick={
        scrollToTop
          ? (e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }
          : undefined
      }
    >
      {children}
    </Link>
  );
};

export default LogoLink;
