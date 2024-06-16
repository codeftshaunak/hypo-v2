import {
  FiBox,
  FiFlag,
  FiLock,
  FiSearch,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";

export const serviceIcons = {
  web_development: FiBox,

  digital_marketing: FiLock,
  seo_optimization: FiSearch,
  graphic_design: FiUserPlus,
  content_creation: FiFlag,
  social_media_management: FiTrendingUp,
};

export const getServiceIcon = (key?: keyof typeof serviceIcons) => {
  if (key && serviceIcons[key] !== undefined) return serviceIcons[key];

  return FiBox;
};
