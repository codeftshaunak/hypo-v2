"use client";

import { useCalendly } from "@/contexts/calendly";
import { LinkType } from "@/types/hygraph";
import { Button, Icon } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  data: LinkType;
};

const PrimaryCTA = (props: Props) => {
  const { data } = props;
  const { onOpen } = useCalendly();

  return (
    <Button
      colorScheme="primary"
      size="lg"
      onClick={onOpen}
      rightIcon={
        <Icon
          as={FiArrowRight}
          sx={{
            transitionProperty: "common",
            transitionDuration: "normal",
            ".chakra-button:hover &": {
              transform: "translate(5px)",
            },
          }}
        />
      }
    >
      {data.title}
    </Button>
  );
};

export default PrimaryCTA;
