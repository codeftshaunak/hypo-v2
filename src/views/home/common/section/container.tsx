import { cn } from "@/lib/utils";
import { JSX } from "react";

type Props = {} & JSX.IntrinsicElements["section"];

export const SectionContainer = (props: Props) => {
  const { children, className, ...others } = props;
  return (
    <section className={cn("container", className)} {...others}>
      {children}
    </section>
  );
};
