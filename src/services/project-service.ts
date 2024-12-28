import { HYGRAPH_ENDPOINT } from "@/config/env";
import { ApiResponseType } from "@/types/hygraph";
import { ProjectType } from "@/types/work";
import { asyncWrapper } from "./common";
import { getProjectsQuery } from "./queries/project-queries";

export const getProjects = asyncWrapper<ProjectType[]>(async () => {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getProjectsQuery(),
    }),
  });

  const json: ApiResponseType<{ projects: ProjectType[] }> =
    await response.json();

  if (json.errors?.length) throw json.errors;

  return json?.data?.projects || [];
});
