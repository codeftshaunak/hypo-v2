import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";

import { Br } from "@saas-ui/react";
import { Faq } from "components/faq";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Hero } from "components/hero";
import { FallInPlace } from "components/motion/fall-in-place";
import { Pricing } from "components/pricing/pricing";
import { Em } from "components/typography";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCopy,
  FiFlag,
  FiLock,
  FiSearch,
  FiSliders,
  FiTrendingUp,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import pricing from "data/pricing";
import testimonials from "data/testimonials";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import { Teams } from "components/teams";
import { Works } from "components/works";
import { FaRegLifeRing, FaRegLightbulb } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="HypoMatrix - Your Digital Agency"
        description="Hypomatrix web design and development agency. Best website development agency in the world. Web development and software development project develop by great developer with morder technology react.js next.js node.js python mongodb express.js."
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <ServicesSection />

        <TeamSection />

        <WorksSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Build beautiful
                <Br /> software faster
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium" pb={5}>
                HypoMatrix is a <Em>React component library</Em>
                <Br /> that doesn&apos;t get in your way and helps you <Br />{" "}
                build intuitive SaaS products with speed.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
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
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in HypoMatrix Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Innovative Solutions",
            icon: FaRegLightbulb,
            description:
              "Cutting-edge strategies to elevate your online presence and drive growth.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Expert Team",
            icon: FiUsers,
            description:
              "Highly skilled professionals dedicated to delivering top-tier digital services.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Customized Approach",
            icon: FiSliders,
            description:
              "Tailored solutions designed to meet your unique business needs and objectives.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "24/7 Support",
            icon: FaRegLifeRing,
            description:
              "Around-the-clock assistance to ensure seamless operation and prompt issue resolution.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build HypoMatrix on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “HypoMatrix helped us set up a beautiful modern UI in no time. It saved
        us hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            "authentication",
            "navigation",
            "crud",
            "settings",
            "multi-tenancy",
            "layouts",
            "billing",
            "a11y testing",
            "server-side rendering",
            "documentation",
            "onboarding",
            "storybooks",
            "theming",
            "upselling",
            "unit testing",
            "feature flags",
            "responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const ServicesSection = () => {
  return (
    <Features
      id="services"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Your Success, Our Services
        </Heading>
      }
      description={
        <>
          Discover a comprehensive suite of digital services designed to propel
          your business forward. From innovative web development to targeted
          digital marketing, our expert team is dedicated to creating customized
          solutions that drive results.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Web Development",
          icon: FiBox,
          description:
            "Custom-built websites to enhance user experience and drive engagement.",
          variant: "left-icon",
        },
        {
          title: "Digital Marketing",
          icon: FiLock,
          description:
            "Strategic campaigns to boost your online presence and attract your target audience.",
          variant: "left-icon",
        },
        {
          title: "SEO Optimization",
          icon: FiSearch,
          description:
            "Optimize your website for search engines to increase visibility and traffic.",
          variant: "left-icon",
        },
        {
          title: "Graphic Design",
          icon: FiUserPlus,
          description:
            "Visually stunning designs to effectively communicate your brand message.",
          variant: "left-icon",
        },
        {
          title: "Content Creation",
          icon: FiFlag,
          description:
            "High-quality content tailored to engage and inform your audience.",
          variant: "left-icon",
        },
        {
          title: "Social Media Management",
          icon: FiTrendingUp,
          description:
            "Comprehensive social media strategies to grow your brand and connect with customers.",
          variant: "left-icon",
        },
      ]}
    />
  );
};

const TeamSection = () => {
  return (
    <Teams
      title="Meet Our Teams"
      description="Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases"
      id="teams"
    />
  );
};

const WorksSection = () => {
  return (
    <Works
      title="Showcase of Excellence"
      description="Discover the standout projects that exemplify our commitment to quality and innovation. See how we've helped businesses transform and succeed."
      id="works"
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      description={testimonials.description}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
      id="reviews"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: false,
      },
    },
  };
}
