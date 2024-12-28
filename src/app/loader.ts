import { getFAQs } from "@/services/faq-service";
import { getFeatures } from "@/services/feature-service";
import { getMembers } from "@/services/member-service";
import { getProjects } from "@/services/project-service";
import { getReviews } from "@/services/review-service";
import { getServices } from "@/services/service-service";
import { getWebsite } from "@/services/website-service";

export async function getPageData() {
  const website = await getWebsite();
  const features = await getFeatures();
  const services = await getServices();
  const members = await getMembers();
  const projects = await getProjects();
  const reviews = await getReviews();
  const faqs = await getFAQs();

  if (!website.data) throw new Error("website fetch failed");
  if (website.errors?.length) throw new Error("website fetch failed");
  if (features.errors?.length) throw new Error("features fetch failed");
  if (services.errors?.length) throw new Error("services fetch failed");
  if (members.errors?.length) throw new Error("members fetch failed");
  if (projects.errors?.length) throw new Error("projects fetch failed");
  if (reviews.errors?.length) throw new Error("reviews fetch failed");
  if (faqs.errors?.length) throw new Error("faqs fetch failed");

  return {
    website: website.data,
    features: features.data || [],
    services: services.data || [],
    members: members.data || [],
    projects: projects.data || [],
    reviews: reviews.data || [],
    faqs: faqs.data || [],
    announcement: {
      title: "Support us by becoming a stargazer! 🚀 ",
      description:
        '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
      href: "https://github.com/saas-js/saas-ui",
      action: false,
    },
  };
}
