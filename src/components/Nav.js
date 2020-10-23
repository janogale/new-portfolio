import Link from "next/link";
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
      <Box mb={{ base: 12, md: 2 }}>
        <Tooltip
          hasArrow
          label="&#x1F590; Mukhtar Mahamed, Full Stack Developer"
          bg="green.500"
          color="gray.100"
          shouldWrapChildren
        >
          <Box>
            <Avatar size="lg" name="Mukhtar Mahamed" src="images/mukhtar.jpg">
              <AvatarBadge
                borderColor="gray.300"
                boxSize=".7em"
                bg="green.500"
              />
            </Avatar>
          </Box>
        </Tooltip>
      </Box>
      <Stack isInline spacing={[3, 4, 8]} align="center">
        <ChakraLink href="#about">About</ChakraLink>
        <ChakraLink href="#skillset">Skills</ChakraLink>
        <ChakraLink href="#projects">Projects</ChakraLink>
        <ChakraLink href="#contact">Contact</ChakraLink>
      </Stack>
    </Box>
  );
};
