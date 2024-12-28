import useBreakpoint from "@/hooks/use-breakpoint";
import { MotionProps } from "motion/react";

export type MotionResponsiveProps = {
  default?: MotionProps;
  sm?: MotionProps;
  md?: MotionProps;
  lg?: MotionProps;
  xl?: MotionProps;
  "2xl"?: MotionProps;
};

const breakpointOrder: Array<keyof MotionResponsiveProps> = [
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
];

const useResponsiveProps = (props: MotionResponsiveProps): MotionProps => {
  const breakpoint = useBreakpoint();

  // Determine the active props by cascading upward
  const resolvedProps = (): MotionProps => {
    const defaultProps = props.default || {};
    let breakpointProps = {};

    // Find the most specific props for the current or smaller breakpoint
    for (const point of breakpointOrder) {
      if (
        point === breakpoint ||
        breakpointOrder.indexOf(point) > breakpointOrder.indexOf(breakpoint)
      ) {
        break;
      }
      breakpointProps = { ...breakpointProps, ...(props[point] || {}) };
    }

    // Merge with defaults
    return { ...defaultProps, ...breakpointProps };
  };

  return resolvedProps();
};

export default useResponsiveProps;
