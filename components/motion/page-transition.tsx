import * as React from "react";

import { MotionBoxProps, MotionFlex } from "./box";

export const PageTransition: React.FC<MotionBoxProps> = (props) => (
  <MotionFlex
    initial={{ y: -24, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    {...props}
  />
);
