import {
  Stack,
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  Flex,
  Divider,
  Icon,
} from "@chakra-ui/core";
import { FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Contact = (props) => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection={["column"]}
      justifyContent="space-between"
    >
      <Heading my={4} textAlign="center" as="h2" color="#64ffda">
        Get In Touch
      </Heading>
      <Divider borderColor="gray.300" my={8} />

      <Flex justifyContent="space-around">
        <ChakraLink href="https://twitter.com/mmjanagale" isExternal>
          <Box as={FaTwitter} size={12} />
        </ChakraLink>
        <ChakraLink href="https://github.com/janogale" isExternal>
          <Box as={FaGithub} size={12} />
        </ChakraLink>
        <ChakraLink href="https://wa.me/252634220002?text=asc..." isExternal>
          <Box as={FaWhatsapp} size={12} />
        </ChakraLink>
      </Flex>
    </Box>
  );
};
