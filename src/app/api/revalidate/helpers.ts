import { WEBSITE_ID } from "@/config/env";
import { revalidatePath, revalidateTag } from "next/cache";

export const revalidateWebsite = async (payload: any) => {
  if (payload?.data?.id === WEBSITE_ID) {
    revalidateTag("website");
    revalidatePath("/", "layout");
  }
};

export const revalidateFaq = async (payload: any) => {
  revalidateTag("faqs");
};

export const revalidateMemeber = async (payload: any) => {
  revalidateTag("members");
};

export const revalidateProject = async (payload: any) => {
  revalidateTag("projects");
  revalidatePath(`/works/${payload?.data?.slug}`);
};

export const revalidateService = async (payload: any) => {
  revalidateTag("services");
};

export const revalidateReview = async (payload: any) => {
  revalidateTag("reviews");
};

export const revalidateFeature = async (payload: any) => {
  revalidateTag("features");
};

export const revalidatePlan = async (payload: any) => {
  revalidateTag("plans");
};
