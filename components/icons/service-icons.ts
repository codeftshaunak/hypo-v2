import {
  FiBox,
  FiFlag,
  FiLock,
  FiSearch,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";

export const serviceIcons = [
  { key: "web_development", icon: FiBox },
  { key: "digital_marketing", icon: FiLock },
  { key: "seo_optimization", icon: FiSearch },
  { key: "graphic_design", icon: FiUserPlus },
  { key: "content_creation", icon: FiFlag },
  { key: "social_media_management", icon: FiTrendingUp },
];

export const getServiceIcon = (key?: string) => {
  const icon = serviceIcons.find((i) => i.key === key);

  if (icon) return icon;

  return serviceIcons[0];
};
