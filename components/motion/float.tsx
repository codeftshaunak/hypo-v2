import React from "react";
import { MotionBoxProps, MotionFlex } from "./box";

export const Float: React.FC<
  MotionBoxProps & { delay?: number; steps?: number[] }
> = (props) => {
  const { children, delay = 0.2, steps = [10, -10, 10], ...rest } = props;
  return (
    <MotionFlex
      animate={{ translateY: steps }}
      transition={{
        delay,
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "reverse",
      }}
      {...rest}
    >
      {children}
    </MotionFlex>
  );
};
