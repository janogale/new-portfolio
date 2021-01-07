import {
  Stack,
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  Tag,
  Flex,
  Divider,
  useColorModeValue,
} from "@chakra-ui/core";

export const About = (props) => {
  const color = useColorModeValue("#3f51b5", "#64ffda");
  return (
    <Box
      display="flex"
      flexDirection={["column"]}
      justifyContent="space-between"
    >
      <Text color="#8892b0">&#x1F590; I am</Text>
      <Heading
        my={4}
        textAlign={{ base: "center", md: "left" }}
        as="h2"
        color={color}
      >
        Mukhtar Mahamed - Web Dev
      </Heading>
      <Flex alignItems="center" ml={8}>
        <Text color="#8892b0" mr="4">
          aka
        </Text>

        <Tag size="lg" rounded="full" variant="solid" colorScheme="cyan" px="2">
          Janagale
        </Tag>
      </Flex>

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
    </Box>
  );
};
