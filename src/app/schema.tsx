import {
  generateFaqSchema,
  generatePersonSchema,
  generateReviewSchema,
  generateServiceSchema,
} from "@/utils/schema-org";
import { getPageData } from "./loader";

type Props = Awaited<ReturnType<typeof getPageData>>;
const Schema = (props: Props) => {
  const { faqs, members, reviews, services, website } = props;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFaqSchema(faqs)),
        }}
      />
      {members.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema(item)),
          }}
        />
      ))}
      {services.map((item) => (
        <script
          key={item.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema(item)),
          }}
        />
      ))}
      {reviews.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateReviewSchema(item)),
          }}
        />
      ))}
    </>
  );
};

export default Schema;
