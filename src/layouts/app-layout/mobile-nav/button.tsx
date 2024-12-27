import {
  IconButton,
  IconButtonProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

type Props = { ref: React.Ref<any> } & IconButtonProps;

export const MobileNavButton = (props: Props) => {
  const { ref, ...others } = props;
  return (
    <IconButton
      ref={ref}
      display={{ base: "flex", md: "none" }}
      fontSize="20px"
      color={useColorModeValue("gray.800", "inherit")}
      variant="ghost"
      icon={<AiOutlineMenu />}
      {...others}
      aria-label="Open menu"
    />
  );
};

export default MobileNavButton;
