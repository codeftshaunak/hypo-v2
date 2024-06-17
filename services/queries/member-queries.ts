export const getMembersQuery = () => `
query Members {
  members {
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
    }
    avatar {
      width
      height
      url
    }
  }
}

`;
