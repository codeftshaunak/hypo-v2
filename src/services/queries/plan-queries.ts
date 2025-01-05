export const getPlansQuery = () => `
query Plans {
  plans(stage: PUBLISHED) {
    id
    name
    description
    price
    features
    featured
    cta
  }
}

`;
