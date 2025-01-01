export const getFeaturesQuery = () => `
query Features {
  features(stage: PUBLISHED) {
    id
    title
    themeColor {
      hex
      css
    }
    thumbnail {
      height
      width
      url
    }
    description
  }
}

`;
