export const getProjectsQuery = () => `
query Projects {
  projects {
    id
    title
    description
    slug
    reference
    thumbnail {
      width
      height
      url
    }
  }
}
`;

export const getProjectQuery = (slug: string) => `
query Project {
  projects(where: {slug: "${slug}"}) {
    id
    title
    description
    slug
    reference
    thumbnail {
      width
      height
      url
    }
    content {
      html
    }
  }
}
`;
