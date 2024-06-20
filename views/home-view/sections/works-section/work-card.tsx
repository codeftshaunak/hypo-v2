import {
  Box,
  Card,
  CardBody,
  Flex,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionBox } from "components/motion/box";
import { Variants } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { ProjectType } from "types/work";

type Props = {
  project: ProjectType;
  index: number;
};

// ----------------------------------------------------------------------

const tagsVariants: Variants = {
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
  show: {
    translateY: 0,
    opacity: 1,
  },
  hide: {
    translateY: -100,
    opacity: 0,
  },
  inview: {
    translateY: 0,
    opacity: 1,
  },
};

// ----------------------------------------------------------------------

const WorkCard = (props: Props) => {
  const { project } = props;
  const whileInView = useBreakpointValue(
    {
      base: "inview",
      md: undefined,
    },
    { ssr: true }
  );
  const colorScheme = useColorModeValue("white", "gray.700");

  return (
    <MotionBox
      as={Card}
      initial={"hide"}
      whileHover={"show"}
      whileInView={whileInView}
      rounded={"2xl"}
      sx={{ overflow: "hidden", position: "relative" }}
    >
      <Box
        sx={{
          aspectRatio: 16 / 9,
          userSelect: "none",
          position: "relative",
        }}
      >
        <Image
          src={project.thumbnail.url}
          alt={project.title}
          fill
          style={{ objectFit: "cover", userSelect: "none" }}
        />

        {/* {Array.isArray(project.technologies) && (
          <Flex
            position={"absolute"}
            bottom={0}
            left={0}
            width={"100%"}
            flexWrap={"wrap"}
            rowGap={1}
            columnGap={1}
            p={5}
          >
            {project.technologies.map((tech, index) => (
              <MotionBox
                variants={tagsVariants}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: index * 0.03,
                }}
                key={tech}
              >
                <Text
                  fontSize={"xs"}
                  textTransform={"uppercase"}
                  fontWeight={"600"}
                  py={0.5}
                  bgColor={colorScheme}
                  px={1.5}
                  rounded={"sm"}
                >
                  {tech}
                </Text>
              </MotionBox>
            ))}
          </Flex>
        )} */}
      </Box>
      <CardBody>
        <Text fontSize={"xl"} fontWeight={"bold"} mb={1} noOfLines={1}>
          {project.title}
        </Text>
        <Text fontSize={"md"} opacity={0.8} fontWeight={"medium"} noOfLines={3}>
          {project.description}
        </Text>
      </CardBody>

      <Flex
        width={"100%"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        gap={2}
        position={"absolute"}
        top={5}
        right={5}
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
          <MotionBox
            variants={buttonVariants}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          >
            <IconButton
              aria-label="Reference"
              title="Preview"
              icon={<FiExternalLink />}
              as={Link}
              href={project.reference}
              target="_blank"
              variant={"solid"}
              size={"md"}
            />
          </MotionBox>
        )}
      </Flex>
    </MotionBox>
  );
};

export default WorkCard;
