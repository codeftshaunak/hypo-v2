export const getFAQsQuery = () => `
query FAQs {
  faqs(stage: PUBLISHED) {
    id
    question
    answer
  }
}
`;
