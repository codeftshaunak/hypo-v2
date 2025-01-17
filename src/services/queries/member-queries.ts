export const getMembersQuery = () => `
query Members {
  members(stage: PUBLISHED) {
    id
    firstName
    lastName
    position
    externalLinks {
      title
      url
      path
      text
      newTab
      icon
    }
    avatar {
      width
      height
      url
    }
  }
}

`;
