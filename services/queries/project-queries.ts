export const getProjectsQuery = () => `
query Projects {
  projects {
    id
    title
    description
    slug
    technologies
    reference
    thumbnail {
      width
      height
      url
    }
  }
}
`;
