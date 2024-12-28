import { HYGRAPH_ENDPOINT } from "@/config/env";
import { FAQType } from "@/types/faq";
import { ApiResponseType } from "@/types/hygraph";
import { asyncWrapper } from "./common";
import { getFAQsQuery } from "./queries/faq-queries";

export const getFAQs = asyncWrapper<FAQType[]>(async () => {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getFAQsQuery(),
    }),
  });

  const json: ApiResponseType<{ faqs: FAQType[] }> = await response.json();

  if (json.errors?.length) throw json.errors;

  return json?.data?.faqs || [];
});
