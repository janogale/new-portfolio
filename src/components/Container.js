import { Flex, useColorMode } from "@chakra-ui/core";

export const Container = (props) => {
  const { colorMode } = useColorMode("dark");

  const bgColor = { light: "#EFEFF5", dark: "#0a192f" };

  const color = { light: "black", dark: "#ccd6f6" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
