import { Button } from "@/components/ui/button";
import { LucideMoon } from "lucide-react";

type Props = {};

const ThemeToggler = (props: Props) => {
  return (
    <Button size={"icon"} variant="ghost" className="size-8">
      <LucideMoon />
    </Button>
  );
};

export default ThemeToggler;
