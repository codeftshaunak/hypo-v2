import { NextRequest } from "next/server";
import {
  revalidateFaq,
  revalidateFeature,
  revalidateMemeber,
  revalidateProject,
  revalidateReview,
  revalidateService,
  revalidateWebsite,
} from "./helpers";

type RevalidateType =
  | "Website"
  | "FAQ"
  | "Member"
  | "Project"
  | "Service"
  | "Review"
  | "Feature";

export async function POST(req: NextRequest) {
  // Check for secret to confirm this is a valid request
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_TOKEN) {
    return Response.json({ message: "Invalid token" }, { status: 401 });
  }

  const body = await req.json();

  const type = body?.data?.__typename as RevalidateType | null;
  if (!type) {
    return Response.json({ message: "Invalid type" }, { status: 400 });
  }

  try {
    switch (type) {
      case "Website":
        revalidateWebsite(body);
        break;
      case "FAQ":
        revalidateFaq(body);
        break;
      case "Member":
        revalidateMemeber(body);
        break;
      case "Project":
        revalidateProject(body);
        break;
      case "Service":
        revalidateService(body);
        break;
      case "Review":
        revalidateReview(body);
        break;
      case "Feature":
        revalidateFeature(body);
        break;
      default:
        return Response.json({ message: "Invalid type" }, { status: 400 });
    }
  } catch (err) {
    return Response.json({ message: "Revalidation failed" }, { status: 500 });
  }

  return Response.json({ message: "Revalidation successful" });
}
