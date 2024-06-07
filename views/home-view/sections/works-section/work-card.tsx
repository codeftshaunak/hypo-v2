import {
  Badge,
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionBox } from "components/motion/box";
import Image from "next/image";
import { FiBookOpen, FiExternalLink } from "react-icons/fi";
import { WorkItem } from "types/work";

type Props = {
  project: WorkItem;
  index: number;
};

const WorkCard = (props: Props) => {
  const { project, index } = props;

  const colorScheme = useColorModeValue("whiteAlpha", "black");

  return (
    <MotionBox
      initial={"initial"}
      whileHover={"hover"}
      whileTap={"hover"}
      whileFocus={"hover"}
      sx={{
        position: "relative",
        aspectRatio: 9 / 12,
        userSelect: "none",
        borderRadius: 10,
        overflow: "hidden",
      }}
      animate={"initial"}
    >
      <Image
        src={project.cover}
        alt={project.title}
        fill
        style={{ objectFit: "cover", userSelect: "none" }}
      />

      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
      >
        <MotionBox
          as={Stack}
          alignItems={"flex-start"}
          backgroundColor={"primary.600"}
          width={"100%"}
          height={"100%"}
          borderRadius={10}
          p={4}
          variants={{
            hover: { opacity: 1 },
            initial: { opacity: 0 },
            transition: {
              duration: 0.8,
            },
          }}
        >
          <Flex mb={"auto"} width={"100%"} alignItems={"center"} gap={2}>
            <Badge
              fontSize={"xl"}
              width={50}
              height={50}
              borderRadius={100}
              alignItems={"center"}
              justifyContent={"center"}
              display={"inline-flex"}
              colorScheme={colorScheme}
              variant={"solid"}
              mr={"auto"}
            >
              {index + 1}
            </Badge>

            {project?.caseStudyLink && (
              <IconButton
                aria-label="Case Study"
                title="Case Study"
                icon={<FiBookOpen />}
                as={Link}
                href={project.caseStudyLink}
                target="_blank"
                variant={"solid"}
              />
            )}
            {project.demoLink && (
              <IconButton
                aria-label="Demo"
                title="Preview"
                icon={<FiExternalLink />}
                as={Link}
                href={project.demoLink}
                target="_blank"
                variant={"solid"}
              />
            )}
          </Flex>
          <Text fontSize={"xl"} color={"white"} fontWeight={"bold"}>
            {project.title}
          </Text>
          <Text fontSize={"md"} color={"gray.100"} fontWeight={"medium"} mb={5}>
            {project.description}
          </Text>

          <Flex flexWrap={"wrap"} gap={1}>
            {project.technologies.map((tech) => (
              <Badge
                variant={"solid"}
                colorScheme={colorScheme}
                px={2}
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </Flex>
        </MotionBox>
      </Box>
    </MotionBox>
  );
};

export default WorkCard;
