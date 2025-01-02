export const getWebsiteQuery = (id: string) => `
query Website {
  website(stage: PUBLISHED, where: {id: "${id}"}) {
    title
    logoText
    logo {
      width
      height
      url
    }
    description
    heroSection {
      title
      description
    }
    heroImage {
      width
      height
      url
    }
    featuresSection {
      title
      description
    }
    servicesSection {
      title
      description
    }
    plansSection {
      title
      description
    }
    teamsSection {
      title
      description
    }
    worksSection {
      title
      description
    }
    reviewsSection {
      title
      description
    }
    faqSection {
      title
      description
    }
    footerSection {
      title
      description
    }
    footerLinks {
      title
      url
      path
      newTab
      text
    }
    navigationLinks {
      title
      url
      path
      newTab
      text
    }
    primaryLink {
      title
      url
      path
      newTab
      text
    }
    secondaryLink {
      title
      url
      path
      newTab
      text
    }
    seo {
      title
      description
      url
      openGraph {
        title
        description
        images {
          id
          width
          height
          url
        }
        videos {
          id
          width
          height
          url
        }
        url
      }
    }
  }
}
`;
