import React from "react";
import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import { Layout, SEOProps } from "../components/layout/layout";
import { Blocks } from "../components/utils/blocks-renderer";

import fs from "node:fs";
import path from "node:path";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function DynamicPage(props: Props) {
  const { data } = useTina(props);

  const seo: SEOProps = {
    title: data.page.seo_title,
    description: data.page.seo_description,
  };

  if (data?.page) {
    return (
      <Layout seo={seo}>
        <Blocks {...data.page} />
      </Layout>
    );
  }
  return null;
}

export const getStaticProps = async ({ params }) => {
  try {
    const tinaProps = await client.queries.contentQuery({
      relativePath: `${params.filename}.mdx`,
    });

    return {
      props: JSON.parse(JSON.stringify({ ...tinaProps })) as typeof tinaProps,
    };
  } catch (e) {
    return { notFound: true };
  }
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(process.cwd() + "/content/pages", "utf8") || [];
  const pages = files
    .map((f) => path.parse(f).name)
    .filter((f) => f !== "index");

  const paths = pages.map((page) => {
    return { params: { filename: page } };
  });

  return {
    paths,
    fallback: false,
  };
};
