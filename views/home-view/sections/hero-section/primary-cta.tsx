"use client";

import { Button, Icon } from "@chakra-ui/react";
import { useCalendly } from "contexts/calendly";
import { FiArrowRight } from "react-icons/fi";
import { LinkType } from "types/hygraph";

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
