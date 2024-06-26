import { Stack } from "@chakra-ui/react";
import * as React from "react";

import { Testimonials } from "components/testimonials";

import { ReviewType } from "types/review";
import { ReviewCard } from "./review-card";

type Props = {
  reviews: ReviewType[];
  title?: string;
  description?: string;
};

export const ReviewsSection = (props: Props) => {
  const { reviews, title, description } = props;

  const columns = React.useMemo(() => {
    return reviews.reduce<Array<ReviewType[]>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, [reviews]);

  return (
    <Testimonials
      title={title}
      description={description}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
      id="reviews"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((review, i) => (
              <ReviewCard review={review} key={i} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};
