import { Box, Button, Container, Flex, Icon, Stack } from "@chakra-ui/react";
import Image from "next/image";

import { BackgroundGradient } from "components/gradients/background-gradient";
import { Hero } from "components/hero";
import { FallInPlace } from "components/motion/fall-in-place";
import { FiArrowRight } from "react-icons/fi";

import Link from "next/link";
import { LinkType } from "types/hygraph";
import { getLinkHref } from "utils/get-link-href";

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  description?: string;
  primaryLink?: LinkType;
  secondaryLink?: LinkType;
  imageUrl: string;
  imageRatio: number;
};

export const HeroSection = (props: Props) => {
  const {
    title = "",
    description = "",
    primaryLink,
    secondaryLink,
    imageUrl,
    imageRatio,
  } = props;

  const renderPrimaryLink = primaryLink?.title && (
    <Link
      href={getLinkHref(primaryLink)}
      target={primaryLink?.newTab ? "_blank" : undefined}
      passHref
    >
      <Button
        colorScheme="primary"
        size="lg"
        rightIcon={
          <Icon
            as={FiArrowRight}
            sx={{
              transitionProperty: "common",
              transitionDuration: "normal",
              ".chakra-button:hover &": {
                transform: "translate(5px)",
              },
            }}
          />
        }
      >
        {primaryLink.title}
      </Button>
    </Link>
  );

  const renderSecondaryLink = secondaryLink?.title && (
    <Link
      href={getLinkHref(secondaryLink)}
      target={secondaryLink?.newTab ? "_blank" : undefined}
      passHref
    >
      <Button size="lg" variant="outline">
        {secondaryLink.title}
      </Button>
    </Link>
  );

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 32 }} pb="40">
        <Stack
          direction={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", md: "center", lg: "center" }}
        >
          <Hero
            id="home"
            justifyContent="flex-start"
            py={0}
            px="0"
            title={<FallInPlace>{title}</FallInPlace>}
            description={
              <FallInPlace delay={0.4} fontWeight="medium" pb={5}>
                {description}
              </FallInPlace>
            }
            containerProps={{ width: "100%" }}
            width={{ base: "100%", sm: "auto" }}
          >
            <FallInPlace delay={0.8}>
              <Flex
                rowGap={2}
                columnGap={4}
                alignItems="center"
                flexWrap={"wrap"}
              >
                {renderPrimaryLink}
                {renderSecondaryLink}
              </Flex>
            </FallInPlace>
          </Hero>
          <Box display={{ base: "none", lg: "block" }} flex={1}>
            <FallInPlace delay={1}>
              <Box
                position={"relative"}
                aspectRatio={imageRatio}
                width={"100%"}
                maxW={"500px"}
                ml={"auto"}
              >
                <Image src={imageUrl} fill alt={title} priority />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
