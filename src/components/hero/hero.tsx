import {
  Container,
  ContainerProps,
  Flex,
  FlexProps,
  Text,
  VStack,
} from "@chakra-ui/react";

interface HeroProps extends Omit<FlexProps, "title"> {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  containerProps?: ContainerProps;
}

export const Hero = ({
  title,
  description,
  children,
  containerProps,
  ...rest
}: HeroProps) => {
  return (
    <Flex py="20" alignItems="center" {...rest}>
      <Container {...containerProps}>
        <VStack spacing={[4, null, 8]} alignItems="flex-start">
          <Text as="h1" textStyle="h1" textAlign="left">
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="left"
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  );
};
