import Head from "next/head";
import Hero from "/components/main/Hero";
import MainNav from "/components/main/Nav";
import MainItems from "/components/main/Items";
import { itemList, articleList } from "/data/listItems";
import { createClient } from "next-sanity";

export default function Home() {
  return (
    <>
      <Head>
        <title>Media and Content Design by Mario Vellandi</title>
        <meta name="description" content="meta content description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero as="section" />
      {/* Nav component with props indicating active button */}
      <main className="flex flex-col justify-center w-full">
        <MainNav active="Projects" />
        <MainItems items={itemList} />
      </main>
    </>
  );
}
