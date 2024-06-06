export type SocialLink = {
  key: string;
  url: string;
};

export type TeamMember = {
  firstName: string;
  lastName: string;
  position: string;
  photoUrl: string;
  links: SocialLink[];
};
