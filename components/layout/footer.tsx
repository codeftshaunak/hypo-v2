import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link, LinkProps } from "@saas-ui/react";

import RouterLink from "routes/components/router-link";
import { WebsiteType } from "types/website";
import { getLinkHref } from "utils/get-link-href";
import { Logo } from "./logo";

export interface FooterProps extends BoxProps {
  columns?: number;
  website: WebsiteType;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 2, website, ...rest } = props;
  return (
    <Box bg="white" _dark={{ bg: "gray.900" }} {...rest}>
      <Container maxW="container.2xl" px="8" py="8">
        <Stack
          mb={8}
          alignItems="flex-start"
          maxWidth={{ base: "100%", lg: "50%" }}
        >
          <Flex>
            <Logo title={website?.footerSection?.title} logo={website?.logo} />
          </Flex>
          <Text fontSize="md" color="muted">
            {website?.footerSection?.description}
          </Text>
        </Stack>
        <SimpleGrid columns={columns}>
          <Stack spacing="8">
            <Copyright>
              Built by <Link href="/">{website?.title}</Link>
            </Copyright>
          </Stack>
          <HStack justify="flex-end" spacing="4" alignSelf="flex-end">
            {website?.footerLinks?.map((link, index) => (
              <FooterLink
                key={index}
                href={getLinkHref(link)}
                target={link?.newTab ? "_blank" : undefined}
              >
                {link.title}
              </FooterLink>
            ))}
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export interface CopyrightProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content;
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`;
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  );
};

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Link
      as={RouterLink}
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        textDecoration: "underline",
        transition: "color .2s ease-in",
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};
