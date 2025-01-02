import { HYGRAPH_ENDPOINT } from "@/config/env";
import { ApiResponseType } from "@/types/hygraph";
import { PlanType } from "@/types/plan";
import { asyncWrapper } from "./common";
import { getPlansQuery } from "./queries/plan-queries";

export const getPlans = asyncWrapper<PlanType[]>(async () => {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getPlansQuery(),
    }),
    next: { tags: ["plans"] },
  });

  const json: ApiResponseType<{ plans: PlanType[] }> = await response.json();

  if (json.errors?.length) throw json.errors;

  return json?.data?.plans || [];
});
