import { HYGRAPH_ENDPOINT } from "@/config/env";
import { ApiResponseType } from "@/types/hygraph";
import { ReviewType } from "@/types/review";
import { asyncWrapper } from "./common";
import { getReviewsQuery } from "./queries/review-queries";

export const getReviews = asyncWrapper<ReviewType[]>(async () => {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getReviewsQuery(),
    }),
  });

  const json: ApiResponseType<{ reviews: ReviewType[] }> =
    await response.json();

  if (json.errors?.length) throw json.errors;

  return json?.data?.reviews || [];
});
