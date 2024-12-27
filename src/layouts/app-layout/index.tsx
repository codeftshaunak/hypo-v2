"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";

import { WebsiteType } from "@/types/website";
import { Footer } from "./footer";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
  website: WebsiteType;
}

const AppLayout: React.FC<LayoutProps> = (props) => {
  const { children, website } = props;
  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      {/* <AnnouncementBanner {...announcementProps} /> */}
      <Header website={website} />
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      <Footer website={website} />
    </Box>
  );
};

export default AppLayout;
