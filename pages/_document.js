import { Html, Head, Main, NextScript } from "next/document";
import axios from "axios";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_URL}`;

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-slate-900 font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
