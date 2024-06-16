import { LinkType, SectionHeaderType, SEOType } from "./hygraph";

export type WebsiteType = {
  heroSection: SectionHeaderType;
  featuresSection: SectionHeaderType;
  servicesSection: SectionHeaderType;
  teamsSection: SectionHeaderType;
  worksSection: SectionHeaderType;
  reviewsSection: SectionHeaderType;
  pricingSection: SectionHeaderType;
  faqSection: SectionHeaderType;
  footerSection: SectionHeaderType;
  footerLinks: LinkType[];
  navigationLinks: LinkType[];
  primaryLink: LinkType;
  secondaryLink: LinkType;
  seo: SEOType;
};
