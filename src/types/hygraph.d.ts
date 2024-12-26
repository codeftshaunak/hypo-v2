// Core Components ----------------------------------------------------------------------

export type AssetType = {
  width: number;
  height: number;
  url: string;
};

export type ColorType = {
  hex: string;
  css: string;
};

// Custom Components ----------------------------------------------------------------------

export type LinkType = {
  title: string;
  url?: string;
  icon?: string;
  path?: string;
  text?: string;
  newTab: boolean;
};

export type OpenGraphType = {
  title?: string;
  description?: string;
  url?: string;
  images: AssetType[];
  videos: AssetType[];
};

export type SectionHeaderType = {
  title?: string;
  description?: string;
};

export type SEOType = {
  title?: string;
  description?: string;
  keywords: string[];
  url?: string;
  openGraph: OpenGraphType;
};

// API Response ----------------------------------------------------------------------
export type ErrorResponseType = { message: string };

export type ApiResponseType<T> = {
  data: T | null;
  errors?: ErrorResponseType[];
};
