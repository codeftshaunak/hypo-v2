import { Box, Card, CardBody, CardProps, Stack, Text } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import Image from "next/image";
import RouterLink from "routes/components/router-link";
import { FeatureItem } from "types/feature";
import { alpha } from "utils/color";
import { prefixZero } from "utils/number";

type Props = {
  feature: FeatureItem;
  index: number;
} & CardProps;

export const FeatureCard = (props: Props) => {
  const { feature, index, ...rest } = props;
  return (
    <Card
      p={{ base: 0, sm: 2 }}
      border={"2px"}
      borderColor={feature.themeColor}
      bgColor={alpha(feature.themeColor, 0.3)}
      {...rest}
    >
      <CardBody display={"flex"} flexDirection={"column"}>
        <Text
          as={"span"}
          display={"inline-flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px"}
          borderRadius={100}
          width={10}
          height={10}
          borderColor={feature.themeColor}
          mb={10}
        >
          {prefixZero(index)}
        </Text>

        <Text
          as={"h3"}
          fontWeight={"bold"}
          fontSize={"3xl"}
          mb={3}
          dangerouslySetInnerHTML={{ __html: feature.title }}
        />
        <Text
          as="p"
          fontSize={"md"}
          mb={5}
          dangerouslySetInnerHTML={{ __html: feature.description }}
        />

        {feature?.href && (
          <Link
            as={RouterLink}
            href={feature.href}
            display={"inline-block"}
            color="primary"
          >
            Learn More
          </Link>
        )}

        <Stack justifyContent={"flex-end"} px={5} flex={1} mt={10}>
          <Box position={"relative"} aspectRatio={320 / 250} width={"100%"}>
            <Image src={feature.thumbnailUrl} alt={feature.title} fill />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
