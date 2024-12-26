import { NextSeo, NextSeoProps } from "next-seo";

export interface SEOProps extends NextSeoProps {}

export const SEO = ({ ...props }: SEOProps) => <NextSeo {...props} />;
