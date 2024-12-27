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
      variant={"outline"}
      size={"icon"}
      className="size-8"
      onClick={onOpen}
    >
      <LucideMenu />
    </Button>
  );
};

export default OpenBtn;
