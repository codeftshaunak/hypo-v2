export const getFeaturesQuery = () => `
query Features {
  features {
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
