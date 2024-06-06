import { FaBehance } from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export const socialIcons = [
  { key: "linkedin", icon: FiLinkedin, color: "" },
  { key: "x", icon: FiTwitter, color: "" },
  { key: "instagram", icon: FiInstagram, color: "" },
  { key: "github", icon: FiGithub, color: "" },
  { key: "behance", icon: FaBehance, color: "" },
];

export const getSocialIcon = (key) => socialIcons.find((s) => s.key === key);
