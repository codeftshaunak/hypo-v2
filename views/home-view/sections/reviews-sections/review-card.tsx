import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReviewItem } from "types/review";

export interface Props extends CardProps {
  review: ReviewItem;
}

export const ReviewCard = (props: Props) => {
  const { review, ...rest } = props;

  return (
    <Card position="relative" {...rest}>
      <CardHeader display="flex" flexDirection="row" alignItems="center">
        <Avatar
          name={review.name}
          src={review.avatarUrl}
          size="sm"
          bg="transparent"
        />
        <Stack spacing="1" ms="4">
          <Heading size="sm">{review.name}</Heading>
          <Text color="muted" size="xs">
            {review.position}
          </Text>
        </Stack>
      </CardHeader>
      <CardBody>{review.description}</CardBody>
    </Card>
  );
};
