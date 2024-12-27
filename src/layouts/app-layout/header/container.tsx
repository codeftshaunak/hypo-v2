"use client";

import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import { useScroll } from "framer-motion";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const HeaderContainer = (props: Props) => {
  const { children } = props;
  const ref = React.useRef<HTMLHeadingElement>(null);
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useScroll();
  React.useEffect(() => {
    return scrollY.on("change", () => setY(scrollY.get()));
  }, [scrollY]);

  const bg = useColorModeValue("whiteAlpha.700", "rgba(29, 32, 37, 0.7)");
  return (
    <Box
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      backdropFilter="blur(5px)"
      zIndex="sticky"
      borderColor="whiteAlpha.100"
      transitionProperty="common"
      transitionDuration="normal"
      bg={y > height ? bg : ""}
      boxShadow={y > height ? "md" : ""}
      borderBottomWidth={y > height ? "1px" : ""}
      {...props}
    >
      {children}
    </Box>
  );
};

export default HeaderContainer;
