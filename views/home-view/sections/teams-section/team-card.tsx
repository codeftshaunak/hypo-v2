import { Box, Flex, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { MotionBox } from "components/motion/box";
import { getSocialIcon } from "data/icons";
import Image from "next/image";
import { TeamMember } from "types/team";

// ----------------------------------------------------------------------

type Props = {
  member: TeamMember;
};

const TeamCard = (props: Props) => {
  const { member } = props;

  const memberDetails = (
    <>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        {member?.firstName} {member?.lastName}
      </Text>
      <Text fontSize={"sm"} opacity={0.7} fontWeight={"medium"}>
        {member?.position}
      </Text>

      <Flex alignItems={"center"} justifyContent={"center"} gap={1} mt={3}>
        {member.links.map((link) => {
          const iconDetails = getSocialIcon(link.key);

          if (!iconDetails) return null;

          return (
            <IconButton
              key={link.key}
              aria-label={link.key}
              icon={<iconDetails.icon color={iconDetails.color} size={18} />}
              as={Link}
              href={link.url}
              target="_blank"
            />
          );
        })}
      </Flex>
    </>
  );

  return (
    <MotionBox
      initial={"initial"}
      whileHover={"hover"}
      whileInView={"inview"}
      sx={{
        position: "relative",
        aspectRatio: 9 / 12,
        userSelect: "none",
        marginRight: 5,
        borderRadius: 10,
        overflow: "hidden",
      }}
      className="team-card"
      animate={"initial"}
    >
      <Image
        src={member.photoUrl}
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
          variants={{
            hover: { opacity: 1, translateY: 0 },
            initial: { opacity: 0, translateY: 100 },
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            },
          }}
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
          display={{
            base: "none",
            md: "flex",
          }}
        >
          {memberDetails}
        </MotionBox>

        <MotionBox
          variants={{
            inview: { opacity: 1, translateY: 0 },
            initial: { opacity: 0, translateY: 100 },
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            },
          }}
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
          display={{
            base: "flex",
            md: "none",
          }}
        >
          {memberDetails}
        </MotionBox>
      </Box>
    </MotionBox>
  );
};

export default TeamCard;
