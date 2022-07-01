import Head from "next/head";
import Navbar from "../components/Navbar/";
import axios from "axios";

Home.getInitialProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/head`);
    const title = res.data.title;
    const description = res.data.description;
    return { title, description };
  } catch (error) {
    return { error };
  }
};

export default function Home({ title, description }) {
  console.log(`dupadd: ${process.env.NEXT_PUBLIC_URL}/api/head`);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
