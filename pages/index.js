import Head from "next/head";
import Navbar from "../components/Navbar/";
import axios from "axios";

Home.getInitialProps = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/head`);
    const title = res.data.title;
    const description = res.data.description;
    return { title, description };
  } catch (error) {
    return { error };
  }
};

export default function Home({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Maciej Adamski Resume Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
