import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Head,
} from "@chakra-ui/core";

import theme from "../theme";
import "../global-styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
