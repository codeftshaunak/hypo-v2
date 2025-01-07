import MasonryLayout from "@/components/common/masonry-layout";
import { MotionBox } from "@/components/common/motion";
import { ReviewType } from "@/types/review";
import { Variants } from "motion/react";
import {
  SectionContainer,
  SectionHeader,
} from "../../../../components/common/section";
import ReviewCard from "./card";

// ----------------------------------------------------------------------

const containerVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  hide: {},
};

const childVariants: Variants = {
  show: { opacity: 1, translateY: 0 },
  hide: { opacity: 0, translateY: 100 },
};

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  description?: string;
  reviews: ReviewType[];
};

const ReviewsSection = (props: Props) => {
  const { reviews, description, title } = props;
  return (
    <SectionContainer wrap id="reviews">
      <SectionHeader title={title} text={description} />

      <MotionBox
        variants={containerVariants}
        initial="hide"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <MasonryLayout
          items={reviews}
          renderElement={(item) => (
            <MotionBox variants={childVariants}>
              <ReviewCard review={item} />
            </MotionBox>
          )}
          className="gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
      </MotionBox>
    </SectionContainer>
  );
};

export default ReviewsSection;
