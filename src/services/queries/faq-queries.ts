export const getFAQsQuery = () => `
query FAQs {
  faqs {
    id
    question
    answer
  }
}
`;
