import { WebsiteType } from "@/types/website";
import { BoxProps, Container, Flex } from "@chakra-ui/react";
import { Logo } from "../logo";
import Navigation from "../navigation";
import HeaderContainer from "./container";

export interface HeaderProps extends Omit<BoxProps, "children"> {
  website: WebsiteType;
}

export const Header = (props: HeaderProps) => {
  const { website } = props;

  return (
    <HeaderContainer>
      <Container maxW="container.2xl" px="8" py="4">
        <Flex width="full" align="center" justify="space-between">
          <Logo logo={website?.logo} title={website?.logoText} scrollToTop />
          <Navigation
            navLinks={website?.navigationLinks}
            logo={website?.logo}
            title={website?.logoText}
          />
        </Flex>
      </Container>
    </HeaderContainer>
  );
};
