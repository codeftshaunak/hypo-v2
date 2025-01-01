import { HYGRAPH_ENDPOINT } from "@/config/env";
import { FeatureType } from "@/types/feature";
import { ApiResponseType } from "@/types/hygraph";
import { asyncWrapper } from "./common";
import { getFeaturesQuery } from "./queries/feature-queries";

export const getFeatures = asyncWrapper<FeatureType[]>(async () => {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getFeaturesQuery(),
    }),
    next: { tags: ["features"] },
  });

  const json: ApiResponseType<{ features: FeatureType[] }> =
    await response.json();

  if (json.errors?.length) throw json.errors;

  return json?.data?.features || [];
});
