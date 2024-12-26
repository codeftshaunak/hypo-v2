export const getReviewsQuery = () => `
query Reviews {
  reviews {
    id
    name
    position
    message
    avatar {
      width
      height
      url
    }
  }
}

`;
