export const getProjectsQuery = () => `
query Projects {
  projects(stage: PUBLISHED) {
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
  project(stage: PUBLISHED, where: {slug: "${slug}"}) {
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
