import { cn } from "@/lib/utils";
import { JSX } from "react";

type Props = { wrap?: boolean } & JSX.IntrinsicElements["section"];

export const SectionContainer = (props: Props) => {
  const { children, className, wrap, ...others } = props;
  return (
    <section
      className={cn(
        "container py-28",
        wrap ? "max-w-6xl w-full" : "",
        className
      )}
      {...others}
    >
      {children}
    </section>
  );
};
