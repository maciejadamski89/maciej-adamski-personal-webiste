import Head from "next/head";
import Navbar from "../components/Navbar/";

export default function Home({ data }) {
  return (
    <>
      <Head>
        {/* <title>{title}</title> */}
        {/* <meta name="description" content={description} /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        {/* <Navbar dataa={data} /> */}
        {data.menu}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const address = `${process.env.NEXT_PUBLIC_URL}/api/menu`;
  const rest = await fetch(address);
  const data = await rest.json();
  console.log("getStaticProps data: ", data);

  return {
    props: {
      data,
    },
  };
}
