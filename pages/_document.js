import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-dark font-poppins text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
