import {
  Stack,
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  Flex,
  Divider,
  useColorModeValue,
} from "@chakra-ui/core";
import { FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Contact = (props) => {
  const color = useColorModeValue("#3f51b5", "#056b5a");
  return (
    <Box
      display="flex"
      flexDirection={["column"]}
      justifyContent="space-between"
    >
      <Heading my={4} textAlign="center" as="h2" color={color}>
        Get In Touch
      </Heading>
      <Divider borderColor="gray.300" my={8} />

      <Flex justifyContent="space-around">
        <ChakraLink href="https://twitter.com/mmjanagale" isExternal>
          <Box as={FaTwitter} boxSize={12} />
        </ChakraLink>
        <ChakraLink href="https://github.com/janogale" isExternal>
          <Box as={FaGithub} boxSize={12} />
        </ChakraLink>
        <ChakraLink href="https://wa.me/252634220002?text=asc..." isExternal>
          <Box as={FaWhatsapp} boxSize={12} />
        </ChakraLink>
      </Flex>
    </Box>
  );
};
