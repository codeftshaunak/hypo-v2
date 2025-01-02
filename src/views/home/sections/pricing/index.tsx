import { SectionContainer, SectionHeader } from "@/components/common/section";
import { PlanType } from "@/types/plan";
import TeamCard from "./card";

type Props = {
  title?: string;
  description?: string;
  plans: PlanType[];
};

const PlanSection = (props: Props) => {
  const { plans, description, title } = props;
  return (
    <SectionContainer id="teams" wrap>
      <SectionHeader title={title} text={description} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <TeamCard key={plan.name} plan={plan} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default PlanSection;
