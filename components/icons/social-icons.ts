import { FaBehance, FaEnvelope, FaFacebook, FaGlobe } from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export const socialIcons = [
  { key: "website", icon: FaGlobe, color: "" },
  { key: "linkedin", icon: FiLinkedin, color: "" },
  { key: "x", icon: FiTwitter, color: "" },
  { key: "twitter", icon: FiTwitter, color: "" },
  { key: "instagram", icon: FiInstagram, color: "" },
  { key: "github", icon: FiGithub, color: "" },
  { key: "behance", icon: FaBehance, color: "" },
  { key: "email", icon: FaEnvelope, color: "" },
  { key: "facebook", icon: FaFacebook, color: "" },
];

export const getSocialIcon = (key?: string) =>
  socialIcons.find((s) => s.key === key) || socialIcons[0];
