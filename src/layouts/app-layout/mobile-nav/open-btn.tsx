"use client";

import { Button } from "@/components/ui/button";
import { LucideMenu } from "lucide-react";

type Props = {
  onOpen: () => void;
};

const OpenBtn = (props: Props) => {
  const { onOpen } = props;
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className="size-8 p-0"
      onClick={onOpen}
    >
      <LucideMenu className="!size-5" />
    </Button>
  );
};

export default OpenBtn;
