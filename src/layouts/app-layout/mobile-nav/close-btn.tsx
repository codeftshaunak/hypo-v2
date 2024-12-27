"use client";

import { Button } from "@/components/ui/button";
import { LucideX } from "lucide-react";

type Props = {
  onClose: () => void;
};

const CloseBtn = (props: Props) => {
  const { onClose } = props;
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="size-8"
      onClick={onClose}
    >
      <LucideX />
    </Button>
  );
};

export default CloseBtn;
