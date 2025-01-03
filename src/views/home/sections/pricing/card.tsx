import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MEETING_MODAL_KEY } from "@/config/keys";
import { cn } from "@/lib/utils";
import { PlanType } from "@/types/plan";
import { Check } from "lucide-react";
import Link from "next/link";

type Props = {
  plan: PlanType;
};

const TeamCard = (props: Props) => {
  const { plan } = props;
  return (
    <Card
      key={plan.name}
      className={cn(
        `flex flex-col hover:scale-105 duration-300 border-transparent hover:border-primary hover:shadow-xl`,
        plan.featured
          ? "border-primary shadow-lg hover:!border-primary hover:!shadow-xl group-hover:border-transparent group-hover:shadow-none"
          : ""
      )}
    >
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="text-4xl font-bold my-5">${plan.price}</div>
        <ul className="grid gap-2 text-sm text-gray-500">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={plan.featured ? "default" : "outline"}
          asChild
        >
          <Link href={`?${MEETING_MODAL_KEY}=true`}>Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
