import {
  FiBox,
  FiBriefcase,
  FiMonitor,
  FiSearch,
  FiSmartphone,
} from "react-icons/fi";

export const serviceIcons = [
  { key: "default", icon: FiBriefcase },
  { key: "web", icon: FiBox },
  { key: "desktop", icon: FiMonitor },
  { key: "seo", icon: FiSearch },
  { key: "mobile", icon: FiSmartphone },
];

export const getServiceIcon = (key?: string) => {
  const icon = serviceIcons.find((i) => i.key === key);

  if (icon) return icon;

  return serviceIcons[0];
};
