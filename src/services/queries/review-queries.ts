export const getReviewsQuery = () => `
query Reviews {
  reviews(stage: PUBLISHED) {
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
