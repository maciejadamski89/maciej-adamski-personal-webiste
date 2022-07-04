import Head from "next/head";
import Navbar from "../components/Navbar/";
import { HeadContent } from "../content/Head";

export default function Home() {
  const title = HeadContent()[0].title;
  const description = HeadContent()[0].description;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{<Navbar />}</main>
    </>
  );
}
