"use client";

import { Button } from "@/components/ui/button";
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

type Props = {};

const ThemeToggler = (props: Props) => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      size={"icon"}
      variant="ghost"
      className="size-8"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <LucideSun /> : <LucideMoon />}
    </Button>
  );
};

export default ThemeToggler;
