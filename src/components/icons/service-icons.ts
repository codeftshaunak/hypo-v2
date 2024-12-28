import {
  LucideBox,
  LucideBriefcase,
  LucideMonitor,
  LucideSearch,
  LucideSmartphone,
} from "lucide-react";

export const serviceIcons = [
  { key: "default", icon: LucideBriefcase },
  { key: "web", icon: LucideBox },
  { key: "desktop", icon: LucideMonitor },
  { key: "seo", icon: LucideSearch },
  { key: "mobile", icon: LucideSmartphone },
];

export const getServiceIcon = (key?: string) => {
  const icon = serviceIcons.find((i) => i.key === key);

  if (icon) return icon;

  return serviceIcons[0];
};
