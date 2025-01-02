import { AssetType, LinkType, SectionHeaderType, SEOType } from "./hygraph";

export type WebsiteType = {
  title: string;
  description: string;
  logoText: string;
  logo: AssetType;
  heroSection: SectionHeaderType;
  heroImage: AssetType;
  featuresSection: SectionHeaderType;
  servicesSection: SectionHeaderType;
  plansSection: SectionHeaderType;
  teamsSection: SectionHeaderType;
  worksSection: SectionHeaderType;
  reviewsSection: SectionHeaderType;
  faqSection: SectionHeaderType;
  footerSection: SectionHeaderType;
  footerLinks: LinkType[];
  navigationLinks: LinkType[];
  primaryLink: LinkType;
  secondaryLink: LinkType;
  seo: SEOType;
};
