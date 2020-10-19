import {
  Stack,
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  List,
  ListItem,
  ListIcon,
  Icon,
  Flex,
  Divider,
} from "@chakra-ui/core";

import { FiGlobe } from "react-icons/fi";
import { RiFlutterFill } from "react-icons/ri";
import { AiOutlineAppstore, AiOutlineHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaAppStore,
} from "react-icons/fa";

export const SkillSet = (props) => {
  return (
    <Box
      display="flex"
      flexDirection={["column"]}
      justifyContent="space-between"
    >
      <Heading as="h2">About Me</Heading>
      <Text pt="8">
        I am a full stack software developer. I am passionate about web and
        Mobile App development. Specifically, focusing on Progressive Web Apps (
        <Text as="strong">PWA</Text>). building Apps with React Native and
        Flutter
      </Text>
      <Text pt="8">
        I live in beautiful city of Hargeisa, I love Learning and Teaching. I
        believe teaching is the best way to learn something deeply
      </Text>
      <Divider borderColor="gray.300" my={8} />
      <Heading as="h3" textAlign="center" fontSize="1.2rem" mb={8}>
        My Skill Set:-
      </Heading>
      {/* List */}
      <Flex
        justifyContent="space-around"
        alignItems={["center", "flex-start"]}
        flexDirection={["column", "row"]}
      >
        <Box>
          <ListTitle icon={FiGlobe} title="Web Development" />
          <List spacing={3} ml="8" mt={4}>
            <ListItem>
              <Box
                as={AiOutlineHtml5}
                size="1.5rem"
                mr="2"
                color="green.500"
                display="inline"
              />
              HTML
            </ListItem>
            <ListItem>
              <Box
                as={FaCss3Alt}
                size="1.5rem"
                mr="2"
                color="green.500"
                display="inline"
              />
              CSS
            </ListItem>
            <ListItem>
              <Box
                as={FaJsSquare}
                size="1.5rem"
                mr="2"
                color="green.500"
                display="inline"
              />
              JavaScript
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <Box
                as={FaNodeJs}
                size="1.5rem"
                mr="2"
                color="green.500"
                display="inline"
              />
              Node JS
            </ListItem>
            <ListItem>
              <Box
                as={FaReact}
                size="1.5rem"
                mr="2"
                color="green.500"
                display="inline"
              />
              React JS
            </ListItem>
          </List>

          <Divider display={["block", "none"]} my={6} />
        </Box>
        <Box>
          <ListTitle icon={AiOutlineAppstore} title="Mobile App Development" />
          <List spacing={3} ml="8" mt={4}>
            <ListItem>
              <Box
                as={FaReact}
                size="1.5rem"
                mr="2"
                color="green.500"
                display="inline"
              />
              React Native
            </ListItem>
            <ListItem>
              <Box
                as={FaAppStore}
                size="1.5rem"
                mr="2"
                color="green.500"
                display="inline"
              />
              Progressive Web App (<Text as="strong">PWA</Text>)
            </ListItem>
            <ListItem>
              <Box
                as={RiFlutterFill}
                size="1.5rem"
                mr="2"
                color="green.500"
                display="inline"
              />
              Flutter
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
};

function ListTitle({ icon, title }) {
  return (
    <Flex alignItems="center">
      <Box as={icon} size="24px" color="green.400" />
      <Text ml="3">{title}</Text>
    </Flex>
  );
}
