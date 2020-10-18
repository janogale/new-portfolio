import {
  Stack,
  Box,
  Link as ChakraLink,
  Avatar,
  AvatarBadge,
  Tooltip,
  Divider,
} from "@chakra-ui/core";

export const Nav = (props) => {
  return (
    <Box
      as="nav"
      display="flex"
      flexDirection={["column", "row"]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Tooltip
        hasArrow
        label="&#x1F590; Mukhtar Mahamed, Full Stack Developer"
        bg="green.500"
        color="gray.100"
      >
        <Box>
          <Avatar size="lg" name="Mukhtar Mahamed" src="images/mukhtar.jpg">
            <AvatarBadge borderColor="gray.100" size="1em" bg="green.500" />
          </Avatar>
        </Box>
      </Tooltip>
      <Divider borderColor="white" my={4} orientation={["vertical"]} />
      <Stack isInline spacing={[3, 4, 8]} align="center">
        <ChakraLink href="#about">About</ChakraLink>
        <ChakraLink href="#skillset">Skills</ChakraLink>
        <ChakraLink>Projects</ChakraLink>
        <ChakraLink href="#contact">Contact</ChakraLink>
      </Stack>
    </Box>
  );
};
