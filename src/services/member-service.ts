import { HYGRAPH_ENDPOINT } from "@/config/env";
import { ApiResponseType } from "@/types/hygraph";
import { MemberType } from "@/types/team";
import { asyncWrapper } from "./common";
import { getMembersQuery } from "./queries/member-queries";

export const getMembers = asyncWrapper<MemberType[]>(async () => {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getMembersQuery(),
    }),
    next: { tags: ["members"] },
  });

  const json: ApiResponseType<{ members: MemberType[] }> =
    await response.json();

  if (json.errors?.length) throw json.errors;

  return json?.data?.members || [];
});
