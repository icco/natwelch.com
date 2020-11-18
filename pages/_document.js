import Document, { Html, Head, Main, NextScript } from "next/document";

export default class WritingDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
