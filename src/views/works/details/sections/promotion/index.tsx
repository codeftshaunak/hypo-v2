import { SectionContainer } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { CONTACT_MODAL_KEY, MEETING_MODAL_KEY } from "@/config/keys";
import Link from "next/link";

type Props = {};

const PromotionSection = (props: Props) => {
  return (
    <SectionContainer wrap className="pt-0">
      <Card className="p-6 sm:p-8 flex flex-col md:flex-row justify-between md:items-center gap-y-5">
        <div className="md:max-w-lg flex-1">
          <h2 className="text-sm font-semibold text-primary mb-2 uppercase">
            Contact Us
          </h2>
          <h6 className="text-2xl leading-tight font-bold mb-3">
            Ready to take plan? It’s just a matter of one click
          </h6>
          <CardDescription>
            Try it risk free — we don’t charge cancellation fees.
          </CardDescription>
        </div>
        <div className="flex flex-row md:flex-col md:w-48 gap-2">
          <Button asChild>
            <Link href={`?${MEETING_MODAL_KEY}=true`}>Book A Meeting</Link>
          </Button>
          <Button variant={"outline"}>
            <Link href={`?${CONTACT_MODAL_KEY}=true`}>Send A Mail</Link>
          </Button>
        </div>
      </Card>
    </SectionContainer>
  );
};

export default PromotionSection;
