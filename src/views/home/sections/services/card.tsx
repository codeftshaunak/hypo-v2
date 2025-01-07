import { getServiceIcon } from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ServiceType } from "@/types/service";

type Props = {
  service: ServiceType;
};

const ServiceCard = (props: Props) => {
  const { service } = props;
  const { icon, description, id, title } = service;
  const Icon = getServiceIcon(icon);
  return (
    <Card className="border-0 shadow-none h-full">
      <CardContent className="flex gap-5 px-0">
        <span className="inline-flex size-8 items-center justify-center bg-primary/15 shrink-0 rounded-full text-primary mt-1">
          <Icon.icon size={16} />
        </span>
        <div className="flex-1">
          <CardTitle className="text-lg mb-1">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
