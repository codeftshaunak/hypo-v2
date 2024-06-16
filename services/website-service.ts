import { ApiResponseType } from "types/hygraph";
import { WebsiteType } from "types/website";
import { asyncWrapper } from "./common";
import { getWebsiteQuery } from "./queries/website-queries";

export const getWebsite = asyncWrapper<WebsiteType>(async () => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT as string;
  const WEBSITE_ID = process.env.WEBSITE_ID as string;

  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getWebsiteQuery(WEBSITE_ID),
    }),
  });

  const json: ApiResponseType<{ website: WebsiteType }> = await response.json();

  if (json.errors?.length) throw json.errors;

  return json?.data?.website || null;
});
