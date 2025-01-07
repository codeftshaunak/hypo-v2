import { BreadcrumbItem } from "@/components/common/breadcrumbs";
import { APP_URL } from "@/config/env";
import { CONTACT_MODAL_KEY } from "@/config/keys";
import { FAQType } from "@/types/faq";
import { ReviewType } from "@/types/review";
import { ServiceType } from "@/types/service";
import { MemberType } from "@/types/team";
import { WebsiteType } from "@/types/website";
import {
  BreadcrumbList,
  FAQPage,
  Organization,
  Person,
  Review,
  Service,
  WebSite,
  WithContext,
} from "schema-dts";

export const generateOrganizationSchema = (
  website: WebsiteType
): WithContext<Organization> => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${APP_URL}#organization`,
  name: website.title,
  url: website.seo?.url,
  logo: website.logo?.url,
  contactPoint: {
    "@type": "ContactPoint",
    url: `${website.seo?.url}?${CONTACT_MODAL_KEY}=true`,
    contactType: "Customer Support",
    areaServed: "Worldwide",
  },
  sameAs: website.footerLinks
    .map((item) => item.url)
    .filter((url) => typeof url === "string"),
});

export const generateServiceSchema = (
  service: ServiceType
): WithContext<Service> => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  provider: {
    "@id": `${APP_URL}#organization`,
  },
  areaServed: "Worldwide",
  serviceType: service.description,
});

export const generateWebsiteSchema = (
  website: WebsiteType
): WithContext<WebSite> => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: website.title,
  url: website?.seo?.url,
  sameAs: website.footerLinks
    .map((item) => item.url)
    .filter((url) => typeof url === "string"),
  provider: {
    "@id": `${APP_URL}#organization`,
  },
});

export const generateFaqSchema = (faqs: FAQType[]): WithContext<FAQPage> => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const generatePersonSchema = (
  member: MemberType
): WithContext<Person> => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: `${member.firstName} ${member.lastName}`,
  jobTitle: member.position,
  image: {
    "@type": "ImageObject",
    url: member.avatar.url,
    height: `${member.avatar.height}px`,
    width: `${member.avatar.width}px`,
  },
  worksFor: {
    "@id": `${APP_URL}#organization`,
  },
  sameAs: member.externalLinks
    .map((item) => item.url)
    .filter((url) => typeof url === "string"),
  url: `${APP_URL}#teams`,
});

export const generateReviewSchema = (
  review: ReviewType
): WithContext<Review> => ({
  "@context": "https://schema.org",
  "@type": "Review",
  author: {
    "@type": "Person",
    name: review.name,
    jobTitle: review.position,
    image: {
      "@type": "ImageObject",
      url: review.avatar.url,
      height: `${review.avatar.height}px`,
      width: `${review.avatar.width}px`,
    },
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  reviewBody: review.message,
  itemReviewed: {
    "@id": `${APP_URL}#organization`,
  },
});

export const generateBreadcrumbSchema = (
  items: BreadcrumbItem[]
): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    item: `${APP_URL}${item.href ?? ""}`,
  })),
});
