"use client";

import { DOMMotionComponents, motion, MotionProps } from "motion/react";
import { JSX } from "react";
import useResponsiveProps, {
  MotionResponsiveProps,
} from "./use-responsive-props";

type ElementType = keyof DOMMotionComponents;

export type MotionBoxProps<T extends ElementType = "div"> = {
  element?: keyof DOMMotionComponents;
} & MotionProps &
  JSX.IntrinsicElements[T] &
  Omit<MotionResponsiveProps, "default">;

export const MotionBox = <T extends ElementType = "div">(
  props: MotionBoxProps<T>
) => {
  const {
    element = "div", // Default to div if no element is provided
    children,
    sm,
    lg,
    xl,
    md,
    "2xl": twoXl,
    ...others
  } = props;

  const motionProps = useResponsiveProps({
    default: others,
    sm,
    lg,
    xl,
    md,
    "2xl": twoXl,
  });

  const MotionComponent = motion[element];

  return <MotionComponent {...motionProps}>{children}</MotionComponent>;
};
