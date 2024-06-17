import { Box, Card, CardBody, CardProps, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FeatureType } from "types/feature";
import { alpha } from "utils/color";
import { prefixZero } from "utils/number";

type Props = {
  feature: FeatureType;
  index: number;
} & CardProps;

export const FeatureCard = (props: Props) => {
  const { feature, index, ...rest } = props;
  return (
    <Card
      p={{ base: 0, sm: 2 }}
      border={"2px"}
      borderColor={feature.themeColor.hex}
      bgColor={alpha(feature.themeColor.hex, 0.3)}
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
          borderColor={feature.themeColor.hex}
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

        {/* {feature?.href && (
          <Link
            as={RouterLink}
            href={feature.href}
            display={"inline-block"}
            color="primary"
          >
            Learn More
          </Link>
        )} */}

        {feature.thumbnail && (
          <Stack justifyContent={"flex-end"} px={5} flex={1} mt={10}>
            <Box
              position={"relative"}
              aspectRatio={feature.thumbnail.width / feature.thumbnail.height}
              width={"100%"}
            >
              <Image src={feature.thumbnail.url} alt={feature.title} fill />
            </Box>
          </Stack>
        )}
      </CardBody>
    </Card>
  );
};
