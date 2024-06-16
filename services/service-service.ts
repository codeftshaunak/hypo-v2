import { ApiResponseType } from "types/hygraph";
import { ServiceType } from "types/service";
import { asyncWrapper } from "./common";
import { getServicesQuery } from "./queries/service-queries";

export const getServices = asyncWrapper<ServiceType[]>(async () => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT as string;

  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getServicesQuery(),
    }),
  });

  const json: ApiResponseType<{ services: ServiceType[] }> =
    await response.json();

  if (json.errors?.length) throw json.errors;

  return json?.data?.services || [];
});
