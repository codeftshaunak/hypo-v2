"use client";

import { motion, MotionProps } from "motion/react";
import { JSX } from "react";
import useResponsiveProps, {
  MotionResponsiveProps,
} from "./use-responsive-props";

type Props = {} & MotionProps &
  JSX.IntrinsicElements["div"] &
  Omit<MotionResponsiveProps, "default">;

export const MotionDiv = (props: Props) => {
  const { children, sm, lg, xl, md, "2xl": twoXl, ...others } = props;
  const motionProps = useResponsiveProps({
    default: others,
    sm,
    lg,
    xl,
    md,
    "2xl": twoXl,
  });
  return <motion.div {...motionProps}>{children}</motion.div>;
};
