export const getServicesQuery = () => `
query Services {
  services(stage: PUBLISHED) {
    id
    title
    description
    icon
  }
}

`;
