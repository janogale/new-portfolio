import {
  Stack,
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  Flex,
  Divider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/core";
import { FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Projects = (props) => {
  const color = useColorModeValue("#3f51b5", "#056b5a");
  return (
    <Box
      display="flex"
      flexDirection={["column"]}
      justifyContent="space-between"
    >
      <Heading my={4} textAlign="center" as="h2" color={color}>
        Projects
      </Heading>
      <Divider borderColor="gray.300" my={8} />

      <Flex justifyContent="space-around">
        <Box>
          <ChakraLink href="#">Project 1</ChakraLink>
        </Box>
        <Box>
          <ChakraLink href="#">Project 2</ChakraLink>
        </Box>
        <Box>
          <ChakraLink href="#">Project 3</ChakraLink>
        </Box>
      </Flex>
    </Box>
  );
};
