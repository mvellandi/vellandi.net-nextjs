import Meta from "/components/site/Meta";
import MainLayout from "/components/main/Layout";
import { getAllArticleCards } from "/lib/article";

export default function Articles({ data, preview }) {
  return (
    <>
      <Meta data={null} />
      <MainLayout preview={preview} data={data} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getAllArticleCards({ preview });
  return {
    props: {
      data,
      preview,
    },
    revalidate: 1,
  };
}