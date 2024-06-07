import { Box, Container, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import * as React from "react";

import { BackgroundGradient } from "components/gradients/background-gradient";
import { Hero } from "components/hero";
import { FallInPlace } from "components/motion/fall-in-place";
import { FiArrowRight } from "react-icons/fi";

import { ButtonLink } from "components/button-link/button-link";

export const HeroSection: React.FC = () => {
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
            title={
              <FallInPlace>
                Solve Business Challenges With
                <Text as="span" color="primary.500">
                  {" "}
                  HypoMatrix
                </Text>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium" pb={5}>
                Achieve unparalleled digital success with HypoMatrix. Our
                innovative solutions and expert team are here to elevate your
                brand and reach new heights.
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
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href="#"
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
                  Get Started
                </ButtonLink>
                <ButtonLink size="lg" href="#benefits" variant="outline">
                  Learn More
                </ButtonLink>
              </Flex>
            </FallInPlace>
          </Hero>
          <Box display={{ base: "none", lg: "block" }} flex={1}>
            <FallInPlace delay={1}>
              <Box
                position={"relative"}
                aspectRatio={521 / 534}
                width={"100%"}
                maxW={"500px"}
                ml={"auto"}
              >
                <Image
                  src="/static/pages/home/hero.png"
                  fill
                  alt="Screenshot of a ListPage in HypoMatrix Pro"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
