import {
  Badge,
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useBoolean,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionBox } from "components/motion/box";
import { Variants } from "framer-motion";
import Image from "next/image";
import { FaBook, FaBookOpen } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { ProjectType } from "types/work";

type Props = {
  project: ProjectType;
  index: number;
};

// ----------------------------------------------------------------------

const detailsVariants: Variants = {
  show: {
    opacity: 1,
    translateY: 0,
  },
  hide: {
    opacity: 0,
    translateY: "100%",
  },
};

const buttonVariants: Variants = {
  showButton: {
    translateY: 0,
    opacity: 1,
  },
  hideButton: {
    translateY: -100,
    opacity: 0,
  },
};

// ----------------------------------------------------------------------

const WorkCard = (props: Props) => {
  const { project, index } = props;
  const whileInView = useBreakpointValue(
    {
      base: "showButton",
      md: undefined,
    },
    { ssr: true }
  );

  const [showDetails, detailsOptions] = useBoolean();

  const colorScheme = useColorModeValue("whiteAlpha", "black");

  return (
    <MotionBox
      initial={"hideButton"}
      whileHover={"showButton"}
      whileInView={whileInView}
      sx={{
        position: "relative",
        aspectRatio: 9 / 12,
        userSelect: "none",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Image
        src={project.thumbnail.url}
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
          variants={detailsVariants}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.4,
          }}
          animate={showDetails ? "show" : "hide"}
        >
          <Flex
            mb={"auto"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            gap={2}
          >
            {/* {project?.slug && (
              <IconButton
                aria-label="Case Study"
                title="Case Study"
                icon={<FiBookOpen />}
                as={Link}
                href={`/project/${project.slug}`}
                target="_blank"
                variant={"solid"}
              />
            )} */}
            {project.reference && (
              <IconButton
                aria-label="Reference"
                title="Preview"
                icon={<FiExternalLink />}
                as={Link}
                href={project.reference}
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

      <Box position={"absolute"} top={5} left={5}>
        <MotionBox
          variants={buttonVariants}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        >
          <IconButton
            aria-label="Work Details"
            icon={showDetails ? <FaBookOpen /> : <FaBook />}
            onClick={detailsOptions.toggle}
            variant={"solid"}
            colorScheme="primary"
          />
        </MotionBox>
      </Box>
    </MotionBox>
  );
};

export default WorkCard;
