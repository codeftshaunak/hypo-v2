"use client";

import { useScroll } from "motion/react";
import React, { useEffect } from "react";

type Props = {
  height: number;
};

const IsScrolling = (props: Props) => {
  const { height } = props;
  const [y, setY] = React.useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", () => setY(scrollY.get()));
  }, [scrollY]);

  useEffect(() => {
    document.body.dataset.scrolling = y > height ? "1" : "0";
  }, [height, y]);

  return null;
};

export default IsScrolling;
