import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maciej Adamski</title>
        <meta name="description" content="Maciej Adamski Resume Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl text-slate-900">My Resume Page</h1>
      </main>
    </>
  );
}
