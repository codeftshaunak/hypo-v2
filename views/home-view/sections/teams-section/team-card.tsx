import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { getSocialIcon } from "components/icons";
import { MotionBox } from "components/motion/box";
import { Variants } from "framer-motion";
import Image from "next/image";
import { MemberType } from "types/team";
import { getLinkHref } from "utils/get-link-href";

// ----------------------------------------------------------------------

type Props = {
  member: MemberType;
};

const detailsVariants: Variants = {
  show: { opacity: 1, translateY: 0 },
  hide: { opacity: 0, translateY: 100 },
};

// ----------------------------------------------------------------------

const TeamCard = (props: Props) => {
  const { member } = props;

  const whileInView = useBreakpointValue(
    {
      base: "show",
      md: undefined,
    },
    { ssr: true }
  );

  const memberDetails = (
    <>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        {member?.firstName} {member?.lastName}
      </Text>
      <Text fontSize={"sm"} opacity={0.7} fontWeight={"medium"}>
        {member?.position}
      </Text>

      <Flex alignItems={"center"} justifyContent={"center"} gap={1} mt={3}>
        {member.externalLinks.map((link) => {
          const iconDetails = getSocialIcon(link.icon);

          if (!iconDetails) return null;

          return (
            <IconButton
              key={link.title}
              aria-label={link.title}
              icon={<iconDetails.icon color={iconDetails.color} size={18} />}
              as={Link}
              href={getLinkHref(link)}
              target="_blank"
            />
          );
        })}
      </Flex>
    </>
  );

  return (
    <MotionBox
      initial={"hide"}
      whileHover={"show"}
      whileInView={whileInView}
      sx={{
        position: "relative",
        aspectRatio: 9 / 12,
        userSelect: "none",
        marginRight: 5,
        borderRadius: 10,
        overflow: "hidden",
      }}
      animate={"hide"}
    >
      <Image
        src={member.avatar.url}
        alt={member.firstName}
        fill
        style={{ objectFit: "cover", userSelect: "none" }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 5,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
        }}
      >
        <MotionBox
          variants={detailsVariants}
          layout
          sx={{
            backgroundColor: "background",
            textAlign: "center",
            py: 3,
            px: 2,
            borderRadius: 5,
          }}
          as={Stack}
          spacing={0.5}
        >
          {memberDetails}
        </MotionBox>
      </Box>
    </MotionBox>
  );
};

export default TeamCard;
