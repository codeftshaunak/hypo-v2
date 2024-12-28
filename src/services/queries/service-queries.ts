export const getServicesQuery = () => `
query Services {
  services {
    id
    title
    description
    icon
  }
}

`;
