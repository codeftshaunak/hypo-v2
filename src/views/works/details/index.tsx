import ContentsSection from "./sections/contents";
import HeroSection from "./sections/hero";
import PromotionSection from "./sections/promotion";

type Props = {};

const WorkDetailsView = (props: Props) => {
  return (
    <>
      <HeroSection
        title="ZeeWork - Freelance Platform"
        text="ZeeWork connects clients and freelancers, empowering the future of work. We developed it to ensure secure transactions and seamless"
        image={{
          width: 1440,
          height: 810,
          url: "https://ap-south-1.graphassets.com/clx620ila0fr007pm9z3lh67o/clxq8cy2u0ydn07oftfhshpxx",
        }}
      />
      <ContentsSection />
      <PromotionSection />
    </>
  );
};

export default WorkDetailsView;
