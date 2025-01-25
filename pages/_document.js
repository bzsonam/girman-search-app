import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("in _document");
  return (
    <Html lang="en">
      <Head>{/* Add Tailwind CDN */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
