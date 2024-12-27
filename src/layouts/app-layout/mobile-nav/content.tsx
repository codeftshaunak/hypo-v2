import useRouteChanged from "@/hooks/use-route-changed";
import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
// import { getRoutes } from '@/layouts/mdx'
import { AssetType, LinkType } from "@/types/hygraph";
import { getLinkHref } from "@/utils/get-link-href";
import * as React from "react";
import { RemoveScroll } from "react-remove-scroll";
import { Logo } from "../logo";
import MobileNavLink from "./link";

interface MobileNavContentProps {
  isOpen?: boolean;
  onClose?: () => void;
  navLinks: LinkType[];
  logo?: AssetType;
  title?: string;
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose = () => {}, navLinks, logo, title } = props;
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);
  const bgColor = useColorModeValue("whiteAlpha.900", "blackAlpha.900");

  useRouteChanged(onClose);

  /**
   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
   * Result: We'll close the menu
   */
  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false });

  React.useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose();
    }
  }, [showOnBreakpoint, onClose]);

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.div
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex
              direction="column"
              w="100%"
              bg={bgColor}
              h="100vh"
              overflow="auto"
              pos="absolute"
              top="0"
              left="0"
              zIndex="modal"
              pb="8"
              backdropFilter="blur(5px)"
            >
              <Box>
                <Flex justify="space-between" px="8" pt="4" pb="4">
                  <Logo logo={logo} title={title} />
                  <HStack spacing="5">
                    <CloseButton ref={closeBtnRef} onClick={onClose} />
                  </HStack>
                </Flex>
                <Stack alignItems="stretch" spacing="0">
                  {Array.isArray(navLinks) &&
                    navLinks.map((link, i) => {
                      return (
                        <MobileNavLink
                          href={getLinkHref(link)}
                          key={i}
                          label={link.title}
                          target={link?.newTab ? "_blank" : undefined}
                          onClick={onClose}
                        >
                          {link.title}
                        </MobileNavLink>
                      );
                    })}
                </Stack>
              </Box>
            </Flex>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}

export default MobileNavContent;
