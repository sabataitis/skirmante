import React from "react";
import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout/layout";
import { Blocks } from "../components/utils/blocks-renderer";
import Head from "next/head";
import { defaultDescription, defaultTitle } from "../components/shared/seo";

export default function DynamicPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { data } = useTina(props);

  if (data?.global && data?.page) {
    return (
      <>
        <Head>
          <title>{data.page.seo_title || defaultTitle}</title>
          <meta
            name="description"
            content={`${data.page.seo_description || defaultDescription}`}
          />
        </Head>
        <Layout data={data.global}>
          <Blocks {...data.page} />
        </Layout>
      </>
    );
  }
  return null;
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `${params.filename}.mdx`,
  });
  const props = {
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  };
  return {
    props: JSON.parse(JSON.stringify(props)) as typeof props,
  };
};

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pageConnection();

  const paths =
    pagesListData.data.pageConnection?.edges?.map((page) => ({
      params: { filename: page?.node?._sys.filename },
    })) || [];

  return {
    paths,
    fallback: "blocking",
  };
};
