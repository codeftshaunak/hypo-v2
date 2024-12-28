import {
  SiBehance,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
} from "@icons-pack/react-simple-icons";
import { LucideGlobe2, LucideMail } from "lucide-react";

export const socialIcons = [
  { key: "website", icon: LucideGlobe2, color: "" },
  { key: "linkedin", icon: SiLinkedin, color: "" },
  { key: "x", icon: SiX, color: "" },
  { key: "instagram", icon: SiInstagram, color: "" },
  { key: "github", icon: SiGithub, color: "" },
  { key: "behance", icon: SiBehance, color: "" },
  { key: "email", icon: LucideMail, color: "" },
  { key: "facebook", icon: SiFacebook, color: "" },
];

export const getSocialIcon = (key?: string) =>
  socialIcons.find((s) => s.key === key) || socialIcons[0];
