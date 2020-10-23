import { useColorMode, Box } from "@chakra-ui/core";

import { FaMoon, FaSun } from "react-icons/fa";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode("dark");
  const isDark = colorMode === "dark";
  const icon = isDark ? FaMoon : FaSun;

  return (
    <Box
      onClick={toggleColorMode}
      _hover={{ cursor: "pointer" }}
      aria-label="change color mode"
      title="change color mode"
      as={icon}
    />
  );
};
