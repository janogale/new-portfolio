import Document, { Html, Head, Main, NextScript } from "next/document";
// pages/_document.js
import { ColorModeScript } from "@chakra-ui/core";

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
