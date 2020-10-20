import {
  Box,
  Heading,
  Spinner,
  Link as ChakraLink,
  Stack,
  Flex,
  Divider,
  useColorModeValue,
  Tooltip,
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
      <Stack spacing={8} mt={12} alignItems="center">
        <Heading fontSize="lg">Projects are heating up....</Heading>
        <Tooltip
          label="Awosome things are on the way"
          aria-label="coming soon"
          bg="green.400"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.400"
            color="green.600"
            size="xl"
          />
        </Tooltip>
      </Stack>
    </Box>
  );
};
