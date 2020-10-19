import { extendTheme } from "@chakra-ui/core";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  lg: "62em",
  lg: "62em",
});

const overrides = {
  breakpoints,
  colors: {
    black: "#16161D",
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      // body: {
      //   bg: "#0a192f",
      //   color: "white",
      // },
      // styles for the `a`
      a: {
        _hover: {
          textDecoration: "underline",
          color: "teal.500",
        },
      },
    },
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
