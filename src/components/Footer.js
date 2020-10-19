import {
  Flex,
  Link as ChakraLink,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/core";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Footer = (props) => {
  const bg = useColorModeValue("#1a202c", "gray.900");
  const color = useColorModeValue("#3f51b5", "#056b5a");
  return (
    <Flex
      as="footer"
      display="flex"
      justifyContent="center"
      position="relative"
      bg={bg}
      color={color}
      zIndex={10}
      width="100%"
      bottom="0"
      py="4rem"
      {...props}
    >
      <Text>
        Designed By
        <ChakraLink
          color="#09c7b6"
          ml={2}
          href="https://twitter.com/mmjanagale"
          isExternal
        >
          Janagale
          <Box display="inline" as={FaExternalLinkAlt} mx="4px" />
        </ChakraLink>
      </Text>
    </Flex>
  );
};
