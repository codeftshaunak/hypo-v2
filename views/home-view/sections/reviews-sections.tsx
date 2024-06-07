import { Stack } from "@chakra-ui/react";
import * as React from "react";

import { Testimonial, Testimonials } from "components/testimonials";

import testimonials from "data/testimonials";

export const ReviewsSection = () => {
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
