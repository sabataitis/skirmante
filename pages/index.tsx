import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout/layout";
import { Blocks } from "../components/utils/blocks-renderer";
import FourOhFour from "./404";

export default function IndexPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useTina(props);

  if (data?.global && data?.page) {
    return (
      <Layout data={data.global}>
        <Blocks {...data.page} />
      </Layout>
    );
  }
  console.error({data});

  return <FourOhFour/>
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.contentQuery({ relativePath: "index.mdx" });
  const props = {
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  };
  console.info({props});
  return {
    props: JSON.parse(JSON.stringify(props)) as typeof props,
  };
};
