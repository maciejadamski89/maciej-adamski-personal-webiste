import Head from "next/head";
import Navbar from "../components/Navbar/";
import axios from "axios";
import { useMenu } from "../lib/useMenu";
import useSWR from "swr";

export default function Home({ title, description, data }) {
  console.log("data: ", data);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar data={data} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const address = `${process.env.NEXT_PUBLIC_URL}/api/menu`;
  const res = await fetch(address);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
