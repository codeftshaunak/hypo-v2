import { seoConfig } from "data/seo";
import { NextSeo, NextSeoProps } from "next-seo";

export interface SEOProps extends NextSeoProps {}

export const SEO = ({ title, description, ...props }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ ...seoConfig.openGraph, title, description }}
    titleTemplate={seoConfig.titleTemplate}
    twitter={seoConfig.twitter}
    {...props}
  />
);
