import { useColorMode, Switch, IconButton } from "@chakra-ui/core";

export const DarkModeSwitch2 = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const icon = isDark ? "moon" : "sun";

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Search database"
      icon={icon}
    />
  );
};
